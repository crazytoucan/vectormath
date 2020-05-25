import { boxIntersectsBox } from "../../boxFunctions/boxIntersectsBox";
import { boxReset } from "../../boxFunctions/boxReset";
import { IntervalMode } from "../../const";

describe("boxIntersectsBox", () => {
  it("[-1 -1 +1 +1] ⋂? [-1 -1 +1 +1] => true", () => {
    expect(boxIntersectsBox(boxReset(-1, -1, 1, 1), boxReset(-1, -1, 1, 1), IntervalMode.CLOSED)).toBe(true);
  });

  it("[-1 -1 +1 +1] ⋂? [-1 -1 +1 +2] => true", () => {
    expect(boxIntersectsBox(boxReset(-1, -1, 1, 1), boxReset(-1, -1, 1, 2), IntervalMode.CLOSED)).toBe(true);
  });

  it("[-1 -1 +1 +1] ⋂? [0 0 0 0] => true", () => {
    expect(boxIntersectsBox(boxReset(-1, -1, 1, 1), boxReset(0, 0, 0, 0), IntervalMode.CLOSED)).toBe(true);
  });

  it("[-1 -1 +1 +1] ⋂? [-0.5 -0.5 +0.5 +0.5] => true", () => {
    expect(boxIntersectsBox(boxReset(-1, -1, 1, 1), boxReset(-0.5, -0.5, 0.5, 0.5), IntervalMode.CLOSED)).toBe(true);
  });

  it("[-1 -1 +1 +1] ⋂? [+3 -1 +5 +1] => false", () => {
    expect(boxIntersectsBox(boxReset(-1, -1, 1, 1), boxReset(3, -1, 5, 1), IntervalMode.CLOSED)).toBe(false);
  });

  it("[-∞ -∞ +∞ +∞] ⋂? [-0.5 -0.5 +0.5 +0.5] => true", () => {
    expect(
      boxIntersectsBox(
        boxReset(-Infinity, -Infinity, Infinity, Infinity),
        boxReset(-0.5, -0.5, 0.5, 0.5),
        IntervalMode.CLOSED,
      ),
    ).toBe(true);
  });

  it("[∞ ∞ -∞ -∞] ⋂? [-0.5 -0.5 +0.5 +0.5] => false", () => {
    expect(
      boxIntersectsBox(
        boxReset(Infinity, Infinity, -Infinity, -Infinity),
        boxReset(-0.5, -0.5, 0.5, 0.5),
        IntervalMode.CLOSED,
      ),
    ).toBe(false);
  });
});
