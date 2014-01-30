# 2.1.2

* Remove monkey patched function - now fixed in compass core.
* Define 'web' $project with an ie version.

# 2.1.1

* Added `html { overflow-y: scroll; }` to avoid horizontal page jumps.

# 2.1.0

* Added `%form-horizontal` extension to allow forms to have the styles without
  necessarily having the `.form-horizontal` class.

# 2.0.0

* mixins/_font-face.sass now uses font-url() - please update your
  compass config with the location of your font files with the `fonts_dir`
  option.

# 1.0.1

* Update svg-background mixin to remove $rem argument. The $use-rem global
  setting configures this for you.
* Do not output SVGs inline by default.

# 1.0.0

* Initial release.
