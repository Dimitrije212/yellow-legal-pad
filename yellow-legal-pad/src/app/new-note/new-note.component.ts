import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note';
import { NoteEditService } from '../note-edit.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  colors: string[] = ['#c5d6ce', '#e9ee86', '#afbf30', '#fe102f', '#fc8abf', '#fee6ec'];
  constructor(private notesService: NotesService, private noteEdit: NoteEditService) { }

  note: Note;
  wrt: string;
  ttl: string;

  ngOnInit(): void {
    this.note = this.noteEdit.getNote();
    this.wrt = this.note ? this.note.writing : '';
    this.ttl = this.note ? this.note.title : '';
  }

  save(title: string, writing: string, color: number): void {
    this.notesService.addNote(new Note(title, writing, false, this.colors[color]));

    alert('New note added!');
  }

}
