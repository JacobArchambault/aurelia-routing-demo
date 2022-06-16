import {RouterConfiguration, Router} from 'aurelia-router';
import { PLATFORM } from "aurelia-framework";
  
export class App {

  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = 'Routing demo';
    config.map([
      { route: '',   moduleId: PLATFORM.moduleName('home/home'), title: 'Home' }
    ]);
  }
}
