<template>
  <div class="time">
    <div class="time__inner">
      <input ref="timeRef" v-model="time.hh" type="text" @focus="flag=true" @blur="flag = false" />
    </div>
  </div>
</template>

<script>
let key1 = "";
let key2 = "";
let key3 = "";
let key4 = "";
let key5 = "";
let key6 = "";
export default {
  data() {
    return {
      time: {
        hh: ""
      },
      flag: false,
      count: 1
    };
  },
  methods: {
    handleKeyUp(e) {
      let key = window.event.keyCode || window.event.which;

      if (this.flag) {
        if (this.time.hh.length <= 1) {
          this.count = 1;
        }
        if (/^Digit/.test(e.code) || /^Numpad/gi.test(e.code)) {
          if (this.count === 1 && Number(e.code[e.code.length - 1]) <= 2) {
            // 输入第一位
            key1 = e.code[e.code.length - 1];
            this.count++;
            this.time.hh = `${key1}0:00:00`;
          } else if (this.count === 2) {
            // 输入第二位
            const hh = key1 + e.code[e.code.length - 1];
            if (hh <= 23) {
              key2 = e.code[e.code.length - 1];
              this.count++;
              this.time.hh = `${key1}${key2}:00:00`;
            } else {
              this.time.hh = this.time.hh.substring(0, this.time.hh.length - 1);
            }
          } else if (this.count === 3) {
            // 输入第三位
            if (Number(e.code[e.code.length - 1]) <= 5) {
              key3 = e.code[e.code.length - 1];
              this.count++;
              this.time.hh = `${key1}${key2}:${key3}0:00`;
            } else {
              this.time.hh = this.time.hh.substring(0, this.time.hh.length - 1);
            }
          } else if (this.count === 4) {
            // 输入第四位
            const hh = key1 + e.code[e.code.length - 1];
            if (hh <= 59) {
              key4 = e.code[e.code.length - 1];
              this.count++;
              this.time.hh = `${key1}${key2}:${key3}${key4}:00`;
            } else {
              this.time.hh = this.time.hh.substring(0, this.time.hh.length - 1);
            }
          } else if (this.count === 5) {
            // 输入第五位
            if (Number(e.code[e.code.length - 1]) <= 5) {
              key5 = e.code[e.code.length - 1];
              this.count++;
              this.time.hh = `${key1}${key2}:${key3}${key4}:${key5}0`;
            } else {
              this.time.hh = this.time.hh.substring(0, this.time.hh.length - 1);
            }
          } else if (this.count === 6) {
            // 输入第六位
            const hh = key1 + e.code[e.code.length - 1];
            if (hh <= 59) {
              key6 = e.code[e.code.length - 1];
              this.count++;
              this.time.hh = `${key1}${key2}:${key3}${key4}:${key5}${key6}`;
            } else {
              this.time.hh = this.time.hh.substring(0, this.time.hh.length - 1);
            }
          } else {
            this.time.hh = this.time.hh.substring(0, this.time.hh.length - 1);
          }
        } else {
          this.time.hh = this.time.hh.substring(0, this.time.hh.length - 1);
        }
      }
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

  .time__inner {
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    // line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    input {
      box-sizing: border-box;
      height: 100%;
      //   width: 20px;
      width: 100%;
      border: none;
      outline: none;
      color: #606266;
    }
  }
}
</style>