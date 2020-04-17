# WiKit CSS

A Design System and CSS UI kit for WMDEs Wikibase.

## Using this library

The current stable version of the design system may be viewed at: `<STORYBOOK URL>`

You can use any of the following to include the library in your project:

### CDN Link (CSS Only)
`<CDN URL>`

## Using the Design Tokens

### CDN Link (CSS Variables)
`<CDN URL>`

### NPM Package

1. Install the package

    ```bash
    npm install wikit-css
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
    @import 'node_modules/wikit-css/build/tokens/_variables.less'
    ```

    **js (es6+):**
    ```js
    import * as tokens from 'wikit-css'
    ```

### Download Files

`<DOWNLOAD URL>`

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

1. Develop :nerd: :100:

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
