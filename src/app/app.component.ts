import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FlattenTreeNode, TreeNode } from './interfaces/tree.interface';
import { TREE_DATA } from './tree-data';

enum TYPES {
  'TYPE_1',
  'TYPE_2'
}

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
    const tree = this.covertedTree(TREE_DATA);
    console.log('converted', tree);
    this.tree$.next(tree);
  }

  covertedTree(node: TreeNode): FlattenTreeNode {
    let convertedNodes: FlattenTreeNode[] = [];

    if (node.children && node.children.length > 0) {
      convertedNodes = node.children.map((childNode: TreeNode) =>
        this.covertedTree(childNode)
      );
    }

    const flattenNode: FlattenTreeNode = {
      expandable: node.children && node.children.length > 0,
      data: {
        name: node.data.name,
        id: node.data.id,
        type: node.data.type
      },
      isExpand: node.data.type === 'TYPE_1' ? true : false,
      isSelect: false,
      type: TYPES[node.data.type],
      ...(convertedNodes.length > 0 ? { children: convertedNodes } : {})
    };

    return flattenNode;
  }

  unSelectTreeNodes(node: FlattenTreeNode, currentNode: FlattenTreeNode): void {
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
