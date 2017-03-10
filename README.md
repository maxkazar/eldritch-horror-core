var worker = new Worker(url('eldritch-horror-core-[hash].js'));

export function fire(action, options = {}) {
  options.action = action;
  worker.postMessage(options);
};

self.addEventListener('message', function(event) {
  let options = event.data;
  action(options.action, options);
})

setup game
save game
load game
invoke investigator Charlie Kane
start action phase
get investigator Charlie Kane action?
get investigator Charlie Kane possible action?
move investigator Charlie Kane to Tokyo
get assets
acquire investigator Charlie Kane asset <Acquire card name>
start encounter phase
cast investigator Charlie Kane spell <Spell card name>
use investigator Charlie Kane item <Item card name>
resolve investigator Charlie Kane contact Europe
start mythos phase
