<template>
  <div>
    <va-card class="markup-tables mb-8">
      <va-card-title class="title">{{ t('title.users') }}</va-card-title>
      <va-card-content class="overflow-auto">
        <AddOrEditUser />
        <table class="va-table w-full">
          <thead>
            <tr>
              <th>{{ t('tables.headings.id') }}</th>
              <th>{{ t('tables.headings.userName') }}</th>
              <th>{{ t('tables.headings.fullName') }}</th>
              <th>{{ t('tables.headings.phone') }}</th>
              <th>{{ t('tables.headings.email') }}</th>
              <th>{{ t('tables.headings.status') }}</th>
              <th>{{ t('tables.headings.creationDate') }}</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.fullName }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.email }}</td>
              <td>
                <va-badge :text="getStatusText(user.status)" :color="getStatusColor(user.status)" />
              </td>
              <td>{{ user.createdDate }}</td>
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
  import userApi from '../api/UserApi'
  import AddOrEditUser from './AddOrEditUser.vue'

  const { t } = useI18n()

  const users = ref([])

  const getStatusColor = (status: number) => {
    if (status === 1) {
      return 'success'
    }

    return 'danger'
  }
  const getStatusText = (status: number) => {
    if (status === 1) {
      return 'Đang hoạt động'
    }

    return 'Ngừng hoạt động'
  }

  const loading = ref(false)

  onMounted(async () => {
    try {
      // Set loading state to true
      loading.value = true

      const userList = await userApi.getListUser()
      users.value = userList.data.data
    } catch (error) {
      console.error('Error fetching user list:', error)
    } finally {
      loading.value = false
    }
  })
</script>
