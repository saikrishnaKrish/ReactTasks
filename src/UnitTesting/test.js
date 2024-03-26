import { render, screen } from "@testing-library/react";
import App from "../App";
import React from 'react';

test('should first', () => { 
    render(<App/>);        
    const linkElement = screen.getByText(/Hi/i);
    expect(linkElement).toBeInTheDocument();  
    console.log("First test");
});
