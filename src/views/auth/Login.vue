<template>
    <h1>Ingresar</h1>

    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="credentials.email">
    <span style=" color: red ; font-weight: bold; font-size: 12px">{{ errors.email }}</span> 
    <br>

    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="credentials.password">
    <span style=" color: red ; font-weight: bold; font-size: 12px">{{ errors.password }}</span>
    <br><br>

    <button @click="login">Ingresar</button>
    <br><br>

    {{ credentials }}

    {{ respuesta }}
</template>

<script setup>
import { ref } from 'vue';
import authService from '../../services/auth.service';
import { useRouter } from 'vue-router';

const credentials = ref({ email: '', password: '' });
const respuesta = ref();
const errors = ref({});

const router = useRouter();

async function login() {
    try {
        const res = await authService.login(credentials.value);
        respuesta.value = res.data;
        localStorage.setItem('access_token', res.data.access_token);
        router.push({ name: 'MiPerfil' });
    } catch (error) {
        errors.value = error.response?.data?.errors
        console.log(errors.value);
    }
}  
</script>
