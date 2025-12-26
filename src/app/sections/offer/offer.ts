import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface OfferOption {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer.html',
  styleUrl: './offer.css',
})
export class Offer {
  selectedOffer = signal<string>('2h');

  offers: OfferOption[] = [
    {
      id: '2h',
      title: 'Location 2 heures',
      duration: '2h',
      price: '299',
      description: 'Parfait pour une arrivée élégante ou une séance photo marquante.',
      features: [
        'Chauffeur inclus',
        'Véhicule préparé',
        'Flexibilité horaire',
        'Décoration de base'
      ]
    },
    {
      id: 'half-day',
      title: 'Demi-journée',
      duration: '4h',
      price: '499',
      description: 'Une présence prolongée pour accompagner les moments clés.',
      features: [
        'Chauffeur dédié',
        'Déplacements multiples',
        'Disponibilité étendue',
        'Décoration premium',
        'Retour à l\'hôtel'
      ],
      popular: true
    },
    {
      id: 'full-day',
      title: 'Journée complète',
      duration: '8h',
      price: '799',
      description: 'L\'expérience complète, sans contrainte de temps.',
      features: [
        'Disponibilité totale',
        'Organisation sur mesure',
        'Sérénité absolue',
        'Service personnalisé',
        'Support événementiel'
      ]
    }
  ];

  selectOffer(id: string): void {
    this.selectedOffer.set(id);
  }

  getSelectedOffer(): OfferOption | undefined {
    return this.offers.find(offer => offer.id === this.selectedOffer());
  }
}
