import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNoteComponent } from './child-note.component';

describe('ChildNoteComponent', () => {
  let component: ChildNoteComponent;
  let fixture: ComponentFixture<ChildNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
