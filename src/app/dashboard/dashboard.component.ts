import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../Services/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    title = 'Dashboard';
    heroes: Hero[] = [];
    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        this.heroService.getHeroes().then(h => this.heroes = h.slice(1, 5));
    }
}