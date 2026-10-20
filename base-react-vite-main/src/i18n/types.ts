import vi from './locales/vi.json';

export type TranslationResources = typeof vi;

export type LanguageCode = 'vi' | 'en' | 'ja' | 'ko' | 'zh';

export type AppNamespace = keyof TranslationResources;

export type CommonKeys = keyof TranslationResources['common'];
export type HeaderKeys = keyof TranslationResources['header'];
export type FooterKeys = keyof TranslationResources['footer'];
export type SidebarKeys = keyof TranslationResources['sidebar'];
export type AuthKeys = keyof TranslationResources['auth'];
export type BookingKeys = keyof TranslationResources['booking'];
export type MovieKeys = keyof TranslationResources['movie'];
export type DiscoveryKeys = keyof TranslationResources['discovery'];
export type ProfileKeys = keyof TranslationResources['profile'];
export type FeedbackKeys = keyof TranslationResources['feedback'];
export type HomeKeys = keyof TranslationResources['home'];

