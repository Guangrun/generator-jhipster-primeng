import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { <%= angularXAppName %>SharedModule } from '../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GrowlModule} from 'primeng/components/growl/growl';
import {BrowserService} from './service/browser.service';
import {CarouselModule} from 'primeng/components/carousel/carousel';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    CarouselDemoComponent,
    carouselDemoRoute
} from './';

const PRIMENG_STATES = [
    carouselDemoRoute
];

@NgModule({
    imports: [
        <%= angularXAppName %>SharedModule,
        BrowserAnimationsModule,
        GrowlModule,
        CarouselModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [
        CarouselDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, BrowserService],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angularXAppName %>CarouselDemoModule {}
