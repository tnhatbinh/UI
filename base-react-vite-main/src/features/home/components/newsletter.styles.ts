import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg-primary);
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 1232px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border-radius: 24px;
  background-image: linear-gradient(
    to right,
    rgba(255, 83, 90, 0.2),
    var(--bg-disabled),
    rgba(220, 145, 0, 0.2)
  );

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 28px 20px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 576px;
`;

export const Subtitle = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: var(--secondary);
  letter-spacing: 1.1px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: var(--primary-text);
  line-height: 36px;
  letter-spacing: -0.42px;
  font-family: "Be Vietnam Pro", sans-serif;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: var(--text-secondary-alt);
  line-height: 22px;
  letter-spacing: 0.14px;
  font-family: "Be Vietnam Pro", sans-serif;
  max-width: 534px;
  margin: 0;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  height: 48px;
  width: 320px;
  background-color: rgba(14, 14, 15, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 16px;

  svg {
    color: var(--primary-subtitle);
    margin-right: 8px;
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const EmailInput = styled.input`
  flex: 1 1 0%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: normal;
  color: var(--primary-text);
  letter-spacing: 0.18px;
  font-family: "Be Vietnam Pro", sans-serif;
  height: 100%;

  &::placeholder {
    color: var(--primary-subtitle);
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  height: 48px;
  background-color: var(--primary);
  border-radius: 16px;
  box-shadow:
    0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -4px rgba(0, 0, 0, 0.1);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 83, 90, 0.9);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ButtonText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: var(--on-primary-dark);
  letter-spacing: 0.7px;
  text-transform: uppercase;
  font-family: "Be Vietnam Pro", sans-serif;
  white-space: nowrap;
`;
