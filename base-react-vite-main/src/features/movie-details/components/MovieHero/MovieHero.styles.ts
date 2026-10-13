import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 310px 1fr;
  gap: 36px;
  margin-bottom: 40px;
  width: 100%;
  max-width: 100%;
  min-width: 0;

  > * {
    min-width: 0;
  }

  @media ${media.lg} {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const PosterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 310px;

  @media ${media.lg} {
    max-width: 310px;
    width: 100%;
    margin: 0 auto;
  }

  @media ${media.xs} {
    max-width: 100%;
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
    color: var(--secondary, #ffb955);
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
  display: grid;
  grid-template-columns: auto auto 1.05fr auto 1.35fr;
  align-items: center;
  padding: 12px 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  gap: 6px;

  @media ${media.xs} {
    padding: 10px 8px;
    gap: 4px;
  }

  .fact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    min-width: 0;
    text-align: center;

    .fact-label {
      font-size: 10px;
      font-weight: 600;
      color: var(--text-secondary, #ae8786);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      white-space: nowrap;
      margin-bottom: 2px;

      @media ${media.xs} {
        font-size: 9.5px;
        letter-spacing: 0.3px;
      }
    }

    .fact-value {
      font-size: 12px;
      font-weight: 700;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      width: 100%;
      min-width: 0;
      white-space: nowrap;

      @media ${media.xs} {
        font-size: 11.5px;
        gap: 3px;
      }

      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .gold {
        color: var(--secondary, #ffb955);
        flex-shrink: 0;
      }
    }
  }

  .fact-divider {
    width: 1px;
    height: 22px;
    background: rgba(255, 255, 255, 0.12);
    flex-shrink: 0;
  }
`;

export const MovieInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 100%;
  min-width: 0;
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
      color: var(--secondary, #ffb955);
    }

    &.red {
      background: rgba(255, 83, 90, 0.15);
      border-color: rgba(255, 83, 90, 0.35);
      color: var(--primary, #ff535a);
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

    @media ${media.md} {
      font-size: 26px;
    }
  }

  span.movie-original-title {
    font-size: 16px;
    font-weight: 500;
    color: var(--text-secondary, #ae8786);
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
        color: var(--secondary, #ffb955);
      }
      .icon-heart {
        color: var(--primary, #ff535a);
      }
      .sub {
        font-size: 11px;
        font-weight: 500;
        color: var(--text-secondary, #ae8786);
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

  @media ${media.sm} {
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
      flex-shrink: 0;
    }

    .person-info {
      display: flex;
      flex-direction: column;
      min-width: 0;

      .person-role {
        font-size: 10px;
        font-weight: 800;
        color: var(--secondary, #ffb955);
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
        color: var(--text-secondary, #ae8786);
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
      color: var(--text-secondary, #ae8786);
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
        flex-shrink: 0;
      }

      .member-info {
        display: flex;
        flex-direction: column;
        min-width: 0;
        .name {
          font-size: 11.5px;
          font-weight: 700;
          color: #ffffff;
        }
        .character {
          font-size: 10px;
          color: var(--text-secondary, #ae8786);
        }
      }
    }
  }
`;

export const ActionsCtaRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 4px;

  @media ${media.sm} {
    display: grid;
    grid-template-columns: 1fr 48px;
    gap: 12px;

    .trailer-btn {
      grid-column: 1 / -1;
      width: 100%;
    }

    .book-now-btn {
      grid-column: 1 / 2;
      width: 100%;
    }

    .bookmark-btn {
      grid-column: 2 / 3;
      width: 48px;
      height: 100%;
      min-height: 48px;
    }
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
      background: var(--primary, #ff535a);
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
        color: var(--text-secondary, #ae8786);
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
    background: linear-gradient(135deg, var(--primary, #ff535a) 0%, var(--primary-hover, #ff7b54) 100%);
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
      color: var(--secondary, #ffb955);
      background: rgba(255, 185, 85, 0.15);
      border-color: rgba(255, 185, 85, 0.4);
    }

    &:hover {
      color: var(--secondary, #ffb955);
      background: rgba(255, 255, 255, 0.08);
    }
  }
`;
