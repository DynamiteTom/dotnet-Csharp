import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyPropsComponent } from './read-only-props.component';

describe('ReadOnlyPropsComponent', () => {
  let component: ReadOnlyPropsComponent;
  let fixture: ComponentFixture<ReadOnlyPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadOnlyPropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
