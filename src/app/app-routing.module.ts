import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { EstadisticaDescriptivaComponent } from './page/statsI/estadistica-descriptiva/estadistica-descriptiva.component';
import { TeoriaProbabilidadComponent } from './page/statsI/teoria-probabilidad/teoria-probabilidad.component';
import { FuncionesProbabilidadComponent } from './page/statsI/funciones-probabilidad/funciones-probabilidad.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'statsI/estadistica-descriptiva', component: EstadisticaDescriptivaComponent },
  { path: 'statsI/teoria-probabilidad', component: TeoriaProbabilidadComponent },
  { path: 'statsI/funciones-probabilidad', component: FuncionesProbabilidadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
