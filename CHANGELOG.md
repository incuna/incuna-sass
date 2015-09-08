# 5.1.2

* Remove leftover compass mixins from modal.sass

# 5.1.1

* Make datepicker.sass easier to overwrite by unnesting styles

# 5.1.0

* Move files that are duplicated by bourbon / are for legacy browser support to legacy folder
* Create legacy import file so that legacy files can be added to projects separately
* Prefix all mixins / helpers in legacy files with `legacy-`

# 5.0.0

* Remove compass reliant code from incuna-sass
* Update normalize.sass with newer version from github.com/necolas/normalize.css

# 4.3.0

* Remove projects folder from incuna-sass

# 4.2.2

* Amend font-face mixin to fix css output of unquoted font family keywords

# 4.2.1

* Add svg mixin to mixins.sass imports file
* Add commented sprites mixin to mixins.sass so it doesn't cause compiling errors

# 4.2.0

* Define variables used by incuna-sass to avoid unnecessary compiling errors
* Use !default to ensure variables can be easily overwritten locally and will not take precedence over local files

# 4.1.1

* BUGFIX: replace @mixin with @include where intention was to use a mixin, not define one

# 4.1.0

* Add svg mixins to use instead of sprites / retina mixin

# 4.0.6

* Revert rem(1px) bug fix from 4.0.4 due to breaking change

# 4.0.5

* Added an `_angular.sass` component with `cursor: pointer` for `[ng-click]`s

# 4.0.4

* Fixed a bug to enable usage of rem(1px) which will now return 1px

# 4.0.3

* Fixed a bug where a message alerting that the sprite files were unchanged more than once.

# 4.0.2

* Improve HiDPI media query. Removes dpi units which cause error spam in Chrome's console.

# 4.0.1

* Make 1x and 2x sprite maps consistent, both using 2px spacing.

# 4.0.0

* Updated dashboard styles for ePatient 7.x.x

# 3.5.2

* The bootstrap `.timepicker` table shouldn't be set to `display: inline-block`

# 3.5.1

* Flowplayer styles improved to work better with aspect ratios different
  from the default.
* Added 4:3 aspect ratio styles.
* Added base play button styles.

# 3.5.0

* Added base flowplayer styles.

# 3.4.0

* Added overflow scroll helper.
* Added base bootstrap datepicker styles.
* Added visually hidden helper.
* Added form helpers for hiding various form components.
* Added base epatient reminder styles.

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
