Capítulo 2: Estrutura visual - Configurando Stitches

Nessa aula conheceremos o Stitches, uma ferramenta CSS-in-JS com foco em performance e experiencia de desenvolvimento que utilizaremos para estilizar a nossa aplicação.

Capitulo 2: Estrutura visual - Estilos globais

Vamos agora configurar os estilos globais da nossa aplicação, para reaproveitar algumas estilizações em todas as partes do nosso app.

/styles/global.ts:

```
import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100'
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  }
})
```

/styles/index.ts:

```
import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e'
    }
  }
})
```

Capitulo 2: Estrutura visual - Cabeçalho da aplicação

Nessa aula vamos começar a criar os elementos do nosso App, começando pelo Header.


Capitulo 2: Estrutura visual - Imagens no Next.js

O NextJS é um framework que possui muito mais funcionalidades que somente SSR e SSG. Nessa aula vamos conhecer uma de suas features, que é a funcionalidade de otimização de imagens.

Capítulo 2: Estrutura visual - Estrutura da Home

Nessa aula vamos começar a estruturar e estilizar nossa página Home, exibindo a estrutura inicial da visualização dos produtos.

Capitulo 2: Estrutura visual - Criando carrossel

Agora vamos implementar a funcionalidade de carrosell para nossa aplicação, que torna possível a gente fazer um scroll horizontal para visualizar mais produtos na nossa tela.

Capitulo 3: Integração com Stripe - Configurando conta Stripe

Nessa aula, vamos ver como configurar a conta do Stripe e fazer o cadastro dos produtos para poder preparar nossa aplicação para consumir a API.


Capitulo 3: Integração com Stripe - Buscando produtos do Stripe

Vamos agora entender como utilizar a SDK do Stripe para realizar uma busca dos produtos cadastrados para poder exibí-los na nossa listagem de produtos.


Capitulo 3: Integração com Stripe - Utilizando SSG

Nessa aula vamos entender os conceitos por trás da geração de páginas estáticas, e como utilizar o SSG para criar uma versão estática da nossa página que fica cacheada para acelerar o carregamento e até diminuir o número de requisições à API.


Capitulo 3: Integração com Stripe - Formatando preço

Agora vamos utilizar a classe Intl para poder formatar o preço dos produtos e exibí-los em tela já formatado.

Capitulo 4: Produto & Checkout - Navegação via Link

Nessa aula vamos entender sobre como a navegação funciona no NextJS, e como podemos utilizar as ferramentas que o NextJS provém para ter uma navegação melhor na nossa aplicação.


Capitulo 4: Produto & Checkout - Estrutura da página de produto

Agora vamos criar a estrutura visual da página de produto, para preparar a página para receber as funcionalidades.


Capitulo 4: Produto & Checkout - Caregando dados do produto

Nessa aula vamos entender como criar páginas dinâmicas no NextJS à partir do parâmetro enviado a ela, e carregaremos os dados dos nossos produtos dessa maneira utilizando o conceito de SSG.

Capitulo 4: Produto & Checkout - SSG com parâmetro dinâmico

Nessa aula vamos começar a entender as especificidades do NextJS sobre a geração de páginas estáticas com parâmetros dinâmicos, e conhecer o método getStaticPaths que especifica quais páginas devem ser geradas durante o build do nosso app.

Capitulo 4: Produto & Checkout - Fallback do SSG

Nessa aula entenderemos o que é o parâmetro fallback do método getStaticPaths e estratégias de geração de páginas estáticas que recebem parâmetros dinâmicos.

Capitulo 4: Produto & Checkout - Prefetch de links

Agora vamos conhecer mais uma feature do NextJS, que é um prefetch de páginas à partir do Link.


Capitulo 4: Produto & Checkout - Checkout no Stripe

Agora que já sabemos como criar as rotas server-side, vamos utilizar dessas rotas para criar uma sessão de checkout no stripe para a finalização da compra pelo Stripe.


Capitulo 4: Produto & Checkout - Botão de comprar

Nessa aula vamos integrar todas as funcionalidades da nossa aplicação, criando um checkout à partir do ID do produto selecionado.

Capitulo 4: Produto & Checkout - Estrutura de sucesso

Agora vamos estilizar a nossa página de sucesso para preparar ela para receber os dados após a compra.


Capitulo 4: Produto & Checkout - Dados da compra no sucesso

Nessa aula, nós vamos recuperar os dados da compra e inseri-los dentro da página de sucesso para exibir o sucesso da compra com os dados da API.