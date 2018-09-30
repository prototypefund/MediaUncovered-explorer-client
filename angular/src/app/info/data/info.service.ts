import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { ModelSelectionService } from '../../model-selection/model-selection.service';
import { ModelInfo } from './model-info.interface';
import { CollectionInfo } from './collection-info.interface';
import { Reliability } from './reliability.interface';

@Injectable()
export class InfoService {

	constructor(
		private http: HttpClient,
		private modelService: ModelSelectionService,) { }

	getModelInfo() {
		let model = this.modelService.getModel();
		return this.http.get<ModelInfo>(environment.API_URL + model + '/modelInfo');
	}

	getCollectionInfo() {
		let model = this.modelService.getModel();
		return this.http.get<CollectionInfo>(environment.API_URL + model + '/info');
	}

	getReliability(): Observable<Reliability[]> {
		let model = this.modelService.getModel();
		const url = environment.API_URL + model + '/reliability';
		return this.http.get<Reliability[]>(url);
	}
}