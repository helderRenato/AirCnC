const multer = require('multer');
const path = require('path');
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..', '..', 'uploads'),

        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname); //extensão 
            const name = path.basename(file.originalname, ext);//nome do ficheiro
            cb(null, `${name}-${Date.now()}${ext}`);
        }
    }),
}