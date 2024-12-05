import tmdbClient from "../../utils/movie.client";

describe("moveClient", () => {
  it("should be configured with the correct base URL and headers", () => {
    expect(tmdbClient.defaults.baseURL).toBe("https://api.themoviedb.org/3");
    expect(tmdbClient.defaults.headers.Authorization).toContain("Bearer");
  });
});