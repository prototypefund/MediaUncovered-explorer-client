import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelSelectionService } from '../model-selection/model-selection.service';
import { WordPair } from '../data/wordpair.interface';
import { environment } from '../../environments/environment';


@Injectable()
export class AnalogyService{

	constructor(private http:HttpClient,
							private modelService: ModelSelectionService) { }

	getAnalogies(wordpair: WordPair){
		let model = this.modelService.getModel();
		const url = environment.API_URL + '/' + model + '/analogies';
		return this.http.post(url, wordpair)
	}
}
