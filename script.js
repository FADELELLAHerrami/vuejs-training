
new Vue({
    el: '#app',
    data:{
        msg:"errami",
        Me:"fadel ellah",
        plateforme: "<a href='https://brightcoding.teachable.com/'>Bright coding</a>",
        image: "https://scontent.frak2-1.fna.fbcdn.net/v/t39.30808-6/271725177_100220319232728_5687923048541468904_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGr5Ul9EiRhgqN9Lj_e3S8PyRSfkqXtFEDJFJ-Spe0UQHMtFIrofUM_ZsEjplB-_mgqyY_k6h2QWSrBuV-pPmp0&_nc_ohc=BFiyuqNSsQEAX9gsIGA&_nc_ht=scontent.frak2-1.fna&oh=00_AT9tg7rCUuyi_YZLo-snVpGef6PC-ijYVA7BP5_4gRBxHw&oe=632DCD56"
    },
    methods:{
        saySalam: function(){
            return `hello  ${this.Me} ${this.msg}`;
        }
    }
})