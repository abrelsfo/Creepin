#!/usr/bin/env node
'use strict';
var meow = require('meow');
const updateNotifier = require('update-notifier');
var inArray = require('in-array');
var creepin = require('./index.js');

var cli = meow([
	'Usage',
	'  $ creepin [handle] [profile/url] [flags]',
	'   If one of your arguments has a space then put it in quotes',
	'',
	'Explanation',
	'  creepin evaluates the first argument as a handle and if it is not stored then',
	'  it evaluates it as a profile. It will then follow the flags to open the specified profiles',
	'',
	'Flags',
	'  -g --> Github',
	'  -n --> npm',
	'  -u --> any url',
	'  -s --> save profile for future use',
	'  -l --> used as only only argument, lists the stored profiles',
	'  -r --> removes stored profile from list',
	'',
	'  No Arguments Default: -l',
	'  Some Arguments Default: -g',
	'',
	'Examples',
	'  $ creepin "abrelsfo" -g -n',
	'  	opens profile on github and npm',
	'',
	'  $ creepin "http://stackoverflow.com/users/5012922/sirparselot" -u',
	'   opens link',
	'',
	'  $ creepin -l',
	'  	abrelsfo: abrelsfo',
	'   dawsonbotsford: dawsonbotsford',
	'   stackoverflow: http://stackoverflow.com/users/5012922/sirparselot',
	'',
	'  $ creepin \'stackoverflow\' -r',
	'   removed stackoverflow',
	'',
	'  $ creepin -l',
	'  	abrelsfo: abrelsfo',
	'   dawsonbotsford: dawsonbotsford',
	'',
	'  $ creepin "stackoverflow" "http://stackoverflow.com/users/5012922/sirparselot" -s',
	'   Stored stackoverflow for later',
	'   stackoverflow is the handle and the url is the profile'
]);

updateNotifier({pkg: cli.pkg}).notify();

creepin(cli.input, Object.keys(cli.flags));
