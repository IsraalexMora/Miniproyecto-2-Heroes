import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionablesComponent } from './coleccionables.component';

describe('ColeccionablesComponent', () => {
  let component: ColeccionablesComponent;
  let fixture: ComponentFixture<ColeccionablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColeccionablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeccionablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
