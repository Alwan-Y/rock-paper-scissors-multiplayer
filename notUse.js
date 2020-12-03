import bcrypt from 'bcrypt'
const salt = bcrypt.genSaltSync(10)

let hashPassword = bcrypt.hashSync("iniSaya", salt)
let hash = '$2b$10$gePiInD.3IcVJmTnIMVO0.fR3qYKjWAljheYzwtAmrxv7hmLDc30i'

const get = (req, res) => {
    // console.log(hashPassword)
    let cek = bcrypt.compareSync('iniSaya', hash)
    console.log(cek)
    res.render('test')
}