import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
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
            <h1 className="text-3xl">Datenschutzerklärung</h1>

            <h2 className="text-2xl">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl">Datenerfassung auf dieser Website</h3>
            <p>
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>
            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben. Andere Daten werden automatisch oder
              nach Ihrer Einwilligung beim Besuch der Website durch unsere
              IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
              Website betreten.
            </p>
            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <p>
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              <br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
              eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
              diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema
              Datenschutz können Sie sich jederzeit an uns wenden.
            </p>

            <h2 className="text-2xl">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="text-xl">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn
              Sie diese Website benutzen, werden verschiedene personenbezogene
              Daten erhoben. Diese Datenschutzerklärung erläutert, welche Daten
              wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und
              zu welchem Zweck das geschieht. Wir weisen darauf hin, dass die
              Datenübertragung im Internet (z. B. bei der Kommunikation per
              E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
              der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-xl">Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
              <br />
              Frederik Willem Grimm
              <br />
              Teinsiek 23a
              <br />
              24568 Kaltenkirchen
              <br />
              Telefon: +49 152 0725430
              <br />
              E-Mail: mail@fwgrimm.com
              <br />
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z. B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="text-xl">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
              die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer-
              oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten
              Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="text-xl">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>

            <h3 className="text-xl">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
              Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zu.
            </p>

            <h3 className="text-xl">Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen.
            </p>

            <h3 className="text-xl">Auskunft, Löschung und Berichtigung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung oder Löschung dieser Daten.
            </p>

            <h2 className="text-2xl">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
              ein berechtigtes Interesse an der technisch fehlerfreien
              Darstellung und der Optimierung seiner Website – hierzu müssen die
              Server-Log-Files erfasst werden.
            </p>

            <h3 className="text-xl">
              Kontaktanfrage per E-Mail, Telefon oder Kontaktformular
            </h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder über ein Kontaktformular
              kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke
              der Bearbeitung Ihres Anliegens bei uns gespeichert und
              verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung
              weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
              eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
              Fällen beruht die Verarbeitung auf unserem berechtigten Interesse
              an der effektiven Bearbeitung der an uns gerichteten Anfragen
              (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde. Die von Ihnen
              an uns per Kontaktanfragen übersandten Daten verbleiben bei uns,
              bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
              Speicherung widerrufen oder der Zweck für die Datenspeicherung
              entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens).
              Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche
              Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-xl">Kommunikation via WhatsApp</h3>
            <p>
              Wir nutzen den Nachrichtendienst WhatsApp der WhatsApp Ireland
              Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
              Irland, zur Kommunikation mit Kunden und Interessenten. Wenn Sie
              uns über WhatsApp kontaktieren, wird Ihre Telefonnummer sowie die
              im Rahmen der Konversation ausgetauschten Inhalte auf den Servern
              von WhatsApp gespeichert. Wir nutzen WhatsApp zur Bearbeitung
              Ihrer Anfragen und zur Kundenkommunikation. Rechtsgrundlage
              hierfür ist unser berechtigtes Interesse an einer effizienten und
              zeitnahen Kommunikation (Art. 6 Abs. 1 lit. f DSGVO) sowie zur
              Vertragsanbahnung und -erfüllung (Art. 6 Abs. 1 lit. b DSGVO). Die
              Datenübertragung in die USA wird auf die Standardvertragsklauseln
              der EU-Kommission gestützt. Details finden Sie hier:{" "}
              <Link href="https://www.whatsapp.com/legal/business-data-transfer-addendum">
                https://www.whatsapp.com/legal/business-data-transfer-addendum
              </Link>
              . Die von Ihnen über WhatsApp an uns gesendeten Daten verbleiben
              bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
              zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
              entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt. Weitere Informationen
              zum Datenschutz bei WhatsApp finden Sie in der
              Datenschutzrichtlinie von WhatsApp:{" "}
              <Link href="https://www.whatsapp.com/legal/privacy-policy-eea">
                https://www.whatsapp.com/legal/privacy-policy-eea
              </Link>
              .
            </p>
          </TabsContent>
          <TabsContent value="en">
            <h1 className="text-3xl">Privacy Policy</h1>

            <h2 className="text-2xl">1. Data Protection at a Glance</h2>
            <h3 className="text-xl">General Information</h3>
            <p>
              The following notes provide a simple overview of what happens to
              your personal data when you visit this website. Personal data is
              any data with which you can be personally identified. Detailed
              information on the subject of data protection can be found in our
              privacy policy listed under this text.
            </p>

            <h3 className="text-xl">Data Collection on This Website</h3>
            <p>
              <strong>
                Who is responsible for data collection on this website?
              </strong>
              <br />
              Data processing on this website is carried out by the website
              operator. You can find their contact details in the Imprint /
              Legal Notice of this website.
            </p>
            <p>
              <strong>How do we collect your data?</strong>
              <br />
              On the one hand, your data is collected when you provide it to us.
              This can be, for example, data that you enter in a contact form.
              Other data is collected automatically or after your consent when
              you visit the website through our IT systems. This is primarily
              technical data (e.g., internet browser, operating system, or time
              of page view). This data is collected automatically as soon as you
              enter this website.
            </p>
            <p>
              <strong>What do we use your data for?</strong>
              <br />
              Part of the data is collected to ensure the error-free provision
              of the website. Other data can be used to analyze your user
              behavior.
            </p>
            <p>
              <strong>What rights do you have regarding your data?</strong>
              <br />
              You have the right to receive information free of charge at any
              time about the origin, recipient, and purpose of your stored
              personal data. You also have a right to request the correction or
              deletion of this data. If you have given your consent to data
              processing, you can revoke this consent at any time for the
              future. You also have the right, under certain circumstances, to
              request the restriction of the processing of your personal data.
              Furthermore, you have the right to lodge a complaint with the
              competent supervisory authority. For this purpose, as well as for
              further questions on the subject of data protection, you can
              contact us at any time.
            </p>

            <h2 className="text-2xl">
              2. General Information and Mandatory Information
            </h2>
            <h3 className="text-xl">Data Protection</h3>
            <p>
              The operators of these pages take the protection of your personal
              data very seriously. We treat your personal data confidentially
              and in accordance with the statutory data protection regulations
              and this privacy policy. When you use this website, various
              personal data are collected. This privacy policy explains what
              data we collect and what we use it for. It also explains how and
              for what purpose this happens. We would like to point out that
              data transmission over the Internet (e.g., when communicating by
              e-mail) can have security gaps. A complete protection of data
              against access by third parties is not possible.
            </p>

            <h3 className="text-xl">Information on the responsible party</h3>
            <p>
              The responsible party for data processing on this website is:
              <br />
              Frederik Willem Grimm
              <br />
              Teinsiek 23a
              <br />
              24568 Kaltenkirchen
              <br />
              Phone: +49 152 0725430
              <br />
              Email: mail@fwgrimm.com
              <br />
              The responsible party is the natural or legal person who, alone or
              jointly with others, decides on the purposes and means of
              processing personal data (e.g., names, e-mail addresses, etc.).
            </p>

            <h3 className="text-xl">Storage Period</h3>
            <p>
              Unless a more specific storage period has been specified within
              this privacy policy, your personal data will remain with us until
              the purpose for data processing ceases to apply. If you assert a
              legitimate request for deletion or revoke your consent to data
              processing, your data will be deleted, unless we have other
              legally permissible reasons for storing your personal data (e.g.,
              tax or commercial law retention periods); in the latter case, the
              deletion will take place after these reasons cease to apply.
            </p>

            <h3 className="text-xl">
              Revocation of Your Consent to Data Processing
            </h3>
            <p>
              Many data processing operations are only possible with your
              express consent. You can revoke consent you have already given at
              any time. The legality of the data processing carried out until
              the revocation remains unaffected by the revocation.
            </p>

            <h3 className="text-xl">
              Right to Lodge a Complaint with the Competent Supervisory
              Authority
            </h3>
            <p>
              In the event of breaches of the GDPR, data subjects have the right
              to lodge a complaint with a supervisory authority, in particular
              in the Member State of their habitual residence, their place of
              work, or the place of the alleged infringement.
            </p>

            <h3 className="text-xl">Right to Data Portability</h3>
            <p>
              You have the right to have data that we process automatically on
              the basis of your consent or in fulfillment of a contract handed
              over to you or to a third party in a common, machine-readable
              format.
            </p>

            <h3 className="text-xl">Information, Deletion, and Correction</h3>
            <p>
              Within the framework of the applicable legal provisions, you have
              the right at any time to free information about your stored
              personal data, its origin and recipient, and the purpose of the
              data processing and, if applicable, a right to correction or
              deletion of this data.
            </p>

            <h2 className="text-2xl">3. Data Collection on This Website</h2>
            <h3 className="text-xl">Server Log Files</h3>
            <p>
              The provider of the pages automatically collects and stores
              information in so-called server log files, which your browser
              automatically transmits to us. These are:
            </p>
            <ul>
              <li>Browser type and browser version</li>
              <li>Operating system used</li>
              <li>Referrer URL</li>
              <li>Hostname of the accessing computer</li>
              <li>Time of the server request</li>
              <li>IP address</li>
            </ul>
            <p>
              This data is not merged with other data sources. The collection of
              this data is based on Art. 6(1)(f) GDPR. The website operator has
              a legitimate interest in the technically error-free presentation
              and optimization of their website – for this purpose, the server
              log files must be recorded.
            </p>

            <h3 className="text-xl">
              Contact Request by E-mail, Telephone, or Contact Form
            </h3>
            <p>
              If you contact us by e-mail, telephone, or via a contact form,
              your inquiry including all resulting personal data (name, inquiry)
              will be stored and processed by us for the purpose of processing
              your request. We do not pass on this data without your consent.
              The processing of this data is based on Art. 6(1)(b) GDPR, if your
              request is related to the fulfillment of a contract or is
              necessary for the implementation of pre-contractual measures. In
              all other cases, the processing is based on our legitimate
              interest in the effective processing of the inquiries addressed to
              us (Art. 6(1)(f) GDPR) or on your consent (Art. 6(1)(a) GDPR) if
              this has been requested. The data you send to us via contact
              requests will remain with us until you request us to delete it,
              revoke your consent to storage, or the purpose for data storage
              ceases to apply (e.g., after your request has been processed).
              Mandatory statutory provisions – in particular statutory retention
              periods – remain unaffected.
            </p>

            <h3 className="text-xl">Communication via WhatsApp</h3>
            <p>
              We use the messaging service WhatsApp from WhatsApp Ireland
              Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
              Ireland, for communication with customers and interested parties.
              If you contact us via WhatsApp, your phone number and the content
              exchanged during the conversation will be stored on WhatsApp's
              servers. We use WhatsApp to process your inquiries and for
              customer communication. The legal basis for this is our legitimate
              interest in efficient and timely communication (Art. 6(1)(f) GDPR)
              as well as for the initiation and fulfillment of contracts (Art.
              6(1)(b) GDPR). Data transfer to the USA is based on the Standard
              Contractual Clauses of the EU Commission. Details can be found
              here:{" "}
              <Link href="https://www.whatsapp.com/legal/business-data-transfer-addendum">
                https://www.whatsapp.com/legal/business-data-transfer-addendum
              </Link>
              . The data you send to us via WhatsApp will remain with us until
              you request us to delete it, revoke your consent to storage, or
              the purpose for data storage ceases to apply. Mandatory statutory
              provisions – in particular retention periods – remain unaffected.
              For more information on data protection at WhatsApp, please see
              WhatsApp's privacy policy:{" "}
              <Link href="https://www.whatsapp.com/legal/privacy-policy-eea">
                https://www.whatsapp.com/legal/privacy-policy-eea
              </Link>
              .
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </React.Fragment>
  );
}
