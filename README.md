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

