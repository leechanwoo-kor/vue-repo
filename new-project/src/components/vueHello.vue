<template>
  <div>
    <br>
    <button v-on:click="changeArray"> 배열바꾸기 </button>
    <br>
    <testComp
      testData="test"
      v-bind:dataSet = "dataSet">
    </testComp>
    <br>
    <testComp
      v-bind:testData="test"
      v-bind:dataSet="dataSet">
    </testComp>
  </div>
</template>

<script>
import testComp from '@/components/testComp';

export default {
  name: 'vueHello',
  data() {
    return {
      test: 'testText',
      dataSet: {
        col: ['no', 'type', 'title', 'comment'],
        rows: [
          { type1: '1', no1: '11', title1: 'testTitle1', comment1: 'comment1' },
          { type: '2', no: '22', title: 'testTitle2', comment: 'comment2' },
          { type: '3', no: '33', title: 'testTitle3', comment: 'comment3' },
          { type: '4', no: '44', title: 'testTitle4', comment: 'comment4' },
        ],
      },
    };
  },
  methods: {
    changeArray: function(){
      this.dataSet = {
        col: ['no', 'type', 'title', 'comment'],
        rows: [
          { type1: '5', no1: '11', title1: 'testTitle1', comment1: 'comment1' },
          { type: '6', no: '22', title: 'testTitle2', comment: 'comment2' },
          { type: '7', no: '33', title: 'testTitle3', comment: 'comment3' },
          { type: '8', no: '44', title: 'testTitle4', comment: 'comment4' },
        ],
      };
    },
  },
  components: { testComp },
};
</script>
