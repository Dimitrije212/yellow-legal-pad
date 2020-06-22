import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  {path: 'myNotes', component: DisplayNotesComponent},
  {path: '', redirectTo: '/myNotes', pathMatch: 'full'},
  {path: 'newNote', component: NewNoteComponent},
  {path: 'todoList', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
