require('shelljs/global');

exports.replaceWebpack = () => {
  const replaceTasks = [{
    from: 'config/chrome/replace/JsonpMainTemplate.runtime.js',
    to: 'node_modules/webpack/lib/JsonpMainTemplate.runtime.js'
  }, {
    from: 'config/chrome/replace/process-update.js',
    to: 'node_modules/webpack-hot-middleware/process-update.js'
  }];

  replaceTasks.forEach(task => cp(task.from, task.to));
};

exports.copyAssets = (type) => {
  const env = type === 'build' ? 'prod' : type;
  const devDir = `chrome${type}`;
  rm('-rf', devDir);
  mkdir(devDir);
  cp(`chrome/manifest.${env}.json`, `${devDir}/manifest.json`);
  cp('-R', 'chrome/assets/*', devDir);
  exec(`pug -O "{ env: '${env}' }" -o ${devDir} chrome/views/`);
};
