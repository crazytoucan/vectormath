import { EPSILON } from "../internal/parameters";
import { IRay, IVec } from "../types";
import { rayGetClosestDistanceToPoint } from "./rayGetClosestDistanceToPoint";

export function rayContainsPoint(ray: IRay, point: IVec) {
  return rayGetClosestDistanceToPoint(ray, point) < EPSILON;
}
