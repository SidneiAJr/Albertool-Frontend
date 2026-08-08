export function documentacao() {
    return `
# 📦 Albertool Frontend

> Biblioteca de componentes reutilizáveis para **React Native** e **React Web**

---

## 🙏 Obrigado por usar o Albertool Frontend!

---

## 📁 Estrutura Gerada

\`\`\`
Albertool Frontend/
├── interfaces/
│   └── interfaceComp.ts
├── utils/
│   └── utilsComp.ts
└── components/
    ├── buttons/
    ├── inputs/
    ├── cards/
    ├── modals/
    ├── images/
    ├── lists/
    ├── texts/
    ├── headers/
    ├── badges/
    ├── dropdowns/
    ├── avatars/
    ├── dividers/
    ├── toasts/
    └── loadings/
\`\`\`

---

## 🚀 Como Usar

1. Gere a pasta pelo comando da extensão
2. Arraste a pasta **Albertool Frontend** para dentro do seu projeto React ou React Native
3. Importe o componente desejado direto no seu arquivo

\`\`\`tsx
// Exemplo React Native
import BotaoReu from './Albertool Frontend/components/buttons/BotaoReu'

// Exemplo React Web
import BotaoReu from './Albertool Frontend/components/buttons/BotaoReuWeb'
\`\`\`

---

## 🧩 Componentes Disponíveis

| Componente | React Native | React Web |
|------------|:------------:|:---------:|
| Botão      | ✅           | ✅        |
| Input      | ✅           | ✅        |
| Card       | ✅           | ✅        |
| Modal      | ✅           | ✅        |
| Imagem     | ✅           | ✅        |
| Lista      | ✅           | ✅        |
| Texto      | ✅           | ✅        |
| Header     | ✅           | ✅        |
| Badge      | ✅           | ✅        |
| Dropdown   | ✅           | ❌        |
| Avatar     | ✅           | ❌        |
| Divider    | ✅           | ❌        |
| Toast      | ✅           | ❌        |
| Loading    | ✅           | ✅        |

---

## 🛠️ Interfaces Inclusas

- \`Botao\` — texto, cor, tamanho, borda, onConfirmar, onCancelar
- \`Input\` — tamanho, borda, corBorda, isActive, obrigatorio
- \`Card\` — tamanho, borda, fundo, isActive
- \`Modal\` — visivel, onFechar, titulo, conteudo, corFundo
- \`Imagem\` — tamanho, borda, cor, fundo
- \`Lista\` — dados, keyExtractor, renderItem, titulo, vazio
- \`Texto\` — tipo (Grande | Medio | Pequeno), cor, fonteEstilo
- \`Header\` — titulo, subtitulo, voltarVisivel, onVoltar, corFundo
- \`Badge\` — valor, cor, visivel
- \`Dropdown\` — opcoes, selecionado, onSelecionar, placeholder, borda
- \`loading\` — visivel, mensagem, cor

---

## ⚙️ Utils Inclusas

| Função | Descrição |
|--------|-----------|
| \`formatarCPF\` | Formata CPF (000.000.000-00) |
| \`formatarCNPJ\` | Formata CNPJ |
| \`formatarTelefone\` | Formata telefone |
| \`formatarCEP\` | Formata CEP |
| \`formatarData\` | Converte YYYY-MM-DD → DD/MM/YYYY |
| \`calcularIdade\` | Calcula idade pela data de nascimento |
| \`capitalizarNome\` | Capitaliza cada palavra do nome |
| \`validarEmail\` | Valida formato de e-mail |
| \`validarSenha\` | Valida força da senha |
| \`validarTelefone\` | Valida formato de telefone |
| \`salvarLocal\` | Salva no AsyncStorage |
| \`lerLocal\` | Lê do AsyncStorage |
| \`removerLocal\` | Remove do AsyncStorage |

---

## 📌 Observações

- Todos os componentes aceitam a prop \`style\` para customizações adicionais
- As interfaces estão em \`interfaces/interfaceComp.ts\`
- Os utils estão em \`utils/utilsComp.ts\`
- Compatível com **TypeScript**

---

*Feito com ❤️ — Albertool Frontend*
    `
}