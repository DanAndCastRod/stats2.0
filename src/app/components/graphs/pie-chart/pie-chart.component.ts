// src/app/components/graphs/pie-chart/pie-chart.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  pieChartOptions: any;

  ngOnInit(): void {
    this.pieChartOptions = {
      title: {
        text: 'Distribución de Datos',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: '0',
        left: 'center'
      },
      series: [
        {
          name: 'Distribución',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 40, name: 'Categoría A' },
            { value: 30, name: 'Categoría B' },
            { value: 20, name: 'Categoría C' },
            { value: 10, name: 'Categoría D' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}
