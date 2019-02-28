Vue.component('blog-post', {
    props: ['id','title'],
    template: `
        <div class="a">
            <p>{{ id }} <span style="margin-right:10px"></span> {{ title }}</p>
        </div>
    `
  })

new Vue({
    el: '#blog-post-demo',
    data: {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  })
