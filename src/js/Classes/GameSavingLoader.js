import json from '../parser';
import read from '../reader';

export default class GameSavingLoader {
  constructor() {
    this.user = '';
  }

  load() {
    this.user = read().then((response) => json(response)).then((user) => JSON.parse(user));
    return this.user;
  }
}
