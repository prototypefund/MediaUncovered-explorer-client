import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeywordMapping } from './keyword-mapping.interface';
import { ModelSelectionService } from '../model-selection/model-selection.service';
import { environment } from '../../environments/environment';

@Injectable()
export class KeywordMappingService {

	constructor(private http: HttpClient,
							private modelService: ModelSelectionService) { }

	getKeywordMapping(keywordMapping: KeywordMapping){
		let model = this.modelService.getModel();
		const url = environment.API_URL + '/' + model + '/keywordMapping';
		return this.http.post(url, keywordMapping)
	}
}
