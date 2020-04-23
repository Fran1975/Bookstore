class showPortada {
  constructor(titulo) {
    this.titulo = titulo;   
  }
}

// VUE
const miApp = new Vue({
    el: "#bookstore",
    data:{
        search: '',
        dataEnglish: [],
        
    
    },
    computed: {
      filteredDataEnglish() {
        return this.dataEnglish.filter(showPortada => {
          return showPortada.titulo.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },

    
 created(){
  fetch ("https://api.myjson.com/bins/1h3vb3", {
  method:"GET",
  }).then (function (response){ 
  if (response.ok) { 
   return response.json();
  }  
  }) .then(function (json){     
   miApp.dataEnglish = json.books;  
    console.log (miApp.dataEnglish)       
 
 }) .catch(function (error) {     
   console.log("Request failed: " + error.message);
  })
}


})






