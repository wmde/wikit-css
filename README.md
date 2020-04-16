# Wikibase Design System Components

This repository holds the documentation, demo story book, base components library and design tokens for the Wikibase Design System.

## Install Locally

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

## Additional commands

### Exporting tokens (currently into less, scss, css and js)
 
```bash
npm run build:tokens
```

### Building The css library

```
npm run build:styles
```

### Building everything (incl. Storybook for publication)

```
npm run build
```
