import { Component, OnDestroy , Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-chartjs-multiple-xaxis',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsMultipleXaxisComponent implements OnDestroy {
  data: {};
  options: any;
  themeSubscription: any;

  @Input() public label: string;


  @Input() public labels:Array<string>;

 
  @Input() public datas:Array<any>;
  ngOnInit() {
    console.log(this.label);
    
    this.data = {
      labels: this.labels,
      datasets: [ {
        label: this.label,
        data: this.datas,
        borderColor: '#28aae1',
        backgroundColor: '#28aae1',
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }],
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
       display  :false
      },
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            display: false,
            scaleLabel: {
              display: true,
              labelString: 'Month',
            },
            gridLines: {
              display:false
            },
            ticks: {
              fontColor: '#ffffff',
            },
          },
        ],
        yAxes: [
          {
            display: false,
            scaleLabel: {
              display: true,
              labelString: 'Value',
            },
            gridLines: {
              display:false
            },
            ticks: {
              fontColor: '#ffffff',
            },
          },
        ],
      },
    };
  }
  constructor(private theme: NbThemeService) {
    
   

     

  
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  private random() {
    return Math.round(Math.random() * 100);
  }
}
