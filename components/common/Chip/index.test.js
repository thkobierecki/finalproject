import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Chip from ".";


describe("Chip component", () => {
  it("should render with provided text", ()=>{
    render(<Chip name="Test"/>)
    expect(screen.getByText("Test")).toBeInTheDocument();
  })
  it("should call the provied handler method", ()=>{
    const mockHandle=jest.fn();
    render(<Chip handleClick={mockHandle} name="Test"/>)
    act(()=>{
      fireEvent.click(screen.getByText("Test"));
    });
    expect(mockHandle).toHaveBeenCalled();
  })
})