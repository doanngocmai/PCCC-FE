<!-- <template>
  <div>
    <va-card class="markup-tables mb-8">
      <va-card-title>{{ t('tables.basic') }}</va-card-title>
      <va-card-content class="overflow-auto">
        <table class="va-table w-full">
          <thead>
            <tr>
              <th>{{ t('tables.headings.name') }}</th>
              <th>{{ t('tables.headings.email') }}</th>
              <th>{{ t('tables.headings.country') }}</th>
              <th>{{ t('tables.headings.status') }}</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.fullName }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.country }}</td>
              <td>
                <va-badge :text="user.status" :color="getStatusColor(user.status)" />
              </td>
            </tr>
          </tbody>
        </table>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  import userApi from '../'

  const { t } = useI18n()

  const users = ref([])

  function getStatusColor(status: string) {
    if (status === 'paid') {
      return 'success'
    }

    if (status === 'processing') {
      return 'info'
    }

    return 'danger'
  }

  // Gọi hàm getListUser khi component được tạo
  onMounted(async () => {
    try {
      const userList = await userApi.getListUser()
      users.value = userList // Gán dữ liệu từ API vào biến users
    } catch (error) {
      console.error('Error fetching user list:', error)
    }
  })
</script> -->
<template>
  <va-card class="markup-tables mb-8">
    <va-card-title>{{ t('tables.basic') }}</va-card-title>
    <va-card-content class="overflow-auto">
      <table class="va-table w-full">
        <thead>
          <tr>
            <th>{{ t('tables.headings.name') }}</th>
            <th>{{ t('tables.headings.email') }}</th>
            <th>{{ t('tables.headings.country') }}</th>
            <th>{{ t('tables.headings.status') }}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.fullName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.country }}</td>
            <td>
              <va-badge :text="user.status" :color="getStatusColor(user.status)" />
            </td>
          </tr>
        </tbody>
      </table>
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import data from '../../../../data/users.json'

  const { t } = useI18n()

  const users = ref(data.slice(0, 8))

  function getStatusColor(status: string) {
    if (status === 'paid') {
      return 'success'
    }

    if (status === 'processing') {
      return 'info'
    }

    return 'danger'
  }
</script>
