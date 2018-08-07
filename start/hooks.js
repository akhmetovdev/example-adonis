const { hooks } = require('@adonisjs/ignitor')

const getRandomImg = () => {
  const randomNumber = Math.round(Math.random() * (1024 - 1) + 1)

  return {
    id: randomNumber,
    src: `https://picsum.photos/200/200/?image=${randomNumber}`
  }
}

const getRandomImgList = () => {
  return Array.from({ length: 100 }, () => getRandomImg())
}

const getImg = id => {
  return `https://picsum.photos/1920/1080/?image=${id}`
}

hooks.after.providersRegistered(() => {
  const View = use('View')

  View.global('getRandomImg', getRandomImg)
  View.global('getRandomImgList', getRandomImgList)
  View.global('getImg', getImg)
})
