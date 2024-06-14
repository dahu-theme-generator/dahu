import { FormsModule } from '@angular/forms';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component'; // Adjust the path as needed





@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule // Add ReactiveFormsModule here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
