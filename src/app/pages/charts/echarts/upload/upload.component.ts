import { Component , Input } from '@angular/core';
import { DataProvider} from '../dataProvider'
@Component({
  selector: 'ngx-upload',
  styleUrls: ['./upload.component.scss'],
  templateUrl: './upload.component.html',
})
export class UploadComponent { 
  uploads;
  items = [{ title: 'Last Week' }, { title: 'Last Month' }];
  constructor(private data : DataProvider){
    let uploads;
    uploads= this.data;
    uploads.getUploads().subscribe((data)=>{
      console.log(data);
      this.uploads=data;
    })
  }


  }
