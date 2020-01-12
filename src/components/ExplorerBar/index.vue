<template>
  <vue-resize init-width="340px" min-width="170px" max-width="1500px">
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
            :class="[
              'explorer-bar-item-content',
              constants.innerBorder
            ]"
          >
            <vue-tree></vue-tree>
          </div>
        </li>
      </ul>
    </div>
  </vue-resize>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CONSTANTS from '@/constants';
import VueTree from '@/components/VueTree/index.vue';
import VueResize from '@/components/VueResize/index.vue';

interface Resource {
  name: string,
  isExpand: boolean
}

@Component({
  components: { VueTree, VueResize },
})
export default class Explorer extends Vue {
  constants = {
    innerBorder: CONSTANTS.INNER_BORDER,
  };

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
