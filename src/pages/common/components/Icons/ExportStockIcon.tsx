import Icon from '@ant-design/icons'

const ExportStockSvg = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        fill-rule="nonzero"
        d="M20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3h16zm0 6H4v10h16V9zm-8 1l4 4h-3v4h-2v-4H8l4-4zm6.764-5H5.236l-.999 2h15.527l-1-2z"
      ></path>
    </g>
  </svg>
)

const ExportStockIcon = (props: any) => (
  <Icon component={ExportStockSvg} {...props} />
)
export default ExportStockIcon
