<div align="center">

# 📦 Albertool Frontend

### Extensão VSCode que gera estrutura completa de componentes para React Native e React Web em segundos.

![VSCode](https://img.shields.io/badge/VSCode-Extension-007ACC?style=for-the-badge&logo=visual-studio-code)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript)
![React Native](https://img.shields.io/badge/React_Native-Supported-61DAFB?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React_Web-Supported-61DAFB?style=for-the-badge&logo=react)

</div>

---

## 🚀 O que é?

O **Albertool Frontend** é uma extensão para VSCode que cria toda a estrutura de componentes reutilizáveis do zero — sem instalar dependências, sem configuração manual.

Um clique e sua estrutura está pronta para usar.

---

## ✨ O que ele gera?

```
Albertool Frontend/
├── interfaces/
│   ├── interfaceComp.ts       → Interfaces de todos os componentes
│   └── interfaceUser.ts       → Interfaces de usuário (login, cadastro, etc)
├── utils/
│   └── utils.ts               → Funções de formatação e validação
├── docs/
│   └── README.md              → Documentação de uso
└── components/
    ├── buttons/               → BotaoReu
    ├── inputs/                → InputReu
    ├── cards/                 → CardReu
    ├── modals/                → ModalReu
    ├── images/                → ImagemReu
    ├── lists/                 → ListaReu
    ├── texts/                 → TextoReu
    ├── headers/               → HeaderReu
    ├── badges/                → BadgeReu
    ├── dropdowns/             → DropdownReu
    ├── avatars/               → AvatarReu
    ├── dividers/              → DividerReu
    ├── toasts/                → ToastReu
    └── loadings/              → LoadingReu
```

---

## 🧩 Componentes disponíveis

| Componente  | React Native | React Web |
|-------------|:------------:|:---------:|
| Botão       | ✅           | ✅        |
| Input       | ✅           | ✅        |
| Card        | ✅           | ✅        |
| Modal       | ✅           | ✅        |
| Imagem      | ✅           | ✅        |
| Lista       | ✅           | ✅        |
| Texto       | ✅           | ✅        |
| Header      | ✅           | ✅        |
| Badge       | ✅           | ✅        |
| Dropdown    | ✅           | ✅        |
| Avatar      | ✅           | ✅        |
| Divider     | ✅           | ✅        |
| Toast       | ✅           | ✅        |
| Loading     | ✅           | ✅        |

---

## ⚙️ Utils inclusos

### Formatação
| Função | Descrição |
|--------|-----------|
| `formatarCPF` | Formata CPF → `000.000.000-00` |
| `formatarCNPJ` | Formata CNPJ → `00.000.000/0000-00` |
| `formatarTelefone` | Formata telefone → `(00) 00000-0000` |
| `formatarCEP` | Formata CEP → `00000-000` |
| `formatarData` | Converte `YYYY-MM-DD` → `DD/MM/YYYY` |
| `formatarMoeda` | Formata valor → `R$ 0,00` |
| `formatarCaixaAlta` | Converte para `MAIÚSCULAS` |
| `formatarCaixaBaixa` | Converte para `minúsculas` |

### Validação
| Função | Descrição |
|--------|-----------|
| `validarEmail` | Valida formato de e-mail |
| `validarSenha` | Valida força da senha (8+ chars, maiúscula, número) |
| `validarTelefone` | Valida formato de telefone |
| `validarNome` | Valida se nome tem 3+ caracteres |
| `validarCPF` | Valida CPF com dígitos verificadores |
| `validarCEP` | Valida formato de CEP |

### Outros
| Função | Descrição |
|--------|-----------|
| `calcularIdade` | Calcula idade pela data de nascimento |
| `capitalizarNome` | Capitaliza cada palavra do nome |
| `salvarLocal` | Salva dado no AsyncStorage / localStorage |
| `lerLocal` | Lê dado do AsyncStorage / localStorage |
| `removerLocal` | Remove dado do AsyncStorage / localStorage |

---

## 📖 Como usar

### 1. Instale a extensão
Busque por **Albertool Frontend** na marketplace do VSCode.

### 2. Abra uma pasta no VSCode
A extensão precisa de uma workspace aberta para gerar os arquivos.

### 3. Execute o comando
Abra a paleta de comandos:
```
Ctrl + Shift + P  (Windows/Linux)
Cmd + Shift + P   (Mac)
```
Digite:
```
Albertool: Criar Estrutura Frontend
```

### 4. Escolha a plataforma
Selecione **React Native** ou **React Web**.

### 5. Use os componentes
A pasta **Albertool Frontend** será criada na raiz do projeto. Arraste para dentro do seu projeto e importe:

```tsx
// React Native
import BotaoReu from './Albertool Frontend/components/buttons/botaoReu'

// React Web
import BotaoReu from './Albertool Frontend/components/buttons/botaoReu'
```

---

## 💡 Exemplo de uso

```tsx
import BotaoReu from './Albertool Frontend/components/buttons/botaoReu'
import InputReu from './Albertool Frontend/components/inputs/inputReu'

export default function TelaLogin() {
    return (
        <>
            <InputReu
                tamanho={14}
                borda={1}
                corBorda="#ccc"
                obrigatorio="Campo obrigatório"
            />
            <BotaoReu
                texto="Entrar"
                cor="#007AFF"
                tamanho={14}
                borda={8}
                onConfirmar={() => console.log('Login!')}
            />
        </>
    )
}
```

---

## 📌 Observações

- Nenhuma dependência é instalada automaticamente
- Todos os componentes aceitam a prop `style` para customizações
- Totalmente compatível com **TypeScript**
- O utils do React Web usa `localStorage` — o do React Native usa `AsyncStorage`

---

## 🗺️ Roadmap

- [x] React Native — componentes base
- [x] React Web — componentes base
- [x] Interfaces TypeScript
- [x] Utils de formatação e validação

---

## 👨‍💻 Autor

Feito com ❤️ por **Alberto**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Conectar-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/seu-perfil)
[![GitHub](https://img.shields.io/badge/GitHub-Seguir-181717?style=for-the-badge&logo=github)](https://github.com/seu-usuario)

---

<div align="center">
  <sub>Se o projeto te ajudou, deixa uma ⭐ no repositório!</sub>
</div>
