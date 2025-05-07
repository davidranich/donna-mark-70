<template>
    <div class="not-prose overflow-auto p-5 rounded-md">
    <span class="subtitle text-lg md:text-md">{{ title }} ({{ data.length }})</span> <span id="guest-refresh" @click="refreshGuests"><i class="fa-solid fa-rotate"></i></span>
  <table class="table-auto w-full table">
  <thead class="border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200">
    <tr class="table-header">
      <th v-for="header in headers" class="p-1 text-sm text-center">{{ header }}</th>
    </tr>
  </thead>
  <tbody class="table-body">

    <tr v-for="guest in data">
        <td>{{ guest.first_name }}</td>
        <td>{{ guest.last_name }}</td>
        <td>{{ guest.phone_number }}</td>
        <td>{{ guest.email }}</td>
        <td>{{ guest.notes ? guest.notes : "--" }}</td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        default: []
    },
    headers: {
        type: Array,
        default: []
    },
    title: {
        type: String,
        default: "Data"
    }
});

const emit = defineEmits(['refresh']);

const refreshGuests = () => {
    emit('refresh');
};
</script>

<style scoped>
.subtitle {
    font-family: "Julius Sans One", sans-serif;
    letter-spacing: 6px;
    font-weight: 500;
    color: #B1C29E;
}

#guest-refresh {
    color: #f2b847;
}

.fa-rotate:hover {  
    -webkit-animation: infinite-spinning 1s ease-out 0s infinite normal;
    animation: infinite-spinning 1s ease-out 0s infinite normal;
    cursor: pointer;
}

@keyframes infinite-spinning {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.table thead tr {
    background-color: #f2b847;
    color: #ffffff;
    text-align: left;
}

.table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: Mukta, sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.table th,
.table td {
    padding: 12px 15px;
}

.table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.table-header {
    font-family: Mukta, sans-serif;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 300;
    background-color: #f2b847;
    color: white;
}

.table-body > tr > td {
    background-color: #b1c29e;
    color: black;
    border-bottom: 1px solid black;
}
</style>