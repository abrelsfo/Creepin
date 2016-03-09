'use strict';
var fs = require('fs');
var opn = require('opn');
var chalk = require('chalk');
var inArray = require('in-array');
var jsonfile = require('jsonfile');
var remove = require('remove_index');
var homePath = require('home-path');
var home = homePath();
var profiles = {};
var profile = '';
var handle = '';
var spaces = '';
var keys = [];
var i;
var j;

function github(){	//open github profile
	opn('https://github.com/' + profile, {wait: false});
};

function npm() {	//open npm profile
	opn('https://www.npmjs.com/~' + profile, {wait: false});
};

function url() {	//open url
	opn(profile, {wait: false});
};

function checkDirectory(input, flags) {
	if (!fs.existsSync(home + '/CreepinProfiles')){
    fs.mkdirSync(home + '/CreepinProfiles');
	}
	getProfiles(input, flags);
};

function getProfiles(input, flags) {	//check if profile db exists
	fs.stat(home + '/CreepinProfiles/profiles.json', function (err) {
		if (err === null) {	//file exists
			jsonfile.readFile(home + '/CreepinProfiles/profiles.json', function (err, obj) {
				if (err) {
					throw (err)
				}
				profiles = obj;
				handleOrProfile(input, flags);
			});
		} else if (err.code === 'ENOENT') {	//file doesn't exist
			jsonfile.writeFile(home + '/CreepinProfiles/profiles.json', {}, {spaces: 2}, function(err) {
				if (err) {
					throw (err)
				}
				handleOrProfile(input, flags);
			});
		} else {	//something is wrong
			console.log('Shit hit the fan: ', err.code);
		}
	});
};

function handleOrProfile(input, flags) {
	if (input === undefined){
		showProfiles();
	} else if (input.length === 1 && flags.length === 0) {
		profile = input[0];
		github();
	} else if (input.length === 2 && flags.length === 0) {
		profile = input[1];
		github();
	} else {
		handle = input[0];
		profile = profiles[handle];	//get profile from file
		if (profile === undefined){	//if profile wasn't in file then it was supplied as handle
			profile = input[1];
		}

		for (i = 0; i < flags.length; i++){	//set truth value of flags
			switch (flags[i].toLowerCase()) {
				case '-g':	//github
					github();
					break;
				case '-n':	//npm
					npm();
					break;
				case '-u':	//url
					url();
					break;
				case '-s':	//save profile
				 	addProfile();
					break;
				case '-r':	//remove profile from list
					removeProfile();
					break;
				default:  //state something is wrong
					console.error('Something is wrong! profile: ' + profile + ' everything: ' + input + ' ' + flags);
					process.exit(1);
					break;
			}
		}
	}
};

function removeProfile() {	//remove profile from profiles list
	if (profiles && handle in profiles) {	//if handle has been stored
		delete profiles[handle];
		jsonfile.writeFile(home + '/CreepinProfiles/profiles.json', profiles, {spaces: 2}, function(err) {
			if (err) {
				throw (err)
			}
			console.log(chalk.green('Removed ' + handle));
		});
	}
};

function addProfile() {	//join profiles and write to file
	if (profiles && !(handle in profiles) && !inArray(['-n', '-g', '-u', '-s', '-l', '-r'], profile.toLowerCase())) { //if user provided handle and profile
		profiles[handle] = profile;
		jsonfile.writeFile(home + '/CreepinProfiles/profiles.json', profiles, {spaces: 2}, function(err) {
			if (err) {
				throw (err)
			}
			console.log(chalk.green('Stored ' + handle + ' for later'));
		});
	} else if (handle in profiles) {
		console.log(chalk.cyan('Cannot add ' + handle + ', already a profile'));
	} else {
		console.log(chalk.red('Creepin expects a handle and a profile'));
	}
};

function showProfiles() {	//print profiles in sorted order
	keys = Object.keys(profiles);
	keys.sort()
	console.log(chalk.yellow('===================================================='));
	for (j = 0; j < keys.length; j++) {
		console.log(chalk.green(keys[j] + ': ' + profiles[keys[j]]));
	}

	console.log('');
};

module.exports = function (input, flags) {
	checkDirectory(input, flags);
};
