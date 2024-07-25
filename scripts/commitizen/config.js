console.info('>>> 加载版本管理规范配置: ', __dirname);

module.exports = {
  types: [
    { value: 'feat',    name: 'feat:      ✨ 新增功能', emoji: ':recycle:' },
    { value: 'fix',     name: 'fix:       🐛 修复缺陷' },
    { value: 'docs',    name: 'docs:      📝 文档变更' },
    { value: 'style',   name: 'style:     💄 代码格式（不影响功能，例如空格、分号等格式修正）' },
    { value: 'refactor', name: 'refactor: ♻️  代码重构(不包括Bug修复、功能新增)' },
    { value: 'perf',    name: 'perf:      ⚡️  性能提升' },
    { value: 'test',    name: 'test:      ✅ 测试相关' },
    { value: 'build',   name: 'build:     🔨 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）' },
    { value: 'ci',      name: 'ci:        🚀 持续集成（修改 CI 配置、脚本等）' },
    { value: 'revert',  name: 'revert:    ⏪ 回退代码' },
    { value: 'chore',   name: 'chore:     📦 其他修改（对构建过程或辅助工具和库的更改）' },



    { value: 'WIP', name: 'WIP: 正在进行的工作' }
  ],
  useEmoji: true,
  // emojiAlign: 'center',

  // scope 类型，针对当前项目
  // scopes: [{ name: '默认' }, { name: '模块' }, { name: '组件' }, { name: '依赖' }],
  scopes: [
    ['components', '组件相关'],
    ['module', '模块相关'],
    ['dependency', '项目依赖'],
    ['other', '其他修改'],
    // 如果选择 custom ,后面会让你再输入一个自定义的 scope , 也可以不设置此项， 把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义'],
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    };
  }),

  usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // 可以设置 scope 的类型跟 type 的类型匹配项，例如: 'fix'
  /*
  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择你要提交的类型 :',
    scope: '选择一个提交范围（可选，如模块、组件等）:',
    // used if allowCustomScopes is true
    customScope: '请输入自定义的提交范围 :',
    subject: '填写简短精炼的变更描述 :\n',
    body: '填输入详细的变更描述（可选）。使用 "|" 换行 :\n',
    breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
    footerPrefixesSelect: '选择关联issue前缀（可选）:',
    customFooterPrefix: '输入自定义issue前缀 :',
    footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
    confirmCommit: '确认要使用以上信息提交?'
  },
  // 是否允许自定义填写 scope ，设置为 true ，会自动添加两个 scope 类型 [{ name: 'empty', value: false },{ name: 'custom', value: 'custom' }]
  allowCustomScopes: true,
  // allowBreakingChanges: ['feat', 'fix'],
  allowBreakingChanges: [],
  // skip any questions you want
  // skipQuestions: ['scope', 'body'],

  // limit subject length
  subjectLimit: 100
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
