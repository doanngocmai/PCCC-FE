import { Badge, Dropdown, Menu, Row, Spin } from 'antd'
import { ADMIN_ROUTER_PATH, SESSION_KEY } from 'common/config'
import { logoutAction } from 'features/auth/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import history from 'utils/history'
import R from 'assets'
import React, { Key, useState } from 'react'
import ChangePass from './Dropdown/ChangePass'
import styles from 'common/components/styles/WhiteBox.module.css'
import { PersonInfor } from './Dropdown/PersonInfor'
import {
  BellOutlined,
  FileTextOutlined,
  HomeOutlined,
  InboxOutlined,
  LogoutOutlined,
  ProfileOutlined,
  RedoOutlined,
  SnippetsOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  ImportStockIcon,
  ExportStockIcon,
  InventoryIcon,
  NewsIcon,
  FishIcon,
  AccountIcon,
  ConfigIcon,
} from './Icons'
import Cookies from 'js-cookie'

const { SubMenu } = Menu

const dataMenu: { role: number; menuItem: React.ReactNode }[] = [
  {
    role: 2,
    menuItem: (
      <Menu.Item
        key={ADMIN_ROUTER_PATH.DASH_BOARD}
        icon={<HomeOutlined style={{ fontSize: '20px' }} />}
        children={R.strings().title_header_dashboard}
      />
    ),
  },
  {
    role: 3,
    menuItem: (
      <Menu.Item
        key={ADMIN_ROUTER_PATH.CUSTOMER}
        icon={<TeamOutlined style={{ fontSize: '20px' }} />}
      >
        {R.strings().title_header_customer}
      </Menu.Item>
    ),
  },
  {
    role: 4,
    menuItem: (
      <Menu.Item
        key={ADMIN_ROUTER_PATH.CATEGORY_PRODUCT}
        icon={<ProfileOutlined style={{ fontSize: '20px' }} />}
      >
        {R.strings().title_header_category_product}
      </Menu.Item>
    ),
  },
  {
    role: 5,
    menuItem: (
      <Menu.Item
        key={ADMIN_ROUTER_PATH.PRODUCT}
        icon={<FishIcon style={{ fontSize: '20px' }} />}
      >
        {R.strings().title_header_product}
      </Menu.Item>
    ),
  },
  {
    role: 6,
    menuItem: (
      <Menu.Item
        key={ADMIN_ROUTER_PATH.ORDER}
        icon={<FileTextOutlined style={{ fontSize: '20px' }} />}
      >
        {R.strings().title_header_order}
      </Menu.Item>
    ),
  },
  {
    role: 9,
    menuItem: (
      <Menu.Item
        key={ADMIN_ROUTER_PATH.NEWS}
        icon={<NewsIcon style={{ fontSize: '20px' }} />}
      >
        {R.strings().title_header_news}
      </Menu.Item>
    ),
  },
  {
    role: 7,
    menuItem: (
      <SubMenu
        key="stock"
        icon={<InboxOutlined style={{ fontSize: '20px' }} />}
        title={R.strings().title_header_stock}
      >
        <Menu.Item
          key={ADMIN_ROUTER_PATH.STOCK}
          icon={<InboxOutlined style={{ fontSize: '20px' }} />}
        >
          {R.strings().title_header_store_list}
        </Menu.Item>
        <Menu.Item
          key={ADMIN_ROUTER_PATH.IMPORT_STOCK}
          icon={<ImportStockIcon style={{ fontSize: '20px' }} />}
        >
          {R.strings().title_header_import_stock}
        </Menu.Item>

        <Menu.Item
          key={ADMIN_ROUTER_PATH.EXPORT_STOCK}
          icon={<ExportStockIcon style={{ fontSize: '20px' }} />}
        >
          {R.strings().title_header_export_stock}
        </Menu.Item>

        <Menu.Item
          key={ADMIN_ROUTER_PATH.INVENTORY}
          icon={<InventoryIcon style={{ fontSize: '20px' }} />}
        >
          {R.strings().title_header_inventory}
        </Menu.Item>
      </SubMenu>
    ),
  },
  {
    role: 10,
    menuItem: (
      <Menu.Item
        key={ADMIN_ROUTER_PATH.CONFIG}
        icon={<ConfigIcon style={{ fontSize: '20px' }} />}
      >
        {R.strings().title_header_config}
      </Menu.Item>
    ),
  },
  {
    role: 11,
    menuItem: (
      <Menu.Item
        key={ADMIN_ROUTER_PATH.DECENTRALIZATION}
        icon={<ConfigIcon style={{ fontSize: '20px' }} />}
      >
        Phân quyền tài khoản
      </Menu.Item>
    ),
  },
  {
    role: 12,
    menuItem: (
      <Menu.Item
        key={ADMIN_ROUTER_PATH.ACCOUNTS}
        icon={<AccountIcon style={{ fontSize: '20px' }} />}
      >
        {R.strings().title_header_account}
      </Menu.Item>
    ),
  },
]

