// import { LocaleString } from "@/typings";
import React from "react";
import MapBoxMap from "./MapBoxMap";
import PhoneIcon from "../../icons/phoneIcon";
import MailIcon from "../../icons/mailIcon";
import LocationMarkerIcon from "../../icons/locationMarkerIcon";
import { motion } from "framer-motion";

type Props = {
  header?: string;
  subheader?: string;
  latitude: number;
  longitude: number;
  enquiryPhoneNumber: string;
  enquiryEmail: string;
  enquiryAddressLine1: string;
  enquiryAddressLine2: string;
  enquiryAddressLine3: string;
  languageSelected: string;
};

const MapBox = ({
  header,
  subheader,
  latitude,
  longitude,
  enquiryPhoneNumber,
  enquiryEmail,
  enquiryAddressLine1,
  enquiryAddressLine2,
  enquiryAddressLine3,
  languageSelected,
}: Props) => {
  return (
    <section className="flex max-w-7xl flex-col items-center justify-center px-4 py-8 md:px-4 md:py-16">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0, ease: "easeOut" }}
          className="text-h4 uppercase text-tw-black md:pb-4 md:text-h3"
        >
          {header}
        </motion.h2>
        {subheader && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
            className="pb-2 text-sh2 uppercase text-tw-black/70 md:pb-6 md:text-sh1"
          >
            {subheader}
          </motion.div>
        )}
      </div>
      <div className="grid max-w-7xl grid-cols-1 items-center justify-items-center gap-x-16 pb-8 md:grid-cols-2 md:justify-items-start lg:grid-cols-5">
        {/* Map */}
        {/* <div>
        {header} {subheader}
      </div> */}
        <div className="my-4 h-full max-h-[500px] min-h-[280px] w-full overflow-hidden rounded-2xl  md:my-0 lg:col-span-3 lg:min-h-[480px]">
          <MapBoxMap latitude={latitude} longitude={longitude} />
        </div>

        {/* Information */}
        <div className="my-4 lg:col-span-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-y-3 pb-8"
          >
            <h3 className="text-h4 uppercase text-tw-text-black">
              {languageSelected === "en" ? "General Enquiry" : "一般查询"}
            </h3>
            <div className="flex items-center gap-8 font-secondary text-tw-primary-dark">
              <div>
                <PhoneIcon />
              </div>
              <div>{enquiryPhoneNumber}</div>
            </div>
            <div className="flex items-center gap-8 font-secondary text-tw-primary-dark">
              <div>
                <MailIcon />
              </div>
              <div>{enquiryEmail}</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.75, ease: "easeOut" }}
            className="flex flex-col gap-y-3 pb-8"
          >
            <h3 className="text-h4 uppercase text-tw-text-black">
              {languageSelected === "en" ? "Address" : "地址"}
            </h3>
            <div className="flex gap-8 font-secondary text-tw-primary-dark">
              <div className="pt-1">
                <LocationMarkerIcon width={16} height={16} />
              </div>
              <div className="flex flex-col gap-y-3">
                <div>{enquiryAddressLine1}</div>
                <div>{enquiryAddressLine2}</div>
                <div>{enquiryAddressLine3}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapBox;
