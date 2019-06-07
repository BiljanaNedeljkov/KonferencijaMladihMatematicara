import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNSComponent } from './about-ns.component';

describe('AboutNSComponent', () => {
  let component: AboutNSComponent;
  let fixture: ComponentFixture<AboutNSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutNSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
