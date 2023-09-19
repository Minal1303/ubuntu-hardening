#!/bin/bash

# Remove the USB blocking udev rule
sudo rm /etc/udev/rules.d/99-disable-usb.rules

# Reload udev rules
sudo udevadm control --reload-rules
sudo udevadm trigger

# Inform the user
echo "USB device blocking has been deactivated."

# Optionally, you can reboot the system for the changes to take full effect
 sudo reboot
