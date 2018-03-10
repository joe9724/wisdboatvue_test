import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
// import TablesView from './components/views/Tables.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import MyDeviceView from './components/views/MyDevices.vue'
import CurveView from './components/views/Curve.vue'
import AmapView from './components/views/Amap.vue'
import EchartView from './components/views/Echart.vue'
import AirView from './components/views/Air.vue'
import OrgView from './components/views/Org.vue'
import AddOrgView from './components/views/AddOrg.vue'
import DeviceListView from './components/views/DeviceList.vue'
import TestTablePagingView from './components/views/TestTablePaging.vue'
import UploadView from './components/views/Upload.vue'
import UsersView from './components/views/Users.vue'
import EditUserView from './components/views/EditUser.vue'
import AddUserView from './components/views/AddUser.vue'
import MsgLogsView from './components/views/MsgLogs.vue'
import OpLogsView from './components/views/OperationLogs.vue'
import LoginLogsView from './components/views/LoginLogs.vue'
import EditDeviceView from './components/views/EditDevice.vue'
import ViewDeviceView from './components/views/ViewDevice.vue'
import WarningDeviceView from './components/views/WarningDevice.vue'
import EditOrgView from './components/views/EditOrg.vue'
import AddDeviceView from './components/views/AddDevice.vue'
import SystemConfigView from './components/views/SystemConfig.vue'
import UpdatePassView from './components/views/UpdatePass.vue'

// Routes
const routes = [
  {
    path: '/backend',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'user/updatePass',
        alias: 'updatePass_alias',
        component: UpdatePassView,
        name: '修改用户密码',
        meta: {description: 'UpdatePassView'}
      },
      {
        path: 'user/add',
        alias: 'addUser_alias',
        component: AddUserView,
        name: '添加用户',
        meta: {description: 'AddUserView'}
      },
      {
        path: 'sysConfig',
        alias: 'sysconfig_alias',
        component: SystemConfigView,
        name: '系统设置',
        meta: {description: 'SystemConfigView'}
      },
      {
        path: 'device/add',
        alias: 'editorg',
        component: AddDeviceView,
        name: '添加设备',
        meta: {description: 'editorg'}
      },
      {
        path: 'org/edit',
        alias: 'editorg',
        component: EditOrgView,
        name: 'editorg',
        meta: {description: 'editorg'}
      },
      {
        path: 'device/warning',
        alias: 'WarningDeviceView',
        component: WarningDeviceView,
        name: 'WarningDeviceView',
        meta: {description: 'WarningDeviceView'}
      },
      {
        path: 'device/view',
        alias: 'ViewDeviceView',
        component: ViewDeviceView,
        name: 'ViewDeviceView',
        meta: {description: 'ViewDeviceView'}
      },
      {
        path: 'device/edit',
        alias: 'editDevice',
        component: EditDeviceView,
        name: 'editDevice',
        meta: {description: 'editDevice'}
      },
      {
        path: 'messageLog',
        alias: 'LogsView',
        component: MsgLogsView,
        name: '消息日志',
        meta: {description: 'LogsView'}
      },
      {
        path: 'operateLog',
        alias: 'OpLogsView',
        component: OpLogsView,
        name: '操作日志',
        meta: {description: 'OpLogsView'}
      },
      {
        path: 'loginLog',
        alias: 'LoginLogsView',
        component: LoginLogsView,
        name: '登录日志',
        meta: {description: 'LoginLogsView'}
      },
      {
        path: 'user/edit',
        alias: 'edituser',
        component: EditUserView,
        name: 'EditUser',
        meta: {description: 'EditUser'}
      },
      {
        path: 'userList',
        alias: 'users_alias',
        component: UsersView,
        name: '用户列表',
        meta: {description: 'UsersView'}
      },
      {
        path: 'upload',
        alias: 'upload_alias',
        component: UploadView,
        name: 'UploadView',
        meta: {description: 'UploadView'}
      },
      {
        path: 'testtablepaging',
        alias: 'testtablepaging_alias',
        component: TestTablePagingView,
        name: 'TestTablePagingName',
        meta: {description: 'TestTablePagingView'}
      },
      {
        path: 'deviceList',
        alias: 'devicelist_alias',
        component: DeviceListView,
        name: '设备管理',
        meta: {description: 'devicelist'}
      },
      {
        path: 'air',
        alias: 'air_alias',
        component: AirView,
        name: 'airView',
        meta: {description: 'air'}
      },
      {
        path: 'echart',
        alias: 'echart_alias',
        component: EchartView,
        name: 'echartView',
        meta: {description: 'echart'}
      },
      {
        path: 'amap',
        alias: 'amap_alias',
        component: AmapView,
        name: 'amapView',
        meta: {description: '曲线图'}
      },
      {
        path: 'curve',
        alias: 'curve_alias',
        component: CurveView,
        name: 'CurveView',
        meta: {description: '曲线图'}
      },
      {
        path: 'deviceManager',
        alias: '我的设备',
        component: MyDeviceView,
        name: '我的设备',
        meta: {description: '我的设备'}
      },
      {
        path: 'agencyList',
        alias: 'org_alias',
        component: OrgView,
        name: '组织机构',
        meta: {description: '组织机构'}
      },
      {
        path: 'addorg',
        alias: 'addorg_alias',
        component: AddOrgView,
        name: 'AddOrgView',
        meta: {description: '添加组织机构'}
      },
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