export default function Header(props: any) {
  const dispatch = useDispatch()
  const authState = useSelector((state: any) => state.authReducer)
  const [visible, setVisible] = useState(false)
  const [dotNotify, setDotNotify] = useState(false)
  const [openKeys, setOpenKeys] = useState<Array<any>>([])
  const [openModal, setOpenModal] = useState({
    personalInfor: false,
    changePassword: false,
  })
  const ChangePassword = () => {
    if (!openModal.personalInfor) {
      setOpenModal({ ...openModal, changePassword: true })
    }
  }
  const PersonInfors = () => {
    if (!openModal.changePassword) {
      setOpenModal({ ...openModal, personalInfor: true })
    }
  }

  function handleClick(e: any) {
    if (e.key === 'logout') {
      //handle logout
      //call api logout, reset reducer
      dispatch(logoutAction())
    } else {
      history.push(e.key)
    }
  }

  function handleGetCurrentRouter() {
    return window.location.pathname
  }

  const rootSubmenuKeys = Object.values(ADMIN_ROUTER_PATH)

  const handleChangeMenu = (keys: Key[]) => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey as string) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const userState = useSelector((state: any) => state.authReducer)?.userInfo
  const listNotification = (
    <div className={styles.wrap_notification}>
      <div className={styles.title_notification}>Thông báo</div>
      <div className={styles.list_notification}>
        <li>
          <div className={styles.left_notification}>
            <div className={styles.icon_notice}>
              <SnippetsOutlined />
            </div>
          </div>
          <div className={styles.contend_notification}>
            Thông báo 1 hơi bị dài chịu khó đọc
          </div>
        </li>
        <li>
          <div className={styles.left_notification}>
            <div className={styles.icon_notice}>
              <SnippetsOutlined />
            </div>
          </div>
          <div className={styles.contend_notification}>
            Thông báo 1 hơi bị dài chịu khó đọc
          </div>
        </li>
        <li>
          <div className={styles.left_notification}>
            <div className={styles.icon_notice}>
              <SnippetsOutlined />
            </div>
          </div>
          <div className={styles.contend_notification}>
            Thông báo 1 hơi bị dài chịu khó đọc
          </div>
        </li>
        <li>
          <div className={styles.left_notification}>
            <div className={styles.icon_notice}>
              <SnippetsOutlined />
            </div>
          </div>
          <div className={styles.contend_notification}>
            Thông báo 1 hơi bị dài chịu khó đọc
          </div>
        </li>
        <li>
          <div className={styles.left_notification}>
            <div className={styles.icon_notice}>
              <SnippetsOutlined />
            </div>
          </div>
          <div className={styles.contend_notification}>
            Thông báo 1 hơi bị dài chịu khó đọc
          </div>
        </li>
        <li>
          <div className={styles.left_notification}>
            <div className={styles.icon_notice}>
              <SnippetsOutlined />
            </div>
          </div>
          <div className={styles.contend_notification}>
            Thông báo 1 hơi bị dài chịu khó đọc
          </div>
        </li>
      </div>
    </div>
  )
  const onClick = () => {
    setVisible(!visible)
    setDotNotify(false)
  }
  const SuperAdminMenu = () => {
    const listPermission: number[] = localStorage.getItem('listPermission')
      ? JSON.parse(localStorage.getItem('listPermission') as string)
      : []

    return (
      <Menu
        // triggerSubMenuAction="click"
        onClick={handleClick}
        // mode="horizontal"
        // style={{ backgroundColor: '#153863', color: 'white' }}
        openKeys={openKeys}
        onOpenChange={e => handleChangeMenu(e)}
        mode="inline"
        selectedKeys={[handleGetCurrentRouter()]}
      >
        {/*{dataMenu.map(value => {*/}
        {/*  const item = listPermission.find(value1 => {*/}
        {/*    if (value1 === 1) {*/}
        {/*      return true*/}
        {/*    } else {*/}
        {/*      return value.menuItem*/}
        {/*    }*/}
        {/*  })*/}
        {/*  console.log(item)*/}
        {/*  return value.menuItem*/}
        {/*})}*/}
        {listPermission[0] !== 1
          ? listPermission.map(value => {
              if (value !== 1) {
                return dataMenu.find(value1 => value1.role === value)?.menuItem
              }
            })
          : dataMenu.map(value => value.menuItem)}
      </Menu>
    )
  }

  return (
    <Spin spinning={authState.dialogLoading}>
      <div>
        <Row
          style={{
            backgroundColor: 'white', //#153863
            paddingTop: 3,
            paddingLeft: 8,
            paddingRight: 8,
            width: '100vw',
          }}
        >
          <img
            alt=""
            src={R.images.img_logo}
            style={{
              width: 120,
              height: 40,
              padding: 3,
              objectFit: 'contain',
              marginTop: '7px',
              marginBottom: '7px',
            }}
          />

          <div
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              display: 'flex',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Badge dot={dotNotify}>
                <Dropdown
                  visible={visible}
                  overlay={listNotification}
                  trigger={['click']}
                  placement="bottomRight"
                >
                  <BellOutlined
                    className={styles.icon_notification}
                    onClick={onClick}
                  />
                </Dropdown>
              </Badge>
            </div>
            <Menu
              key="MenuHeader"
              style={{
                textAlign: 'end',
                lineHeight: '28px',
                borderBottom: 0,
                marginTop: 5,
                display: 'flex',
                alignItems: 'center',
              }}
              triggerSubMenuAction="click"
              onClick={handleClick}
              mode="horizontal"
              selectedKeys={[handleGetCurrentRouter()]}
            >
              <SubMenu
                key="sub15"
                icon={<UserOutlined />}
                title={userState ? userState.username : 'Username'}
              >
                {/* <Menu.Item key={'4'} icon={<UserOutlined />}>
                  Thông tin cá nhân
                </Menu.Item> */}
                {/* <p></p> */}
                <Menu
                  style={{
                    padding: '20px 20px 20px 15px',
                  }}
                >
                  <a onClick={PersonInfors} className={styles.change_password}>
                    <UserOutlined />
                    &nbsp;&nbsp; Thông tin cá nhân
                  </a>
                </Menu>
                {/* <Menu.Item key="changePassword" icon={<RedoOutlined />}>
                  Đổi mật khẩu
                </Menu.Item> */}
                <Menu
                  style={{
                    padding: '0px 0px 5px 14px',
                  }}
                >
                  <a
                    onClick={ChangePassword}
                    className={styles.change_password}
                  >
                    <RedoOutlined style={{ fontSize: 15 }} />
                    &nbsp;&nbsp; Đổi mật khẩu
                  </a>
                </Menu>
                <Menu.Item
                  key={'logout'}
                  onClick={async () => {
                    try {
                      // const res = await requestLogout()
                      // console.log('res', res)
                      Cookies.set(SESSION_KEY.SESSION, '')
                      window.location.reload()
                    } catch (error) {}
                  }}
                >
                  <LogoutOutlined />
                  Đăng xuất
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </Row>

        {SuperAdminMenu()}
      </div>
      <PersonInfor
        visible={openModal.personalInfor}
        isLoading={false}
        onCancel={() => {
          setOpenModal({ ...openModal, personalInfor: false })
        }}
      />
      <ChangePass
        visible={openModal.changePassword}
        onCancel={() => {
          setOpenModal({ ...openModal, changePassword: false })
        }}
      />
    </Spin>
  )
  //
}
