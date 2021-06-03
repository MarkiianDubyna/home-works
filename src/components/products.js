import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {toggleItemInFavorite, toggleItemInCart, addToCart, deleteFromCart, addToFavorite, deleteFromFavorite} from '../redux/action-creators'
import {loadProducts} from  '../redux/action-creators'
const Products = () => {
    const {products, isLoading} = useSelector(store => store.products);
    const {productsInCart} = useSelector(store => store.cart)
    const dispatch = useDispatch();
    const [stata,setStata] = useState(false);
    const handleCheck = () => {
        setStata(true);
    }
    useEffect(() => {
        dispatch(loadProducts());
    }, [])

    return (
        <div className="products_list">
            <h2>Products list</h2>
            {isLoading && (
                <h2 style={{color: 'red'}}>LOADING...</h2>
            )}
            {!isLoading && !!products.length && products.map(el => (
                <div
                    className="product"
                    key={el.id}
                >
                    <h3>{el.title}</h3>
                    <h4>{el.price}</h4>
                    <p>{el.category}</p>
                    <p>{el.description}</p>
                    <button className={`button_wishList${productsInCart.includes(el.id) ? ' red' : ''}`} onClick={() => dispatch(toggleItemInFavorite(el.id))}> Add to favorite</button>
                    <button onClick={() => dispatch(toggleItemInCart(el.id))}>Add to cart</button>
                    <img src={el.image} alt=""/>
                    <hr/>
                </div>
            ))}
        </div>
    )
}
export default Products