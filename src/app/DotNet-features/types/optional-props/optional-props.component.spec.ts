import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalPropsComponent } from './optional-props.component';

describe('OptionalPropsComponent', () => {
  let component: OptionalPropsComponent;
  let fixture: ComponentFixture<OptionalPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionalPropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
