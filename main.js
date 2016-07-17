$(function () {
    $('#skills').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                'WORDPRESS',
                'PHOTOSHOP',
                'INCOPY',
                'SEO',
                'EXCEL'
            ],
            tickLength: 0
        },
        yAxis: {
            max : 100,
            title: {
                text: null
            },
            labels: {
                enabled: false
            },
            gridLineWidth: 0
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointWidth: 82,
                pointPadding: 0.4,
                borderWidth: 0,
                colorByPoint: true
            }
        },
        series: [{
            name: 'Skill Level',
            data: [100, 60, 80, 100, 80],
            colors: ['#F40000', '#F8D1D2', '#F40000', '#F8D1D2', '#F40000']

        }],
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
});