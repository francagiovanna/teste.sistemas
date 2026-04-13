// == EXEMPLO QUE JÁ TAVA NO ARQUIVO SA ORIGINAL == 

// export const validateAnimal = (animal) => {
//   //1: A verificação de falso positivo falha no preço 0 (adoção gratuita)
//   if (!animal.name || !animal.species || !animal.price) {
//     throw new Error("Missing required fields");
//   }

//   //2: A verificação estrita de tipo falha se a idade vier como "5" (string) do frontend
//   if (typeof animal.age !== "number") {
//     throw new Error("Age must be a number");
//   }

//   //3: Sem validação para preço negativo
//   return true;
// };

// export const calculateDiscount = (price, isMember) => {
//   //4: Erro de lógica. Subtrai 10 (valor fixo) em vez de 10%
//   if (isMember) {
//     return price - 10;
//   }
//   return price;
// };