#!/bin/bash
set -x  # Enable debugging

# Check if script is being run as root
if [ "$EUID" -ne 0 ]; then
  echo "This script must be run as root."
  exit 1
fi

# Path to the SSH configuration file
ssh_config="/etc/ssh/sshd_config"

# New SSH port number (modify this as needed)
new_ssh_port="22"

# Check if the SSH configuration file exists
if [ ! -f "$ssh_config" ]; then
  echo "SSH configuration file not found: $ssh_config"
  exit 1
fi

# Extract the current SSH port number from the configuration file
current_ssh_port=$(grep -E "^Port\s" "$ssh_config" | awk '{print $2}')

# Check if the port is properly formatted as a number
if ! [[ "$current_ssh_port" =~ ^[0-9]+$ ]]; then
  echo "The current SSH port is badly formatted: $current_ssh_port"
  echo "Fix the SSH configuration manually."
  exit 1
fi

# Check if the current SSH port is the desired port (change if needed)
if [ "$current_ssh_port" -eq "$new_ssh_port" ]; then
  echo "The SSH port is already properly configured as $new_ssh_port."
  exit 0
fi

# Update the SSH port to the desired port
sed -i "s/^Port .*/Port $new_ssh_port/" "$ssh_config"

# Restart the SSH service to apply changes
sudo systemctl restart ssh

echo "SSH port has been corrected to $new_ssh_port."

set +x  # Disable debugging
