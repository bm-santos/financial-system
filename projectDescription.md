# Projeto - Sistema Financeiro

- Registrar
- Logar
- Ver moedas
- Cadastrar despesas
- Ver despesas


## Fake api - Só baixar e rodar
https://github.com/jenicarvalho/fake-api-financeiro

npm install

json-server db.json -m ./node_modules/json-server-auth -r routes.json --port 4000

---- 

## Home - Página
- Mensagem de bem vindo

## Moedas - Página
- Pedir para o usuário selecionar uma moeda
- Listar as moedas usando: https://v2.api.forex/infos/currencies.json
- Adicionar click para que seja possível capturar o item clicado
- Enviar o item clicado, o currency para essa api:
https://v2.api.forex/infos/currency/usd.json?lang=pt
mudando no lugar de **usd** para a moeda selecionada
https://v2.api.forex/infos/currency/**moeda_clicada_vai_aqui**.json?lang=pt

- Mostrar todos os itens retornados pela API


## Finanças
- *Cadastrar* - Página
  - Recebimentos | Despesas (radio button)
  - Valor
- *Listar*  - Página
  - Mostrar ícones referente a despesas ou recebimentos 
  - Deletar mostrar ícone de lixeira ou X

--- 
### APIS
**CADASTRO**
- Cadastrar usando: http://localhost:4000/register
- Método **POST**
- Enviar email e password


**LOGIN**
- Logar usando: http://localhost:4000/login
- Método **POST**
- Enviar email e password
- Guardar token no local storage

**FINANÇAS**
- Cadastrar usando:
  http://localhost:4000/finance
  - Método **POST**
  - Enviar type e amount, por exemplo:
  ```
  {
      type: "recebimento",
      amount: "R$ 1020"
  }
  ```
  ```
  {
      type: "despesa",
      amount: "R$ 1020"
  }
  ```
- Listar usando:
  http://localhost:4000/finance
  - Método **GET**


- Deletar usando:
  http://localhost:4000/finance/**aqui_vai_o_id**
  - Método **DELETE**
