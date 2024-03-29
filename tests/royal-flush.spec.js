/* eslint-disable no-undef */
import Card from "../src/card.js"
import SUITS from "../src/constants/suits.js"
import RoyalFlush from "../src/hand-types/royal-flush.js"

describe("Royal flush", () => {
  it("finds the correct number of hands", () => {
    const royalFlush = new RoyalFlush()
    expect(royalFlush.hands.length).toBe(1)
  })

  it("handles 1 required with 1 to draw", () => {
    const cards = [2, 3, 10, 11, 12, 13].map(v => new Card(v, SUITS.CLUBS))
    const royalFlush = new RoyalFlush(cards)
    expect(royalFlush.count).toBe(1)
  })

  it("handles 2 required with 1 to draw", () => {
    const cards = [2, 3, 9, 11, 12, 13].map(v => new Card(v, SUITS.CLUBS))
    const royalFlush = new RoyalFlush(cards)
    expect(royalFlush.count).toBe(0)
  })

  it("handles 1 required with 2 to draw", () => {
    const cards = [3, 10, 11, 12, 13].map(v => new Card(v, SUITS.CLUBS))
    const royalFlush = new RoyalFlush(cards)
    expect(royalFlush.count).toBe(46)
  })

  it("handles 0 required with 2 to draw", () => {
    const cards = [10, 11, 12, 13, 14].map(v => new Card(v, SUITS.CLUBS))
    const royalFlush = new RoyalFlush(cards)
    expect(royalFlush.count).toBe(1081)
  })

  it("handles 5 required with 5 to draw", () => {
    const cards = [2, 3].map(v => new Card(v, SUITS.CLUBS))
    const royalFlush = new RoyalFlush(cards)
    expect(royalFlush.count).toBe(4)
  })

  it("handles 5 required with 7 to draw", () => {
    const royalFlush = new RoyalFlush()
    expect(royalFlush.count).toBe(4324)
  })

  it("does not count unsuited straight", () => {
    const cards = [
      new Card(10, SUITS.CLUBS),
      new Card(11, SUITS.HEARTS),
      new Card(12, SUITS.SPADES),
      new Card(13, SUITS.DIAMONDS),
      new Card(14, SUITS.DIAMONDS),
    ]
    const royalFlush = new RoyalFlush(cards)
    expect(royalFlush.count).toBe(0)
  })
})