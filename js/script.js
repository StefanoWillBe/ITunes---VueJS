var app = new Vue({
    el: '#root',
    data: {
        cds: [],
    },
    methods: {},

    mounted() {
        axios
            .get("https://itunes.apple.com/search", {
                params: {
                    term: "Tiromancino",
                    country: "it",
                    Entity: "music",
                    limit: 100
                }
            })
            .then((response)=>{
               
                const objCds = response.data.results;
            
                

                for(let i = 0; i < objCds.length; i++) {
                    
                    


                    if (this.cds.filter(c => c.collectionName === objCds[i].collectionName).length == 0) {
                        this.cds.push(objCds[i]);
                    }
                    
                }

            });

    },
});
Vue.config.devtools = true;
