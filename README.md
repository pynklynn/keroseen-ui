# Keroseen UI
Sass framework of minimal mixins to use as a blueprint to create a custom user interface without the bloat.

This framework intentionally comes with no compiled visible assets. In fact, if a developer attempts to use the framework as is, little to no usable CSS will be generated. The framework is designed as mixins to be included as parts of other classes to generate a framework.

The mixins provide basic sizing and positioning defaults for elements or groups of elements on a page. Aside from the bare minimum, no other stylings are included.

## Features

The features below are basic and ready for customization upon consumption.

* Configurable grid - pass in options to create one or multiple grids with your choice of columns (defaults to 12 columns) and optional breakpoints for portrait orientation
* Responsive containers
* Minimal resets
* Visibility classes to show and hide elements as well as make elements viewable only to screen readers
* Prefixed Sass variables available for re-use
* Basic card elements

## Things that are not planned as features

The following items are not planned as features and likely will not be implemented as they are outside of the scope of this project:

* Color variables
* Large library of rigidly sized elements - all components styles will have loose stylings to build on
* Fully color-themed components
* Shadows, animations, and other fancy visuals where not required by the element (ex: cards have a shadow to denote stacking)
