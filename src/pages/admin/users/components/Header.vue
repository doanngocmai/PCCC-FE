<template>
  <CButton color="primary" @click="toggleScrollableDemo">Launch demo modal</CButton>
  <CModal
    scrollable
    :visible="visibleScrollableDemo"
    aria-labelledby="ScrollingLongContentExampleLabel2"
    @close="toggleScrollableDemo"
    @ok="submit"
  >
    <CModalHeader>
      <CModalTitle id="ScrollingLongContentExampleLabel2">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm class="row g-3 needs-validation" novalidate :validated="validatedCustom01" @submit="handleSubmitCustom01">
        <CCol md="4">
          <CFormInput id="validationCustom01" v-model="formData.field1" label="First name" required />
          <CFormFeedback :valid="validatedCustom01" :invalid="!validatedCustom01">
            {{ validatedCustom01 ? 'Looks good!' : '' }}
          </CFormFeedback>
        </CCol>
        <CCol md="4">
          <CFormInput id="validationCustom02" v-model="formData.field2" label="Email" required />
          <CFormFeedback :valid="validatedCustom01" :invalid="!validatedCustom01">
            {{ validatedCustom01 ? 'No good!' : '' }}
          </CFormFeedback>
        </CCol>
      </CForm>
    </CModalBody>
  </CModal>
</template>

<script setup>
  import { ref } from 'vue'
  import {
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CForm,
    CFormInput,
    CCol,
    CFormFeedback,
  } from '@coreui/vue'

  const visibleScrollableDemo = ref(false)
  const validatedCustom01 = ref(false)

  const toggleScrollableDemo = () => {
    visibleScrollableDemo.value = !visibleScrollableDemo.value
  }

  const formData = ref({
    field1: '',
    field2: '',
  })

  const handleSubmitCustom01 = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    validatedCustom01.value = true
  }

  const submit = () => {
    // Your submit logic here
    console.log('Submit method called')
    // Close the modal if needed
    toggleScrollableDemo()
  }
</script>
