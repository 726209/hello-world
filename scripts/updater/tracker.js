// tracker-version-updater.js

module.exports.readVersion = function (contents) {
  return '';
};

module.exports.writeVersion = function (contents, version) {
  const header_text = `Commitizen VERSION HISTORY`;
  const date = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
  const replace_text = `${version}（${date}）`;
  if (contents.startsWith(header_text)) {
    return contents.replace(header_text, `${header_text}\n${replace_text}`);
  } else {
    return `${header_text}\n${replace_text}\n${contents}`;
  }
};
