import { Mail, MapPin, Phone } from "lucide-react";
import { foundationDetails } from "@/lib/constants";

const InfoHeader = () => {
  const iconClass = "w-4 h-4 sm:w-4 sm:h-4 lg:w-4 lg:h-4";
  return (
    <>
      <div className="w-10/12 mx-3 md:mx-auto py-3 md:flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 hidden">
        {/* Email */}
        <div className="flex items-center gap-2">
          <span className="bg-lime-600 text-white p-2 sm:p-2.5 lg:p-3 rounded-lg flex items-center justify-center">
            <Mail className={iconClass} />
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-xs sm:text-sm">Email</span>
            <span className="text-xs sm:text-sm font-light">
              {foundationDetails.email}
            </span>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <span className="bg-lime-600 text-white p-2 sm:p-2.5 lg:p-3 rounded-lg flex items-center justify-center">
            <Phone className={iconClass} />
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-xs sm:text-sm">Phone No.</span>
            <span className="text-xs sm:text-sm font-light">
              {foundationDetails.phone}
            </span>
          </div>
        </div>

        {/* Registration */}
        <div className="flex items-center gap-2">
          <span className="bg-lime-600 text-white p-2 sm:p-2.5 lg:p-3 rounded-lg flex items-center justify-center">
            <MapPin className={iconClass} />
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-xs sm:text-sm">
              Registration No.
            </span>
            <span className="text-xs sm:text-sm font-light">
              {foundationDetails.regNo}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoHeader;
