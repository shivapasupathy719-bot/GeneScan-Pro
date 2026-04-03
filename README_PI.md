# GeneScan Pro: Deployment Guide for Raspberry Pi & NVIDIA Jetson

This guide provides step-by-step instructions for running **GeneScan Pro** on edge devices like the Raspberry Pi or NVIDIA Jetson Orin Nano.

## Prerequisites

- **OS:** Raspberry Pi OS (64-bit recommended) or NVIDIA JetPack (Ubuntu-based).
- **Node.js:** Version 20 or higher.
- **Internet Connection:** Required for initial setup and Gemini AI analysis.

## 1. Install Node.js

If you don't have Node.js installed, run the following commands on your device:

```bash
# Install Node.js using NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify the installation:
```bash
node -v
npm -v
```

## 2. Download and Extract the App

1.  In the AI Studio interface, click the **Settings** (gear icon) or the **Export** menu.
2.  Select **Download ZIP**.
3.  Transfer the ZIP file to your device (using SCP, SFTP, or a USB drive).
4.  Extract the ZIP:
    ```bash
    unzip genescan-pro.zip -d genescan-pro
    cd genescan-pro
    ```

## 3. Install Dependencies

Run the following command to install the required packages:

```bash
npm install
```

## 4. Environment Configuration

The app requires a **Gemini API Key**. You can set it as an environment variable:

```bash
export GEMINI_API_KEY="your_api_key_here"
```

To make this persistent, add it to your `~/.bashrc` file:
```bash
echo 'export GEMINI_API_KEY="your_api_key_here"' >> ~/.bashrc
source ~/.bashrc
```

## 5. Build and Run

For the best performance on edge devices, build the application and serve it as static files.

### Build the App:
```bash
npm run build
```

### Serve the App:
You can use the built-in `serve:prod` script:

```bash
npm run serve:prod
```

The app will be accessible at `http://<your-device-ip>:3000`.

## 6. Desktop & Kiosk Mode (Raspberry Pi)

To run GeneScan Pro as a standalone "desktop" application on your Raspberry Pi screen:

### Launch Kiosk Mode:
Run the provided kiosk script to open the app in a dedicated, fullscreen window:
```bash
chmod +x pi-kiosk.sh
./pi-kiosk.sh
```

### Create a Desktop Shortcut:
1.  Copy the `GeneScanPro.desktop` file to your Pi's desktop folder:
    ```bash
    cp GeneScanPro.desktop ~/Desktop/
    ```
2.  Make it executable:
    ```bash
    chmod +x ~/Desktop/GeneScanPro.desktop
    ```
3.  Double-click the icon on your desktop to launch GeneScan Pro instantly.

## 7. (Optional) Auto-Start on Boot

To have the app start automatically when the device boots, you can use `pm2`:

```bash
# Install pm2 globally
sudo npm install -g pm2

# Start the app with pm2
pm2 start "npm run serve:prod" --name genescan-pro

# Save the pm2 process list and set up startup script
pm2 save
pm2 startup
```
Follow the instructions provided by `pm2 startup` to complete the setup.

---
**GeneScan Pro Systems** | Advanced Biomedical Analysis
