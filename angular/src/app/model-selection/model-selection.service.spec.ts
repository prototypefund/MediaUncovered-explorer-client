import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSelectionService } from './model-selection.service';

describe('ModelSelectionService', () => {

	let service: ModelSelectionService;

  beforeEach(() => {
		service = new ModelSelectionService();
  });

  it('should create a service instance', () => {
    expect(service).toBeTruthy();
  });

	it('should have a model property with empty string', () => {
		expect(service.getModel()).toEqual('');
	});

	it('should return test as model', () => {
		service.model='test';
		expect(service.getModel()).toEqual('test');
	});

	it('should change model to test', () => {
		expect(service.getModel()).toEqual('');
		service.model='test';
		expect(service.getModel()).toEqual('test');
	});
});
