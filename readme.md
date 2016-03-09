# Creepin
[![npm version](https://img.shields.io/npm/v/creepin.svg)](https://www.npmjs.com/package/creepin)
[![npm download count](http://img.shields.io/npm/dm/creepin.svg?style=flat)](http://npmjs.org/creepin)

> Creepin lets you open people profiles quickly and easily. It also lets you store your favorites for later with a handle of your choosing. This can also be used for quick access to your favorite websites all from the command line.

<br>

## Install

```
$ npm install --save creepin
```


## Usage

```
Usage
  $ creepin([input], [flags])

	$ creepin(['abrelsfo', '-g'], ['-n'])
	 opens user profile for abrelsfo on Github and npm

```

<br>

## API

### creepin [handle] [profile] [flags]

 If one of your arguments has a space then put it in "quotes"

##### handle (optional)

If you provide a handle only, creepin will search the profiles for the corresponding profile.<br>
If no profile is found then handle is treated as the profile.

##### profile (optional)

This is either the profile name or a url.<br>
You only need a profile name for Github and npm.

##### flags (optional)

-g --> Github<br>
-n --> npm<br>
-u --> any url<br>
-s --> save profile for future use<br>
-l --> used as only only argument, lists the stored profiles<br>
-r --> removes stored profile from list<br>

If you provide nothing then default is: -l<br>
If you provide a handle then default is: -g<br>

<br>

## CLI

```
$ npm install --global creepin
```

```
Usage
  $ creepin [handle] [profile/url] [flags]

Explanation
  creepin evaluates the first argument as a handle and if it is not stored then
  it evaluates it as a profile. It will then follow the flags to open the specified profiles

Flags
  -g --> Github
  -n --> npm
  -u --> any url
  -s --> save profile for future use
  -l --> used as only only argument, lists the stored profiles
  -r --> removes stored profile from list

  No Arguments Default: -l
  Some Arguments Default: -g

Examples
  $ creepin "abrelsfo" -g -n
  	opens profile on github and npm

  $ creepin "http://stackoverflow.com/users/5012922/sirparselot" -u
   opens link

  $ creepin -l
   abrelsfo: abrelsfo
   dawsonbotsford: dawsonbotsford
   stackoverflow: http://stackoverflow.com/users/5012922/sirparselot

  $ creepin 'stackoverflow' -r
   Removed stackoverflow

  $ creepin
   abrelsfo: abrelsfo
   dawsonbotsford: dawsonbotsford

  $ creepin "stackoverflow" "http://stackoverflow.com/users/5012922/sirparselot" -s
   Stored stackoverflow for later
   stackoverflow is the handle and the url is the profile

```

## Coming Updates

> As it currently stands creepin creates a folder in the home directory called CreepinProfiles and stores the profiles in profiles.json.

> * I plan on changing that folder and file to be in the same folder that the module resides in.

## Pull Requests

> If you know how to do the coming update and want to do it feel free and send me a pull request. I don't know when I'll get around to updating this.

## Other Notes

> Due to Windows issues I am not able to test this with ava and xo, therefore, ```npm test``` will fail. I am working on fixing this issue!

## License

MIT © [Alex Brelsford](abrelsfo.github.io)
