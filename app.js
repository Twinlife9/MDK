//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const util = require('util');
const format = require('date-format');

const builder = require('./builder')

// https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs
const isDirectory = source => fs.lstatSync(source).isDirectory();

const getDirectories = source =>
  fs.readdirSync(source).map(name => path.join(source, name)).filter(isDirectory);


//go only over the directories that starts with w
const StartW = dirName => !dirName[0] == '.' || dirName != 'node_modules';

let directories = getDirectories('./').filter(StartW);


//getting all relative urls to index pages
let indexPages = []
directories.forEach((dir) => {
  
  let indexFile = `./${dir}/index.html`;
  
  if (fs.existsSync(indexFile)) {
    
    let stats = fs.statSync(indexFile);
    let mtime = new Date(util.inspect(stats.mtime));
    
    indexPages.push({
      href: indexFile,
      name: dir,
      date_mod: format('dd.MM.yy hh:mm', mtime),
      util_time: mtime
    });
  }
});

indexPages.sort((a, b) => 
  new Date(b.util_time) - new Date(a.util_time));

builder.doBuild(indexPages);

