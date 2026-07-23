import ProductSectionComponent from "@/components/client/ProductSectionComponent"
import { getSearchedProducts } from "@/services/product.service"

const SearchPage = async ({ searchParams }: { searchParams: Promise<{ name: string }> }) => {
    const { name } = await searchParams
    const products = await getSearchedProducts(name)
    return (
        <section className="container">
            <div className="flex flex-wrap items-end gap-3 max-md:flex-col max-md:items-start max-md:gap-1.5 mb-8">
                <h1 className="text-3xl font-bold capitalize max-sm:text-lg">Explore All Products</h1>
                <span className="text-xl font-medium capitalize max-sm:text-sm">({products?.data?.products.length} Products Found)</span>
            </div>
            {
                <ProductSectionComponent products={products?.data?.products}/>
            }
      </section>
    )
}
export default SearchPage