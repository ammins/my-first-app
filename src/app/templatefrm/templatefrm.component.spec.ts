import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatefrmComponent } from './templatefrm.component';

describe('TemplatefrmComponent', () => {
  let component: TemplatefrmComponent;
  let fixture: ComponentFixture<TemplatefrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatefrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatefrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
