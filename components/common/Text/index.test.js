import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from ".";

describe("Text", () => {
  test("it renders correctly", () => {
    const { getByText } = render(<Text>Text content</Text>);
    expect(getByText("Text content")).toBeInTheDocument();
  });
});
