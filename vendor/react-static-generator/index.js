// @todo command-line
// @todo optional generate gitignore in every dir
// @todo option: output directly as .html without parent dir

import fs from 'fs-extra';
import path from 'path';
import chokidar from 'chokidar';
import React from 'react';
import ReactDOM from 'react-dom/server';

const generatePage = (filePath, opts) => {
  // clear require cache to get updated file
  delete require.cache[filePath];

  // prevent generating components outside "pages" directory
  if (filePath.indexOf('pages') === -1) {
    return build(opts);
  };

  const fileName = path.basename(filePath, '.js');
  const Page = require(filePath);
  const markup = '<!DOCTYPE html>' + ReactDOM.renderToStaticMarkup(<Page />);
  let outputPath = opts.distPath;

  // create directory for every non-index page
  if (fileName !== 'index') {
    outputPath += '/' + fileName;
  }

  fs.outputFile(`${outputPath}/index.html`, markup, err => {
    if (err) {
      throw err;
    }

    console.log(`page generated: ${fileName}`)
  });
};

export const build = opts => {
  fs.readdir(path.join(opts.basePath, opts.srcPath, 'pages'), (err, list) => {
    if (err) {
      throw err;
    }

    list.forEach(file => {
      generatePage(path.join(opts.basePath, opts.srcPath, 'pages', file), opts);
    });
  });
};

export const watch = opts => {
  const addFile = filePath => {
    console.log('file added' , filePath);

    generatePage(path.join(opts.basePath, filePath), opts);
  };
  const changeFile = filePath => {
    console.log('file changed' , filePath);

    generatePage(path.join(opts.basePath, filePath), opts);
  };

  chokidar.watch(`${opts.srcPath}/**/*.js`)
  .on('add', addFile)
  .on('change', changeFile);
};