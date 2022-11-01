import React from "react";

import { render, screen } from "@testing-library/react";
import AsyncList from './async-lists';

test("Show list of food", async () => {
    render(<AsyncList />);

    const hamburger = await screen.findByText(/Hamburger/i);

    expect(hamburger).toBeInTheDocument();
})  