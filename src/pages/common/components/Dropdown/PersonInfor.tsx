import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Form, Input, message, Modal, Upload } from 'antd'
import { RadiusSelection } from 'common/components/Inputs'
import moment from 'moment'
import { useState } from 'react'
import ButtonBottomModal from '../Buttons/ButtonBottomModal'

type Props = {
  visible: boolean
  onCancel?: any
  data?: any
  isLoading: boolean
}

function getBase64(img: any, callback: any) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file: any) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('Xảy ra lỗi! Bạn chỉ có thể upload ảnh có dạng JPG/PNG!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Cho phép ảnh có dung lượng tối đa là 2MB')
  }
  return isJpgOrPng && isLt2M
}

function convertDataToFrom(data: any) {
  if (!data) {
    return {
      name: null,
      phone_number: null,
      address: null,
      password: null,
      date_of_birth: null,
      expired_at: null,
      gender: null,
      email: null,
      role_id: null,
      province_id: null,
    }
  } else {
    return {
      ...data,
      name: data.name,
      date_of_birth: moment.unix(1616620499),
      expired_at: moment.unix(data.expired_at),
    }
  }
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

export const PersonInfor = ({ visible, onCancel, data, isLoading }: Props) => {
  const [upload, setUpload] = useState({
    loading: false,
    imageUrl: '',
  })

  const [form] = Form.useForm()

  const initialValues = convertDataToFrom(data)

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setUpload({
        imageUrl: '',
        loading: true,
      })
      return
    }

    if (info.file.status === 'done' || info.file.status === 'error') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: any) =>
        setUpload({
          imageUrl: imageUrl,
          loading: false,
        })
      )
    }
  }

  const uploadButton = (
    <div>
      {upload.loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  const onFinish = async (values: any, onCancel: any) => {
    let newData = {
      ...values,
      created_at: moment(values.created_at).unix(),
      expired_at: moment(values.expired_at).unix(),
      date_of_birth: moment(values.date_of_birth).unix(),
    }
  }

  return (
    <Modal
      onCancel={() => {
        form.resetFields()
        onCancel()
      }}
      maskClosable={false}
      footer={null}
      title="Thông tin cá nhân"
      visible={visible}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        labelAlign="left"
        onFinish={(values: any) => onFinish(values, onCancel)}
        initialValues={initialValues}
        scrollToFirstError
      >
        <Form.Item label="Ảnh đại diện" name="icon_url">
          <Upload
            name="icon_url"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {upload.imageUrl ? (
              <img
                src={upload.imageUrl}
                alt="avatar"
                style={{ width: '100%' }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        <Form.Item
          name="name"
          label="Họ tên"
          rules={[
            {
              type: 'string',
              message: 'Nhập tài khoản',
            },
            {
              required: true,
              message: 'Vui lòng nhập tài khoản!',
            },
            {
              min: 3,
              max: 50,
              message: 'Vui lòng nhập từ 3 đến 50 ký tự!',
            },
          ]}
        >
          <Input placeholder="Nhập tài khoản" />
        </Form.Item>
        <Form.Item
          name="phone_number"
          label="Số điện thoại"
          rules={[
            {
              // type: 'number',
              message: 'Nhập số điện thoại',
            },
            {
              required: true,
              message: 'Vui lòng nhập số điện thoại!',
            },
            {
              min: 9,
              max: 10,
              message: 'Vui lòng nhập từ 9 đến 10 số!',
            },
          ]}
        >
          <Input disabled={data} placeholder="Nhập số điện thoại" />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'Định dạng email không hợp lệ!',
            },
          ]}
        >
          <Input placeholder="Nhập email" />
        </Form.Item>

        <Form.Item
          label="Loại tài khoản"
          name="role_id"
          rules={[
            {
              required: true,
              message: 'Vui lòng chọn loại tài khoản!',
            },
          ]}
        >
          <RadiusSelection
            onChange={() => {}}
            options={[
              { value: 0, text: 'Quản trị' },
              { value: 1, text: 'Đại lý' },
              { value: 2, text: 'Nhân viên' },
            ]}
            placeholder="Chọn loại tài khoản"
            defaultValue={data?.role_id}
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <ButtonBottomModal
            // isLoadingButton={isLoadingButton}
            onCancel={onCancel}
            text="Lưu"
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
