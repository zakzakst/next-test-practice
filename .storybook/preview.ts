import type { Preview } from "@storybook/react";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { handlers } from "../src/lib/msw/handlers";

initialize();

export const decorators = [mswDecorator];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers,
    },
  },
};

export default preview;
