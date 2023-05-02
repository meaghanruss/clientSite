const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

// Creates the application window
function createWindow() {
  const win = new BrowserWindow({
    width: 1920, 
    height: 1080,
      webPreferences: {
          contextIsolation: true,
          nodeIntegration: true,
          preload: path.join(__dirname, "./openFile.js"),
      },
    })
    win.maximize();
    win.loadFile('src/index.html');
}

// Function for when Vision or Portfolio Review is clicked
// Opens the file specified by the path
ipcMain.on('openFile', (sender, path) => {
    shell.openExternal(path);
});

// Function for opening Understanding You Folder
ipcMain.on('openFolder', (sender, path) => {
    shell.openPath(path);
})

// Runs createWindow function created above
app.whenReady().then(() => {
    createWindow();

    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length == 0) createWindow();
    });
});

// Closes window when application is closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});