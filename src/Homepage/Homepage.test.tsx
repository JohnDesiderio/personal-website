import Homepage from "./Homepage";
import { render } from '@testing-library/react';

describe('Render homepage', () => {
    test('it renders', () => {
        render(<Homepage/>);
    })
})