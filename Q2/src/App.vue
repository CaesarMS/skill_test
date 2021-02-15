<template>
  <div>
    1. <span>{{getOne()}}</span> <br>
    2. <span>{{getTwo()}}</span> <br>
    3. <span>{{getThree()}}</span> <br>
    4. <span>{{getFour()}}</span> <br>
    5. <span>{{getFive()}}</span> <br>
    6. <span>{{getSix()}}</span> <br>
    7. <span>{{getSeven()}}</span> <br>
  </div>
</template>

<script>

export default {
  data () {
    return {
      fileContent: null,
      fileToRender: "https://gist.githubusercontent.com/dhamanutd/6993984928506eea49908c2e3fcbc628/raw/65e5c2b0874f6efefb99db824cff922ca9435193/profile_list.md",
      rawContent: null
    }
  },
  created: function() {
    //  const fileToRender = `./assets/documentation/general/welcome.md`;
    //const rawContent = ""; // Read the file content using fileToRender
    // this.fileContent = "### marked(rawContent) should get executed";
    this.getContent();
  },
  methods: {
    getContent() {
      // this.fileContent = "rendering ";
      // var self;
      this.$http.get(this.fileToRender).then(
        response => {
          // get body data
          this.fileContent = JSON.parse(response.body.substring(3,response.body.length-3).replace(/articles:/g,'articles'));
          console.log(this.fileContent);
        },
        response => {
          // error callback
          this.fileContent = "An error ocurred";
        }
      );
    },
    getOne(){
      let users = [];
      this.fileContent.forEach(file => {
        if(file.profile.phones.length === 0){
          users.push(file.username);
        }
      });

      return (users.length > 0)? users.join():'kosong';
    },
    getTwo(){
      let users = [];
      this.fileContent.forEach(file => {
        if(file.articles.length > 0){
          users.push(file.username);
        }
      });

      return (users.length > 0)? users.join():'kosong';
    },
    getThree(){
      let users = [];
      this.fileContent.forEach(file => {
        if(file.profile.full_name.toLowerCase().includes('annis')){
          users.push(file.username);
        }
      });

      return (users.length > 0)? users.join():'kosong';
    },
    getFour(){
      let users = [];
      this.fileContent.forEach(file => {
        file.articles.forEach(article => {
          if(article.published_at.substring(0,4) === '2020'){
            users.push(file.username);
          }
        })
        
      });

      return (users.length > 0)? users.join():'kosong';
    },
    getFive(){
      let users = [];
      this.fileContent.forEach(file => {
        if(file.profile.birthday.substring(0,4) === '1986'){
          users.push(file.username);
        }
        
      });

      return (users.length > 0)? users.join():'kosong';
    },
    getSix(){
      let users = [];
      this.fileContent.forEach(file => {
        file.articles.forEach(article => {
          if(article.title.toLowerCase().includes('tips')){
            users.push(file.username);
          }
        })
        
      });

      return (users.length > 0)? users.join():'kosong';
    },
    getSeven(){
      let users = [];
      for(let i=0; i<this.fileContent.length; i++){
        for(let j=0; j<this.fileContent[i].articles.length; j++){
          let target = new Date('2019-08');
          let x = new Date(this.fileContent[i].articles[j].published_at.substring(0,7));
          if(x < target){
            users.push(this.fileContent[i].username);
            break;
          }
        }
      }

      return (users.length > 0)? users.join():'kosong';
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
