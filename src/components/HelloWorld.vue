<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
    <label>Passenger Name </label>
    <input type="text" placeholder="Name"/><br><br>
    <label>Number of Trips </label>
    <input type="text" placeholder="Name"/><br><br>
    <label> Airline </label>
    <input type="text" placeholder="Name"/><br><br>
    <button on-submit="addPassenger">Add Passenger</button>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
    airlineData:[],
    todoItem:{}
  }
  },
  methods:{
    addPassenger(){

    },
  async getData(){
   await axios.get(
    `http://api.instantwebtools.net/v1/passenger?page=0&size=10`
  ).then((response)=>console.log(response.data ))
  .catch(error=>console.log(error))
  }
  },
 mounted(){
  this.getData()
  }  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
