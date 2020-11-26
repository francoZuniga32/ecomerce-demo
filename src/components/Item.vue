<template>
      <div class="col mb-4">
        <div class="card">
        <router-link class="nav-link" v-bind:to="src">
          <img v-bind:src="media" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title"><b>{{ titulo }}</b></h5>
              <p class="card-text">{{ descripcion }}</p>
              <p>${{ precio }}</p>
            </div>
          </router-link>
          <div class="card-footer text-muted">
            <button class="btn btn-primary" v-on:click="agregarCarrito">
              <span class="material-icons">
                add_shopping_cart
              </span>
            </button>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  name:'item',
  props:{
    id: Number,
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
    this.src = "/producto/"+this.id;
  },
  methods:{
    agregarCarrito: function(){
      this.$emit("agregarCarrito",this.id);
    }
  }
}
</script>
<style>
  .nav-link{
    color: #000;
  }

  .nav-link:hover{
    color: #000;
  }

  .card:hover{
    border-color: #007bff;
    color: #000;
  }
</style>