import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetBlockComponent } from './let-block.component';

describe('LetBlockComponent', () => {
  let component: LetBlockComponent;
  let fixture: ComponentFixture<LetBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
