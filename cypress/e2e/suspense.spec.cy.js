import fetch from "cross-fetch";

describe("Suspense", () => {
  let podcastId;

  before(async () => {
    const response = await fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );
    const data = await response.json();

    const podcastData = data.feed.entry;

    podcastId = podcastData[0].id.attributes["im:id"];
  });

  it("shows loading animation when loading", () => {
    cy.visit(`/podcast/${podcastId}`);

    cy.get(".loading").should("have.attr", "aria-busy", "true");
  });

  it("show error screen, when has error", () => {
    cy.visit(`/podcast/zzz`);

    cy.get(".error").should("exist");
  });

  it("redirects home on error screen", () => {
    cy.visit(`/podcast/zzz`);

    cy.get(".error-home-link").should("exist");

    cy.get(".error-home-link").click();

    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
});
