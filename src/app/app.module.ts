import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule,
  Injector
} from '@angular/core';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  RendererComponent
} from './rendererComponent/renderer-component/renderer-component.component';
import {
  createCustomElement
} from '@angular/elements';
import {
  APP_BASE_HREF
} from '@angular/common';

@NgModule({
  declarations: [
    RendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  entryComponents: [RendererComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const elements: any[] = [
      [RendererComponent, 'threed-renderer']
    ];
    for (const [component, name] of elements) {
      const el = createCustomElement(component, {
        injector: this.injector
      });
      customElements.define(name, el);
    }
  }
}
