import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TreeNodeComponent, IconComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
