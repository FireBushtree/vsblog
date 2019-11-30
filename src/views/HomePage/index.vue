<template>
  <div class="home-page container">
    <div class="home-page-header"></div>

    <div class="home-page-body"></div>

    <div class="home-page-footer"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import MenuBar from '@/components/MenuBar/index.vue';
import FooterBar from '@/components/FooterBar/index.vue';

export default Vue.extend({
  data() {
    return {
      name: 'owen',
    };
  },
});
</script>
