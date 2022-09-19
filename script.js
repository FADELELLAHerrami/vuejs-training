
new Vue({
    el: '#app',
    data:{
        msg:"errami",
        Me:"fadel ellah"
    },
    methods:{
        saySalam: function(){
            return `hello  ${this.Me} ${this.msg}`;
        }
    }
})