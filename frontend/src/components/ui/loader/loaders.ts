import { lazy } from 'react';

import colors from 'tailwindcss/colors';

const ThreeDots = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.ThreeDots }))
);
const Circles = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.Circles }))
);
const Puff = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.Puff }))
);
const Rings = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.Rings }))
);
const Audio = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.Audio }))
);
const BallTriangle = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.BallTriangle }))
);
const Bars = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.Bars }))
);
const CirclesWithBar = lazy(() =>
  import('react-loader-spinner').then((mod) => ({
    default: mod.CirclesWithBar,
  }))
);
const ColorRing = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.ColorRing }))
);
const Comment = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.Comment }))
);
const DNA = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.DNA }))
);
const Discuss = lazy(() =>
  import('react-loader-spinner').then((mod) => ({
    default: mod.Discuss,
  }))
);
const FallingLines = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.FallingLines }))
);
const FidgetSpinner = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.FidgetSpinner }))
);
const Grid = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.Grid }))
);
const Hearts = lazy(() =>
  import('react-loader-spinner').then((mod) => ({
    default: mod.Hearts,
  }))
);
const Hourglass = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.Hourglass }))
);
const InfinitySpin = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.InfinitySpin }))
);
const LineWave = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.LineWave }))
);
const MagnifyingGlass = lazy(() =>
  import('react-loader-spinner').then((mod) => ({
    default: mod.MagnifyingGlass,
  }))
);

const MutatingDots = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.MutatingDots }))
);
const Oval = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.Oval }))
);
const ProgressBar = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.ProgressBar }))
);
const Radio = lazy(() =>
  import('react-loader-spinner').then((mod) => ({
    default: mod.Radio,
  }))
);

const RevolvingDot = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.RevolvingDot }))
);
const RotatingLines = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.RotatingLines }))
);
const RotatingSquare = lazy(() =>
  import('react-loader-spinner').then((mod) => ({
    default: mod.RotatingSquare,
  }))
);
const RotatingTriangles = lazy(() =>
  import('react-loader-spinner').then((mod) => ({
    default: mod.RotatingTriangles,
  }))
);
const TailSpin = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.TailSpin }))
);
const ThreeCircles = lazy(() =>
  import('react-loader-spinner').then((mod) => ({ default: mod.ThreeCircles }))
);
const Triangle = lazy(() =>
  import('react-loader-spinner').then((mod) => ({
    default: mod.Triangle,
  }))
);
const Vortex = lazy(() =>
  import('react-loader-spinner').then((mod) => ({
    default: mod.Vortex,
  }))
);
const Watch = lazy(() =>
  import('react-loader-spinner').then((mod) => ({
    default: mod.Watch,
  }))
);

export const loaderTypeMap = {
  ThreeDots,
  Circles,
  Puff,
  Rings,
  Audio,
  BallTriangle,
  Bars,
  CirclesWithBar,
  ColorRing,
  Comment,
  DNA,
  Discuss,
  FallingLines,
  FidgetSpinner,
  Grid,
  Hearts,
  Hourglass,
  InfinitySpin,
  LineWave,
  MagnifyingGlass,
  MutatingDots,
  Oval,
  ProgressBar,
  Radio,
  RevolvingDot,
  RotatingLines,
  RotatingSquare,
  RotatingTriangles,
  TailSpin,
  ThreeCircles,
  Triangle,
  Vortex,
  Watch,
};

export type ITailwindColorShades =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';
export type ITailwindColorKey = keyof typeof colors;
export type ITailwindColor = `${ITailwindColorKey}-${ITailwindColorShades}`;
