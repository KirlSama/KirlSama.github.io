import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/kirl.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "KirlSama",
	bio: "The Quick Brown Fox Jumps Over The Lazy Dog",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/1178924984",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/KirlSama",
		},
		{
			name: "Discord",
			icon: "fa7-brands:discord",
			url: "https://discord.gg/4bvyRffKf",
		},
	],
};
