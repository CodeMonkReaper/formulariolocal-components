import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clase4SumRestPage } from './clase4-sum-rest.page';

describe('Clase4SumRestPage', () => {
  let component: Clase4SumRestPage;
  let fixture: ComponentFixture<Clase4SumRestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Clase4SumRestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
