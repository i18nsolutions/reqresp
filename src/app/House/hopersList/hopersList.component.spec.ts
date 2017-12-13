/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HopersListComponent } from './hopersList.component';

describe('HopersListComponent', () => {
  let component: HopersListComponent;
  let fixture: ComponentFixture<HopersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HopersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
