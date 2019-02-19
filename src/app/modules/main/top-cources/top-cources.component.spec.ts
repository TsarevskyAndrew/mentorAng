import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCourcesComponent } from './top-cources.component';

describe('TopCourcesComponent', () => {
  let component: TopCourcesComponent;
  let fixture: ComponentFixture<TopCourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
