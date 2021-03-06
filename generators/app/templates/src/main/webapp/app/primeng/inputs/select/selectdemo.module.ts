import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {MultiSelectModule} from 'primeng/components/multiselect/multiselect';
import {GrowlModule} from 'primeng/components/growl/growl';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {CountryService} from './service/country.service';

import {
    SelectDemoComponent,
    selectDemoRoute
} from './';

const PRIMENG_STATES = [
    selectDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        FormsModule,
        DropdownModule,
        MultiSelectModule,
        GrowlModule,
        SelectButtonModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        SelectDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, CountryService],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>SelectDemoModule {}
