<template>
  <div class="main-container">
    <OffCanvasMobileMenu />

    <!-- Banner -->
    <BreadcrumbOne
      :items="items"
      title="MEWUJUDKAN PENDIDIKAN KATOLIK
YANG MEMBENTUK PRIBADI BERINTEGRITAS"
      backgroundUrl="/images/bg/about-1.png"
    />

    <!-- Welcome -->
    <div class="section-padding-top about-section-padding-bottom-80">
      <div class="container">
        <div class="row">
          <!-- About Image Area Start -->
          <div
            class="col-lg-6"
            data-aos="fade-up"
            style="padding-bottom: 200px"
          >
            <div
              class="about-image-area about-two about-shape-animation right-0 mr-0"
            >
              <div class="about-image js-tilt">
                <img src="/images/home/about.png" alt="image" />
              </div>
              <div class="about-image js-tilt">
                <img src="/images/about/about-2.png" alt="image" />
              </div>
              <!-- Animation Shape Start -->
              <ShapeWithAnimation
                addClassName="shape-1"
                data-depth="1"
                imgSrc="/images/shape-animation/video-shape-1.png"
              />
            </div>
          </div>
          <!-- About Image Area Start -->

          <!-- About Coontent Start -->
          <div class="col-lg-6" data-aos="fade-up">
            <div class="about-content-area">
              <!-- Section Title Two Start -->
              <div class="section-title-two">
                <h4
                  class="title"
                  style="text-align: center; margin-bottom: 20px"
                >
                  Selamat datang Saudara Saudari terkasih di website Yayasan
                  Yohannes Gabriel.
                </h4>
                <h6 style="text-align: justify">
                  Yayasan Yohannes Gabriel merupakan yayasan pendidikan katolik
                  yang telah berdiri sejak tahun 1925. Sejak semula kami
                  berkomitmen untuk memberikan yang terbaik bagi dunia
                  pendidikan di tanah air yang kita cintai, Indonesia. Setelah
                  lebih dari 97 tahun, kami terus mengembangkan diri seturut
                  perkembangan zaman agar dapat mendidik penerus bangsa dan masa
                  depan gereja dan masyarakat dengan berlandaskan pada
                  nilai-nilai kebangsaan dan nilai-nilai katolik. Melalui
                  website yayasan Yohannes Gabriel ini, kami ingin menjangkau
                  masyarakat lebih luas lagi dengan mengenalkan yayasan Yohannes
                  Gabriel dan sekolah-sekolah yang berada di bawah naungannya
                  sebagai sekolah katolik milik Keuskupan Surabaya yang
                  transformatif, integral, dan kolegial. Kami percaya keberadaan
                  yayasan Yohannes Gabriel dapat membangun dunia pendidikan dan
                  menghadirkan generasi penerus bangsa, masyarakat, dan gereja.
                </h6>
                <!-- <span class="sub-title">Web design and digital marketing</span>
                <h3 class="title">
                  We think strategy, UX design, <br />
                  and web development
                </h3> -->
              </div>
              <!-- Section Title Two End -->
            </div>
          </div>
          <!-- About Coontent Start -->
        </div>
      </div>
    </div>

    <!-- Video Profil -->
    <div
      class="video-section section-padding"
      :style="{ backgroundImage: `url('/images/bg/tentang-vid.png')` }"
    >
      <div class="container text-center">
        <!-- Section Title Start -->
        <div class="section-title color-light text-center" data-aos="fade-up">
          <h2 class="title">Bersama Mewujudkan Pribadi Yang Beritegritas</h2>
        </div>
        <!-- Section Title End -->
        <client-only>
          <silent-box :image="videos[0]">
            <template v-slot:silentbox-item>
              <div class="play-btn icon video-popup">
                <i class="fas fa-play"></i>
              </div>
            </template>
          </silent-box>
        </client-only>
      </div>

      <!-- Animation Shape Start -->
      <ShapeWithAnimation
        addClassName="shape-1"
        data-depth="1"
        imgSrc="/images/shape-animation/newsletter-shape.png"
      />
      <!-- Animation Shape End -->
    </div>

    <!-- History -->
    <div
      class="faq-section section-padding-top overflow-hidden"
      :style="{ backgroundColor: '#f8faff' }"
    >
      <div class="container">
        <div class="row row-cols-lg-2 row-cols-1">
          <!-- Faq Content Start -->
          <div class="col mb-30">
            <div class="faq-content">
              <!-- Section Title Two Start -->
              <div class="section-title-two">
                <span class="sub-title"></span>
                <h3 class="title">
                  Sejarah <br />
                  Yayasan Yohannes Gabriel
                </h3>
              </div>
              <!-- Section Title Two End -->

              <AccordionStyleOne />
            </div>
          </div>
          <!-- Faq Content End -->

          <div class="col pl-xl-12">
            <div class="about-image-area faq-image-area">
              <div class="about-image right-n50 js-tilt">
                <img src="/images/faq/faq-11.png" alt="image" />
              </div>
              <div class="about-image js-tilt">
                <img src="/images/faq/faq-22.png" alt="image" />
              </div>
              <!-- Animation Shape Start -->
              <ShapeWithAnimation
                addClassName="shape-1"
                data-depth="4"
                imgSrc="/images/shape-animation/video-shape-1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Vision - Mission -->
    <CallToActionOne />

    <!-- <div class="line"><hr /></div> -->

     <!-- Our Culture -->
    <div class="section-padding-color">
      <div class="container">
        <div class="section-title-clr text-center mb-60" data-aos="fade-up">
          <h2 class="title">Nilai Keutamaan Yayasan Yohannes Gabriel</h2>
        </div>
        <div class="row align-items-center">
          <div class="offset-xl-1 col-xl-6 col-lg-6 col-12">
            <div class="video-popup-area">
              <div class="skill-video">
                <client-only>
                  <img class="image" src="/images/home/karir.png" alt="image" />
                  <img
                    class="image mt-60"
                    src="/images/home/karir.png"
                    alt="image"
                  />
                </client-only>
              </div>

              <!-- Animation Shape Start -->
              <ShapeWithAnimation
                addClassName="shape-1"
                data-depth="1"
                imgSrc="/images/shape-animation/video-shape-1.png"
              />
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
            <div class="skill-with-video-content">
              <!-- Section Title Two Start -->
              <div class="section-title-two">
                <p>
                  <b /> 1. SEMANGAT MISIONER <br />Menjangkau warga Gereja dan
                  masyarakat dengan semangat merasul demi terwujudnya
                  persekutuan umat yang dewasa dalam iman, guyub, penuh
                  pelayanan dan misioner, serta demi berkembangnya masyarakat
                  bangsa yang cerdas, toleran dan beradab.
                </p>
                <p>
                  2. SEMANGAT KOMUNITER
                  <br />Terbuka (inklusif) dalam hidup bersama sebagai saudara
                  melampaui batas-batas golongan, status dan pekerjaan.
                </p>
                <p>
                  3. SEMANGAT INSPIRATIF - KREATIF
                  <br />
                  Terbuka terhadap gerak Roh Kudus yang menjiwai kerasulan, jeli
                  membaca tanda-tanda zaman dan berani melakukan langkah-langkah
                  terobosan.
                </p>
                <p>
                  4. SEMANGAT SPIRITUAL-PERSONAL
                  <br />
                  Meneladan St. Yohanes Gabriel Perboyre dalam menghayati
                  kehadiran Allah dalam hati dan bersedia diubah-Nya agar
                  memiliki tangan, lidah dan hati, pikiran, kehendak dan jiwa
                  seperti yang dimiliki Kristus, Sang Penebus Ilahi.
                </p>
                <p>
                  5. SEMANGAT EFEKTIF - INSTITUSIONAL
                  <br />
                  Menyadari pentingnya tata kelola yang sehat dalam pelaksanaan
                  pekerjaan dan semaksimal mungkin mengupayakannya di setiap
                  momen pekerjaan dan operasional Yayasan.
                </p>
              </div>
              <!-- Section Title Two End -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <TeamOne />

    <!-- <div class="timeline-area responsive-content area-padding theme-bg-gray">
      <div class="timeline-fluid">
        <div class="container">
          <div class="row">
            <div class="col-md-12 primary-padding-3">
              <div class="avivon-heading">
                <h1 class="avivon__title mb-20" style="text-align: center">
                  Sejarah Singkat
                </h1>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="timeline-list">
                <div class="happening row" style="margin-bottom: 40px">
                  <div class="happening__period col-md-3 col-sm-6 col-xs-15">
                    <h4 class="year__item-title" style="text-align: center">
                      1925-1928
                    </h4>
                    <div class="time__item-bg time__bg">
                      <div class="image-content">
                        <div class="image-box">
                          <img
                            src="/images/icon-animation/awal.jpg"
                            alt="Icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="happening__desc col-md-8 col-sm-6 col-sm-offset-0 col-xs-offset-0 col-md-offset-1"
                  >
                    <h3 class="time__item-title">Perkumpulan</h3>
                    <p class="time__item-desc">
                      21 Oktober 1925 Yayasan Yohannes Gabriel Pusat berdiri
                      dengan nama Yayasan “Jonaes Gabrielstichting”. <br />
                      1 Juli 1926 berdiri sekolah pertama Hollandsch Inlandsche
                      School di Blitar. <br />
                      Sejak tahun 1928, berdiri sekolah-sekolah Yayasan Yohannes
                      Gabriel di berbagai daerah di Jawa Timur.
                    </p>
                  </div>
                </div>

                <div class="happening row" style="margin-bottom: 40px">
                  <div class="happening__period col-md-3 col-sm-6 col-xs-15">
                    <h4 class="year__item-title" style="text-align: center">
                      1960
                    </h4>
                    <div class="time__item-bg time__bg-2"></div>
                    <div class="image-content">
                      <div class="image-box">
                        <img src="/images/icon-animation/1960.jpg" alt="Icon" />
                      </div>
                    </div>
                  </div>

                  <div
                    class="happening__desc col-md-8 col-sm-6 col-sm-offset-0 col-xs-offset-0 col-md-offset-1"
                  >
                    <h3 class="time__item-title">
                      Berdirinya Gedung Yayasan Pusat
                    </h3>
                    <p class="time__item-desc">
                      Kantor Yayasan Yohannes Gabriel berpusat di Jl. Dinoyo
                      No.42 Surabaya.
                    </p>
                  </div>
                </div>

                <div class="happening row" style="margin-bottom: 40px">
                  <div class="happening__period col-md-3 col-sm-6 col-xs-15">
                    <h4 class="year__item-title" style="text-align: center">
                      1997
                    </h4>
                    <div class="time__item-bg time__bg-3"></div>
                    <div class="image-content">
                      <div class="image-box">
                        <img
                          src="/images/icon-animation/icon_misi.png"
                          alt="Icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="happening__desc col-md-8 col-sm-6 col-sm-offset-0 col-xs-offset-0 col-md-offset-1"
                  >
                    <h3 class="time__item-title">
                      Yayasan Yohannes Gabriel Perwakilan 1
                    </h3>
                    <p class="time__item-desc">
                      Yayasan Yohannes Gabriel Perwakilan 1 Surabaya berdiri
                      sejak 1997 dan berada dalam naungan Keuskupan Surabaya.
                      <br />
                      Yayasan Yohannes Gabriel Perwakilan 1 berdiri dengan 3 sub
                      bagian; sub Aloysius Gonzaga, sub Sidoarjo, sub Kantor
                      Pusat.
                    </p>
                  </div>
                </div>

                <div class="happening row" style="margin-bottom: 40px">
                  <div class="happening__period col-md-3 col-sm-6 col-xs-15">
                    <h4 class="year__item-title" style="text-align: center">
                      2001-Sekarang
                    </h4>
                    <div class="time__item-bg time__bg-4"></div>
                    <div class="image-content">
                      <div class="image-box">
                        <img src="/images/icon-animation/2013.jpg" alt="Icon" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="happening__desc col-md-8 col-sm-6 col-sm-offset-0 col-xs-offset-0 col-md-offset-1"
                  >
                    <h3 class="time__item-title">Perluasan</h3>
                    <p class="time__item-desc">
                      Tahun 2001 berdiri TKK St. Maria Wiyung dan SDK St.
                      Mary<br />
                      Tahun 2013 SDK Karitas 1 resmi bergabung dengan Yayasan
                      Yohannes Gabriel Perwakilan 1<br />
                      Sejak 2013 hingga sekarang Yayasan Yohannes Gabriel
                      Perwakilan 1 terus berkembang hingga memiliki 26 sekolah
                      katolik, mulai dari jenjang TK – SD – SMP – SMA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

  
  </div>
