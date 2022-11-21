<template>
  <div id="app">
    <el-form :model="formData" label-width="80px" :rules="rules" ref="ruleFormRef">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="formData.name" placeholder="输入活动名称" />
      </el-form-item>
      <el-form-item label="活动区域" prop="area">
        <el-select v-model="formData.area" placeholder="输入活动区域">
          <el-option label="地区1" :value="1" />
          <el-option label="地区2" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="开始时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker v-model="formData.date1" type="date" placeholder="选择日期" />
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker v-model="formData.date2" placeholder="选择时间" />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item
        label="活动天数"
        prop="dateNum"
        :rules="[
          { required: true, message: '活动天数不能为空' },
          { type: 'number', message: '活动天数为数值型' },
        ]"
      >
        <el-input v-model.number="formData.dateNum" placeholder="输入活动天数">
          <el-select v-model="formData.dateType">
            <el-option label="天" value="D" />
            <el-option label="月" value="M" />
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item label="活动性质" prop="xingzhi">
        <el-checkbox-group v-model="formData.xingzhi">
          <el-checkbox :label="1">线上王者开黑</el-checkbox>
          <el-checkbox :label="2">线下旅游</el-checkbox>
          <el-checkbox :label="3">线下聚餐</el-checkbox>
          <el-checkbox :label="4">线下KTV</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="ziyuan">
        <el-radio-group v-model="formData.ziyuan">
          <el-radio :label="1">线上礼品赞助</el-radio>
          <el-radio :label="2">线下场地免费</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="xingshi">
        <el-input type="textarea" v-model="formData.xingshi" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(ruleFormRef)">立即创建</el-button>
        <el-button @click="resetFields(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
  import { ElMessage, FormInstance, FormRules } from 'element-plus';
  // const router = useRouter();
  const formData = reactive({
    name: '',
    area: '',
    xingzhi: [],
    ziyuan: '',
    xingshi: '',
    date1: '',
    date2: '',
    dateNum: '',
    dateType: '',
  });
  const ruleFormRef = ref<FormInstance>();
  const rules = reactive<FormRules>({
    name: [{ required: true, message: '请输入活动名称' }],
    area: [{ type: 'number', required: true, message: '请选择活动区域' }],
    date1: [{ type: 'date', required: true, message: '请输入活动日期' }],
    date2: [{ type: 'date', required: true, message: '请输入活动时间' }],
    xingzhi: [{ type: 'array', required: true, message: '请选择活动性质' }],
    ziyuan: [{ type: 'number', required: true, message: '请选择特殊资源' }],
    xingshi: [{ required: true, message: '请选择活动形式' }],
  });
  watch(formData, (newV, oldV) => {
    console.log(newV, oldV);
  });
  const onSubmit = async (formEl: FormInstance | undefined) => {
    console.log(formEl);
    if (!formEl) return;
    await formEl.validate((valid) => {
      if (valid) {
        ElMessage.success('欢迎使用');
      } else {
        ElMessage.error('错误信息');
      }
    });
  };
  const resetFields = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
  };
</script>
<style>
  .el-input .el-select {
    width: 130px;
  }
</style>
