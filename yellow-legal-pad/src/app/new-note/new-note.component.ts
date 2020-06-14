import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }

  save(): void {
    this.notesService.addNote(new Note('asasas', 'aasas', true, undefined));
  }

}
