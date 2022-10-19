// Boolean value is either true or false.
// a. Write three JavaScript statements which provide truthy value.
// b. Write three JavaScript statements which provide falsy value.


var x = Boolean(1>1);

if(x==true){
  console.log(`
              This is truthy Stetment becouse x is ${x};
  `)
}
else{
  console.log(`
              This is Falsy Statement becouse x is ${x};
  `)
}