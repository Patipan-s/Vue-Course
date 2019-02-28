Vue.component('message',{
    props:['title','body'],
    data(){
        return{
            inVisible: true

        }
    },
    template: `
        <article class="message" v-show="inVisible">
            <div class="message-header">
                <p>{{title}}</p>
                <button class="delete" aria-label="delete" @click="inVisible = false"></button>
            </div>
            <div class="message-body">
                {{body}}
            </div>
        </article>
            `
});

new Vue({

    el:'#root',

})