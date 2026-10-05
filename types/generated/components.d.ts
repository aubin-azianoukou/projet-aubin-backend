import type { Schema, Struct } from '@strapi/strapi';

export interface AuteurAvisItem extends Struct.ComponentSchema {
  collectionName: 'components_auteur_avis_items';
  info: {
    displayName: 'Avis-Item';
  };
  attributes: {
    Changement: Schema.Attribute.Text;
    Nom: Schema.Attribute.String;
    Resultat: Schema.Attribute.Text;
    Texte: Schema.Attribute.Text;
  };
}

export interface AuteurCitationItem extends Struct.ComponentSchema {
  collectionName: 'components_auteur_citation_items';
  info: {
    displayName: 'Citation-Item';
  };
  attributes: {
    Auteur: Schema.Attribute.String;
    Citation: Schema.Attribute.Text;
  };
}

export interface AuteurInfoLivre extends Struct.ComponentSchema {
  collectionName: 'components_auteur_info_livres';
  info: {
    displayName: 'Info-Livre';
  };
  attributes: {
    Nom: Schema.Attribute.String;
    Valeur: Schema.Attribute.Text;
  };
}

export interface AuteurVoletLivre extends Struct.ComponentSchema {
  collectionName: 'components_auteur_volet_livres';
  info: {
    displayName: 'Volet-Livre';
  };
  attributes: {
    Liste: Schema.Attribute.Text;
    Texte: Schema.Attribute.Text;
    Titre: Schema.Attribute.String;
  };
}

export interface CategorieTemoignageCategorieTemoignage
  extends Struct.ComponentSchema {
  collectionName: 'components_categorie_temoignage_categorie_temoignages';
  info: {
    displayName: 'Categorie-Temoignage';
    icon: 'folder';
  };
  attributes: {
    Nom: Schema.Attribute.String;
  };
}

export interface FaqFaqCategory extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_categories';
  info: {
    displayName: 'faq-category';
    icon: 'question';
  };
  attributes: {};
}

export interface FaqFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_items';
  info: {
    displayName: 'FAQ-Item';
  };
  attributes: {
    Question: Schema.Attribute.String;
    Reponse: Schema.Attribute.Text;
  };
}

export interface FormationItemListe extends Struct.ComponentSchema {
  collectionName: 'components_formation_item_listes';
  info: {
    displayName: 'Item-Liste';
    icon: 'check';
  };
  attributes: {
    Titre_seo: Schema.Attribute.String;
  };
}

export interface FormationModuleFormation extends Struct.ComponentSchema {
  collectionName: 'components_formation_module_formations';
  info: {
    displayName: 'Module-Formation';
    icon: 'book';
  };
  attributes: {
    Description_Module: Schema.Attribute.Text;
    Titre_Module: Schema.Attribute.String;
  };
}

export interface FormationPourquoiListe extends Struct.ComponentSchema {
  collectionName: 'components_formation_pourquoi_listes';
  info: {
    displayName: 'pourquoi_liste';
  };
  attributes: {
    Texte: Schema.Attribute.Blocks;
  };
}

export interface LivreContenuListe extends Struct.ComponentSchema {
  collectionName: 'components_livre_contenu_listes';
  info: {
    displayName: 'Contenu_liste';
  };
  attributes: {
    Chapitre: Schema.Attribute.Text;
    Description: Schema.Attribute.Text;
    Ordre: Schema.Attribute.String;
    Pilier: Schema.Attribute.String;
  };
}

export interface LivreOutils extends Struct.ComponentSchema {
  collectionName: 'components_livre_outils';
  info: {
    displayName: 'Outils';
  };
  attributes: {
    Chapitre: Schema.Attribute.Text;
    Description: Schema.Attribute.Text;
    nom_outil: Schema.Attribute.String;
  };
}

export interface LivreSeoDescription extends Struct.ComponentSchema {
  collectionName: 'components_livre_seo_descriptions';
  info: {
    displayName: 'seo_description';
  };
  attributes: {};
}

export interface PhotoGaleriePhotoGalerie extends Struct.ComponentSchema {
  collectionName: 'components_photo_galerie_photo_galeries';
  info: {
    displayName: 'Photo-Galerie';
    icon: 'picture';
  };
  attributes: {
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Titre: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'auteur.avis-item': AuteurAvisItem;
      'auteur.citation-item': AuteurCitationItem;
      'auteur.info-livre': AuteurInfoLivre;
      'auteur.volet-livre': AuteurVoletLivre;
      'categorie-temoignage.categorie-temoignage': CategorieTemoignageCategorieTemoignage;
      'faq.faq-category': FaqFaqCategory;
      'faq.faq-item': FaqFaqItem;
      'formation.item-liste': FormationItemListe;
      'formation.module-formation': FormationModuleFormation;
      'formation.pourquoi-liste': FormationPourquoiListe;
      'livre.contenu-liste': LivreContenuListe;
      'livre.outils': LivreOutils;
      'livre.seo-description': LivreSeoDescription;
      'photo-galerie.photo-galerie': PhotoGaleriePhotoGalerie;
    }
  }
}
