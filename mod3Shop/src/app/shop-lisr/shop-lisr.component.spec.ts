import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLisrComponent } from './shop-lisr.component';

describe('ShopLisrComponent', () => {
  let component: ShopLisrComponent;
  let fixture: ComponentFixture<ShopLisrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopLisrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopLisrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
