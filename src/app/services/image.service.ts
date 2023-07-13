import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ImageService {
  dataSubject: Subject<any> = new Subject<any>();

  constructor() {}
  
}
