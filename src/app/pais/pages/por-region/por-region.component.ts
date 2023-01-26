import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px
    }
    `
  ]
})
export class PorRegionComponent{

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  getClaseCSS( region: string){
    return ( this.regionActiva === region ) ? 'btn btn-primary':'btn btn-outline-primary';
  }

  activarRegion( region:string){
    if( region === this.regionActiva){ return; }
    this.regionActiva = region;
    this.paises = [];
    //TODO: HACER EL LLAMADO A LOS SERVICIOS
    this.paisService.buscarRegion( region ).subscribe( paises => {
      this.paises = paises;
    }, (err) => {
      this.paises = [];
    });
  }

  

}
