## Buildarea Design System

The documentation is under construction now :construction:

### Install
```bash
npm install @buildarea-ui/react @stitches/react
```

### Example

This library provides various utiltility functions which will help you make beautiful react components.

**Overwrite default theme**:
```js
import { Button, createTheme } from "@buildrea-ui/react";

const theme = createTheme({
  colors: {
    primary: "hsl(126, 100%, 77%)",
  },
});

const SignUp = () => {
  return (
    <div className={theme}>
      <Button>Signup</Button>
    </div>
  );
};

```

For more documentaion on how to use this library you can visit the [Storybook](https://sb.buildarea-ui.com) :link: to follow latest development
