import Image from "next/image";
import AxisBank from "@/assets/images/Clients/Axis Bank.png";
import BandhanBank from "@/assets/images/Clients/Bandhan Bank.png";
import BankOfBaroda from "@/assets/images/Clients/Bank of Baroda.png";
import BankOfIndia from "@/assets/images/Clients/Bank of India.png";
import BankOfMaharashtra from "@/assets/images/Clients/Bank of Maharashtra.png";
import Bank from "@/assets/images/Clients/Bank.png";
import CanaraBank from "@/assets/images/Clients/Canara Bank.png";
import CatholicSyrianBank from "@/assets/images/Clients/Catholic Syrian Bank.png";
import CentralBankOfIndia from "@/assets/images/Clients/Central Bank of India.png";
import CityUnionBank from "@/assets/images/Clients/City Union Bank.png";
import DevelopmentBankOfSingapore from "@/assets/images/Clients/Development Bank of Singapore.png";
import DevelopmentCreditBank from "@/assets/images/Clients/Development Credit Bank.png";
import DhanlaxmiBank from "@/assets/images/Clients/Dhanlaxmi Bank.png";
import Doctor from "@/assets/images/Clients/Doctor.png";
import FederalBank from "@/assets/images/Clients/Federal Bank.png";
import GoodsAndServicesTax from "@/assets/images/Clients/Goods and Services Tax.png";
import HousingDevelopmentFinanceCorporationBank from "@/assets/images/Clients/Housing Development Finance Corporation Bank.png";
import IncomeTax from "@/assets/images/Clients/Income Tax.png";
import IndianAirForce from "@/assets/images/Clients/Indian Air Force.png";
import IndianArmy from "@/assets/images/Clients/Indian Army.png";
import IndianBank from "@/assets/images/Clients/Indian Bank.png";
import IndianOverseasBank from "@/assets/images/Clients/Indian Overseas Bank.png";
import IndusIndBank from "@/assets/images/Clients/IndusInd Bank.png";
import IndustrialCreditAndInvestmentCorporationOfIndia from "@/assets/images/Clients/Industrial Credit and Investment Corporation of India.png";
import IndustrialDevelopmentBankOfIndia from "@/assets/images/Clients/Industrial Development Bank of India.png";
import InfrastructureDevelopmentFinanceCompanyFirstBank from "@/assets/images/Clients/Infrastructure Development Finance Company FIRST Bank.png";
import JammuAndKashmirBank from "@/assets/images/Clients/Jammu and Kashmir Bank.png";
import KarnatakaBank from "@/assets/images/Clients/Karnataka Bank.png";
import KarurVysyaBank from "@/assets/images/Clients/Karur Vysya Bank.png";
import KotakMahindraBank from "@/assets/images/Clients/Kotak Mahindra Bank.png";
import NainitalBank from "@/assets/images/Clients/Nainital Bank.png";
import PowerGridCorporationOfIndia from "@/assets/images/Clients/Power Grid Corporation of India.png";
import PunjabAndSindBank from "@/assets/images/Clients/Punjab and Sind Bank.png";
import PunjabNationalBank from "@/assets/images/Clients/Punjab National Bank.png";
import RatnakarBankLimited from "@/assets/images/Clients/Ratnakar Bank Limited.png";
import ReserveBankOfIndia from "@/assets/images/Clients/Reserve Bank of India.png";
import SouthIndianBank from "@/assets/images/Clients/South Indian Bank.png";
import StateBankOfIndia from "@/assets/images/Clients/State Bank of India.png";
import TamilnadMercantileBank from "@/assets/images/Clients/Tamilnad Mercantile Bank.png";
import UnionBankOfIndia from "@/assets/images/Clients/Union Bank of India.png";
import UnitedCommercialBank from "@/assets/images/Clients/United Commercial Bank.png";
import YesBankLimited from "@/assets/images/Clients/YES Bank Limited.png";
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