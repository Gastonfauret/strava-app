import { Client, Account } from "appwrite"

const client = new Client();
client.setProject('6745c495000c17250688');

const account = new Account(client)

export {account, client}