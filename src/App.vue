<script setup lang="ts">
import { ref } from "vue";
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';

const show = ref(false);
</script>

<template>
  <!-- Sidebar -->
  <Sidebar :show="show" v-on:close="show = false" />
  <!-- Content -->
  <Content :show="show" v-on:open="show = true" />
</template>
