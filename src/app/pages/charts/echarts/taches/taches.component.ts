import { Component , Input } from '@angular/core';
import { DataProvider} from '../dataProvider'
@Component({
  selector: 'ngx-taches',
  styleUrls: ['./taches.component.scss'],
  templateUrl: './taches.component.html',
})
export class TachesComponent { 
  items = [{ title: 'Statu' }, { title: 'Périodicité de lévaluation' },{ title: 'Priorité de laction' },{ title: 'Catégorie' }];

   taches ;

  constructor(private data : DataProvider){
  let taches;
  taches= this.data;
  taches.getTaches().subscribe((data)=>{
    console.log(data);
    this.taches=data;
  })
}


    




}
