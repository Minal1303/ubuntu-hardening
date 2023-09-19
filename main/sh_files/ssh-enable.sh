#!/bin/bash

# Check if script is being run as root
if [ "$EUID" -ne 0 ]; then
  echo "This script must be run as root."
  exit 1
fi

# Restore the SSH configuration file from backup
if [ -f /etc/ssh/sshd_config.bak ]; then
  cp /etc/ssh/sshd_config.bak /etc/ssh/sshd_config
else
  echo "Backup configuration file not found. Exiting."
  exit 1
fi

# Restart the SSH service to apply changes
systemctl restart ssh

echo "SSH access has been re-enabled."

# Optionally, you may want to enable the SSH server on boot
systemctl enable ssh
