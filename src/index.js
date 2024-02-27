// const { app, BrowserWindow, ipcMain } = require('electron');
// const path = require('path');
// var fs = require('fs');

// if (require('electron-squirrel-startup')){
//   app.quit();
// }

// const createWindow = () => {
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       contextIsolation: true,
      
//       nodeIntegration: true,

//       preload: path.join(__dirname, 'preload.js')
      
//     }
//   });

//   mainWindow.loadFile(path.join(__dirname,'src/index.html'));
//   mainWindow.webContents.openDevTools();
  
// }


// app.whenReady().then(() => {
//   // ipcMain.handle('ping', () => 'pong')
//   createWindow();
// });

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit();
// });

// ipcMain.on("savePDF", txtVal => {
//   fs.writeFile("c:\\Temporary\\file1.pdf",txtVal, (err) =>{// hope txtval works
//     if(!err){console.log("File written");}
//     else{
//       console.log(err);
//     }
//   });
// });


// app.on('activate', () => {
//   // On macOS it's common to re-create a window in the  
//   // app when the dock icon is clicked and there are no 
//   // other windows open.
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });


const ipcRenderer = require('electron').ipcRenderer;
// const electron = window.require('electron');
// const ipcRenderer  = electron.ipcRenderer;

// document.addEventListener('DOMContentLoaded',function(){
// let startButton = document.getElementById("start");
//     startButton.addEventListener("click", () =>{
//         let txtBox = document.getElementById("upload").files[0].path; 
//         ipcRenderer.send("savePDF", txtBox);
//         ipcRenderer.send('change-view');
//     })
// })
document.addEventListener('DOMContentLoaded',function(){
    
  let myButton = document.getElementById("start");
  myButton.addEventListener("click", () =>{
      let txtBox = document.getElementById("upload").files[0].path; 
      ipcRenderer.send("savePDF", txtBox);
      ipcRenderer.send('change-view');
      console.log('click');
  })

  // why doesn't index.js work??/
  // let backButton = document.getElementById('back');
  // backButton.addEventListener('click',()=>{  
  //     ipcRenderer.send('change-view-back');
  // });   

})


// element.addEventListener("click", function() {
//   // let txtBox = document.getElementById("upload").files[0].path; 
//   //       ipcRenderer.send("savePDF", txtBox);
//         ipcRenderer.send('change-view');
// });