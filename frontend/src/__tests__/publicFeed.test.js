import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PublicFeed from "../App";

describe('Public Feed Main Page', () => {
    it('should render text field component', () => {
        const {getByTestId} = render(<PublicFeed />);
        expect(getByTestId("textField-1")).toBeInTheDocument();
        expect(getByTestId("textField-1")).toBeTruthy();
    });
    
    it('should render button component', () => {
        const {getByTestId} = render(<PublicFeed />);
        expect(getByTestId("button-1")).toBeInTheDocument();
        expect(getByTestId("button-1")).toHaveTextContent("Search Tags");
        expect(getByTestId("button-1")).toBeVisible();
        expect(getByTestId("button-1")).toBeEnabled();
    });
    
    it('should render button component', () => {
        const {getByTestId} = render(<PublicFeed />);
        expect(getByTestId("grid")).toBeInTheDocument();
    });
}); 