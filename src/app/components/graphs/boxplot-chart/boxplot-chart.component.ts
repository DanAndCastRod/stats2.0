// src/app/components/graphs/boxplot-chart/boxplot-chart.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxplot-chart',
  templateUrl: './boxplot-chart.component.html',
  styleUrls: ['./boxplot-chart.component.css']
})
export class BoxplotChartComponent implements OnInit {
  boxplotChartOptions: any;
  exampleData!: { label: string; value: number }[];

  ngOnInit(): void {
    // Datos de ejemplo para Box Plot
    this.exampleData = [
      { label: 'Mínimo', value: 10 },
      { label: 'Primer Cuartil', value: 20 },
      { label: 'Mediana', value: 30 },
      { label: 'Tercer Cuartil', value: 40 },
      { label: 'Máximo', value: 50 }
    ];

    // Datos para el Box Plot
    const data = [[10, 20, 30, 40, 50]];

    this.boxplotChartOptions = {
      title: {
        text: 'Box Plot - Medidas de Dispersión',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ['Datos']
      },
      yAxis: {
        type: 'value',
        name: 'Valor'
      },
      series: [
        {
          name: 'Medidas de Dispersión',
          type: 'boxplot',
          data: data,
          tooltip: {
            formatter: function (param: any) {
              return [
                'Rango: ' + param.data[4] + ' - ' + param.data[0],
                'Cuartil 1: ' + param.data[1],
                'Mediana: ' + param.data[2],
                'Cuartil 3: ' + param.data[3]
              ].join('<br/>');
            }
          }
        }
      ]
    };
  }
}
