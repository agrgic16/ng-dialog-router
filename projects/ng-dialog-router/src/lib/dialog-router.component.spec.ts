import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRouterComponent } from './dialog-router.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DialogRouterComponent', () => {
  let component: DialogRouterComponent;
  let fixture: ComponentFixture<DialogRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRouterComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
