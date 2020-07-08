<template>
  <div>
    <div id="pdfDom" style="padding-top:50px;">
      <div class="container">
        <h2 class="title">温馨提示</h2>
        <div class="content">
          <p>系统正在升级中...</p>
          <p>
            预计开放时间：
            <span>2020-06-19 04:00:00</span>
          </p>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="getPdf('pdfDom', htmlTitle)">导出PDF</button>
    <!-- getPdf()是我们在main.js中绑定在Vue中的，固定名称，直接调用即可下载，无需在methods中写方法 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlTitle: "页面导出PDF文件名" //pdf文件下载的名称
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  height: 240px;
  border: 1px solid #eba25e;
  margin: 100px auto 0;
}

h2 {
  margin-top: 32px;
  font-size: 22px;
  color: #dd8002;
  text-align: center;
}

.content {
  padding-left: 40px;
  font-size: 18px;
}
</style>