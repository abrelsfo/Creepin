# Creepin
[![npm version](https://img.shields.io/npm/v/creepin.svg)](https://www.npmjs.com/package/creepin)
[![npm download count](http://img.shields.io/npm/dm/creepin.svg?style=flat)](http://npmjs.org/creepin)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

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
    creepin takes two arrays as arguments, input and flags

  $ creepin(['abrelsfo'], ['g', 'n'])
    opens user profile for abrelsfo on Github and npm
   Note: You don't need the '-' when you aren't using the CLI

```

<br>

## API

### creepin [input] [flags]

 If one of your arguments has a space then put it in "quotes"

##### input (optional)

Input takes two arguments at most.
 * Zero arguments and zero flags will just list the stored profiles.
 * One argument will be interpreted as the profile or url that you want to open.
 * Two arguments are only needed if you plan on saving them for later.  


##### flags (optional)

-g --> Github<br>
-n --> npm<br>
-u --> any url<br>
-s --> save profile for future use<br>
-l --> can be used as only argument, lists the stored profiles<br>
-r --> removes stored profile from list<br>

If you provide nothing then default is: -l<br>
If you provide a handle then default is: -g<br>
If you provide a handle only and it is a favorite then it will default to: -u

<br>

## CLI

```
$ npm install --global creepin
```

```
Usage
  $ creepin [input] [flags]

Explanation
  If you give two arguments in the input then the first one is evaluated as the handle for the second argument. The only time you really need two arguments is when you are saving a favorite for later.

Flags
  -g --> Github
  -n --> npm
  -u --> any url
  -s --> save profile for future use
  -l --> used as only only argument, lists the stored profiles
  -r --> removes stored profile from list

  If you provide nothing then default is: -l
  If you provide a handle then default is: -g
  If you provide a handle only and it is a favorite then it will default to: -u


Examples
  $ creepin "stackoverflow" "http://stackoverflow.com/users/5012922/sirparselot" -s
   Stored stackoverflow for later
   stackoverflow is the handle and the url is the profile

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
```

## Other Notes

> Due to Windows issues I am not able to test this with ava and xo, therefore, ```npm test``` will fail. I am working on fixing this issue!

## License

MIT © [Alex Brelsford](abrelsfo.github.io)
