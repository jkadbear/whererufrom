<template>
  <div id="app">
    <div class="upload">
      <div class="example-btn">
        <file-upload
          class="btn btn-primary"
          post-action="/api/updatedb"
          :multiple="true"
          :drop="true"
          :drop-directory="true"
          :extensions="['xls', 'xlsx']"
          v-model="dbfiles"
          ref="db"
          name="db"
          @input-filter="filter"
          @input-file="inputfileDB">
          <i class="fa fa-plus"></i>
          更新数据库
        </file-upload>
      </div>
    </div>
    <div class="upload">
      <div class="example-btn">
        <file-upload
          class="btn btn-primary"
          post-action="/api/classify"
          :multiple="true"
          :drop="true"
          :drop-directory="true"
          :extensions="['xls', 'xlsx']"
          v-model="files"
          ref="classify"
          name="classify"
          @input-filter="filter"
          @input-file="inputfileClassify">
          <i class="fa fa-plus"></i>
          上传待分类
        </file-upload>
      </div>
    </div>
    <hot-table
      :data="(files && files[files.length-1] && files[files.length-1].response) ? files[files.length-1].response : [['']]"
      :colHeaders= "true"
      :rowHeaders="true">
    </hot-table>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import FileUpload from 'vue-upload-component'
import { HotTable } from '@handsontable/vue';

export default {
  name: 'app',
  components: {
    HotTable,
    FileUpload,
  },
  data() {
    return {
      dbfiles: [],
      files: [],
    }
  },
  methods: {
    filter() {
      // console.log('filter')
    },
    inputfileDB (newFile, oldFile) {
      // auto upload
      if (!this.$refs.db.active) {
        this.$refs.db.active = true
      }
    },
    inputfileClassify (newFile, oldFile) {
      // auto upload
      if (!this.$refs.classify.active) {
        this.$refs.classify.active = true
      }
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.upload {
  display: inline-block;
  padding: 2px;
}
#hop-table {
  align-items: center;
}
</style>
<style src="../node_modules/handsontable/dist/handsontable.full.css"></style>
