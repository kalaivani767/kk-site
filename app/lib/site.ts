export const SITE = {
  name: "KALAIVANI",
  fullName: "Kalaivani Real Estate",
  email: "kalaivanirealestate2026@gmail.com",
  officePhone: { display: "95142-26547", tel: "+919514226547" },
  mobilePhone: { display: "97889-44550", tel: "+919788944550" },
  addressLines: [
    "627, Chennai Salai,",
    "Thonnaiyan kottai,",
    "Krishnagiri Town,",
    "Krishnagiri Taluk & District,",
    "Tamil Nadu – 635001.",
  ],
  workingHours: {
    days: "Monday – Sunday",
    time: "10:00 AM – 6:00 PM",
    holiday: "Tuesday: Holiday",
  },
  // TODO: paste the client's real profile URLs. Links with an empty URL are hidden.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
} as const;

const COORDINATES = "12.523109436035156,78.23064422607422";

export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${COORDINATES}&z=17&hl=en&output=embed`;

export const MAPS_DIRECTIONS_HREF = `https://www.google.com/maps/dir/?api=1&destination=${COORDINATES}`;
