import {build} from './vendor/react-static-generator/';

build({
  basePath: __dirname,
  srcPath: 'src/app',
  distPath: 'web',
});