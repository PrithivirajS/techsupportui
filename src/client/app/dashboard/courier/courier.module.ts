import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CourierComponent } from './courier.component';

@NgModule({
    imports: [FormsModule],
    declarations: [CourierComponent],
    exports: [CourierComponent]
})

export class CourierComponentModule { }
