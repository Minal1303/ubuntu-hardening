
#!/bin/bash

# Check if script is being run as root
if [ "$EUID" -ne 0 ]; then
  echo "This script must be run as root."
  exit 1
fi

# Create a Udev rule file to block USB storage devices
USB_RULE_FILE="/etc/udev/rules.d/99-block-usb-storage.rules"

# Check if the rule file already exists, and if it does, back it up
if [ -f "$USB_RULE_FILE" ]; then
  mv "$USB_RULE_FILE" "$USB_RULE_FILE.bak"
fi

# Create the new Udev rule file to block USB storage devices
echo 'ACTION=="add", SUBSYSTEMS=="usb", DRIVERS=="usb-storage", RUN+="/bin/sh -c '\''echo 0 > /sys$env{DEVPATH}/authorized'\''"' > "$USB_RULE_FILE"

# Reload Udev rules to apply the changes
sudo udevadm control --reload-rules
sudo udevadm trigger

echo "USB device blocking has been enabled for USB storage devices."
echo "You may need to reboot the system for the changes to take effect."
