<template>
  <q-page class="flex flex-center q-mt-xl" style="flex-direction: column;">
    <div class="background-image"></div>

    <q-card class="q-pa-xl glass-card">
      <q-card-section>
        <div class="text-h5 text-center text-black">
          <strong>Yuk lihat cuaca hari ini!</strong>
        </div>
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="location"
          outlined
          placeholder="Masukkan lokasi"
          class="input-field"
          @keyup.enter="fetchWeather"
        >
          <template v-slot:append>
            <q-btn icon="🔎" color="black" class="bg-light-green" @click="fetchWeather" />
          </template>
        </q-input>
      </q-card-section>
    </q-card>

    <q-card v-if="weather" class="q-pa-xl glass-card weather-card q-mt-xl">
      <q-card-section>
        <div class="text-h5 text-center text-black">
          <strong>{{ weather.name }}</strong>
        </div>
        <div class="weather-details">
          <div class="weather-icon text-center">
            <img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`" alt="Weather Icon" />
          </div>
          <div class="temperature text-center" :class="temperatureClass">
            <strong>{{ weather.main.temp }}°C</strong>
          </div>
          <div class="weather-description text-center text-black">
            {{ weather.weather[0].description }}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'HomePage',
  setup() {
    const location = ref('');
    const weather = ref(null);
    const apiKey = '067b1a945191704a9dd18494f9711084';

    const fetchWeather = async () => {
      if (location.value) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${apiKey}&units=metric`;
        try {
          const response = await axios.get(apiUrl);
          weather.value = response.data;
        } catch (error) {
          console.error(error);
        }
      }
    };

    const temperatureClass = ref('');

    watch(weather, (newVal) => {
      if (newVal && newVal.main.temp) {
        const temp = newVal.main.temp;
        if (temp > 30) {
          temperatureClass.value = 'text-hot';
        } else if (temp >= 25 && temp <= 30) {
          temperatureClass.value = 'text-warm';
        } else {
          temperatureClass.value = 'text-cool';
        }
      }
    });

    onMounted(() => {
      fetchWeather();
    });

    return {
      location,
      weather,
      fetchWeather,
      temperatureClass,
    };
  },
};
</script>

<style scoped>
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url('https://rencanamu.id/assets/file_uploaded/editor/1529158361-studio-ghi.jpg');
  background-size: cover;
  background-position: center;
}

.text-hot {
  color: red;
}

.text-warm {
  color: yellow;
}

.text-cool {
  color: green;
}

.glass-card {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 90%;
  max-width: 600px;
  margin: 20px;
}

.glass-card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 36px 0 rgba(31, 38, 135, 0.45);
}

.weather-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-icon img {
  width: 100px;
  height: 100px;
}

.temperature {
  font-size: 1.5em;
  margin-top: 10px;
}

.weather-description {
  font-size: 1.2em;
  margin-top: 10px;
}

.input-field .q-field__control {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: rgb(6, 6, 6);
}

.input-field .q-field__control:before,
.input-field .q-field__control:after {
  border-color: rgba(255, 255, 255, 0.3);
}

.input-field .q-input__inner {
  color: rgb(20, 20, 20);
}
</style>