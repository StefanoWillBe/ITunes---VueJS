var app = new Vue({
    el: '#root',
    data: {
        cds: [],
        newFilter: [],
        copyCds: [],
        filterGenre: ""
    },
    methods: {

        filterGenreDisk() {
            this.cds=[];
            this.copyCds.forEach((object) => {

                const nuova = object.genre;
                const tutti = object

                if (this.filterGenre == nuova) {
                    this.cds.push(object);

                }else if (this.filterGenre == "Tutti") {
                    this.cds.push(tutti)
                }
                //    devo popolare la pagina in base al genere
            })
        },

    },

    mounted() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((element)=>{
               const objCds = element.data;
               this.cds = objCds.response;
               this.copyCds = this.cds;

               this.cds.forEach((element) => {
                  const genreNewArray = element.genre;

                  // controllo che non vengano pushati duplicati
                   if(!this.newFilter.includes( genreNewArray )){
                       this.newFilter.push(genreNewArray);
                   }
               })

                this.cds.sort(function(a,b){
                    return new Date(a.year) - new Date(b.year);
                });
            });

    },
});
Vue.config.devtools = true;
