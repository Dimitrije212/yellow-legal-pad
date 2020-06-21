import { Injectable } from '@angular/core';
import { Note } from './note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  url = 'assets/notes.json';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  private pinnedNotes: Note[];

  private notes = [
    new Note('Spisak za kupovinu', 'Hleb, Mleko, Jogurt', false, undefined),
    new Note('Angular kurs', 'Treba da uradimo nei projekat kako bi mogli da polazemo kurs', true, undefined),
    new Note('Neki naslov', 'Kreativnitekstkojinikonecitaniticenekocitati', false, undefined),
    new Note('Spisak za kupovinu', 'Hleb, Mleko, Jogudrt', false, undefined),
    new Note('Matf', 'http://www.matf.bg.ac.rs/', false, undefined)
  ];

  constructor(private http: HttpClient) {
    // this.http.get<Note[]>(this.url).subscribe(
    //   notes => this.notes = notes,
    //   error => console.error(error)
    // );
    // console.log(this.notes);

    // this.pinnedNotes = [];
    // this.http.get<Note[]>(this.url).pipe(
    //     map(notes => notes.filter(note => note.pinned === true))
    //   ).subscribe(
    //     notes => this.pinnedNotes = notes,
    //     error => console.error(error)
    // );
 }


  getNotes(): Note[] {
    return this.notes;
  }

  getPinnedNotes(): Note[] {
    this.pinnedNotes = [];

    this.notes.forEach(note => {
      if (note.pinned) {
        this.pinnedNotes.push(note);
      }
    });
    return this.pinnedNotes;
  }
  // putNotes(note: Note) {
  //   // console.log(note);
  //   const options = {headers: {'Content-Type': 'application/json'}};
  //   return this.http.put<Note>('http://httpbin.org/put', note, options);
  // }
  // postNote(note: Note) {
  //   // console.log(note);
  //   const options = {headers: {'Content-Type': 'application/json'}};
  //   return this.http.post<Note>(this.url, note, options);
  // }
  addNote(note: Note): void {
    this.notes.push(note);
  }
}
