import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyTuplesComponent } from './read-only-tuples.component';

describe('ReadOnlyTuplesComponent', () => {
  let component: ReadOnlyTuplesComponent;
  let fixture: ComponentFixture<ReadOnlyTuplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadOnlyTuplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyTuplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
