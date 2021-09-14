import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FlattenTreeNode } from '../interfaces/tree.interface';

@Component({
  selector: 'mui-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.less']
})
export class TreeNodeComponent implements OnInit {
  @Input()
  level: number;

  @Input()
  node: FlattenTreeNode;

  @Output()
  expandNodeChange: EventEmitter<FlattenTreeNode> = new EventEmitter();

  @Output()
  selectNodeChange: EventEmitter<FlattenTreeNode> = new EventEmitter();

  @HostBinding()
  get selected(): boolean {
    return this.node.isSelect;
  }

  constructor() {}

  ngOnInit() {}

  get size(): string {
    return this.level * 8 + 'px';
  }

  get currentLevel(): number {
    console.log(this.level);
    return this.level + 1;
  }
  selectNode(): void {}

  expandNode(event: MouseEvent): void {
    this.expandNodeChange.emit(this.node);
  }
}
