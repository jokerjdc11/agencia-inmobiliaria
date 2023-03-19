import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmobiliariaComponent } from './inmobiliaria.component';

describe('InmobiliariaComponent', () => {
  let component: InmobiliariaComponent;
  let fixture: ComponentFixture<InmobiliariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmobiliariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmobiliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
