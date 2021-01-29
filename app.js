/*
/!*
console.log('gooo');
let a;
a = '9';
console.log(a + 11);
function test() {
    console.log('node'+9)
}
test();
const b = () => {
    console.log('node'+ 10)
}
b();
const c =[ 1, 3, 5, 10];
console.log(c[2]);*!/
let a = 5;
let b = 5;
let c = 5;
function t() {
   if((a>b)&&(a>c)){return a }
   else{
       if((c>a)&&(c>b)){return c}
       else{if((b>a)&&(b>c)) {return b}
            else{return "a=b=c"}
       }
   }
}

console.log(t());
*/
// read file
//way1 this way  NO thinking and read file NOW
const fs = require('fs');
fs.readFile('workWithFile.txt','utf-8',(err,data) =>{
    console.log(data);
});
//way2 .this way thinking and read fle
let text =fs.readFileSync('t2.txt','utf-8');
console.log(text)
console.log('+++++++++++++');
//read direct/ (all file)
fs.readdir('one',(err,data) =>{
    console.log(data);
    data.forEach(file =>{
        console.log(file);
    });
});