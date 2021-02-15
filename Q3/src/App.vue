<template>
  <div>
    1. <span>{{getOne()}}</span> <br>
    2. <span>{{getTwo()}}</span> <br>
    3. <span>{{getThree()}}</span> <br>
    4. <span>{{getFour()}}</span> <br>
    5. <span>{{getFive()}}</span> <br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileContent: null,
      fileToRender: "https://gist.githubusercontent.com/dhamanutd/97aa0d2131903ea8c071721032c7b2a3/raw/60f5108ca55c9a07a951c884599e6b7d07153d14/inventory_list.md",
      rawContent: null
    }
  },
  created: function() {
    this.getContent();
  },
  methods:{
    getContent() {
      // var self;
      this.$http.get(this.fileToRender).then(
        response => {
          // get body data
          this.fileContent = JSON.parse(response.body.substring(3,response.body.length-3));
          console.log(this.fileContent);
        },
        response => {
          // error callback
          this.fileContent = "An error ocurred";
        }
      );
    },
    getOne(){
      let items = [];
      this.fileContent.forEach(file => {
        if(file.placement.name == 'Meeting Room'){
          items.push(file.name);
        }
      });

      return (items.length > 0)? items.join():'kosong';
    },
    getTwo(){
      let items = [];
      this.fileContent.forEach(file => {
        if(file.type == 'electronic'){
          items.push(file.name);
        }
      });

      return (items.length > 0)? items.join():'kosong';
    },
    getThree(){
      let items = [];
      this.fileContent.forEach(file => {
        if(file.type == 'furniture'){
          items.push(file.name);
        }
      });

      return (items.length > 0)? items.join():'kosong';
    },
    getFour(){
      let items = [];
      this.fileContent.forEach(file => {
        // console.log('a = ',new Date(file.purchased_at*1000).getFullYear(),'-', new Date(file.purchased_at*1000).getMonth()+1, new Date(file.purchased_at*1000).getDate());
        // console.log('b = ',new Date('2020-01-16').getTime());
        let target = new Date('2020-01-16').getTime();
        let x = new Date(file.purchased_at*1000).getFullYear()+'-0'+(new Date(file.purchased_at*1000).getMonth()+1)+'-'+new Date(file.purchased_at*1000).getDate();
        console.log(target,'-',new Date(x).getTime());
        console.log('x = ', x);
        if(new Date(x).getTime() === target){
          items.push(file.name);
        }
      });

      return (items.length > 0)? items.join():'kosong';
    },
    getFive(){
      let items = [];
      this.fileContent.forEach(file => {
        file.tags.forEach((value,key)=>{
          if(value == 'brown'){
            items.push(file.name);
          }
        });
      });

      return (items.length > 0)? items.join():'kosong';
    }
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
