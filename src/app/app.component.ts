import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FlattenTreeNode, TreeNode } from './interfaces/tree.interface';
import { TREE_DATA } from './tree-data';

enum TYPES {
  'ROOT',
  'TYPE_1',
  'TYPE_2',
  'TYPE_3'
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  tree$: BehaviorSubject<FlattenTreeNode> = new BehaviorSubject(null);

  ngOnInit(): void {
    const tree = this.covertedTree(TREE_DATA);
    this.tree$.next(tree);
  }

  /** Конрветирует данные для отрисовки в дереве */
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
      isExpand: node.data.type === 'ROOT' ? true : false,
      isSelect: false,
      type: TYPES[node.data.type],
      ...(convertedNodes.length > 0 ? { children: convertedNodes } : {})
    };

    return flattenNode;
  }

  /** Убирает селект со всех нод */
  unSelectTreeNodes(node: FlattenTreeNode, currentNode: FlattenTreeNode): void {
    if (node.children && node.children.length > 0) {
      node.children.forEach((childNode: FlattenTreeNode) =>
        this.unSelectTreeNodes(childNode, currentNode)
      );
    }

    if (currentNode.data.id !== node.data.id) {
      node.isSelect = false;
    }
  }

  /** Раскрывает ноду */
  expandNodeTree(node: FlattenTreeNode): void {
    node.isExpand = !node.isExpand;

    console.log('expanded Node', node);
  }

  /** Выбор ноды */
  selectNodeTree(node: FlattenTreeNode): void {
    if (!node.isSelect) {
      this.unSelectTreeNodes(this.tree$.value, node);
      node.isSelect = true;
    }

    console.log('selected Node', node);
  }
}
