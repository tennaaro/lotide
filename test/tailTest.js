const assert = require('chai').assert;
const tail = require('../tail');
const { expect } = require('chai');

describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs", "Dog"] for ["Yo Yo", "Lighthouse", "Labs", "Dog"]`, () => {
    expect(tail(["Yo Yo", "Lighthouse", "Labs", "Dog"])).to.deep.equal(["Lighthouse", "Labs", "Dog"]);
  });
});