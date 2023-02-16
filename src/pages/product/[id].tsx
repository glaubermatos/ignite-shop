import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

interface Product {
    id: string,
    name: string,
    description: string,
    imageUrl: string,
    price: string,
}

interface ProductProps {
    product: Product
}

export default function Product({ product }: ProductProps) {
    const { isFallback } = useRouter()

    if (isFallback) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={420} alt="" />
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <div dangerouslySetInnerHTML={{__html:product.description}}></div>
                {/* <p>{product.description}</p> */}

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await stripe.products.list({
        active: true,
        limit: 3,
    })

    const paths = response.data.map((product) => {
        return {
            params: {
                id: product.id
            }
        }
    })

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
    const productId = params.id

    const response = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = response.default_price as Stripe.Price

    const product = {
        id: response.id,
        name: response.name,
        description: response.description,
        imageUrl: response.images[0],
        price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price.unit_amount / 100)
    }

    return {
        props: {
            product
        },
        // revalidade: 60 * 60 * 2, // 2 hours
    }
}