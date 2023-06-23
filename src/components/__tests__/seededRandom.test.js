import { seededRandom } from "../utils";

test("seededRandom generates numbers within expected range", () => {
  const seed = 123;
  const random = seededRandom(seed);

  // Generate a large number of random values and check if they fall within the range [0, 1)
  const iterations = 1000;
  for (let i = 0; i < iterations; i++) {
    const value = random();
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThan(1);
  }
});
