import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Background from "../../background/Background";

export default function Article() {
  useEffect(() => {}, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Only animate once when in view
      offset: 200, // Offset from the top of the viewport
    });
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        className="px-[75px] flex flex-col gap-10 lg:pt-[175px] xl:px-0 pt-[150px] xl:pt-0 xl:mt-[10rem] pb-10 md:pb-20 lg:pb-20"
      >
        <h2 className="text-white text-2xl font-semibold text-center">Title</h2>
        <div className="glass-box p-5 text-[#CBCBCB] text-md lg:text-medium text-justify xl:w-[58rem] self-center">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Amauris class
          tempus molestie odio. Lacus nostra non rutrum ex suspendisse. Torquent
          felis per integer nullam tristique lorem. Nisi feugiat magna potenti
          aenean dapibus phasellus sociosqu ullamcorper dictum. Consequat proin
          porttitor netus lobortis egestas malesuada vulputate eleifend enim.
          Non litora ultrices at augue hac. Ipsum convallis molestie luctus
          blandit consectetur commodo curae malesuada cras. Litora maecenas
          dictumst dictum inceptos; nam quisque metus. Velit ornare pharetra
          proin eros ante volutpat lectus adipiscing. Ipsum eu himenaeos
          convallis maximus tristique blandit dui placerat. Proin elit placerat
          tellus bibendum hac nisl curae tellus blandit. Ornare efficitur
          venenatis ullamcorper sem enim mattis. Aenean sollicitudin interdum
          tortor parturient donec. Rutrum a elit conubia odio dictum senectus.
          Pellentesque ex phasellus varius scelerisque habitasse mus. Quis
          blandit pellentesque litora efficitur per odio sagittis? Diam lectus
          nisl efficitur pharetra vehicula. Tellus rutrum porta phasellus
          maecenas vehicula scelerisque. Imperdiet risus libero blandit
          facilisis natoque fringilla. Ad mattis facilisis vehicula vulputate
          hac. Penatibus per convallis erat; lobortis vehicula id auctor netus.
          Mollis augue ridiculus neque eget neque. Netus potenti primis id
          habitant phasellus ultrices. Litora faucibus potenti litora ornare
          interdum nisi.
        </div>
      </div>
      <Background />
    </>
  );
}
