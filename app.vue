<template>
	<div
		class="left"
		ref="aside"
	>
		<div class="top">
			<button
				@click="closeAside"
				title="关闭边栏"
				class="asideButton"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="icon-xl-heavy"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M8.85719 3H15.1428C16.2266 2.99999 17.1007 2.99998 17.8086 3.05782C18.5375 3.11737 19.1777 3.24318 19.77 3.54497C20.7108 4.02433 21.4757 4.78924 21.955 5.73005C22.2568 6.32234 22.3826 6.96253 22.4422 7.69138C22.5 8.39925 22.5 9.27339 22.5 10.3572V13.6428C22.5 14.7266 22.5 15.6008 22.4422 16.3086C22.3826 17.0375 22.2568 17.6777 21.955 18.27C21.4757 19.2108 20.7108 19.9757 19.77 20.455C19.1777 20.7568 18.5375 20.8826 17.8086 20.9422C17.1008 21 16.2266 21 15.1428 21H8.85717C7.77339 21 6.89925 21 6.19138 20.9422C5.46253 20.8826 4.82234 20.7568 4.23005 20.455C3.28924 19.9757 2.52433 19.2108 2.04497 18.27C1.74318 17.6777 1.61737 17.0375 1.55782 16.3086C1.49998 15.6007 1.49999 14.7266 1.5 13.6428V10.3572C1.49999 9.27341 1.49998 8.39926 1.55782 7.69138C1.61737 6.96253 1.74318 6.32234 2.04497 5.73005C2.52433 4.78924 3.28924 4.02433 4.23005 3.54497C4.82234 3.24318 5.46253 3.11737 6.19138 3.05782C6.89926 2.99998 7.77341 2.99999 8.85719 3ZM6.35424 5.05118C5.74907 5.10062 5.40138 5.19279 5.13803 5.32698C4.57354 5.6146 4.1146 6.07354 3.82698 6.63803C3.69279 6.90138 3.60062 7.24907 3.55118 7.85424C3.50078 8.47108 3.5 9.26339 3.5 10.4V13.6C3.5 14.7366 3.50078 15.5289 3.55118 16.1458C3.60062 16.7509 3.69279 17.0986 3.82698 17.362C4.1146 17.9265 4.57354 18.3854 5.13803 18.673C5.40138 18.8072 5.74907 18.8994 6.35424 18.9488C6.97108 18.9992 7.76339 19 8.9 19H9.5V5H8.9C7.76339 5 6.97108 5.00078 6.35424 5.05118ZM11.5 5V19H15.1C16.2366 19 17.0289 18.9992 17.6458 18.9488C18.2509 18.8994 18.5986 18.8072 18.862 18.673C19.4265 18.3854 19.8854 17.9265 20.173 17.362C20.3072 17.0986 20.3994 16.7509 20.4488 16.1458C20.4992 15.5289 20.5 14.7366 20.5 13.6V10.4C20.5 9.26339 20.4992 8.47108 20.4488 7.85424C20.3994 7.24907 20.3072 6.90138 20.173 6.63803C19.8854 6.07354 19.4265 5.6146 18.862 5.32698C18.5986 5.19279 18.2509 5.10062 17.6458 5.05118C17.0289 5.00078 16.2366 5 15.1 5H11.5ZM5 8.5C5 7.94772 5.44772 7.5 6 7.5H7C7.55229 7.5 8 7.94772 8 8.5C8 9.05229 7.55229 9.5 7 9.5H6C5.44772 9.5 5 9.05229 5 8.5ZM5 12C5 11.4477 5.44772 11 6 11H7C7.55229 11 8 11.4477 8 12C8 12.5523 7.55229 13 7 13H6C5.44772 13 5 12.5523 5 12Z"
						fill="currentColor"
					></path>
				</svg>
			</button>
			<button
				@click="createNewChat"
				title="新建对话"
				class="asideButton"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					class="icon-xl-heavy"
				>
					<path
						d="M15.6729 3.91287C16.8918 2.69392 18.8682 2.69392 20.0871 3.91287C21.3061 5.13182 21.3061 7.10813 20.0871 8.32708L14.1499 14.2643C13.3849 15.0293 12.3925 15.5255 11.3215 15.6785L9.14142 15.9899C8.82983 16.0344 8.51546 15.9297 8.29289 15.7071C8.07033 15.4845 7.96554 15.1701 8.01005 14.8586L8.32149 12.6785C8.47449 11.6075 8.97072 10.615 9.7357 9.85006L15.6729 3.91287ZM18.6729 5.32708C18.235 4.88918 17.525 4.88918 17.0871 5.32708L11.1499 11.2643C10.6909 11.7233 10.3932 12.3187 10.3014 12.9613L10.1785 13.8215L11.0386 13.6986C11.6812 13.6068 12.2767 13.3091 12.7357 12.8501L18.6729 6.91287C19.1108 6.47497 19.1108 5.76499 18.6729 5.32708ZM11 3.99929C11.0004 4.55157 10.5531 4.99963 10.0008 5.00007C9.00227 5.00084 8.29769 5.00827 7.74651 5.06064C7.20685 5.11191 6.88488 5.20117 6.63803 5.32695C6.07354 5.61457 5.6146 6.07351 5.32698 6.63799C5.19279 6.90135 5.10062 7.24904 5.05118 7.8542C5.00078 8.47105 5 9.26336 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1457C5.10062 16.7509 5.19279 17.0986 5.32698 17.3619C5.6146 17.9264 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8993 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8993 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9264 18.673 17.3619C18.7988 17.1151 18.8881 16.7931 18.9393 16.2535C18.9917 15.7023 18.9991 14.9977 18.9999 13.9992C19.0003 13.4469 19.4484 12.9995 20.0007 13C20.553 13.0004 21.0003 13.4485 20.9999 14.0007C20.9991 14.9789 20.9932 15.7808 20.9304 16.4426C20.8664 17.116 20.7385 17.7136 20.455 18.2699C19.9757 19.2107 19.2108 19.9756 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9421C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9421C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9756 4.02433 19.2107 3.54497 18.2699C3.24318 17.6776 3.11737 17.0374 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27337 2.99998 8.39922 3.05782 7.69134C3.11737 6.96249 3.24318 6.3223 3.54497 5.73001C4.02433 4.7892 4.78924 4.0243 5.73005 3.54493C6.28633 3.26149 6.88399 3.13358 7.55735 3.06961C8.21919 3.00673 9.02103 3.00083 9.99922 3.00007C10.5515 2.99964 10.9996 3.447 11 3.99929Z"
						fill="currentColor"
					></path>
				</svg>
			</button>
		</div>
		<div class="selection">
			<div class="prompt">
				<ul>
					<li>
						<div class="chatName">修改ai模型</div>
						<button
							@click="modelButtonIsShow = !modelButtonIsShow"
							type="button"
							id="radix-:rd8:"
							aria-haspopup="menu"
							aria-expanded="false"
							data-state="closed"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="icon-md"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
									fill="currentColor"
								></path>
							</svg>
						</button>
						<div
							class="moreButton"
							v-if="modelButtonIsShow == true"
						>
							<ul>
								<li @click="addModel">增加模型</li>
								<li @click="delModel">删除模型</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
			<div class="prompt">
				<ul>
					<li
						v-for="prompt in prompts"
						:key="prompt.id"
					>
						<div
							class="chatName"
							@click="usePrompt(prompt.id)"
						>
							{{ prompt.name }}
						</div>
						<button
							@click="
								morePromptButtonIsShowed =
									morePromptButtonIsShowed == prompt.id
										? -1
										: prompt.id
							"
							type="button"
							id="radix-:rd8:"
							aria-haspopup="menu"
							aria-expanded="false"
							data-state="closed"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="icon-md"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
									fill="currentColor"
								></path>
							</svg>
						</button>
						<div
							class="moreButton"
							v-if="morePromptButtonIsShowed == prompt.id"
						>
							<ul>
								<li @click="renamePrompt(prompt.id)">重命名</li>
								<li @click="updatePrompt(prompt.id)">
									更改预设
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
			<div class="bottom">
				<ul>
					<li
						v-for="chat in chatHistory"
						:key="chat.id"
					>
						<div
							class="chatName"
							@click="getChatContent(chat.id)"
						>
							{{ chat.name }}
						</div>
						<button
							@click="moreButtonIsShowed = chat.id"
							type="button"
							id="radix-:rd8:"
							aria-haspopup="menu"
							aria-expanded="false"
							data-state="closed"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="icon-md"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
									fill="currentColor"
								></path>
							</svg>
						</button>
						<div
							class="moreButton"
							v-if="moreButtonIsShowed == chat.id"
						>
							<ul>
								<li @click="download(chat.id)">下载</li>
								<li @click="rename(chat.id)">重命名</li>
								<li @click="del(chat.id)">删除</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div
		class="right"
		ref="mainPage"
	>
		<header ref="header">
			<select
				name="model"
				id="model"
				v-model="model"
			>
				<option
					v-for="model in models"
					:key="model"
					:value="model"
				>
					{{ model }}
				</option>
			</select>
			<div class="blog">
				<img
					title="前往我的博客"
					src="~/assets/water.png"
					@click="goToBlog"
				/>
			</div>
		</header>
		<div
			class="allChatContent"
			@click="hello"
		>
			<div
				v-for="(chatContent, index) in currentChat.content"
				:key="index"
				class="chatContent"
			>
				<div
					v-if="chatContent.role === 'user'"
					class="user"
				>
					{{ chatContent.content }}
				</div>
				<MarkdownContainer
					v-else
					class="assistant"
					:markdown-content="chatContent.content"
				/>
			</div>
			<div class="chatContent">
				<div class="assistant">
					{{ newText }}
				</div>
			</div>
		</div>
		<div class="msgInput">
			<textarea
				placeholder="向AI发送信息，回车发送"
				type="text"
				ref="inputMsg"
				@keydown.enter="sendMsgToService"
			/>
			<button
				@click="sendMsgToService"
				class="sendButton"
			>
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="icon-2xl"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z"
						fill="currentColor"
					></path>
				</svg>
			</button>
		</div>
	</div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import MarkdownContainer from './components/MarkdownContainer.vue';

