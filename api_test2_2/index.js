fetch("https://fakestoreapi.com/products").then((data)=>{
    
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<a href="details.html?id=${values.id}">${values.title}</a>`;
    });
    document.getElementById("output").innerHTML=tableData;

    //const apiArray = [${values.id},${values.title}, ${values.description}, ${values.price}, ${values.category}, ${values.rating}, ${values.image}]
})
