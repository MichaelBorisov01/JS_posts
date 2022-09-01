class Fetch {

    async fetchPosts() {
        try {
            alert('Loading...')
            let url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            alert('Success')
            return await response.json()
        } catch (e) {
            alert('Some mistakes with server')
            console.log(e)
        }
    }
}

const _fetch = new Fetch();