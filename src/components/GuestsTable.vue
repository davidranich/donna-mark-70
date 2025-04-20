<template>
    <div>
        <DataTable
        :headers="headers"
        :data="guests"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataTable from './utility/DataTable.vue';
import axios from 'axios';

const emit = defineEmits(['loaded']);

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
        //console.log(response.data);
        guests.value = response.data;

        emit('loaded', guests.value.length);
    });
  } catch (error) {
    console.log(error);
  }
};

//getGuests();
// console.log(guests);

onMounted(() => {
    // let guests = getGuests();
    // console.log(guests);
    getGuests();
});
</script>

<style scoped>
</style>