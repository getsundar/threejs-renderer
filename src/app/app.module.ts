import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  RendererComponentComponent
} from './rendererComponent/renderer-component/renderer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RendererComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RendererComponentComponent]
})
export class AppModule {}
