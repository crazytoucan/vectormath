<!-- this file is autogenerated from scripts/README.md.liquid -->

[![](https://img.shields.io/npm/v/math2d)](https://www.npmjs.com/package/math2d)
[![](https://img.shields.io/circleci/build/github/crazytoucan/math2d/master)](https://app.circleci.com/pipelines/github/crazytoucan/math2d?branch=master)
![](https://img.shields.io/npm/l/math2d)

# math2d

Two dimensional vector math library for JavaScript.
Built for performance in computation-heavy real-time engines without sacrificing usability.
Supports tree shaking and dead code removal to avoid bloating client-side bundles.
Zero dependencies.

## Getting Started

```sh
$ yarn add math2d
```

```ts
import { _vec, mat2dFromRotation, vecTransformBy } from "math2d";

const threeFour = _vec(3, 4);
const spin = mat2dFromRotation(Math.PI / 4);
console.log(vecTransformBy(threeFour, spin));
```

## API

### Box Functions

* **_box**: shorthand for defining a Box from minX, minY, maxX, maxY
* **boxAlloc**: Creates a new Box object in memory, with all values initialized to `NaN`
* **boxClone**: Copies values from an existing IBox into a new box
* **boxContainsBox**: Determines whether the second box is completely enclosed in the first
* **boxContainsPoint**: Determines whether the box contains a given point
* **boxEncapsulate**: Grows the box to include a given point
* **boxEnclosingPoints**: Computes the smallest bounding box that contains all of the provided points
* **boxGetOutCode**: Determines where the specified point lies in relation to the given box
* **boxGrow**: Expands a box by a given amount in all directions
* **boxIntersection**: Computes the area intersection of the two box regions
* **boxIntersectsBox**: Determines whether two boxes overlap
* **boxIsEmpty**: Determines whether this box represents an empty area
* **boxReset**: Construct a new box given `minX`, `minY`, `maxX`, and `maxY` bounding values
* **boxScale**: Scales a box by a fixed scalar in both directions
* **boxTransformBy**: Compute the bounds of the image of this box after applying a 2D affine transformation
* **boxTranslate**: Translate a box by an offset in the x- and y- directions
* **boxUnion**: Compute the smallest bounding box that contains both given boxes

### Intersection Result Functions

* **intersectionResultAlloc**: Creates a new IntersectionResult object in memory, with all values initialized to `false` and `NaN`
* **intersectionResultClone**: Copies the values from the given intersection into a new intersection object
* **intersectionResultReset**: Construct a new intersection given `exists`, `x`, `y`, `t0`, and `t1` values

### Mat2d Functions

* **_mat2d**: shorthand for defining a Mat2d from a, b, c, d, tx, ty
* **mat2dAlloc**: Creates a new mat2d object in memory, with all values initialized to `NaN`
* **mat2dClone**: Copies the values from the given matrix into a new matrix
* **mat2dDeterminant**: Computes the determinant of the affine matrix
* **mat2dFromRotation**: Computes the affine transform corresponding to a given rotation, in radians
* **mat2dFromTranslation**: Computes the affine transform corresponding to a given (tx, ty) translation
* **mat2dIdentity**: Returns the identity affine matrix, `[1 0 0 1 0 0]`
* **mat2dInvert**: Computes the inverse of the given 2d affine matrix
* **mat2dIsOrthogonal**: Returns whether the matrix is an orthogonal matrix
* **mat2dIsTranslationOnly**: Returns whether the matrix corresponds to only a translation
* **mat2dMulMat2d**: Computes the result of affine matrix multiplication _m1_ × _m2_
* **mat2dReset**: Construct a new matrix given component values
* **mat2dRotate**: Applies a rotation in radians to the given matrix, returning the result
* **mat2dScale**: Applies a scaling transform on top of the given affine matrix, returning the result
* **mat2dTranslate**: Applies a translation on top of the given matrix, returning the result

### Nearest Point Result Functions

* **nearestPointResultAlloc**: Creates a new NearestPointResult object in memory, with all values initialized to `NaN`
* **nearestPointResultClone**: Copies the values from the given NearestPointResult into a new NearestPointResult object
* **nearestPointResultReset**: Construct a new intersection given `exists`, `x`, `y`, `t0`, and `t1` values

### Polyline Functions

* **polylineAlloc**: Creates a new Array object in memory to hold Polyline data. Its initial length is 0
* **polylineClose**: Repeats the polyline's first vertex to form a closed path
* **polylineContainsPoint**: undefined
* **polylineContainsPointInside**: Determines whether the point is inside the given polygon, using the even-odd fill rule
* **polylineGetBounds**: Computes bounding box of polyline's geometry
* **polylineGetDistanceAtT**: Computes the Euclidean distance traveled along the polyline's geometry to get to the parametric point at _t_
* **polylineGetLength**: Computes total length of polyline
* **polylineGetNumSegments**: Returns the number of individual line segments in this polyline
* **polylineGetNumVertices**: Returns the number of vertices in this polyline
* **polylineGetPointAtT**: Computes a point along the polyline, parameterized according to linear interpolation between adjacent vertices
* **polylineGetSegment**: Returns a polyline's segment by given index, starting at 0
* **polylineGetSegmentLength**: Computes the length of one of a polyline's segments by index, starting at 0
* **polylineGetTAtDistance**: Computes the parametric value _t_ along the polyline corresponding to a distance _d_
* **polylineGetVertex**: Retrieves a vertex from this polyline's geometry, starting at index 0
* **polylineIntersectRay**: Computes all locations at which a polyline crosses a given ray
* **polylineIntersectSegment**: Computes all locations at which a polyline crosses a given line segment
* **polylineIsClosed**: Returns whether the polyline's last vertex equals its first
* **polylineNearestDistanceSqToPoint**: Finds the closest the polyline comes to a given reference point
* **polylineTransformBy**: Transforms a polyline by an affine matrix
* **polylineTrim**: Trims a polyline to a range of its _t_ parameter

### Ray Functions

* **_ray**: shorthand for defining a Ray from x0, y0, dirX, dirY
* **rayAlloc**: Creates a new Ray object in memory, with all values initialized to `NaN`
* **rayClone**: Copies the values from the given ray into a new ray
* **rayContainsPoint**: Determines if the point is on the ray
* **rayGetPointAtT**: Gets a point along the ray, parameterized according to distance along its direction vector
* **rayIntersectPolyline**: Computes all locations at which a ray crosses a given polyline
* **rayIntersectRay**: Computes the intersection point between the two rays, if it exists
* **rayIntersectSegment**: Computes the intersection point between the ray and the segment, if it exists
* **rayLookAt**: Constructs a ray from an initial point, pointing in the direction of a target point
* **rayNearestDistanceSqToPoint**: Determines the closest the ray comes to a given reference point
* **rayProjectPoint**: Projects a point onto the given line, returning the distance _t_ along the line where it falls
* **rayReset**: Construct a new ray given an (x0, y0) initial point and (dirX, dirY) direction vector
* **rayTransformBy**: Transforms a ray by an affine matrix
* **rayWhichSide**: Computes on which side of the ray (as a _line_) a given point lies

### Segment Functions

* **_segment**: shorthand for defining a Segment from x0, y0, x1, y1
* **segmentAlloc**: Creates a new Segment object in memory, with all values initialized to `NaN`
* **segmentGetEndpoint0**: Retrieves the starting endpoint (_t_ = 0) of the segment, as a vector
* **segmentGetEndpoint1**: Retrives the ending endpoint (_t_ = 1) of the segment, as a vector
* **segmentGetLength**: Computes the length of the line segment
* **segmentGetLengthSq**: Computes the squared length of the line segment
* **segmentGetPointAtT**: Gets a point along the line segment, parameterized according to linear interpolation between its endpoints
* **segmentIntersectPolyline**: Computes all locations at which a line segment meets a given polyline
* **segmentIntersectRay**: Computes the intersection point between the ray and the segment, if it exists
* **segmentIntersectSegment**: Computes the intersection point between the two line segments, if it exists
* **segmentNearestDistanceSqToPoint**: Finds the closest the segment comes to a given reference point
* **segmentReset**: Construct a new line segment given an (x0, y0) starting vertex and (x1, y1) ending vertex. The two points are allowed to be the same
* **segmentReverse**: Computes the reverse of the segment, i.e. swapping its starting vertex and ending vertex

### Vec Functions

* **_vec**: shorthand for defining a Vec from x, y
* **vecAdd**: Computes the result of adding the two given vectors
* **vecAlloc**: Creates a new Vec object in memory, with all values initialized to `NaN`
* **vecClone**: Copies the values from the given vector into a new vector
* **vecCross**: Computes the two-dimensional cross product of the two vectors
* **vecDistance**: Computes the straight-line (Euclidean) distance between the two points
* **vecDistanceSq**: Computes the squared straight-line (i.e. Euclidean) distance between the two points
* **vecDot**: Computes the dot product of the two vectors, i.e. `u.x * v.x + u.y * v.y`
* **vecGetLength**: Computes the straight-line length (i.e. Euclidean norm) of the given vector
* **vecGetLengthSq**: Computes the squared straight-line length (i.e. square of the Euclidean norm) of the given vector
* **vecLerp**: Performs a linear interpolation between the two vectors. The `r` parameter is allowed to be outside `[0, 1]`
* **vecNormalize**: Normalizes the vector to be length 1. If the given vector is the zero-vector, this method returns `(NaN, NaN)`
* **vecPerp**: Computes the perp of the given vector, as defined by `vecPerp(a, b) = (-b, a)`. This is equivalent to a counter-clockwise rotation in the standard plane
* **vecReset**: Construct a new vector given an `x` and `y` value
* **vecScale**: Scales both coordinates of this vector by a given scalar
* **vecSubtract**: Computes `u - v`, i.e. subtracting the second vector from the first
* **vecTransformBy**: Multiplies the vector by an affine matrix
