# :heavy_dollar_sign:MyPersonalWallet:heavy_dollar_sign:

## Muito Bem vindo ao repositório My Personal Wallet!!


- [Objetivo](#objetivo)
- [Requisitos](#requisitos)
- [Funcionalidades](#funcionalidades)
- [Como que esta aplicação funciona](#comoqueestaaplicaçãofunciona)
- [Como baixar esta aplicação](#comobaixarestaaplicação)
- [Testes](#testes)
- [Deploy](#deploy)

## Objetivo

Desenvolver uma aplicação que possua o comportamento similar ao de uma 'blockchain', sendo possível realizar a compra e venda de criptomoedas.

## Requisitos
* React;
* Consumir uma API 'Mockada';
* Validação dos inputs;
* Utilizar Redux como gerenciador de estado;

## Funcionalidades
* Comprar/Vender criptomoedas;
* Página de Login;
* Página para criar um novo usuário
* Api Mockada para tratar de atualizar saldo do usuário
* Esta aplicação utiliza informações retornadas da API: https://docs.awesomeapi.com.br/api-de-moedas

## :bangbang: Importante :bangbang:
O sistema já possui um usuário com saldo (que retorna da api mockada) para poder acessar as funções de compra e venda da aplicação, para entrar com ele coloque qualquer email(no formato de um e-mail válido ex: 'email@email.com') no campo email, e senha(maior que 5 carateres) no campo password.


## Como que esta aplicação funciona?
1. Realize o login ou crie um novo usuário;
2. Na página principal é possivel ver sua carteira contendo todas as moedas as quais voce já possui (este usuário já vem com 1.2 USD comprados :smile:) clicando em 'Wallet';
3. Ao clicar em 'Currencies' será renderizado uma lista contendo todos os tipos de moedas disponíveis retornadas da [API](https://docs.awesomeapi.com.br/api-de-moedas) clique em alguma para selecioná-la;
4. Notará que algumas informações a respeito dessa moeda serão renderizadas logo abaixo...
5. Clique em 'Buy' e notará que vai abrir uma janela onde é possivel escolher a quantidade deseja com base em seu saldo.
6. O mesmo ocorre para vender porém com base na quantidade de moedas que voce possui :smile:..

![ezgif com-gif-maker](https://user-images.githubusercontent.com/78596051/142656298-6efe9c0c-3476-4cc0-8ed0-4d9231b29d1b.gif)

## Como baixar esta aplicação?
1. Primeiramente copie o link de referencia deste repositorio no botão "Code".
2. No seu Computador acesse a pasta em que deseja clonar o projeto.
3. Abra o terminal e digite 'git clone', e cole o endereço que você copiou deverá ficar desta maneira:
* `git clone git@github.com:FelipeFloresWeb/MyPersonalWallet.git`
4. Entre na ṕasta clonada do projeto:
* `cd MyPersonalWallet`
5. Instale as dependencias de desenvolvimento do front e back end:
* `cd my-personal-wallet`
* `npm install`
6. Após o término da instalação inicie a aplicação com o seguinte comando:
* `npm start`

## Testes

Para rodar os testes da aplicação execute o seguinte comando:
* `npm test`
:bangbang: Certifique-se de estar dentro da pasta 'my-personal-wallet' :bangbang:

## Autor
[Felipe Flores](https://www.linkedin.com/in/felipe-flores-trybe/)

## Deploy
### Acesse aplicação agora mesmo clicando na imagem abaixo 😄

<a href="https://my-personal-wallet.herokuapp.com/" target="_blank">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original-wordmark.svg" alt="node" width="100" height="100"/>
</a>
