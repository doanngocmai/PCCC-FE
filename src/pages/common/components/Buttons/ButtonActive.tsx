import { Button, Popconfirm } from 'antd'
import {
  CheckCircleOutlined,
  LeftCircleOutlined,
  LoadingOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons'

type ButtonFixedProps = {
  onConfirm?: () => void
  onCancel?: () => void
  isActive: number | boolean | undefined
  loading?: boolean
  title: string
  okText?: any
  cancelText?: any
  typeButton?: string
}

const ButtonActive = ({
  isActive,
  onConfirm,
  onCancel,
  loading,
  title,
  okText,
  cancelText,
  typeButton,
}: ButtonFixedProps) => {
  return (
    <Popconfirm
      placement="leftBottom"
      title={title}
      onConfirm={() => {
        onConfirm && onConfirm()
      }}
      onCancel={() => {
        onCancel && onCancel()
      }}
      okText={
        okText ? (
          okText
        ) : (
          <span>
            <CheckCircleOutlined />
            &nbsp;Đồng ý
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
        style: {
          borderRadius: '3px',
          minWidth: '70px',
          fontWeight: 'bold',
          borderColor: '#1890ff',
          color: '#1890ff',
        },
      }}
      cancelButtonProps={{
        danger: true,
        style: {
          borderRadius: '3px',
          minWidth: '70px',
          fontWeight: 'bold',
        },
      }}
    >
      <Button
        style={
          isActive
            ? typeButton !== 'text'
              ? {
                  minWidth: '70px',
                  fontWeight: 'bold',
                  borderRadius: '3px',
                  backgroundColor: '#ff4d4f',
                  borderColor: '#ff4d4f',
                  color: 'white',
                }
              : { color: '#ff4d4f', fontWeight: 'bold' }
            : typeButton !== 'text'
            ? {
                minWidth: '70px',
                fontWeight: 'bold',
                borderRadius: '3px',
                backgroundColor: '#1890ff',
                color: 'white',
              }
            : { color: '#1890ff', fontWeight: 'bold' }
        }
        type={!typeButton ? 'primary' : 'text'}
        loading={loading}
      >
        {isActive ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
        {isActive ? 'Ngừng hoạt động' : 'Hoạt động'}
      </Button>
    </Popconfirm>
  )
}

export default ButtonActive
