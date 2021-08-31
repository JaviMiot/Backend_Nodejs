const fs = require('fs');


fs.mkdir(`${__dirname}/node/ejemplo`, {recursive: true},(error)=>{
    console.error(error)
});