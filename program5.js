// Write a code which can give grades to students according to theirs scores:
// a. 80-100, A
// b. 70-89, B
// c. 60-69, C
// d. 50-59, D
// e. 0-49, F

var x = 20;
if(x<=100 && x>=80){
  console.log('A');
}
else if(x>=70 && x<80){
  
    console.log('B');
}
if(x>=60 && x<70){
  
  console.log('C');
}
else if(x>=50 && x<60){
  console.log('D')
}
if(x>=0 && x<50){
  console.log('F')
}
