// const { contextBridge, ipcRenderer } = require('electron')


// contextBridge.exposeInMainWorld(
//     "api", {
//         send: (channel, data) => {
//             // whitelist channels
//             let validChannels = ["toMain"];
//             if (validChannels.includes(channel)) {
//                 ipcRenderer.send(channel, data);
//             }
//         },
//         receive: (channel, func) => {
//             let validChannels = ["fromMain"];
//             if (validChannels.includes(channel)) {
//                 // Deliberately strip event as it includes `sender` 
//                 ipcRenderer.on(channel, (event, ...args) => func(...args));
//             }
//         }
//     }
// );


// document.addEventListener('DOMContentLoaded',function(){
    
//     let myButton = document.getElementById("start");
//     myButton.addEventListener("click", () =>{
//         let txtBox = document.getElementById("upload").files[0].path; 
//         ipcRenderer.send("savePDF", txtBox);
//         ipcRenderer.send('change-view');
//         console.log('click');
//     })

//     // why doesn't index.js work??/
//     let backButton = document.getElementById('back');
//     backButton.addEventListener('click',()=>{  
//         ipcRenderer.send('change-view-back');
//     });   

// })