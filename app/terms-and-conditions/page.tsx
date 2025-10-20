import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Imprint() {
  return (
    <React.Fragment>
      <Link href="/" className="flex items-center p-4 hover:underline pl-8">
        <ArrowLeftIcon className="size-6" />
        <h1 className="text-2xl font-bold m-0!">Back to Console</h1>
      </Link>
      <div className="mx-8 mb-8">
        <Tabs defaultValue="en">
          <TabsList>
            <TabsTrigger value="de">Deutsch</TabsTrigger>
            <TabsTrigger value="en">English</TabsTrigger>
          </TabsList>
          <TabsContent value="de">
            <h1 className="text-3xl">Allgemeine Geschäftsbedingungen (AGB)</h1>

            <h2 className="text-2xl">§ 1 Geltungsbereich</h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
              Verträge zwischen Frederik Willem Grimm (nachfolgend
              „Auftragnehmer“) und seinen Auftraggebern über
              IT-Dienstleistungen, sofern nicht im Einzelfall etwas anderes
              schriftlich vereinbart wurde.
            </p>
            <p>
              (2) Abweichende Bedingungen des Auftraggebers werden nicht
              anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung
              ausdrücklich schriftlich zu.
            </p>

            <h2 className="text-2xl">
              § 2 Vertragsgegenstand und Leistungsumfang
            </h2>
            <p>
              (1) Gegenstand des Vertrages sind die im Einzelvertrag oder
              Angebot spezifizierten IT-Dienstleistungen, wie z. B.
              Softwareentwicklung, IT-Beratung, Systemadministration oder
              Website-Erstellung.
            </p>
            <p>
              (2) Der Auftragnehmer erbringt seine Leistungen nach dem aktuellen
              Stand der Technik und mit der branchenüblichen Sorgfalt.
            </p>

            <h2 className="text-2xl">§ 3 Zustandekommen des Vertrages</h2>
            <p>
              (1) Angebote des Auftragnehmers sind freibleibend und
              unverbindlich.
            </p>
            <p>
              (2) Ein Vertrag kommt durch die schriftliche Annahme eines
              Angebots durch den Auftraggeber oder durch die schriftliche
              Auftragsbestätigung des Auftragnehmers zustande.
            </p>

            <h2 className="text-2xl">§ 4 Vergütung und Zahlungsbedingungen</h2>
            <p>
              (1) Die Vergütung erfolgt auf Basis der im Einzelvertrag
              vereinbarten Sätze (Stunden-, Tages- oder Pauschalhonorar).
            </p>
            <p>
              (2) Gemäß § 19 UStG wird keine Umsatzsteuer berechnet. Alle
              angegebenen Preise sind Endpreise.
            </p>
            <p>
              (3) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum
              ohne Abzug zur Zahlung fällig.
            </p>
            <p>
              (4) Reisekosten und sonstige Spesen werden nach vorheriger
              Absprache gesondert in Rechnung gestellt.
            </p>

            <h2 className="text-2xl">
              § 5 Mitwirkungspflichten des Auftraggebers
            </h2>
            <p>
              (1) Der Auftraggeber ist verpflichtet, dem Auftragnehmer alle für
              die Leistungserbringung notwendigen Informationen, Daten und
              Unterlagen rechtzeitig und vollständig zur Verfügung zu stellen.
            </p>
            <p>
              (2) Der Auftraggeber benennt einen verantwortlichen
              Ansprechpartner, der für die Koordination und die Erteilung von
              erforderlichen Entscheidungen zuständig ist.
            </p>
            <p>
              (3) Kommt der Auftraggeber seinen Mitwirkungspflichten nicht oder
              nicht rechtzeitig nach, so verlängern sich vereinbarte Fristen
              entsprechend.
            </p>

            <h2 className="text-2xl">§ 6 Abnahme</h2>
            <p>
              (1) Sofern die Leistung des Auftragnehmers in der Erstellung eines
              Werkes (z. B. einer Software) besteht, erfolgt nach Fertigstellung
              eine Abnahme durch den Auftraggeber.
            </p>
            <p>
              (2) Der Auftraggeber ist verpflichtet, das Werk innerhalb von 10
              Werktagen nach Bereitstellung zu prüfen und die Abnahme zu
              erklären. Die Abnahme gilt als erfolgt, wenn der Auftraggeber das
              Werk ohne Rüge wesentlicher Mängel in Gebrauch nimmt oder die
              Abnahme nicht innerhalb der Frist unter Angabe von Gründen
              verweigert.
            </p>

            <h2 className="text-2xl">§ 7 Nutzungsrechte</h2>
            <p>
              (1) Mit vollständiger Bezahlung der vereinbarten Vergütung räumt
              der Auftragnehmer dem Auftraggeber das nicht-ausschließliche,
              zeitlich und räumlich unbeschränkte Recht ein, die erbrachten
              Leistungen und Arbeitsergebnisse für den vertraglich vorgesehenen
              Zweck zu nutzen.
            </p>
            <p>
              (2) Eine Weitergabe der Nutzungsrechte an Dritte bedarf der
              schriftlichen Zustimmung des Auftragnehmers.
            </p>
            <p>
              (3) Der Quellcode verbleibt, sofern nicht anders vereinbart, im
              Eigentum des Auftragnehmers.
            </p>

            <h2 className="text-2xl">§ 8 Haftung</h2>
            <p>
              (1) Der Auftragnehmer haftet für Schäden, die er oder seine
              Erfüllungsgehilfen vorsätzlich oder grob fahrlässig verursacht
              haben, unbeschränkt.
            </p>
            <p>
              (2) Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei
              Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und
              nur für den vertragstypischen, vorhersehbaren Schaden.
            </p>
            <p>
              (3) Die Haftung für Datenverlust wird auf den typischen
              Wiederherstellungsaufwand beschränkt, der bei regelmäßiger und
              gefahrentsprechender Anfertigung von Sicherungskopien eingetreten
              wäre.
            </p>
            <p>
              (4) Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.
            </p>

            <h2 className="text-2xl">§ 9 Geheimhaltung</h2>
            <p>
              Beide Parteien verpflichten sich, alle im Rahmen der
              Zusammenarbeit erlangten Geschäfts- und Betriebsgeheimnisse der
              jeweils anderen Partei vertraulich zu behandeln und nicht an
              Dritte weiterzugeben. Diese Verpflichtung besteht auch nach
              Beendigung des Vertrages fort.
            </p>

            <h2 className="text-2xl">§ 10 Schlussbestimmungen</h2>
            <p>(1) Es gilt das Recht der Bundesrepublik Deutschland.</p>
            <p>
              (2) Gerichtsstand für alle Streitigkeiten aus diesem
              Vertragsverhältnis ist der Sitz des Auftragnehmers, sofern der
              Auftraggeber Kaufmann, eine juristische Person des öffentlichen
              Rechts oder ein öffentlich-rechtliches Sondervermögen ist.
            </p>
            <p>
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
              werden, so wird dadurch die Wirksamkeit der übrigen Bestimmungen
              nicht berührt.
            </p>
          </TabsContent>
          <TabsContent value="en">
            <h1 className="text-3xl">General Terms and Conditions (GTC)</h1>

            <h2 className="text-2">§ 1 Scope of Application</h2>
            <p>
              (1) These General Terms and Conditions (GTC) apply to all
              contracts between Frederik Willem Grimm (hereinafter "Contractor")
              and his clients for IT services, unless otherwise agreed in
              writing in individual cases.
            </p>
            <p>
              (2) Deviating conditions of the client are not recognized unless
              the Contractor expressly agrees to their validity in writing.
            </p>

            <h2 className="text-2">§ 2 Subject Matter and Scope of Services</h2>
            <p>
              (1) The subject of the contract is the IT services specified in
              the individual contract or offer, such as software development, IT
              consulting, system administration, or website creation.
            </p>
            <p>
              (2) The Contractor shall provide his services according to the
              current state of the art and with the diligence customary in the
              industry.
            </p>

            <h2 className="text-2">§ 3 Conclusion of the Contract</h2>
            <p>
              (1) Offers from the Contractor are non-binding and subject to
              change.
            </p>
            <p>
              (2) A contract is concluded upon the client's written acceptance
              of an offer or upon the Contractor's written order confirmation.
            </p>

            <h2 className="text-2">§ 4 Remuneration and Payment Terms</h2>
            <p>
              (1) Remuneration shall be based on the rates agreed in the
              individual contract (hourly, daily, or flat fee).
            </p>
            <p>
              (2) Pursuant to § 19 UStG (German VAT Act), no value-added tax is
              charged. All stated prices are final prices.
            </p>
            <p>
              (3) Invoices are due for payment without deduction within 14 days
              of the invoice date.
            </p>
            <p>
              (4) Travel costs and other expenses will be invoiced separately
              after prior agreement.
            </p>

            <h2 className="text-2">§ 5 Client's Obligations to Cooperate</h2>
            <p>
              (1) The client is obliged to provide the Contractor with all
              information, data, and documents necessary for the provision of
              services in a timely and complete manner.
            </p>
            <p>
              (2) The client shall appoint a responsible contact person who is
              responsible for coordination and making necessary decisions.
            </p>
            <p>
              (3) If the client does not fulfill his obligations to cooperate or
              does not do so in a timely manner, agreed deadlines shall be
              extended accordingly.
            </p>

            <h2 className="text-2">§ 6 Acceptance</h2>
            <p>
              (1) If the Contractor's service consists of the creation of a work
              (e.g., software), an acceptance by the client shall take place
              after completion.
            </p>
            <p>
              (2) The client is obliged to inspect the work within 10 working
              days of provision and to declare acceptance. The work shall be
              deemed accepted if the client uses the work without complaining of
              significant defects or does not refuse acceptance within the
              period for stated reasons.
            </p>

            <h2 className="text-2">§ 7 Rights of Use</h2>
            <p>
              (1) Upon full payment of the agreed remuneration, the Contractor
              grants the client the non-exclusive, perpetual, and worldwide
              right to use the services and work results for the contractually
              intended purpose.
            </p>
            <p>
              (2) A transfer of the rights of use to third parties requires the
              written consent of the Contractor.
            </p>
            <p>
              (3) The source code remains the property of the Contractor, unless
              otherwise agreed.
            </p>

            <h2 className="text-2">§ 8 Liability</h2>
            <p>
              (1) The Contractor shall be liable without limitation for damages
              caused intentionally or by gross negligence by him or his
              vicarious agents.
            </p>
            <p>
              (2) In the case of slight negligence, the Contractor shall only be
              liable for the breach of essential contractual obligations
              (cardinal obligations) and only for the foreseeable damage typical
              for the contract.
            </p>
            <p>
              (3) Liability for data loss is limited to the typical recovery
              effort that would have occurred with regular and risk-appropriate
              creation of backup copies.
            </p>
            <p>
              (4) Liability under the Product Liability Act remains unaffected.
            </p>

            <h2 className="text-2">§ 9 Confidentiality</h2>
            <p>
              Both parties undertake to treat all business and trade secrets of
              the other party obtained in the course of the cooperation as
              confidential and not to disclose them to third parties. This
              obligation shall continue to exist after the termination of the
              contract.
            </p>

            <h2 className="text-2">§ 10 Final Provisions</h2>
            <p>(1) The law of the Federal Republic of Germany shall apply.</p>
            <p>
              (2) The place of jurisdiction for all disputes arising from this
              contractual relationship is the registered office of the
              Contractor, provided the client is a merchant, a legal entity
              under public law, or a special fund under public law.
            </p>
            <p>
              (3) Should individual provisions of these GTC be or become
              invalid, the validity of the remaining provisions shall not be
              affected.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </React.Fragment>
  );
}
