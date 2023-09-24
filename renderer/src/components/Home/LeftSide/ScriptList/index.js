import { Box, Button, Checkbox, IconButton, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, checkboxClasses } from '@mui/material'
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Close, Info } from '@mui/icons-material';
import { ipcRenderer } from 'electron';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rowsData = [
  {
    id: "1",
    instruction: "Disable USB",
    description: "Disabling USB functionality in a Ubuntu script is a crucial security measure, primarily aimed at fortifying system security. Achieved by adjusting system settings to curtail the utilization of USB ports and connected devices, this safeguard is invaluable in environments where safeguarding sensitive data is paramount, such as corporate networks and government systems.\n\nA noteworthy aspect of this script is its adaptability, empowering users to tailor it to their precise requirements. Customization options enable users to specify which USB ports or device categories to disable, ensuring alignment with their unique security policies.\n\nHowever, exercising prudence is essential during script implementation, as disabling USB functionality can impact peripheral devices. It necessitates a careful assessment of system necessities and adherence to security protocols, striking a balance between security enhancement and preserving essential functionality.",
    file: "usb-disable.sh"
  },
  {
    id: "2",
    instruction: "Enable USB",
    description: "Enabling USB functionality in Ubuntu via a script provides a straightforward means to restore the usability of USB ports and connected devices. This script simplifies the process by removing any previous USB blocking configurations or Udev rules that may have been in place. After executing the script with root privileges, USB access is reinstated, allowing users to connect and use USB devices without restrictions. Additionally, the script can be adapted to accommodate specific security requirements, ensuring a balance between system usability and controlled USB device access. This approach streamlines USB management, making it particularly valuable in environments where flexibility and security must coexist.",
    file: "usb-enable.sh"
  },
  {
    id: "3",
    instruction: "Improve formatting of port number and fix some other errors!",
    description: "Improve formatting of port number and fix some other errors!",
    file: "ssh_fix_port_formatting.sh"
  },
  {
    id: "4",
    instruction: "Block SSH Client",
    description: "Blocking the SSH client in Ubuntu is a significant security measure aimed at controlling remote access to a system. This action is essential in scenarios where restricting SSH connections is critical to safeguarding sensitive data, system integrity, and network security.\n\nAn important feature of this security practice is its adaptability. System administrators have the flexibility to configure rules and access policies according to their specific security requirements. Customization options include defining which IP addresses or user accounts should be denied SSH access, providing a tailored approach to security management.\n\nNevertheless, exercising caution and careful planning are imperative during the implementation of SSH client blocking. Misconfigurations or overly restrictive rules can disrupt legitimate access and lead to unintended consequences. Therefore, a meticulous assessment of security needs, thorough testing, and adherence to best practices are essential to strike the right balance between enhanced security and operational continuity.",
    file: "ssh-disable.sh"
  },
  {
    id: "5",
    instruction: "Enable SSH Client",
    description: "Enabling SSH access on an Ubuntu system through the use of a script streamlines and automates the process, making secure remote administration more accessible. By executing the script with root privileges, the SSH configuration is modified according to your specifications, including changes to the SSH port, authentication methods, and root login permissions. The script then restarts the SSH service to apply the new settings, granting you secure remote access. It's essential to bolster security further by implementing strong authentication methods, such as SSH keys, and configuring firewall rules for controlled access. This efficient approach simplifies SSH setup and maintenance across multiple Ubuntu systems, enhancing both convenience and system security.",
    file: "ssh-enable.sh"
  },
  {
    id: "6",
    instruction: "Restrict TOR",
    description: "Blocking Tor is a security measure aimed at preventing access to the Tor network, which is known for providing anonymous and potentially untraceable internet connections. This action is often taken in environments where anonymity poses a security risk or regulatory compliance is required.\n\nThe primary purpose of blocking Tor is to mitigate security threats, including the potential for unauthorized access, data exfiltration, or malicious activities that can be facilitated through the use of the Tor network.\n\nBlocking Tor can be achieved through various methods, such as configuring firewall rules, monitoring network traffic, or using specialized software solutions. Organizations may customize their approach to align with specific security policies and operational needs.\n\nHowever, it's important to carefully consider the implications of blocking Tor. This action may impact legitimate users who rely on Tor for privacy and security reasons. A balance must be struck between security objectives and respecting individual privacy rights and lawful use of technology.",
    file: "tor-disable.sh"
  },
  {
    id: "7",
    instruction: "Enable TOR",
    description: "Enabling Tor in Ubuntu allows you to enhance your online privacy and anonymity by routing your internet traffic through the Tor network. Tor, short for \"The Onion Router,\" is a network of volunteer-run servers that anonymize your internet activities by relaying your connections through multiple nodes, concealing your IP address and location. Enabling Tor on your Ubuntu system involves installing the Tor software, configuring applications to use it as a proxy, and possibly making adjustments to your network settings. Once enabled, Tor provides a layer of privacy and security, making it difficult for anyone to trace your online actions back to your identity. This is particularly valuable when you want to browse the web, access online services, or connect to SSH servers while maintaining anonymity and circumventing censorship.",
    file: "tor-enable.sh"
  },
  
]

