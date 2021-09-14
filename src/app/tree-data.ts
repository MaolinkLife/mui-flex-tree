export const TREE_DATA = {
  expandable: true,
  type: 'TYPE_1',
  data: {
    name: 'ROOT',
    type: 'TYPE_1',
    id: 0
  },
  isExpand: true,
  isSelect: false,
  children: [
    {
      expandable: false,
      type: 'TYPE_2',
      data: {
        name: 'CHILD_1',
        type: 'TYPE_2',
        id: 1
      },
      isExpand: false,
      isSelect: false,
      children: []
    },
    {
      expandable: true,
      type: 'TYPE_2',
      data: {
        name: 'CHILD_2',
        type: 'TYPE_2',
        id: 2
      },
      isExpand: false,
      isSelect: false,
      children: [
        {
          expandable: false,
          type: 'TYPE_3',
          data: {
            name: 'CHILD_2.1',
            type: 'TYPE_3',
            id: 2
          },
          isExpand: false,
          isSelect: false,
          children: []
        },
        {
          expandable: false,
          type: 'TYPE_3',
          data: {
            name: 'CHILD_2.2',
            type: 'TYPE_3',
            id: 2
          },
          isExpand: false,
          isSelect: false,
          children: []
        }
      ]
    },
    {
      expandable: false,
      type: 'TYPE_2',
      data: {
        name: 'CHILD_3',
        type: 'TYPE_2',
        id: 1
      },
      isExpand: false,
      isSelect: false,
      children: []
    },
    {
      expandable: false,
      type: 'TYPE_2',
      data: {
        name: 'CHILD_4',
        type: 'TYPE_2',
        id: 1
      },
      isExpand: false,
      isSelect: false,
      children: []
    },
    {
      expandable: true,
      type: 'TYPE_2',
      data: {
        name: 'CHILD_5',
        type: 'TYPE_2',
        id: 1
      },
      isExpand: false,
      isSelect: false,
      children: [
        {
          expandable: false,
          type: 'TYPE_3',
          data: {
            name: 'CHILD_5.1',
            type: 'TYPE_3',
            id: 2
          },
          isExpand: false,
          isSelect: false,
          children: []
        },
        {
          expandable: false,
          type: 'TYPE_3',
          data: {
            name: 'CHILD_5.2',
            type: 'TYPE_3',
            id: 2
          },
          isExpand: false,
          isSelect: false,
          children: []
        }
      ]
    }
  ]
};
