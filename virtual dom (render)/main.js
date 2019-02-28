new Vue ({
    el: '#root',
    data: {
        blogTitle: 'solution'
    },
    render: function (createElement) {
        return createElement('h1', this.blogTitle)
    }
})