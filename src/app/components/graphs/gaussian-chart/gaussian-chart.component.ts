// src/app/components/graphs/gaussian-chart/gaussian-chart.component.ts
import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../../../services/chart-data.service';

@Component({
  selector: 'app-gaussian-chart',
  templateUrl: './gaussian-chart.component.html',
  styleUrls: ['./gaussian-chart.component.css']
})
export class GaussianChartComponent implements OnInit {
  exampleData: { label: string; value: number }[] = [];
  gaussianChartOptions: any;

  constructor(private chartDataService: ChartDataService) { }

  ngOnInit(): void {
    // Obtener datos desde el servicio
    this.exampleData = this.chartDataService.getData();

    // Datos para la campana de Gauss
    const data = this.generateGaussianData(0, 1); // Media 0, Desviación estándar 1

    this.gaussianChartOptions = {
      title: {
        text: 'Campana de Gauss con Media, Moda y Mediana',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'value',
        name: 'Valor',
        min: -3,
        max: 3
      },
      yAxis: {
        type: 'value',
        name: 'Densidad'
      },
      series: [
        {
          name: 'Distribución Normal',
          type: 'line',
          data: data,
          markLine: {
            data: [
              { xAxis: 0, name: 'Media (0)' }, // Media
              { xAxis: -0.5, name: 'Moda (-0.5)' }, // Moda
              { xAxis: 0.1, name: 'Mediana (0.1)' } // Mediana
            ],
            lineStyle: {
              type: 'dashed',
              color: '#ff0000'
            },
            label: {
              formatter: '{b}'
            }
          }
        }
      ]
    };
  }

  // Generar datos para la campana de Gauss
  generateGaussianData(mean: number, stdDev: number): number[][] {
    const data = [];
    for (let i = -3; i <= 3; i += 0.1) {
      const x = i;
      const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-((x - mean) ** 2) / (2 * stdDev ** 2));
      data.push([x, y]);
    }
    return data;
  }
}
