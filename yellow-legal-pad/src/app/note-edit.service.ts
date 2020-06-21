import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteEditService {

  private note: Note;

  constructor() { }

  getNote(): Note {
    const nt = this.note;
    this.note = undefined;
    return nt;
  }

  setNote(newNote: Note): void {
    this.note = newNote;
  }
}
