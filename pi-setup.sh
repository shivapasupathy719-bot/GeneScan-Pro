#!/bin/bash

# GeneScan Pro: Raspberry Pi & NVIDIA Jetson Setup Script
# This script automates the installation of Node.js and dependencies.

# Exit on error
set -e

echo "--------------------------------------------------"
echo "GeneScan Pro: Edge Device Setup"
echo "--------------------------------------------------"

# 1. Update and Upgrade
echo "Updating system packages..."
sudo apt-get update && sudo apt-get upgrade -y

# 2. Install Node.js (Version 20)
if ! command -v node &> /dev/null; then
    echo "Installing Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "Node.js is already installed: $(node -v)"
fi

# 3. Install unzip if not present
if ! command -v unzip &> /dev/null; then
    echo "Installing unzip..."
    sudo apt-get install -y unzip
fi

# 4. Install Dependencies
echo "Installing project dependencies..."
npm install

# 5. Build the Application
echo "Building GeneScan Pro for production..."
npm run build

# 6. Install serve globally (optional)
echo "Installing serve globally..."
sudo npm install -g serve

echo "--------------------------------------------------"
echo "Setup Complete!"
echo "--------------------------------------------------"
echo "To run the app, use the following command:"
echo "npm run serve:prod"
echo ""
echo "Don't forget to set your GEMINI_API_KEY environment variable:"
echo "export GEMINI_API_KEY='your_api_key_here'"
echo "--------------------------------------------------"
