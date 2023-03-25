import React from "react";
import Link from "next/link";

const products = ['shirts', 'pants', 'skirts', 'shoes'];
export default function ProductsPage() {
    return (
        <>
            <h1>제품소개 페이지!</h1>
            <ul>
                {products.map((product, index) => <li key={index}>
                    <Link href={`/products/${product}`}>{product}</Link>
                </li>)}
            </ul>
        </>
    );
}
