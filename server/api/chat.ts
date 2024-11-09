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
};

const client = new OpenAI({
	baseURL: baseURL,
	apiKey: apiKey,
});

export default defineEventHandler(async (event) => {
	const { res } = event.node;
	const body: EventBody = await readBody(event);
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	const { model, messages } = body;
	try {
		const response = await client.chat.completions.create({
			model: model,
			messages: messages,
			stream: true,
		});
		try {
			for await (const chunk of response) {
				const value = chunk.choices[0].delta.content;
				value && res.write(chunk.choices[0].delta.content);
			}
		} catch (e) {
			console.error(e);
		}
    res.end()
	} catch (error) {
		console.error(error);
		event.node.res.statusCode = 500;
		return { error: '这个模型暂时用不了:-(试试别的模型吧' };
	}
});
