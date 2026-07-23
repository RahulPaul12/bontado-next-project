'use client'

import useSWR from 'swr';
import { getProductDetails } from '@/services/product.service';
import { CircleX } from 'lucide-react';
import Image from 'next/image';
const ProductDetails = ({
  slug,
  isOpen,
  onClose,
}: {
  slug: string;
  isOpen?: boolean;
  onClose: () => void;
}) => {
  const { data, isLoading } = useSWR(
    isOpen && slug ? ['product-detail', slug] : null,
    () => getProductDetails(slug)
  );

  return (
    <div id="product-details-modal" className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="modal-dialog">
        <button onClick={onClose} className='absolute top-4 right-4 text-red-500'>
          <CircleX size={24}/>
        </button>
        {isLoading ? (
          <p>Loading...</p>
        ) : data?.data ? (
        <>
          <div className="p-4 sm:p-5 border-b border-gray-100">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                <Image width={200} height={200} src={data.data.image || ''} alt={data.data.name || ''} className="w-full" />
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-7">
                <h2 className="text-2xl font-medium capitalize mb-2">{data.data.name}</h2>
                <p className="text-[10px] mobile:leading-none sm:text-base capitalize mb-2">{data.data.unit}</p>
                <h3 className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 pb-3 mb-4 border-b border-gray-100">
                  <span className="text-base sm:text-2xl font-bold text-primary">
                    {data.data.discounted_price || data.data.currency_price}
                  </span>
                  {data.data.discounted_price < data.data.currency_price && (
                    <del className="text-xs sm:text-sm font-semibold text-slate-400">{data.data.currency_price}</del>
                  )}
                </h3>
              </div>
            </div>
          </div>  
          <div className="p-4 sm:p-5 text-sm leading-6">
            <div className="text-description" dangerouslySetInnerHTML={{ __html: data.data.details }}/>
          </div> 
        </>
        ) : null}
      </div>
    </div>
  );
};

export default ProductDetails;