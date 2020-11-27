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
            <button v-if="carritoSee" class="btn btn-secondary">
              <span class="material-icons">
                add_shopping_cart
              </span>
            </button>
            <button v-else class="btn btn-primary" v-on:click="agregarCarrito">
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
    media: String,
    carrito: Boolean
  },
  data(){
    return {
      src: "/producto/",
      carritoSee: false
    }
  },
  mounted(){
    this.precio = Math.round10(this.precio, -2);
    this.src += this.id;
    this.carritoSee = this.carrito;
  },
  methods:{
    agregarCarrito: function(){
      this.carritoSee = true;
      this.$emit("agregarCarrito",this.id);
    },
    eliminarEnCarrito: function(){
      console.log("eliminando item")
      this.carritoSee = false;
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