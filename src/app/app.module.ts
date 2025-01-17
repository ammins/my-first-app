import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDataComponent } from './test-data/test-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactivefrmComponent } from './reactivefrm/reactivefrm.component';
import { TemplatefrmComponent } from './templatefrm/templatefrm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TestDataComponent,
    DashboardComponent,
    ReactivefrmComponent,
    TemplatefrmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
