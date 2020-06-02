import { Component, OnInit } from '@angular/core';
import { Note } from './notes/note';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {

  notes: Note[];
  pinnedNotes: Note[];
  constructor() { }

  ngOnInit(): void {
    this.notes = [
      new Note('Spisak za kupovinu', 'Hleb, Mleko, Jogurt', false),
      new Note('Angular kurs', 'Treba da uradimo nei projekat kako bi mogli da polazemo kurs', true),
      new Note('Neki naslov', 'Kreativnitekstkojinikonecitaniticenekocitati', false),
      new Note('Spisak za kupovinu', 'Hleb, Mleko, Jogudrt', false),
    ];
    this.pinnedNotes = [];

    this.notes.forEach(note => {
      if (note.pinned) {
        this.pinnedNotes.push(note);
      }
    });
  }


}
