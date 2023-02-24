import fetch from "cross-fetch";

describe("Header", () => {
  beforeEach(async () => {
    cy.visit("/");
    await fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );
  });

  it("shows loading animation when loading", () => {
    cy.get(".header-loading").should("have.attr", "aria-busy", "true");
  });

  it("does not show loading animation after loading", () => {
    cy.get(".podcast-thumbnail").then(() => {
      cy.get(".header-loading").should("have.attr", "aria-busy", "false");
    });
  });
});
