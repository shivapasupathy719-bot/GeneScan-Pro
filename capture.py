import time
import subprocess
import os
try:
    import RPi.GPIO as GPIO
except ImportError:
    print("RPi.GPIO not found. Please install it with 'sudo apt install python3-rpi-gpio'")
    # Mock GPIO for non-Pi environments
    class MockGPIO:
        BCM = 'BCM'
        IN = 'IN'
        PUD_UP = 'PUD_UP'
        FALLING = 'FALLING'
        def setmode(self, mode): pass
        def setup(self, pin, mode, pull_up_down=None): pass
        def add_event_detect(self, pin, mode, callback, bouncetime=None): pass
    GPIO = MockGPIO()

# --- Configuration ---
BUTTON_PIN = 17  # GPIO pin for the physical capture button
SAVE_DIR = os.path.expanduser("~/Pictures/GeneScan")
LATEST_IMAGE = os.path.join(SAVE_DIR, "latest_sample.jpg")

if not os.path.exists(SAVE_DIR):
    os.makedirs(SAVE_DIR)

def capture_image(channel=None):
    print("Capture triggered! Taking photo...")
    timestamp = time.strftime("%Y%m%d-%H%M%S")
    filename = f"sample_{timestamp}.jpg"
    filepath = os.path.join(SAVE_DIR, filename)
    
    # Use libcamera-still for high-res capture
    try:
        # --immediate: skip preview
        # --width/height: set resolution
        # -o: output file
        subprocess.run([
            "libcamera-still", 
            "--immediate", 
            "--width", "4056", 
            "--height", "3040", 
            "-o", filepath
        ], check=True)
        
        # Create a symbolic link to the latest image for easy access in the app
        if os.path.exists(LATEST_IMAGE):
            os.remove(LATEST_IMAGE)
        os.symlink(filepath, LATEST_IMAGE)
        
        print(f"Image saved to {filepath}")
        print(f"Latest sample updated at {LATEST_IMAGE}")
        
    except subprocess.CalledProcessError as e:
        print(f"Error capturing image: {e}")

def main():
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)
    
    # Detect button press (falling edge since we use pull-up)
    GPIO.add_event_detect(BUTTON_PIN, GPIO.FALLING, callback=capture_image, bouncetime=300)
    
    print(f"GeneScan AI Camera Service Started.")
    print(f"Press the button on GPIO {BUTTON_PIN} to capture.")
    print(f"Images will be saved in {SAVE_DIR}")
    
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("Service stopping...")
    finally:
        GPIO.cleanup()

if __name__ == "__main__":
    main()
