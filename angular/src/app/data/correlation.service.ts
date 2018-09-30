import {EventEmitter, Injectable, Output} from '@angular/core';

import {Observable, of, Subject} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ModelSelectionService} from '../model-selection/model-selection.service';
import {environment} from '../../environments/environment';
import {Correlation} from './correlation';

@Injectable({
  providedIn: 'root',
})
export class CorrelationService {

  hasError: boolean = false;

  private correlationsSource = new Subject<Correlation[]>();
  correlations$ = this.correlationsSource.asObservable();

  constructor(private http: HttpClient,
							private modelService: ModelSelectionService) { }

  query(word: string): void {
		let model = this.modelService.getModel();
    const url = environment.API_URL + '/' + model + "/query/" + word;
    this.http.get<Correlation[]>(url).subscribe(correlations => {
        this.correlationsSource.next(correlations);
        this.hasError = false;
      },
      error => {
        console.log('ERROR in Correlation Service Query');
        this.hasError = true;
      });
  }

}
