import { useState } from "react";

const useCartTotal = () => {
    const [state, setState] = useState(0);
    const updateValue = (cart) => {
        setState(cart.reduce((accumulator, curValue) => accumulator + curValue.price, 0));
        return state;
    }
    return {
        state,
        updateValue
    };
};

export default useCartTotal;