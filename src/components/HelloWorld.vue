<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
    <div>
      <label >Passenger Name </label>
      <input type="text" placeholder="Name" v-model="pname"/><br><br>
    </div>
    <div>
    <label>Number of Trips </label>
    <input type="text" placeholder="No. Of Trips" v-model="nooftrips"/><br><br>
    </div>
    <div>
    <label> Airline </label>
    <input type="text" placeholder="Airline" v-model="airline"/><br><br>
    </div>
    <button  type="button" :on-click="addPassenger()" >Add Passenger</button>
  <br><br>
  <table border="1" style="margin:auto">
    <thead>
      <tr>
        <th style="width: 100px">Airline Details</th>
        <th style="width: 100px">Passenger Name</th>
        <th style="width: 100px">Number Of Trips</th>   
        <th style="width: 100px"></th>    
        <th style="width: 100px"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in airlineData" v-bind:key="data.id">
        <td>{{ data.airline}}</td>
        <td>{{ data.name }}</td>
        <td>{{ data.trips }}</td>  
        <td><button type="button" v-on:click="updatePassenger(data.id)">Edit</button></td>    
        <td><button type="button" v-on:click="deletePassenger(data.id)">Delete</button></td>
      </tr>
    </tbody>
  </table>
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
    pname:'Name',
    nooftrips:0,
    airline:'Air India'
  }
  },
  methods:{
    async addPassenger(){
     
      //console.log(this.pname);
      await axios.post('https://api.instantwebtools.net/v1/passenger',{
        "name":this.pname,
        "trips":this.nooftrips,
        "airline":this.airline}).then((response)=>{
        console.log(response.data)
      }).catch(error=>console.log(error));
      
    },
  async getData(){
   await axios.get(
    `https://api.instantwebtools.net/v1/passenger?page=0&size=10`
  ).then((response)=>this.airlineData=response.data.data)
  .catch(error=>console.log(error))
  console.log(this.airlineData);
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
