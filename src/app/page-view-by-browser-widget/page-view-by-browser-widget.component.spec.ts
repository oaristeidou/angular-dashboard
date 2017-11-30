import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewByBrowserWidgetComponent } from './page-view-by-browser-widget.component';

describe('PageViewByBrowserWidgetComponent', () => {
  let component: PageViewByBrowserWidgetComponent;
  let fixture: ComponentFixture<PageViewByBrowserWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageViewByBrowserWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageViewByBrowserWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
