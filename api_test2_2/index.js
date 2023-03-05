fetch("https://fakestoreapi.com/products").then((data)=>{
    
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<div id="${values.id}" class="items"><div id="img"><img class="image" src="${values.image}"></div><div id="item"><a href="details.html?id=${values.id}">${values.title}</a></div></div>`;
    });
    document.getElementById("output").innerHTML=tableData;

    //const apiArray = [${values.id},${values.title}, ${values.description}, ${values.price}, ${values.category}, ${values.rating}, ${values.image}]
})
