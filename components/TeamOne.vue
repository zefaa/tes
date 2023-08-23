<template>
  <div class="section-padding" data-bg-color="#f8faff">
    <div class="container">
      <!-- Section Title Start -->
      <div class="section-title text-center mb-60" data-aos="fade-up">
        <h2 class="title">Tim Yayasan</h2>
        <p class="sub-title">
          Yohannes Gabriel
        </p>
      </div>
      <!-- Section Title End -->

      <div class="testimonial-slider" data-aos="fade-up">
        <swiper :options="swiperOption">
          <div
            class="swiper-slide"
            v-for="(team, index) in teamData"
            :key="index"
          >
            <TeamMember :team="team" />
          </div>
        </swiper>
        <div class="swiper-pagination text-center"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    TeamMember: () => import("@/components/TeamMember"),
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        spaceBetween: 50,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          1499: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },

      teamData: [
       
                {
          id: 15,
          imgSrc: "/images/team/team-lilis.png",
          name: "Lilis Lucia",
          position: "Kependidikan-Katolisitas",
        },
        {
          id: 25,
          imgSrc: "/images/team/team-sari.png",
          name: "Maria Ratna Rosari",
          position: "Kependidikan dan Katolisitas",
        },
        {
          id: 2,
          imgSrc: "/images/team/team-ayu.png",
          name: "Caroline Ayu",
          position: "Kependidikan-Katolisitas",
        },
         {
          id: 19,
          imgSrc: "/images/team/team-olfa.png",
          name: "Maria Olfa",
          position: "Kependidikan-Katolisitas",
        },
        {
          id: 18,
          imgSrc: "/images/team/team-markus.png",
          name: "Markus ",
          position: "Legal-Kerjasama",
        },
        {
          id: 5,
          imgSrc: "/images/team/team-eric.png",
          name: "Eric Leon",
          position: "Legal-Kerjasama",
        },
 {
          id: 4,
          imgSrc: "/images/team/team-flo.png",
          name: "Florensia Dista",
          position: "Legal-Kerjasama",
        },
        {
          id: 23,
          imgSrc: "/images/team/team-rere.png",
          name: "Regina Martha",
          position: "SDM",
        },
        {
          id: 34,
          imgSrc: "/images/team/team-valeria.png",
          name: "Valeria Kartikaningtyas",
          position: "SDM",
        },
        {
          id: 33,
          imgSrc: "/images/team/team-heru.png",
          name: "Aloysius Heru",
          position: "SDM",
        },
         {
          id: 14,
          imgSrc: "/images/team/team-gun.png",
          name: "Fredy Gunawan",
          position: "SDM",
        },
        {
          id: 21,
          imgSrc: "/images/team/team-putri.png",
          name: "Putri Prihantini",
          position: "Sarana dan Prasarana",
        },
        {
          id: 32,
          imgSrc: "/images/team/team-wisnu.png",
          name: "Yohanes Wisnu",
          position: "Keuangan",
        },
        {
          id: 30,
          imgSrc: "/images/team/team-tri.png",
          name: "Margaretha Tri",
          position: "Keuangan",
        },
         {
          id: 1,
          imgSrc: "/images/team/team-arta.png",
          name: "Arta",
          position: "Accounting",
        },
        {
          id: 3,
          imgSrc: "/images/team/team-dian.png",
          name: "Patrianus Dikson",
          position: "Umum",
        },
        {
          id: 6,
          imgSrc: "/images/team/team-goris.png",
          name: "Gregorius Najok",
          position: "RGU",
        },
        // {
        //   id: 7,
        //   imgSrc: "/images/team/ketum.jpg",
        //   name: "Romo Tommy",
        //   position: "Ketua Umum Yayasan",
        // },
        // {
        //   id: 8,
        //   imgSrc: "/images/team/kabid-kepd.jpg",
        //   name: "Romo Karel",
        //   position: "Ketua Bidang Kependidikan-Katolisitas",
        // },
        // {
        //   id: 9,
        //   imgSrc: "/images/team/kabid-keu.jpg",
        //   name: "Romo Hans",
        //   position: "Ketua Bidang Keuangan",
        // },
        // {
        //   id: 10,
        //   imgSrc: "/images/team/kabid-legal.jpg",
        //   name: "Romo Domi",
        //   position: "Ketua Bidang Legal-Kerjasama",
        // },
        // {
        //   id: 11,
        //   imgSrc: "/images/team/kabid-sarpras.jpg",
        //   name: "Romo Novi",
        //   position: "Ketua Bidang Sarana dan Prasarana",
        // },
        // {
        //   id: 12,
        //   imgSrc: "/images/team/kabid-sdm.jpg",
        //   name: "Romo Udit",
        //   position: "Ketua Bidang Sumber Daya Manusia",
        // },
        // {
        //   id: 13,
        //   imgSrc: "/images/team/bend.jpg",
        //   name: "Romo Rudi",
        //   position: "Bendahara Yayasan",
        // },
       

        // {
        //   id: 16,
        //   imgSrc: "/images/team/team-louren.JPG",
        //   name: "Lourensia Ratri",
        //   position: "Accounting",
        // },
        // {
        //   id: 17,
        //   imgSrc: "/images/team/team-maria.png",
        //   name: "Maria Tanda Agung",
        //   position: "Umum",
        // },
        
       
        // {
        //   id: 20,
        //   imgSrc: "/images/team/team-paula.png",
        //   name: "Paula Dian",
        //   position: "Accounting",
        // },
        
        // {
        //   id: 22,
        //   imgSrc: "/images/team/team-rafael.png",
        //   name: "Rafael Kaflo",
        //   position: "RGU",
        // },
        
        // {
        //   id: 24,
        //   imgSrc: "/images/team/team-richard.png",
        //   name: "Richard",
        //   position: "RGU",
        // },
        
        // {
        //   id: 26,
        //   imgSrc: "/images/team/team-sthevani.png",
        //   name: "Sthevani Surya",
        //   position: "Accounting",
        // },
        // {
        //   id: 27,
        //   imgSrc: "/images/team/team-sugeng.png",
        //   name: "Albertus Sugeng",
        //   position: "RGU",
        // },
        //  {
        //   id: 28,
        //   imgSrc: "/images/team/team-tanti.JPG",
        //   name: "Theresia Kristanti",
        //   position: "Accounting",
        // },
        //  {
        //   id: 29,
        //   imgSrc: "/images/team/team-tata.png",
        //   name: "Brigietta Irna",
        //   position: "Umum",
        // },
        
        // {
        //   id: 31,
        //   imgSrc: "/images/team/team-ve.png",
        //   name: "Zefanya Devendra",
        //   position: "Umum",
        // },
        
      ],
    };
  },
};
</script>