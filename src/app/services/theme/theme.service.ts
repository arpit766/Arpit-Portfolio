import { Injectable } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'arpit-portfolio-theme';

  get mode(): ThemeMode {
    const stored = localStorage.getItem(this.storageKey) as ThemeMode | null;
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return 'dark';
  }

  init(): void {
    this.apply(this.mode);
  }

  toggle(): void {
    const next: ThemeMode = this.mode === 'dark' ? 'light' : 'dark';
    localStorage.setItem(this.storageKey, next);
    this.apply(next);
  }

  private apply(mode: ThemeMode): void {
    document.body.classList.toggle('theme-light', mode === 'light');
    document.body.classList.toggle('theme-dark', mode === 'dark');
  }
}
