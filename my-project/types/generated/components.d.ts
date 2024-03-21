import type { Schema, Attribute } from '@strapi/strapi';

export interface CollectionCollection extends Schema.Component {
  collectionName: 'components_collection_collections';
  info: {
    displayName: 'Collection';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    color: Attribute.JSON;
    Modern: Attribute.Component<'collection.modern', true>;
  };
}

export interface CollectionModern extends Schema.Component {
  collectionName: 'components_collection_moderns';
  info: {
    displayName: 'Modern';
  };
  attributes: {
    title: Attribute.String;
    Noofproducts: Attribute.BigInteger;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    link: Attribute.String;
    logo: Attribute.Media;
    title: Attribute.String;
    navbar: Attribute.Component<'header.nav', true>;
  };
}

export interface HeaderNav extends Schema.Component {
  collectionName: 'components_header_navs';
  info: {
    displayName: 'Navbar';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    isnew: Attribute.Boolean;
    type: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'collection.collection': CollectionCollection;
      'collection.modern': CollectionModern;
      'header.header': HeaderHeader;
      'header.nav': HeaderNav;
    }
  }
}
