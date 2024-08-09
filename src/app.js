/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];
let doms = [".com", ".org", ".net"];

for (let pronoun of pronouns) {
  for (let adj of adjs) {
    for (let noun of nouns) {
      for (let dom of doms) {
        console.log(pronoun + adj + noun + dom);
      }
    }
  }
}
