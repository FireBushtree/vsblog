<template>
  <div class="menu-bar">
    <ul class="menu-bar-body">
      <li>img</li>
    </ul>
    <div class="menu-bar-title">
      - Fire Bush Tree's Blog
    </div>
    <div class="menu-bar-actions">
      <div class="menu-bar-action">
        <i class="icon-min"></i>
      </div>
      <div class="menu-bar-action">
        <i class="icon-max is-full"></i>
      </div>
      <div class="menu-bar-action">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MenuBar extends Vue {

}
</script>
