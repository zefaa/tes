<template>
  <div class="section-padding" data-bg-color="#f8faff">
    <div class="container">
      <!-- Section Title Start -->
      <div class="section-title text-center mb-60" data-aos="fade-up">
        <h2 class="title">Tim Yayasan</h2>
        <p class="sub-title">Yohannes Gabriel</p>
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
          id: 1,
          imgSrc: "/images/team/ketum.png",
          name: "Romo Tommy",
          position: "Ketua Umum Yayasan",
        },
        {
          id: 2,
          imgSrc: "/images/team/sekre.png",
          name: "Romo Theo",
          position: "Sekretaris Yayasan",
        },
        {
          id: 3,
          imgSrc: "/images/team/bend.png",
          name: "Romo Rudi",
          position: "Bendahara Yayasan",
        },
        {
          id: 4,
          imgSrc: "/images/team/kabid-kepn.png",
          name: "Romo Karel",
          position: "Ketua Bidang Kependidikan-Katolisitas",
        },
        {
          id: 5,
          imgSrc: "/images/team/kabid-keu.png",
          name: "Romo Hans",
          position: "Ketua Bidang Keuangan",
        },
        {
          id: 6,
          imgSrc: "/images/team/kabid-legal.png",
          name: "Romo Domi",
          position: "Ketua Bidang Legal-Kerjasama",
        },
        {
          id: 7,
          imgSrc: "/images/team/kabid-sarpras.png",
          name: "Romo Novi",
          position: "Ketua Bidang Sarana dan Prasarana",
        },
        {
          id: 8,
          imgSrc: "/images/team/kabid-sdm.png",
          name: "Romo Udit",
          position: "Ketua Bidang Sumber Daya Manusia",
        },

        {
          id: 9,
          imgSrc: "/images/team/team-lilis.png",
          name: "Lilis Lucia",
          position: "Kependidikan-Katolisitas",
        },
        {
          id: 10,
          imgSrc: "/images/team/team-sari.png",
          name: "Maria Ratna Rosari",
          position: "Kependidikan dan Katolisitas",
        },
        {
          id: 11,
          imgSrc: "/images/team/team-ayu.png",
          name: "Caroline Ayu",
          position: "Kependidikan-Katolisitas",
        },
        {
          id: 12,
          imgSrc: "/images/team/team-olfa.png",
          name: "Maria Olfa",
          position: "Kependidikan-Katolisitas",
        },
        {
          id: 13,
          imgSrc: "/images/team/team-markus.png",
          name: "Markus ",
          position: "Legal-Kerjasama",
        },
        {
          id: 14,
          imgSrc: "/images/team/team-eric.png",
          name: "Eric Leon",
          position: "Legal-Kerjasama",
        },
        {
          id: 15,
          imgSrc: "/images/team/team-flo.png",
          name: "Florensia Dista",
          position: "Legal-Kerjasama",
        },
        {
          id: 16,
          imgSrc: "/images/team/team-rere.png",
          name: "Regina Martha",
          position: "SDM",
        },
        {
          id: 17,
          imgSrc: "/images/team/team-valeria.png",
          name: "Valeria Kartikaningtyas",
          position: "SDM",
        },
        {
          id: 18,
          imgSrc: "/images/team/team-heru.png",
          name: "Aloysius Heru",
          position: "SDM",
        },
        {
          id: 19,
          imgSrc: "/images/team/team-gun.png",
          name: "Fredy Gunawan",
          position: "SDM",
        },
        {
          id: 20,
          imgSrc: "/images/team/team-putri.png",
          name: "Putri Prihantini",
          position: "Sarana dan Prasarana",
        },
        {
          id: 21,
          imgSrc: "/images/team/team-wisnu.png",
          name: "Yohanes Wisnu",
          position: "Keuangan",
        },
        {
          id: 22,
          imgSrc: "/images/team/team-tri.png",
          name: "Margaretha Tri",
          position: "Keuangan",
        },
        {
          id: 23,
          imgSrc: "/images/team/team-arta.png",
          name: "Arta",
          position: "Accounting",
        },
        {
          id: 24,
          imgSrc: "/images/team/team-louren.png",
          name: "Lourensia Ratri",
          position: "Accounting",
        },
        {
          id: 25,
          imgSrc: "/images/team/team-sthevani.png",
          name: "Sthevani Surya",
          position: "Accounting",
        },
        {
          id: 26,
          imgSrc: "/images/team/team-paula.png",
          name: "Paula Dian",
          position: "Accounting",
        },

        {
          id: 27,
          imgSrc: "/images/team/team-tanti.png",
          name: "Theresia Kristanti",
          position: "Accounting",
        },
        {
          id: 28,
          imgSrc: "/images/team/team-maria.png",
          name: "Maria Tanda Agung",
          position: "Umum",
        },
        {
          id: 29,
          imgSrc: "/images/team/team-tata.png",
          name: "Brigietta Irna",
          position: "Umum",
        },

        {
          id: 30,
          imgSrc: "/images/team/team-ve.png",
          name: "Zefanya Devendra",
          position: "Umum",
        },
        {
          id: 31,
          imgSrc: "/images/team/team-dian.png",
          name: "Patrianus Dikson",
          position: "Umum",
        },
        {
          id: 32,
          imgSrc: "/images/team/team-goris.png",
          name: "Gregorius Najok",
          position: "RGU",
        },
        {
          id: 33,
          imgSrc: "/images/team/team-rafael.png",
          name: "Rafael Kaflo",
          position: "RGU",
        },

        {
          id: 34,
          imgSrc: "/images/team/team-richard.png",
          name: "Richard",
          position: "RGU",
        },

        {
          id: 35,
          imgSrc: "/images/team/team-sugeng.png",
          name: "Albertus Sugeng",
          position: "RGU",
        },
      ],
    };
  },
};
</script>