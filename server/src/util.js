let dbmap = {}

const updatedb = (sheet, cb) => {
  let table = sheet['data']
  console.log('util updatedb')
  for (let i = 1; i < table.length; i++) {
    let col = table[i]
    console.log(col)
    dbmap[col[1]] = col[0]
  }
  console.log(dbmap)
  cb('ok')
}

const classify = (sheet, cb) => {
  console.log('util classify')
  console.log(dbmap)
  let table = sheet['data']
  for (let i = 1; i < table.length; i++) {
    let col = table[i]
    col[0] = dbmap[col[1]]
    console.log(col)
  }
  console.log(table)
  return table
}

module.exports = {
  updatedb: updatedb,
  classify: classify,
}
