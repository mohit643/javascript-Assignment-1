// Create a human readable time format using the Date time object
// a. YYYY-MM-DD HH:mm
// b. DD-MM-YYYY HH:mm
// c. DD/MM/YYYY HH:mm


const date = new Date();
console.log(date.getFullYear() +'-'+ date.getMonth() +'-'+ date.getDate() +' '+ date.getHours() + ':'+ date.getMinutes());

console.log(date.getDate() +'-'+ date.getMonth() +'-'+ date.getFullYear() +' '+ date.getHours() + ':'+ date.getMinutes());

console.log(date.getDate() +'/'+ date.getMonth() +'/'+ date.getFullYear() +' '+ date.getHours() + ':'+ date.getMinutes());
