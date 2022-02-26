import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from ".";

describe("Input", () => {
  const handleChange = jest.fn();
  test("it renders correctly", () => {
    const { getByPlaceholderText } = render(
      <Input
        label="Test label"
        onChange={handleChange}
        name="test-input"
        type="text"
        placeholder="Test input"
        value=""
      />
    );
    const input = getByPlaceholderText("Test input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });
  test("pass valid email to test email input field", () => {
    render(
      <Input
        label="Test label"
        onChange={handleChange}
        name="test-input"
        type="email"
        placeholder="Test email input"
        // value=""
      />
    );

    const inputEl = screen.getByPlaceholderText("Test email input");
    fireEvent.change(inputEl, { target: { value: "test@mail.com" } });

    expect(inputEl.value).toBe("test@mail.com");
    expect(handleChange).toHaveBeenCalled();
  });
});
