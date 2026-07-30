const MIN_WORK_VALUE = 0;
const MAX_WORK_VALUE = 145;
const MAX_DEPTH = 60;

// Finds the shortest sequence of `actions`, at least `minSteps` long, summing exactly
// to `remainder`, where the running total after every single action stays within
// [0, 145] — an ingot breaks if the work value ever leaves that range mid-sequence.
// `startValue` offsets that bounds check (the ingot doesn't necessarily start this
// segment at 0 — e.g. it's already been partially worked), but `remainder` itself
// stays relative: the sequence's own sum, not the absolute end value.
// Searches depth by depth (a value can become reachable again at a deeper level,
// e.g. punch+bend+hit-heavy cancels to 0) since a plain "visited once" BFS can't
// satisfy a minimum-length requirement — needed when a fixed trailing slot isn't
// the very last action, so free actions must pad the gap to the end.
export function solveSequence(remainder, actions, minSteps = 0, startValue = 0) {
  let frontier = new Map([[0, null]]);
  const framesByDepth = [frontier];

  if (0 >= minSteps && frontier.has(remainder)) {
    return [];
  }

  for (let depth = 1; depth <= MAX_DEPTH; depth += 1) {
    const nextFrontier = new Map();
    for (const sum of frontier.keys()) {
      for (const action of actions) {
        const next = sum + action.value;
        if (startValue + next < MIN_WORK_VALUE || startValue + next > MAX_WORK_VALUE) continue;
        if (!nextFrontier.has(next)) {
          nextFrontier.set(next, { prevSum: sum, actionId: action.id });
        }
      }
    }
    framesByDepth.push(nextFrontier);
    frontier = nextFrontier;

    if (depth >= minSteps && frontier.has(remainder)) {
      return reconstructPath(framesByDepth, depth, remainder);
    }
  }

  return null;
}

function reconstructPath(framesByDepth, depth, target) {
  const path = [];
  let sum = target;

  for (let d = depth; d >= 1; d -= 1) {
    const step = framesByDepth[d].get(sum);
    path.push(step.actionId);
    sum = step.prevSum;
  }

  return path.reverse();
}
