# 🥞 Defifarms UIkit

[![Version](https://img.shields.io/npm/v/@defifarms/uikit)](https://www.npmjs.com/package/@defifarms/uikit) [![Size](https://img.shields.io/bundlephobia/min/@defifarms/uikit)](https://www.npmjs.com/package/@defifarms/uikit)

Defifarms UIkit is a set of React components and hooks used to build pages on Defifarms's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @defifarms/uikit`

## Setup

### Theme

Before using Defifarms UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@defifarms/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@defifarms/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://defifarms.github.io/defifarms-uikit/)
