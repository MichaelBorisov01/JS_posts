class Posts {

    render() {
        let posts = []

        _fetch.fetchPosts().then(response => {
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
      
        `
        })


    }


}

const postsPage = new Posts()
postsPage.render()