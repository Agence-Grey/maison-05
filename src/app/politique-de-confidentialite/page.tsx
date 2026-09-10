import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Maison 05",
  description:
    "Politique de confidentialité du site Maison 05, studio de Pilates Reformer à Bourg-en-Bresse.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalLayout title="Politique de confidentialité" updatedAt="11 septembre 2026">
      <LegalSection title="Responsable du traitement">
        <p>
          Maison 05, représentée par Manon Jacquier, est responsable du traitement des données
          collectées via le site pilatesmaison05.com.
        </p>
        <p>
          Contact :{" "}
          <a
            href="mailto:Manon.jacquier@pilatesmaison05.com"
            className="text-curry-dark underline underline-offset-2"
          >
            Manon.jacquier@pilatesmaison05.com
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>Dans le cadre de l&apos;utilisation du site, nous sommes susceptibles de collecter :</p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Les données de contact transmises volontairement (nom, prénom, email, téléphone) ;
          </li>
          <li>
            Les données de navigation (adresse IP, pages consultées) via des cookies soumis à
            consentement.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Finalités du traitement">
        <ul className="list-inside list-disc space-y-2">
          <li>Répondre aux demandes de contact et gérer les réservations ;</li>
          <li>Améliorer l&apos;expérience du site et mesurer son audience ;</li>
          <li>Respecter nos obligations légales.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Base légale">
        <p>
          Les traitements reposent sur votre consentement (cookies non essentiels), l&apos;exécution
          de mesures précontractuelles (demandes de contact) ou l&apos;intérêt légitime de Maison
          05.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          Les données sont conservées pendant la durée nécessaire aux finalités décrites, dans la
          limite de [durée, ex : 3 ans] après le dernier contact pour les données de relation
          client.
        </p>
      </LegalSection>

      <LegalSection title="Destinataires des données">
        <p>
          Les données sont destinées à Maison 05 et à ses éventuels sous-traitants techniques
          (hébergeur, outil de mesure d&apos;audience), qui agissent sur instruction et dans le
          respect du RGPD.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-inside list-disc space-y-2">
          <li>Droit d&apos;accès, de rectification et d&apos;effacement de vos données ;</li>
          <li>Droit à la limitation et à la portabilité du traitement ;</li>
          <li>Droit d&apos;opposition et de retrait du consentement à tout moment ;</li>
          <li>Droit d&apos;introduire une réclamation auprès de la CNIL.</li>
        </ul>
        <p>
          Pour exercer vos droits, écrivez à{" "}
          <a
            href="mailto:Manon.jacquier@pilatesmaison05.com"
            className="text-curry-dark underline underline-offset-2"
          >
            Manon.jacquier@pilatesmaison05.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Sécurité">
        <p>
          Maison 05 met en œuvre des mesures techniques et organisationnelles appropriées pour
          protéger vos données contre tout accès non autorisé, altération ou perte.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
