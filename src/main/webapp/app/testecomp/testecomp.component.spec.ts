import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestecompComponent } from './testecomp.component';

describe('TestecompComponent', () => {
  let component: TestecompComponent;
  let fixture: ComponentFixture<TestecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestecompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
