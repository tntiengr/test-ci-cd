import { numToText } from "../numToText";

describe("numToText", () => {
  test('should return "mot" when input is 1', () => {
    expect(numToText(1)).toBe("mot");
  });

  test('should return "hai" when input is 2', () => {
    expect(numToText(2)).toBe("hai");
  });

  test('should return "ba" when input is 3', () => {
    expect(numToText(3)).toBe("ba");
  });

  test('should return "khong biet" for any other input', () => {
    expect(numToText(0)).toBe("khong biet");
    expect(numToText(4)).toBe("khong biet");
    expect(numToText(-1)).toBe("khong biet");
    expect(numToText(100)).toBe("khong biet");
  });
});
