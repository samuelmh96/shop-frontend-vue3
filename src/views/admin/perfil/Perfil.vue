<template>
    <h1>Perfil</h1>
    <div v-if="perfil">
        <div>
            <div><strong>ID:</strong> {{ perfil.id }}</div>
            <div><strong>Nombre:</strong> {{ perfil.name }}</div>
            <div><strong>Email:</strong> {{ perfil.email }}</div>
            <div><strong>Email verificado:</strong> {{ perfil.email_verified_at ? perfil.email_verified_at : 'No verificado' }}</div>
            <div><strong>Creado:</strong> {{ perfil.created_at }}</div>
            <div><strong>Actualizado:</strong> {{ perfil.updated_at }}</div>
        </div>
    </div>
    <button @click="funSalir()">Cerrar sesion</button>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import authService from '../../../services/auth.service';
import { useRouter } from 'vue-router';

const router = useRouter();

const perfil = ref({});

onMounted(() => {
   getPerfil()
});

async function getPerfil() {
   const { data } = await authService.perfil();
    perfil.value = data;
}

async function funSalir() {
    await authService.logout();
    localStorage.removeItem('access_token');
    router.push({ name: 'Login' });
}

</script>