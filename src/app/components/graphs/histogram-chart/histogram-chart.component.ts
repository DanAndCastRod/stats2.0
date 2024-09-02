// src/app/components/graphs/histogram-chart/histogram-chart.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-histogram-chart',
  templateUrl: './histogram-chart.component.html',
  styleUrls: ['./histogram-chart.component.css']
})
export class HistogramChartComponent implements OnInit {
  histogramOptions: any;

  ngOnInit(): void {
    this.histogramOptions = {
      title: {
        text: 'Distribución de Frecuencias',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['[0-10]', '[10-20]', '[20-30]', '[30-40]', '[40-50]']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Frecuencia',
          type: 'bar',
          barWidth: '60%',
          data: [5, 20, 36, 10, 10]
        }
      ]
    };
  }
}
