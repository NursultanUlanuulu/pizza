'use client'

import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useIntersection } from 'react-use'
import { useCategoryStore } from "@/store/category";

interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName?: string;

}


export const ProductsGroupLists: React.FC<Props> = ({ title, items, categoryId, listClassName, className }) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const intersectionRef = React.useRef(null)
    const intersecion = useIntersection(intersectionRef, {
        threshold: 0.4,
    })

    React.useEffect(() => {
        if (intersecion?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersecion?.isIntersecting, title])
    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            <div className={cn('grid grid-cols-3 gap-[58px]', listClassName)}>
                {items.map((item, i) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        price={item.items[0].price}
                    />
                ))}
            </div>




        </div >
    )

}