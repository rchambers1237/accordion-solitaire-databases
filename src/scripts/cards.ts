class Deck {
    cards: { suit: string; rank: number }[] = [];
    
    createDeck() {
        for (let suit of ['hearts', 'diamonds', 'clubs', 'spades']) {
            for (let rank = 1; rank <= 13; rank++) {
                this.cards.push({ suit, rank });
            }
        }
    }

    shuffleDeck() {
        let deck = [...this.cards];
        let i, j;

        // Fisher-Yates shuffle logic
        for (i = deck.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        this.cards = deck;
    }

    getCards() {
        return this.cards;
    }
}

export default Deck;
