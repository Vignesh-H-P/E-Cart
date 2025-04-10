import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';
import Skeleton from 'react-loading-skeleton';

const Product = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [id]);

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
            localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]));
        }
        navigate('/cart');
    };

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft: 6}} />
                </div>
            </>
        );
    };

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">${product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-dark" onClick={addToCart}>Add to Cart</button>
                </div>
            </>
        );
    };

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
};

export default Product;