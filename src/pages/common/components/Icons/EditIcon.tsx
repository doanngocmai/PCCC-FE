import Icon from '@ant-design/icons'

const EditSvg = () => (
  <svg
    stroke="currentColor"
    fill="none"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      color: 'green',
      cursor: 'pointer',
      fontSize: '18px',
      marginRight: '10px',
    }}
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
)

const EditIcon = (props: any) => <Icon component={EditSvg} {...props} />
export default EditIcon