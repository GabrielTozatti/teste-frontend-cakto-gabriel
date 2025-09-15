# 🌵 Teste Front-End Cakto – Gabriel Tozatti

Este projeto é um checkout simplificado desenvolvido com Next.js e TailwindCSS, focado em usabilidade, validação de dados e experiência do usuário.
A aplicação permite simular a finalização de uma compra digital com diferentes métodos de pagamento, validação de CPF e email, e cálculo automático de parcelas.

> Este projeto foi desenvolvido como parte do processo seletivo da Cakto.

Deploy: https://teste-frontend-cakto-gabriel.vercel.app/
---

## 🚀 Tecnologias utilizadas

- [Next.js](https://nextjs.org/) – React Framework
- [Tailwindcss](https://tailwindcss.com/) – Estilização utilitária
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática
- [ESLint + Prettier](https://eslint.org/) – Padrão de código

---

## 📁 Estrutura de Pastas

````
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── checkout/
│   │       ├── page.tsx
│   │       └── CheckoutPage.tsx
│   │
│   ├── components/
│   │   ├── Input.tsx
│   │   ├── Button.tsx
│   │   ├── PaymentOptions.tsx
│   │   └── Summary.tsx
│   │
│   ├── lib/
│   │   ├── product.ts
│   │   ├── cpf.ts
│   │   └── calculations.ts
│   │
│   └── types/
│       └── index.ts
````

---

## 💻 Funcionalidades

- ✅ Validação de email e CPF
- ✅ Escolha entre Pix e Cartão de Crédito
- ✅ Cálculo dinâmico de parcelas
- ✅ Exibição de resumo da compra
- ✅ Interface responsiva e acessível
- ✅ Reset automático do formulário após finalizar a compra

---

## 🧪 Como rodar o projeto

1. **Clone o repositório**
```bash
git clone https://github.com/GabrielTozatti/teste-frontend-cakto-gabriel.git
cd seu-projeto
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Gere o build de produção**
```bash
npm run build
npm start
```

---

## 💡 Se tivesse mais tempo, eu adicionaria:
- Validações em tempo real avançadas: email, CPF, cartão de crédito com máscara inteligente, validação de BIN e Luhn para cartão, evitando erros no envio.
- Selos de segurança e HTTPS reforçado: exibição de certificados e validação de transações via API segura.
- Auto-complete e prefill: integrar com dados salvos do usuário (browser ou backend) para acelerar o preenchimento do checkout.
- Preparação para internacionalização: pronto para suportar diferentes moedas e formatos de CPF/identificação.
- A/B Testing: testar layouts de botões, cores, textos e posicionamento de campos para encontrar a versão com maior conversão.
- Monitoramento de métricas em tempo real: integração com Google Analytics / GA4 para capturar pontos de abandono, tempo médio de checkout e taxa de sucesso.
- Indicadores de progresso: mostrar etapas do checkout (como em e-commerces grandes), melhorando percepção de velocidade e controle.

## 👨‍💻 Desenvolvedor
Gabriel Tozatti
[LinkedIn](https://www.linkedin.com/in/gabriel-tozatti/) • [GitHub](https://github.com/GabrielTozatti)
