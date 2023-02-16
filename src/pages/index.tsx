import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'
import camiseta4 from '../assets/camisetas/4.png'

import 'keen-slider/keen-slider.min.css'
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price_id: string;
  price: number;
  formattedPrice: string;
}

interface HomeProps {
  products: Product[]
}

export default function Home({products}: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      { products.map(product => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.formattedPrice}</span>
            </footer>
          </Product>
        )
      })}
      
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    active: true,
    expand: ['data.default_price']
  })

  // console.log(response.data)

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      description: product.name,
      imageUrl: product.images[0],
      price_id: price.id,
      price: price.unit_amount,
      formattedPrice: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100)
    }
  })

  return {
    props: {
      products
    }
  }
}
