import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';

import { App } from './app/app';

import AOS from 'aos';

AOS.init({
  duration: 1000,
  once: true
});

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));