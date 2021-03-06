import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {TriStateCheckboxModule} from 'primeng/components/tristatecheckbox/tristatecheckbox';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    CheckboxDemoComponent,
    checkboxDemoRoute
} from './';

const PRIMENG_STATES = [
    checkboxDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        FormsModule,
        CheckboxModule,
        GrowlModule,
        TriStateCheckboxModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        CheckboxDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>CheckboxDemoModule {}
