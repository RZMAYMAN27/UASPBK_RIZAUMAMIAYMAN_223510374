<!-- src/App.vue -->
<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-dark-blue">
      <q-toolbar>
        <q-toolbar-title class="text-yellow">🌤️RIZA UMAMI AYMAN</q-toolbar-title>
        <div class="current-time text-yellow">{{ currentTime }}</div>
        <div class="current-date text-yellow">{{ currentDate }}</div>
        <q-btn-group>
          <q-btn icon="menu" color="black" class="bg-light-green">
            <q-menu auto-close>
              <q-list style="min-width: 200px">
                <q-item clickable v-ripple tag="router-link" :to="'/task/1'">Tugas Pertemuan 1</q-item>
                <q-item clickable v-ripple tag="router-link" :to="'/task/2'">Tugas Pertemuan 2</q-item>
                <q-item clickable v-ripple tag="router-link" :to="'/task/3'">Tugas Pertemuan 3</q-item>
                <q-item clickable v-ripple tag="router-link" :to="'/task/4'">Tugas Pertemuan 4</q-item>
                <q-item clickable v-ripple tag="router-link" :to="'/task/5'">Tugas Pertemuan 5</q-item>
                <q-item clickable v-ripple tag="router-link" :to="'/task/6'">Tugas Pertemuan 6</q-item>
                <q-item clickable v-ripple tag="router-link" :to="'/task/7'">Tugas Pertemuan 7</q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-btn-group>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, onMounted } from 'vue';
import router from './router';

export default {
  name: 'App',
  setup() {
    const currentTime = ref(new Date().toLocaleTimeString());
    const currentDate = ref(new Date().toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }));

    const updateTime = () => {
      const now = new Date();
      currentTime.value = now.toLocaleTimeString();
      currentDate.value = now.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    };
    setInterval(updateTime, 1000);

    onMounted(() => {
      updateTime();
    });

    return {
      currentTime,
      currentDate,
    };
  },
};
</script>

<style>
.current-time, .current-date {
  margin-right: 20px;
}

.bg-dark-blue {
  background-color: #3A3A6A;
  background-image: url('https://rencanamu.id/assets/file_uploaded/editor/1529158361-studio-ghi.jpg');
  background-size: cover;
  background-position: center;
}

.bg-light-blue {
  background-color: #6A83D3;
}

.q-btn {
  margin-right: 10px;
}

.q-list {
  background-color: #3A3A6A;
  color: white;
}
</style>
