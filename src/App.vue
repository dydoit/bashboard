<template>
  <div id="app"></div>
</template>
<script>
import * as echarts from 'echarts'
import { GD } from './guangdong.js'
import data from './data'
const cityData = data.map(item => {
  return {
    value: item.gridCount,
    name: item.orgName,
    orgCode: item.orgCode
  }
})
console.log(cityData)
export default {
  data() {
    return {
      a: '1'
    }
  },
  mounted() {
    echarts.registerMap('广东', GD)
    const myChart = echarts.init(document.getElementById('app'))
    myChart.hideLoading()
    myChart.setOption({
      tooltip: {
        show: false
      },
      legend: { show: false },
      // 主要配置
      series: [
        {
          tooltip: {
            // 显示的窗口
            show: false
          },
          name: '广东省数据',
          type: 'map',
          map: '广东',
          zoom: 1,
          label: {
            // 文字
            show: true,
            color: '#000',
            fontSize: 10
          },
          selectedMode: 'single',
          itemStyle: {
            normal: {
              borderWidth: 1, // 区域边框宽度
              borderColor: '#009fe8', // 区域边框颜色
              color: function(params) {
                // 颜色列表
                const colorList = [
                  'rgb(30, 144, 255)',
                  'rgb(124, 205, 124)',
                  'rgb(255, 160, 122)',
                  'rgb(30, 144, 255)',
                  'rgb(124, 205, 124)',
                  'rgb(255, 160, 122)',
                  'rgb(30, 144, 255)',
                  'rgb(124, 205, 124)',
                  'rgb(255, 160, 122)',
                  'rgb(30, 144, 255)',
                  'rgb(124, 205, 124)',
                  'rgb(255, 160, 122)',
                  'rgb(30, 144, 255)',
                  'rgb(124, 205, 124)',
                  'rgb(255, 160, 122)',
                  'rgb(30, 144, 255)',
                  'rgb(124, 205, 124)',
                  'rgb(255, 160, 122)',
                  'rgb(30, 144, 255)',
                  'rgb(124, 205, 124)',
                  'rgb(255, 160, 122)',
                  'rgb(30, 144, 255)',
                  'rgb(124, 205, 124)',
                  'rgb(255, 160, 122)'
                ]
                // 返回颜色
                return colorList[params.dataIndex]
              }
            },
            emphasis: {
              borderWidth: 2,
              borderColor: '#4b0082',
              areaColor: '#e4393c'
            }
          },
          select: {
            itemStyle: {
              areaColor: '#000'
            }
          },
          data: []
        }
      ]
    })
  }
}
</script>
<style lang="less">
#app {
  width: 800px;
  height: 400px;
  margin: 20px auto;
  border: 1px solid #000;
}
</style>
