import { Component, Injectable } from '@angular/core';

@Injectable()
export class ModelSelectionService {

	model: string = '';

	getModel(): string {
		return this.model;
	}

	setModel(model: string){
		this.model = model;
	}
}
