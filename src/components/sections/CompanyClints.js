import Image from "next/image";
import AxisBank from "@/../public/Images/Clients/Axis Bank.png";
import BandhanBank from "@/../public/Images/Clients/Bandhan Bank.png";
import BankOfBaroda from "@/../public/Images/Clients/Bank of Baroda.png";
import BankOfIndia from "@/../public/Images/Clients/Bank of India.png";
import BankOfMaharashtra from "@/../public/Images/Clients/Bank of Maharashtra.png";
import Bank from "@/../public/Images/Clients/Bank.png";
import CanaraBank from "@/../public/Images/Clients/Canara Bank.png";
import CatholicSyrianBank from "@/../public/Images/Clients/Catholic Syrian Bank.png";
import CentralBankOfIndia from "@/../public/Images/Clients/Central Bank of India.png";
import CityUnionBank from "@/../public/Images/Clients/City Union Bank.png";
import DevelopmentBankOfSingapore from "@/../public/Images/Clients/Development Bank of Singapore.png";
import DevelopmentCreditBank from "@/../public/Images/Clients/Development Credit Bank.png";
import DhanlaxmiBank from "@/../public/Images/Clients/Dhanlaxmi Bank.png";
import Doctor from "@/../public/Images/Clients/Doctor.png";
import FederalBank from "@/../public/Images/Clients/Federal Bank.png";
import GoodsAndServicesTax from "@/../public/Images/Clients/Goods and Services Tax.png";
import HousingDevelopmentFinanceCorporationBank from "@/../public/Images/Clients/Housing Development Finance Corporation Bank.png";
import IncomeTax from "@/../public/Images/Clients/Income Tax.png";
import IndianAirForce from "@/../public/Images/Clients/Indian Air Force.png";
import IndianArmy from "@/../public/Images/Clients/Indian Army.png";
import IndianBank from "@/../public/Images/Clients/Indian Bank.png";
import IndianOverseasBank from "@/../public/Images/Clients/Indian Overseas Bank.png";
import IndusIndBank from "@/../public/Images/Clients/IndusInd Bank.png";
import IndustrialCreditAndInvestmentCorporationOfIndia from "@/../public/Images/Clients/Industrial Credit and Investment Corporation of India.png";
import IndustrialDevelopmentBankOfIndia from "@/../public/Images/Clients/Industrial Development Bank of India.png";
import InfrastructureDevelopmentFinanceCompanyFirstBank from "@/../public/Images/Clients/Infrastructure Development Finance Company FIRST Bank.png";
import JammuAndKashmirBank from "@/../public/Images/Clients/Jammu and Kashmir Bank.png";
import KarnatakaBank from "@/../public/Images/Clients/Karnataka Bank.png";
import KarurVysyaBank from "@/../public/Images/Clients/Karur Vysya Bank.png";
import KotakMahindraBank from "@/../public/Images/Clients/Kotak Mahindra Bank.png";
import NainitalBank from "@/../public/Images/Clients/Nainital Bank.png";
import PowerGridCorporationOfIndia from "@/../public/Images/Clients/Power Grid Corporation of India.png";
import PunjabAndSindBank from "@/../public/Images/Clients/Punjab and Sind Bank.png";
import PunjabNationalBank from "@/../public/Images/Clients/Punjab National Bank.png";
import RatnakarBankLimited from "@/../public/Images/Clients/Ratnakar Bank Limited.png";
import ReserveBankOfIndia from "@/../public/Images/Clients/Reserve Bank of India.png";
import SouthIndianBank from "@/../public/Images/Clients/South Indian Bank.png";
import StateBankOfIndia from "@/../public/Images/Clients/State Bank of India.png";
import TamilnadMercantileBank from "@/../public/Images/Clients/Tamilnad Mercantile Bank.png";
import UnionBankOfIndia from "@/../public/Images/Clients/Union Bank of India.png";
import UnitedCommercialBank from "@/../public/Images/Clients/United Commercial Bank.png";
import YesBankLimited from "@/../public/Images/Clients/YES Bank Limited.png";
const clients = [
  { name: "Axis Bank", img: AxisBank },
  { name: "Bandhan Bank", img: BandhanBank },
  { name: "Bank of Baroda", img: BankOfBaroda },
  { name: "Bank of India", img: BankOfIndia },
  { name: "Bank of Maharashtra", img: BankOfMaharashtra },
  { name: "Bank", img: Bank },
  { name: "Canara Bank", img: CanaraBank },
  { name: "Catholic Syrian Bank", img: CatholicSyrianBank },
  { name: "Central Bank of India", img: CentralBankOfIndia },
  { name: "City Union Bank", img: CityUnionBank },
  { name: "Development Bank of Singapore", img: DevelopmentBankOfSingapore },
  { name: "Development Credit Bank", img: DevelopmentCreditBank },
  { name: "Dhanlaxmi Bank", img: DhanlaxmiBank },
  { name: "Doctor", img: Doctor },
  { name: "Federal Bank", img: FederalBank },
  { name: "Goods and Services Tax", img: GoodsAndServicesTax },
  { name: "Housing Development Finance Corporation Bank", img: HousingDevelopmentFinanceCorporationBank },
  { name: "Income Tax", img: IncomeTax },
  { name: "Indian Air Force", img: IndianAirForce },
  { name: "Indian Army", img: IndianArmy },
  { name: "Indian Bank", img: IndianBank },
  { name: "Indian Overseas Bank", img: IndianOverseasBank },
  { name: "IndusInd Bank", img: IndusIndBank },
  { name: "Industrial Credit and Investment Corporation of India", img: IndustrialCreditAndInvestmentCorporationOfIndia },
  { name: "Industrial Development Bank of India", img: IndustrialDevelopmentBankOfIndia },
  { name: "Infrastructure Development Finance Company FIRST Bank", img: InfrastructureDevelopmentFinanceCompanyFirstBank },
  { name: "Jammu and Kashmir Bank", img: JammuAndKashmirBank },
  { name: "Karnataka Bank", img: KarnatakaBank },
  { name: "Karur Vysya Bank", img: KarurVysyaBank },
  { name: "Kotak Mahindra Bank", img: KotakMahindraBank },
  { name: "Nainital Bank", img: NainitalBank },
  { name: "Power Grid Corporation of India", img: PowerGridCorporationOfIndia },
  { name: "Punjab and Sind Bank", img: PunjabAndSindBank },
  { name: "Punjab National Bank", img: PunjabNationalBank },
  { name: "Ratnakar Bank Limited", img: RatnakarBankLimited },
  { name: "Reserve Bank of India", img: ReserveBankOfIndia },
  { name: "South Indian Bank", img: SouthIndianBank },
  { name: "State Bank of India", img: StateBankOfIndia },
  { name: "Tamilnad Mercantile Bank", img: TamilnadMercantileBank },
  { name: "Union Bank of India", img: UnionBankOfIndia },
  { name: "United Commercial Bank", img: UnitedCommercialBank },
  { name: "YES Bank Limited", img: YesBankLimited },
];

export default function CompanyClints() {
  const doubled = [...clients, ...clients];

  return (
    <section className="bg-orange-500 pt-10 border-y  border-neutral-100  overflow-hidden">

      <div className="max-w-7xl  mx-auto">

        <div className="flex flex-col  w-full justify-center items-center gap-8  border-b border-slate-100 pb-12">

          <h3 className="text-5xl md:text-7xl font-black text-white tracking-wide  leading-[0.95]">
            OUR VALUABLE CLIENTS
          </h3>

        </div>


        <div className="marquee-track bg-white flex-1  flex items-center  py-4">
          {doubled.map((client, i) => (
            <div
              key={i}
              className=" shrink-0 flex  overflow-hidden items-center justify-center px-2 group"
            >
              <div className="flex items-center justify-center h-32 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <Image
                  width={100}
                  height={100}
                  src={client.img}
                  alt={client.title}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>



    </section>
  );
}