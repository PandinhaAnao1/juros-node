
class Tipos {

     testaSePessoal(body) {
        const salario = body.income;
        const idade = body.age;
        const localidade = body.location;
        if (salario<=3000){
            return {
                "type": "PERSONAL",
                "interest_rate": 4
              };
        }else if((salario>3000&&salario<5000)&&(idade<30)&&(localidade == 'SP')) {
            return {
                "type": "PERSONAL",
                "interest_rate": 4
              };
        }else{
            return false;   
        };
    };
    
    testaSeConsiginado(body){
        const salario = Number(body.income);
        if(salario>=5000){
            return {
                "type": "CONSIGNMENT",
                "interest_rate": 2
              }
        }else{
            return false;   
        };
    };

    testaSeGarantido(body){
        const salario = Number(body.income);
        const idade = Number(body.age);
        const localidade = body.location;
        if((salario>3000&&salario<5000)&&(idade<30)&&(localidade == 'SP')){
                return {
                    "type": "GUARANTEED",
                    "interest_rate": 3
                  };
        }else if(salario>=3000){
            return {
                "type": "GUARANTEED",
                "interest_rate": 3
              };
        }else{
            return false;
        };
    };
}

export default Tipos;


/*
Conceder o empréstimo pessoal se o salário do cliente for igual ou inferior a R$ 3000.
  "type": "PERSONAL",
  "interest_rate": 4

Conceder o empréstimo com garantia se o salário do cliente for igual ou inferior a R$ 3000.
    "type": "GUARANTEED",
    "interest_rate": 3


Conceder o empréstimo pessoal se o salário do cliente estiver entre R$ 3000 e R$ 5000, 
se o cliente tiver menos de 30 anos e residir em São Paulo (SP).
  "type": "PERSONAL",
  "interest_rate": 4

Conceder o empréstimo consignado se o salário do cliente for igual ou superior a R$ 5000.
    "type": "CONSIGNMENT",
    "interest_rate": 2

Conceder o empréstimo com garantia se o salário do cliente estiver entre R$ 3000 e R$ 5000, 
se o cliente tiver menos de 30 anos e residir em São Paulo (SP).
      "type": "GUARANTEED",
      "interest_rate": 3

*/