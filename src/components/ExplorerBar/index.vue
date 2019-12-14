<template>
  <div class="explorer-bar">
    <div class="explorer-bar-title">EXPLORER</div>
    <ul class="explorer-bar-list">
      <li
        :key="resource.name"
        class="explorer-bar-item"
        :style="{ flex: isFull(resource) ? 1: 0 }"
        v-for="(resource, index) in resources"
        :class="{ 'is-expand': resource.isExpand }"
      >
        <div
          class="explorer-bar-item-header"
          @click="handleExpand(resource, index)"
        >
          <div class="explorer-bar-item-icon">
            <img
              class="icon"
              alt="arrow"
              src="../../assets/images/icon_arrow.svg"
            >
          </div>
          <span
            class="explorer-bar-item-name"
          >
            {{ resource.name }}
          </span>
        </div>

        <div
          v-if="resource.isExpand"
          class="explorer-bar-item-content"
        >
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

interface Resource {
  name: string,
  isExpand: boolean
}

@Component
export default class Explorer extends Vue {
  resources: Array<Resource> = [
    { name: 'VSBLOG', isExpand: false },
    { name: 'NPM SCRIPT', isExpand: false },
  ];

  isFull(resource: Resource): boolean {
    return (
      this.expandCount === 1
      && resource.isExpand === true
    ) || this.expandCount > 1;
  }

  handleExpand(resource: Resource, index: number): void {
    const currentResource = this.resources[index];
    currentResource.isExpand = !currentResource.isExpand;
  }

  get expandCount(): number {
    return this.resources.filter(item => item.isExpand === true).length;
  }
}
</script>
