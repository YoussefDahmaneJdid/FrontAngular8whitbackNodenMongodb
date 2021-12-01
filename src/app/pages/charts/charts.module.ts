import { Taches } from './echarts/taches/taches.module';

import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NbCardModule } from '@nebular/theme';
import {NbListModule , NbDatepickerModule , NbCheckboxModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as d3 from 'd3';
import { ChartsRoutingModule, routedComponents } from './charts-routing.module';

import { ChartjsMultipleXaxisComponent } from './echarts/chartjs-multiple-xaxis.component';

import { EchartsLineComponent } from './echarts/echarts-line.component';
import { EchartsPieComponent } from './echarts/echarts-pie.component';
import { EchartsBarComponent } from './echarts/echarts-bar.component';
import { EchartsMultipleXaxisComponent } from './echarts/echarts-multiple-xaxis.component';
import { EchartsAreaStackComponent } from './echarts/echarts-area-stack.component';
import { EchartsBarAnimationComponent } from './echarts/echarts-bar-animation.component';
import { EchartsRadarComponent } from './echarts/echarts-radar.component';

import {NbContextMenuModule} from '@nebular/theme';
import {IncidentComponent} from './echarts/incidents/incident.component';
import { ChartsModule } from 'ng2-charts';
import { NewsService } from './news.service'
import {  TachesComponent } from './echarts/taches/taches.component';
import { UploadComponent } from './echarts/upload/upload.component';
import {RisqueComponent } from './echarts/risques/risque.component';
import {LastactivitiesComponent } from './echarts/lastactivities/lastactivities.component';
import {OpportuniteComponent} from './echarts/opportunite/opportunite.component';
import {DoughnutComponent} from './echarts/charts/doughnut.component';
import {DataProvider} from './echarts/dataProvider';
const components = [

  EchartsLineComponent,
  EchartsPieComponent,
  EchartsBarComponent,
  EchartsMultipleXaxisComponent,
  EchartsAreaStackComponent,
  EchartsBarAnimationComponent,
  EchartsRadarComponent,
  ChartjsMultipleXaxisComponent,

  
  OpportuniteComponent,
  LastactivitiesComponent,
  TachesComponent,
  UploadComponent,
  IncidentComponent,
  RisqueComponent,
  DoughnutComponent


];

@NgModule({
  imports: [
    ThemeModule,
    ChartsRoutingModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartsModule,
    ChartModule,
    NbCardModule,
    NbListModule,
    NbDatepickerModule,
    NbCheckboxModule,
    NbContextMenuModule,

  ],schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [...routedComponents, ...components], providers: [
    NewsService,DataProvider
  ]
})
export class ChartsModules {}
