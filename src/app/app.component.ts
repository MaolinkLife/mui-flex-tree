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

  recursity(node: FlattenTreeNode, currentNode: FlattenTreeNode): void {
    if (node.children && node.children.length > 0) {
      for (const childNode of node.children) {
        this.recursity(childNode, currentNode);
      }
    }

    if (currentNode.data.id !== node.data.id) {
    }

    return;
  }

  expandNodeTree(node: FlattenTreeNode): void {
    node.isExpand = !node.isExpand;
  }

  selectNodeTree(node: FlattenTreeNode): void {
    if (!node.isSelect) {
      const currentNodeSelect = node.isSelect;
      const root = this.rootTree;

      if (root.data.id !== node.data.id) {
        if (root.children && root.children.length > 0) {
          for (const childNode of root.children) {
            if (childNode.data.id !== node.data.id) {
            }
          }
        }
      }

      node.isSelect = true;
    }
  }
}
