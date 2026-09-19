//used to store same (hetrogenes) elements
//store differnt type of elements
//mutable : og array can be change

let arr=[1,2,3,4,"Aryan",true];
console.log(arr.length);

console.log("=========================================================================");


//for iteration
//1.for loop:

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log("=========================================================================");

//2.for of loop:

for(let a of arr)
{
    console.log(a);
}

console.log("=========================================================================");
//3.for eachn loop -->functional  programming -->inbuilt functions

//callback:func sending another func as argument
//highorder:func receive another func as argument

arr.forEach((val)=>{console.log(val);})

