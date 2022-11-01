import React from "react";
import { render, screen} from '@testing-library/react';
import HelloWorld from "./hello-world";


        test('Render hello world', () => {
        render( <HelloWorld /> );
        const titleComponent = screen.getByText(/hello world/i);
        expect(titleComponent).toBeInTheDocument();
    });

