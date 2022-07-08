import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsAllBrowsersComponent } from './es-all-browsers.component';

describe('EsAllBrowsersComponent', () => {
  let component: EsAllBrowsersComponent;
  let fixture: ComponentFixture<EsAllBrowsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsAllBrowsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsAllBrowsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
