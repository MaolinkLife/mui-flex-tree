import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FlattenTreeNode } from './interfaces/tree.interface';
import { TREE_DATA } from './tree-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  tree$: BehaviorSubject<FlattenTreeNode> = new BehaviorSubject(null);

  get rootTree(): FlattenTreeNode {
    return TREE_DATA;
  }

  ngOnInit(): void {
    this.tree$.next(TREE_DATA);
  }

  unSelectTreeNodes(node: FlattenTreeNode, currentNode: FlattenTreeNode): void {
    console.log('recursity node', node, 'current', node);
    if (node.children && node.children.length > 0) {
      for (const childNode of node.children) {
        this.unSelectTreeNodes(childNode, currentNode);
      }
    }

    if (currentNode.data.id !== node.data.id) {
      node.isSelect = false;
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

      this.unSelectTreeNodes(this.tree$.value, node);
      node.isSelect = true;
    }
  }
}
