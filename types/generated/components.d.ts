import type { Attribute, Schema } from '@strapi/strapi';

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'> & Attribute.Required;
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.Text & Attribute.Required;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'> &
      Attribute.Required;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

export interface SharedSocialLink extends Schema.Component {
  collectionName: 'components_shared_social_links';
  info: {
    description: '';
    displayName: 'socialLink';
    icon: 'earth';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.link': SharedLink;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
    }
  }
}
