import { ResultTypes } from '@/types/index.t'

export const results: Iresults = {
  [ResultTypes.GOOD]: {
    id: 1,
    title: 'Ты круглый отличник!',
    description: 'Ты молодец, умница! Сразу видно хорошо учился в школе. Так держать!'
  },
  [ResultTypes.NOT_GOOD]: {
    id: 1,
    title: 'Не плохо, но могло быть и лучше',
    description: 'Видать временами прогуливал школу. Даже, если так таблицу умножения нужно знать на зубок. Советую подтянуть знания.'
  },
  [ResultTypes.BAD]: {
    id: 1,
    title: 'Эх ты, двоечник!',
    description: 'Ну как, как можно не знать таблицу умножения? Это же фундаментальные знания для всей жизни. СРОЧНО выучить!'
  }
}