const isOpened = ref(false);
const aside = ref(null);
const mainPage = ref(null);
const header = ref(null);
const model = ref('gpt-4o-2024-08-06');
const moreButtonIsShowed = ref(-1);
const chatHistory = ref([]);
const newText = ref('');
const currentChat = ref({
	id: 0,
	name: '',
	content: [],
});
const id = ref(0);
const inputMsg = ref(null);
const isFirst = ref(true);
const models = ref([
	'gpt-4o-2024-08-06',
	'claude-3-5-sonnet-20240620',
	'gpt-4o-mini-2024-07-18',
	'gpt-test',
	'o1-preview',
	'o1-mini',
]);
const prompts = ref([
	{
		id: 0,
		name: '学者（第一句为论文主题）',
		content:
			"我希望你能作为一名学者行事。你将负责研究一个你选择的主题，并将研究结果以论文或文章的形式呈现出来。你的任务是确定可靠的来源，以结构良好的方式组织材料，并以引用的方式准确记录。我的第一个建议要求是 '论文主题'",
	},
	{
		id: 1,
		name: '英语翻译',
		content:
			'我希望你能充当英语翻译、拼写纠正者和改进者。我将用任何语言与你交谈，你将检测语言，翻译它，并在我的文本的更正和改进版本中用英语回答。我希望你用更漂亮、更优雅、更高级的英语单词和句子来取代我的简化 A0 级单词和句子。保持意思不变，但让它们更有文学性。我希望你只回答更正，改进，而不是其他，不要写解释。',
	},
	{
		id: 2,
		name: '预设2',
		content: '',
	},
	{
		id: 3,
		name: '预设3',
		content: '',
	},
	{
		id: 4,
		name: '预设4',
		content: '',
	},
	{
		id: 5,
		name: '预设5',
		content: '',
	},
	{
		id: 6,
		name: '预设6',
		content: '',
	},
	{
		id: 7,
		name: '预设7',
		content: '',
	},
	{
		id: 8,
		name: '预设8',
		content: '',
	},
	{
		id: 9,
		name: '预设9',
		content: '',
	},
]);
const morePromptButtonIsShowed = ref(-1);
const modelButtonIsShow = ref(false);
const goToBlog = () => {
	window.open('https://blog.watering.top');
};

