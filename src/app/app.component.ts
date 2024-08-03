import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChildComponent} from "./child/child.component";
import {FirstComponent} from "./first/first.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, FirstComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  text = Math.random().toFixed(2) + "";

  updateText(){
    this.text = Math.random().toFixed(2) + "";
  }
}
