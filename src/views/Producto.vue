<template>
    <div class="container-fluid">
        <Card v-bind:producto="producto"/>
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
            producto: null
        }
    },
    props:{
        data: Array
    },
    mounted(){
        console.log(this.$route.params.id);
        this.producto = this.data[this.$route.params.id];
    }
}
</script>