import styled from 'styled-components';

export const RightPanel = styled.div`
  background: #171618;
  padding: 44px 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 32px 20px;
  }
`;

export const FormTopHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const GateBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 83, 90, 0.08);
  border: 1px solid rgba(255, 83, 90, 0.3);
  border-radius: 9999px;
  padding: 4px 12px;
  width: fit-content;
  color: #ff535a;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 10.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

export const FormTitle = styled.h2`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 26px;
  font-weight: 800;
  color: #ffffff;
  margin: 4px 0 0 0;
  letter-spacing: -0.3px;
`;

export const FormSubtitle = styled.p`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 13px;
  line-height: 1.5;
  color: #ae8786;
  margin: 0;

  .gold-highlight {
    color: #ffb955;
    font-weight: 600;
  }
`;

export const TabSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 4px;
  gap: 4px;
  margin-top: 18px;
  margin-bottom: 20px;
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  background: ${({ $isActive }) => ($isActive ? '#ff535a' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#ae8786')};
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ $isActive }) =>
    $isActive ? '0 4px 14px rgba(255, 83, 90, 0.4)' : 'none'};

  &:hover {
    color: #ffffff;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
`;

export const FieldLabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FieldLabel = styled.label`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.6px;
  color: #ae8786;
  text-transform: uppercase;
`;

export const ForgotPassLink = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 11.5px;
  font-weight: 600;
  color: #ff535a;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #ff7b54;
    text-decoration: underline;
  }
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0 14px;
  height: 46px;
  gap: 10px;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: #ff535a;
    background: rgba(255, 83, 90, 0.05);
    box-shadow: 0 0 0 3px rgba(255, 83, 90, 0.15);
  }

  .field-icon {
    color: #ae8786;
    flex-shrink: 0;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 13.5px;

    &::placeholder {
      color: rgba(174, 135, 134, 0.6);
      font-size: 13px;
    }
  }

  .toggle-eye {
    background: transparent;
    border: none;
    color: #ae8786;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: color 0.15s;

    &:hover {
      color: #ffffff;
    }
  }
`;

export const ExtraOptionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0 16px 0;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12px;
  color: #e5e2e3;
  cursor: pointer;
  user-select: none;

  input[type='checkbox'] {
    accent-color: #ff535a;
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
`;

export const SecurityTag = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 11.5px;
  color: #ae8786;

  .lock-icon {
    color: #ffb955;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(90deg, #ff535a 0%, #e0353c 100%);
  color: #ffffff;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 0.8px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(255, 83, 90, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(255, 83, 90, 0.55);
    background: linear-gradient(90deg, #ff6b71 0%, #eb3e45 100%);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const OrDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 18px 0;

  .line {
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.08);
  }

  .text {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 10px;
    font-weight: 700;
    color: #736b6e;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export const SocialButtonsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

export const SocialButton = styled.button`
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #e5e2e3;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
    color: #ffffff;
  }
`;

export const QrCodeBanner = styled.div`
  margin-top: 14px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 185, 85, 0.3);
  }

  .left {
    display: flex;
    align-items: center;
    gap: 12px;

    .qr-icon {
      color: #ffb955;
    }

    .text-col {
      display: flex;
      flex-direction: column;
      gap: 2px;

      .title {
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 12px;
        font-weight: 700;
        color: #ffffff;
      }
      .desc {
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 11px;
        color: #ae8786;
      }
    }
  }

  .chevron {
    color: #ae8786;
  }
`;

export const FormFooter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const RegisterLinkText = styled.div`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12.5px;
  color: #ae8786;

  button {
    background: transparent;
    border: none;
    padding: 0;
    margin-left: 4px;
    color: #ff535a;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const VoucherBanner = styled.div`
  width: 100%;
  background: rgba(255, 83, 90, 0.08);
  border: 1px solid rgba(255, 83, 90, 0.25);
  border-radius: 10px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #ffb3b0;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 11.5px;
  font-weight: 600;
`;
