import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from './board/board.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserLoggedInComponent } from './user-logged-in/user-logged-in.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContainerComponent } from './main-container/main-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardComponent,
    ProjectsComponent,
    UserLoggedInComponent,
    TopBarComponent,
    MainContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
