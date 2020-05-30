import { Component, OnInit } from '@angular/core';
import { Note } from './notes/note';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {

  constructor() { }

  notes: Note[];

  ngOnInit(): void {
    this.notes = [
      new Note('Spisak za kupovinu', 'Hleb, Mleko, Jogurt'),
      new Note('Angular kurs', 'Treba da uradimo nei projekat kako bi mogli da polazemo kurs'),
      new Note('Neki naslov', 'Kreativnitekstkojinikonecitaniticenekocitati'),
      new Note('Spisak za kupovinu', 'Hleb, Mleko, Jogudrt'),
    ];
  }

}
