import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewPieChartWidgetComponent } from './page-view-pie-chart-widget.component';

describe('PageViewPieChartWidgetComponent', () => {
  let component: PageViewPieChartWidgetComponent;
  let fixture: ComponentFixture<PageViewPieChartWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageViewPieChartWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageViewPieChartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
