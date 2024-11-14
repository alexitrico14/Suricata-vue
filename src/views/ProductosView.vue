<script>
 import BotonInicio from '@/components/BotonInicio.vue';
 export default{
    components:{
        BotonInicio
    },
    props:{
        rutaImagen: {
            type: String,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true            
        },
        precio: {
            type: String,
            required: true            
        },
        promocion: {
            type: String,
            required: true            
        }
    }
 }
</script>

<template>
    <section class="seccion-productos container">
        <div>
            <h1 class="text-center" >Productos</h1>
        </div>
        <div class="seccion-productos__boton my-2">
            <BotonInicio/>
        </div>

        <article class="articulo-producto" >
            <div class="card">
                <img :src="rutaImagen" alt="Empanadas">
                <div class="card-body" >
                    <h5 class="card-title fw-bold" >{{ titulo }}</h5>
                    <p class="card-text" >{{ descripcion }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Precio: {{ precio }}</li>
                    <li class="list-group-item">Cantidad: {{ promocion }}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Ver más</a>
                    <a href="#" class="card-link">Comprar</a>
                </div>
            </div>
        </article>

    </section>
</template>

<style scoped>
.seccion-productos{
    margin-top: 7em;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.articulo-producto{
    max-width: 800px;
    width: 100%;
    padding: 2em;
}
.seccion-productos__boton{
    text-align: center;
}
</style>
