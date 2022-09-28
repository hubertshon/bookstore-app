import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Rating } from '../Rating';


test("component renders all stars", async () => {
    render(<Rating key="1" stars={4} />);
    const stars = await screen.findAllByTestId('star');
    expect(stars).toHaveLength(5);
});