const addModel = () => {
	let name = prompt('请输入模型名称');
	if (name) {
		models.value.push(name);
		localStorage.setItem('models', JSON.stringify(models.value));
	}
};
const delModel = () => {
	let name = prompt('请输入要删除的模型名称');
	if (name) {
		let index = models.value.findIndex((model) => model === name);
		if (index !== -1) {
			models.value.splice(index, 1);
			localStorage.setItem('models', JSON.stringify(models.value));
		}
	}
};
const closeAside = () => {
	if (isMobile()) {
		isOpened.value = !isOpened.value;
		if (isOpened.value) {
			aside.value.style.width = '0';
		} else {
			aside.value.style.width = '80%';
		}
	} else {
		isOpened.value = !isOpened.value;
		if (isOpened.value) {
			aside.value.style.width = '0';
			mainPage.value.style.width = '100%';
			mainPage.value.style.marginLeft = '0';
			header.value.style.width = '90%';
		} else {
			aside.value.style.width = '17%';
			mainPage.value.style.width = '83%';
			mainPage.value.style.marginLeft = '18%';
			header.value.style.width = '100%';
		}
	}
};
const download = (id) => {
	let chat = chatHistory.value.find((chat) => chat.id === id);
	let blob = new Blob([JSON.stringify(chat)], { type: 'text/plain' });
	let url = URL.createObjectURL(blob);
	let a = document.createElement('a');
	a.href = url;
	a.download = chat.name;
	a.click();
	URL.revokeObjectURL(url);
	a.remove();
};
const rename = (id) => {
	let chat = chatHistory.value.find((chat) => chat.id === id);
	let name = prompt('请输入新的名称', chat.name);
	if (name) {
		chat.name = name;
		localStorage.setItem('chatHistory', JSON.stringify(chatHistory.value));
	}
};
const del = (id) => {
	let index = chatHistory.value.findIndex((chat) => chat.id === id);
	if (index === -1) return;
	if (id === currentChat.value.id) {
		createNewChat();
	}
	chatHistory.value.splice(index, 1);
	localStorage.setItem('chatHistory', JSON.stringify(chatHistory.value));
};
const getChatContent = (id) => {
	let chat = chatHistory.value.find((chat) => chat.id === id);
	currentChat.value = chat;
	isFirst.value = false;
};
const createNewChat = () => {
	currentChat.value = {
		id: id.value,
		name: id.value.toString(),
		content: [],
	};
	isFirst.value = true;
};
const sendMsgToService = async () => {
	let content = inputMsg.value.value;
	if (!content) return;

	//如果是第一次，那么需要向chatHistory中添加一个新的对话
	//如果不是第一次，那么需要改变chatHistory中对应的对话
	//添加的对话需要有一个id，一个name，一个content，content是一个数组
	if (isFirst.value) {
		id.value++;
		localStorage.setItem('id', JSON.stringify(id.value));
		currentChat.value.content.push({
			role: 'user',
			content: content,
		});
		chatHistory.value.push(currentChat.value);
		isFirst.value = false;
	} else {
		currentChat.value.content.push({
			role: 'user',
			content: content,
		});
	}
	inputMsg.value.value = '';
	const res = await fetch('/api/chat', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			accept: '*/*',
		},
		body: JSON.stringify({
			model: model.value,
			messages: currentChat.value.content,
		}),
	});
	const decoder = new TextDecoder('utf-8');
	for await (const value of res.body) {
		try{
			const chunk = decoder.decode(value);
			newText.value += chunk;
		}catch(e){
			console.error(e);
		}
	}
	currentChat.value.content.push({
		role: 'assistant',
		content: newText.value,
	});
	newText.value = '';
	localStorage.setItem('chatHistory', JSON.stringify(chatHistory.value));
};

