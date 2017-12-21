import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieThumbComponent } from './movie-thumb.component';

describe('MovieThumbComponent', () => {
  let component: MovieThumbComponent;
  let fixture: ComponentFixture<MovieThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
