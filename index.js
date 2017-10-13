function theBeatlesPlay(musicians, instruments) {
  var band = []
  for (let i = 0; i < musicians.length; i++) {
    band.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return band
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}
