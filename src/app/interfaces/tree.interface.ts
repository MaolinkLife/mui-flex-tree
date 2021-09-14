export interface TreeNode {
  data: {
    id: number;
    name: string;
    type: string;
  };
  children?: TreeNode[];
}

export interface NodeData {
  type: string;
  name: string;
  id: number;
}

export interface FlattenTreeNode {
  data: NodeData;
  expandable: boolean;
  type: string;
  isExpand: boolean;
  isSelect: boolean;

  parentSelected?: boolean /** Возможно сделать через get */;
  children?: FlattenTreeNode[];
  level?: number;
}
