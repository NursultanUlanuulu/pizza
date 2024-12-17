import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
    id: number,
    name: string,
    price: number,
    imageUrl: string,
    className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => (
    <div className={cn('', className)}>
        <Link href={`/product/${id}`}>
            <div className="flex justify-center p-6 bg-secondary rounded-lg h-[240px]">
                <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
            </div>

            <Title text={name} size="sm" className="mb mt font-bold" />
            <p className="text-sm text-gray-400">
                Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
            </p>

            <div className="flex justify-between items-center mt-4">
                <span className="text-[20px]">
                    от <b>{price} $</b>
                </span>
                <Button variant='secondary' className="text-base font-bold" >
                    <Plus size={20} className="mr-1" />
                    Добавить
                </Button>
            </div>





        </Link>
    </div>
)