<script setup lang="ts">
import data from "./2018.json";
console.log("data", data);

/**
 * 需求：
 * 1.计算出不同打法每一期中不中
 * 2.计算出当期的盈亏
 * 3.计算总的盈亏
 */
</script>

<template>
	<div class="w">
		<div class="title">2021年</div>
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
				<tr>
					<td>1</td>
					<td>1234</td>
					<td>中</td>
					<td class="red">不中</td>
					<td>中</td>
					<td>中</td>
					<td>中</td>
				</tr>

				<tr>
					<td>总计</td>
					<td>----</td>
					<td>9999</td>
					<td class="red">-10000</td>
					<td>9999</td>
					<td>6666</td>
					<td>1111</td>
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
