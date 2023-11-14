export { ResultTypes }

enum ResultTypes {
  GOOD = 'good',
  NOT_GOOD = 'not_bad',
  BAD = 'bad'
}

declare global {
  interface Ivariant {
    id: number,
    title: string,
    desc: string,
    score: number
  }

  interface Iquestion {
    id: number,
    num: number,
    title: string,
    variants: Array<Ivariant>
  }

  interface IResult {
    id: number,
    title: string,
    description: string
  }

  interface Iresults {
    good: IResult,
    not_bad: IResult,
    bad: IResult
  }
}
