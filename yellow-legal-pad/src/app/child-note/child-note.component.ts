import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../display-notes/notes/note';

@Component({
  selector: 'app-child-note',
  templateUrl: './child-note.component.html',
  styleUrls: ['./child-note.component.css']
})
export class ChildNoteComponent implements OnInit {

  @Input() note: Note;

  constructor() { }

  ngOnInit(): void {
  }

}
