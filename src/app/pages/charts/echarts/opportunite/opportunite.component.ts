import { Component , Input } from '@angular/core';
import { DataProvider} from '../dataProvider'
@Component({
  selector: 'ngx-opportunite',
  styleUrls: ['./opportunite.component.scss'],
  templateUrl: './opportunite.component.html',
})
export class OpportuniteComponent { 
  opportunites;
  items = [{ title: 'Important' }, { title: 'Started' }];
  constructor(private data : DataProvider){
    let opportunites;
    opportunites= this.data;
    opportunites.getOpportunites().subscribe((data)=>{
      console.log(data);
      this.opportunites=data;
    })
  }


  }
