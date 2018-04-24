export const particularQuote = (quotes, id) => {
    return quotes.filter(quote => quote.id === id)
};
