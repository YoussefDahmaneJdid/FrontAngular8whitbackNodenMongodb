import { Component , Input, OnInit} from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { DataProvider} from './dataProvider'
@Component({
  selector: 'ngx-echarts',
  styleUrls: ['./echarts.component.scss'],
  templateUrl: './echarts.component.html',
})
export class EchartsComponent implements OnInit    {
  chartReady1 = false;
  chartReady2 = false;
  chartReady3 = false;
  chartReady4 = false;



  graphReadyRisque = false;
  graphReadyIncident = false;
  graphReadyOppor = false;
  ngOnInit(): void {
     
  }
 
  //////////////////////////: Variable For Chart//////////////////////////////////:
  /// Processus
  public doughnutChartData: MultiDataSet; 
   ProcessGraphValue;
   //// Unites
   public doughnutChartDataUnite: MultiDataSet; 
   UniteGraphValue;
   /// Thematique
   public doughnutChartDataThematique: MultiDataSet; 
   ThematiqueGraphValue;
   /// Entité Externe
   public doughnutChartDataEntiteExterne: MultiDataSet; 
   EntiteExterneGraphValue;


    //////////////////////////:Variable For Graph//////////////////////////////////:
    /// Incident ....
    arraylabelsIncidents : [String];
    dataIncident:[Number];
    valueGraphIncident:Number;
    valueSinceGraphIncident:Number;
    typeI;
    /// Risque 
    arraylabelsRisques:[String];
    dataRisques:[Number];
    valueGraphRisques:Number;
    valueSinceGraphRisques:Number;
    typeR;
    /// Opportunité
    arraylabelsOppor:[String];
    dataOpport:[Number];
    valueGraphOppor:Number;
    valueSinceGraphOppor:Number;
    typeO;






  constructor(private provider : DataProvider){
     
       let services;
       services = this.provider;
       ////////// Get Process Chart
        services.getProcessChart().subscribe((data)=>{
          
          
          this.ProcessGraphValue =data[0].couvert;
          this.doughnutChartData = [
            [data[0].couvert, data[0].nonCouvert]
          ]; this.chartReady1 = true;
        })
         ////////// Get Unite Chart
         services.getUniteChart().subscribe((data)=>{
          
          
          this.UniteGraphValue =data[0].couvert;
          this.doughnutChartDataUnite = [
            [data[0].couvert, data[0].nonCouvert]
          ]; this.chartReady2 = true;
        })
         ////////// Get Thematique Chart
         services.getThematiqueChart().subscribe((data)=>{
          
          
          this.ThematiqueGraphValue =data[0].couvert;
          this.doughnutChartDataThematique = [
            [data[0].couvert, data[0].nonCouvert]
          ]; this.chartReady3 = true;
        })
         ////////// Get Entite Externe Chart
         services.getEntiteExterneChart().subscribe((data)=>{
          
          
          this.EntiteExterneGraphValue =data[0].couvert;
          this.doughnutChartDataEntiteExterne = [
            [data[0].couvert, data[0].nonCouvert]
          ]; this.chartReady4 = true;
        })
         ////////// Get Incidents graph
         services.getIncidentsGraph().subscribe((data)=>{
        
          this.arraylabelsIncidents = data[0].labels;
          this.valueSinceGraphIncident=data[0].valueSince;
          this.dataIncident=data[0].data;
          this.valueGraphIncident = data[0].value;
          this.graphReadyIncident = true;
          this.typeI=data[0].typeOfSince;
          console.log(this.typeI)

        })
         ////////// Get Risque graph
         services.getRisquesGraph().subscribe((data)=>{
        
          this.arraylabelsRisques = data[0].labels;
          this.valueGraphRisques =data[0].value ;
          this.valueSinceGraphRisques=data[0].valueSince;
          this.dataRisques=data[0].data;
          this.graphReadyRisque = true;
          this.typeR=data[0].typeOfSince;
        })
         ////////// Get Opprotuinte graph
        services.getOpporGraph().subscribe((data)=>{
        
          this.arraylabelsOppor = data[0].labels;
          this.valueGraphOppor=data[0].value ;
    this.valueSinceGraphOppor=data[0].valueSince;
          this.dataOpport=data[0].data;
          this.graphReadyOppor = true;
          this.typeO=data[0].typeOfSince;
        })
  }


 
  /////////////////////// Chart Configuration Option-Color-Type-Labels ////////////////////////
  doughnutChartLabels: Label[] = ['Couvert', 'Non couvert'];
  options = {        
    cutoutPercentage: 75,
    legend: {
      display: false
  }
};
  public doughnutChartColors: any[] = 
  [
      {
          backgroundColor: ['#28aae1','#707070']
       ,
          borderColor: '#ffffff'
      }
  ]
  doughnutChartType: ChartType = 'doughnut';
  /////////////////////////////////////////////////////////////////////
 
 

  ///////////////////////:chart incidents 

  chartheaderIncidents = 'yooo' ;
  doughnutChartLabelsIncidents: Label[] = ['Elevé', 'Moyen','Faible'];
  doughnutChartDataIncidents: MultiDataSet = [
    [55, 25 , 8]
  ];
  doughnutChartTypeIncidents: ChartType = 'doughnut';

  public doughnutChartColorsinc: any[] = 
  [
      {
          backgroundColor: ['#ff0000','#f3d300','#0ee100']
       ,
          borderColor: '#ffffff'
      }
  ]


    ///////////////////////:chart Risque
    public doughnutChartColorsrisque: any[] = 
    [
        {
            backgroundColor: ['#00ccff','#ff5400','#0044ff','#0044ff','#f3d300','#ff0000','#ff8888']
         ,
            borderColor: '#ffffff'
        }
    ]
    chartheaderRisque = 'yooo' ;
    doughnutChartLabelsRisque: Label[] = ['Elevé', 'Moyen','Faible','analysé','non analysé','traité','En cours'];
    doughnutChartDataRisque: MultiDataSet = [
      [55, 25 , 8,55, 25 , 8,44]
    ];
    doughnutChartTypeRisque: ChartType = 'doughnut';


 



   
}
