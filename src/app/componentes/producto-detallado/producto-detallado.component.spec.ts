import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetalladoComponent } from './producto-detallado.component';

describe('ProductoDetalladoComponent', () => {
  let component: ProductoDetalladoComponent;
  let fixture: ComponentFixture<ProductoDetalladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoDetalladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoDetalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
