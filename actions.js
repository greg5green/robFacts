import sample from 'lodash/collection/sample';
import facts from './facts';

function getRandomFact() {
  return sample(facts);
}

export function newFact() {
  return {
    type: 'SET_FACT',
    fact: getRandomFact()
  }
}
