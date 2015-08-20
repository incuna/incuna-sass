# Requirements
`sass >= 3.3.0.rc.1`

~~`compass >= 1.0.0.alpha.17`~~ (Compass dependency was removed in 5.0.0 - use release 4.3.0 for Compass projects)

# Installation
1. `bower install incuna-sass --save`
2. Add the path to the installed package to your config.rb/Gruntfile.js e.g. `add_import_path = 'lib/incuna-sass'`

# Local checkout
To use a local checkout as your installed version is very easy to do.

1. `git clone -p incuna/incuna-sass`
1. `cd incuna-sass`
1. `bower link`
1. `cd project_dir`
1. `bower uninstall incuna-sass && bower link incuna-sass`

This creates a symlink to the your checkout allowing you to edit the bower
installed version.

# Releases
To release a new version

1. Increment the version in `bower.json`
2. Edit `CHANGELOG.md` with changes since last release
3. Tag the repository with the version number: e.g. `git tag 2.1.4`
4. Remember to push the tags: `git push --tags`

# Incuna-sass Version 5
Incuna-sass is getting a bit of an overhaul.

Incuna-sass 5.0.0 removes compass dependent code from the Incuna-sass library. This means the following files have been remove and will not be supported:
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
