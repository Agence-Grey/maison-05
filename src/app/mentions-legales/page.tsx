import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LegalLayout, LegalSection } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Mentions légales — Maison 05",
  description: "Mentions légales du site Maison 05, studio de Pilates Reformer à Bourg-en-Bresse.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <LegalLayout title="Mentions légales" updatedAt="11 septembre 2026">
        <LegalSection title="Éditeur du site">
          <p>
            Le site <strong>pilatesmaison05.com</strong> est édité par Maison 05, représentée par{" "}
            <strong>Manon Jacquier</strong>.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Raison sociale : Maison 05</li>
            <li>Forme juridique : SAS</li>
            <li>SIRET : 104 683 388 00011</li>
            <li>Adresse : 4 Avenue du Champ de Foire, 01000 Bourg-en-Bresse</li>
            <li>Téléphone : 06 01 05 21 60</li>
            <li>Email : Manon.jacquier@pilatesmaison05.com</li>
          </ul>
        </LegalSection>

        <LegalSection title="Directeur de la publication">
          <p>Manon Jacquier, responsable de la publication.</p>
        </LegalSection>

        <LegalSection title="Hébergement">
          <p>
            Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina,
            CA 91723, États-Unis. [À compléter si autre hébergeur]
          </p>
        </LegalSection>

        <LegalSection title="Propriété intellectuelle">
          <p>
            L&apos;ensemble des contenus du site (textes, images, logos, vidéos, éléments
            graphiques) est protégé par le droit de la propriété intellectuelle. Toute reproduction,
            représentation ou diffusion, totale ou partielle, sans autorisation préalable écrite de
            Maison 05 est interdite.
          </p>
        </LegalSection>

        <LegalSection title="Responsabilité">
          <p>
            Maison 05 s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur
            le site, mais ne saurait être tenue responsable des omissions, inexactitudes ou carences
            dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires.
          </p>
        </LegalSection>

        <LegalSection title="Conception du site">
          <p>
            Ce site a été conçu et développé par{" "}
            <a
              href="https://agence-grey.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-curry-dark underline underline-offset-2"
            >
              L&apos;Agence Grey
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            Pour toute question relative au site, vous pouvez nous écrire à{" "}
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
      <Footer />
    </div>
  );
}
