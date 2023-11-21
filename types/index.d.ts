export {}

declare global {
  interface IVariant {
    id: number,
    title: string,
    desc: string,
    score: number
  }

  interface IQuestion {
    id: number,
    num: number,
    title: string,
    variants: Array<IVariant>
  }

  interface IResult {
    id: number,
    title: string,
    description: string
  }

  interface IResults {
    good: IResult,
    not_bad: IResult,
    bad: IResult
  }
}
