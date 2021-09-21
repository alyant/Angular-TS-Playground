import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HeroesComponent } from './heroes/heroes.component';
import { HEROES } from './heroes/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
