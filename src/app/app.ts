import { afterNextRender, Component, signal } from '@angular/core';
import AOS from 'aos';

import { Footer } from './components/footer/footer';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    About,
    Contact,
    Experience,
    Footer,
    Hero,
    Navbar,
    Projects,
    Skills
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('portfolio-website');

  constructor() {
    afterNextRender(() => {
      AOS.init({
        duration: 1000,
        once: true
      });
    });
  }
}