<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/productos">Productos</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/servicios">Servicios</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control my-2 my-sm-0" type="search" placeholder="Buscar" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        <span class="material-icons">
          search
        </span>
      </button>
      <button class="btn btn-light my-2 my-sm-0"  data-toggle="modal" data-target="#carrito" v-on:click="actualizarTotal">
        <span class="material-icons">
          shopping_cart
        </span>
      </button>
    </form>
  </div>
  <!-- modal -->
  <div class="modal fade" id="carrito" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Carrito</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- media -->
      <div v-for="(producto, i) in carrito" v-bind:key="i" class="media mb-1">
        <img v-bind:src="producto.media" width="20%" class="mr-3" alt="...">
        <div class="media-body">
          <h5 class="mt-0">{{ producto.titulo }}</h5>
          <b>${{ producto.precio }}</b>
          <br>
          <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary" v-on:click="decrement(i)">
                <span class="material-icons">
                  remove
                </span>
              </button>
              <button type="button" class="btn btn-secondary">
                <input class="form-control" width="20%" type="number" name="" id="" min="0" max="" v-on:change="actualizarTotal" v-bind:value="producto.cantidad">
              </button>
              <button type="button" class="btn btn-secondary" v-on:click="increment(i)">
                <span class="material-icons">
                add
                </span>
              </button>
          </div>
          {{ producto.cantidad }}
        </div>
        <button type="button" class="close" aria-label="Close" v-on:click="eliminar(i)">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
  
      <hr>
      <h5 class="mt-0"><b>Total: </b>${{ total }}</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Comprar</button>
      </div>
    </div>
  </div>
</div>
</nav>
</template>
<script>
export default {
    name: 'menu',
    props:{
      carrito: Array
    },
    data(){
      return{
        total: 0,
      }
    },
    mounted(){
      this.actualizarTotal();
    },
    methods: {
      actualizarTotal: function(){
        this.total = 0;
        for (var i = 0; i < this.carrito.length; i++){
          this.total += Math.round10(this.carrito[i].precio * this.carrito[i].cantidad, -2);
        }
      },
      increment: function(id){
        this.carrito[id].cantidad++;
        this.actualizarTotal();
      },
      decrement: function(id) {
        if(this.carrito[id].cantidad > 1){
          this.carrito[id].cantidad --;
          this.actualizarTotal();
        }
      },
      modificar: function(id){
        this.carrito[id].cantidad++;
        this.actualizarTotal();
      },
      eliminar: function(id){
        this.$emit("eliminarEnCarrito", id);
        this.actualizarTotal();
      } 
    },
}
</script>