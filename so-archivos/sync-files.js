const fs = require('fs');


try {
    const file = process.argv[2]
    const content = fs.readFileSync(file, 'utf8').toString()

    const lines = content.split('\n').length
    console.log(lines)

} catch (error) {
    console.error(error)
}