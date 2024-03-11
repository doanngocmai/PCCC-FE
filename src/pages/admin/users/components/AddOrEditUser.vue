<template>
  <a-modal :visible="visible" :footer="null" :title="data ? 'Cập nhật' : 'Tạo tài khoản'" @cancel="handleCancel">
    <a-form
      :form="form"
      :name="data ? 'updateAccount' : 'createAccount'"
      label-align="left"
      :initial-values="initialValues"
      @finish="onFinish"
    >
      <a-form-item
        label="Họ tên"
        name="name"
        :rules="[
          { type: 'string', message: 'Nhập tài khoản' },
          { required: true, message: 'Vui lòng nhập tài khoản!' },
          { min: 3, max: 50, message: 'Vui lòng nhập từ 3 đến 50 ký tự!' },
        ]"
      >
        <a-input placeholder="Nhập tài khoản" />
      </a-form-item>
      <a-form-item :wrapper-col="{ xs: { offset: 0, span: 24 }, sm: { offset: 8, span: 16 } }">
        <a-button
          :loading="isLoading"
          :style="{
            minWidth: '70px',
            fontWeight: 'bold',
            borderColor: data ? '#8000FF' : '#00abba',
            color: data ? '#8000FF' : '#00abba',
            borderRadius: '5px',
          }"
          html-type="submit"
        >
          {{ data ? 'Cập nhật' : 'Tạo tài khoản' }}
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
  import { ref, reactive } from 'vue'

  const visible = ref(false)
  const data = ref(null)
  const isLoading = ref(false)
  const form = ref(null)

  const initialValues = reactive({
    name: null,
    // Add other initial values here
  })

  const handleCancel = () => {
    // Handle cancel logic here
  }

  const onFinish = () => {
    // Handle finish logic here
  }

  // Additional setup logic if needed
</script>
