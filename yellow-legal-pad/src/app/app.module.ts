import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { ChildNoteComponent } from './child-note/child-note.component';
import { NoteFocusDirective } from './note-focus.directive';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DisableButtonDirective } from './disable-button.directive';
@NgModule({
  declarations: [
    AppComponent,
    DisplayNotesComponent,
    ChildNoteComponent,
    NoteFocusDirective,
    DisableButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
