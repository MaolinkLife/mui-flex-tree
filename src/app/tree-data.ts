export const TREE_DATA = {
  data: {
    name: 'ROOT',
    type: 'TYPE_1',
    id: 0
  },
  children: [
    {
      data: {
        name: 'CHILD_1',
        type: 'TYPE_2',
        id: 22
      },
      children: []
    },
    {
      type: 'TYPE_2',
      data: {
        name: 'CHILD_2',
        type: 'TYPE_2',
        id: 41
      },
      children: [
        {
          expandable: false,
          type: 'TYPE_3',
          data: {
            name: 'CHILD_2.1',
            type: 'TYPE_3',
            id: 51
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
            id: 35
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
        id: 3
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
        id: 4
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
        id: 5
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
            id: 101
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
            id: 99
          },
          isExpand: false,
          isSelect: false,
          children: []
        }
      ]
    }
  ]
};

export const CHILD_1 = {
  data: {
    name: 'CHILD_1',
    type: 'TYPE_2',
    id: 22
  }
};

export const CHILD_2 = {
  type: 'TYPE_2',
  data: {
    name: 'CHILD_2',
    type: 'TYPE_2',
    id: 41
  },
  children: []
};
