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
import {
  DragDropModule
} from '@angular/cdk/drag-drop';
import {
  MatExpansionModule
} from '@angular/material/expansion';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  MatSliderModule
} from '@angular/material/slider';
import {
  MatInputModule
} from '@angular/material';
import {
  MatSlideToggleModule
} from '@angular/material/slide-toggle';
import {
  FormsModule
} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RendererComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  entryComponents: [AppComponent, RendererComponent]
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
