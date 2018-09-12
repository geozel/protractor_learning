function add(a,b) {

    return a+b;

}

console.log(add(2, 3));
console.log(add(100,101));
console.log(add(10,10));

console.log("------");

let a = 4;
let b = ["hello","world",4,"goodbye"]
console.log(b.length+" is the size of array b")

for(let i=0;i<b.length;i++) {

    console.log(b[i]);
}
console.log("------");

let c = new Array();

c[0] = "goodbye";
c[1] = 4;
c[2] = "world";
c[3] = "hello";
c[4] = "bad"
console.log(c);
console.log(c.length+" is the size of array c");


for (let j=c.length-1;j>=0;j--){

    console.log(c[j]);

}
console.log("------");


let name ="George";
console.log(name.charAt(3));
let newname=name.concat(" Zelina");
console.log(newname);

console.log("------");

console.log(name.indexOf("o"));

console.log("------");

console.log(name.slice(0,4));

console.log("------");

console.log(name.toUpperCase());

console.log("------");

console.log(name.trim());

console.log("------");

let name2=String("George");
console.log(name2);
Message Input

Jot something down