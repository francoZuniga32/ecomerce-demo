<template>
    <router-link class="nav-link" v-bind:to="src">
      <div class="col mb-4">
        <div class="card">
          <img v-bind:src="media" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title"><b>{{ titulo }}</b></h5>
            <p class="card-text">{{ descripcion }}</p>
            <p>${{ precio }}</p>
            <button v-on:click="agregarCarrito">Add Carrito</button>
          </div>
        </div>
      </div>
    </router-link>
</template>
<script>
export default {
  name:'item',
  props:{
    key:Number,
    titulo: String,
    descripcion: String,
    precio: Number,
    media: String
  },
  data(){
    return {
      src:null
    }
  },
  mounted(){
    this.src = "/producto/"+this.key;
  },
  methods:{
    agregarCarrito: function(){
      this.$emit("agregarCarrito",this.key);
    }
  }
}
</script>
<style>
  .nav-link{
    color: #000;
  }

  .nav-link:hover .card{
    border-color: #007bff;
    color: #000;
  }
</style>