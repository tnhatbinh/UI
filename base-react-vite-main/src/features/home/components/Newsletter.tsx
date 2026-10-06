import type { FC } from "react";
import { Mail } from "lucide-react";
import {
  SectionContainer,
  ContentWrapper,
  BannerContainer,
  LeftContent,
  Subtitle,
  Title,
  Description,
  RightContent,
  InputWrapper,
  EmailInput,
  SubmitButton,
  ButtonText,
} from "./newsletter.styles";

export const Newsletter: FC = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        {/* Banner Container */}
        <BannerContainer>
          
          {/* Left Content */}
          <LeftContent>
            <Subtitle>
              ĐĂNG KÝ NHẬN TIN SUẤT CHIẾU SỚM
            </Subtitle>
            <Title>
              Nhận Ngay Vé Premiere & Mã Giảm Giá 50k
            </Title>
            <Description>
              Đăng ký email để không bỏ lỡ cơ hội đặt vé trước cho các bom tấn mùa hè và nhận ưu đãi riêng vào thứ Tư hàng tuần.
            </Description>
          </LeftContent>

          {/* Right Content (Form) */}
          <RightContent>
            {/* Input Wrapper */}
            <InputWrapper>
              <Mail size={16} />
              <EmailInput
                type="email"
                placeholder="Nhập địa chỉ email của bạn..."
              />
            </InputWrapper>
            
            {/* Submit Button */}
            <SubmitButton>
              <ButtonText>
                ĐĂNG KÝ
              </ButtonText>
            </SubmitButton>
          </RightContent>

        </BannerContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};
