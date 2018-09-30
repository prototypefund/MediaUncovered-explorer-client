import { Component, OnInit } from '@angular/core';
import { ModelSelectionService } from './model-selection.service';

@Component({
  selector: 'app-model-selection',
  templateUrl: './model-selection.component.html',
  styleUrls: ['./model-selection.component.css']
})
export class ModelSelectionComponent {

	model: string = '';

	constructor(private modelService: ModelSelectionService) { }

	setModel(model: string) {
		this.modelService.setModel(model);
	}


}
