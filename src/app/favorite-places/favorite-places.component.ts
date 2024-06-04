import { Component, OnInit } from '@angular/core';
import { Place } from '../models/place';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-favorite-places',
  standalone: true,
  imports: [],
  templateUrl: './favorite-places.component.html',
  styleUrl: './favorite-places.component.css'
})
export class FavoritePlacesComponent {
  places!: Place[];
  placeDataService: PlacesService;

  constructor(private placesService: PlacesService) {
    this.placeDataService = this.placesService;
  }

  ngOnInit() {
    this.places = this.placeDataService.places;
  }

}
