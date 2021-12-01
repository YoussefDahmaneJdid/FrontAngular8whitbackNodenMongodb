import { Component , Input } from '@angular/core';

@Component({
  selector: 'ngx-activities',
  styleUrls: ['./lastactivities.component.scss'],
  templateUrl: './lastactivities.component.html',
})
export class LastactivitiesComponent { 
  items = [{ title: 'Last week' }, { title: 'Last month' }];
constructor(){}


  }
