<template>
  <div class="about container-fluid" style="margin-top: 5%">
    <div class="row row-cols-1 row-cols-md-4">
      <item v-for="(producto, i) in productos" v-bind:key="i" v-bind:id="i" v-bind:titulo="producto.nombre" v-bind:descripcion="producto.descripcion" v-bind:precio="producto.precio" v-bind:media="producto.media" v-on:agregarCarrito="agregarCarrito"/>
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
  props:{
    data: Array
  },
  data(){
    return{
      productos: []
    }
  },
  mounted(){
    this.productos = this.data;
  },
  methods:{
    agregarCarrito: function(id){
      console.log(id);
      this.$emit("agregarCarrito",id);
    }
  }
};
</script>