<template>
  <div
    ref="container"
    class="vue-resize"
    :style="{ width: initWidth, maxWidth: maxWidth, minWidth: minWidth }"
  >
    <div class="top vue-resize-area"></div>
    <div
      @dragstart="e => e.preventDefault()"
      @mousemove="handleMouseMove"
      @mousedown="handleMouseDown"
      class="right vue-resize-area is-y"
    ></div>
    <div class="bottom vue-resize-area"></div>
    <div class="left vue-resize-area is-y"></div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: {
    initWidth: {
      type: String,
      required: true,
    },
    maxWidth: {
      type: String,
    },
    minWidth: {
      type: String,
    },
  },
})
export default class VueResize extends Vue {
  mouseDownEvent: MouseEvent = {} as MouseEvent;

  container: HTMLElement | null = null;

  containerInitWidth: number = 0;

  isMouseDown: boolean = false

  handleMouseDown(event: MouseEvent) {
    this.isMouseDown = true;
    this.mouseDownEvent = event;
    this.container = this.$refs.container as HTMLElement;
    this.containerInitWidth = this.container.clientWidth;
  }

  handleMouseUp() {
    this.isMouseDown = false;
    this.containerInitWidth = (this.container as HTMLElement).clientWidth;
  }

  handleMouseMove(event: MouseEvent) {
    if (!this.isMouseDown) {
      return;
    }

    if (this.container) {
      this.container.style.width = `
        ${this.containerInitWidth
        + event.screenX
        - this.mouseDownEvent.screenX}px
      `;
    }
  }

  mounted() {
    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('mousemove', this.handleMouseMove);
  }
}
</script>
<style lang="scss" scoped>
.vue-resize {
  position: relative;
  height: 100%;

  &-area {
    position: absolute;
    z-index: 999;

    &.is-y {
      width: 20px;
      height: 100%;
      cursor: e-resize;
    }

    &.right {
      right: -10px;
    }
  }
}
</style>
