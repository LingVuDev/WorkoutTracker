import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedCardComponent } from './news-feed-card.component';

describe('NewsFeedCardComponent', () => {
  let component: NewsFeedCardComponent;
  let fixture: ComponentFixture<NewsFeedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
