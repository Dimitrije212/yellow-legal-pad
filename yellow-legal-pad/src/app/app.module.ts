import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { ChildNoteComponent } from './child-note/child-note.component';
import { NoteFocusDirective } from './note-focus.directive';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DisableButtonDirective } from './disable-button.directive';
import { NewNoteComponent } from './new-note/new-note.component';
import { HttpClientModule } from '@angular/common/http';
import { ClickLinkPipe } from './click-link.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DisplayNotesComponent,
    ChildNoteComponent,
    NoteFocusDirective,
    DisableButtonDirective,
    NewNoteComponent,
    ClickLinkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
