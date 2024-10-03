import React, { ChangeEvent, useState } from 'react';
import { Product, StrategPickerProps } from '../../../types/product';
import { initialProducts } from './data';


const StrategyPicker = ({ sortStrategy, handleSortStrategyChange }: StrategPickerProps) => {
    return (
        <div>
            <label>Sort by: </label>
            <select value={sortStrategy} onChange={e => handleSortStrategyChange(e)}>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="name">Name</option>
            </select>
        </div>
    );
};

const SortedProductList = ({ products, sortStrategy }: { products: Product[], sortStrategy: string }) => {
    // Sorting logic using if-else statements
    const getSortedProducts = (): Product[] => {
        if (sortStrategy === 'price') {
        return [...products].sort((a, b) => a.price - b.price);
        } else if (sortStrategy === 'rating') {
        return [...products].sort((a, b) => b.rating - a.rating);
        } else if (sortStrategy === 'name') {
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
        } else {
        return products; // Default case
        }
    };

    const sortedProducts = getSortedProducts();

    return (
        <ul>
            {/* Render sorted product list */}
            {sortedProducts.map((product) => (
                <li key={product.name}>
                    {product.name} - ${product.price} - Rating: {product.rating}
                </li>
            ))}
        </ul>
    );
}

const ProductList = () => {
    const [sortStrategy, setSortStrategy] = useState<string>('price');

    const handleSortStrategyChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        setSortStrategy(e.target.value);
    }

    return (
        <div>
            <h1>Product List</h1>
            <StrategyPicker sortStrategy={sortStrategy} handleSortStrategyChange={handleSortStrategyChange} />
            <SortedProductList products={initialProducts} sortStrategy={sortStrategy} />
        </div>
    );
};

export default ProductList;
