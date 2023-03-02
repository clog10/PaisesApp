import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
      margin-bottom: 5px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];

  regionActiva: string = '';

  termino: string = '';
  paises: Country[] = [];

  activarRegion(region: string) {
    this.regionActiva = region;
  }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  buscar(termino: string) {

    this.activarRegion(termino);
    this.termino = termino;

    this.paisService.buscarRegion(this.termino).subscribe((response) => {
      this.paises = response;
    });
  }

  constructor(private paisService: PaisService) { }
}


