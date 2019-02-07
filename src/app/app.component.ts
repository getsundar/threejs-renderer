import {
  Component,
  Injector
} from '@angular/core';
import {
  createCustomElement,
  NgElement,
  WithProperties
} from '@angular/elements';
import {
  RendererComponent
} from './rendererComponent/renderer-component/renderer-component.component';
import {
  DomSanitizer
} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'threed-renderer';
  content = null;
  constructor(public injector: Injector, public domSanitizer: DomSanitizer) {}
  ngOnInit(): void {
    // const popupEl: NgElement & WithProperties < RendererComponent > = document.createElement('app-renderer-component') as any;

    // seat

    // popupEl.modelPath = '../assets/models/Seat/scene.gltf';
    // popupEl.rendererWidth = 500;
    // popupEl.rendererHeight = 500;
    // popupEl.showAxishelper = true;
    // popupEl.axisHelperSize = 50;
    // popupEl.cameraPosition = [-100, 30, 60];
    // popupEl.controlsPosition = [0, 30, 0];

    // aircraft

    // popupEl.showAxishelper = false;
    // popupEl.axisHelperSize = 10000;
    // popupEl.cameraPosition = [0, 4000, 45000];
    // popupEl.controlsPosition = [0, 0, 0];
    // popupEl.rendererWidth = 1000;
    // popupEl.rendererHeight = 600;
    // popupEl.modelPath = '../assets/models/A320/scene.gltf';
    // document.body.appendChild(popupEl);
  }
}
