import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync"
import colors from "colors"
const ai = new GoogleGenAI({apiKey: process.env.API_KEY});

async function main(){
    console.log(colors.bold.green('Welcome to Wrights chatbot Program'));
    console.log(colors.bold.green("You can start chatting with the bot"));
    const chat = ai.chats.create({
        model:"gemini-2.5-flash"
    });

    while (true){
         const userInput = readlineSync.question(colors.yellow("You: "));
        try{
            const response = await chat.sendMessageStream({
                message:userInput
            });

            for await (const chunk of response){
                console.log(chunk.text);
            }
        }
        catch(error){
            console.log(colors.red("Error: ") + error.message)
        }
    }
}
main();