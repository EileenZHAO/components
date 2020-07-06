<template>
  <div>
    <div class="table-config">
      <slot name="table-config" />
    </div>
    <div class="table-query">
      <slot name="table-query" />
    </div>
    <div class="table-btns">
      <slot name="table-btns" />
    </div>
    <div class="table">
      <slot name="default" />
    </div>
    <div class="table-pagination">
      <slot name="table-pagination" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>