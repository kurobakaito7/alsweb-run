//
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(document).ready(function () {
  Highcharts.setOptions({
    colors: ['#8129dd', '#8ec63f', '#2756ca', '#f1b601', '#f86423', '#27aae3']
  })
  const chart1 = $('#container1').highcharts({
    chart: {
      renderTo: 'container1', // 装载图表的div容器id
      type: 'bar',
      backgroundColor: '#1e2131',
      plotBorderColor: '#1c2a38',
    },
    title: false, // 主标题
    subtitle: false, // 副标题
    exporting: { enabled: false // 用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
    },
    xAxis: {
      categories: ['步幅(cm)', '步频', '支撑时间(0.01S)', '步态周期(0.1s)', '步态变化(%)', '步态相位(0.01)'],
      title: {
        text: null
      },
      gridLineWidth: 1,
      lineWidth: 0
    },
    yAxis: {
      min: 0,
      title: {
        text: '步态对称性（ASI）：0.312',
        align: 'low',
        style: {
          color: '#FFF',
          fontSize: 15
        }
      },
      labels: {
        overflow: 'justify'
      },
      gridLineWidth: 0
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        },
        groupPadding: 0.1
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -30,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: '患者',
      data: [50, 87, 47, 9, 12, 54]
    }, {
      name: '标准',
      data: [50, 100, 50, 10, 10, 60]
    }]
  })

  const chart2 = $('#container2').highcharts({
    chart: {
      renderTo: 'container2', // 装载图表的div容器id
      type: 'bar',
      backgroundColor: '#1e2131',
      plotBorderColor: '#1c2a38',
      plotBorderWidth: 1
    },
    title: false, // 主标题
    subtitle: false, // 副标题
    exporting: { enabled: false // 用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
    },
    xAxis: {
      categories: ['阿克苏', '地阿娇', '萨克斯', '奥苏乔', '小乔', '盎司看', '违纪', '万能家', '立海运', '阿萨'],
      labels: {
        style: {
          color: '#9ea0ae'
        }
      },
      tickWidth: '0',
      tickColor: '#1c2a38',
      lineColor: '#1c2a38'
    }, // x系列设置
    yAxis: {
      // min: 0,
      title: {
        text: '排行榜（条）',
        align: 'high'
      },
      tickColor: '#1c2a38',
      gridLineColor: '#1c2a38',
      labels: {
        overflow: 'justify'
      }
    }, // y系列设置
    tooltip: {
      valueSuffix: ' 百万'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          allowOverlap: true,
          color: '#fff'
        },
        borderColor: '', // 去边框
        color: '#0084fe'
      }
    },
    legend: false,
    credits: {
      enabled: false
    },
    series: [{
      name: '发稿量',
      data: [635, 400, 300, 203, 107, 100, 65, 38, 31, 5],
      color: '#0084fe',
      border: '#0084fe'
    }]
  })

  const chart3 = $('#jglxchart').highcharts({
    chart: {
      backgroundColor: '#1e2131',
      type: 'column',
      plotBorderColor: '#1c2a38',
      plotBorderWidth: 1
    },
    title: false,
    xAxis: {
      gridLineColor: '#1c2a38', // 网格线
      tickColor: '#1c2a38', // 刻度线
      lineColor: '#1c2a38', // 轴线
      categories: ['n', 'PF*', 'RP*', 'RE*', 'VT*', 'MH', 'SF*', 'BP', 'GH']
    },
    yAxis: {
      min: 0,
      title: false,
      gridLineColor: '#1c2a38', // 网格线
      tickColor: '#1c2a38' // 刻度线
      /* stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: (Highcharts.theme && Highcharts.theme.textColor) || '#fff'
        }// 柱形图上方数据显示
      } */
    },
    exporting: { enabled: false // 用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      itemStyle: { cursor: 'pointer', color: '#FFF' },
      itemHiddenStyle: { color: '#CCC' }
    },
    tooltip: {
      /* formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    '总量: ' + this.point.stackTotal
      } */
    },
    plotOptions: {
      column: { // 不显示阴影
        bar: false,
        borderWidth: 0 // 柱子边框的大小
      }
    },
    series: [{
      name: '患者',
      data: [46, 53.3, 69.2, 49.8, 62.3, 68.2, 50.4, 75.6, 60.8]
    }, {
      name: '健康人',
      data: [34, 89.2, 87.3, 71.8, 75.3, 70.2, 57.4, 79.3, 61.8]
    }]
  })

  const chart4 = $('#qst-monthchart').highcharts({
    chart: {
      backgroundColor: '#1e2131',
      plotBorderColor: '#1c2a38',
      plotBorderWidth: 1
    },
    title: {
      text: false
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      tickColor: '#1c2a38',
      gridLineColor: '#1c2a38',
      lineColor: '#1c2a38'
    },
    yAxis: {
      title: false,
      gridLineColor: '#1c2a38',
      tickColor: '#1c2a38'
    },
    tooltip: {
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      itemStyle: { cursor: 'pointer', color: '#FFF' },
      itemHiddenStyle: { color: '#CCC' }
    },
    series: [{
      name: '体重',
      data: [14, 13, 15, 17, 19, 14, 13, 15, 17, 19, 16, 15]
    }, {
      name: 'BMI',
      data: [3, 5, 7, 9, 11, 13, 15, 17, 19, 18, 17, 16]
    }, {
      name: '血糖',
      data: [13, 16, 15, 18, 13.5, 17.0, 18.6, 17.9, 14.3, 19.0, 17, 14]
    }, {
      name: '血氧',
      data: [15, 14, 18, 22, 20, 23, 24, 24, 22, 21, 20, 19]
    }, {
      name: '肺活量',
      data: [6, 8, 10, 13, 15, 16, 18, 19, 18, 17, 16, 15]
    }, {
      name: '呼吸指数',
      data: [8, 10, 12, 14, 16, 18, 16, 14, 13, 12, 11, 10]
    }]
  })

  const chart5 = $('#qst-daychart').highcharts({
    chart: {
      backgroundColor: '#1e2131',
      plotBorderColor: '#1c2a38',
      plotBorderWidth: 1
    },
    title: {
      text: false
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      tickColor: '#1c2a38',
      gridLineColor: '#1c2a38',
      lineColor: '#1c2a38'
    },
    yAxis: {
      title: false,
      gridLineColor: '#1c2a38',
      tickColor: '#1c2a38'
    },
    tooltip: {
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      itemStyle: { cursor: 'pointer', color: '#FFF' },
      itemHiddenStyle: { color: '#CCC' }
    },
    series: [{
      name: '全球财经',
      data: [34, 3, 32, 7, 5, 22, 13, 15, 17, 19, 16, 12]
    }, {
      name: '宏观经济',
      data: [3, 5, 7, 3, 11, 13, 5, 17, 0, 8, 7, 6]
    }, {
      name: '货币市场',
      data: [3, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
      name: '外汇市场',
      data: [10, 14, 18, 22, 30, 28, 26, 24, 22, 21, 20, 19]
    }, {
      name: '债券市场',
      data: [6, 8, 10, 13, 15, 16, 18, 19, 18, 17, 16, 15]
    }, {
      name: '大宗商品',
      data: [8, 10, 12, 14, 16, 18, 16, 14, 13, 12, 11, 10]
    }]
  })

  const chart6 = $('#rj-daychart').highcharts({
    chart: {
      backgroundColor: '#1e2131',
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      spacing: [20, 0, 20, 0]
    },
    title: false,
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    exporting: { enabled: false // 用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    plotOptions: {
      pie: {
        borderWidth: 0,
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          color: '#fff',
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      innerSize: '80%',
      name: '曲率',
      data: [
        { name: '重合部分', y: 67.31 },
        {
          name: '不重合',
          y: 32.69,
          sliced: true,
          selected: true
        }
      ]
    }]
  })

  const chart7 = $('#rj-monthchart').highcharts({
    chart: {
      backgroundColor: '#1e2131',
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      spacing: [20, 0, 20, 0]
    },
    title: false,
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}条</b>'
    },
    exporting: { enabled: false // 用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    plotOptions: {
      pie: {
        borderWidth: 0,
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          color: '#fff',
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} 条',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      innerSize: '80%',
      name: '发稿数量',
      data: [
        { name: '人工', y: 67.31 },
        {
          name: '机器人',
          y: 32.69,
          sliced: true,
          selected: true
        }
      ]
    }]
  })

  const chart8 = $('#fbt-monthchart').highcharts({
    chart: {
      backgroundColor: '#1e2131',
      plotBorderColor: '#1c2a38',
      plotBorderWidth: 1
    },
    title: {
      text: false
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      tickColor: '#1c2a38',
      gridLineColor: '#1c2a38',
      lineColor: '#1c2a38'
    },
    yAxis: {
      title: false,
      gridLineColor: '#1c2a38',
      tickColor: '#1c2a38'
    },
    tooltip: {
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      itemStyle: { cursor: 'pointer', color: '#FFF' },
      itemHiddenStyle: { color: '#CCC' }
    },
    series: [{
      name: '左力传感器曲线',
      data: [14, 13, 15, 17, 19, 14, 13, 15, 17, 19, 16, 15, 13, 15, 17, 19, 15, 13, 15, 17, 19, 18, 17, 16]
    }, {
      name: '右传感器曲线',
      data: [13, 15, 17, 19, 15, 13, 15, 17, 19, 18, 17, 16, 14, 13, 15, 17, 19, 14, 13, 15, 17, 19, 16, 15]
    }]
  })

  const chart9 = $('#fbt-daychart').highcharts({
    chart: {
      backgroundColor: '#1e2131',
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
    },
    title: false,
    tooltip: {
      headerFormat: '{series.name}<br>',
      pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    },
    exporting: { enabled: false // 用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      itemStyle: { cursor: 'pointer', color: '#FFF' },
      itemHiddenStyle: { color: '#CCC' }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#FFF'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      name: '发稿量占比',
      data: [
        {
          name: '全球财经',
          y: 2,
          sliced: true,
          selected: true
        },
        ['宏观经济', 30],
        ['货币市场', 4.0],
        ['外汇市场', 24.0],
        ['债券市场', 5.0],
        ['大宗商品', 5.0]
      ]
    }]
  })

  const chart10 = $('#zxlxchart').highcharts({
    chart: {
      backgroundColor: '#1e2131',
      plotBorderColor: '#1c2a38',
      plotBorderWidth: 1
    },
    title: {
      text: false
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      tickColor: '#1c2a38',
      gridLineColor: '#1c2a38',
      lineColor: '#1c2a38'
    },
    yAxis: {
      title: false,
      gridLineColor: '#1c2a38',
      tickColor: '#1c2a38'
    },
    tooltip: {
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      itemStyle: { cursor: 'pointer', color: '#FFF' },
      itemHiddenStyle: { color: '#CCC' }
    },
    series: [{
      name: '左力传感器曲线',
      data: [13, 15, 17, 19, 16, 15, 13, 15, 14, 13, 15, 17, 19, 14, 17, 19, 15, 13, 15, 17, 19, 18, 17, 16]
    }, {
      name: '右传感器曲线',
      data: [13, 15, 17, 16, 14, 13, 15, 17, 19, 14, 13, 15, 17, 19, 15, 13, 15, 17, 19, 18, 17, 19, 16, 15]
    }]
  })
})
