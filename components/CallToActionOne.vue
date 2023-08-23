<template>
  <div class="section-padding-t90-b100" >
    <div class="container shape-animate">
      <!-- Section Title Start -->
      <div
        class="section-title text-center"
        add-class-name="mb-30"
        data-aos="fade-up"
      >
        <h2 class="title">Visi dan Misi</h2>
        <p
          class="sub-title"
          style="
            font-size: 22px;
            line-height: 44px;
            color: black;
            max-width: 970px;
            margin-top: 50px;
          "
        >
          Mewujudkan Yayasan Pendidikan Katolik yang Transformatif,
          Berintegritas dan Kolegial
        </p>
      </div>

      <!-- Section Title End -->


<div class=" row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30 ">
          <div class="col mt-30" data-aos="fade-up">
            <div class="contact-info">
              <div class="content">
                <div class="box">
                  <div class="info">
                    <span
                      class="info-text"
                      style="font-size: 22px; margin-bottom: 20px; text-align: center"
                    >
                      PENDIDIKAN KATOLIK
                    </span>
                  </div>
                </div>
              </div>

              <div class="info">
                <ul>
                <li>
                  Yayasan Yohannes Gabriel sebagai penyelenggara karya
                  pendidikan milik Gereja Katolik Keuskupan Surabaya
                </li>
                <li>
                  Yayasan Yohannes Gabriel dijiwai oleh terang iman Katolik. 
                </li>
                <li>
                  Yayasan Yohannes Gabriel merupakan karya Gereja Katolik yang ditujukan bagi pencerdasan kehidupan bangsa berdasarkan Pancasila dan sesuai dengan UUD 1945.
                </li>
              </ul>
              </div>
            </div>
          </div>

          <div class="col mt-30" data-aos="fade-up">
            <div class="contact-info">
              <div class="content">
                <div class="box">
                  <div class="info">
                    <!-- <h4 class="title">Help Desk</h4> -->
                    <span
                      class="info-text"
                      style="font-size: 22px; margin-bottom: 20px; text-align: center"
                    >
                      TRANSFORMATIF
                    </span>
                  </div>
                </div>
              </div>

              <div class="info">
                <ul>
                <li>
                  Responsif dan adaptif terhadap perkembangan dan kemajuan jaman. 
                </li>
                <li>
                  Mewujudkan iklim pembelajaran yang inklusif dan berintegritas bagi masyarakat. 
                </li>
                <li>
                  Mewujudkan masyarakat yang maju, berdaulat dan mandiri.
                </li>
              </ul>
              </div>
            </div>
          </div>

          <div class="col mt-30" data-aos="fade-up">
            <div class="contact-info">
              <div class="content">
                <div class="box">
                  <div class="info">
                    <span
                      class="info-text"
                      style="font-size: 22px; margin-bottom: 20px; text-align: center"
                    >
                     BERINTEGRITAS
                    </span>
                  </div>
                </div>
              </div>

              <div class="info">
                <ul>
                <li>
                  Berdaya juang, setia dan bertanggung jawab.  
                </li>
                <li>
                  Mewujudkan jenjang pendidikan katolik yang utuh dan berkesinambungan 
                </li>
                <li>
                  Menghidupi spiritualitas kemuridan
                </li>
              </ul>
              </div>
            </div>
          </div>

  <div class="info">
                <p style="margin-top: 20px"></p>
              </div>

          <div class="col mt-30" data-aos="fade-up">
            <div class="contact-info">
              <div class="content">
                <div class="box">
                  <div class="info">
                    <span
                      class="info-text"
                      style="font-size: 22px; margin-bottom: 20px; text-align: center"
                    >
                       KOLEGIAL
                    </span>
                  </div>
                </div>
              </div>
              <div class="info">
                <ul>
                <li>
                  Mewujudkan semangat Gereja sebagai persekutuan yang guyub dan penuh pelayanan.  
                </li>
                <li>
                  Mewujudkan sinergi antara lembaga pendidikan Katolik dan kehidupan Gereja Paroki. 
                </li>
                <li>
                  Mewujudkan tata kelola yang kolektif-kolegial berdasar prinsip solidaritas dan subsidiaritas
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>

      <shape-with-animation
        add-class-name="shape-1"
        data-depth="4"
        img-src="/images/shape-animation/video-shape-1.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SectionTitle: () => import("@/components/SectionTitle"),
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
};
</script>

<style scoped>
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
