import { Action, createReducer, on } from '@ngrx/store';
import { FlattenTreeNode } from '../interfaces/tree.interface';
import { expandNode, unExpandNode } from './tree.action';

interface State extends FlattenTreeNode {}

export const treeNodeFeatureKey = 'tree';

export const initialState: State = {
  data: {
    type: '',
    name: '',
    id: 0,
  },
  expandable: false,
  type: '',
  isExpand: false,
  isSelect: false,
  parentSelected: false,
  children: [],
  level: 0,
};

const scoreboardReducer = createReducer(
  initialState,
  on(expandNode, (state: State) => ({
    ...state,
    isExpand: (state.isExpand = true),
  })),
  on(unExpandNode, (state: State) => ({
    ...state,
    isExpand: (state.isExpand = false),
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return scoreboardReducer(state, action);
}
