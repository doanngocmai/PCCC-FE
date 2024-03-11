import { Form, Input, Modal } from 'antd'
import ButtonBottomModal from 'common/components/Buttons/ButtonBottomModal'
import styles from 'common/components/styles/WhiteBox.module.css'

type Props = { visible: boolean; onCancel: any }

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

export default function ChangePass({ visible, onCancel }: Props) {
  const [form] = Form.useForm()
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <Modal
      title="Đổi mật khẩu"
      visible={visible}
      maskClosable={false}
      footer={null}
      onCancel={() => {
        form.resetFields()
        onCancel()
      }}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        labelAlign="left"
        scrollToFirstError
        // onFinish={(values: dataChangePassword) => onFinish(values)}
      >
        <Form.Item
          name="old_password"
          label="Mật khẩu cũ"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu!',
            },
            {
              min: 6,
              max: 20,
              message: 'Vui lòng nhập từ 6 đến 20 ký tự!',
            },
          ]}
          // hasFeedback
        >
          <Input.Password
            className={styles.input}
            placeholder="Nhập mật khẩu"
          />
        </Form.Item>

        <Form.Item
          name="new_password"
          label="Mật khẩu mới"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu!',
            },
            {
              min: 6,
              max: 20,
              message: 'Vui lòng nhập từ 6 đến 20 ký tự!',
            },
          ]}
          hasFeedback
        >
          <Input.Password
            className={styles.input}
            placeholder="Nhập mật khẩu"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Xác nhận mật khẩu"
          dependencies={['new_password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Nhập lại mật khẩu!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('new_password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('Mật khẩu không khớp!'))
              },
            }),
          ]}
        >
          <Input.Password
            className={styles.input}
            placeholder="Nhập lại mật khẩu"
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
