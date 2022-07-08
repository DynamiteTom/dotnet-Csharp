import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeInferenceComponent } from './type-inference.component';

describe('TypeInferenceComponent', () => {
  let component: TypeInferenceComponent;
  let fixture: ComponentFixture<TypeInferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeInferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeInferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
