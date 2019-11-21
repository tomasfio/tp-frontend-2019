import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbCategoriasComponent } from './cb-categorias.component';

describe('CbCategoriasComponent', () => {
  let component: CbCategoriasComponent;
  let fixture: ComponentFixture<CbCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
