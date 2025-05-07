<template>
    <div class="flex flex-col md:items-center">
        <a href="/"><img :src="logo" class="logo"></a>
        <div class="text-center">
            <GuestsTable />
        </div>
    </div>
</template>

<script setup>
import GuestsTable from "../GuestsTable.vue";
import logo from '@/assets/donna-mark-vintage-02-70th-transparent.png';
</script>

<style scoped>
.logo {
    width: 350px;
    height: 350px;
}

.subtitle {
    font-family: "Julius Sans One", sans-serif;
    letter-spacing: 6px;
    font-weight: 500;
    color: #B1C29E;
}
</style>