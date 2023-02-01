<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
    <label >Passenger Name </label>
    <input type="text" placeholder="Name" v-model="pname"/><br><br>
    <label>Number of Trips </label>
    <input type="text" placeholder="No. Of Trips" v-model="nooftrips"/><br><br>
    <label> Airline </label>
    <input type="text" placeholder="Airline" v-model="airline"/><br><br>
    <button  type="button" :on-click="addPassenger()" >Add Passenger</button>
  
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
    todoItem:{},
    pname:'Name',
    nooftrips:0,
    airline:'Air India'
  }
  },
  methods:{
    async addPassenger(){
      // eslint-disable-next-line no-undef
      console.log(this.pname);
      await axios.post('https://api.instantwebtools.net/v1/passenger',
      this.pname,
      this.nooftrips,
      this.airline).then((response)=>{
        console.log(response.data)
      }).catch(error=>console.log(error));
      
    },
  async getData(){
   await axios.get(
    `https://api.instantwebtools.net/v1/passenger?page=0&size=10`
  ).then((response)=>console.log(response.data ))
  .catch(error=>console.log(error))
  }
  },
 mounted(){
  this.getData();
  
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
