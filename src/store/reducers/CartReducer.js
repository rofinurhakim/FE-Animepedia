const cartData = JSON.parse(localStorage.getItem('cart-data'));
const cartTotalQty = JSON.parse(localStorage.getItem('cart-total-qty'));
const cartTotalPrice = JSON.parse(localStorage.getItem('cart-total-price'));

const initState = {
    products: cartData === null ? [] : cartData,
    totalPrice: cartTotalPrice === null ? 0 : cartTotalPrice,
    totalQuantities: cartTotalQty === null ? 0 : cartTotalQty
}


const CartReducer = (state = initState, action) => {
    let findPro;
    let index;

    switch (action.type) {
        case 'ADD_TO_CART':
            const { products, quantity } = action.payload;
            const Tprice = state.totalPrice + (products.price * quantity);
            const Tquantities = state.totalQuantities + quantity;

            state = {
                ...state,
                products: [...state.products, products],
                totalPrice: Tprice,
                totalQuantities: Tquantities
            }

            localStorage.setItem('cart-data', JSON.stringify(state.products));
            localStorage.setItem('cart-total-qty', JSON.stringify(state.totalQuantities));
            localStorage.setItem('cart-total-price', JSON.stringify(state.totalPrice));

            return state;
            break;
        case 'INC':
            findPro = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            findPro.quantity += 1;
            state.products[index] = findPro;
            return {
                ...state,
                totalPrice: state.totalPrice + findPro.price, totalQuantities: state.totalQuantities + 1
            }
        case "DEC":
            findPro = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            if (findPro.quantity > 1) {
                findPro.quantity -= 1;
                state.products[index] = findPro;
                return {
                    ...state,
                    totalPrice: state.totalPrice - findPro.price, totalQuantities: state.totalQuantities - 1
                }
            } else {
                return state;
            }
        case 'REMOVE':
            findPro = state.products.find(product => product.id === action.payload);
            const filtered = state.products.filter(product => product.id !== action.payload);
            return {
                ...state,
                products: filtered,
                totalPrice: state.totalPrice - findPro.price * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
            }
        default:
            return state
    }
};

export default CartReducer;