import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[resaltado]'
})
export class ResaltadoDirective {

  constructor(private elementRef:ElementRef, private render:Renderer) 
  { 
  }

  @HostListener('mouseenter') mouseEnter()
  {
    this.render.setElementClass(this.elementRef.nativeElement, "fila-seleccionada", true);
  }

  @HostListener('mouseleave') mouseLeave()
  {
    this.render.setElementClass(this.elementRef.nativeElement, "fila-seleccionada", false);
  }
}
