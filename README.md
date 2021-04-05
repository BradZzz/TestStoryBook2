## Episource Salesforce Design Storybook
### Setup
npm install --global lerna
npm install --save-dev chromatic
npm install

### Run locally
npm run build-storybook
npm run storybook

### Publish to npm
npm login
lerna publish

### Publish to chromatic
1) Follow instructions outlined in: Reference steps to get storybook connected to npm registry
2) npm run build-storybook
3) npm run chromatic
4) navigate to: https://www.chromatic.com/setup?appId=606b8a9cc60e1f0021265278

#### Reference steps to get storybook connected
* Install: https://storybook.js.org/docs/react/get-started/install
* Edit: https://storybook.js.org/tutorials/intro-to-storybook/vue/en/simple-component/
* Deploy: https://storybook.js.org/tutorials/intro-to-storybook/vue/en/deploy/

#### Reference steps to get storybook connected to chromatic server:
https://storybook.js.org/tutorials/intro-to-storybook/vue/en/deploy/

#### Reference steps to get storybook connected to npm registry:
https://medium.com/js-dojo/sharing-reusable-vue-js-components-with-lerna-storybook-and-npm-7dc33b38b011