import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../note';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {

  notes: Note[];
  pinnedNotes: Note[];
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
    this.pinnedNotes = [];
    this.pinnedNotes = this.notesService.getPinnedNotes();
  }


}
