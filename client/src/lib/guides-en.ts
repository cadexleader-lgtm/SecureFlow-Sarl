// English versions of the practical guides (/en/guides/<slug>).
import type { GuideText } from "./guides";

export const GUIDES_EN: Record<string, GuideText> = {
  "verifier-fournisseur-chinois": {
    title: "How to verify a Chinese supplier before you pay",
    metaTitle: "How to verify a Chinese supplier before paying (guide)",
    description: "Business licence, unified social credit code, bank account, factory or trading company: the checks to run before paying a supplier in China.",
    intro: "Sourcing from China is often worthwhile, but paying a supplier you have never met is the riskiest moment of the deal. Here are the checks to run, in order, before sending any deposit.",
    sections: [
      {
        h2: "1. Ask for and check the business licence",
        paragraphs: [
          "Every Chinese company holds a business licence (营业执照) showing an 18-character unified social credit code (统一社会信用代码). Ask for a legible copy.",
          "Then check the details on the National Enterprise Credit Information Publicity System (gsxt.gov.cn): company name, date of incorporation, capital, legal representative, status and business scope. The company invoicing you must match the licence exactly.",
        ],
      },
      {
        h2: "2. Factory or trading company?",
        paragraphs: [
          "Many sellers present themselves as manufacturers when they are trading companies. That is not necessarily a problem, but you need to know: pricing, lead times, quality control and recourse are not the same.",
          "The business scope on the licence, the address (industrial zone or city office) and a live video tour of the production line are good indicators.",
        ],
      },
      {
        h2: "3. Check the payment bank account",
        list: [
          "The account must be in the exact name of the company on the licence and the invoice.",
          "Be wary of requests to pay into a personal account or a different company's account.",
          "A change of bank details announced by email is a classic red flag: always confirm it through another channel.",
        ],
      },
      {
        h2: "4. Check real capacity to deliver",
        paragraphs: [
          "Ask for references, dated photos and videos of production, product certificates where your goods require them, and order samples. For a large order, an on-site visit or audit remains the only way to see the factory's real capacity.",
        ],
      },
      {
        h2: "5. Secure the payment terms",
        paragraphs: [
          "Avoid paying 100% upfront. A common practice is to pay a deposit, then the balance against proof of shipment or after the goods have been inspected. For large amounts, a documentary letter of credit offers a more protective framework.",
          "Tie every payment to concrete evidence: inspection report, shipping documents, bill of lading.",
        ],
      },
    ],
    faq: [
      { q: "How do I check a Chinese company's business licence?", a: "Note the 18-character unified social credit code on the business licence and search for it on the national system gsxt.gov.cn: the company name, legal representative and status must match the documents you received." },
      { q: "Can I pay a Chinese supplier into a personal account?", a: "It is strongly discouraged: the account must be in the name of the company invoicing you. A personal or third-party account is a red flag." },
      { q: "Can SecureFlow verify a supplier in China for me?", a: "Yes. SecureFlow performs legal identification, physical existence checks, capacity analysis and compliance audits, and goes on site when needed." },
    ],
  },
  "inspection-avant-expedition": {
    title: "Pre-shipment inspection: what it is for and how it works",
    metaTitle: "Pre-shipment inspection: what it is and how it works",
    description: "Why have your goods inspected before shipment, what is checked, when to do it and how to read the inspection report.",
    intro: "Once the goods have left, it is too late: a defect found on arrival is hard to resolve, far from the supplier and after payment. A pre-shipment inspection shows the real state of the order while there is still time to act.",
    sections: [
      {
        h2: "What is a pre-shipment inspection for?",
        paragraphs: [
          "It checks, at the supplier's premises and before departure, that the goods match your order: quantity, compliance with specifications, condition and packaging. It is also objective evidence on which to make the balance payment conditional.",
        ],
      },
      {
        h2: "What is checked",
        list: [
          "Quantities produced and packed against the order.",
          "Product compliance: dimensions, materials, references, markings.",
          "Visible defects and overall condition, on a randomly drawn sample.",
          "Packaging, labelling and carton marking.",
          "If needed, supervision of container loading.",
        ],
      },
      {
        h2: "When should it be done?",
        paragraphs: [
          "It is usually done when production is finished or nearly finished and most of the goods are packed, so that a representative sample can be examined. For long or sensitive orders, a check during production allows earlier corrections.",
          "Inspectors often rely on standard sampling plans, such as ISO 2859-1, to decide how many pieces to examine.",
        ],
      },
      {
        h2: "Reading the report and deciding",
        paragraphs: [
          "A good report is dated, illustrated with photos and clearly states any deviations found. You can then accept shipment, ask for corrections before departure, or hold the balance payment.",
        ],
      },
    ],
    faq: [
      { q: "Who pays for a pre-shipment inspection?", a: "Usually the buyer, since the buyer needs it for protection. Terms can be set out in the contract with the supplier." },
      { q: "Does an inspection guarantee the goods arrive intact?", a: "No: it records the condition of the goods at departure. Transport is then secured through logistics supervision and compliance checks on arrival." },
      { q: "Does SecureFlow carry out on-site inspections?", a: "Yes: physical stock checks, facility inspections, quality process validation and detailed reports with visual evidence." },
    ],
  },
  "arnaque-fournisseur-import-signaux-alerte": {
    title: "Import scams: the red flags to know",
    metaTitle: "Supplier scams in importing: the red flags",
    description: "Prices that are too low, payment to a personal account, bank details changed by email, pressure to pay fast: how to spot a supplier scam before paying.",
    intro: "Import scams almost always follow the same patterns. Recognising them before you pay is the best protection. Here are the signals that should make you slow down.",
    sections: [
      {
        h2: "The most common red flags",
        list: [
          "A price well below the market, with no credible explanation.",
          "Payment requested into a personal account or the account of a company other than the one invoicing.",
          "Bank details changed by email, often at the last minute.",
          "Strong pressure to pay quickly: \"last stock\", \"price valid today only\".",
          "Refusal of a visit, a live video call in the factory or a pre-shipment inspection.",
          "Inconsistent documents: names, addresses or registration numbers that do not match.",
          "A free email address or a very recent website for a company claiming to be established.",
          "A middleman who refuses to put you in contact with the manufacturer.",
        ],
      },
      {
        h2: "Classic scam patterns",
        paragraphs: [
          "The fake supplier takes the deposit and disappears. Identity theft reuses the name of a real factory with different bank details. Substitution delivers goods of lower quality than the sample. Email hijacking intercepts a genuine conversation to change payment details.",
        ],
      },
      {
        h2: "How to protect yourself",
        list: [
          "Verify the company and its bank account before any payment.",
          "Never change bank details without confirmation through another channel.",
          "Tie every payment to evidence: inspection, shipping documents.",
          "Have the goods inspected before they leave.",
          "For large amounts, use a trusted third party to frame the transaction.",
        ],
      },
    ],
    faq: [
      { q: "How can I tell if a supplier is a scam?", a: "Combine checks: legal existence of the company, consistent documents, a bank account in the company's name, a factory visit or video call, a pre-shipment inspection. A refusal on any of these points is a red flag." },
      { q: "What if I have already paid a fake supplier?", a: "Contact your bank immediately to try to stop or recall the transfer, keep all evidence and file a police report. The faster you act, the better your chances." },
      { q: "Does a trusted third party guarantee I will not be scammed?", a: "No intermediary removes all risk. SecureFlow greatly reduces it by verifying partners and framing payments, without being an insurer or financial guarantor." },
    ],
  },
  "importer-port-de-cotonou": {
    title: "Importing through the port of Cotonou: securing your goods from purchase to delivery",
    metaTitle: "Importing through the port of Cotonou safely: the guide",
    description: "Documents, steps and points to watch: how to secure an import through the port of Cotonou, from ordering from the supplier to final delivery.",
    intro: "The port of Cotonou is Benin's main maritime gateway and also serves neighbouring landlocked countries. An import passing through it is secured step by step, well before the vessel arrives.",
    sections: [
      {
        h2: "Before shipment: secure the purchase",
        list: [
          "Verify the supplier and its bank account before paying.",
          "Agree the Incoterm clearly (who pays for and bears what, and up to which point).",
          "Have the goods inspected and, where possible, supervise container loading.",
        ],
      },
      {
        h2: "The documents you need",
        list: [
          "The bill of lading, which lets you collect the goods.",
          "The commercial invoice and the packing list.",
          "The certificate of origin and, depending on the products, sanitary, phytosanitary or conformity certificates.",
        ],
        paragraphs: [
          "Inconsistencies between these documents are a frequent cause of delays and extra costs: check them before the goods arrive.",
        ],
      },
      {
        h2: "On arrival at the port",
        paragraphs: [
          "Customs clearance is generally handled by a licensed customs broker. Plan for the timelines and follow progress: every day the goods stay at the port can generate costs.",
          "On exit, check that the goods comply: do they match what was loaded at departure? This is when substitution or loss is detected.",
        ],
      },
      {
        h2: "Through to final delivery",
        paragraphs: [
          "Road transport, to a city in Benin or a neighbouring country, is still a step to watch. Supervision through to the delivery point reduces the risk of loss and diversion.",
        ],
      },
    ],
    faq: [
      { q: "Which documents are needed to import into Benin?", a: "At least the bill of lading, commercial invoice, packing list and certificate of origin, plus any specific certificates required by the nature of the products." },
      { q: "How can I avoid delays at the port of Cotonou?", a: "Prepare consistent documents before arrival, choose a reliable customs broker and follow each customs step." },
      { q: "Does SecureFlow work at the port of Cotonou?", a: "Yes. SecureFlow is headquartered in Cotonou: we supervise port operations and check documentation and cargo compliance through to final delivery." },
    ],
  },
};
