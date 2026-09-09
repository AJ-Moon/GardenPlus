export type CompletedProject = {
  name: string;
  detail?: string;
};

// Preserve the owner's order and wording. No completion dates or inferred locations.
export const completedProjects: CompletedProject[] = [
  { name: "Sapphire Electric", detail: "234 MW Power Plant, Sheikhupura" },
  {
    name: "Farmhouse of Mr. Zafar Bhatti & Green Earth Villas",
    detail: "Bedian Road, Lahore",
  },
  { name: "Tricon Village Housing Scheme", detail: "Lahore" },
  { name: "Medipak / Dr. Khalid Ch. Farmhouse", detail: "Manga Mandi, Lahore" },
  {
    name: "D.G. Khan Cement Factory",
    detail: "Kallar Kahar, Khairpur, District Chakwal",
  },
  { name: "Residence of Mr. Yahya Saleem", detail: "Main Canal Road, Lahore" },
  { name: "Lahore American School (LAS)", detail: "Lahore" },
  { name: "ICI Paints", detail: "Ferozepur Road, Lahore" },
  { name: "SNOHS A Block Park", detail: "Lahore" },
  { name: "Prime Tannery", detail: "G.T. Road, Muridke" },
  {
    name: "Blue Horizon Factory Residence of Mr. Abid Qureshi & Ahsan Q.",
    detail: "Sialkot",
  },
  { name: "Residence of Mr. Nasim Shafi", detail: "124-W, DHA" },
  { name: "Residence of Mian Azam Saigol", detail: "Gulberg, Lahore" },
  { name: "Style Textile", detail: "Style Apparel Park (SAP)" },
  { name: "Style Textile", detail: "Raiwind" },
  { name: "Style Textile", detail: "Manga" },
  { name: "Style Textile", detail: "Head Office" },
  { name: "Sapphire Finishing Mills", detail: "Raiwind" },
  { name: "Beacon Impex / Masood Textile Mills", detail: "Faisalabad" },
  { name: "Diamond Fabrics", detail: "Ferozewatwan" },
  { name: "Halmore Head Office", detail: "DHA" },
  { name: "Mindbridge / Residence of Mr. Danish", detail: "Lahore Cantt" },
  { name: "Arbisoft Office", detail: "Indoor Plantation" },
  { name: "Medequips", detail: "Indoor Plantation" },
  { name: "Naveena Tower & Residence", detail: "Gulberg" },
  { name: "Gulf Packaging", detail: "Adda Plot" },
  { name: "Residence of Mr. Fahad Saigol", detail: "Phase 6, DHA" },
  {
    name: "Residence of Dr. Shujaat Nadeem of Samba Bank",
    detail: "Lahore Cantt",
  },
  { name: "Clinix" },
  { name: "Kamal Textile" },
  { name: "Masterfoam" },
  { name: "Qureshi Farm", detail: "Adda Plot" },
  { name: "EHS", detail: "Eastern Housing Society" },
];
