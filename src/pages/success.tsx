import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
    return (
        <SuccessContainer>
            <h1>Compra efetuada!</h1>

            <ImageContainer>

            </ImageContainer>

            <p>Uhuul <strong>Diego Fernandes</strong>, sua camiseta <strong>Camiseta Maratona Explorer</strong> já está a caminho de sua casa. </p>

            <Link
                href={'/'}
                // passHref
                // legacyBehavior
                // prefetch={false}
            >
                Voltar ao catálogo
            </Link>
        </SuccessContainer>
    )
}