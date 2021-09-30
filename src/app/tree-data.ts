export const TREE_DATA = {
  data: {
    name: 'ROOT',
    type: 'ROOT',
    id: 0,
  },
  children: [
    {
      data: {
        name: 'CHILD_1',
        type: 'TYPE_5',
        id: 22,
      },
    },
    {
      data: {
        name: 'CHILD_2',
        type: 'TYPE_1',
        id: 41,
      },
      children: [
        {
          data: {
            name: 'CHILD_2.1',
            type: 'TYPE_1',
            id: 51,
          },
          children: [
            {
              data: {
                name: 'CHILD_2.1.1',
                type: 'TYPE_4',
                id: 78,
              },
            },
            {
              data: {
                name: 'CHILD_2.1.2',
                type: 'TYPE_7',
                id: 79,
              },
            },
          ],
        },
        {
          data: {
            name: 'CHILD_2.2',
            type: 'TYPE_3',
            id: 35,
          },
          children: [],
        },
        {
          data: {
            name: 'CHILD_2.1',
            type: 'TYPE_1',
            id: 51,
          },
          children: [
            {
              data: {
                name: 'CHILD_2.1.1',
                type: 'TYPE_4',
                id: 78,
              },
            },
            {
              data: {
                name: 'CHILD_2.1.2',
                type: 'TYPE_7',
                id: 79,
              },
            },
          ],
        },
        {
          data: {
            name: 'CHILD_2.2',
            type: 'TYPE_3',
            id: 35,
          },
          children: [],
        },
      ],
    },
    {
      data: {
        name: 'CHILD_3',
        type: 'TYPE_4',
        id: 3,
      },
      children: [],
    },
    {
      data: {
        name: 'CHILD_4',
        type: 'TYPE_6',
        id: 4,
      },
    },
    {
      data: {
        name: 'CHILD_5',
        type: 'TYPE_1',
        id: 5,
      },
      children: [
        {
          data: {
            name: 'CHILD_5.1',
            type: 'TYPE_8',
            id: 101,
          },
          children: [],
        },
        {
          expandable: false,
          type: 'TYPE_3',
          data: {
            name: 'CHILD_5.2',
            type: 'TYPE_9',
            id: 99,
          },
          children: [],
        },
      ],
    },
  ],
};

export const CHILD_1 = {
  data: {
    name: 'CHILD_1',
    type: 'TYPE_2',
    id: 22,
  },
};

export const CHILD_2 = {
  type: 'TYPE_2',
  data: {
    name: 'CHILD_2',
    type: 'TYPE_2',
    id: 41,
  },
  children: [],
};
