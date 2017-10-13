function theBeatlesPlay(musicians, instruments) {
  var band = []
  for (let i = 0; i < musicians.length; i++) {
    band.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  console.log(band[1])
  return band
}
