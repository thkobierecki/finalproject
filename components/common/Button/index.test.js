import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";


describe("Button component", () => {
  it("should render with provided text", ()=>{
    render(<Button>Click Me!</Button>)
    expect(screen.getByText("Click Me!")).toBeInTheDocument();
  })
  it("should call the provied handler method", ()=>{
    const mockHandle=jest.fn();
    render(<Button onClick={mockHandle}>Click Me!</Button>)
    act(()=>{
      fireEvent.click(screen.getByText("Click Me!"));
    });
    expect(mockHandle).toHaveBeenCalled();
  })
})