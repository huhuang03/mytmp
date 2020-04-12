#!/usr/bin/env node

import Project from "./project"
import Config from "./config"

const argv = require('yargs')
.option('name', {
  alias: 'n',
  type: 'string',
  description: 'The project name'
})
.option('tName', {
  alias: 't',
  type: 'string',
  description: 'The tempalte name'
})
.option('out', {
  alias: 'o',
  type: 'string',
  description: 'The output folder'
})
.argv


new Project().build(new Config(argv.name, argv.tName, argv.out));