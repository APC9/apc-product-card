import React, { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';

import {
    ProductContextProps,
    Product,
    onChangeArgs,
    initialValues,
    ProductCardHandlers,
} from '../interfaces/interfaces';

import styles from '../style/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    className?: string;
    style?: React.CSSProperties;
    value?: number;
    initialValues?: initialValues;
    onChange?: (args: onChangeArgs) => void;
    children: (args: ProductCardHandlers) => JSX.Element;
}

export const ProductCart = ({
    product,
    className,
    style,
    value,
    initialValues,
    children,
    onChange,
}: Props) => {
    // eslint-disable-next-line prettier/prettier

    const { counter, maxCount, isMaxCountReached, increaseBy, reset } =
        useProduct({
            product,
            value,
            initialValues,
            onChange,
        });

    return (
        <Provider value={{ counter, product, maxCount, increaseBy }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset,
                })}
            </div>
        </Provider>
    );
};
