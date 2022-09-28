import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { BookstoreList } from '../BookstoreList';


test("page renders", () => {
    render(<BookstoreList />);
    const bookstorePage = screen.getByTestId('container');
    expect(bookstorePage).toBeInTheDocument();

});

