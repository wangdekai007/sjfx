<script setup lang="ts">
/**
 * 需求：
 * 1.计算出不同打法每一期中不中
 * 2.计算出当期的盈亏
 * 3.计算总的盈亏
 */
import { ref } from "vue";
import data2018 from "./2022.json";
import 组合360 from "./组合360.json";
import 组合0258 from "./组合0258.json";
import 组合7777 from "./组合7777.json";

const li: any = data2018.map((item) => {
	const index = 组合0258.indexOf(item.kai);
	const index2 = 组合7777.indexOf(item.kai);
	(item as any).zuhe0258 = index != -1 ? true : false;
	(item as any).zuhe7777 = index2 != -1 ? true : false;
	let index3_count = 0;
	组合360.forEach((v2) => {
		const xIndex = v2.indexOf("X");
		(String as any).prototype.replaceAt = function (
			index: number,
			char: string
		) {
			var a = this.split("");
			a[index] = char;
			return a.join("");
		};
		let str = item.kai;
		str = (str as any).replaceAt(xIndex, "X");
		if (v2 === str) {
			index3_count++;
		}
	});
	(item as any).zuhe360 = index3_count;
	return item;
});
let sum360 = 0;
let sum0258 = 0;
let sum7777 = 0;
li.forEach((item: any) => {
	if (item.zuhe0258) {
		sum0258 += 1200;
	} else {
		sum0258 -= 8700;
	}

	if (item.zuhe7777) {
		sum7777 += 7499;
	} else {
		sum7777 -= 2401;
	}

	if (item.zuhe360 == 0) {
		sum360 -= 360;
	} else if (item.zuhe360 == 1) {
		sum360 += 620;
	} else if (item.zuhe360 == 2) {
		sum360 += 1240;
	} else if (item.zuhe360 == 3) {
		sum360 += 1860;
	}
});
ref(sum360);
ref(sum0258);
ref(sum7777);
console.log("li", li);
const list: any = ref(li);
</script>

<template>
	<div class="w">
		<div class="title">2022年</div>
		<table>
			<thead>
				<tr>
					<th>排序</th>
					<th>号码</th>
					<th>360组三定</th>
					<th>红纸7777</th>
					<!-- <th>7848组大奖</th> -->
					<!-- <th>7500组大奖</th> -->
					<th>3数0258大奖</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="(item, index) in list">
					<td>{{ index + 1 }}</td>
					<td>{{ item.kai }}</td>
					<td :class="item.zuhe360 ? '' : 'red'">
						{{ item.zuhe360 ? `+${item.zuhe360 * 620}` : "-360" }}
					</td>
					<td :class="item.zuhe7777 ? '' : 'red'">
						{{ item.zuhe7777 ? "+7499" : "-2401" }}
					</td>
					<!-- <td>...</td> -->
					<!-- <td>...</td> -->
					<td :class="item.zuhe0258 ? '' : 'red'">
						{{ item.zuhe0258 ? "+1200" : "-8700" }}
					</td>
				</tr>

				<tr>
					<td>总计</td>
					<td>...</td>
					<td>{{ sum360 }}</td>
					<td>{{ sum7777 }}</td>
					<!-- <td>...</td> -->
					<!-- <td>...</td> -->
					<td>{{ sum0258 }}</td>
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
