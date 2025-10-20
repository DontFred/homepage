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
            <h1 className="text-3xl">Impressum</h1>

            <h2 className="text-2xl">Angaben gemäß § 5 DDG</h2>
            <p>
              Frederik Willem Grimm
              <br />
              Teinsiek 23a
              <br />
              24568 Kaltenkirchen
              <br />
              Deutschland
            </p>

            <h2 className="text-2xl">Kontakt</h2>
            <p>
              Telefon: +49 152 0725430
              <br />
              E-Mail: mail@fwgrimm.com
            </p>

            <h2 className="text-2xl">Redaktionell verantwortlich</h2>
            <p>
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
              <br />
              Frederik Willem Grimm
              <br />
              Teinsiek 23a
              <br />
              24568 Kaltenkirchen
            </p>

            <h2 className="text-2xl">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <Link href="https://ec.europa.eu/consumers/odr/">
                https://ec.europa.eu/consumers/odr/
              </Link>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2 className="text-2xl">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </TabsContent>
          <TabsContent value="en">
            <h1 className="text-3xl">Imprint / Legal Notice</h1>

            <h2 className="text-2xl">
              Information pursuant to § 5 DDG (German Digital Services Act)
            </h2>
            <p>
              Frederik Willem Grimm
              <br />
              Teinsiek 23a
              <br />
              24568 Kaltenkirchen
              <br />
              Germany
            </p>

            <h2 className="text-2xl">Contact</h2>
            <p>
              Phone: +49 152 0725430
              <br />
              Email: mail@fwgrimm.com
            </p>

            <h2 className="text-2xl">VAT ID</h2>
            <p>
              As a small business owner according to § 19 UStG (German VAT Act),
              no VAT ID is displayed.
            </p>

            <h2 className="text-2xl">
              Responsible for the content according to § 18 Abs. 2 MStV (German
              State Media Treaty)
            </h2>
            <p>
              Frederik Willem Grimm
              <br />
              Teinsiek 23a
              <br />
              24568 Kaltenkirchen
            </p>

            <h2 className="text-2xl">EU Dispute Resolution</h2>
            <p>
              The European Commission provides a platform for online dispute
              resolution (ODR):
              <Link href="https://ec.europa.eu/consumers/odr/">
                https://ec.europa.eu/consumers/odr/
              </Link>
              .<br />
              You can find our email address in the imprint above.
            </p>

            <h2 className="text-2xl">
              Consumer Dispute Resolution/Universal Arbitration Board
            </h2>
            <p>
              We are not willing or obliged to participate in dispute resolution
              proceedings before a consumer arbitration board.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </React.Fragment>
  );
}
