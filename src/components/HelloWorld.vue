<!-- eslint-disable no-unused-vars -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1> 
    <div>
      <label>Passenger Name </label>
      <input type="text" placeholder="Name" v-model="reqObj.name"/><br><br>
    </div>
    <div>
    <label>Number of Trips </label>
    <input type="text" placeholder="No. Of Trips" v-model="reqObj.trips"/><br><br>
    </div>
    <div>
    <label> Airline </label>
    <input type="text" placeholder="Airline" v-model="reqObj.airline"/><br><br>
    </div>
    <button  type="button" @click="addPassenger()" >Add Passenger</button>
  <br><br>
  <table border="1" style="margin:auto">
    <thead>
      <tr>
        <th style="width: 100px">Airline Details</th>
        <th style="width: 100px">Passenger Name</th>
        <th style="width: 100px">Number Of Trips</th>   
        <th style="width: 100px">id</th> 
        <th style="width: 100px"></th>    
        <th style="width: 100px"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in airlineData" v-bind:key="data.id">
        <td>{{data.airline}}</td>
        <td>{{data.name}}</td>
        <td>{{data.trips}}</td> 
        <td>{{data._id}}</td>  
        <td><button type="button" @click="updatePassenger(data._id)">Edit</button></td>    
        <td><button type="button" @click="deletePassenger(data._id)">Delete</button></td>
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
    reqObj : {
      name:'John Doe',
      trips:250,
      airline: 5
    }
  }
  },
  methods:{
    async addPassenger(){
      //console.log(this.pname);
      await axios.post('https://api.instantwebtools.net/v1/passenger',this.reqObj).then((response)=>{
        console.log(response.data)
      }).catch(error=>console.log(error));
      
    },
  async getData(){
   await axios.get(
    `https://api.instantwebtools.net/v1/passenger?page=3863&size=10`
  ).then((response)=>this.airlineData=response.data.data)
  .catch(error=>console.log(error))
  console.log(this.airlineData);
  },
  async deletePassenger(id){
    await axios.delete('https://api.instantwebtools.net/v1/passenger/'+id).then(() => {
         this.getData();
         alert("successfully deleted the passenger record");  
      });
  },
  async updatePassenger(id){
   
    await axios.get(
    `https://api.instantwebtools.net/v1/passenger/`+id
  ).then((response)=>this.airlineData=response.data.data)
  .catch(error=>console.log(error))
  console.log(this.airlineData);
  
    await axios.post('https://api.instantwebtools.net/v1/passenger/'+id,this.reqObj).then((response)=>{
        console.log("Passenger data updated successfully"+response.data)
      }).catch(error=>console.log(error));
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
