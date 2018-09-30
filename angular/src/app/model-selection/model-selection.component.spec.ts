import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSelectionComponent } from './model-selection.component';
import { ModelSelectionService } from './model-selection.service';

describe('ModelSelectionComponent', () => {

	let service: ModelSelectionService;
  let component: ModelSelectionComponent;
  let fixture: ComponentFixture<ModelSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelSelectionComponent ],
			providers: [ModelSelectionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSelectionComponent);
    component = fixture.componentInstance;
		service = TestBed.get(ModelSelectionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
