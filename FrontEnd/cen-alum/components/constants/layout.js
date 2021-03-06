import { Layout, Menu, Image } from 'antd';
import MenuOption from './menuOption';
import {
  FileTextOutlined,
  ReconciliationOutlined,
  ContainerOutlined,
  HomeOutlined,
  UserOutlined,IdcardOutlined
} from '@ant-design/icons';

const theme = "dark"

const { SubMenu } = Menu;
const { Content, Sider, Header } = Layout;

const MyLayout = ({ children }) => (
  <>
    <Layout className="layout">
      <Sider
        theme={theme}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className='logo-img'>
          <Image preview={false} width={100} src="/images/LogoBlue.png" />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['0']}
          theme={theme}
        >
          <Menu.Item key="0" icon={<HomeOutlined />}><MenuOption label="Inicio" url="/" /></Menu.Item>
          <SubMenu key="sub1" icon={<FileTextOutlined />} title="Cotización">
            <Menu.Item key="1"><MenuOption label="Crear" url="/cotizaciones/cotizacion" /></Menu.Item>
            <Menu.Item key="2"><MenuOption label="Ver" url="/cotizaciones/cotizaciones" /></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<ReconciliationOutlined />} title="Orden de servicio">
            <Menu.Item key="5"><MenuOption label="Crear" url="/ordenS/ordenServicio" /></Menu.Item>
            <Menu.Item key="6"><MenuOption label="Ver" url="/ordenS/ordenesServicio" /></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={< ContainerOutlined />} title="Cuenta de cobro">
            <Menu.Item key="3"><MenuOption label="Crear" url="/cuentaCobro/cuentaCobro" /></Menu.Item>
            <Menu.Item key="4"><MenuOption label="Ver" url="/cuentaCobro/cuentasCobro" /></Menu.Item>
          </SubMenu>
          <Menu.Item key="sub4" icon={<UserOutlined />}><MenuOption label="Clientes" url="/clientes/clientes" /></Menu.Item>
          <Menu.Item key="sub5" icon={<IdcardOutlined />}><MenuOption label="Empleados" url="/empleados/empleados" /></Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Content
          style={{
            padding: '0 0px',
          }}
        >
          <div className="site-layout-content">{children}</div>
        </Content>
      </Layout>
    </Layout>
  </>
);

export default MyLayout;
