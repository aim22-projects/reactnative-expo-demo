import { useState } from "react";
/// return type for useVisibility hook
type IUseVisibility = [
    visible: boolean,
    show: () => void,
    hide: () => void,
]

/**
 * Return IUseVisibility, a stateful value (boolean) and functions to show (set to true) and hide (set to false)
 * @returns IUseVisibility
 */
export function useVisibility(): IUseVisibility {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    return [visible, show, hide];
}