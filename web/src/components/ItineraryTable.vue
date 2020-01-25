<template>
  <div class="mt-4">
    <ul id="tabs-list">
      <li v-for="(itin, index) in dayData.activities" :key="itin.date" :id="'li-for-panel-' + Number(index + 1)">
        <label class="panel-label" @click="selected = itin.date" :id="itin.date == selected ? 'checked' : ''">
          {{itin.date}}
        </label>
      </li>
    </ul>

    <article id="panels">
      <div v-for="itin in dayData.activities" :key="itin.date">
        <div v-if="itin.date == selected">
          <draggable v-model="itin.places" group="places" @start="drag=true" @end="drag=false">
            <div v-for="element in itin.places" :key="element.order" class="row list my-4">
              <ActivityCard :activity="element" />
            </div>
          </draggable>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import ActivityCard from '@/components/ActiviesCard';

const itinerary = {
            "id": "akshd8937149askdjk",
            "location": {
                "name": "Bali",
                "lat": -8.3405389,
                "lng": 115.0919509
            },
            "date": {
                "start": "2020-10-20",
                "end": "2020-10-22",
                "total_days": 3 
            },
            "activities": [
                {
                    "date": "2020-10-20",
                    "places": [
                        {
                            "order": 1,
                            "formatted_address": "Jl. Pura Dalem Lovina Singaraja, Desa, Anturan, Kec. Buleleng, Kabupaten Buleleng, Bali 81119, Indonesia",
                            "location": {
                               "lat": -8.149365,
                               "lng": 115.0493949
                            },
                            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                            "id": "69493390994402db96ce08fc41c43abbcf5559f8",
                            "name": "Secret Garden Restaurant",
                            "photos": [
                               {
                                  "height": 2000,
                                  "html_attributions": [
                                     "<a href=\"https://maps.google.com/maps/contrib/107563998304681670218\">Secret Garden Restaurant</a>"
                                  ],
                                  "photo_reference": "CmRZAAAAdVXkIMqx0bb0kfvanKqpF4bmhjLgSbjT_fujI2kb7ZfINzA7gQDep30ElJBV3g74yogDIIXwPXJTZ6XXOSPGOe8wetB3r_is-9dZBoc29UV_TPW7knJ6QyaorGyxN3gsEhDkN-lbEofvMx8fYZKg4FivGhSjQ1yIC-3jEHdwX-MWb-QNoRfWHw",
                                  "width": 3008
                               }
                            ],
                            "place_id": "ChIJu7Db_-Ka0S0RSyHGifETfxs",
                            "price_level": 2,
                            "rating": 4.6,
                            "user_ratings_total": 269
                        },
                        {
                            "order": 2,
                            "formatted_address": "Jl. Dewisita No.10, Banjar Padang, Tegal, Kabupaten Gianyar, Bali 80571, Indonesia",
                            "location": {
                               "lat": -8.5101692,
                               "lng": 115.2635134
                            },
                            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                            "id": "dec40100516b3d695ee816b81a7606d74791c9f3",
                            "name": "Restaurant Locavore",
                            "photos": [
                               {
                                  "height": 3480,
                                  "html_attributions": [
                                     "<a href=\"https://maps.google.com/maps/contrib/103927067128008255828\">Bal Kang</a>"
                                  ],
                                  "photo_reference": "CmRaAAAAUXhEeW3XGl6ihQVqd2uoIft81JL4HkszdFTM-YrB_OF9J86DR4UT7I61LPEoYfksNBznCIUr9hTomnC8bVl-L42xQH0u_DQ2CcaAs8rs60PRQDi1hgiB9Q_IWz_H87VXEhCySA0_A3sxxuvKgF_1fF26GhRVMiMcy46_6KzEI_pnfClTH7Ft6w",
                                  "width": 4640
                               }
                            ],
                            "price_level": 4,
                            "rating": 4.5,
                            "user_ratings_total": 620
                         }
                    ]
                },
                {
                    "date": "2020-10-21",
                    "places": [
                        {
                            "order": 1,
                            "formatted_address": "Jl. Pura Dalem Lovina Singaraja, Desa, Anturan, Kec. Buleleng, Kabupaten Buleleng, Bali 81119, Indonesia",
                            "location": {
                               "lat": -8.149365,
                               "lng": 115.0493949
                            },
                            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                            "id": "69493390994402db96ce08fc41c43abbcf5559f8",
                            "name": "Secret Garden Restaurant",
                            "photos": [
                               {
                                  "height": 2000,
                                  "html_attributions": [
                                     "<a href=\"https://maps.google.com/maps/contrib/107563998304681670218\">Secret Garden Restaurant</a>"
                                  ],
                                  "photo_reference": "CmRZAAAAdVXkIMqx0bb0kfvanKqpF4bmhjLgSbjT_fujI2kb7ZfINzA7gQDep30ElJBV3g74yogDIIXwPXJTZ6XXOSPGOe8wetB3r_is-9dZBoc29UV_TPW7knJ6QyaorGyxN3gsEhDkN-lbEofvMx8fYZKg4FivGhSjQ1yIC-3jEHdwX-MWb-QNoRfWHw",
                                  "width": 3008
                               }
                            ],
                            "place_id": "ChIJu7Db_-Ka0S0RSyHGifETfxs",
                            "price_level": 2,
                            "rating": 4.6,
                            "user_ratings_total": 269
                        },
                        {
                            "order": 2,
                            "formatted_address": "Jl. Dewisita No.10, Banjar Padang, Tegal, Kabupaten Gianyar, Bali 80571, Indonesia",
                            "location": {
                               "lat": -8.5101692,
                               "lng": 115.2635134
                            },
                            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                            "id": "dec40100516b3d695ee816b81a7606d74791c9f3",
                            "name": "Restaurant Locavore",
                            "photos": [
                               {
                                  "height": 3480,
                                  "html_attributions": [
                                     "<a href=\"https://maps.google.com/maps/contrib/103927067128008255828\">Bal Kang</a>"
                                  ],
                                  "photo_reference": "CmRaAAAAUXhEeW3XGl6ihQVqd2uoIft81JL4HkszdFTM-YrB_OF9J86DR4UT7I61LPEoYfksNBznCIUr9hTomnC8bVl-L42xQH0u_DQ2CcaAs8rs60PRQDi1hgiB9Q_IWz_H87VXEhCySA0_A3sxxuvKgF_1fF26GhRVMiMcy46_6KzEI_pnfClTH7Ft6w",
                                  "width": 4640
                               }
                            ],
                            "price_level": 4,
                            "rating": 4.5,
                            "user_ratings_total": 620
                         }
                    ]
                },
                {
                    "date": "2020-10-22",
                    "places": [
                        {
                            "order": 1,
                            "formatted_address": "Jl. Pura Dalem Lovina Singaraja, Desa, Anturan, Kec. Buleleng, Kabupaten Buleleng, Bali 81119, Indonesia",
                            "location": {
                               "lat": -8.149365,
                               "lng": 115.0493949
                            },
                            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                            "id": "69493390994402db96ce08fc41c43abbcf5559f8",
                            "name": "Secret Garden Restaurant",
                            "photos": [
                               {
                                  "height": 2000,
                                  "html_attributions": [
                                     "<a href=\"https://maps.google.com/maps/contrib/107563998304681670218\">Secret Garden Restaurant</a>"
                                  ],
                                  "photo_reference": "CmRZAAAAdVXkIMqx0bb0kfvanKqpF4bmhjLgSbjT_fujI2kb7ZfINzA7gQDep30ElJBV3g74yogDIIXwPXJTZ6XXOSPGOe8wetB3r_is-9dZBoc29UV_TPW7knJ6QyaorGyxN3gsEhDkN-lbEofvMx8fYZKg4FivGhSjQ1yIC-3jEHdwX-MWb-QNoRfWHw",
                                  "width": 3008
                               }
                            ],
                            "place_id": "ChIJu7Db_-Ka0S0RSyHGifETfxs",
                            "price_level": 2,
                            "rating": 4.6,
                            "user_ratings_total": 269
                        },
                        {
                            "order": 2,
                            "formatted_address": "Jl. Dewisita No.10, Banjar Padang, Tegal, Kabupaten Gianyar, Bali 80571, Indonesia",
                            "location": {
                               "lat": -8.5101692,
                               "lng": 115.2635134
                            },
                            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                            "id": "dec40100516b3d695ee816b81a7606d74791c9f3",
                            "name": "Restaurant Locavore",
                            "photos": [
                               {
                                  "height": 3480,
                                  "html_attributions": [
                                     "<a href=\"https://maps.google.com/maps/contrib/103927067128008255828\">Bal Kang</a>"
                                  ],
                                  "photo_reference": "CmRaAAAAUXhEeW3XGl6ihQVqd2uoIft81JL4HkszdFTM-YrB_OF9J86DR4UT7I61LPEoYfksNBznCIUr9hTomnC8bVl-L42xQH0u_DQ2CcaAs8rs60PRQDi1hgiB9Q_IWz_H87VXEhCySA0_A3sxxuvKgF_1fF26GhRVMiMcy46_6KzEI_pnfClTH7Ft6w",
                                  "width": 4640
                               }
                            ],
                            "price_level": 4,
                            "rating": 4.5,
                            "user_ratings_total": 620
                         }
                    ]
                }
            ],
            "reviews": [
                {
                    "score": 4,
                    "message": "Great itin. Bla bla bla.",
                    "images": ["asd1.jpg", "asd2.jpg"],
                    "user": 1
                }
            ]
        }