const usePrompt = (id) => {
	let prompt = prompts.value[id];
	createNewChat();
	currentChat.value.content.push({
		role: 'system',
		content: prompt.content,
	});
};
const renamePrompt = (id) => {
	let curPrompt = prompts.value[id];
	let name = curPrompt.name;
	let newName = curPrompt.name;
	newName = prompt('请输入新的名称', name);
	if (newName) {
		curPrompt.name = newName;
	}
	localStorage.setItem('prompts', JSON.stringify(prompts.value));
};
const updatePrompt = (id) => {
	let curPrompt = prompts.value[id];
	let content = curPrompt.content;
	let newContent = prompt('请输入新的内容', content);
	if (newContent) {
		curPrompt.content = newContent;
	}
	localStorage.setItem('prompts', JSON.stringify(prompts.value));
};

const isMobile = () => {
	return window.innerWidth <= 768;
};

const createHeart = (e) => {
	let x = e.clientX;
	let y = e.clientY;
	let heart = document.createElement('b');
	heart.style.left = `${x}px`;
	heart.style.top = `${y}px`;
	heart.innerHTML = '复制成功';
	document.body.appendChild(heart);
	heart.animate(
		[
			{ top: `${y}px`, opacity: 1 },
			{ top: `${y - 100}px`, opacity: 0 },
		],
		{
			duration: 1500,
			easing: 'ease',
		}
	);
	setTimeout(() => {
		heart.remove();
	}, 1000);
};

