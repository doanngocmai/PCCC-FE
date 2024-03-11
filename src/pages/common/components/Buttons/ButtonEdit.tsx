import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'

type ButtonFixedProps = {
  onClickButton?: () => void
  text?: string
  icon?: any
  loading?: boolean
  typeButton?: string
  styleButton?: any
}

const ButtonEdit = ({
  text,
  onClickButton,
  icon,
  typeButton,
  styleButton,
}: ButtonFixedProps) => {
  return (
    <Button
      type={!typeButton ? 'primary' : 'text'}
      style={
        !styleButton
          ? {
              minWidth: '70px',
              borderRadius: '3px',
            }
          : { color: '#1890ff', fontWeight: 'bold' }
      }
      onClick={() => {
        onClickButton && onClickButton()
      }}
    >
      <b>
        {icon ? icon : <EditOutlined />}&nbsp;
        {text}
      </b>
    </Button>
  )
}

export default ButtonEdit
