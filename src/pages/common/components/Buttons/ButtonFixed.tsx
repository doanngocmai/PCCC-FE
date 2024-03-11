import { Button } from 'antd'

type ButtonFixedProps = {
  onClickButton?: () => void
  style?: any
  text?: string
  icon?: any
  loading?: boolean
  type?: any
  disabled?: any
}

const ButtonFixed = ({
  text,
  onClickButton,
  icon,
  style,
  disabled,
  type,
}: ButtonFixedProps) => {
  return (
    <Button
      style={style}
      onClick={() => {
        onClickButton && onClickButton()
      }}
      disabled={disabled}
      type={type}
    >
      <b>
        {icon}&nbsp;
        {text}
      </b>
    </Button>
  )
}

export default ButtonFixed
