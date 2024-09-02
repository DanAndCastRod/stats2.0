// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideComponent } from './components/aside/aside.component';
import { HomeComponent } from './page/home/home.component';
import { StatsIComponent } from './page/stats-i/stats-i.component';
import { EstadisticaDescriptivaComponent } from './page/statsI/estadistica-descriptiva/estadistica-descriptiva.component';
import { TeoriaProbabilidadComponent } from './page/statsI/teoria-probabilidad/teoria-probabilidad.component';
import { FuncionesProbabilidadComponent } from './page/statsI/funciones-probabilidad/funciones-probabilidad.component';

// Importar componentes gráficos
import { BarChartComponent } from './components/graphs/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/graphs/pie-chart/pie-chart.component';
import { HistogramChartComponent } from './components/graphs/histogram-chart/histogram-chart.component';
import { LineChartComponent } from './components/graphs/line-chart/line-chart.component';

// Importar NgxEchartsModule
import { NgxEchartsModule } from 'ngx-echarts';
import { GaussianChartComponent } from './components/graphs/gaussian-chart/gaussian-chart.component';
import { GaussianDispersionChartComponent } from './components/graphs/gaussian-dispersion-chart/gaussian-dispersion-chart.component';
import { BoxplotChartComponent } from './components/graphs/boxplot-chart/boxplot-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    HomeComponent,
    StatsIComponent,
    EstadisticaDescriptivaComponent,
    TeoriaProbabilidadComponent,
    FuncionesProbabilidadComponent,
    BarChartComponent,
    PieChartComponent,
    HistogramChartComponent,
    LineChartComponent,
    GaussianChartComponent,
    GaussianDispersionChartComponent,
    BoxplotChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')  // Configura la carga de ECharts
    })
  ],
  providers: [
    provideClientHydration()  // Asegúrate de que esto sea necesario para tu aplicación
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
