import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponent } from './my-home-component/my-home-component.component';
import { MyAboutComponent } from './my-about-component/my-about-component.component';
import { BookComponent } from './book/book.component';
import { FullBookDisplayerComponent } from './full-book-displayer/full-book-displayer.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home',  component: MyHomeComponent },
  { path: 'books/:bookID',  component: FullBookDisplayerComponent },
  // { path: 'about', component: MyAboutComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyAboutComponent,
    BookComponent,
    FullBookDisplayerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
