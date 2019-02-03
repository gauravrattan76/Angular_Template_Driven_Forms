import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './emloyees/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './emloyees/create-employee/create-employee.component';
import {routing} from './Routing';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
