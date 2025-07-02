import React from "react";
import BookingForm from "./BookingForm";
import SidebarInfo from "../SideBarInfo";
import BookingHelp from "./BookingHelp";
import BookingHero from "./BookingHero";

const BookingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <BookingHero/>
          <BookingForm />
          <BookingHelp />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
