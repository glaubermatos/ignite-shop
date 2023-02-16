import { GetStaticProps } from "next";
import Image from "next/image";

import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe";
import Stripe from "stripe";

import 'keen-slider/keen-slider.min.css'

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

export const getStaticProps: GetStaticProps = async () => {
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
      products,
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}
