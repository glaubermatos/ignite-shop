import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

interface ProductProps {
    product: {
        id: string,
        description: string,
        name: string,
        imageUrl: string,
        price: string,
    }
}

export default function Product({ product }: ProductProps) {
    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={420} alt="" />
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
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
        descriprion: response.description,
        imageUrl: response.images[0],
        price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price.unit_amount)
    }

    return {
        props: {
            product
        },
        revalidade: 60 * 60 * 24, // 24 hours
    }
}