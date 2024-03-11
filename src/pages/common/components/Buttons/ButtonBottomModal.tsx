import { Row, Col, Button } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

type ButtonBottomModalProps = {
  isLoadingButton?: boolean
  onCancel: any
  text?: string
  icon?: any
  textCancel?: any
  iconCancel?: any
}

const ButtonBottomModal = ({
  isLoadingButton,
  onCancel,
  text,
  icon,
  iconCancel,
  textCancel,
}: ButtonBottomModalProps) => {
  return (
    <Row gutter={16} justify="end">
      <Col>
        <Button
          type="primary"
          style={{ fontWeight: 800, borderRadius: '3px' }}
          danger
          onClick={() => {
            onCancel()
          }}
        >
          {iconCancel ? iconCancel : <CloseCircleOutlined />}
          {textCancel ? textCancel : 'Hủy'}
        </Button>
      </Col>
      <Col>
        <Button
          type="primary"
          loading={isLoadingButton}
          htmlType="submit"
          style={{
            fontWeight: 'bold',
            borderRadius: '3px',
          }}
        >
          {icon ? icon : <CheckCircleOutlined />}
          {text}
        </Button>
      </Col>
    </Row>
  )
}

export default ButtonBottomModal
