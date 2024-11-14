<script>
export default {
  props: {
    imagen: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: String,
      required: true,
    },
    promocion: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
    <div class="col-md-4 col-12 px-5 mb-4">
      <div class="card">
        <img :src="imagen" class="card-img-top" :alt="titulo" />
        <div class="card-body">
          <h5 class="card-title fw-bold">{{ titulo }}</h5>
          <p class="card-text">{{ descripcion }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ precio }}</li>
          <li class="list-group-item">{{ promocion }}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Ver más</a>
          <a href="#" class="card-link">Comprar</a>
        </div>
      </div>
    </div>
</template>