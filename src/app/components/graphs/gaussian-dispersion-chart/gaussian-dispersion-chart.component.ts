// src/app/components/graphs/gaussian-dispersion-chart/gaussian-dispersion-chart.component.ts
import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../../../services/chart-data.service';

@Component({
  selector: 'app-gaussian-dispersion-chart',
  templateUrl: './gaussian-dispersion-chart.component.html',
  styleUrls: ['./gaussian-dispersion-chart.component.css']
})
export class GaussianDispersionChartComponent implements OnInit {
  exampleData: { label: string; value: number }[] = [];
  gaussianDispersionChartOptions: any;

  constructor(private chartDataService: ChartDataService) { }

  ngOnInit(): void {
    // Suscribirse a cambios en los datos
    this.chartDataService.data$.subscribe(data => {
      this.exampleData = data;
      // Aquí puedes actualizar la configuración del gráfico si los datos cambian
    });

    // Datos para la campana de Gauss con medidas de dispersión
    const data = this.generateGaussianData(0, 1);

    this.gaussianDispersionChartOptions = {
      title: {
        text: 'Campana de Gauss con Medidas de Dispersión',
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
              { xAxis: -1, name: '-1σ' },
              { xAxis: 1, name: '+1σ' }
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
