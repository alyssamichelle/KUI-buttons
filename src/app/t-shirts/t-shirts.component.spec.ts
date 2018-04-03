import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtsComponent } from './t-shirts.component';

describe('TShirtsComponent', () => {
  let component: TShirtsComponent;
  let fixture: ComponentFixture<TShirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TShirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
