import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import sudo from "sudo-prompt";

const isProd = process.env.NODE_ENV === 'production';

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
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    // mainWindow.webContents.openDevTools();

    ipcMain.on("execute-script", (event, data) => {
      console.log(event);
      console.log(data);
      const scriptPath = `./${data}`
      // mainWindow.we
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
})();

// i

app.on('window-all-closed', () => {
  app.quit();

});