export default {
    data: () => ({
      dayData: itinerary,
      selected: itinerary.activities[0].date
    }),
    components: {
      draggable,
      ActivityCard
    },
}
</script>

<style>
ul#tabs-list {
	 list-style: none;
	 border-bottom: 1px solid #dfdfdf;
	 margin: 0;
	 padding: 0;
}

label.panel-label {
	 user-select: none;
	 display: block;
	 width: 100%;
	 color: #bdc3c7;
	 cursor: pointer;
	 background-color: #ecf0f1;
	 transition-property: background-color, color;
	 transition-duration: 200ms;
}

label.panel-label:hover {
	 color: #68C7BD;
}

#panels {
  background-color: white;
}

#panels .container {
  margin: 0 auto;
  width: 90%;
}

#panels section header label.panel-label {
  padding: 12px 24px;
  box-sizing: border-box;
}

@media all and (max-width: 767px) {
	 #tabs-list {
		 position: relative;
	}
	 #tabs-list label.panel-label {
		 padding: 12px 0;
	}
	 #panels .container {
		 width: 100%;
	}
	 #panels section header {
		 display: block;
	}
}

@media all and (min-width: 768px) {
  #checked {
    background-color: white;
    color: #68C7BD;
    padding-top: 26px;
    border-top: 6px solid;
    margin-bottom: 0 !important;
  }

	 ul#tabs-list {
		 border-bottom: 1px solid #dfdfdf;
	}
	 ul#tabs-list li {
		 display: inline-block;
		 text-align: center;
		 font-size: 0.875em;
		 width: 18%;
		 box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.05);
		 border-right: 1px solid #dfdfdf;
		 position: relative;
	}
	 ul#tabs-list li:hover {
		 transition: none;
		 border-right: none;
	}
	 ul#tabs-list li:hover.last {
		 border-right: 1px solid transparent;
	}
	 ul#tabs-list li:hover + li {
		 border-left: 1px solid #dfdfdf;
	}
	 ul#tabs-list li label.panel-label {
		 position: relative;
		 padding: 24px 0;
	}
	 ul#tabs-list li label.panel-label::after {
		 content: "";
		 position: absolute;
		 width: 100%;
		 left: 0;
		 bottom: 100%;
		 background-color: #68C7BD;
		 height: 0;
		 transition-property: height;
		 transition-duration: 200ms;
	}
	 ul#tabs-list li label.panel-label:hover {
		 padding-top: 25px;
	}
	 ul#tabs-list li label.panel-label:hover::after {
		 height: 6px;
	}
	 #open-nav-label, #close-nav-label {
		 display: none;
	}
	 #nav-ctrl {
		 display: none;
	}
}
 @media all and (min-width: 900px) {
	 main {
		 width: 70%;
		 margin: 0 auto;
	}
}
</style>