# B4You-challenge

## 💻 Pré-requisitos   
Antes de começar, verifique se você atendeu aos seguintes requisitos:  

Você instalou Node: https://nodejs.org/en/download/current  
Você instalou o Docker: https://www.docker.com/products/docker-desktop.  
Alguma aplicação para testar rotas, aqui estão alguns exemplos:  
    Postman: https://www.postman.com/downloads/  
    insomnia: https://insomnia.rest/download  

## ☕ Usando a API  
Para usar a api do Desafio, siga estas etapas:  

Entre na raiz do projeto e:  
- Execute o comando `npm install` para instalar as dependências do projeto.  
- Execute o comando `docker-compose up -d` para criar um container com a imagem do postgresql (*Para não precisar instalar o Postgressql inteiro*).   
- Preencha o env através do modelo do projeto.  
- Execute o comando `npm run start` para rodar o projeto.  
- Execute o comando `npm run test` para rodar os testes unitários.  

## Exemplo de Request  
🕹 Aqui estão alguns "mocks" de requisição da API:  

### Criando uma transação através do método POST:  

URL: http://localhost:3000/api/transaction (*Caso tenha definido uma porta diferente no .env alterar para a porta correta.*)  

Body:  
{  
  "document_number": "12245678152",  
  "amount": 19.80,  
  "full_name": "John Doe",  
  "email": "John@example.com",  
  "card": {   
    "number": "1212567241123456",  
    "cvv": "159",  
    "expire_date": "10/2029",  
    "placeholder": "John Doe"  
  }  
}  
  
### Consultando uma transação na base de dados através do método GET:  

URL: http://localhost:3000/api/transaction?page=1&size=1&email='John@gmail.com' (Definir os parâmetros da query string ex: &document_number=12245678152, &id_status = 2)  
  
Body:   
{  
}  