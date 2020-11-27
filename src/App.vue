<template>
  <div id="app">
    <Menu v-bind:carrito="carrito" v-on:eliminarEnCarrito="eliminarEnCarrito"></Menu>
    <router-view ref="routerViews" v-bind:data="data" v-on:agregarCarrito="agregarCarrito" />
  </div>
</template>
<script>
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Menu
  },
  data(){
    return{
      carrito: [],
      data: [
        {
          "id":1,
          "titulo": "Producto 1",
          "descripcion" : "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          "precio" : 150.30,
          "likes" : 15,
          "media" : '480x480.png',
          "cantidad": 1,
          "carrito" : false
        },{
          "id":2,
          "titulo": "Producto 2",
          "descripcion" : "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          "precio" : 350.40,
          "likes" : 30,
          "media" : '480x480.png',
          "cantidad": 1,
          "carrito" : false
        },{
          "id":3,
          "titulo": "Producto 3",
          "descripcion" : "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          "precio" : 21.25,
          "likes" : 13,
          "media" : '480x480.png',
          "cantidad": 1,
          "carrito" : false
        },{
          "id":4,
          "titulo": "Producto 4",
          "descripcion" : "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          "precio" : 115.15,
          "likes" : 8,
          "media" : '480x480.png',
          "cantidad": 1,
          "carrito" : false
        },{
          "id":5,
          "titulo": "Producto 5",
          "descripcion" : "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          "precio" : 420.10,
          "likes" : 23,
          "media" : '480x480.png',
          "cantidad": 1,
          "carrito" : false
        },{
          "id":6,
          "titulo": "Producto 6",
          "descripcion" : "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          "precio" : 20.25,
          "likes" : 5,
          "media" : '480x480.png',
          "cantidad": 1,
          "carrito" : false
        }
      ]
    }
  },
  methods:{
    agregarCarrito: function(id){
      this.data[id].carrito = true;
      this.carrito.push(this.data[id]);
    },
    eliminarEnCarrito: function(id){
      var idCarrito = this.carrito[id].id - 1;
      this.data[idCarrito].carrito = false;
      this.carrito.splice(id,1);
      this.$refs.routerViews.eliminarEnCarrito(idCarrito);
    }
  }
}
</script>
