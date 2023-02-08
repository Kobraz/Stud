// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => {
//         console.log(res.ok) //true
//         console.log(res.status) //200
//         return res.json()
//     }
// )

// fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     body: JSON.stringify({ name: "Roar" })
// })

// fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     body: JSON.stringify({ name: "Kyle" }),
//     headers: { "Content-Type": "application/json" }
// })

// fetch("https://jsonplaceholder.typicode.com/users/-1")
//     .then(res => {
//         console.log(res.ok) //false
//         console.log(res.status) //404
//     })

fetch("https://jsonplaceholder.typicode.com/users/-1")
    .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(res)
})
.then(data => console.log(data))
.catch(res => console.error(res.status))