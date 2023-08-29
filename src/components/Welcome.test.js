import {render , screen} from '@testing-library/react';
import Welcome from './Welcome';

test("renders learn react link", () => {
    render(<Welcome name="pradeep"/>)
    const linkElement = screen.getByText('Welcome Pradeep');
    expect(linkElement).toBeInTheDocument();
})