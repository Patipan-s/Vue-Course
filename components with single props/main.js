Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <div>
            <p>{{ post.content }}</p>
            <p>{{ post.published }}</p>
            <p>{{ post.comments }}</p>
        </div>
        <h3><slot name="header"></slot></h3>
      </div>
    `
  })

  new Vue({
    el: '#blog-post-demo',
    data: {
      posts: [
        { id: 1, title: 'My journey with Vue', content: 'aaa', published: 'bbb', comments: 'ccc'},
        { id: 2, title: 'Blogging with Vue', content: 'aaa', published: 'bbb', comments: 'ccc'}
      ]
    }
  })


