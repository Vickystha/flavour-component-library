## How to use this library

..to be filled

## How to collaborate in this library?

### Getting started

```bash
# Install all dependencies.
npm install

# Incase npm install fails run the command again with --force arg
npm install --force

# Build the library for distribution
npm run build
```

> Tip: Use storybook and create *.stories.tsx file for each of your component to view while developing

```bash
# Start storybook. 
#   It will directly open a new tab in your browser
#   Alternatively, checkout the URL displayed in CLI
npm run storybook
```

### Project Structure
- src/
    - components
        > Houses all component code
        - < Individual Component Folder >
            - `Component.tsx` : Actual component code
            - `Component.types.ts`: Component type definition - eg: props
            - `Component.stories.tsx`: Optional file for Storybook (but recommended)
            - `index.ts` : Exports component from library

### Reference
[Source 1](https://blog.logrocket.com/how-to-build-component-library-react-typescript/)
