## Episource Salesforce Design Storybook
### Setup
npm install --global lerna
npm install --save-dev chromatic
npm install

### Create new component
Before embarking on your journey, be sure to get acquainted with the basics:
https://storybook.js.org/tutorials/intro-to-storybook/vue/en/get-started/

#### Single component
Use JTableRow in the components folder as a baseline for your new component
1) Copy components/JTableRow to a new folder with your component's name
2) Edit the .vue and .stories.js files
3) Define the correct entry points in the package.json
4) Run locally, publish to npm, or publish to chromatic

#### Parent with child components
Use JTable in the components folder as a baseline for your new component
1) Follow the Single Component section above for each of your child components
2) Copy components/JTable to a new folder with your component's name
3) Edit the .vue and .stories.js files
4) Define the correct entry points in the package.json
5) Make sure that all of the child components of your new parent component are defined in the package.json, like the JTable defines it's child, JTableRow
6) Run locally, publish to npm, or publish to chromatic

If the children of a parent component are updated, don't forget to bump the version number of the child component in the package.json file as well!

#### Storybook Controls
What good is a component that isn't configurable? Learn how to configure the storybook's controls here

https://storybook.js.org/docs/react/essentials/controls

#### Third Party Libraries
If you need to install something like Element UI that applies to all components, add to the .stories/preview.js file. See the current file for an example of what to do

#### package.json
Be super careful with your package.json. In order for your new package to be read correctly by Episource's Salesforce Vue framework, you need to make sure that the 'main', 'module', 'unpkg', and 'browser' keys are set correctly in the root file of your component.

If you do not fill out this file correctly, Vue is going to tell you that it cannot find your package, and you are going to be very confused for a few days.

https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html

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