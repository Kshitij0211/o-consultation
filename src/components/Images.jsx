import consultationImg from "../assets/consultation.jpg";
import doctor1 from "../assets/doctor1.png";
import derma from '../assets/svg/derma.png'
import internalMedicine from '../assets/svg/internalMedicine.png'
import neurology from '../assets/svg/neurology.png'
import generalMedicine from '../assets/svg/generalMedicine.png'
import dentist from '../assets/svg/dentist.png'
import ear from '../assets/svg/ear.png'
import hiv from '../assets/svg/hiv.png'
import kidneys from '../assets/svg/kidneys.png'
import allergy from '../assets/svg/allergy.png'
import pediatrics from '../assets/svg/pediatrics.png'
import stomach from '../assets/svg/stomach.png'
import virus from '../assets/svg/virus.png'
import bestDoctor1 from '../assets/bestDoctor1.png'
import bestDoctor2 from '../assets/bestDoctor2.png'
import bestDoctor3 from '../assets/bestDoctor3.png'
import bestDoctor4 from '../assets/bestDoctor4.png'
import bestDoctor5 from '../assets/bestDoctor5.png'
import profile1 from "../assets/profile1.jpg"
import profile2 from "../assets/profile2.jpg"
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import consultant from '../assets/svg/consultant.png'
import patient from '../assets/svg/patient.png'
import medicalClinic from "../assets/medicalClinic.jpg"

export const Consultation = () => {
  return (
    <img
      className="rounded-sm w-full lg:h-[80svh] shadow-md"
      src={consultationImg}
    />
  );
};

export const HomeDoctor = () => {
  return (
    <img
      src={doctor1}
      className="relative h-[90svh] flex-grow hidden lg:flex"
    />
  );
};

export const SpecIcons = ({ iconName }) => {

  const icons = { derma, internalMedicine, neurology, hiv, virus, generalMedicine, kidneys, dentist, ear, allergy, pediatrics, stomach };

  return (
    <img src={icons[iconName]} />
  )
}

export const DoctorProfile = ({ doctor }) => {

  const doctors = { bestDoctor1, bestDoctor2, bestDoctor3, bestDoctor4, bestDoctor5 };

  return (
    <img
      src={doctors[doctor]}
      alt="card image"
      className="aspect-square object-cover items-baseline doctorProfileImage"
    />
  )
}

export const UserProfile = ({ user }) => {

  const users = { profile1, profile2 };

  return (
    <img
      src={users[user]}
      alt="user name"
      title="user name"
      className="rounded-full md:h-16 md:w-16 h-6 w-6 shrink-0 object-cover shadow-md shadow-gray-500"
    />
  )
}

export const GITIcons = ({ userType }) => {

  const icon = { consultant, patient }

  return (
    <img src={icon[userType]} alt={`${userType}SVG`} className="block h-10 xl:h-12 drop-shadow-[0_6px_6px_#164dcc50] group-hover:-translate-x-0.5 transition-all duration-700" />

  )
}

export const GITImage = () => {

  return (
    <img
      src={medicalClinic}
      alt="card image"
      className="w-full h-full object-cover"
    />
)}

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = [consultationImg, doctor1, derma, internalMedicine, neurology, hiv, virus, generalMedicine, kidneys, dentist, ear, allergy, pediatrics, stomach, bestDoctor1, bestDoctor2, bestDoctor3, bestDoctor4, bestDoctor5, profile1, profile2, consultant, patient, medicalClinic]

    const imagePromises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve; // Resolve even on error
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoading(false); // Images are loaded, hide preloader
    });
  }, []);

  return loading ? (
    <div className="fixed top-0 left-0 w-svw h-svh flex flex-col justify-center items-center z-[9999] bg-white gap-y-3">
      <AiOutlineLoading3Quarters className="h-20 w-20 animate-spin text-sky-700" />
      <span className="text-xl font-bold text-sky-800">Loading...</span>
    </div>
  ) : null;
};

export default Preloader;