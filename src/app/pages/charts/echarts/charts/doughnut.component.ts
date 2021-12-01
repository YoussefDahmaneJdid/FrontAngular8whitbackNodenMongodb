import { Component , Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'ngx-doughnut',
  styleUrls: ['./doughnut.component.scss'],
  templateUrl: './doughnut.component.html',
})
export class DoughnutComponent { 

@Input() public title : string ;
@Input() public icon : string ;
@Input() public doughnutChartLabels: Label[]  ;
@Input() public doughnutChartData: MultiDataSet ;
@Input() public chartType : string ;




constructor(){}







}
