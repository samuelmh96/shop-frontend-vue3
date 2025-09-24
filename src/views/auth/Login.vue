<template>
    <h1>Ingresar</h1>

    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="credentials.email">

    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="credentials.password">

    <button @click="login">Ingresar</button>
    {{ credentials }}

    {{ respuesta }}
</template>

<script setup>
    import { ref } from 'vue';
    import authService from '../../services/auth.service';

const credentials = ref({ email: '', password: '' });
    const respuesta = ref();
    async function login(){
        const { data } = await authService.login(credentials.value);
       respuesta.value = data;
    }  
</script>
