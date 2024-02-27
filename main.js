const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
var fs = require('fs');


const {PythonShell} = require('python-shell'); //       use pyinstaller later to package thing into exe

// const {src} = require.config({
//   paths: {
//       "src": "/src"//It's the path of TwilioVideo folder
//   }
// })
// require(["src/index"], function () {

// });

// if (require('electron-squirrel-startup')){
//   app.quit();
// }

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      
      nodeIntegration: true,

      preload: path.join(__dirname, 'preload.js')
      
    }
  });

  mainWindow.loadFile(path.join(__dirname,'src/index.html'));
  // f12s the window
  mainWindow.webContents.openDevTools();

  // mainWindow.loadURL(url.format({
  //   pathname : path.join(__dirname,'src/index.html'),
  //   protocol:'file://',
  //   slashes:true
  // }))
  
}

ipcMain.on('change-view', ()=>{
  BrowserWindow.getAllWindows()[0].loadFile(path.join(__dirname,'src/speed.html'));
//   BrowserWindow.getAllWindows()[0].loadURL(url.format({
//     pathname : path.join(__dirname,'src/anotherWindow.html'),
//     protocol:'file',
//     slashes:true
// }));
});
ipcMain.on('change-view-back', ()=>{
  BrowserWindow.getAllWindows()[0].loadFile(path.join(__dirname,'src/index.html'));
//   BrowserWindow.getAllWindows()[0].loadURL(url.format({
//     pathname : path.join(__dirname,'src/anotherWindow.html'),
//     protocol:'file',
//     slashes:true
// }));
});




ipcMain.on("savePDF", ( IpcMainEvent,txtval) => {
  var txt = txtval;
  fs.writeFileSync("pdf.txt",txtval, (err) =>{// hope txtval works
  // fs.writeFileSync("file1.pdf",txtval,(err) =>{// hope txtval works
    if(!err){
      console.log("File written");
      
    }
    else{
      console.log(err);
    }
  });
  // start of python
  let pyshell = new PythonShell('py/pdftotext.py'); //
  // retrieves data from scrips
  pyshell.on('message', function(message) {
    // console.log(message);
  console.log("message from py");
  })
  // ends process
  pyshell.end(function (err) {
    if (err){
      throw err;
    };
    console.log('finished!');
  });
  
});




app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the  
  // app when the dock icon is clicked and there are no 
  // other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});