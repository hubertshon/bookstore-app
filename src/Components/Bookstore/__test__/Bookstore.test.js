import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Bookstore } from '../Bookstore';

const mockstore = {
    "type": "stores",
    "id": "1",
    "attributes": {
        "name": "MicroBooks",
        "website": "https://www.micro-books-store.com",
        "rating": 4,
        "storeImage": "https://i.pinimg.com/736x/51/a2/47/51a247e0d1785b89b70a17a1c8f31ac5--melbourne-australia-second-hand.jpg",
        "establishmentDate": "1995-02-09T00:00:00+0000"
    },
    "relationships": {
        "countries": {
            "data": {
                "id": "1",
                "type": "countries"
            }
        },
        "books": {
            "data": [
                {
                    "id": "1",
                    "type": "books"
                },
                {
                    "id": "2",
                    "type": "books"
                },
                {
                    "id": "8",
                    "type": "books"
                }
            ]
        }
    },
    "books": [
        {
            "type": "books",
            "id": "1",
            "attributes": {
                "name": "JavaScript: The Good Parts",
                "copiesSold": 154
            },
            "relationships": {
                "author": {
                    "data": {
                        "id": "1",
                        "type": "authors"
                    }
                }
            },
            "author": {
                "type": "authors",
                "id": "1",
                "attributes": {
                    "fullName": "Douglas Crockford"
                }
            }
        },
        {
            "type": "books",
            "id": "2",
            "attributes": {
                "name": "JavaScript: The Definitive Guide",
                "copiesSold": 66
            },
            "relationships": {
                "author": {
                    "data": {
                        "id": "2",
                        "type": "authors"
                    }
                }
            },
            "author": {
                "type": "authors",
                "id": "2",
                "attributes": {
                    "fullName": "David Flanagan"
                }
            }
        }
    ]
};

test("component renders with props", () => {
    render(<Bookstore key="1" store={mockstore} />);
    const image = screen.getByTestId('img')
    const nameHeader = screen.getByTestId('name');
    const rating = screen.getByTestId('rating');
    const date = screen.getByText(/1995/i);

    expect(image).toBeInTheDocument();
    expect(nameHeader).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(date).toBeInTheDocument();
});
