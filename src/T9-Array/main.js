x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// Utilizando os métodos definidos para array (slide 67), a partir de um dado array de entrada:
// 1) Verifique se todos os elementos são primos.
// 2) Imprima o dobro dos valores
// 3) Retorne um array com apenas valores primos


function isPrime(number) {

  if (number == 2 || number == 3)
    return true;

  if (number <= 1 || number % 2 == 0 || number % 3 == 0)
    return false;

  for (let i = 5; i * i <= number; i++) {
    if (number % i == 0)
      return false;
  }

  return true;
}

function alterArray(arrayOfNumbers) {

  // A1
  console.log("Is the number prime: " + arrayOfNumbers.map(number => isPrime(number) ? "T" : "F"));


  // A2
  console.log("Double: " + arrayOfNumbers.map(element => {
    return element * 2
  }));

  // A3
  console.log("Only primes: " + arrayOfNumbers.filter(element => isPrime(element)));
}

alterArray(x);