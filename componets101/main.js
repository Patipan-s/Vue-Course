Vue.component('task-list', {
    template:`
    <div>
        <task v-for="task in tasks" v-if='task.complete'>{{ task.task }}</task>
    </div>
    `,
    data(){
        return{
           tasks:[
               {task:'go to the store', complete: true},
               {task:'go to the bang', complete: false},
               {task:'go to the market', complete: true},
               {task:'go to the kimyong', complete: false}
           ]
        };
    }
});

Vue.component('task', {
    template:'<li><slot></slot></li>',
});

new Vue({
    el: '#root',
});

