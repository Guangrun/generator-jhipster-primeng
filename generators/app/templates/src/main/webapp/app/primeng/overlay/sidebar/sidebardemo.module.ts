import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import {ButtonModule} from 'primeng/components/button/button';
import {SidebarModule} from 'primeng/components/sidebar/sidebar';
import {GrowlModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    SideBarDemoComponent,
    sidebarDemoRoute
} from './';

const PRIMENG_STATES = [
    sidebarDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        ButtonModule,
        SidebarModule,
        GrowlModule,
        BrowserAnimationsModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        SideBarDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>SideBarDemoModule {}
