import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FlowchartModule } from "@jsplumb-components/flowchart-angular"


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FlowchartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
