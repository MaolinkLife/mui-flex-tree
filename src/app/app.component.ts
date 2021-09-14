import { Component, VERSION } from '@angular/core';
import { FlattenTreeNode, TreeNode } from './interfaces/tree.interface';
import { TREE_DATA } from './tree-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  get rootTree(): FlattenTreeNode {
    return TREE_DATA;
  }

  expandNodeTree(node: FlattenTreeNode): void {
    node.isExpand = !node.isExpand;
  }
}
