// server/api/chat.post.ts
import { defineEventHandler, readBody } from 'h3';
import { OpenAI } from 'openai';

const baseURL = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

type EventBody = {
    model: string;
    messages: {
        role: 'user' | 'assistant';
        content: string;
    }[];
}

const client = new OpenAI({
    baseURL:baseURL,
    apiKey:apiKey,
})

export default defineEventHandler(async (event) => {
  const body:EventBody = await readBody(event);
  const { model, messages } = body;
  try {
    const response = await client.chat.completions.create({
        model:model,
        messages:messages
    })
    return {content:response.choices[0].message.content};
  } catch (error) {
    console.error(error);
    event.node.res.statusCode = 500;
    return { error: '这个模型暂时用不了:-(试试别的模型吧' };
  }
});