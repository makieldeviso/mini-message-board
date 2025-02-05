import url from 'url';
import path from 'path';
import { addMessage } from '../models/messages.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = path.join(__dirname, '../');

const newMessageController = {
  getNewMessage: (req, res) => {
    res.render(path.join(__root, 'views/pages', 'form.ejs'));
  },

  postMessage: (req, res) => {
    addMessage(req.body);
    
    res.redirect('/');  
  }

}

export default newMessageController