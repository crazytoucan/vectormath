import { boxReset } from "../boxFunctions/boxReset";
import { mat2dReset } from "../mat2dFunctions/mat2dReset";
import { rayReset } from "../rayFunctions/rayReset";
import { segmentReset } from "../segmentFunctions/segmentReset";
import { IBox, IMat2d, IPointIntersectionResult, IVec } from "../types";
import { vecReset } from "../vecFunctions/vecReset";

export const TEST_PRECISION_DIGITS = 10;

export function expectEqualsApprox(actual: number, expected: number) {
  if (isNaN(expected)) {
    expect(actual).toBeNaN();
  } else if (isFinite(expected)) {
    expect(actual).toBeCloseTo(expected, TEST_PRECISION_DIGITS);
  } else {
    expect(actual).toBe(expected);
  }
}

export function expectBoxEqualsApprox(box: IBox, expected: IBox) {
  expectEqualsApprox(box.minX, expected.minX);
  expectEqualsApprox(box.minY, expected.minY);
  expectEqualsApprox(box.maxX, expected.maxX);
  expectEqualsApprox(box.maxY, expected.maxY);
}

export function expectVecEqualsApprox(actual: IVec, expected: IVec) {
  expectEqualsApprox(actual.x, expected.x);
  expectEqualsApprox(actual.y, expected.y);
}

export function expectIntersectionEqualsApprox(actual: IPointIntersectionResult, expected: IPointIntersectionResult) {
  expect(actual.exists).toBe(expected.exists);
  expectEqualsApprox(actual.x, expected.x);
  expectEqualsApprox(actual.y, expected.y);
  expectEqualsApprox(actual.t0, expected.t0);
  expectEqualsApprox(actual.t1, expected.t1);
}

export function expectIntersectionDNE(intersection: IPointIntersectionResult) {
  expect(intersection).toEqual({
    exists: false,
    x: NaN,
    y: NaN,
    t0: NaN,
    t1: NaN,
  });
}

export function expectMat2dEqualsApprox(actual: IMat2d, expected: IMat2d) {
  expectEqualsApprox(actual.a, expected.a);
  expectEqualsApprox(actual.b, expected.b);
  expectEqualsApprox(actual.c, expected.c);
  expectEqualsApprox(actual.d, expected.d);
  expectEqualsApprox(actual.e, expected.e);
  expectEqualsApprox(actual.f, expected.f);
}

export function _mat2d(values: number[]) {
  expect(values).toHaveLength(6);
  const [a, b, c, d, e, f] = values;
  return mat2dReset(a, b, c, d, e, f);
}

export function _box(values: number[]) {
  expect(values).toHaveLength(4);
  const [minX, minY, maxX, maxY] = values;
  return boxReset(minX, minY, maxX, maxY);
}

export function _vec(values: number[]) {
  expect(values).toHaveLength(2);
  const [x, y] = values;
  return vecReset(x, y);
}

export function _ray(values: number[]) {
  expect(values).toHaveLength(4);
  const [x0, y0, dirX, dirY] = values;
  expectEqualsApprox(dirX * dirX + dirY * dirY, 1);
  return rayReset(x0, y0, dirX, dirY);
}

export function _segment(values: number[]) {
  expect(values).toHaveLength(4);
  const [x0, y0, x1, y1] = values;
  return segmentReset(x0, y0, x1, y1);
}
