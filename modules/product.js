 export let product1={
    pname:"watch",
    cname:"Titan",
    price:1200,
    warranty:"2 years"
}

export let product2={
    pname:"watch",
    cname:"Casio",
    price:1500,
    warranty:"4 years"
}

export default function getData2()
{
    console.log(`cname : ${product1.cname},price:${product1.price}`);
    
}



