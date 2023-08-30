import React from "react";
import Footer from "./Footer";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function GetHelp() {
  return (
    <div className="font-sans">
      <Link href={"/"}>
        <Button variant={"link"}>Back Home</Button>
      </Link>
      <div className="px-12 font-sans mt-4 flex flex-col">
        <div>
          <h1 className="text-center font-bold uppercase text-xl md:text-3xl underline mb-2">
            Get Help
          </h1>

          <p className="text-muted-foreground text-center mb-2">
            In need of Help?
          </p>
          <p className="text-muted-foreground text-center mb-2">
            Let us Know How We can Help You
          </p>
        </div>

        <div>
          <h4 className="text-center">Here are some help lines for you</h4>

          <Table>
            <TableCaption>A list of Helpful Lines</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Region</TableHead>
                <TableHead className="text-right">Contact</TableHead>
                <TableHead className="text-right">Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">GHS</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Accra</TableCell>
                <TableCell className="text-right">
                  +233 302 682709 / info@ghs.gov.gh{" "}
                </TableCell>
                <TableCell className="text-right">
                  Ghana Health Service, PMB, Ministries, Accra
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell className="text-right">
                  +233 302 687821 / info@ghs.gov.gh
                </TableCell>
                <TableCell className="text-right">
                  Opposite Tema Station, Osu, Accra
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-center items-center mt-6 h-[800px] shadow-md mb-6">
          <iframe
            src="https://ghs.gov.gh/contact/"
            title="Ghana Health Service Contact Page"
            className="w-full rounded-md h-full"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GetHelp;
