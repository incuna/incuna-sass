# Upcoming

* Add new mixin em-scale - to define font-size at different breakpoints to allow easier use of ems

# 6.0.0

* BREAKING CHANGE: Update svg file path to use svg-url

# 5.7.0

* Add hover state variables

# 5.6.0

* Add svgstore icon sass to incuna normalise
* Add grid mixin for creating grid pattern backgrounds with css gradients

# 5.5.1

* BUGFIX: make url function variables strings

# 5.5.0

* Create incuna-normalise file to add basic styles we use on all projects
    * box-sizing: border-box
    * relative line-height
    * overwrite browser button styles
* Add url functions for creating locally defined functions
    * image-url function
    * font-url function
    * svg-url function

# 5.4.3

* BUGFIX: Fix node includePaths() function to return corrcet location

# 5.4.2

* BUGFIX: Remove deprecated clearfix helper from forms.sass
* Add modern clearfix mixin to project
* Move non-compass dependant media.sass back to mixins
* Add retina mixin to add retina background images
* Rename media.sass in legacy to hidpi-image.sass
* Rename `hidpi-image` mixin to `legacy-hidpi-image`

# 5.4.1

* Fix mixins.sass to include the font-face mixin import which was missing

# 5.4.0

* Add support to install via npm

# 5.3.2

* Add a CSS triangle mixin

# 5.3.1

* Remove @warn from link helpers because they are printed even when the extensions aren't being used (and it's annoying)

# 5.3.0

* Add new headings loop function

# 5.2.3

* BUGFIX: fix link and font-face mixins again, but properly this time (use == not =)

# 5.2.2

* BUGFIX: fix link mixin @if statements so only one is used
* Tidy up font-face mixin if/else statments - denest

# 5.2.1

* BUGFIX: amend new font-face mixin so that only one src property can be output by the css

# 5.2.0

* Add new font face mixin

# 5.1.4

* Make helpers mixins to make them easier to overwrite, keep optional extends that extend the mixins
* Move vertical-center helper to legacy folder

# 5.1.3

* Unnest modal styles, remove media queries to make them easier to overwrite

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
