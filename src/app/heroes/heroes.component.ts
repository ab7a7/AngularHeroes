import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../Services/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private HeroService: HeroService, private router: Router) { }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.HeroService.getHeroes().then(h => this.heroes = h);
  }

  displayDetails(): void {
    this.router.navigate(['/details', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.HeroService.addHero(name).then(h => {
      this.heroes.push(h);
      this.selectedHero = null;
    });
  }
  deleteHero(hero: Hero) {
    this.HeroService.deleteHero(hero.id).then(() =>{
      this.heroes = this.heroes.filter(h => h.id !== hero.id)
      if (this.selectedHero === hero) { this.selectedHero = null; }
    });
    
  }
}