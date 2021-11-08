# Atomic CMS Shared Components

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

Components which could be used "above-the-fold" should have a `loading` state with a skeleton view. Skeletons are displaying the outline of the structure a component would have, after the data are loaded and handled and are important to prevent the user from a bad UI experience. Just add the `atomic-skeleton` class to the DOM Elements which you want to give the shimmer effect.

In best case the solutions should look like this:

```
const _renderSkeleton = () => {
  return (
    <div className='atomic-componentXyZ--loading'>
      <div className='atomic-componentXyZ__a atomic-skeleton' />
      <div className='atomic-componentXyZ__b atomic-skeleton' />
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
