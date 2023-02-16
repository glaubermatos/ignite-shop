import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum aperiam nulla aspernatur recusandae eum, aliquid earum temporibus doloribus nisi necessitatibus quidem qui excepturi nam voluptates dolore minima vel architecto sit.</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}