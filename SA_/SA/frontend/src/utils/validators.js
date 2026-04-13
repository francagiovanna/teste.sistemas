export const isPuppy = (age) => {
  // Retorna verdadeiro para 1 ano de idade. O requisito é < 1 ano.
  return age <= 1;
};

export const formatCurrency = (amount) => {
  // O programa trava ou retorna "NaN" se o valor for nulo/indefinido
  return "$" + Number(amount).toFixed(2);
};

export const validateForm = (name, species) => {
  // Verifica apenas o comprimento, não verifica strings vazias com espaços " "
  return name.length > 0 && species.length > 0;
};
