import type { Schema, Attribute } from '@strapi/strapi';

export interface BasicInfoBasicInfo extends Schema.Component {
  collectionName: 'components_basic_info_basic_infos';
  info: {
    displayName: 'Basic Info';
    description: '';
  };
  attributes: {
    isPremium: Attribute.Boolean;
    name: Attribute.String;
    reference: Attribute.String & Attribute.Required;
    id_product: Attribute.Integer;
    price: Attribute.Decimal;
    priceA: Attribute.Decimal;
    priceB: Attribute.Decimal;
  };
}

export interface ComprobadoresSpecsComprobadores extends Schema.Component {
  collectionName: 'components_comprobadores_specs_comprobadores';
  info: {
    displayName: 'Specs Comprobadores';
  };
  attributes: {
    rangoPresion: Attribute.String;
    rangoDepresion: Attribute.String;
    resolucion: Attribute.String;
    precision: Attribute.String;
  };
}

export interface DescriptionContentProduct extends Schema.Component {
  collectionName: 'components_description_content_products';
  info: {
    displayName: 'Content Product';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface ImageDieselCadenaImage extends Schema.Component {
  collectionName: 'components_image_diesel_cadena_images';
  info: {
    displayName: 'Diesel Cadena Image';
  };
  attributes: {
    url: Attribute.String;
    alt: Attribute.String;
  };
}

export interface ImageDieselCorreaImage extends Schema.Component {
  collectionName: 'components_image_diesel_correa_images';
  info: {
    displayName: 'Diesel Correa Image';
  };
  attributes: {
    url: Attribute.String;
    alt: Attribute.String;
  };
}

export interface ImageGasolinaCadenaImage extends Schema.Component {
  collectionName: 'components_image_gasolina_cadena_images';
  info: {
    displayName: 'Gasolina Cadena Image';
  };
  attributes: {
    url: Attribute.String;
    alt: Attribute.String;
  };
}

export interface ImageGasolinaCorreaImage extends Schema.Component {
  collectionName: 'components_image_gasolina_correa_images';
  info: {
    displayName: 'Gasolina Correa Image';
  };
  attributes: {
    url: Attribute.String;
    alt: Attribute.String;
  };
}

export interface ImageImagePremium extends Schema.Component {
  collectionName: 'components_image_premium_image_premiums';
  info: {
    displayName: 'Image Premium';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    alt: Attribute.String;
  };
}

export interface ImageProductImages extends Schema.Component {
  collectionName: 'components_product_images_product_images';
  info: {
    displayName: 'Product Images';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    alt: Attribute.String;
  };
}

export interface InfoChapaYPintura extends Schema.Component {
  collectionName: 'components_info_chapa_y_pinturas';
  info: {
    displayName: 'Chapa y Pintura';
    description: '';
  };
  attributes: {
    presion: Attribute.JSON;
    medida: Attribute.JSON;
  };
}

export interface InfoCodigoMotor extends Schema.Component {
  collectionName: 'components_codigo_motor_codigo_motors';
  info: {
    displayName: 'Motor';
    description: '';
  };
  attributes: {
    marcas: Attribute.JSON;
    modelos: Attribute.JSON;
    motoresDiesel: Attribute.Component<'info.motores-diesel'>;
    motoresGasolina: Attribute.Component<'info.motores-gasolina'>;
    infoAdicional: Attribute.Component<'info.info-adicional-motores'>;
    OEM: Attribute.JSON;
  };
}

export interface InfoDiagnosis extends Schema.Component {
  collectionName: 'components_info_diagnoses';
  info: {
    displayName: 'Diagnosis';
  };
  attributes: {
    novedades: Attribute.String;
    medidas: Attribute.String;
    codigo: Attribute.String;
    validez: Attribute.String;
    tipo: Attribute.String;
    rango: Attribute.String;
  };
}

export interface InfoElectricidad extends Schema.Component {
  collectionName: 'components_info_electricidads';
  info: {
    displayName: 'Electricidad';
  };
  attributes: {
    code: Attribute.String;
    description: Attribute.String;
  };
}

export interface InfoInfoAdicionalMotores extends Schema.Component {
  collectionName: 'components_info_info_adicional_motores';
  info: {
    displayName: 'Info Adicional Motores';
  };
  attributes: {
    years: Attribute.String;
    combustible: Attribute.JSON;
    tipo: Attribute.String;
  };
}

export interface InfoMotoresDiesel extends Schema.Component {
  collectionName: 'components_info_motores_diesels';
  info: {
    displayName: 'Motores Diesel';
  };
  attributes: {
    size: Attribute.JSON;
    codes: Attribute.JSON;
  };
}

export interface InfoMotoresGasolina extends Schema.Component {
  collectionName: 'components_info_motores_gasolinas';
  info: {
    displayName: 'Motores Gasolina';
  };
  attributes: {
    size: Attribute.JSON;
    codes: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'basic-info.basic-info': BasicInfoBasicInfo;
      'comprobadores.specs-comprobadores': ComprobadoresSpecsComprobadores;
      'description.content-product': DescriptionContentProduct;
      'image.diesel-cadena-image': ImageDieselCadenaImage;
      'image.diesel-correa-image': ImageDieselCorreaImage;
      'image.gasolina-cadena-image': ImageGasolinaCadenaImage;
      'image.gasolina-correa-image': ImageGasolinaCorreaImage;
      'image.image-premium': ImageImagePremium;
      'image.product-images': ImageProductImages;
      'info.chapa-y-pintura': InfoChapaYPintura;
      'info.codigo-motor': InfoCodigoMotor;
      'info.diagnosis': InfoDiagnosis;
      'info.electricidad': InfoElectricidad;
      'info.info-adicional-motores': InfoInfoAdicionalMotores;
      'info.motores-diesel': InfoMotoresDiesel;
      'info.motores-gasolina': InfoMotoresGasolina;
    }
  }
}
