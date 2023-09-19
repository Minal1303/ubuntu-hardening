#!/bin/bash

# Check if script is being run as root
if [ "$EUID" -ne 0 ]; then
  echo "This script must be run as root."
  exit 1
fi

# Backup the SSH configuration file
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak

# Edit the SSH configuration file to disable SSH
sed -i 's/^#*Port 22/Port 0/' /etc/ssh/sshd_config
sed -i 's/^#*PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
sed -i 's/^#*PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config

# Restart the SSH service to apply changes
systemctl restart ssh

echo "SSH access has been blocked. Make sure you have an alternative method to access the system."

# Optionally, you may want to disable or uninstall the SSH server
 systemctl disable ssh
# apt remove openssh-server
