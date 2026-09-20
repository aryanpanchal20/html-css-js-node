// //used to store same (hetrogenes) elements
// //store differnt type of elements
// //mutable : og array can be change

// let arr=[1,2,3,4,"Aryan",true];
// console.log(arr.length);

// console.log("=========================================================================");


// //for iteration
// //1.for loop:

// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }
// console.log("=========================================================================");

// //2.for of loop:

// for(let a of arr)
// {
//     console.log(a);
// }

// console.log("=========================================================================");
// //3.for eachn loop -->functional  programming -->inbuilt functions

// //callback:func sending another func as argument
// //highorder:func receive another func as argument

// arr.forEach((val)=>{console.log(val);})


// //1.for each function : to iterate array
// let narr=[1,2,3,4,5];

// narr.forEach((val,index,ar)=>{console.log(val,index,ar);})

//  console.log("=========================================================================");
//  //2.map function:original array refernece  --generate new array

//  let newarr=narr.map(val=>val*3)

//  console.log(newarr);

//  console.log("=========================================================================");

//  //3.filter function:to filter function based on condition

//  let oddarr=narr.filter(val=>val%2!=0);

//  console.log(oddarr);

//  console.log("=========================================================================");

//  //reduce function():reduces array to generate single value

//  let sum=narr.reduce((currentval,nextval)=>{return currentval*nextval});
//  console.log(sum);

let arr1=[1,2,3,4,5];

arr1.forEach((val)=>{console.log(val);})