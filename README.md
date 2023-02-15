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