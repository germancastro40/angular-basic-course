import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class heroeComponent{
    nombre: string = 'German'
    edad: number = 20

    obtenerNombre(){
        return `${this.nombre} -> ${this.edad} `
    }

    cambiarNombre(): void{
        this.nombre= 'Spiderman'
    }

    cambiarEdad(): void{
        this.edad = 30
    }
} 