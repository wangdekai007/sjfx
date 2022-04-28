import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	base: ".",
	plugins: [vue()],
	css: {
		// css预处理器
		preprocessorOptions: {
			less: {
				charset: false,
				additionalData: "",
			},
		},
	},
});
