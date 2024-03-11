import { Button, Popconfirm } from 'antd'
import { CloseCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'

type ButtonFixedProps = {
  onConfirm: () => void
  onCancel?: () => void
  text?: string
  title: string
  icon?: any
  isLoading?: boolean
  okText?: any
  cancelText?: any
  typeButton?: string
}

const ButtonDelete = ({
  text,
  icon,
  title,
  okText,
  cancelText,
  onConfirm,
  onCancel,
  typeButton,
  isLoading,
}: ButtonFixedProps) => {
  return (
    <Popconfirm
      placement="topLeft"
      title={title}
      onConfirm={() => {
        if (!isLoading) onConfirm && onConfirm()
      }}
      onCancel={() => {
        onCancel && onCancel()
      }}
      okText={
        okText ? (
          okText
        ) : (
          <span>
            <CloseCircleOutlined />
            &nbsp;Xóa
          </span>
        )
      }
      cancelText={
        cancelText ? (
          cancelText
        ) : (
          <span>
            <LeftCircleOutlined />
            &nbsp;Trở lại
          </span>
        )
      }
      okButtonProps={{
        type: 'default',
        danger: true,
        style: {
          borderRadius: '3px',
          fontWeight: 'bold',
        },
      }}
      cancelButtonProps={{
        type: 'default',
        style: {
          minWidth: '70px',
          fontWeight: 'bold',
          borderRadius: '3px',
          borderColor: '#1890ff',
          color: '#1890ff',
        },
      }}
    >
      <Button
        type={!typeButton ? 'primary' : 'text'}
        style={{
          minWidth: '70px',
          borderRadius: '3px',
        }}
        danger
        loading={isLoading}
      >
        <b>
          {icon ? icon : <CloseCircleOutlined />}&nbsp;
          {text}
        </b>
      </Button>
    </Popconfirm>
  )
}

export default ButtonDelete
