import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const priceId = req.body.priceId

        if (!priceId) {
            return res.status(400).end()
        }
    
        console.log(priceId)
    
        const successUrl = `${process.env.NEXT_URL}/success`
        const cancelUrl = `${process.env.NEXT_URL}/`
    
        const checkoutSession = await stripe.checkout.sessions.create({
            success_url: successUrl,
            cancel_url: cancelUrl,
            mode: 'payment',
            line_items: [{
                price: priceId,
                quantity: 1
            }],
        })

        return res.status(201).json({
            checkoutUrl: checkoutSession.url
        })
    }
    
}