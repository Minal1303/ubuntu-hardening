#!/bin/bash

# Check if script is being run as root
if [ "$EUID" -ne 0 ]; then
  echo "This script must be run as root."
  exit 1
fi

# Stop the Tor service
systemctl stop tor

# Optionally, you can disable the Tor service on boot
systemctl disable tor

# Optionally, you can remove the Tor package
# apt remove tor

echo "Tor has been disabled."
