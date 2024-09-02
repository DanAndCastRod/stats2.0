// src/app/components/graphs/line-chart/line-chart.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  lineChartOptions: any;

  ngOnInit(): void {
    this.lineChartOptions = {
      title: {
        text: 'Tendencias a lo Largo del Tiempo',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Valor',
          type: 'line',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
  }
}
