import { IBox, IIntersection, ILine, IMat2x3, IPolygon, IPolyline, IRay, ISegment, IVec } from "../types";

class Box implements IBox {
  constructor(public minX = NaN, public minY = NaN, public maxX = NaN, public maxY = NaN) {}
}

class Intersection implements IIntersection {
  constructor(public exists = false, public x = NaN, public y = NaN, public t0 = NaN, public t1 = NaN) {}
}

class Segment implements ISegment {
  constructor(public x0 = NaN, public y0 = NaN, public x1 = NaN, public y1 = NaN) {}
}

class Vec implements IVec {
  constructor(public x = NaN, public y = NaN) {}
}

export function _boxAlloc(): IBox {
  return new Box();
}

export function _intersectionAlloc(): IIntersection {
  return new Intersection();
}

export function _polygonAlloc(): IPolygon {
  return [];
}

export function _polylineAlloc(): IPolyline {
  return [];
}

export function _segmentAlloc(): ISegment {
  return new Segment();
}

export function _vecAlloc(): IVec {
  return new Vec();
}
