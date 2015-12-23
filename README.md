# Incuna Sass Mixin Library

*This is a sass library of useful mixins maintained by Incuna. It is compatible with ruby Sass and node-sass/libsass, the latter being the preferred option*

# Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Grunt](#grunt-usage)
  - [Using in Stylesheets](#stylesheet-usage)
- [Development](#development)
  - [Local checkout](#local-checkout)
  - [Releases](#releases)
- [Version 5](#version-5)

# Requirements

### Node-sass
* `node >= 0.12`
* `node-sass >= 3.4.1`
* `grunt >= 0.4.5`

###Ruby sass
* `sass >= 3.3.0.rc.1`
* ~~`compass >= 1.0.0.alpha.17`~~ (Compass dependency was removed in 5.0.0 - use release 4.3.0 for Compass projects)

# Installation
Incuna sass can be installed via npm or bower

```
bower install incuna-sass --save
```
or
```
npm install --save-dev incuna/incuna-sass
```

# Usage

## Basic Usage

To use incuna-sass with tools like gulp.js, Grunt, or directly with node-sass, provide the path to incuna-sass in your Sass config. There are a couple of convenience methods for this, depending on whether you want Sass to include additional directories or not.

### includePaths Property

The `includePaths` property returns an array of incuna-sass paths to use in your config.

```
var incunaSass = require('incuna-sass');
incunaSass.includePaths // Array of folder paths
```

## Grunt usage
### Using grunt-sass
The grunt-sass task uses node-sass (LibSass) underneath, and is the recommended way to use Grunt with incuna-sass.

Example config:
```
grunt.initConfig({
  sass: {
    dist: {
      options: {
        includePaths: require('incuna-sass').includePaths
      },
      files: {
        'path/to/output.css': 'path/to/input.scss'
      }
    }
  }
});
```

### Using grunt-contrib-sass
If you are using the Ruby version of Sass with node-bourbon, then you will need to use the grunt-contrib-sass task instead.

Example config:
```
grunt.initConfig({
  sass: {
    dist: {
      options: {
        loadPath: require('incuna-sass').includePaths
      },
      files: {
        'path/to/output.css': 'path/to/input.scss'
      }
    }
  }
});
```

## Stylesheet usage
Once you have declared your import paths correctly, incuna-sass will be available to import in your sass files like this:

```
@import "incuna-sass";
```

# Development

All development on incuna-sass should be made via github bug reports and pull requests.

## Local checkout
To make updates and develop on incuna-sass you'll likely want to link a checked out version of the git repoistory into your own project, rather than use the standard installation. This is easy to do via bower or npm.

1. `git clone -p incuna/incuna-sass`
1. `cd incuna-sass`
1. `bower link` or `npm link`
1. `cd project_dir`
1. `bower uninstall incuna-sass && bower link incuna-sass` or `npm uninstall incuna-sass && npm link incuna-sass`

This creates a symlink in your bower/npm packages folder to the folder containing your git reposioroy, allowing you to edit the incuna-sass source and see changes reflected in your project.

## Releases
When you've done some development, you'll need to release a new version of incuna-sass.

Follow these steps to release a new version

1. Increment the version in `bower.json` and `package.json`
2. Edit `CHANGELOG.md` with changes since last release
3. Tag the repository with the version number: e.g. `git tag 2.1.4`
4. Remember to push the tags: `git push --tags`

# Version 5
Incuna-sass is getting a bit of an overhaul.

Incuna-sass 5.0.0 removes compass dependent code from the Incuna-sass library. This means the following files have been removed and will not be supported:

1. `browsers.sass`
2. `inline-block.sass`
3. `placeholders.sass`
4. `sprites.sass`
5. `svg-background.sass` - This was replaced by two new svg mixins in `svg.sass`

To replace some of the Compass mixins and helpers are now using [Bourbon](http://bourbon.io/). This library includes mixins and helpers for things that are included in Incuna-sass so we have moved those files, and any others that are only needed to support legacy browsers into a `legacy` folder that can be added to projects separately when needed. All of these mixins and helpers have been renamed so that they are now prefaced with `legacy-` to avoid overwriting / conflicts with Bourbon code

1. `box-sizing.sass`
2. `clearfix.sass`
3. `font-face.sass`
4. `icomoon.sass`
5. `pseudo-elements.sass`
