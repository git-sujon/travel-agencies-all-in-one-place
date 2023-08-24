import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AboutPage = () => {
  return (
    <div className="">
      <div>
        <div
          className=" text-center"
          style={{
            backgroundImage: `url("/images/banner.jpg")`,
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <div className="p-12 bg-gradient-to-t from-black h-[600px]">
            <h1 className="lg:text-6xl text-xl text-neutral-300 font-bold">
              About Us
              <br />
              Pioneer in hospitality industry
            </h1>
            <p className="lg:text-2xl font bold text-neutral-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              quod quidem quae facere, accusantium recusandae?
              <br />
              We serve experience, quality & hermony since 1995.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl my-8">
        <div className="grid grid-cols-2">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vNQR3ixE8AE?si=v0DBacojksBu4YLK"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
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
        <div className="text-center my-10">
          <h2 className="font-bold text-4xl mb-8">Most trusted Guides</h2>
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium quod suscipit atque dolore aspernatur ipsum perspiciatis
            fugit nisi autem obcaecati?
          </p>
        </div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                width={400}
                height={500}
                src="/images/guide1.jpg"
                alt="guide"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Michale John</div>
                <Rating
                  name="text-feedback"
                  value={10}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                width={400}
                height={500}
                src="/images/guide2.jpg"
                alt="guide"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Thomas Adam</div>
                <Rating
                  name="text-feedback"
                  value={10}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                width={400}
                height={500}
                src="/images/guide3.jpg"
                alt="guide"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mark Antony</div>
                <Rating
                  name="text-feedback"
                  value={10}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                width={400}
                height={500}
                src="/images/guide4.jpg"
                alt="guide"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Bill Thomas</div>
                <Rating
                  name="text-feedback"
                  value={10}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                width={400}
                height={500}
                src="/images/guide5.jpg"
                alt="guide"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Carl Urban</div>
                <Rating
                  name="text-feedback"
                  value={10}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <div className="text-center my-10">
          <h2 className="font-bold text-4xl mb-8">Our Tourist Locations</h2>
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium quod suscipit atque dolore aspernatur ipsum perspiciatis
            fugit nisi autem obcaecati?
          </p>
        </div>
        <Marquee>
          <Image
            width={350}
            height={400}
            src="/images/place1.jpg"
            alt="location"
          />
          <Image
            width={350}
            height={400}
            src="/images/place2.jpg"
            alt="location"
          />
          <Image
            width={350}
            height={400}
            src="/images/place3.jpg"
            alt="location"
          />
          <Image
            width={350}
            height={400}
            src="/images/place4.jpg"
            alt="location"
          />
          <Image
            width={350}
            height={400}
            src="/images/place5.jpg"
            alt="location"
          />
          <Image
            width={350}
            height={400}
            src="/images/place6.jpg"
            alt="location"
          />
          <Image
            width={350}
            height={400}
            src="/images/place7.jpg"
            alt="location"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default AboutPage;
