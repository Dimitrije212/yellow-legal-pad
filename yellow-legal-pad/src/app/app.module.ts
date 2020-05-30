import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { ChildNoteComponent } from './child-note/child-note.component';
import { NoteFocusDirective } from './note-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    DisplayNotesComponent,
    ChildNoteComponent,
    NoteFocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
