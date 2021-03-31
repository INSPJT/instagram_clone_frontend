const { CLIEngine } = require('eslint');
const path = require('path');

const cli = new CLIEngine({});

const escape = (string) => (string === '' ? path.sep : string.replace(/[|\\{}()[\]^$+*?]/g, '\\$&'));

const escapePath = (filename) => path.join(...filename.split(path.sep).map(escape));

// https://github.com/vercel/next.js/blob/canary/lint-staged.config.js
module.exports = {
  '**/*.{js,jsx}': (filenames) => {
    const escapedFileNames = filenames.map(escapePath).join(' ');
    return [
      `prettier --write ${escapedFileNames}`,
      `eslint --no-ignore --fix ${filenames
        .filter((file) => !cli.isPathIgnored(file))
        .map((f) => `"${f}"`)
        .join(' ')}`,
      'git add',
    ];
  },
};
