<template>
  <div class="dentures">
       <h3 class="sub_details">
          {{ dentureObj.title }}
       </h3>
        <span class="details">
        {{ dentureObj.details }}
        </span>
        <ul class="info">
          <li v-for="denture in dentureObj.list" class="denture_item" :key="denture">
            <div :class="['square_icon', dentureObj.type]">
              <img :src="dentureObj.icon" alt="">
            </div>
            <div class="info">
              <span class="denture_name">{{ denture.title }}</span>
              <p class="denture_info">{{ denture.info }}</p>
            </div>
          </li>
        </ul>
      </div>
</template>

<script>

export default {
 name: 'DentureList',
 props: {
  dentureObj: {
   type: Object,
   required: false,
  default: () => ({})
 }
 },
}
</script>

<style>
/* Add your styles here if needed */
</style>

