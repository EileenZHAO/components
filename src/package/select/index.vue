<template>
  <div class="nors-select">
    <div class="nors-input">
      <input
        type="text"
        class="nors-input__inner"
        :class="{'medium': size === 'medium' || '', 'small': size === 'samll' || '', 'is-focus': isFocus || ''}"
        :readonly="readonly"
        :placeholder="placeholder"
        @focus="handleFocus"
      />
      <span class="nors-input__suffix">
        <span class="nors-input__suffix-inner">
          <i class="nors-select__caret el-input__icon" :class="icon"></i>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    size: String,
    icon: {
      type: String,
      default: "el-icon-arrow-up"
    },
    readonly: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isFocus: false
    };
  },
  methods: {
    handleFocus() {
      this.icon = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.nors-select {
  position: relative;
  display: inline-block;

  .nors-input {
    display: block;
  }
}

.nors-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  cursor: pointer;

  &.is-focus {
    border-color: #409eff;
  }

  &.medium {
    height: 36px;
    line-height: 36px;
  }

  &.small {
    height: 32px;
    line-height: 32px;
  }

  &.mini {
    height: 28px;
    line-height: 28px;
  }
}
</style>