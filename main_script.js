// var url = './server-script.php';
// function get_cordinate(){
//     const element = document.querySelectorAll(".pHiOh")[2]
//     var windowX = window.screenX;
//     var windowY = window.screenY;
//     if (element) {
//         // Get the element's position information
//         const rect = element.getBoundingClientRect();
        
//         // Extract the coordinates
//         const ex = rect.left + window.scrollX; // Horizontal position
//         const ey = rect.top + window.scrollY;  // Vertical position
//         const x = windowX + ex
//         const y = windowY + ey
//         var data = {
//             buttonX: x,
//             buttonY: y,
//             status: true
//           };
          
//           // Send the JSON data to the server-side script using an HTTP request (e.g., AJAX)
//           var xhr = new XMLHttpRequest();
//           console.log(url)
//           xhr.open("POST", url, true);
//           xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//           xhr.onload = function(){
//             if(xhr.status === 200){
//                 console.log(xhr.responseText)
//             }
//           }
//           xhr.send(JSON.stringify(data));
        
//         console.log(`X-coordinate: ${x}, Y-coordinate: ${y}`);
//     } else {
//         console.log('Element not found.');
//     }
// }

// get_cordinate()
// setInterval(get_cordinate, 1500)
console.log("added")