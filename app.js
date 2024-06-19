console.log(" === Inspirational Quote Generator ===");

const quotes = [
  {
    author: "Winston Churchill",
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  },
  {
    author: "Confucius",
    quote: "He who conquers himself is the mightiest warrior.",
  },
  {
    author: "Epictetus",
    quote:
      "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
  },
  {
    author: "Eleanor Roosevelt",
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
  },
  {
    author: "Mark Twain",
    quote: "The secret to getting ahead is getting started.",
  },
  {
    author: "Eva Young",
    quote: "To think too long about doing a thing often becomes its undoing.",
  },
  {
    author: "Rosa Luxemburg",
    quote: "Those who do not move, do not notice their chains.",
  },
  {
    author: "Vidal Sassoon",
    quote:
      "The only place where success comes before work is in the dictionary.",
  },
  {
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
];

const generateRandomQuote = (quotes) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return `
        ${quotes[randomIndex].quote} - ${quotes[randomIndex].author}
    `;
};

console.log(generateRandomQuote(quotes));
