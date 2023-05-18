import { useState } from "react";
// TODO: testing is pending 
export function useHideShow() {
    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    return [visible, hideDialog, showDialog];
}