import { render, screen, fireEvent } from '@testing-library/react';
import { describe, vi } from 'vitest';
import Timer from './Timer';
import { act } from '@testing-library/react';

//this tells vitest to fake the timer functions (setInterval, clearInterval), before each test
beforeEach(() => {
    vi.useFakeTimers();
});

describe('Timer component', () => {

    //Test 1
    test('renders with initial time of 0', () => {
        render(<Timer />) //render component
        expect(screen.getByText('0s')).toBeInTheDocument(); //confirming timer shows Os
    });

    //Test 2
    test('starts the timer when Start is clicked', () => {
        render(<Timer />) //render component
        fireEvent.click(screen.getByText('Start')); //simulate clicking start

        //act is used here to force this to happen before doing the final check as an error was occuring
        act(() => {
            vi.advanceTimersByTime(1000); //fast forward by 1s
        });

        expect(screen.getByTestId('timer')).toHaveTextContent('1s'); //expecting to see 1s
    });

    //Test 3
    test('stops the timer when Stop is clicked', () => {
        render(<Timer />)//render componenet
        fireEvent.click(screen.getByText('Start')); //simulate clicking start
        vi.advanceTimersByTime(1000); //fast forward 1 second
        fireEvent.click(screen.getByText('Stop')); //simulate clicking stop
        vi.advanceTimersByTime(1000); //fast forward another 1 second
        expect(screen.getByText('1s')).toBeInTheDocument(); //still expecting to see 1s, not 2s
    });

    //Test 4
    test('reset timer when reset is clicked', () => {
        render(<Timer />); //render component 
        fireEvent.click(screen.getByText('Start')); //simulate clicking start
        vi.advanceTimersByTime(2000); //fast forward 2 seconds
        fireEvent.click(screen.getByText('Reset')) //simulate clicking reset
        expect(screen.getByText('0s')).toBeInTheDocument(); //expect to see 0s
    });
});