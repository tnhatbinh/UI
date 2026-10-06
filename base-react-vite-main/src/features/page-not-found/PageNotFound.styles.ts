import { Result } from "antd";
import styled from "styled-components";

export const PageNotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 120px 24px 80px;
  background: var(--bg-primary);
`;

export const StyledResult = styled(Result)`
  width: min(100%, 540px);
  border-radius: 20px;
  background: rgba(28, 27, 28, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.9);
  padding: 40px 24px;

  .ant-result-title {
    color: #ffffff !important;
    font-family: "Be Vietnam Pro", sans-serif !important;
    font-size: 32px !important;
    font-weight: 800 !important;
  }

  .ant-result-subtitle {
    color: #e7bcba !important;
    font-family: "Be Vietnam Pro", sans-serif !important;
    font-size: 15px !important;
  }

  .ant-btn-primary {
    background: var(--primary) !important;
    border-color: var(--primary) !important;
    font-family: "Be Vietnam Pro", sans-serif !important;
    font-weight: 600 !important;
    border-radius: 9999px !important;
    height: 42px !important;
    padding: 0 28px !important;
    box-shadow: 0px 4px 16px rgba(255, 83, 90, 0.4) !important;

    &:hover {
      background: #e0353c !important;
      border-color: #e0353c !important;
    }
  }
`;
