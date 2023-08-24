import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide,} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const AboutPage = () => {
  return (
    <div className="">
      <div>
        <Image
          width={1980}
          height={500}
          src="/images/banner.jpg"
          alt="banner image"
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2">
          <div>

            {/* grid */}
          </div>
          <div className="text-center">
            <h2 className="font-bold text-4xl">
              About Our Company And What We Are Offer.
            </h2>
            <div className="flex justify-center">
              <Tabs className="py-12">
                <TabList className="flex">
                  <Tab className="rounded p-6 bg-zinc-200 mr-10">
                    <h2 className="font-bold text-2xl">10</h2>
                    <p className="text-orange-600">Years of experience</p>
                  </Tab>
                  <Tab className="rounded p-6 bg-zinc-200 mr-10">
                    <h2 className="font-bold text-2xl">80+</h2>
                    <p className="text-orange-600">Locations</p>
                  </Tab>
                  <Tab className="rounded p-6 bg-zinc-200">
                    <h2 className="font-bold text-2xl">150+</h2>
                    <p className="text-orange-600">well trained guides</p>
                  </Tab>
                </TabList>

                <TabPanel>
                  <h2>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias qui voluptatem facilis nihil fugit, at expedita
                    vitae veritatis aliquid, vel unde. Corrupti aspernatur culpa
                    id illo odit ab enim obcaecati maiores architecto facere?
                  </h2>
                </TabPanel>
                <TabPanel>
                  <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur molestias perspiciatis quisquam dolor consequatur,
                    unde quidem aut inventore optio dignissimos animi, eos hic,
                    earum porro repudiandae nam voluptatem culpa impedit.
                    Aspernatur recusandae repellendus vitae ut esse officia
                    aliquid dicta, excepturi quod fuga vel. Corrupti quia enim,
                    suscipit hic officia ipsa.
                  </h2>
                </TabPanel>
                <TabPanel>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid excepturi molestias nemo, rerum ut impedit, veritatis
                  porro harum consequuntur possimus nam atque, aperiam error
                  alias. Illo maiores hic, accusantium minima aperiam nisi alias
                  qui dolores tempora? Quos illo porro sed deserunt facere
                  pariatur maxime necessitatibus atque incidunt, nisi
                  dignissimos placeat natus, tempora magnam beatae debitis odio.
                  Obcaecati amet repudiandae ipsa odit incidunt reprehenderit,
                  explicabo aliquam recusandae officia sequi cupiditate! Sit
                  porro eligendi inventore nesciunt, aliquam, illo soluta
                  voluptatibus sint officiis, autem facilis pariatur? Enim,
                  doloribus temporibus atque nulla quibusdam excepturi? Corrupti
                  repudiandae perferendis sed harum sit quos aliquid eos nemo.
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <div>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
       

        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, ]}
        className="mySwiper"
      >
        <SwiperSlide><div className="max-w-sm rounded overflow-hidden shadow-lg">
  <Image width={400} height={500} src="/images/guide1.jpg" alt="guide"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="max-w-sm rounded overflow-hidden shadow-lg">
  <Image width={400} height={500} src="/images/guide2.jpg" alt="guide"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="max-w-sm rounded overflow-hidden shadow-lg">
  <Image width={400} height={500} src="/images/guide3.jpg" alt="guide"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="max-w-sm rounded overflow-hidden shadow-lg">
  <Image width={400} height={500} src="/images/guide4.jpg" alt="guide"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="max-w-sm rounded overflow-hidden shadow-lg">
  <Image width={400} height={500} src="/images/guide5.jpg" alt="guide"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div></SwiperSlide>
      </Swiper>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default AboutPage;
