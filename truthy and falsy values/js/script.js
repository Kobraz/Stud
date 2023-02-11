// falsy values

// '' or "" or `` - empty strings
// 0 
// false
// undefined
// null
// NaN


// const test = {};

// if(test) {
//     console.log("truthy");
// }
// else {
//     console.log("falsy");
// }


const results = [
    {
        name: " ",
        alive: true
    },
    {
        name: "",
        alive: false
    },
];

results.forEach(function(result) {
    
    let alive = "hei";
    
    if(result.alive !== null) {
        alive = result.alive;
    }
    
    console.log(alive);
    
})