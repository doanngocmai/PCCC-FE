import React, { Component, useState } from 'react'
import styled from 'styled-components'
import * as FileSaver from 'file-saver'
import * as XLSX from 'xlsx'
import { Button, Spin } from 'antd'
import { LoadingOutlined, PrinterOutlined } from '@ant-design/icons'

// example data export default [{col1: "value1", col2: "value2"}]
interface IProps {
  sheetName: string[]
  sheets: { [key: string]: any }
  fileName: string
  style?: React.CSSProperties
  className?: string
  onClick?: (fn: Function) => any
  loading?: boolean
}

interface IState {}

// const ButtonExports = (
//   children: any,
//   style: any,
//   className: string,
//   onClick: () => void
// ) => {
//   const [exportToCSV, setExportToCSV] = useState<any>(exportToCSV.bind(this))
//   return (
//     <Style
//       style={{ ...style }}
//       className={className}
//       onClick={() => (onClick ? onClick(exportToCSV) : exportToCSV())}
//     >
//       {loading && (
//         <Spin
//           indicator={
//             <LoadingOutlined
//               style={{ fontSize: 24, color: 'white', marginRight: '10px' }}
//               spin
//             />
//           }
//         />
//       )}
//       <span>{children}</span>
//     </Style>
//   )
// }
class ButtonExport extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
    this.exportToCSV = this.exportToCSV.bind(this)
  }

  private fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
  private fileExtension = '.xlsx'

  public static getSheets(data: any[]): any {
    return XLSX.utils.json_to_sheet(data)
  }

  private async exportToCSV() {
    const wb: any = {
      title: 'hello',
      Sheets: this.props.sheets,
      SheetNames: this.props.sheetName,
    }

    console.log(wb)

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    const data = new Blob([excelBuffer], { type: this.fileType })
    FileSaver.saveAs(data, this.props.fileName + this.fileExtension)
  }

  render() {
    return (
      <Button
        type="primary"
        style={{
          borderRadius: '3px',
        }}
        className={this.props.className}
        onClick={() =>
          this.props.onClick
            ? this.props.onClick(this.exportToCSV)
            : this.exportToCSV()
        }
      >
        {this.props.loading && (
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 24, color: 'white', marginRight: '10px' }}
                spin
              />
            }
          />
        )}
        <b>
          <PrinterOutlined /> Xuất Excel
        </b>
      </Button>
    )
  }
}

const Style = styled.div`
  border-color: steelblue;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  border-radius: 5px;
  // height: 35px;
  font-weight: 600;
  color: steelblue;
  cursor: pointer;
  border-radius: '5px';

  i {
    margin-right: 8px;
  }
`

export default ButtonExport
