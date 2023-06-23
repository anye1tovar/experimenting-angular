import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamePipe } from './core/pipe/name.pipe';
import { SortPipe } from './core/pipe/sort.pipe';
import { HighlightDirective } from './core/directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NamePipe,
    SortPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
