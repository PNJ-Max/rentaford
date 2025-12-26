import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appScrollProgress]',
  standalone: true,
})
export class ScrollProgressDirective {
  /** Déclenche la progression calculée (0 → 1) */
  @Output() progressChange = new EventEmitter<number>();

  /**
   * Hauteur de scène en “nombre de viewports”.
   * Exemple: 1 = 100vh, 2 = 200vh (scrollytelling classique).
   */
  @Input() sceneVh = 2;

  private lastProgress = -1;

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('window:scroll')
  onScroll() {
    this.emitProgress();
  }

  @HostListener('window:resize')
  onResize() {
    this.emitProgress();
  }

  ngOnInit() {
    // Premier calcul dès le rendu
    queueMicrotask(() => this.emitProgress());
  }

  private emitProgress() {
    const host = this.el.nativeElement;
    const rect = host.getBoundingClientRect();
    const vh = window.innerHeight;

    // “scène” = sceneVh * viewportHeight
    const sceneHeight = this.sceneVh * vh;

    // On définit une zone de progression: quand le top du host passe
    // de vh → -(sceneHeight - vh)
    const start = vh; // quand la section arrive en bas du viewport
    const end = -(sceneHeight - vh); // quand elle “termine” sa scène

    const raw = (start - rect.top) / (start - end);
    const progress = clamp(raw, 0, 1);

    // Évite d'émettre trop souvent si variation minuscule
    if (Math.abs(progress - this.lastProgress) > 0.001) {
      this.lastProgress = progress;
      this.progressChange.emit(progress);
    }
  }
}

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}
