import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CollectionInfo } from './info.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class InfoService {

	constructor(private http: HttpClient) { }

	getCollectionInfo() {
		return this.http.get<CollectionInfo>(environment.API_URL + 'info');
	}

}