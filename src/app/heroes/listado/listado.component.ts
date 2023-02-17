import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['berserk', 'vagabond', 'jujutsu kaisen', 'one piece'];
  heroeBorrado: string = ''

  borrarElemento(){
    this.heroeBorrado = this.heroes.shift() || ''

   
  }

}
