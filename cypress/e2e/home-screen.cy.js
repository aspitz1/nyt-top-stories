import homeData from "../fixtures/home-responseOK.json";
import artsData from "../fixtures/arts-responseOK.json";
import invalidKey from "../fixtures/invalid-key.json";
const urlSectionHome =
  "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=DuZumcVZhDy8NiAs8sFnAVqj1PpORVJW";
const urlSectionArta =
  "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=DuZumcVZhDy8NiAs8sFnAVqj1PpORVJW";
const urlSectionWorld =
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=DuZumcVZhDy8NiAs8sFnAVqj1PpORVJW";
const imageURL =
  "https://static01.nyt.com/images/2022/11/13/arts/13STEVEN-SPIELBERG6/13STEVEN-SPIELBERG6-thumbLarge.jpg";

describe("empty spec", () => {
  beforeEach(() => {
    cy.intercept(urlSectionHome, homeData).visit("http://localhost:3000");
  });

  it("Displays heading with app title and description", () => {
    cy.get("header")
      .contains("NYT's Top Stories")
      .get("header")
      .contains("Quick feed to keep you up-to-date.");
  });

  it("Should have nav bar displaying current section as 'Home'", () => {
    cy.get("nav").children(".active").contains("Home");
  });

  it("Should have articles listed in descending order", () => {
    cy.get(".SortByDateToggle-container")
      .children(".SortByDateToggle-active")
      .should("be.disabled")
      .get(".ArticleList-container > :nth-child(1) > :nth-child(4)")
      .contains("Updated: 11/9/22, 7:53 AM")
      .get(".ArticleList-container > :nth-child(2) > :nth-child(4)")
      .contains("Updated: 11/9/22, 6:06 AM");
  });

  it("Should have button to switch order of listed articles to ascending", () => {
    cy.get(".SortByDateToggle-container")
      .children(".SortByDateToggle-inactive")
      .should("not.be.disabled");

    cy.get(".SortByDateToggle-inactive").click();

    cy.get(".ArticleList-container > :nth-child(1) > :nth-child(4)")
      .contains("Updated: 11/9/22, 6:06 AM")
      .get(".ArticleList-container > :nth-child(2) > :nth-child(4)")
      .contains("Updated: 11/9/22, 7:53 AM");
  });

  it("Should navigate to new section from nav bar", () => {
    cy.intercept(urlSectionArta, artsData).get('[href="/arts"]').click();

    cy.get("img")
      .should("have.attr", "src")
      .should("include", imageURL)
      .get("h2")
      .contains("Steven Spielberg Gets Personal")
      .get(".Article-container > :nth-child(3)")
      .contains("By A.O. Scott")
      .get(".Article-container > :nth-child(4)")
      .contains("Updated: 11/9/22, 4:00 AM");
  });

  it("Should show error if API fails a response", () => {
    cy.intercept("GET", urlSectionWorld, {
      statusCode: 401,
      body: invalidKey
    })
      .get('[href="/world"]')
      .click()
      .get('p')
      .contains("Something has gone wrong: Unauthorized")
  });
});
