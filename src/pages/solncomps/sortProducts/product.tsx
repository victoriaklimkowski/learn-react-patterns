import React, { ChangeEvent, useState } from 'react';
import { Product, StrategPickerProps } from '../../../types/product';
import { strategies } from './sort';
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
    // sorted product list based on the selected strategy
    const sortedProducts = strategies[sortStrategy](products);

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
