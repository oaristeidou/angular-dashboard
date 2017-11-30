import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressionsByCountryWidgetComponent } from './impressions-by-country-widget.component';

describe('ImpressionsByCountryWidgetComponent', () => {
  let component: ImpressionsByCountryWidgetComponent;
  let fixture: ComponentFixture<ImpressionsByCountryWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressionsByCountryWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressionsByCountryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
