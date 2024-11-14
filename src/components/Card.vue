<script>
import DetalleCard from './DetalleCard.vue';
export default {
  components: {
    DetalleCard
  }
}
</script>

<template lang="">
  <section class="container" id="productos">
    <h1 class="text-center">Nuestros Productos</h1>
    <div class="row">
      <DetalleCard
        imagen="./img/colaciones.jpg"
        titulo="Colaciones"
        descripcion="Ofrecemos colaciones saludables y llenas de sabor para tus momentos de pausa."
        precio="Precio: $4.000"
        promocion="Cantidad: Para una persona."
      />
      <DetalleCard
      imagen="./img/dulces.jpg"
      titulo="Dulces"
      descripcion="Endulza tu día con nuestra selección de dulces irresistibles y llenos de sabor."
      precio="Consulta nuestros precios"
      promocion="Elige tus dulces favoritos y recibe un 15% de descuento al comprar 3 o más."
      />
      <DetalleCard
        imagen="./img/bebidas.jpg"
        titulo="Bebidas"
        descripcion="Disfruta de nuestras bebidas refrescantes y llenas de energía para cualquier ocasión."
        precio="Precio: $1.000"
        promocion="Compra dos bebidas y llévate la tercera a mitad de precio."
      />
      <DetalleCard
        imagen="./img/verduras.jpg"
        titulo="Verduras"
        descripcion="Frescura y sabor en cada bocado con nuestra selección de verduras recién cosechadas."
        precio="Consulta nuestros precios"
        promocion="Arma tu canasta de verduras y recibe un 20% de descuento en la compra de 5 o más productos frescos."
      />
      <DetalleCard
        imagen="./img/empanadas.jpg"
        titulo="Empanadas"
        descripcion="Saborea nuestras empanadas crujientes y rellenas con los mejores ingredientes caseros."
        precio="Precio: $2.000"
        promocion="Promoción: Lleva tres y paga dos."
      />
      <DetalleCard
        imagen="./img/desayunos.jpg"
        titulo="Desayunos"
        descripcion="Empieza tu día con energía con nuestros desayunos balanceados y llenos de sabor."
        precio="Precio: $2.000"
        promocion="Cantidad: Para una persona."
      />
    </div>
  </section>
</template>