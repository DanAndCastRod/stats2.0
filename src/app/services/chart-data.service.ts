// src/app/services/chart-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  private dataSubject = new BehaviorSubject<{ label: string; value: number }[]>([]);
  data$ = this.dataSubject.asObservable();

  constructor() {
    // Inicialización de datos de ejemplo
    this.setData([
      { label: 'Media', value: 0 },
      { label: 'Desviación Estándar', value: 1 },
      { label: 'Varianza', value: 1 },
      { label: 'Rango', value: 6 }
    ]);
  }

  // Método para obtener los datos
  getData() {
    return this.dataSubject.value;
  }

  // Método para actualizar los datos
  setData(newData: { label: string; value: number }[]) {
    this.dataSubject.next(newData);
  }
}
