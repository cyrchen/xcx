import * as echarts from '../../../src/component/ec-canvas/echarts.min.js';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FF9F7F"],
    legend: {
      bottom: 0,
      data: ['预算', '开销']
    },
    tooltip: {},
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      // shape: 'circle',
      indicator: [{
        name: '食品',
        max: 500
      },
      {
        name: '玩具',
        max: 500
      },
      {
        name: '服饰',
        max: 500
      },
      {
        name: '绘本',
        max: 500
      },
      {
        name: '医疗',
        max: 500
      },
      {
        name: '门票0',
        max: 500
      },
      {
        name: '门票1',
        max: 500
      },
      {
        name: '门票2',
        max: 500
      },
      {
        name: '门票3',
        max: 500
      },
      {
        name: '门票4',
        max: 500
      },
      {
        name: '门票5',
        max: 500
      },
      {
        name: '门票6',
        max: 500
      },
      {
        name: '门票7',
        max: 500
      }
      ]
    },
    series: [{
      name: '预算 vs 开销',
      type: 'radar',
      itemStyle: { normal: { areaStyle: { type: 'default' } } },
      data: [{
        value: [0, 0, 0, 500, 100, 400,0,0,0,0,0,0,0],
        name: '预算'
      },
      {
        value: [300, 430, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
        name: '开销'
      }
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({

 
  data: {
    skillLanguage:{
      icon: '/assets/images/report/report-language.png',
      title: "语言-语言智能能力",
      butnLink: "",
      content:[{
        name: '肌肉收缩力',
        level: 3,
      },{
        name: '乳酸代谢与肌肉耐劳度',
        level: 3,
      },{
        name: '最大摄氧量',
        level: 3,
      },{
        name: '膝交叉韧带',
        level: 3,
      }]
    },
    skillBody:{
      icon: '/assets/images/report/report-body.png',
      title: "身体-动觉智能能力",
      butnLink: "",
      content:[{
        name: '肌肉收缩力',
        level: 3,
      },{
        name: '乳酸代谢与肌肉耐劳度',
        level: 1,
      },{
        name: '最大摄氧量',
        level: 3,
      },{
        name: '膝交叉韧带',
        level: 2,
      }]
    },
    skillMusic:{
      icon: '/assets/images/report/report-music.png',
      title: "音乐-节奏智能能力",
      butnLink: "",
      content:[{
        name: '肌肉收缩力',
        level: 3,
      },{
        name: '乳酸代谢与肌肉耐劳度',
        level: 1,
      },{
        name: '最大摄氧量',
        level: 3,
      },{
        name: '膝交叉韧带',
        level: 2,
      }]
    },
    ec: {
      //onInit: initChart
      
    }
  },

  echartInit (e) {
    console.log(e)
    initChart(e.detail.canvas, e.detail.width, e.detail.height);
  },
 

  onLoad: function (options) {

  },
  onReady() {
  },

})