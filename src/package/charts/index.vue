<template>
  <div ref="myCharts" style="width: 600px;height:400px;"></div>
</template>

<script>
export default {
    data() {
        return {
            option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            }
        }
    },
    mounted() {
        const myCharts = this.$refs.myCharts
        myCharts.setOption(this.option);
    }
}
</script>

<style lang="scss" scoped>
</style>