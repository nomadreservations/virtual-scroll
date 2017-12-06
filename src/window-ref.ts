import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class WindowRef {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  get nativeWindow(): any {
    return this._window;
  }

  private get _window(): any {
    if (isPlatformBrowser(this.platformId)) {
      return window;
    }
    return {} as any;
  }
}
