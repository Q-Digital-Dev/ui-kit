export default function getDeclension(
  number: number,
  declensions: string[],
): string {
  // Проверка на правильность количества склонений
  if (declensions.length !== 3) {
    throw new Error('Массив склонений должен содержать ровно 3 элемента.')
  }

  // Проверка на правильность числа
  if (number < 0) {
    throw new Error('Число не может быть отрицательным.')
  }

  // Определение склонения в зависимости от числа
  let index: number
  const modulo100 = number % 100
  if (modulo100 >= 11 && modulo100 <= 19) {
    index = 2
  } else {
    const modulo10 = number % 10
    if (modulo10 === 1) {
      index = 0
    } else if (modulo10 >= 2 && modulo10 <= 4) {
      index = 1
    } else {
      index = 2
    }
  }

  return declensions[index]
}
