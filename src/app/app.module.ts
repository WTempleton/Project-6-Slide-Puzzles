import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ThreeByThreeComponent } from './three-by-three/three-by-three.component';
import { FourByFourComponent } from './four-by-four/four-by-four.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ThreeByThreeComponent,
    FourByFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
