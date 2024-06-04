import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FavoritePlacesComponent} from './favorite-places/favorite-places.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FavoritePlacesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
      title = 'Lesson 5 Hands-On Starter: Margaret Hamilton';
      city = 'Paoli, Indiana';
      tagline = 'There was no choice but to be pioneers; no time to be beginners.';
      aboutMe = 'I am an American computer scientist, systems engineer, and business owner. I was Director of the Software Engineering Division of the MIT Instrumentation Laboratory, which developed on-board flight software for the Apollo space program. In 1986, I became the founder and CEO of Hamilton Technologies, Inc., in Cambridge, Massachusetts. The company was developed around the Universal Systems Language based on my paradigm of Development Before the Fact (DBTF) for systems and software design. I have published over 130 papers, proceedings, and reports about the 60 projects and six major programs in which I have been involved. On November 22, 2016, I was awarded the Presidential Medal of Freedom by U.S. President Barack Obama for my work leading the development of on-board flight software for NASAs Apollo Moon missions.'
 
}
