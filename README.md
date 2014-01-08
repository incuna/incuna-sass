# Requirements
`sass >= 3.3.0.rc.1`

`compass >= 0.13.alpha.10`

# Installation
1. `bower install --save git@github.com:incuna/incuna-sass.git`
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
