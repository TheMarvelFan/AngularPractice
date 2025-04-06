import {Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appHover]',
  standalone: false
})
export class HoverDirective implements OnInit {

  @Input()
  appHover: string = "red";

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {

  }

  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = this.color;
    // this.document.getElementById("password")?.classList.add("hidden");
    this.renderer.setStyle(this.element.nativeElement, "backgroundColor", this.appHover);
  }

  @HostListener("mouseenter")  // used to listen to event being applied on component with which directive is attached
  onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, "backgroundColor", "white");
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, "backgroundColor", "blue");
  }
}
