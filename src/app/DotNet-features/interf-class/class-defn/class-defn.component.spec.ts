import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDefnComponent } from './class-defn.component';

describe('ClassDefnComponent', () => {
  let component: ClassDefnComponent;
  let fixture: ComponentFixture<ClassDefnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassDefnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDefnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
