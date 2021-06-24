const initialState = {
    products: [
        {
            id: 1, 
            name: 'man t-shirt summer season', 
            image: 'product-1.jpg', 
            Price: 20000,  
            quantity: 1, 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },
        {
            id: 2, 
            name: 'woman jacket for summer', 
            image: 'product-2.jpg', 
            Price: 30000, 
            quantity: 1, 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },
        {
            id: 3, 
            name: 'man trouser for all seasons', 
            image: 'product-3.jpg', 
            Price: 15000, 
            quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {
            id: 4, 
            name: 'shoes for all season', 
            image: 'product-4.jpg', 
            Price: 50000, 
            quantity: 1, 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {
            id: 5, 
            name: 'female soot for summer', 
            image: 'product-5.jpg', 
            Price: 25000, 
            quantity: 1, 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
        {
            id: 6, 
            name: 'male jeans', 
            image: 'product-6.jpg', 
            Price: 60000, 
            quantity: 1, 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },
        {
            id: 7, 
            name: 'male trouser for all seasons', 
            image: 'product-7.jpg', 
            Price: 35000, 
            quantity: 1, 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },
        {
            id: 8, 
            name: 'male jacket for winter',
            image: 'product-8.jpg', 
            Price: 80000, 
            quantity: 1, 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },
        {
            id: 9, 
            name: 'male jacket for all season', 
            image: 'product-9.jpg', 
            Price: 95000, 
            quantity: 1, 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },        
        {
            id: 10, 
            name: 'male winter jacket', 
            image: 'product-10.jpg', 
            Price: 120000, 
            quantity: 1, 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },   
        {
            id: 11, 
            name: 'male winter jacket', 
            image: 'product-11.jpg', 
            Price: 120000, 
            quantity: 1, 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },   
        {
            id: 12, 
            name: 'male winter jacket', 
            image: 'product-12.jpg', 
            Price: 120000, 
            quantity: 1, 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"
        },        

    ],
    product: {}
}

const ProductsReducer = (state = initialState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;