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

import { debounce } from '@/utils';
import CONSTANTS from '@/constants';

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

  // eslint-disable-next-line class-methods-use-this
  created() {
    let prevTarget: Element | undefined;

    document.addEventListener('click', debounce((event: Event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      // 1. click the same dom twice
      if (event.target === prevTarget) {
        return;
      }

      const { classList } = event.target;
      const isNeedSetBorder = classList.contains(CONSTANTS.INNER_BORDER);

      // 2. has the flag maybe set border
      if (prevTarget && !isNeedSetBorder) {
        prevTarget.classList.remove(CONSTANTS.IS_BORDER_BLUE);
        prevTarget = undefined;
        return;
      }

      if (isNeedSetBorder) {
        classList.add(CONSTANTS.IS_BORDER_BLUE);

        if (prevTarget) {
          prevTarget.classList.remove(CONSTANTS.IS_BORDER_BLUE);
        }

        prevTarget = event.target;
      }
    }));
  }
}
</script>
