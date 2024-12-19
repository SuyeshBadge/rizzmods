import { notFound } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: Props) {
  // You'll need to implement this function to fetch product data
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="product-image">
          <img src={product.image} alt={product.name} className="w-full rounded-lg" />
        </div>
        <div className="product-details">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl mb-4">${product.price}</p>
          <p className="mb-8">{product.description}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  )
} 