# 3.4.0

* Add overflow scroll helper.

# 3.3.1

* Renamed the injections sass file to be consistent with ePatient module
  naming.
* Removed more non-structural styling from injections sass.
* Added `cursor: default` to all `disabled` elements.

# 3.3.0
* Added structure styles for epatient injection tracker list details page.
* Added hidpi-image mixin to media mixins

# 3.2.0
* Added `button` and various `input` button mixins

# 3.1.2
* Add `<main>` element to HTML5 `display: block;` shim in the reset.

# 3.1.1

* Removed borders on `input[type="checkbox"]` and `input[type="radio"]`.

# 3.1.0

* Add `%link-blank` helper.

# 3.0.0

* Added angular project type, with a minimum IE version of 8.
* If the browser support is > IE7 then default to the border-box box model.
* Add base styles for ePatient.
* Add icomoon component.
* Add base styles for ePatient modules.
* Add bootstrap modal styles.

# 2.2.0

* Added mixin to output all text inputs.
* Reset iOS styling put on to text inputs. Please note that this may break
  exisiting styling if you have a border radius on your fields. I didn't think
  this warranted a full breaking change release.

# 2.1.5

* Added a parameter to `@mixin sprite()` to optionally use a mixin rather than
  an `@extend` to output background properties. This is to circumvent the
  following sass limitation when including a sprite from within a media query:
  "You may not @extend an outer selector from within @media."

# 2.1.4

* Added `cursor: pointer` to `%link` and `%link-reverse` helpers.

# 2.1.3

* Add placeholder class selector to placeholder helper for placeholder polyfill
  scripts

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
