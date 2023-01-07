import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePersonaComponent } from './save-persona.component';

describe('SavePersonaComponent', () => {
  let component: SavePersonaComponent;
  let fixture: ComponentFixture<SavePersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