</template>

<script>
export default {
  components: {
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    BreadcrumbOne: () => import("@/components/BreadcrumbOne"),
    CallToActionOne: () => import("@/components/CallToActionOne"),
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
    TeamOne: () => import("@/components/TeamOne"),
    AccordionStyleOne: () => import("@/components/AccordionStyleOne"),
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
    SectionTitle: () => import("@/components/SectionTitle"),
  },

  data() {
    return {
      items: [
        {
          text: "Beranda",
          to: "/",
        },
        {
          text: "Tentang Kami",
          active: true,
        },
      ],
      videos: [
        {
          src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY",
        },
      ],
    };
  },

  head() {
    return {
      title: "Tentang Kami",
    };
  },
};
</script>

<style scoped>
.content {
  /* max-width: 200px; */
  height: 60px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}

.box {
  width: 350px;
  height: 14px;
}

.box span {
  width: 100%;
  height: 100%;
  align-content: center;
  object-fit: cover;
  margin: auto;
  font-weight: bold;
}

.image-content {
  /* max-width: 200px; */
  height: 150px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}

.image-box {
  width: 150px;
  height: 114px;
}

.image-box img {
  width: 100%;
  height: 100%;
  align-content: center;
  object-fit: cover;
  margin: auto;
}
</style>


