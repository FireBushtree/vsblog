<template>
  <div class="home-page container">
    <div class="home-page-header">
      <menu-bar></menu-bar>
    </div>

    <div class="home-page-body"></div>

    <div class="home-page-footer">
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MenuBar from '@/components/MenuBar/index.vue';
import FooterBar from '@/components/FooterBar/index.vue';

@Component({
  components: {
    MenuBar,
    FooterBar,
  },
})
export default class HomePage extends Vue {
  name: string = 'owen';
}
</script>
