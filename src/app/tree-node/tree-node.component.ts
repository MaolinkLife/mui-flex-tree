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

  @HostBinding('attr.data-host-parent-selected')
  @Input()
  parentSelected: boolean;

  @Output()
  expandNodeChange: EventEmitter<FlattenTreeNode> = new EventEmitter();

  @Output()
  selectNodeChange: EventEmitter<FlattenTreeNode> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  get size(): string {
    return this.level * 8 + 'px';
  }

  get selected(): boolean {
    return this.node.isSelect;
  }

  get currentLevel(): number {
    return this.level + 1;
  }
  selectNode(event: MouseEvent): void {
    this.selectNodeChange.emit(this.node);
  }

  expandNode(event: MouseEvent): void {
    this.expandNodeChange.emit(this.node);
  }
}
