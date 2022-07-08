import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchBugsEarlyComponent } from './catch-bugs-early.component';

describe('CatchBugsEarlyComponent', () => {
  let component: CatchBugsEarlyComponent;
  let fixture: ComponentFixture<CatchBugsEarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchBugsEarlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchBugsEarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
