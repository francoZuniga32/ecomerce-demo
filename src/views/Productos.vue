<template>
  <div class="about container-fluid" style="margin-top: 5%">
    <div class="row row-cols-1 row-cols-md-4">
      <item v-for="producto in data" v-bind:key="producto.id" v-bind:titulo="producto.nombre" v-bind:descripcion="producto.descripcion" v-bind:precio="producto.precio" v-bind:media="producto.media" v-on:agregarCarrito="addCarrito"/>
    </div>
  </div>
</template>
<script>  
import item from "../components/Item.vue";

export default {
  name: "productos",
  components: {
    item,
  },
  data() {
    return {
      data: [
        {
          id:0,
          nombre: "Producto 1",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
          precio: 150.2,
          media: "/480x480.png"
        },
        {
          id:1,
          nombre: "Producto 2",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
          precio: 100.0,
          media: "/480x480.png"
        },
        {
          id:2,
          nombre: "Producto 3",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
          precio: 210.2,
          media: "/480x480.png"
        },
        {
          id:2,
          nombre: "Producto 4",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
          precio: 210.2,
          media: "/480x480.png"
        },
        {
          id:2,
          nombre: "Producto 5",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
          precio: 210.2,
          media: "/480x480.png"
        },
      ],
    };
  },
  methods:{
    addCarrito: function(id){
      console.log(id);
    }
  }
};
</script>