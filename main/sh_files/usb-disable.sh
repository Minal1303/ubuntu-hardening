#!/bin/bash

# Update and upgrade packages
apt update
apt upgrade -y

# Remove unnecessary packages
apt autoremove -y

# Install and configure UFW (Uncomplicated Firewall)
apt install ufw -y
ufw allow ssh
ufw --force enable

# Disable root login
sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
service ssh restart

# Install and configure fail2ban
apt install fail2ban -y
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
systemctl enable fail2ban
systemctl start fail2ban

# Install and configure unattended-upgrades
apt install unattended-upgrades -y
cat <<EOF > /etc/apt/apt.conf.d/20auto-upgrades
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
EOF

cat <<EOF > /etc/apt/apt.conf.d/10periodic
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Download-Upgradeable-Packages "1";
APT::Periodic::AutocleanInterval "7";
APT::Periodic::Unattended-Upgrade "1";
EOF

# Block USB devices by creating a udev rule
echo 'ACTION=="add", SUBSYSTEMS=="usb", TEST=="authorized_default", ATTR{authorized_default}="0"' | tee /etc/udev/rules.d/99-disable-usb.rules
echo "USB device blocking is now active. To deactivate, remove the '/etc/udev/rules.d/99-disable-usb.rules' file."

# Reload udev rules
udevadm control --reload-rules
udevadm trigger

# Reboot the system to apply changes
reboot