const hello = (event) => {
	//如果点到的是pre标签，并且他有code子元素，复制他的内容
	if (
		event.target.tagName === 'PRE' &&
		event.target.children[0].tagName === 'CODE'
	) {
		let textToCopy = event.target.children[0].innerText;
		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				//点击后出现 复制成功 的文字上升，然后消失
				createHeart(event);
			})
			.catch((err) => {
				console.error('Failed to copy text: ', err);
			});
	}
};

onMounted(() => {
	chatHistory.value = localStorage.getItem('chatHistory')
		? JSON.parse(localStorage.getItem('chatHistory'))
		: [];
	id.value = localStorage.getItem('id')
		? JSON.parse(localStorage.getItem('id'))
		: 0;
	prompts.value = localStorage.getItem('prompts')
		? JSON.parse(localStorage.getItem('prompts'))
		: prompts.value;
	models.value = localStorage.getItem('models')
		? JSON.parse(localStorage.getItem('models'))
		: models.value;
	createNewChat();
});
</script>
<style>
html {
	width: 100%;
}
body {
	margin: 0;
	padding: 0;
	width: 100%;
	overflow: hidden;
}
.left {
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	width: 17%;
	background-color: #f8f9fa;
	border-right: 1px solid #e9ecef;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	transition: width 0.3s ease;
	box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}

.top {
	display: flex;
	justify-content: space-between;
	padding-bottom: 1rem;
	border-bottom: 1px solid #e9ecef;
}

.asideButton {
	background: none;
	border: none;
	padding: 0.5rem;
	cursor: pointer;
	color: #6c757d;
	border-radius: 0.375rem;
	transition: all 0.2s ease;
}

.asideButton:hover {
	background-color: #e9ecef;
	color: #212529;
	transform: scale(1.05);
}

.selection {
	flex: 1;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: #cbd5e0 #f8f9fa;
}

.selection::-webkit-scrollbar {
	width: 6px;
}

.selection::-webkit-scrollbar-track {
	background: #f8f9fa;
}

.selection::-webkit-scrollbar-thumb {
	background-color: #cbd5e0;
	border-radius: 3px;
}

