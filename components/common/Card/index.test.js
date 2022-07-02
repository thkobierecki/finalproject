import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from ".";


describe("Card component", () => {
  it("should render with provided title", ()=>{
    render(<Card title="Test Title"/>)
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  })
  it("should render the children", ()=>{
    render(<Card>Body Card!</Card>);
    expect(screen.getByText("Body Card!")).toBeInTheDocument();
  })
})