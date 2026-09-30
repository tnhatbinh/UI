import type { ConfigProviderProps, ThemeConfig } from "antd";
import viVN from "antd/locale/vi_VN";

const palette = {
  bgPrimary: "#0B0B0C",
  borderPrimary: "rgba(255, 255, 255, 0.15)",
  borderSecondary: "rgba(255, 255, 255, 0.08)",
  error: "#FF2A42",
  goldSoft: "rgba(245, 166, 35, 0.15)",
  hoverPrimary: "rgba(255, 42, 66, 0.15)",
  info: "#178fe2",
  primary: "#FF2A42",
  primarySub: "#E01E35",
  success: "#34c759",
  surface: "#1C1B1C",
  tableHeader: "#201F20",
  textPrimary: "#FFFFFF",
  textSecondary: "#AE8786",
  warning: "#F5A623",
} as const;

const theme: ThemeConfig = {
  token: {
    colorPrimary: palette.primary,
    colorLink: palette.primary,
    colorInfo: palette.primary,
    colorSuccess: palette.success,
    colorWarning: palette.warning,
    colorError: palette.error,
    colorText: palette.textPrimary,
    colorTextBase: palette.textPrimary,
    colorTextSecondary: palette.textSecondary,
    colorBgBase: palette.bgPrimary,
    colorBgContainer: palette.surface,
    colorBgElevated: "#201F20",
    colorBgLayout: palette.bgPrimary,
    colorBorder: palette.borderSecondary,
    colorBorderSecondary: palette.borderPrimary,
    borderRadius: 8,
    fontFamily:
      "'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  components: {
    Button: {
      borderRadius: 6,
      colorPrimary: palette.primary,
      colorPrimaryHover: palette.primarySub,
      colorPrimaryActive: palette.primarySub,
    },
    Dropdown: {
      colorBgElevated: palette.surface,
      paddingBlock: 4,
      zIndexPopup: 1050,
    },
    Input: {
      activeBorderColor: palette.primary,
      hoverBorderColor: palette.primary,
    },
    Layout: {
      bodyBg: palette.bgPrimary,
      headerBg: palette.surface,
      siderBg: palette.surface,
    },
    Menu: {
      itemSelectedBg: palette.goldSoft,
      itemSelectedColor: palette.primary,
      itemHoverColor: palette.primary,
      popupBg: palette.surface,
    },
    Modal: {
      borderRadiusLG: 10,
    },
    Select: {
      optionSelectedBg: palette.goldSoft,
    },
    Table: {
      borderRadius: 8,
      headerBg: palette.tableHeader,
      rowHoverBg: palette.hoverPrimary,
    },
    Tabs: {
      itemSelectedColor: palette.primary,
      itemHoverColor: palette.primarySub,
    },
  },
};

const antdDefaultConfig: ConfigProviderProps = {
  locale: viVN,
  theme,
};

export default antdDefaultConfig;
