import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MarkdownModule } from 'ngx-markdown';
import { ContentEditorComponent } from './components/content-editor/content-editor.component';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [
    AppComponent,
    ContentEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
