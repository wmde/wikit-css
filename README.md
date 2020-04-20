# WiKit CSS

**Big Bad Disclaimer:** This code is **only a prototype** and by no means meant to be used in anything.

Prototype for a Design System and UI toolkit for WMDE Wikibase.

## Using this library

The current stable version of the design system may be viewed at: https://wmde.github.io/design-system-components/

### CDN Link (CSS Only)

```
https://unpkg.com/@itamar.wmde/wikit-css
```

## Using the Design Tokens

### CDN Link (CSS Variables)

```
https://unpkg.com/@itamar.wmde/wikit-css/build/tokens/variables.css
```

### npm Package

1. Install the package

    ```bash
    npm install @itamar.wmde/wikit-css
    ```

1. Import Tokens:

    **css:**
    
    ```css
    @import url('node_modules/wikit-css/build/tokens/variables.css')
    ```
    
    **less:**

    ```less
    @import 'node_modules/wikit-css/build/tokens/_variables.less'
    ```

    **scss:**
    ```scss
    @import 'node_modules/wikit-css/build/tokens/_variables.scss'
    ```

    **js (es6+):**
    ```js
    import * as tokens from '@itamar.wmde/wikit-css'
    ```

## Local Development

1. Clone this repository

    ```bash
    git clone git@github.com:wmde/design-system-components.git
    ```

1. Install dependencies

    ```bash
    cd design-system-components
    npm install
    ```

1. Run Storybook

    ```bash
    npm start
    ```

1. Develop :nerd_face: :100:

### Additional commands

#### Exporting tokens (currently into less, scss, css and js)
 
```bash
npm run build:tokens
```

#### Building The css library

```bash
npm run build:styles
```

#### Building everything (incl. Storybook for publication)

```bash
npm run build
```
