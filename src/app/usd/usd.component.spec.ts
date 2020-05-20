import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USDComponent } from './usd.component';

describe('USDComponent', () => {
  let component: USDComponent;
  let fixture: ComponentFixture<USDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
