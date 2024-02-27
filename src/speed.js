
const ipcRenderer = require('electron').ipcRenderer;

// // why doesn't index.js work??/
// const backButton = document.getElementById('back');
// backButton.addEventListener('click',()=>{  
//     ipcRenderer.send('change-view-back');
// });   

const backButton = document.getElementById('back');
    backButton.addEventListener('click',()=>{  
        ipcRenderer.send('change-view-back');
    });   

// document.addEventListener('DOMContentLoaded',function(){
    
//     // let myButton = document.getElementById("start");
//     // myButton.addEventListener("click", () =>{
//     //     let txtBox = document.getElementById("upload").files[0].path; 
//     //     ipcRenderer.send("savePDF", txtBox);
//     //     ipcRenderer.send('change-view');
//     //     console.log('click');
//     // })

//     // why doesn't index.js work??/
//     const backButton = document.getElementById('back');
//     backButton.addEventListener('click',()=>{  
//         ipcRenderer.send('change-view-back');
//     });   

// })