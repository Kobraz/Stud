const ul = document.getelementsById("authors");
        const list = document.createDocumentFragment();
        const url = "https://jsonplaceholder.typicode.com/users";

        fetch(url)
            .then((response) => {
                return.response.json();
            })
            .then((data) => {
                let authors = data;
                
            })