import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {GMapModule} from 'primeng/components/gmap/gmap';
import {GrowlModule} from 'primeng/components/growl/growl';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {ButtonModule} from 'primeng/components/button/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    GmapDemoComponent,
    gmapDemoRoute
} from './';

const PRIMENG_STATES = [
    gmapDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        BrowserModule,
        FormsModule,
        GMapModule,
        WizardModule,
        DialogModule,
        CheckboxModule,
        ButtonModule,
        BrowserAnimationsModule,
        GrowlModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        GmapDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>GmapDemoModule {}
