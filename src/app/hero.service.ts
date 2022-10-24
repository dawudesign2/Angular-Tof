import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { Hero } from './hero';
import { HEROES } from './mockHeroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messagesService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messagesService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id) as Hero;
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