.prompt,
.bottom {
	margin-top: 1rem;
}

.prompt li,
.bottom li {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.75rem;
	margin: 0.35rem 0;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: all 0.2s ease;
	border: 1px solid transparent;
}

.prompt li:hover,
.bottom li:hover {
	background-color: #e9ecef;
	border-color: #dee2e6;
	transform: translateX(2px);
}

.chatName {
	flex: 1;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: #212529;
	font-size: 0.95rem;
}

.moreButton {
	position: absolute;
	background: white;
	border: 1px solid #dee2e6;
	border-radius: 0.5rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	min-width: 120px;
}

.moreButton ul {
	list-style: none;
	padding: 0.5rem 0;
	margin: 0;
}

.moreButton li {
	padding: 0.75rem 1rem;
	cursor: pointer;
	transition: all 0.2s ease;
	color: #4a5568;
}

.moreButton li:hover {
	background-color: #f8f9fa;
	color: #2d3748;
}

.right {
	margin-left: 18%;
	margin-right: 10%;
	padding: 2rem;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	transition: all 0.3s ease;
	background-color: #ffffff;
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;
	border-bottom: 1px solid #e9ecef;
	margin-bottom: 1rem;
	margin-left: auto;
	margin-right: auto;
}

header > * {
	margin-right: auto;
	margin-left: auto;
}

#model {
	padding: 0.75rem;
	border-radius: 0.5rem;
	border: 1px solid #dee2e6;
	font-size: 0.95rem;
	transition: all 0.2s ease;
	cursor: pointer;
}

#model:hover {
	border-color: #adb5bd;
}

.blog img {
	height: 2.25rem;
	cursor: pointer;
	transition: transform 0.2s ease;
	border-radius: 50%;
}

.blog img:hover {
	transform: scale(1.1);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.allChatContent {
	flex: 1;
	overflow-y: auto;
	overflow-x: hidden;
	overflow-wrap: anywhere;
	word-break: break-all;
	padding: 1rem 0;
	scroll-behavior: smooth;
	width: 90%;
	padding: 1%;
	margin-left: 5%;
}

.allChatContent > * {
	word-break: break-all !important;
	overflow-wrap: anywhere;
}

.chatContent {
	margin-bottom: 1.5rem;
	animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.user {
	background-color: #e3f2fd;
	padding: 1.25rem;
	border-radius: 0.75rem;
	margin: 1rem 0;
	max-width: 80%;
	margin-left: auto;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.assistant {
	background-color: #f8f9fa;
	padding: 1.25rem;
	border-radius: 0.75rem;
	margin: 1rem 0;
	max-width: 80%;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.msgInput {
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1.25rem 0;
	border-top: 1px solid #e9ecef;
	background-color: #ffffff;
}

textarea {
	flex: 1;
	min-height: 2.5rem;
	max-height: 150px;
	padding: 1rem;
	border: 1px solid #dee2e6;
	border-radius: 0.75rem;
	resize: none;
	font-family: inherit;
	line-height: 1.6;
	font-size: 0.95rem;
	transition: all 0.2s ease;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

textarea:focus {
	outline: none;
	border-color: #86b7fe;
	box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}

.sendButton {
	background: none;
	border: none;
	padding: 0.75rem;
	cursor: pointer;
	color: #6c757d;
	border-radius: 0.5rem;
	transition: all 0.2s ease;
}

.sendButton:hover {
	background-color: #e9ecef;
	color: #212529;
	transform: scale(1.05);
}

@media (max-width: 768px) {
	.left {
		width: 80%;
		z-index: 1000;
	}

	.right {
		margin-left: 0;
		width: 100%;
		padding: 1rem;
	}

	.user,
	.assistant {
		max-width: 90%;
	}

	textarea {
		font-size: 16px; /* Prevents zoom on mobile */
	}

	.msgInput {
		padding: 1rem 0;
	}

	header {
		padding: 0.75rem 0;
	}
}
</style>
