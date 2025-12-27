import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { WhyUs } from '../../shared/why-us/why-us';
import { ServicePresentation } from '../../sections/service-presentation/service-presentation';
import { CarShowcase } from '../../sections/car-showcase/car-showcase';
import { Gallery } from '../../sections/gallery/gallery';
import { Offer } from '../../sections/offer/offer';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    Header,
    Footer,
    WhyUs,
    ServicePresentation,
    CarShowcase,
    Gallery,
    Offer,
    Contact
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
