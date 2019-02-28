new Vue ({
    el: '#root',
    data: {
        message: 'hello world'
    },
    filters: {
        capitalize: function (value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
        },
        capitalizes: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(0)
          }
    }
})
// Vue.filter('capitalize', function (value) {
//     if (!value) return ''
//     value = value.toString()
//     return value.charAt(0).toUpperCase() + value.slice(1)
// })
  
// new Vue({
//     el: '#root',
//     data: {
//         message: 'hello world'
//     }
// })