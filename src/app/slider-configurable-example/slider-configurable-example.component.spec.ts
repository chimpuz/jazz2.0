import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderConfigurableExampleComponent } from './slider-configurable-example.component';

describe('SliderConfigurableExampleComponent', () => {
  let component: SliderConfigurableExampleComponent;
  let fixture: ComponentFixture<SliderConfigurableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderConfigurableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderConfigurableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