export const ScriptList = () => {

  const [checked, setChecked] = useState(false);
  const [data, setData] = useState({ open: false, id: "", instruction: "", description: "", file: "" })
  const [selectedFiles, setSelectedFiles] = useState([]);

  const Script = () => {

    const handleExecute = ({ script }) => {
      ipcRenderer.send("execute-script", script)
    }

    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white"
        }}
      >
        {/* <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            color: "white"
          }}
        /> */}

        <TableContainer
          sx={{
            color: "color"
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    sx={{
                      color: "#05D9D7",
                      fontSize: "20px"
                    }}
                  // onClick={(e) => {
                  //   console.log(e.target)
                  // }}
                  />
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: "#05D9D7",
                      fontSize: "20px"
                    }}
                  >
                    ID
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: "#05D9D7",
                      fontSize: "20px"
                    }}
                  >
                    Instructions
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end"
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
                      color: "white",
                      fontWeight: 500,
                      borderRadius: "30px",
                      px: "15px",
                      py: "10px",
                      ":hover": {
                        backgroundColor: "#1D5352",
                        color: "white"
                      }
                    }}
                    disableRipple
                    onClick={handleExecute}
                  >
                    Execute
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsData.map((d, i) => {
                return (
                  <TableRow>
                    <TableCell>
                      <Checkbox
                        sx={{
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          color: "white"
                        }}
                      >
                        {d.id}
                      </Typography>
                    </TableCell>
                    <TableCell
                    >
                      <Box
                        sx={{
                          // backgroundColor: "blue",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          maxWidth: "54vw",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "white",
                            width: "42vw",
                            maxWidth: "42vw",
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            overflowWrap: 'break-word',
                          }}
                        >
                          {d.instruction}
                        </Typography>
                        <IconButton
                          onClick={() => setData({ open: !data.open, id: d.id, instruction: d.instruction, description: d.description, file: d.file })}
                        >
                          <Info
                            sx={{
                              color: "#1D5352"
                            }}
                          />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell

                    >
                      <Button
                        sx={{
                          border: "1px solid #1D5352",
                          color: "#1D5352",
                          borderRadius: "20px",
                          px: "15px",
                        }}
                        onClick={() => handleExecute({ script: d.file })}
                      >
                        Commit
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <ScriptDetailModal
          open={data.open}
          id={data.id}
          instruction={data.instruction}
          description={data.description}
          file={data.file}
          setData={setData}
          onClick={() => handleExecute({ script: data.file })}
        />
      </Box>
    )
  }

  return (
    <Box>
      <Script />
    </Box>
  )
}

const ScriptDetailModal = ({ open, id, instruction, description, file, setData, onClick }) => {
  return (
    <Modal
      open={open}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          backgroundColor: "black",
          width: "40vw",
          height: "50vh",
          border: "1px solid #1D5352",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          px: "20px"
          // alignItems: ""
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            py: "10px",
            alignItems: "flex-end"
          }}
        >
          <Box
            sx={{
              display: "flex",

            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "25px",
                fontWeight: 500,
                fontFamily: "Poppins"
              }}
            >
              {instruction}
            </Typography>

          </Box>
          <IconButton
            onClick={() => setData({ open: false })}
          >
            <Close />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
            gap: "15px",
            // py: "10px",
            pb: "10px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}
          >
            <Typography
              sx={{
                color: "white",
                maxHeight: "36vh",
                overflowY: "scroll"
              }}
            >
              {description}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse"
            }}
          >
            <Button
              sx={{
                border: "1px solid #1D5352",
                color: "#1D5352",
                borderRadius: "30px",
                px: "20px",
                py: "10px",
                ":hover": {
                  backgroundColor: "#1D5352",
                  color: "white"
                }
              }}
              onClick={onClick}
            >
              Commit
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}