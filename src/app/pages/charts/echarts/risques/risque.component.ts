import { Component , Input } from '@angular/core';

@Component({
  selector: 'ngx-risque',
  styleUrls: ['./risque.component.scss'],
  templateUrl: './risque.component.html',
})
export class RisqueComponent { 
  items = [{ title: 'Identifié' }, { title: 'Analysé' },{ title: 'Evalué' },{ title: 'Avec plan de Réponse définie' },{ title: 'En cours de traitement' },{ title: 'Avec plan daction défini' }];

constructor(){}


  }
