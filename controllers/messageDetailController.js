import url from 'url';
import path from 'path';
import { getMessages } from '../models/messages.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = path.join(__dirname, '../');

const messageDetailController = {
  getMessageDetail: (req, res) => {

    const { id: messageId } = req.params;
    const messagesArr = getMessages();
    const messageObj = (messagesArr.filter(message => messageId === `${message.id}`))[0];
   
    res.render(path.join(__root, '/views/pages', '/messageDetails.ejs'), {messageObj: messageObj});
  }
}

export default messageDetailController;