// src/app/components/graphs/bar-chart/bar-chart.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  barChartOptions: any;

  ngOnInit(): void {
    this.barChartOptions = {
      title: {
        text: 'Medidas de Tendencia Central',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Media', 'Mediana', 'Moda'],
        bottom: 0
      },
      xAxis: {
        type: 'category',
        data: ['Conjunto 1', 'Conjunto 2', 'Conjunto 3']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        { name: 'Media', type: 'bar', data: [10, 20, 30], color: '#5470c6' },
        { name: 'Mediana', type: 'bar', data: [15, 25, 35], color: '#91cc75' },
        { name: 'Moda', type: 'bar', data: [12, 22, 32], color: '#fac858' }
      ]
    };
  }
}
