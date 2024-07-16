import Banner from "@/components/Home/Banner";
import Promotion from "@/components/Home/Promotion";

export default function Home() {
  return (
  <>
    <Banner/>
    <div className="mx-auto max-w-[90%]">
    <Promotion/>
          
    </div>
  </>
  );
}
