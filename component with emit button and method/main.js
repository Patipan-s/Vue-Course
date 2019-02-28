Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text with event
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

  new Vue({
    el: '#blog-posts-events-demo',
    data: {
      posts: [
        { id: 1, title: 'My journey with Vue', content: 'aaa', published: 'bbb', comments: 'ccc'},
        { id: 2, title: 'Blogging with Vue', content: 'aaa', published: 'bbb', comments: 'ccc'}],
      postFontSize: 1
    },
    methods: {
      onEnlargeText: function (enlargeAmount) {
        this.postFontSize += enlargeAmount
      }
    }
  })


