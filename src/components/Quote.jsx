import { QuoteIcon } from "lucide-react";

const Quote = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-200">
      <div className="bg-indigo-800 w-[80%] h-[70%] text-white/80 p-20 text-2xl tracking-wide font-semibold rounded-3xl shadow-2xl flex flex-col justify-center">
        
        <div className="flex items-start gap-6">
          <QuoteIcon size={58} className="text-yellow-400 shrink-0" /><br />
          <p className="leading-relaxed text-white/80">
            At Nestlé, we believe in the promise of
            <span className="text-red-500 hover:text-yellow-400 cursor-pointer">
              {" "}
              <i>‘Good Food, Good Life.’</i>
            </span>{" "}
            This promise starts long before our products reach your table,
            rooted in the vital partnerships with our farmers, suppliers, and
            communities. We are committed to nurturing these relationships
            through fair practices and sustainable innovation, ensuring that the
            nourishment we provide not only tastes good but also contributes to
            a healthier planet and a better life for all.
          </p>
        </div>

        <div className="mt-10 text-right">
          <h2 className="text-yellow-400 font-bold text-2xl">
            Mark Schneider, CEO
          </h2>
          <p className="text-white/70">Nestlé S.A.</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
