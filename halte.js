const request = require('request')

const halte = (req, res) => {

// /vertrekken
  if(!req.query.halte_id) return res.render('halte')

  // /vertrekken?halte_id=XXXXX
  //TODO sanitize req.query.halte_id
  const url =`https://www.delijn.be/rise-api-core/haltes/vertrekken/${req.query.halte_id}/5`

request(url, (err,response,body) => {
  console.log('Halte informatie:', response.statusCode);
  if(err || response.statusCode !== 200) {
    console.log('er ging iets mis', err)
    res.sendStatus(500)
    //TODO res.render ('error')
  }

  const resultaten = JSON.parse(body)
  console.log(body);
  const halteInfo = getHalte (resultaten)
  res.render('halteLijst',{
    halteInfo
  })
})

}


module.exports = halte

/*if(vertrekInfo.length === 0)
  return  `
        <p>Er werd geen halte gevonden</p>
        <a href="/halten"><button>back</button></a>
  `*/

  const getHalte = resultaten => {
    let html =`
        <div class="nu">
          <p>${resultaten.huidigeDag} - ${resultaten.huidigeTijd}</p>
        </div> `
        if( resultaten.lijnen.length === 0)
          return  `
                <p class="pError">Oeps je hebt de foute halte ID ingevoerd!</p>
          `
    for (var i = 0; i < resultaten.lijnen.length; i++) {
      resultaten.lijnen[i]
      lijnen = resultaten.lijnen[i]
            html +=
            `<div class="halte-lijst">
                <div class="halte-kader">
                  <p class="halte-tekst halte-nummer">${lijnen.lijnNummer}</p>
                  <p class="halte-tekst halte-richting">${lijnen.lijnRichting}</p>
                  <p class="halte-tekst halte-tijd">${lijnen.vertrekTijd}</p>
                </div>
            </div>`

    }

      return html;

  //})
}
