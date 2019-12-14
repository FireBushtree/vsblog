<template>
  <div class="home-page container">
    <div class="home-page-header">
      <menu-bar></menu-bar>
    </div>

    <div class="home-page-body">
      <div class="home-page-body-tools">
        <tool-bar></tool-bar>
      </div>

      <div class="home-page-body-explorer">
        <explorer-bar></explorer-bar>
      </div>

      <div class="home-page-body-content">
        <vs-playground></vs-playground>
      </div>
    </div>

    <div class="home-page-footer">
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MenuBar from '@/components/MenuBar/index.vue';
import ToolBar from '@/components/ToolBar/index.vue';
import FooterBar from '@/components/FooterBar/index.vue';
import ExplorerBar from '@/components/ExplorerBar/index.vue';
import VsPlayground from '@/components/VsPlayground/index.vue';

@Component({
  components: {
    ToolBar,
    MenuBar,
    FooterBar,
    ExplorerBar,
    VsPlayground,
  },
})
export default class HomePage extends Vue {
  name: string = 'owen';
}
</script>
