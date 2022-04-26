import React from "react";

// Тестийн сан дуудах
import { render, fireEvent, screen, getByText, getByTestId } from "@testing-library/react";
import {logRoles} from '@testing-library/dom'

// Тест хийх хуудас дуудах
import AboutusPage from "../pages/Aboutus";

describe("About us page", () => {
  it("about us text visible", () => {
    const { getByTestId } = render(<AboutusPage />);
    const p = getByTestId("p");
    
    expect(p.innerHTML).toEqual("About us");
  });
});