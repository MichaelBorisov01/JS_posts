class Posts {

    render() {
        let page = 1
        let limit = 10
        let totalPages = 0
        let posts = []
        fetch('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _page: page,
                _limit: limit
            }
        })
            .then(response => response.json())
            .then(response => {
                totalPages = Math.ceil(100 / limit)
                posts = response

                let htmlPosts = '';
                posts.forEach(({id, title, body}) => {
                    htmlPosts += `
<li class="post-item">
 <div>${id}</div>
 <div><strong>Name:</strong> ${title}</div>
 <div><strong>Description:</strong> ${body}</div>
</li>
        
`
                });

                ROOT_POSTS.innerHTML = `
        <ul class="posts">
        ${htmlPosts}
        </ul>
        <div class="page_wrapper">
        <div>
        
</div>
</div>
        `
            })


    }


}

const postsPage = new Posts()
postsPage.render()


