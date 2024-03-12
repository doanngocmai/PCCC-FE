<template>
  <div class="modals flex justify-end">
    <va-button class="mr-2 mb-2" color="info" @click="showMediumModal = true">
      {{ t('modalTitle.addUser') }}
    </va-button>

    <va-modal
      v-model="showMediumModal"
      :title="data ? t('modalTitle.updateUser') : t('modalTitle.addUser')"
      :ok-text="t('modal.confirm')"
      :cancel-text="t('modal.cancel')"
      @ok="onSubmit"
    >
      <CForm style="width: 500px">
        <CRow class="mb-3">
          <CFormLabel for="userName" class="col-sm-2 col-form-label">UserName</CFormLabel>
          <CCol sm="10">
            <CFormInput
              id="userName"
              v-model="form.userName"
              type="text"
              feedback-invalid="Please provide a valid city."
              required
            />
          </CCol>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="fullName" class="col-sm-2 col-form-label">FullName</CFormLabel>
          <CCol sm="10">
            <CFormInput id="fullName" v-model="form.fullName" type="text" />
          </CCol>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="inputPhone" class="col-sm-2 col-form-label">Phone</CFormLabel>
          <CCol sm="10">
            <CFormInput id="inputPhone" v-model="form.phone" type="text" />
          </CCol>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="inputEmail" class="col-sm-2 col-form-label">Email</CFormLabel>
          <CCol sm="10">
            <CFormInput id="inputEmail" v-model="form.email" type="email" />
          </CCol>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="address" class="col-sm-2 col-form-label">Address</CFormLabel>
          <CCol sm="10">
            <CFormInput id="address" v-model="form.address" type="text" />
          </CCol>
        </CRow>
        <CRow class="mb-3">
          <CFormLabel for="amount" class="col-sm-2 col-form-label">Amount</CFormLabel>
          <CCol sm="10">
            <CFormInput id="amount" v-model="form.amount" type="text" />
          </CCol>
        </CRow>
        <fieldset class="row mb-3">
          <legend class="col-form-label col-sm-2 pt-0">Sex</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input
                id="female"
                v-model="form.sex"
                class="form-check-input"
                type="radio"
                name="gridRadios"
                value="true"
                aria-checked="true"
              />
              <label class="form-check-label" for="female">Nữ</label>
            </div>
            <div class="form-check">
              <input
                id="male"
                v-model="form.sex"
                class="form-check-input"
                type="radio"
                name="gridRadios"
                value="false"
              />
              <label class="form-check-label" for="male">Nam</label>
            </div>
          </div>
        </fieldset>
        <CRow class="mb-3">
          <CFormLabel for="inputPassword" class="col-sm-2 col-form-label">Password</CFormLabel>
          <CCol sm="10">
            <CFormInput id="inputPassword" v-model="form.password" type="password" />
          </CCol>
        </CRow>
        <CRow class="mb-3">
          <div class="col-sm-10 offset-sm-2">
            <CFormCheck id="isActive" v-model="form.isActive" type="checkbox" label="IsActive" />
          </div>
        </CRow>
      </CForm>
    </va-modal>
  </div>
</template>
<script setup>
  import { reactive, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import userApi from '../api/UserApi'
  import { CForm, CFormLabel, CFormInput, CRow, CCol, CFormCheck } from '@coreui/vue'

  const { t } = useI18n()
  const showMediumModal = ref(false)
  const data = ref(null)
  const isLoading = ref(false)

  const form = reactive({
    userName: '',
    fullName: '',
    phone: '',
    email: '',
    address: '',
    amount: '',
    sex: true,
    password: '',
    isActive: 0,
  })

  const onSubmit = async () => {
    console.log('OK')
    try {
      isLoading.value = true
      console.log(isLoading.value)
      // const apiUrl = userApi.createUser()
      // console.log(JSON.stringify(form.value))
      // const response = await fetch(apiUrl, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8', // Specify the correct content type
      //   },
      //   body: JSON.stringify(form.value),
      // })
      const response = await userApi.createUser(form)
      if (response.ok) {
        console.log('User created successfully')

        form.value = {
          userName: '',
          fullName: '',
          phone: '',
          email: '',
          address: '',
          amount: '',
          sex: '',
          password: '',
          isActive: 1,
        }
      } else {
        console.error('Error creating user:', response.statusText)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      isLoading.value = false
    }
  }
</script>
