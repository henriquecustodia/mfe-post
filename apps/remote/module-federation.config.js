module.exports = {
  name: 'remote',
  exposes: {
    './Module': 'apps/remote/src/app/remote-entry/entry.module.ts',
  },
};
