// .versionrc.js

module.exports = {
  // skip: {
  //     tag: true,
  // },
  header: '# 更新历史 \n\n',
  //types为Conventional Commits标准中定义，目前支持
  //https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
  types: [
    {
      type: 'feat',
      section: '✨ Features | 新功能'
    },
    {
      type: 'fix',
      section: '🐛 Bug Fixes | Bug修复'
    },
    {
      type: 'docs',
      section: '📝 Documentation | 文档'
    },
    {
      type: 'chore',
      section: '📦 Chores | 其他更新',
      hidden: true
    },
    {
      type: 'style',
      section: '💄 Styles | 风格',
      hidden: true
    },
    {
      type: 'refactor',
      section: '♻️ Code Refactoring | 代码重构',
      hidden: true
    },
    {
      type: 'perf',
      section: '⚡️ Performance Improvements | 性能优化',
      hidden: true
    },
    {
      type: 'test',
      section: '✅ Tests | 测试',
      hidden: true
    },
    {
      type: 'build',
      section: '👷‍ Build System | 构建',
      hidden: true
    },
    {
      type: 'ci',
      section: '🚀 Continuous Integration | CI 配置',
      hidden: true
    },
    {
      type: 'revert',
      section: '⏪ Reverts | 回退',
      hidden: true
    }
  ],
  //hash链接
  // commitUrlFormat: "http://gitlab.cmss.com/BI/{{repository}}/commit/{{hash}}",
  //issue链接
  // issueUrlFormat: "http://jira.cmss.com/browse/{{id}}",
  //server-version自动commit的模板
  // releaseCommitMessageFormat: "build: v{{currentTag}}版本发布 \n\nCode Source From: Self Code \nDescription: \nJira: # \n市场项目编号（名称）：",
  //需要server-version更新版本号的文件
  bumpFiles: [
    {
      filename: 'package.json',
      // The `json` updater assumes the version is available under a `version` key in the provided JSON document.
      type: 'json'
    },
    {
      filename: 'scripts/version/tracker.txt',
      updater: 'scripts/updater/tracker.js'
    }
  ]
};
