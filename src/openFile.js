const { contextBridge, ipcRenderer } = require('electron')

// sets path for file being opened
let openFile = (path) => {
    let fullPath = path + '\\Current.docx';
    ipcRenderer.send("openFile", fullPath);
}

// sets path for current folder
let openFolder = (path) => {
    ipcRenderer.send("openFolder", path);
}

// creates bridge to connect all files application files together
let bridge = {
    openFile,
    openFolder
}

contextBridge.exposeInMainWorld("Bridge", bridge);
