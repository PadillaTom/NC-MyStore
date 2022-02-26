import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCustomComponent } from './layout-custom.component';

describe('LayoutCustomComponent', () => {
  let component: LayoutCustomComponent;
  let fixture: ComponentFixture<LayoutCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
