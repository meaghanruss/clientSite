const { contextBridge, ipcRenderer } = require('electron')
const { cwd } = require('process')

// sets path for file being opened
let openFile = (path) => {
    let fullPath = cwd() + '\\Understanding You\\' + path + '\\Current.docx';
    ipcRenderer.send("openFile", fullPath);
}

// sets path for current folder
let openFolder = (path) => {
    let fullPath = cwd() + '\\Understanding You';
    ipcRenderer.send("openFolder", fullPath);
}

// creates bridge to connect all files application files together
let bridge = {
    openFile,
    openFolder
}

contextBridge.exposeInMainWorld("Bridge", bridge)