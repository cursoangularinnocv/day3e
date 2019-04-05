import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBookDisplayerComponent } from './full-book-displayer.component';

describe('FullBookDisplayerComponent', () => {
  let component: FullBookDisplayerComponent;
  let fixture: ComponentFixture<FullBookDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullBookDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBookDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
