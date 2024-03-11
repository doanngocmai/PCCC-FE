// import { ref, onMounted } from 'vue'
// import { useI18n } from 'vue-i18n'
// import axios from 'axios'

// const { t } = useI18n()

// const users = ref([])

// onMounted(async () => {
//   try {
//     // Lấy tham số từ URL
//     const urlParams = new URLSearchParams(window.location.search)
//     const primaryName = urlParams.get('urls.primaryName')

//     // Gọi API sử dụng Axios với tham số từ URL
//     const response = await axios.get(` /api/your-api-endpoint?primaryName=${primaryName}`)

//     users.value = response.data
//   } catch (error) {
//     console.error('Error calling API:', error)
//   }
// })

// function getStatusColor(status: string) {
//   if (status === 'paid') {
//     return 'success'
//   }

//   if (status === 'processing') {
//     return 'info'
//   }

//   return 'danger'
// }
