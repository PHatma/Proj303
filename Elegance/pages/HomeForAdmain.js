import { onAuthStateChanged } from "firebase/auth";
import ClothesList from "../Components/Clothes/ClothesList";
import { auth } from "../db/Config";
import { useState, useEffect } from "react";
import Clothes from "../Components/Clothes/ClothesList";
export default function HomeForAdmain({navigation}) {
  return ( 
     <Clothes />
  );
}


