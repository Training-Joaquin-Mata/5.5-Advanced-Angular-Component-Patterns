import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SwitchComponent } from '../switch/switch.component';
import { ToggleModule } from '../toggle/toggle.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ToggleModule ],
  declarations: [ AppComponent, SwitchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }