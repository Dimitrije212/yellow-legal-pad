import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { NoteEditService } from '../note-edit.service';
import { Note } from '../note';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  colors: string[] = ['#c5d6ce', '#e9ee86', '#afbf30', '#fe102f', '#fc8abf', '#fee6ec'];
  constructor(private notesService: NotesService, private noteEdit: NoteEditService) { }

  count: number;

  note: Note;
  wrt: string[];
  ttl: string;

  ngOnInit(): void {
    this.count = 1;
    this.note = this.noteEdit.getNote();
    this.wrt = this.note ? this.note.writing : [''];
    this.ttl = this.note ? this.note.title : '';
  }

  save(title: string, color: number): void {
    this.notesService.addNote(new Note(title, this.wrt, false, this.colors[color]));
    console.log(this.ttl);


    alert('New note added!');
  }

  add(): void {
    this.wrt.push('');
  }
}
