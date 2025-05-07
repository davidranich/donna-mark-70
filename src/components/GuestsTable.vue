<template>
    <div>
        <DataTable
        :headers="headers"
        :data="guests"
        title="List Of Guests"
        @refresh="getGuests"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataTable from './utility/DataTable.vue';
import axios from 'axios';

const headers = [
    "First Name",
    "Last Name",
    "Phone Number",
    "Email Address",
    "Notes"
];

let guests = ref([]);

const getGuests = async () => {
  const token = localStorage.getItem('authToken');
  const api = import.meta.env.VITE_API_URL;
  
  try {
    const response = await axios.get(`${api}/api/70/guests`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
        guests.value = response.data;

        emit('loaded', guests.value.length);
    });
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
    getGuests();
});

// give access to 'getGuests' function
defineExpose({
  getGuests
});
</script>

<style scoped>
</style>