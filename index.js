// Ruleta
//------------------------------------
// Napište program, který zjistí vlastnosti zadaného čísla na ruletě.
// Na obrázku vidíte rozložení čísel na klasické Francouzské ruletě.
// Ruleta obsahuje čísla 0–36.
// Každé číslo s výjimkou nuly je buď sudé nebo liché a zároveň červené nebo černé.
// Pro čísla 1 až 10 a 19 až 28 platí, že lichá čísla jsou červená a sudá jsou černá.
// Pro zbytek platí obrácené pravidlo, tedy lichá jsou černá a sudá červená.
// Nula není ani lichá ani sudá, ani černá ani červená.
// Vytvořte stránku, které uživatel zadá číslo a stránka odpoví jestli jde o číslo sudé nebo liché, černé nebo červené, nebo je to nula.
const number = Number(prompt('Zadejte číslo od 0 - 36.'));
const oddNumber = 'Liché ';
const evenNumber = 'Sudé ';
const blackNumber = 'černé';
const redNumber = 'červené';
let result = '';
const remains = number % 2;

if (number === 0) {
  result = 'Zelené.';
} else if ((number <= 10 && number > 0) || (number >= 19 && number <= 28)) {
  if (remains === 0) {
    result = `${evenNumber} a ${blackNumber}`;
  } else {
    result = `${oddNumber} a ${redNumber}`;
  }
} else {
  if (remains !== 0) {
    result = `${evenNumber} a ${redNumber}`;
  } else {
    result = `${oddNumber} a ${blackNumber}`;
  }
}

document.body.innerHTML += `<div class="roulette">
  <h1 class="roulette__title">Francouzská ruleta</h1>
  <img class="roulette__picture" src="images/ruleta.png" alt="Ruleta">
  <h2>Číslo je: ${result}
  </div>`;
