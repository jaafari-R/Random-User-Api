class QuoteApi {
    async getRandomQuote() {
        const quote = await $.get(QUOTE_API);
        return quote.quote;
    }
}
