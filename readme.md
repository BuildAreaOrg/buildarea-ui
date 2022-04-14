## Buildarea Design System

The documentation is still under construction :construction: and in beta. There could be some breaking changes till we release a stable version.

### How to install ?
```bash
npm install @buildarea-ui/react @stitches/react@1.2.7
```

### Getting Started

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

For more documentation on how to use this library, you can visit the [Storybook](https://sb.buildarea-ui.com) :link: or visit the example section on [Github Repo](https://github.com/BuildAreaOrg/buildarea-ui/tree/main/examples).
