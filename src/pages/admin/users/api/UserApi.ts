import { ApiClient } from '../../../services/ApiService'

const userApi = {
  getListUser: () => ApiClient.get('/api/web/User/GetListUser'),

  createUser: (userData) => ApiClient.post('/api/web/User/CreateUser', userData),

  updateUser: (userId, userData) => ApiClient.put(`/api/web/User/UpdateUser/${userId}`, userData),

  deleteUser: (userId) => ApiClient.delete(`/api/web/User/DeleteUser/${userId}`),
}

export default userApi
