var app = new Vue({
    el: '#root',
    data: {
        cds: []
    },
    methods: {},
    mounted() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((element)=>{
               const objCds = element.data;
               this.cds = objCds.response;
            });
    },
});
Vue.config.devtools = true;
