"use client"

import Image from "next/image";

import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

import { Product } from "@/types";
import IconButton from "@/components/ui/iconButton"
import Currency from "@/components/ui/currency";
import usePreviewModel from "@/hooks/usePreviewModel";
import useCart from "@/hooks/useCart";


interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    const cart = useCart();
    const previewModel =  usePreviewModel();
    const router = useRouter();

 const handleClick = () => {
  router.push(`/product/${data?.id}`);
 }

 const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    
    previewModel.onOpen(data);
 };

 const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    
    cart.addItem(data);
 };


  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        <div className="aspect-square rounded-xl bg-gray-100 relative">
         <Image 
          src={data?.images?.[0]?.url}
          fill
          alt="Images"
          className="aspect-square object-cover rounded-md"
         />
         <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
         <div className="flex gap-x-6 justify-center">
          <IconButton 
           onClick={onPreview}
           icon={<Expand size={20} className="text-gray-600" />}
          />
          <IconButton 
           onClick={onAddToCart}
           icon={<ShoppingCart size={20} className="text-gray-600" />}
          />
         </div>
         </div>
        </div>
        <div>
            <p className="font-semibold text-lg">
                {data.name}
            </p>
            <p className="text-sm text-gray-500">
                {data.category?.name}
            </p>
        </div>
        <div className="flex items-center justify-between">
         <Currency value={data?.price}/>
           </div>
        </div>
  )
}

export default ProductCard