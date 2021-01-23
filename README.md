# CMS Content Shared Components

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dd7bfc2a12a14b4cab5db3a75e7471d7)](https://app.codacy.com/gh/excelWithBusiness/webmobile-cms-content?utm_source=github.com&utm_medium=referral&utm_content=excelWithBusiness/webmobile-cms-content&utm_campaign=Badge_Grade)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![conventionl-commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)
![Release](https://github.com/excelWithBusiness/webmobile-cms-content/workflows/Release/badge.svg?branch=master)

Shared CMS content component library for [`tropic-thunder`](https://github.com/excelWithBusiness/tropic-thunder) and friends. Built with React and Storybook.

**Table of Contents**

- [👩🏻‍💻 Community](#community)
- [🤝 Introduction](#introduction)
- [🆒 Adding New Components](#adding-new-components)
  - [Stateless or Presentational Components](#stateless-components)
  - [Skeleton for loading state](#skeleton-for-loading-state)
- [📦 Import Aliases](#import-aliases)
- [🛠 **Development**](#development)
  - [Prerequisites](#rerequisites)
  - [Build Commands](#build-commands)
- [💅🏻 Linting](#linting)
- [⚠️ Tests](#tests)
- [Version Management](#versions)
- [Troubleshooting](#troubleshooting)

---

## Community

## Introduction

The shared component library is build with [React Storybook](https://storybook.js.org/) to get instant visual feedback on your components without actually deploying/importing them in the main application. You can work on components in an isolated environment, which helps to keep them as pure _presentational components_.

## Adding New Components

New components should be added in `src/components` and have the following structure in their own directory:

```
src/components/
└── Atom/Molecule/Organism
    └── YourAwesomeComponent/
        ├── index.tsx
        ├── YourAwesomeComponent.story.tsx
        ├── YourAwesomeComponent.test.tsx
        └── style.css
```

### Atomic Design

The whole structure is belonging to the [Atomic Design Pattern](http://atomicdesign.bradfrost.com/table-of-contents/) by Brad Frost.

Your actual component should just be the `index.tsx` entry point. Each component needs a `.story.tsx` file. Here you basically use the component in an isolated environment and showcase its API and use case. Component styles should also accompany the component. We recommend using an external CSS file named `style.css` for each component individually.

### Stateless Components

Components should always be **stateless**, sometimes called _presentational components_. That means any form of data mutation, application state updates, etc. should either happen beforehand or directly in the app shell. Components don't know about their surroundings nor what happens outside of their context. Some state is allowed though, within the component when it is pure UI state and does not need any interaction from outside _(e.g. scroll position, [etc](https://github.com/reactjs/redux/issues/1287))_.

To test with state in Storybook we use [`@dump247/storybook-state`](https://github.com/dump247/storybook-state) which provides a nice way to inject state for a component without using Redux.

**ℹ️ Note:** Make sure to not forget to add your component to `src/index.tsx`. Otherwise your component won't be exported in the final build and isn't available for use.

### Skeleton for loading state

Components which could be used "above-the-fold" should have a `loading` state with a skeleton view. Skeletons are displaying the outline of the structure a component would have, after the data are loaded and handled and are important to prevent the user from a bad UI experience. Just add the `filtered-skeleton` class to the DOM Elements which you want to give the shimmer effect.

In best case the solutions should look like this:

```
const _renderSkeleton = () => {
  return (
    <div className='filtered-componentXyZ--loading'>
      <div className='filtered-componentXyZ__a filtered-skeleton' />
      <div className='filtered-componentXyZ__b filtered-skeleton' />
    </div>
  )
}

const _renderComponentXyZ = () => {
  ...
}

return loading ? _renderSkeleton() : _renderComponentXyz()
```

Components which are already using this are `Price`, `Headline`, `FeatureList` and some more. Have a look at them to adopt the full solution.

## Import Aliases

There are two import aliases available, so we don't have to write complicated and unreadable relative paths in our JavaScript files.

### `@` Alias

This alias resolves all paths automatically to `src/common/`.

```js
// DON'T
import Foo from '../../../../components/FooComponent'

// DO
import Foo from '@/components/FooComponent'
```

### `#` Alias

Resolves to the root of our codebase. Handy if you need something from our global config files, `package.json`, or similar.

```js
// DON'T
import i18nConfig from '../../../../../config/i18next'

// DO
import i18nConfig from '#/config/i18next'
```

## Development

We're using [Prettier](https://prettier.io/) _([`prettier-standard`](https://github.com/sheerun/prettier-standard) specifically)_ to automatically format all code on `git add` using [`lint-staged`](https://github.com/okonet/lint-staged). This ensures common code formatting in a bigger team of developers working in the same codebase.

### Prerequisites

We're using [Yarn](https://yarnpkg.com/) as our package manager, please make sure to use it. It's also recommended to have a [linter](#linting) active in your editor, to ensure common coding styleguides and speed up your own development.

### Build Commands

<table>
  <thead>
    <tr>
      <th>Command</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>yarn storybook</code></td>
      <td>Your development command; starts the Storybook watcher on `localhost:9001`.</td>
    </tr>
    <tr>
      <td><code>yarn build</code></td>
      <td>Builds all components. Has to be used to use the latest development state during `filtered-app-shell` development.</td>
    </tr>
    <tr>
      <td colspan="2">Linting</td>
    </tr>
    <tr>
      <td><code>yarn lint:ts</code></td>
      <td>Lints all JavaScript files using TSLint and Standard.</td>
    </td>
    <tr>
      <td><code>yarn lint:css</code></td>
      <td>Lints all CSS files using Stylelint.</td>
    </td>
    <tr>
      <td><code>yarn lint</code></td>
      <td>Runs both lint commands at once.</td>
    </td>
    <tr>
      <td colspan="2">Testing</td>
    </tr>
    <tr>
      <td><code>yarn test</code></td>
      <td>Runs Jest for unit tests.</td>
    </tr>
    <tr>
      <td><code>yarn test:coverage</code></td>
      <td>Runs Jest with code coverage detection.</td>
    </tr>
  </tbody>
</table>

## Linting

The codebase gets automatically linted and formatted on each `git commit` hook _(done via [husky](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged))_. No code can be pushed that doesn't meet the styleguide requirements.

#### JavaScript

For JavaScript, we're using [TSlint](https://palantir.github.io/tslint/) for linting including Standard.js community styleguides.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

#### CSS

[Stylelint](https://stylelint.io/) (with the [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) ruleset) helps us to maintain a common CSS formating foundation.

## CSS Styling

To style components we use [styled components](https://www.styled-components.com/) library. For more details and rules on that, please check [SCRULES.md](./SCRULES.md).

## Tests

Unit testing via [Jest](https://facebook.github.io/jest/), end-to-end with [Cypress](https://www.cypress.io/).

## Versions

NPM provides an easy way to manage semantic versioning with `npm version` command. As per semantic versioning rules, we can increment versions by patch, minor or major level. To make it easy to bump up the patch versions we have also created a NPM task which can be executed by simply running - `yarn bump`. This task will bump up the patch version in on automatically. Ideally, this should be done on CI server everytime something is updated on master branch (for example).

## Commiting

For committing, we are following the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0-beta.3/). The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

To make sure, that every commit is following the specification, `commitlint` will check your messages on commit

## Troubleshooting

## Installation

`yarn add @excelwithbusiness/webmobile-sc-components` or `npm install @excelwithbusiness/webmobile-sc-components --save`

## Theme setup

To use this library a `<ThemeProvider>` needs to wrap around `tropic-thunder`, an example theme object is:

```
{
  name: 'Filtered',
  button: { size: { sm: '40px', md: '48px', lg: '56px' }, isRound: true },
  breakpoints: { sm: 512, md: 752, lg: 1008, xl: 1232, xxl: 1472, xxxl: 10000 },
  color: {
    primary: '#2d4ef4',
    secondary: '#a51716',
    grey1: '#f4f4f4',
    grey2: '#cfcbca',
    grey3: '#918e8c',
    grey4: '#494745',
    grey5: '#272422',
    grey6: '#333333',
    black: '#062047',
    white: '#ffffff',
    success: '#55e1a7',
    alert: '#f1a153',
    error: '#e24c4c',
    info: '#009fe3',
    selected: '#2d4ef4',
  },
  body: { background: '#ffffff' },
  container: {
    xs: 512,
    sm: 512,
    md: 512,
    lg: 752,
    xl: 1008,
    xxl: 1232,
    xxxl: 1472,
    padding: '20px',
  },
  header: { background: '#2d4ef4', topBar: '#a51716', statusType: 'white' },
  heading: {
    featured: {
      textTransform: 'none',
      fontPadding: '0',
      lineHeight: { xl: '44px', md: '40px', xs: '28px' },
    },
  },
  defaultSpacing: 8,
  spacing: {
    base: {
      xxs: '4px',
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '40px',
      xxl: '48px',
      xxxl: '56px',
      xxxxl: '64px',
      xxxxxl: '72px',
    },
    baseMobile: {
      xxs: '4px',
      xs: '8px',
      sm: '16px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '32px',
      xxxl: '40px',
      xxxxl: '48px',
      xxxxxl: '56px',
    },
    gap: { narrow: '8px', default: '16px', wide: '24px', extraWide: '32px' },
  },
  dimension: {
    borderWidth: '1px',
    borderRadius0: '0',
    borderRadius1: '4px',
    borderRadius2: '8px',
    elevationLevel1:
      '0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.06), 0 1px 3px 0 rgba(0,0,0,0.10)',
    elevationLevel2:
      '0 3px 4px 0 rgba(0,0,0,0.07), 0 3px 3px -2px rgba(0,0,0,0.06), 0 1px 8px 0 rgba(0,0,0,0.10)',
    elevationLevel3:
      '0 8px 10px 1px rgba(0,0,0,0.07), 0 3px 14px 2px rgba(0,0,0,0.06), 0 5px 5px -3px rgba(0,0,0,0.10)',
    elevationLevel4:
      '0 24px 38px 3px rgba(0,0,0,0.07), 0 9px 46px 8px rgba(0,0,0,0.06), 0 11px 15px -7px rgba(0,0,0,0.10)',
  },
  font: {
    family: {
      default: 'SourceSansPro, Arial, sans-serif',
      featured: 'NunitoSans-Regular, Arial, sans-serif',
      meta: 'NunitoSans, Arial, sans-serif',
    },
    spacing: { base: '0.4px', half: '0.2px' },
    size: {
      xxxs: '10px',
      xxs: '12px',
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '20px',
      xl: '24px',
      xxl: '28px',
      xxxl: '32px',
      xxxxl: '40px',
      xxxxxl: '48px',
    },
    lineHeight: {
      xxxs: '16px',
      xxs: '16px',
      xs: '20px',
      sm: '24px',
      md: '28px',
      lg: '32px',
      xl: '40px',
      xxl: '44px',
      xxxl: '44px',
      xxxxl: '44px',
      xxxxxl: '48px',
    },
    weight: { regular: 400, semibold: 600, bold: 700 },
    textTransform: 'initial',
    superscript: {
      size: {
        xxxs: '8px',
        xxs: '9px',
        xs: '11px',
        sm: '12px',
        md: '14px',
        lg: '15px',
        xl: '18px',
        xxl: '21px',
        xxxl: '24px',
        xxxxl: '36px',
        xxxxxl: '40px',
      },
      top: {
        xxxs: '-1px',
        xxs: '-1px',
        xs: '-2px',
        sm: '-3px',
        md: '-3px',
        lg: '-3px',
        xl: '-3px',
        xxl: '-4px',
        xxxl: '-7px',
        xxxxl: '-8px',
        xxxxxl: '-9px',
      },
    },
  },
  transition: { short: '0.15s', medium: '0.25s', long: '0.33s', defaultEasing: 'ease-in-out' },
  polished: { inactive: 0.4, darken: 0.04 },
}

```

