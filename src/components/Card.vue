<template>
<div class="card container" style="margin-top: 5%">
    <div class="row">
        <div class="col-sm-4">
            <img src="/480x480.png" class="card-img" alt="">
        </div>
        <div class="col-sm">
            <h1>{{ producto.titulo }}</h1>
            <p>{{ producto.descripcion }}</p>
            <p><b>${{ producto.precio }}</b></p>
            <hr>
            <form action="">
                <div class="row w-50">
                    <div class="col">
                        <button class="btn btn-primary">
                            Comprar
                        </button>
                    </div>
                    <div class="col">
                        <button class="btn btn-secondary">
                            Añadir al Carrito
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'Card',
    props:{
        producto: Object
    }
}
</script>