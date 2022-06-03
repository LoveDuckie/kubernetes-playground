import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QueuesComponent } from './pages/queues/queues.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { ErrorPagenotfoundComponent } from './error-pages/error-pagenotfound/error-pagenotfound.component';
import { ErrorInternalservererrorComponent } from './error-pages/error-internalservererror/error-internalservererror.component';
import { ErrorDynamicComponent } from './error-pages/error-dynamic/error-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QueuesComponent,
    WorkersComponent,
    ErrorPagenotfoundComponent,
    ErrorInternalservererrorComponent,
    ErrorDynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
