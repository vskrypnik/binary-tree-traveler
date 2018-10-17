import { Tree, Node } from '../../tree';

const defaultTreeState = (
  new Tree(
    new Node({
      value: "+",
      left: new Node({
        value: "*",
        left: new Node({ value: 2 }),
        right: new Node({ value: 6 }),
      }),
      right: new Node({
        value: "-",
        left: new Node({ value: 3 }),
        right: new Node({
          value: "-",
          left: new Node({value: 7}),
          right: new Node({value: 1}),
        }),
      }),
    }),
  )
);

const tree = (state = defaultTreeState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tree;
