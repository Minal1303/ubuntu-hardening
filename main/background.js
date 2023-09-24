import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import sudo from "sudo-prompt";
import si from "systeminformation";

const isProd = process.env.NODE_ENV === 'production';

async function getSystemInfo() {
  try {
    const cpuData = await si.cpu();
    const memData = await si.mem();
    const diskData = await si.diskLayout();
    const battery = await si.battery();

    return {
      cpu: cpuData,
      memory: memData,
      disks: diskData,
      battery
    };
  } catch (error) {
    console.error('Error fetching system information:', error);
    return null;
  }
}

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');

    ipcMain.handle("get-system-info", async (event, args) => {
      const systemInfo = await getSystemInfo();
      return systemInfo;
    })

    ipcMain.on("execute-script", (event, data) => {
      console.log(event);
      console.log(data);

      const options = {
        name: 'MineOS', // Replace with your app name
      };

      sudo.exec(`sh /home/ajinkya/ubuntu-hardening/main/sh_files/${data}`, options, function (error, stdout, stderr) {
        if (error) {
          console.error(`Error: ${error}`);
        } else {
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
          mainWindow.webContents.send("execute-script-response", stdout);

        }
      });
    })
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);

    ipcMain.handle("get-system-info", async (event, args) => {
      const systemInfo = await getSystemInfo();
      return systemInfo;
    })

    ipcMain.on("execute-script", (event, data) => {
      console.log(event);
      console.log(data);

      const options = {
        name: 'MineOS', // Replace with your app name
      };

      sudo.exec(`sh /home/ajinkya/ubuntu-hardening/main/sh_files/${data}`, options, function (error, stdout, stderr) {
        if (error) {
          console.error(`Error: ${error}`);
        } else {
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
          mainWindow.webContents.send("execute-script-response", stdout);

        }
      });
    })
  }

  // ipcMain.on("execute-script", (event, data) => {
  //   console.log(event);
  //   console.log(data);

  //   const options = {
  //     name: 'MineOS', // Replace with your app name
  //   };

  //   sudo.exec(`sh /home/ajinkya/ubuntu-hardening/main/sh_files/${data}`, options, function (error, stdout, stderr) {
  //     if (error) {
  //       console.error(`Error: ${error}`);
  //     } else {
  //       console.log(`stdout: ${stdout}`);
  //       console.log(`stderr: ${stderr}`);
  //       mainWindow.webContents.send("execute-script-response", stdout);

  //     }
  //   });
  // })
})();

// i

app.on('window-all-closed', () => {
  app.quit();

});

