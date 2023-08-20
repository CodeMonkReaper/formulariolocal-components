import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Regcl4Page } from './regcl4.page';

describe('Regcl4Page', () => {
  let component: Regcl4Page;
  let fixture: ComponentFixture<Regcl4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Regcl4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
