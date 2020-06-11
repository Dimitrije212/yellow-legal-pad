import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { NewNoteComponent } from './new-note/new-note.component';


const routes: Routes = [
  {path: 'myNotes', component: DisplayNotesComponent},
  {path: '', redirectTo: '/myNotes', pathMatch: 'full'},
  {path: 'newNote', component: NewNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
