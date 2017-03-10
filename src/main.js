import actions from './actions'

let state = {};

export function fire(action, options = {}) {
  let actionHandler = actions[action];
  if (actionHandler)
    actionHandler(state, options);
};
