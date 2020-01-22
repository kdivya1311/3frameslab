import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {
 MatExpansionModule
} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { EmailFilterPipe} from './email-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmailFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
