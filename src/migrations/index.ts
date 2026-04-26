import * as migration_20251107_183848_initial from './20251107_183848_initial';
import * as migration_20260204_070119 from './20260204_070119';
import * as migration_20260426_094500 from './20260426_094500';

export const migrations = [
  {
    up: migration_20251107_183848_initial.up,
    down: migration_20251107_183848_initial.down,
    name: '20251107_183848_initial',
  },
  {
    up: migration_20260204_070119.up,
    down: migration_20260204_070119.down,
    name: '20260204_070119'
  },
  {
    up: migration_20260426_094500.up,
    down: migration_20260426_094500.down,
    name: '20260426_094500'
  },
];
