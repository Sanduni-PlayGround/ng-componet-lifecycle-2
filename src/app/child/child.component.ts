import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild, DoCheck,
  ElementRef, Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, viewChild
} from '@angular/core';



@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges, OnInit, AfterContentInit, AfterViewInit, DoCheck, AfterContentChecked, AfterViewChecked, OnDestroy{
  static{
    console.log("0. Static Initializer")//works at the moment class is loaded
  }

  @Input()
  myInputProperty: null | string = null;
  @ContentChild("h1")
  contentH1ElmRef!: ElementRef;
  // @viewChild("h1")
  // viewH1ElmRef!: ElementRef;

  constructor() {
    console.log("1. Constructor")
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("2. OnChanges", this.myInputProperty, this.contentH1ElmRef, this.viewH1ElmRef);
  }

  ngOnInit(): void {
    //console.log("3. OnInit", this.myInputProperty, this.contentH1ElmRef, this.viewH1ElmRef);

  }

  ngAfterContentInit(): void {
    //console.log("5. AfterContentInit", this.myInputProperty, this.contentH1ElmRef, this.viewH1ElmRef);

  }

  ngAfterViewInit(): void {
    //console.log("6. AfterViewInit", this.myInputProperty, this.contentH1ElmRef, this.viewH1ElmRef);
  }

  ngAfterContentChecked(): void {
    console.log("4. DoChecked");
  }

  ngAfterViewChecked(): void {
    console.log("6. AfterContentChecked");
  }

  ngDoCheck(): void {
    console.log("8. AfterViewChecked");
  }

  ngOnDestroy(): void {
  }


}
