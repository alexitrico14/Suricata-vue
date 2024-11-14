<script>
    export default{
        data(){
            return{
                email: '',
                mensaje: ''
            }
        },
        methods:{
            enviarDatos(){
                alert('¡Mensaje enviado con éxito! \nEn unos momentos te contactaremos');
                this.limpiarDatos();
                this.dirigirFoco();
            },
            limpiarDatos(){
                this.email = '';
                this.mensaje = '';
            },
            dirigirFoco(){
                this.$refs.campoEmail.focus();
            }
        },
        mounted(){
            this.$refs.campoEmail.focus();
        }
    }
</script>

<template>
    <div class="mb-3 my-3">
        <label for="email" class="form-label">Dirección de email</label>
        <input type="email" v-model="email" ref="campoEmail" class="form-control" id="email" required>
    </div>
    <div class="mb-3">
        <label for="mensaje" class="form-label">Mensaje</label>
        <textarea class="form-control" v-model="mensaje" id="mensaje" rows="3" required></textarea>
    </div>
    <div>
        <button @click="enviarDatos" class="btn btn-primary" >Enviar</button>
    </div>
</template>

<style scoped >
    .btn{
        background-color: var(--main-bg-color);
        border: var(--btn-color);
        transition: all 0.5s ease;
    }
    .btn:hover{
        background-color: white;
        color: var(--main-bg-color);
    }
</style>