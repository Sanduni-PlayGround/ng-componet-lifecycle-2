import {AfterViewInit, Component, ContentChild, ElementRef, viewChild} from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements AfterViewInit{

  @viewChild("h2")
  viewH2ElmRef!: ElementRef;
  @ContentChild("h2")
  contentH2ElmRef!: ElementRef;

  ngAfterViewInit(): void {
    this.viewH2ElmRef.nativeElement.style.backgroundColor = 'lightblue';
  }


}
