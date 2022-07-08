import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeGenericsComponent } from './type-generics.component';

describe('TypeGenericsComponent', () => {
  let component: TypeGenericsComponent;
  let fixture: ComponentFixture<TypeGenericsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeGenericsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeGenericsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
