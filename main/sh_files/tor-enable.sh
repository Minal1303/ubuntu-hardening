#!/bin/bash

# Check if script is being run as root
if [ "$EUID" -ne 0 ]; then
  echo "This script must be run as root."
  exit 1
fi

# Start the Tor service
systemctl start tor

# Optionally, enable the Tor service on boot
systemctl enable tor

# Optionally, install the Tor package if not already installed
# apt install tor

echo "Tor has been enabled."
