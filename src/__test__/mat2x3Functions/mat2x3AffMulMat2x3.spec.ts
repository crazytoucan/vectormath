import { mat2x3, mat2x3AffMulMat2x3 } from "../../functions/mat2x3Functions";
import { expectMat2x3EqualsApprox } from "../helpers";

describe("mat2x3AffMulMat2x3", () => {
  it("[1 0 0 1 0 0][1 0 0 1 0 0] = [1 0 0 1 0 0]", () => {
    expectMat2x3EqualsApprox(
      mat2x3AffMulMat2x3(mat2x3(1, 0, 0, 1, 0, 0), mat2x3(1, 0, 0, 1, 0, 0)),
      mat2x3(1, 0, 0, 1, 0, 0),
    );
  });
});
