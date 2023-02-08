function jsonFetch(url, { body, headers, ...options } = {}) {
    return fetch(url, {
        headers: { "Content-Type": "application/json", ...headers }
        body: JSON.stringify(body)
        ...options
    })
    .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(res)
    })
    .then(res => res.json())
}