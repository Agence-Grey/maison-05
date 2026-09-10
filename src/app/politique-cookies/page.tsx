import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Politique cookies — Maison 05",
  description:
    "Politique d'utilisation des cookies du site Maison 05, studio de Pilates Reformer à Bourg-en-Bresse.",
};

export default function PolitiqueCookiesPage() {
  return (
    <LegalLayout title="Politique cookies" updatedAt="11 septembre 2026">
      <LegalSection title="Qu&apos;est-ce qu&apos;un cookie ?">
        <p>
          Un cookie est un petit fichier texte déposé sur votre terminal lors de la consultation
          d&apos;un site web. Il permet notamment de mémoriser vos préférences et de mesurer la
          fréquentation du site.
        </p>
      </LegalSection>

      <LegalSection title="Cookies utilisés">
        <p>Ce site utilise les catégories de cookies suivantes :</p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>Cookies strictement nécessaires</strong> : indispensables au fonctionnement du
            site (ex : mémorisation de votre choix de consentement). Ils ne requièrent pas votre
            consentement.
          </li>
          <li>
            <strong>Cookies de mesure d&apos;audience</strong> : permettent d&apos;analyser la
            fréquentation et l&apos;usage du site. Ils ne sont déposés qu&apos;avec votre
            consentement.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Consentement">
        <p>
          Lors de votre première visite, une bannière vous permet d&apos;accepter ou de refuser les
          cookies non essentiels. Votre choix est mémorisé pour une durée de 6 mois. Vous pouvez le
          modifier à tout moment en vidant le stockage de votre navigateur ou via les réglages
          ci-dessous.
        </p>
      </LegalSection>

      <LegalSection title="Gestion des cookies">
        <p>
          Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies. Chaque
          navigateur propose une procédure dédiée dans ses paramètres de confidentialité. Le refus
          des cookies n&apos;empêche pas l&apos;utilisation du site.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Pour toute question relative à notre politique cookies, contactez-nous à{" "}
          <a
            href="mailto:Manon.jacquier@pilatesmaison05.com"
            className="text-curry-dark underline underline-offset-2"
          >
            Manon.jacquier@pilatesmaison05.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
