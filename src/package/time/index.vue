<template>
  <!-- 赵兴英  - 2020-06-04：自定义输入时间 -->
  <div class="time">
    <div class="time__inner" :class="disabled ? 'disabled' : ''">
      <input
        ref="timeRef1"
        v-model.number="time.h1"
        type="text"
        :disabled="disabled"
        @input="handleInput('h1')"
        @focus="handleFocus('h1', 'timeRef1')"
        @blur="flag.h1 = false"
      />
      <input
        ref="timeRef2"
        v-model.number="time.h2"
        type="text"
        :disabled="disabled"
        @input="handleInput('h2')"
        @focus="handleFocus('h2', 'timeRef2')"
        @blur="flag.h2 = false"
      />
      <span>:</span>
      <input
        ref="timeRef3"
        v-model.number="time.m1"
        type="text"
        :disabled="disabled"
        @input="handleInput('m1')"
        @focus="handleFocus('m1', 'timeRef3')"
        @blur="flag.m1 = false"
      />
      <input
        ref="timeRef4"
        v-model.number="time.m2"
        type="text"
        :disabled="disabled"
        @input="handleInput('m2')"
        @focus="handleFocus('m2', 'timeRef4')"
        @blur="flag.m2 = false"
      />
      <span>:</span>
      <input
        ref="timeRef5"
        v-model.number="time.s1"
        type="text"
        :disabled="disabled"
        @input="handleInput('s1')"
        @focus="handleFocus('s1', 'timeRef5')"
        @blur="flag.s1 = false"
      />
      <input
        ref="timeRef6"
        v-model.number="time.s2"
        type="text"
        :disabled="disabled"
        @input="handleInput('s2')"
        @focus="handleFocus('s2', 'timeRef6')"
        @blur="flag.s2 = false"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timeInfo: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      time: {
        h1: "-",
        h2: "-",
        m1: "-",
        m2: "-",
        s1: "-",
        s2: "-"
      },
      flag: {
        h1: false,
        h2: false,
        m1: false,
        m2: false,
        s1: false,
        s2: false
      }
    };
  },
  watch: {
    timeInfo: {
      handler(newVal, oldVal) {
        if (newVal) {
          const d = newVal.split("");
          this.time = {
            h1: Number(d[0]),
            h2: Number(d[1]),
            m1: Number(d[3]),
            m2: Number(d[4]),
            s1: Number(d[6]),
            s2: Number(d[7])
          };
        } else {
          this.time = {
            h1: "-",
            h2: "-",
            m1: "-",
            m2: "-",
            s1: "-",
            s2: "-"
          };
        }
      }
    }
  },
  methods: {
    handleInput(name) {
      switch (name) {
        case "h1":
          const h1 = `${this.time.h1}${this.time.h2}`;
          if (typeof this.time.h1 !== "number" || this.time.h1 > 2 || h1 > 23) {
            this.time.h1 = "-";
            this.$nextTick(() => {
              this.$refs.timeRef1.select();
            });
          } else {
            this.$refs.timeRef2.select();
          }
          break;
        case "h2":
          const h2 = `${this.time.h1}${this.time.h2}`;
          if (typeof this.time.h2 !== "number" || h2 > 23) {
            this.time.h2 = "-";
            this.$nextTick(() => {
              this.$refs.timeRef2.select();
            });
          } else {
            this.$refs.timeRef3.select();
          }
          break;
        case "m1":
          if (typeof this.time.m1 !== "number" || this.time.m1 > 5) {
            this.time.m1 = "-";
            this.$nextTick(() => {
              this.$refs.timeRef3.select();
            });
          } else {
            this.$refs.timeRef4.select();
          }
          break;
        case "m2":
          const m = `${this.time.m1}${this.time.m2}`;
          if (typeof this.time.m2 !== "number" || m > 59) {
            this.time.m2 = "-";
            this.$nextTick(() => {
              this.$refs.timeRef4.select();
            });
          } else {
            this.$refs.timeRef5.select();
          }
          break;
        case "s1":
          if (typeof this.time.s1 !== "number" || this.time.s1 > 5) {
            this.time.s1 = "-";
            this.$nextTick(() => {
              this.$refs.timeRef5.select();
            });
          } else {
            this.$refs.timeRef6.select();
          }
          break;
        case "s2":
          const s = `${this.time.s1}${this.time.s2}`;
          if (typeof this.time.s2 !== "number" || s > 59) {
            this.time.s2 = "-";
            this.$nextTick(() => {
              this.$refs.timeRef6.select();
            });
          } else {
            this.$refs.timeRef6.select();
          }
          break;
      }
    },
    handleKeyUp(e) {
      let key = window.event.keyCode || window.event.which;
      if (this.flag.h1) {
        this.upAndDownKeys(
          key,
          this.time.h1,
          "h1",
          "timeRef1",
          "timeRef6",
          "timeRef2"
        );
      } else if (this.flag.h2) {
        this.upAndDownKeys(
          key,
          this.time.h2,
          "h2",
          "timeRef2",
          "timeRef1",
          "timeRef3"
        );
      } else if (this.flag.m1) {
        this.upAndDownKeys(
          key,
          this.time.m1,
          "m1",
          "timeRef3",
          "timeRef2",
          "timeRef4"
        );
      } else if (this.flag.m2) {
        this.upAndDownKeys(
          key,
          this.time.m2,
          "m2",
          "timeRef4",
          "timeRef3",
          "timeRef5"
        );
      } else if (this.flag.s1) {
        this.upAndDownKeys(
          key,
          this.time.s1,
          "s1",
          "timeRef5",
          "timeRef4",
          "timeRef6"
        );
      } else if (this.flag.s2) {
        this.upAndDownKeys(
          key,
          this.time.s2,
          "s2",
          "timeRef6",
          "timeRef5",
          "timeRef1"
        );
      }
    },
    upAndDownKeys(key, ele, eleName, self, refPrev, refNext) {
      // key:keycode，ele:输入框，eleName:输入框标识，self:自己，refPrev:上一个输入框，refNext:下一个输入框
      if (key === 39 || key === 40) {
        // 向右键或向下键
        if (typeof ele === "number") {
          //选中下一个
          this.$refs[refNext].select();
        } else {
          // 选中自己
          this.$nextTick(() => {
            this.$refs[self].select();
          });
        }
      } else if (key === 37 || key === 38) {
        // 向左键或向上键
        if (typeof ele === "number") {
          // 选中上一个
          this.$refs[refPrev].select();
        } else {
          // 选中自己
          this.$nextTick(() => {
            this.$refs[self].select();
          });
        }
      } else if (key === 8) {
        // backspace键
        ele = "-";
        if (eleName !== "h1") {
          // 当前不是第一个输入框
          this.$nextTick(() => {
            this.$refs[refPrev].select();
          });
        }
      } else if (key === 13) {
        if (eleName === "s2" && typeof ele === "number") {
          this.$emit("on-enter", true);
        }
      }
    },
    handleFocus(name, refName) {
      this.flag[name] = true;
      this.$refs[refName].select();
    },
    // 获取输入时间
    getTimeStr() {
      const h1 = typeof this.time.h1 === "number" ? this.time.h1 : "";
      const h2 = typeof this.time.h2 === "number" ? this.time.h2 : "";
      const m1 = typeof this.time.m1 === "number" ? this.time.m1 : "";
      const m2 = typeof this.time.m2 === "number" ? this.time.m2 : "";
      const s1 = typeof this.time.s1 === "number" ? this.time.s1 : "";
      const s2 = typeof this.time.s2 === "number" ? this.time.s2 : "";
      let str = "";
      if (
        typeof h1 === "number" &&
        typeof h2 === "number" &&
        typeof m1 === "number" &&
        typeof m2 === "number" &&
        typeof s1 === "number" &&
        typeof s2 === "number"
      ) {
        str = `${h1}${h2}:${m1}${m2}:${s1}${s2}`;
      }
      return str;
    }
  },
  created() {
    document.addEventListener("keyup", this.handleKeyUp);
  },
  destroyed() {
    document.removeEventListener("keyup", this.handleKeyUp);
  }
};
</script>

<style lang="scss" scoped>
.time {
  position: relative;
  display: inline-block;
  width: 100%;

  .time__inner {
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    height: 100%;
    outline: none;
    padding: 0 15px;
    width: 100%;
    font-size: 0;

    &.disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;

      input {
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }

    input {
      box-sizing: border-box;
      height: 100%;
      width: 8px;
      border: none;
      outline: none;
      color: #606266;
      padding: 0;
    }

    input,
    span {
      display: inline-block;
      vertical-align: middle;
      font-size: 12px;
    }
  }
}
</style>
