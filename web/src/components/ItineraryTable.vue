<template>
  <div class="mt-4">
    <ul id="tabs-list">
      <li v-for="(itin, index) in itinerary.date.total_days" :key="index" :id="'li-for-panel-' + Number(index + 1)">
        <label class="panel-label" @click="selected = index" :id="index == selected ? 'checked' : ''">
         Day {{ Number(index + 1) }}
        </label>
      </li>
    </ul>

    <article id="panels">
      <div v-for="(itin, index) in activities" :key="index">
        <div v-if="index == selected">
           <draggable class="test" v-model="activities[index]" group="activities" @change="updateIndex">
               <div v-for="(element, index2) in activities[index]" :key="element.id" class="row list my-4">
                  <ActivityCard :activity="element" :index="index2" />
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

export default {
   props: ['itinerary', 'activities'],
   data: () => ({
      selected: 0,
   }),
   components: {
      draggable,
      ActivityCard
   },
   methods: {
      log: function(evt) {
         window.console.log(evt);
      },
      updateIndex() {
         console.log(this.activities)
         for (let act in this.activities) {
            let places = this.activities[act];
            for (let i = 0; i < places.length; i++) {
               places[i].order = i;
            }
         }
      }
   }
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