import styled from 'styled-components';

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 290px 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const PosterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 300px;

  @media (max-width: 992px) {
    max-width: 260px;
    margin: 0 auto;
  }
`;

export const PosterWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 18px;
  overflow: hidden;
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(255, 255, 255, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }

  .badge-imdb {
    position: absolute;
    top: 14px;
    left: 14px;
    background: rgba(18, 17, 20, 0.85);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 185, 85, 0.35);
    color: #ffb955;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .badge-age {
    position: absolute;
    top: 14px;
    right: 14px;
    background: rgba(255, 83, 90, 0.9);
    backdrop-filter: blur(8px);
    color: #ffffff;
    font-size: 11px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 999px;
    letter-spacing: 0.5px;
  }
`;

export const KeyFactsStrip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;

  .fact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;

    .fact-label {
      font-size: 10px;
      color: #ae8786;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .fact-value {
      font-size: 12.5px;
      font-weight: 700;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 4px;

      .gold {
        color: #ffb955;
      }
    }
  }

  .fact-divider {
    width: 1px;
    height: 24px;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const MovieInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const BadgesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  .tag-badge {
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #e5e2e3;

    &.gold {
      background: rgba(255, 185, 85, 0.15);
      border-color: rgba(255, 185, 85, 0.35);
      color: #ffb955;
    }

    &.red {
      background: rgba(255, 83, 90, 0.15);
      border-color: rgba(255, 83, 90, 0.35);
      color: #ff535a;
    }
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h1.movie-title {
    font-size: 36px;
    font-weight: 900;
    color: #ffffff;
    line-height: 1.15;
    letter-spacing: -0.5px;

    @media (max-width: 768px) {
      font-size: 26px;
    }
  }

  span.movie-original-title {
    font-size: 16px;
    font-weight: 500;
    color: #ae8786;
  }
`;

export const GenresAndRatings = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding: 8px 0;

  .genre-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .genre-chip {
    padding: 5px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 11.5px;
    font-weight: 600;
    color: #dedede;
  }

  .ratings-group {
    display: flex;
    align-items: center;
    gap: 16px;

    .rating-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 700;
      color: #ffffff;

      .icon-star {
        color: #ffb955;
      }
      .icon-heart {
        color: #ff535a;
      }
      .sub {
        font-size: 11px;
        font-weight: 500;
        color: #ae8786;
      }
    }
  }
`;

export const PeopleRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  .person-card {
    display: flex;
    align-items: center;
    gap: 12px;

    img.avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      border: 1.5px solid rgba(255, 185, 85, 0.4);
    }

    .person-info {
      display: flex;
      flex-direction: column;

      .person-role {
        font-size: 10px;
        font-weight: 800;
        color: #ffb955;
        letter-spacing: 0.8px;
        text-transform: uppercase;
      }
      .person-name {
        font-size: 13px;
        font-weight: 700;
        color: #ffffff;
      }
      .person-sub {
        font-size: 11px;
        color: #ae8786;
      }
    }
  }

  .cast-group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .cast-title {
      font-size: 10px;
      font-weight: 800;
      color: #ae8786;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }

    .cast-members {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
    }

    .cast-member {
      display: flex;
      align-items: center;
      gap: 8px;

      img.avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid rgba(255, 255, 255, 0.15);
      }

      .member-info {
        display: flex;
        flex-direction: column;
        .name {
          font-size: 11.5px;
          font-weight: 700;
          color: #ffffff;
        }
        .character {
          font-size: 10px;
          color: #ae8786;
        }
      }
    }
  }
`;

export const ActionsCtaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 4px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }

  .trailer-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #ffffff;
    cursor: pointer;
    transition: all 0.2s ease;

    .play-circle {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #ff535a;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(255, 83, 90, 0.4);
    }

    .trailer-text {
      display: flex;
      flex-direction: column;
      text-align: left;

      .main {
        font-size: 13.5px;
        font-weight: 800;
      }
      .sub {
        font-size: 11px;
        color: #ae8786;
      }
    }

    &:hover {
      background: rgba(255, 255, 255, 0.09);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
  }

  .book-now-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 12px;
    background: linear-gradient(135deg, #ff535a 0%, #ff7b54 100%);
    color: #ffffff;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.5px;
    border: none;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(255, 83, 90, 0.35);
    transition: all 0.25s ease;

    &:hover {
      box-shadow: 0 8px 26px rgba(255, 83, 90, 0.5);
      transform: translateY(-2px);
    }
  }

  .bookmark-btn {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #e5e2e3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &.bookmarked {
      color: #ffb955;
      background: rgba(255, 185, 85, 0.15);
      border-color: rgba(255, 185, 85, 0.4);
    }

    &:hover {
      color: #ffb955;
      background: rgba(255, 255, 255, 0.08);
    }
  }
`;
