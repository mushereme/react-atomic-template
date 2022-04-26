import React from "react";

// Тестийн сан дуудах
import { render, fireEvent, screen, getByText, getByTestId } from "@testing-library/react";
import {logRoles} from '@testing-library/dom'

// Тест хийх хуудас дуудах
import HomePage from "../pages/Home";

describe("Home page", () => {
  it("home page text visible", () => {
    const { getByTestId } = render(<HomePage />);
    const p = getByTestId("p");
    
    expect(p.innerHTML).toEqual("Home page");
  });
});