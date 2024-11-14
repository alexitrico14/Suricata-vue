<script>
 import BotonInicio from '@/components/BotonInicio.vue';
 import Formulario from '@/components/Formulario.vue';
 export default{
    components:{
        BotonInicio,
        Formulario
    }
 }
</script>

<template>
    <section class="seccion-contacto container" >
        <div>
            <h1 class="seccion-contacto__titulo text-center">Contacto</h1>
        </div>
        <div class="seccion-contacto__btn my-2" >
            <BotonInicio/>
        </div>
        <div class="seccion-contacto__formulario" >
            <Formulario/>
        </div>
    </section>
</template>

<style scoped>
.seccion-contacto{
    margin-top: 7em;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.seccion-contacto__btn{
    text-align: center;
    padding: 1em;
}
.seccion-contacto__formulario{
    max-width: 800px;
    width: 100%;
    padding: 2em;
    margin-bottom: 4em;
}
</style>