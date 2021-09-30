import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { MuiFlexTreeComponent } from './mui-flex-tree.component';
import { MuiFlexTreeNodeComponent } from '../tree-node/tree-node.component';

@NgModule({
  imports: [CommonModule, StoreModule.forRoot({})],
  declarations: [MuiFlexTreeComponent, MuiFlexTreeNodeComponent],
  exports: [MuiFlexTreeComponent, MuiFlexTreeNodeComponent],
})
export class MuiFlexTreeModule {}
