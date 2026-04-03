#!/bin/bash

# GeneScan Pro: Raspberry Pi Kiosk Mode Launcher
# This script launches Chromium in kiosk mode, pointing to the local GeneScan Pro instance.

# 1. Ensure the app is running (optional, assumes serve:prod is active)
# If you use PM2, it should already be running.

# 2. Launch Chromium in Kiosk Mode
# --kiosk: Fullscreen without browser chrome
# --app: Minimal UI
# --noerrdialogs: Suppress error dialogs
# --disable-infobars: Hide "Chrome is being controlled" bar
chromium-browser --kiosk --app=http://localhost:3000 --noerrdialogs --disable-infobars --check-for-update-interval=31536000
