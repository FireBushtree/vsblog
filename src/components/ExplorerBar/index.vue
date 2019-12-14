<template>
  <div class="explorer-bar">
    <div class="explorer-bar-title">EXPLORER</div>
    <ul class="explorer-bar-list">
      <li class="explorer-bar-item">
        <div class="icon">
          <i class="arrow is-right"></i>
        </div>
        VSBLOG
      </li>
      <li class="explorer-bar-item">NPM SCRIPT</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Explorer extends Vue {

}
</script>
