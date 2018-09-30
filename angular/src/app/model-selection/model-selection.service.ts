import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ModelSelectionService {

	active_model: string = '';

	constructor(private http: HttpClient){}

	getModel(): string {
		return this.active_model;
	}

	setModel(active_model: string){
		this.active_model = active_model;
		console.log(this.active_model);
	}

	getAllModels() {
		const url = environment.API_URL;
		return this.http.get<string[]>(url)
	}
}
