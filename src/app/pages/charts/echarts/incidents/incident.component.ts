import { Component , Input } from '@angular/core';
import { DataProvider} from '../dataProvider'
@Component({
  selector: 'ngx-incident',
  styleUrls: ['./incident.component.scss'],
  templateUrl: './incident.component.html',
})
export class IncidentComponent { 
  incidents;
  items = [{ title: 'Faible' }, { title: 'Moyenne' },{ title: 'Elevé' }];
  constructor(private data : DataProvider){
    let incident;
    incident= this.data;
    incident.getIncidents().subscribe((data)=>{
      console.log(data);
      this.incidents=data;
    })
  }
  


  }
