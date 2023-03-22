// Init your Web SDK
import { Client, Account } from "appwrite";

export const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("641858468a39ef152488");

const account = new Account(client);

export const createAnonymousSession = async () => {
  try {
    await account.createAnonymousSession();
  } catch (err) {
    console.log(err);
  }
};
