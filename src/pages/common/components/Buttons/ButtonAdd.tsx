import { Button } from 'antd'
import { LoadingOutlined, PlusCircleOutlined } from '@ant-design/icons'

type ButtonFixedProps = {
  onClickButton?: Function
  text?: string
  icon?: any
  loading?: boolean
  size?: any
  htmlType?: any
  styleButton?: any
  disabled?: boolean
}

const ButtonAdd = ({
  text,
  onClickButton,
  icon,
  loading,
  size,
  htmlType,
  styleButton,
  disabled,
}: ButtonFixedProps) => {
  return (
    <Button
      disabled={disabled}
      type="primary"
      style={
        !styleButton
          ? {
              borderRadius: '3px',
            }
          : styleButton
      }
      htmlType={htmlType ? htmlType : 'button'}
      onClick={() => {
        onClickButton && onClickButton()
      }}
      size={size ? size : 'middle'}
    >
      <b>
        {loading ? <LoadingOutlined /> : icon ? icon : <PlusCircleOutlined />}
        &nbsp;
        {text}
      </b>
    </Button>
  )
}

export default ButtonAdd
