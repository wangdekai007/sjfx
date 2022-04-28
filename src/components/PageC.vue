<script setup lang="ts">
/**
 * 需求：
 * 1.计算出不同打法每一期中不中
 * 2.计算出当期的盈亏
 * 3.计算总的盈亏
 */
import { ref } from "vue";
import data2018 from "./2020.json";
import 组合0258 from "./组合0258.json";
const li: any = data2018.map((item) => {
	const index = 组合0258.indexOf(item.kai);
	(item as any).zuhe0258 = index != -1 ? true : false;
	return item;
});
let sum = 0;
li.forEach((item: any) => {
	if (item.zuhe0258) {
		sum += 1200;
	} else {
		sum -= 8700;
	}
});
ref(sum);
console.log("li", li);
console.log("sum", sum);
const list: any = ref(li);
</script>

<template>
	<div class="w">
		<div class="title">2020年</div>
		<table>
			<thead>
				<tr>
					<th>排序</th>
					<th>号码</th>
					<th>360组三定</th>
					<th>红纸7777</th>
					<th>7848组大奖</th>
					<th>7500组大奖</th>
					<th>3数0258大奖</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="(item, index) in list">
					<td>{{ index + 1 }}</td>
					<td>{{ item.kai }}</td>
					<td>...</td>
					<td>...</td>
					<td>...</td>
					<td>...</td>
					<td :class="item.zuhe0258 ? '' : 'red'">
						{{ item.zuhe0258 ? "+1200" : "-8700" }}
					</td>
				</tr>

				<tr>
					<td>总计</td>
					<td>...</td>
					<td>...</td>
					<td>...</td>
					<td>...</td>
					<td>...</td>
					<td>{{ sum }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style lang="less" scoped>
.w {
	padding: 8px;
}
.title {
	font-weight: 700;
	font-size: 36px;
	text-align: center;
}
table {
	width: 100%;
	text-align: center;
	border-collapse: collapse;
	border: 1px solid #ccc;

	tr {
		th,
		td {
			padding: 5px;
			border: 1px solid #ccc;
		}
	}
	.red {
		color: red;
	}
}
</style>
