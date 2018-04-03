import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickersComponent } from './stickers.component';

describe('StickersComponent', () => {
  let component: StickersComponent;
  let fixture: ComponentFixture<StickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
