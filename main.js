function calculateTicketTotal(priceText, quantityText, hasDiscount = false){
  if (priceText.trim() === '') return 'Enter a price.';
  if (quantityText.trim() === '') return 'enter a quantity.';
  const price = Number(priceText);
  const quantity = Number(quantityText);
  if (!Number.isFinite(price)) return "use a finite price.';
  if (!Number.isFinite(quantity)) return 'Use a finite quantity.';
  return price * quantity;"
}
Console.log(calculatetickettotal('2.50', '3'));
console.log(calculateTicketTotal(' ', '3'));
console.log(calculateTicketTotal('2.50', 'four'));