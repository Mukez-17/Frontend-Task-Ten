import React from 'react';
import Navigation from '../Home/Pages/Navigation';
import Header from '../Packages/Header';
import Chennai from '../Packages/Component/Chennai';
import Rameshwaram from '../Packages/Component/Rameshwaram';
import Kodaikanal from '../Packages/Component/Kodaikanal';
import Ooty from '../Packages/Component/Ooty';
import Kanyakumari from '../Packages/Component/Kanyakumari';
import Kumbakonam from '../Packages/Component/Kumbakonam';
import Madurai from '../Packages/Component/Madurai';
import Yercaud from '../Packages/Component/Yercaud';
import Theni from '../Packages/Component/Theni';
import Hogenakkal from '../Packages/Component/Hogenakkal';
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
</style>

const Packages = () => {
  return (
    <div style={{fontFamily:'Roboto'}}>
      <Navigation />
      <Header />
      <Chennai />
      <Rameshwaram />
      <Kodaikanal />
      <Ooty />
      <Kanyakumari />
      <Kumbakonam />
      <Madurai />
      <Yercaud />
      <Theni />
      <Hogenakkal />
    </div>
  )
}

export default Packages;