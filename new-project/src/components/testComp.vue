<template>
  <div>
    <li v-for="item in testData">{{ item }}</li>

    <table border="1" align="center">
      <tr>
        <th v-for = "col in dataSet.col" :key="col.id"> {{ col }} </th>
      </tr>
      <tr v-for = "row in dataSet.rows" :key="row.id">
        <template v-for = "col in dataSet.col">
          <template v-for = "(data, key) in row">
            <td v-if="key==col" :key="key.id"> {{ data }} </td>
          </template>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'vueHello',
  props: ['testData', 'dataSet'],
};
</script>
