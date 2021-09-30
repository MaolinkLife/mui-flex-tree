import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { IconComponent } from './icon/icon.component';
import { MuiFlexTreeModule } from './mui-flex-tree/mui-flex-tree.module';

@NgModule({
  imports: [BrowserModule, FormsModule, MuiFlexTreeModule],
  declarations: [AppComponent, IconComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
