# Requirements
`sass >= 3.3.0.rc.1`

`compass >= 1.0.0.alpha.17`

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
