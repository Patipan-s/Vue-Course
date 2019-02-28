new Vue ({
    el: '#root',
    props: ['items'],
    render: function (createElement) {
        if (this.items.length) {
            return createElement('ul', this.items.map(function (item) {
            return createElement('li', item.name)
            }))
        } else {
            return createElement('p', 'No items found.')
        }
    }
})