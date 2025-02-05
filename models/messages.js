import {format} from 'date-fns';

// mock db
const messages = [];

class Message {
  constructor(author, message) {
    this.id = Number(messages.length) + 1;
    this.author = author;
    this.message = message;
    this.added = new Date();
    this.formattedDate = format(this.added, 'MMM dd, yyy');
    messages.push(this);
  }
 
}

const message1 = new Message("Amando", "Hi there!",);
const message2 = new Message("Charles", "Hello World!");

const getMessages = () => {
  return messages
}

const addMessage = (messageObj) => {
  const {author, message} = messageObj;
  new Message(author, message);
}

export {getMessages, addMessage}