<template>
    <div class="container-fluid">
        <Card v-bind:data="data[indice]"/>
    </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
    name: 'producto',
    components:{
        Card
    },
    data(){
        return {
            data:[
                {
                    "nombre" : "Producto 1",
                    "descripcion" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "precio" : 150.20,
                },
                {
                    "nombre" : "Producto 2",
                    "descripcion" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "precio" : 100.00,
                },
                {
                    "nombre" : "Producto 3",
                    "descripcion" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                    "precio" : 210.20,
                }
            ],
            indice: null
        }
    },
    mounted(){
        this.indice = this.$route.params.id;
    }
}
</script>