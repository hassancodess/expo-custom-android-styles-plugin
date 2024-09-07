module.exports = {
  git: {
    commitMessage: 'chore: Release v${version}',
    tagName: 'v${version}',
    requireCommits: true,
    requireCleanWorkingDir: true,
  },
  github: {
    release: true,
    draft: true,
    releaseName: '✨ v${version}',
    commitArgs: ['-S'],
    tagArgs: ['-s'],
    assets: ['tar/*.tgz'],
  },
  npm: {
    publish: false,
  },
  changelog: {
    enabled: true,
    label: 'changelog',
    file: 'CHANGELOG.md',
  },
  hooks: {
    'before:init': ['npm run lint'],
    'after:bump': 'npm build && npm tarball',
    'after:release':
      'echo Successfully created a release v${version} for ${repo.repository}.',
  },
}
