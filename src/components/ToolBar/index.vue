<template>
  <div class="tool-bar">
    <ul class="tool-bar-top">
      <li
        :key="tool.name"
        v-for="tool in tools"
        class="tool-bar-item"
        :class="{ 'is-active': tool.isActive }"
        @click="setCurrentTool(tool)"
      >
        <img
          class="tool-bar-item__icon"
          :src="tool.icon"
          :alt="tool.name"
        >
      </li>
    </ul>
    <div class="tool-bar-bottom"></div>
  </div>
</template>
<script>
import iconJs from '@/assets/images/icon_js.svg';
import iconCss from '@/assets/images/icon_css.svg';
import iconVue from '@/assets/images/icon_vue.svg';

export default {
  name: 'ToolBar',
  data() {
    return {
      currentTool: {},
      tools: [
        { name: 'js', icon: iconJs, isActive: false },
        { name: 'css', icon: iconCss, isActive: false },
        { name: 'vue', icon: iconVue, isActive: false },
      ],
    };
  },
  methods: {
    setCurrentTool(tool) {
      // 1. close last tool's active status
      this.currentTool.isActive = false;

      // 2. set the new tool
      this.currentTool = tool;
      this.currentTool.isActive = true;

      // 3. emit event
      this.$emit('change', this.currentTool);
    },
  },
  created() {
    const [firstTool] = this.tools;
    this.setCurrentTool(firstTool);
  },
};
</script>
