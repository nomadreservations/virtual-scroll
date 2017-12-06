import {
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollComponent } from './virtual-scroll.component';
import { WindowRef } from './window-ref';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VirtualScrollComponent],
  exports: [VirtualScrollComponent],
  providers: [ WindowRef ]
})
export class VirtualScrollModule { }
