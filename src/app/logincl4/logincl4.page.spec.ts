import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Logincl4Page } from './logincl4.page';

describe('Logincl4Page', () => {
  let component: Logincl4Page;
  let fixture: ComponentFixture<Logincl4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Logincl4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
