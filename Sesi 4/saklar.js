// function saklar(action, lampNum) {
//     let lampu1 = document.getElementById("lampu1");
//     let lampu2 = document.getElementById("lampu2");
//     let lampu3 = document.getElementById("lampu3");

//     if (action == "on") {
//         if(lampNum == 1) {
//             lampu1.src = "assets/images/on.gif";
//         }
//         if(lampNum == 2) {
//             lampu2.src = "assets/images/on.gif";
//         }
//         if(lampNum == 3) {
//             lampu3.src = "assets/images/on.gif";
//         }
//     }

//     if (action == "off") {
//         if(lampNum == 1) {
//             lampu1.src = "assets/images/off.gif";
//         }
//         if(lampNum == 2) {
//             lampu2.src = "assets/images/off.gif";
//         }
//         if(lampNum == 3) {
//             lampu3.src = "assets/images/off.gif";
//         }
//     }

//     return lampu1;
//   }
function saklar(toggle) {
    const lampNum = toggle.id.replace("toggle", "");
    const lampu = document.getElementById(`lampu${lampNum}`);
  
    lampu.src = toggle.checked ? "assets/images/on.gif" : "assets/images/off.gif";
  }