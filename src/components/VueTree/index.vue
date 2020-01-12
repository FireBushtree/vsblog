<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator';

interface Tree {
  label: any,
  level: number,
  children: Tree
}

@Component({
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
})
export default class VueTree extends Vue {
  name: string = 'owen';

  render() {
    return (
      <div class="vue-tree">{this.name}</div>
    );
  }
}
</script>
