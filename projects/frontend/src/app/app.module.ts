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
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QueuesComponent,
    WorkersComponent,
    ErrorPagenotfoundComponent,
    ErrorInternalservererrorComponent,
    ErrorDynamicComponent,
    DragAndDropDirective,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
