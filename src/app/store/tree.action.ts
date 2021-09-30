enum ACTIONS {
  ExpandTreeNode = '[Tree] ExpandNode',
  UnExpandNode = '[Tree] UnExpandNode',
  SelectNode = '[Tree] SelectNode',
  UnSelectNode = '[Tree] UnSelectNode',
}

interface Action {
  type: string | keyof typeof ACTIONS;
}

import { createAction, props } from '@ngrx/store';
import { FlattenTreeNode } from '../interfaces/tree.interface';

export const expandNode = createAction(
  '[Tree] expandNode',
  props<{ node: FlattenTreeNode }>()
);

export const unExpandNode = createAction(
  '[Tree] unExpandNode',
  props<{ node: FlattenTreeNode }>()
);
