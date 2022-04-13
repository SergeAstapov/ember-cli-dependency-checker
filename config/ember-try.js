'use strict';

module.exports = function () {
  return {
    command: 'yarn test',
    useYarn: true,
    scenarios: [
      {
        name: 'ember-lts-3.12',
        npm: {
          devDependencies: {
            'ember-cli': '~3.12.0',
          },
        },
      },
      {
        name: 'ember-lts-3.16',
        npm: {
          devDependencies: {
            'ember-cli': '~3.16.0',
          },
        },
      },
      {
        name: 'ember-lts-3.20',
        npm: {
          devDependencies: {
            'ember-cli': '~3.20.0',
          },
        },
      },
      {
        name: 'ember-lts-3.24',
        npm: {
          devDependencies: {
            'ember-cli': '~3.24.0',
          },
        },
      },
      {
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            'ember-cli': '~3.28.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-cli': 'npm:latest',
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-cli': 'npm:beta',
          },
        },
      },
    ],
  };
};
