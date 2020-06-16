<template>
  <div>
    <svg-icon icon-class="normal"></svg-icon>
    <Select size="small" />
    <Time />
  </div>
</template>

<script>
export default {
  components: {
    Select: () => import("@/package/select/index"),
    Time: () => import("@/package/time/index")
  },
  mounted() {
    this.lisevent.registerKeyEvent({
      combKeys: [
        { code: "01013", callback: this.pulldown1, fnKey: "ctrl" },
        { code: "01013", callback: this.shiftFn1, fnKey: "shift" }
      ],
      singleKeys: [{ code: "01013", callback: this.pulldown }]
    });
  },
  methods: {
    pulldown() {
      console.log("enter");
    },
    pulldown1() {
      console.log("ctrl + enter");
    },
    shiftFn() {
      console.log("shift");
    },
    shiftFn1() {
      console.log("shift + enter");
    }
  },
  destroyed() {
    // 赵兴英 - 2020-06-16 | 键盘事件移除
    this.lisevent.removeKeyEvent();
  }
};
</script>

<style lang="scss" scoped>
</style>