import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PreferencesCard from ".";

describe("PreferencesCard",()=>{
  it('should render', () =>{
    render(<PreferencesCard type="location"  value="Swansea" sub="Location"/>);

    expect(screen.getByTestId("preference-card-value")).toHaveTextContent("Swansea");
    expect(screen.getByTestId("preference-card-subheader")).toHaveTextContent("Location");
  })
  it('should render with pill', () =>{
    render(<PreferencesCard type="location"  value="Swansea" sub="Location" numOfMoreItems={2}/>);

    expect(screen.getByTestId("preference-card-value")).toHaveTextContent("Swansea");
    expect(screen.getByTestId("preference-card-subheader")).toHaveTextContent("Location");
    expect(screen.getByText("+ 2")).toBeInTheDocument();
  })
})