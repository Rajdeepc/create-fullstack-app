#!/usr/bin/env node

var shell = require('shelljs');

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.echo('Installing git');
    shell.exec('npm install -g git');
    if(!shell.which('node')){
        shell.echo('Sorry, this script requires npm, Please install latest version of node and re-run the install');
    }
  }

shell.exec('git clone https://github.com/Rajdeepc/candidate-training-tracker.git');
