const camelCase = require('camelcase');

const STORYBOOK_BASE_URL = 'https://testpdkznotpbe.azurewebsites.net';

const ROOT_PATH = './src/apis';

const API_LIST = ['User'];

function generateFetcher() {
  const apiObj = {};

  API_LIST.forEach((key) => {
    const camelCasedName = camelCase(key);
    apiObj[`${camelCasedName}Api`] = {
      output: `${ROOT_PATH}/${camelCasedName}.tsx`,
      url: `${STORYBOOK_BASE_URL}/swagger/service:${key}/swagger.json`,
    };
  });

  return apiObj;
}

module.exports = {
  ...generateFetcher(),
};
