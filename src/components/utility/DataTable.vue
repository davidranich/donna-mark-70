<template>
    <div class="not-prose overflow-auto p-5 rounded-md">
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
    data: Array,
    headers: Array
});
</script>

<style scoped>
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