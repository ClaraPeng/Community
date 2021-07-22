declare var _default: {
    extend: typeof import("../common/extend");
    Session: typeof import("../common/Session").default;
    Store: typeof import("../common/Store").default;
    'utils/BasicEditorDriver': typeof import("../common/utils/BasicEditorDriver").default;
    'utils/evented': {
        handlers: Object;
        getHandlers(event: string): any[];
        trigger(event: string, ...args: any[]): void;
        on(event: string, handler: Function): void;
        one(event: string, handler: Function): void;
        off(event: string, handler: Function): void;
    };
    'utils/liveHumanTimes': typeof import("../common/utils/liveHumanTimes").default;
    'utils/ItemList': typeof import("../common/utils/ItemList").default;
    'utils/mixin': typeof import("../common/utils/mixin").default;
    'utils/humanTime': typeof import("../common/utils/humanTime").default;
    'utils/computed': typeof import("../common/utils/computed").default;
    'utils/insertText': typeof import("../common/utils/insertText").default;
    'utils/styleSelectedText': typeof import("../common/utils/styleSelectedText").default;
    'utils/Drawer': typeof import("../common/utils/Drawer").default;
    'utils/anchorScroll': typeof import("../common/utils/anchorScroll").default;
    'utils/RequestError': typeof import("../common/utils/RequestError").default;
    'utils/abbreviateNumber': typeof import("../common/utils/abbreviateNumber").default;
    'utils/string': typeof import("../common/utils/string");
    'utils/SubtreeRetainer': typeof import("../common/utils/SubtreeRetainer").default;
    'utils/escapeRegExp': typeof import("../common/utils/escapeRegExp").default;
    'utils/extract': typeof import("../common/utils/extract").default;
    'utils/ScrollListener': typeof import("../common/utils/ScrollListener").default;
    'utils/stringToColor': typeof import("../common/utils/stringToColor").default;
    'utils/Stream': typeof import("mithril/stream");
    'utils/subclassOf': typeof import("../common/utils/subclassOf").default;
    'utils/setRouteWithForcedRefresh': typeof import("../common/utils/setRouteWithForcedRefresh").default;
    'utils/patchMithril': typeof import("../common/utils/patchMithril").default;
    'utils/proxifyCompat': (compat: {
        [key: string]: any;
    }, namespace: string) => {
        [key: string]: any;
    };
    'utils/classList': (...classes: import("clsx").ClassValue[]) => string;
    'utils/extractText': typeof import("../common/utils/extractText").default;
    'utils/formatNumber': typeof import("../common/utils/formatNumber").default;
    'utils/mapRoutes': typeof import("../common/utils/mapRoutes").default;
    'utils/withAttr': (key: string, cb: Function) => (this: Element) => void;
    'utils/throttleDebounce': typeof import("../common/utils/throttleDebounce");
    'models/Notification': typeof import("../common/models/Notification").default;
    'models/User': typeof import("../common/models/User").default;
    'models/Post': typeof import("../common/models/Post").default;
    'models/Discussion': typeof import("../common/models/Discussion").default;
    'models/Group': typeof import("../common/models/Group").default;
    'models/Forum': typeof import("../common/models/Forum").default;
    Component: typeof import("../common/Component").default;
    Fragment: typeof import("../common/Fragment").default;
    Translator: typeof import("../common/Translator").default;
    'components/AlertManager': typeof import("../common/components/AlertManager").default;
    'components/Page': typeof import("../common/components/Page").default;
    'components/Switch': typeof import("../common/components/Switch").default;
    'components/Badge': typeof import("../common/components/Badge").default;
    'components/LoadingIndicator': typeof import("../common/components/LoadingIndicator").default;
    'components/Placeholder': typeof import("../common/components/Placeholder").default;
    'components/Separator': typeof import("../common/components/Separator").default;
    'components/Dropdown': typeof import("../common/components/Dropdown").default;
    'components/SplitDropdown': typeof import("../common/components/SplitDropdown").default;
    'components/RequestErrorModal': typeof import("../common/components/RequestErrorModal").default;
    'components/FieldSet': typeof import("../common/components/FieldSet").default;
    'components/Select': typeof import("../common/components/Select").default;
    'components/Navigation': typeof import("../common/components/Navigation").default;
    'components/Alert': typeof import("../common/components/Alert").default;
    'components/Link': typeof import("../common/components/Link").default;
    'components/LinkButton': typeof import("../common/components/LinkButton").default;
    'components/Checkbox': typeof import("../common/components/Checkbox").default;
    'components/SelectDropdown': typeof import("../common/components/SelectDropdown").default;
    'components/ModalManager': typeof import("../common/components/ModalManager").default;
    'components/Button': typeof import("../common/components/Button").default;
    'components/Modal': typeof import("../common/components/Modal").default;
    'components/GroupBadge': typeof import("../common/components/GroupBadge").default;
    'components/TextEditor': typeof import("../common/components/TextEditor").default;
    'components/TextEditorButton': typeof import("../common/components/TextEditorButton").default;
    'components/Tooltip': typeof import("../common/components/Tooltip").default;
    'components/EditUserModal': typeof import("../common/components/EditUserModal").default;
    Model: typeof import("../common/Model").default;
    Application: typeof import("../common/Application").default;
    'helpers/fullTime': typeof import("../common/helpers/fullTime").default;
    'helpers/avatar': typeof import("../common/helpers/avatar").default;
    'helpers/icon': typeof import("../common/helpers/icon").default;
    'helpers/humanTime': typeof import("../common/helpers/humanTime").default;
    'helpers/punctuateSeries': typeof import("../common/helpers/punctuateSeries").default;
    'helpers/highlight': typeof import("../common/helpers/highlight").default;
    'helpers/username': typeof import("../common/helpers/username").default;
    'helpers/userOnline': typeof import("../common/helpers/userOnline").default;
    'helpers/listItems': typeof import("../common/helpers/listItems").default;
    'resolvers/DefaultResolver': typeof import("../common/resolvers/DefaultResolver").default;
    'states/PaginatedListState': typeof import("../common/states/PaginatedListState").default;
} & {
    'utils/saveSettings': typeof saveSettings;
    'utils/ExtensionData': typeof ExtensionData;
    'utils/isExtensionEnabled': typeof isExtensionEnabled;
    'utils/getCategorizedExtensions': typeof getCategorizedExtensions;
    'components/SettingDropdown': typeof SettingDropdown;
    'components/EditCustomFooterModal': typeof EditCustomFooterModal;
    'components/SessionDropdown': typeof SessionDropdown;
    'components/HeaderPrimary': typeof HeaderPrimary;
    'components/AdminPage': typeof AdminPage;
    'components/AppearancePage': typeof AppearancePage;
    'components/StatusWidget': typeof StatusWidget;
    'components/ExtensionsWidget': typeof ExtensionsWidget;
    'components/HeaderSecondary': typeof HeaderSecondary;
    'components/SettingsModal': typeof SettingsModal;
    'components/DashboardWidget': typeof DashboardWidget;
    'components/ExtensionPage': typeof ExtensionPage;
    'components/ExtensionLinkButton': typeof ExtensionLinkButton;
    'components/PermissionGrid': typeof PermissionGrid;
    'components/ExtensionPermissionGrid': typeof ExtensionPermissionGrid;
    'components/MailPage': typeof MailPage;
    'components/UploadImageButton': typeof UploadImageButton;
    'components/LoadingModal': typeof LoadingModal;
    'components/DashboardPage': typeof DashboardPage;
    'components/BasicsPage': typeof BasicsPage;
    'components/UserListPage': typeof UserListPage;
    'components/EditCustomHeaderModal': typeof EditCustomHeaderModal;
    'components/PermissionsPage': typeof PermissionsPage;
    'components/PermissionDropdown': typeof PermissionDropdown;
    'components/AdminNav': typeof AdminNav;
    'components/AdminHeader': typeof AdminHeader;
    'components/EditCustomCssModal': typeof EditCustomCssModal;
    'components/EditGroupModal': typeof EditGroupModal;
    routes: typeof routes;
    AdminApplication: typeof AdminApplication;
};
export default _default;
import saveSettings from "./utils/saveSettings";
import ExtensionData from "./utils/ExtensionData";
import isExtensionEnabled from "./utils/isExtensionEnabled";
import getCategorizedExtensions from "./utils/getCategorizedExtensions";
import SettingDropdown from "./components/SettingDropdown";
import EditCustomFooterModal from "./components/EditCustomFooterModal";
import SessionDropdown from "./components/SessionDropdown";
import HeaderPrimary from "./components/HeaderPrimary";
import AdminPage from "./components/AdminPage";
import AppearancePage from "./components/AppearancePage";
import StatusWidget from "./components/StatusWidget";
import ExtensionsWidget from "./components/ExtensionsWidget";
import HeaderSecondary from "./components/HeaderSecondary";
import SettingsModal from "./components/SettingsModal";
import DashboardWidget from "./components/DashboardWidget";
import ExtensionPage from "./components/ExtensionPage";
import ExtensionLinkButton from "./components/ExtensionLinkButton";
import PermissionGrid from "./components/PermissionGrid";
import ExtensionPermissionGrid from "./components/ExtensionPermissionGrid";
import MailPage from "./components/MailPage";
import UploadImageButton from "./components/UploadImageButton";
import LoadingModal from "./components/LoadingModal";
import DashboardPage from "./components/DashboardPage";
import BasicsPage from "./components/BasicsPage";
import UserListPage from "./components/UserListPage";
import EditCustomHeaderModal from "./components/EditCustomHeaderModal";
import PermissionsPage from "./components/PermissionsPage";
import PermissionDropdown from "./components/PermissionDropdown";
import AdminNav from "./components/AdminNav";
import AdminHeader from "./components/AdminHeader";
import EditCustomCssModal from "./components/EditCustomCssModal";
import EditGroupModal from "./components/EditGroupModal";
import routes from "./routes";
import AdminApplication from "./AdminApplication";
