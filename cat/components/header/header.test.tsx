import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as stories from "./header.stories";

describe("components/header", () => {
  const { Default } = composeStories(stories);

  test("Show title", () => {
    const { getByTestId } = render(<Default text="This is a test title." />);
    const text = getByTestId("text");
    expect(text).toHaveTextContent("This is a test title.");
  });
});