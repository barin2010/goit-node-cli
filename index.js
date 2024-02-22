import { program } from "commander";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

program
  .option("-a, --action <type>", "choose action: list, get, add or remove")
  .option("-i, --id <type>", "contact id")
  .option("-n, --name <type>", "contact name")
  .option("-e, --email <type>", "contact email")
  .option("-p, --phone <type>", "contact phone");

program.parse(process.argv);

const options = program.opts();

async function invokeAction() {
  switch (options.action) {
    case "list":
      listContacts().then(console.log).catch(console.error);
      break;

    case "get":
      getContactById(options.id).then(console.log).catch(console.error);
      break;

    case "add":
      addContact(options.name, options.email, options.phone)
        .then(console.log)
        .catch(console.error);
      break;

    case "remove":
      removeContact(options.id).then(console.log).catch(console.error);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
