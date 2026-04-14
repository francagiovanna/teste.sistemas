import { validateGame, calculateRentalPrice } from "../src/services/game.service.js";

describe("validateGame", () => {
  test("deve lançar erro se faltar campos obrigatórios", () => {
    expect(() => validateGame({ title: "FIFA" })).toThrow("Missing required fields");
  });

  test("deve lançar erro se daily_price não for número", () => {
    expect(() =>
      validateGame({ title: "FIFA", platform: "PS5", daily_price: "15" })
    ).toThrow("daily_price must be a number");
  });

  test("deve retornar true para jogo válido", () => {
    expect(
      validateGame({ title: "FIFA", platform: "PS5", daily_price: 15 })
    ).toBe(true);
  });
});

describe("calculateRentalPrice", () => {
  // esse teste VAI FALHAR — porque o bug subtrai 5 fixo, não 10%
  test("deve aplicar 10% de desconto para membros", () => {
    expect(calculateRentalPrice(10, 3, true)).toBe(27);
  });

  test("deve retornar preço cheio para não membros", () => {
    expect(calculateRentalPrice(10, 3, false)).toBe(30);
  });
});