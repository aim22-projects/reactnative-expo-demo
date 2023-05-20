// Importing the useState hook from React
import { useState } from "react";

// defining a custom return type that represents the stateful value (boolean) and functions to show (set to true) and hide (set to false)
type IUseVisibility = [
    visible: boolean,   // boolean value that represents visibility state, true when visible, false when hidden
    show: () => void,   // function that sets visibility state to true (shows the component)
    hide: () => void,   // function that sets visibility state to false (hides the component)
]

/**
 * custom react hook that returns boolean visibility state and shows/hides functions.
 * @returns IUseVisibility - a tuple with a boolean and two functions that change visibility state.
 */
export function useVisibility(): IUseVisibility {
    // Initializing a boolean variable 'visible' with a default state of 'false' using useState hook
    const [visible, setVisible] = useState(false);

    // Defining a function called 'show' that sets the 'visible' state to true
    const show = () => setVisible(true);

    // Defining a function called 'hide' that sets the 'visible' state to false
    const hide = () => setVisible(false);

    // Returning the 'visible' state along with 'hide' and 'show' functions in a tuple
    return [visible, show, hide];
}
