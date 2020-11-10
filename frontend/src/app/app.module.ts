import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@app/shared/material.module';
import { HeaderComponent } from './structure/header/header.component';
import { RoutesModule } from '@app/routes/routes.module';
import { AddExcerciseDialogComponent } from './dialogs/add-excercise-dialog/add-excercise-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddExcerciseDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
