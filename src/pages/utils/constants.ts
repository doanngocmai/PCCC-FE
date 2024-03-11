export const RESTART_ON_REMOUNT = '@saga-injector/restart-on-remount'

export const API_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  NOTFOUND: 404,
  BADREQUEST: 400,
  SERVER: 500,
  UNAUTHORIZED: 401,
  CONFLICT: 409,
  FORBIDDEN: 403,
}
export const CONFIG_TYPE = {
  ATTENDANCE: 1,
  ORDER_PROMOTION: 2,
  DAILY_TURN: 3,
  REFERRAL_APP: 4,
  REFERRAL_CODE: 5,
  REFERRAL_MEMBER: 6,
}
export const NEWS_TYPE = {
  BANNER: 0,
  PARTNER: 1,
}
export const PAYMENT_TYPE = {
  CASH: 1,
  TRANSFER: 2,
  VNPAY: 3,
}
export const ACCOUNT_R0LE = {
  ALL: 0,
  ADMIN: 1,
  STAFF: 2,
  AGENT: 3,
}

export const LIST_TYPE_CUSTOMER = [
  { text: 'Cá nhân', value: 1 },
  { text: 'Đại lý', value: 2 },
  { text: 'Siêu thị', value: 3 },
  { text: 'Chợ xỉ', value: 4 },
  { text: 'Xuất ăn công nghiệp', value: 5 },
  { text: 'Nhà hàng', value: 6 },
]
export const PRODUCT_TYPE = [
  { value: 0, text: '--- Loại sản phẩm ---' },
  { value: 1, text: 'Sản phẩm khuyến mại' },
  { value: 2, text: 'Sản phẩm hot' },
  { value: 3, text: 'Sản phẩm bán chạy' },
]
export const LIST_ORDER_STATUS = [
  { value: 0, text: 'Báo giá vận chuyển' },
  { value: 1, text: 'Chờ xác nhận' },
  { value: 2, text: 'Đang giao' },
  { value: 3, text: 'Đã giao' },
  { value: 4, text: 'Hoàn thành' },
  { value: -1, text: 'Hủy' },
  { value: -2, text: 'Khiếu nại' },
]
export const ORDER_STATUS = {
  QUOTE: 0,
  PENDING: 1,
  SHIPING: 2,
  SHIPED: 3,
  COMPLETE: 4,
  CANCEL: -1,
  COMPLAIN: -2,
}

export const REQUEST_STATUS = {
  PENDING: 0,
  SUCCESS: 1,
}
export const GENDER = {
  MALE: 0,
  FEMALE: 1,
}
export const REG_PHONE = /(84|0[3|5|7|8|9])+([0-9]{8})\b/

export const IS_ACTIVE = {
  ACTIVE: 1,
  INACTIVE: 0,
}

export const ORIGIN_PRODUCT = [
  { value: 'Nauy', text: 'Nauy' },
  { value: 'Nhật Bản ', text: 'Nhật Bản ' },
  { value: 'Hàn Quốc', text: 'Hàn Quốc' },
  { value: 'Trung Quốc', text: 'Trung Quốc' },
  { value: 'Mỹ', text: 'Mỹ' },
  { value: 'Chile', text: 'Chile' },
]
