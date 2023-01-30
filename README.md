# Keroseen UI

Keroseen is a set of minimally designed Sass mixins (Scss format) to be used for generating styles for a web project. The goal is to import the parts of the library you want to use and make use of the appropriate mixins in your styles. In fact, if you include the libraries and don't `@include` any of the mixins, zero code from the framework will be generated.

A major design goal of the library is to include the base styles directly in the developer defined styles instead of piling on override selectors. The mixins provide basic sizing and positioning defaults for elements or groups of elements on a page. Aside from the bare minimum for each component type, no other stylings are included.

## Features

Features ready for consumption as either functions or mixins:

* Minimal resets
* Configurable, responsive grid - pass in options to create one or multiple grids with your choice of columns (defaults to 12 columns) and optional breakpoints for portrait orientation
* Responsive containers
* Visibility classes to show and hide elements as well as make elements viewable only to screen readers
* Prefixed (`$keroseen-`) Sass variables available for re-use
* Basic card elements
* Top navigation bar either fixed or scrolling with page - mobile-first responsiveness
* Side navigation bar - scrolls independently, mobile-first responsiveness
* Utility function and mixins
* Action buttons - including containers for them at the bottom of the screen

## Things that are not planned as features

The following items are not planned as features and likely will not be implemented as they are outside of the scope of this project:

* Color variables
* Large library of rigidly sized elements - outside of elements based on specifications (ex: Material design specs for cards) all components styles will have loose stylings to build on
* Fully color-themed components
* Shadows, animations, and other fancy visuals where not required by the element (ex: cards have a shadow to denote stacking)

### Also, the following will never be implemented as part of the framework

* Support for languages other than Sass

## Browser support

This framework is tested in and designed for evergreen browsers including Chrome (and by extension Opera), Edge, Firefox, and Safari. The framework targets the most recent and one older version of each (excluding Safari which is the most recent version only as Apple takes between 12 and 24 months for releases).

## Future

Planning for big changes is underway.
Some potential updates include:

* Use of CSS custom properties
* Flexible native web components that make use of the styles

## Credits/Attribution

Please see the [CREDITS.md](CREDITS.md) file for links to give credit/attribution where due to works used either to help create this library or for demonstration purposes.