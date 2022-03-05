import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormDescriptionComponent } from './components/form/form-description/form-description.component';
import { HomeComponent } from './components/home/home.component';
import { SubmittedApplicationsComponent } from './components/submitted-applications/submitted-applications.component';
import { SubmitComponent } from './components/form/submit/submit.component';

@NgModule({
  declarations: [AppComponent, FormComponent, FormDescriptionComponent, HomeComponent, SubmittedApplicationsComponent, SubmitComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
