import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CancelledComponent } from './cancelled.component';

@NgModule({
    imports: [FormsModule],
    declarations: [CancelledComponent],
    exports: [CancelledComponent]
})

export class CancelledComponentModule { }
