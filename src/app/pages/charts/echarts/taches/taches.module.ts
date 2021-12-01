import { Observable } from 'rxjs';



export interface Taches {
  title: string;
  nom : string ;
  date:string;
  type : string;
}



export abstract class TachesData {
  abstract getListTaches(): Observable<Taches[]>;
 
}
