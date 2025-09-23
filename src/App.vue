<template>
  <h1 class="text-3xl font-bold underline">Articulos</h1>
  <button @click="getArticulos()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Get Articulos</button>


 <table border="1" cellpadding="8">
    <thead>
      <tr>
        <th>ID</th>
        <th>Título</th>
        <th>Descripción</th>
        <th>Fecha publicación</th>
        <th>Lectura (min)</th>
        <th>Tags</th>
        <th>Autor</th>
        <th>Imagen</th>
        <th>URL</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="articulo in articulos" :key="articulo.id">
        <td>{{ articulo.id }}</td>
        <td>{{ articulo.title }}</td>
        <td>{{ articulo.description }}</td>
        <td>{{ articulo.readable_publish_date }}</td>
        <td>{{ articulo.reading_time_minutes }}</td>
        <td>
          <ul>
            <li v-for="tag in articulo.tag_list" :key="tag">{{ tag }}</li>
          </ul>
        </td>
        <td>{{ articulo.user.name }}</td>
        <td>
          <img :src="articulo.cover_image" alt="cover" width="120" />
        </td>
        <td>
          <a :href="articulo.url" target="_blank">Ver artículo</a>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script setup>
import { ref, onMounted } from 'vue';

const articulos = ref([]);

onMounted(() => {
  getArticulos();
});

function getArticulos() {
  fetch('https://dev.to/api/articles')
    .then(response => response.json())
    .then(data => {
      articulos.value = data;
    });
};
</script>

<style scoped>
</style>
