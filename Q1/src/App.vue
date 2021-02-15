<template>
  <div>
    <form action="" ref="form">
      Restaurant
      <input type="text" name="name" ref="name"><br>
      Date
      <input type="text" name="date" ref="date"> <br>
      Cashier
      <input type="text" name="cashier" ref="cashier"> <br>
      Item and Price
      <div v-for="(temp, index) in temps" :key="index">
        <input type="text" name="item" ref="item"> <input type="text" name="price" ref="price">
      </div>
      <span id="add" @click="add()">Add</span> <br>
      <button type="button" @click="submit()">Submit</button>
    </form>

    <div v-if="check">
      <div style="text-align:center" v-html="getName(name)"> </div>
        Tanggal: <span v-html="getName(date)"></span> <br>
        Nama Kasir: <span v-html="getName(cashier)"></span> <br>
        {{ printSection() }}
        <div v-for="(temp, index) in temps" :key="index">
          <span v-html="menu(temp.item, temp.price)"></span>
        </div> <br>
        {{total()}}
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      check: false,
      name:'',
      date:'',
      cashier:'',
      temps: [
        {
          item:'', price:''
        }
      ]
    }
  },
  methods:{
    add: function() {
      this.temps.push({
        item: '',
        price: ''
      });
    },
    submit: function(){
      this.name = this.$refs.name.value;
      this.date = this.$refs.date.value;
      this.cashier = this.$refs.cashier.value;
      console.log(this.name);

      for(let i=0; i<this.temps.length; i++){
        this.temps[i].item= this.$refs.item[i].value;
        this.temps[i].price= this.$refs.price[i].value;
      }
      
      this.$refs.form.remove();
      this.$forceUpdate();
      
      this.check=true;

      return false;
    },
    getName: function(name){
      if(name.length<=30){
        return name;
      } else{
        let str = name;
        let res='';
        while (str.length > 30) {
          res += str.substring(0, 30) + "<br>";
          str = str.substring(30);
          if(str.length <= 30){
            res += str;
          }
          console.log(str);
        }
        console.log(res);
        return res;
      }
    },
    printSection: function(){
      let section = '';
      for(let i=0; i<30; i++){
        section = section.concat('=');
      }
      return section;
    },
    menu: function(item, price){
      let res='';
      let diff='';
      while (item.length > 30) {
        res += item.substring(0, 30) + "<br>";
        item = item.substring(30);
        if(item.length <= 30){
          res += item;
          for(let i=0; i< 30 - (item.length + price.length + 2); i++){
            diff = diff.concat('.');
          }
        }
        console.log(item);
      }
      return res.concat(diff).concat('Rp'+price);
    },
    total: function(){
      let tot = 0;
      let diff = '';
      this.temps.forEach(temp =>{
        tot += parseInt(temp.price);
      })
      for(let i=0; i < 30 - (String(tot).length + 7); i++){
        diff = diff.concat('.');
      }
      return 'Total'+diff+'Rp'+tot;
    }
  },
}
</script>

<style>
#add{
  cursor: pointer;
}
#add:hover{
  color: red;
}

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
