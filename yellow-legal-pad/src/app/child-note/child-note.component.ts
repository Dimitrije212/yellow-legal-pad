import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../note';
import { Router } from '@angular/router';
import { NoteEditService } from '../note-edit.service';


@Component({
  selector: 'app-child-note',
  templateUrl: './child-note.component.html',
  styleUrls: ['./child-note.component.css']
})
export class ChildNoteComponent implements OnInit {

  @Input() note: Note;
  @Input() notes: Note[];
  @Input() pinnedNotes: Note[];
  @Input() fromPin: boolean;
  show = false;
  pinTitle: string;
  selectedColor: string;

  colors: string[] = ['#c5d6ce', '#e9ee86', '#afbf30', '#fe102f', '#fc8abf', '#fee6ec'];
  constructor(private router: Router, private noteEdit: NoteEditService) { }

  ngOnInit(): void {
    if (this.note.color === undefined) {
      this.note.color = '#e9ee86';
    }

    if (!this.note.pinned) {
      this.pinTitle = 'Pin this note';
    } else {
      this.pinTitle = 'Unpin this note';
    }
  }

  moveLeft(): void {
    const a = this.notes.indexOf(this.note);
    const b = this.notes.indexOf(this.note) - 1;
    if (b >= 0) {
      this.notes[a] = this.notes.splice(b, 1, this.notes[a])[0];
    } else {
      console.log('Error this is the first note', b, ' ', this.notes.length);
    }
  }

  moveRight(): void {
    const a = this.notes.indexOf(this.note);
    const b = this.notes.indexOf(this.note) + 1;
    if (b < this.notes.length) {
      this.notes[a] = this.notes.splice(b, 1, this.notes[a])[0];
    } else {
      console.log('Error this is the last note');
    }
  }

  deleteNote(): void {
    if (confirm('Are you sure you want to delete "' + this.note.title + '"?')) {
      this.notes.splice(this.notes.indexOf(this.note), 1);
      this.pinnedNotes.splice(this.pinnedNotes.indexOf(this.note), 1);
    }
  }

  pinNote(): void {
    if (this.note.pinned) {
      if (!this.fromPin) {
        return;
      }
       // when note is pinned we set value to false and remove them from pinned list.
       // In this case pinned list is this.notes. It is reversed. See display-notes.component.html for more.
      this.note.pinned = false;
      this.notes.splice(this.notes.indexOf(this.note), 1);
      this.pinTitle = 'Unpin this note';
    } else {
       // when note is not pinned we set value to true and push it to pinned list.
       // Here it is not reversed. See display-notes.component.html for more.
      this.note.pinned = true;
      this.pinnedNotes.push(this.note);
      this.pinTitle = 'Pin this note';
    }
    // ERROR CANNOT PUT /assets/notes.json
    // this.notesService.putNotes(this.note).subscribe((n: Note) => {
    //     this.note = n;
    //     console.log(JSON.stringify(n));
    //   } );
    // this.notesService.postNote(this.note).subscribe((n: Note) => {
    //   this.note = n;
    //   console.log(JSON.stringify(n));
    // });

  }

  changeColor(): void {
    const i = this.colors.indexOf(this.note.color);
    this.note.color = this.colors[i + 1];
  }

  editNote(): void {
    this.noteEdit.setNote(this.note);
    this.notes.splice(this.notes.indexOf(this.note), 1);
    this.pinnedNotes.splice(this.pinnedNotes.indexOf(this.note), 1);
    this.router.navigate(['/newNote']);
  }

}
