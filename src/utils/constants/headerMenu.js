import { DownOutlined,SearchOutlined,UserOutlined} from '@ant-design/icons';
import { Menu} from 'antd';

const cars=[
    {
        id:1,
        name:'Latest Cars'
    },
    {
        id:2,
        name:'Upcoming Cars'
    },
    {
        id:3,
        name:'Most Viewed Cars'
    },
]
const user=[
    {
        id:1,
        name:'Login to your account'
    },
    {
        id:2,
        name:'Create an Account'
    },
]
const carValutaion=[
    {
        id:1,
        name:'Welcome, Dipesh Kaphle'
    },
    {
        id:2,
        name:'My Bookings'
    },
    {
        id:3,
        name:'My Valuation Appointment'
    },
    {
        id:4,
        name:'Wishlist'
    },
    {
        id:5,
        name:'My Downloads'
    },
    {
        id:6,
        name:'Settings'
    },
    {
     id:7,
     name:'Logout'
    }
]


const navMenu = [
    {
      id: 1,
      label:'Cars',
      icon:<DownOutlined style={{fontSize:'10px',lineHeight:'35px'}}/>,
      to: "/app/admin",
      menu:(<Menu>
          {cars.map((item)=>(
            <Menu.Item key={item.id}>
              {item.name}
            </Menu.Item>
          ))}
        </Menu>)
    },
    {
      id: 2,
      label:'Compare Cars',
      icon:'',
      to: "/app/admin/applicant",
      menu:(<Menu>
        <Menu.Item>
            No content
        </Menu.Item>
    </Menu>)
    },
    {
      id: 3,
      label:'Car Valuation',
      icon:'',
      menu:(
        <Menu>
        {carValutaion.map((item)=>(
          <Menu.Item key={item.id}>
            {item.name}
          </Menu.Item>
        ))}
      </Menu>
      ),
      to: "/app/admin/employees",
    },
    {
      id: 4,
      label:'Blog',
      icon:'',
      menu:(<Menu>
          <Menu.Item>
              No content
          </Menu.Item>
      </Menu>),
      to: "/app/admin/subscription",
    },
    {
      id: 5,
      label:'',
      icon:<SearchOutlined />,
     menu:(<Menu>
        <Menu.Item>
            No content
        </Menu.Item>
    </Menu>),
      to: "/app/admin/myjobs",
    },
    {
      id: 6,
      label:'',
      icon:<UserOutlined />,
       menu:(
        <Menu>
        {user.map((item)=>(
          <Menu.Item 
          key={item.id} 
          >
            {item.name}
          </Menu.Item>
        ))}
      </Menu>
       ),
      to: "/app/admin/settings",
    },
  ]
  export default navMenu;

