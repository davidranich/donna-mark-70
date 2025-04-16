<template>
    <div class="p-6 max-w-2xl mx-auto text-center">
      <h1 style="" class="text-3xl font-bold mb-4 title">You're in the books!</h1>
      <div class="flex justify-center items-center">
        <img :src="vintage_car" class="justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto">
      </div>
      <br>
      <div class="mb-4">
        <h2 class="text-lg font-semibold">Surprise 70th Birthday Party</h2>
        <p><a :href="mapLink" target="_blank" rel="noopener" class="map-link">{{ address }}</a></p>
        <p>June 28, 2025 @ 4:00 PM</p>
      </div>
      <hr>
      <span>Add To Your Calendar:</span>
      <br>
      <div class="flex flex-row justify-center center-items gap-5" style="color: black; padding-top: 10px;">
        <a :href="icsUrl" download><i class="fa-solid fa-envelope" target="_blank" style="font-size: 1.45em; color: #fff;"></i></a>
        <a :href="googleUrl" target="_blank"><img src="@/assets/google-calendar.svg"></a>
        <a :href="yahooUrl" target="_blank"><img src="@/assets/yahoo-calendar.svg"></a>
        <a :href="outlookUrl" target="_blank"><img src="@/assets/outlook-calendar.svg"></a>
      </div>
    </div>
  </template>
  
<script setup>
import vintage_car from '@/assets/undraw_vintage_q09n.svg';

const address = "Knights of Columbus, 25003 Little Mack Ave, St Clair Shores, MI 48080";
const encodedAddress = encodeURIComponent(address);

// detect device and pick map platform
const isAppleDevice = /iPad|iPhone|Macintosh|Mac|iPod/.test(navigator.userAgent);

const mapLink = isAppleDevice
  ? `http://maps.apple.com/?q=${encodedAddress}`
  : `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

const icsUrl = "data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0APRODID:Donna%20%26%20Mark's%2070th%20Surprise%20Birthday%20Party%0D%0ABEGIN:VEVENT%0D%0ADTSTART:20250628T200000Z%0D%0ADTEND:20250628T230000Z%0D%0ADTSTAMP:20250408T001727Z%0D%0ASUMMARY:Donna%20%26%20Mark's%2070th%20Surprise%20Birthday%20Party%0D%0ADESCRIPTION:We're%20throwing%20a%20surprise%2070th%20birthday%20party%20to%20celebrate%20a%20life%20full%20of%20love%2C%20laughter%2C%20and%20unforgettable%20memories!%5Cn%5CnJoin%20us%20for%20a%20joyful%20evening%20of%20dinner%2C%20drinks%2C%20and%20cherished%20moments%20with%20friends%20and%20family.%5Cn%5CnShhh...%20it's%20a%20surprise!%20The%20big%20reveal%20happens%20shortly%20after%204%3A00%20PM.%0D%0ALOCATION:25003%20Little%20Mack%2C%20St.%20Clair%20Shores%2C%20MI%2048080%20%0D%0AUID:58049%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR%0D%0A";

const googleUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250628T200000Z%2F20250628T230000Z&details=We%27re%20throwing%20a%20surprise%2070th%20birthday%20party%20to%20celebrate%20a%20life%20full%20of%20love%2C%20laughter%2C%20and%20unforgettable%20memories%21%0A%0AJoin%20us%20for%20a%20joyful%20evening%20of%20dinner%2C%20drinks%2C%20and%20cherished%20moments%20with%20friends%20and%20family.%0A%0AShhh...%20it%27s%20a%20surprise%21%20The%20big%20reveal%20happens%20shortly%20after%204%3A00%20PM.&location=25003%20Little%20Mack%2C%20St.%20Clair%20Shores%2C%20MI%2048080%20&text=Donna%20%26%20Mark%27s%2070th%20Surprise%20Birthday%20Party";

const yahooUrl = "https://calendar.yahoo.com/?desc=We%27re%20throwing%20a%20surprise%2070th%20birthday%20party%20to%20celebrate%20a%20life%20full%20of%20love%2C%20laughter%2C%20and%20unforgettable%20memories%21%0A%0AJoin%20us%20for%20a%20joyful%20evening%20of%20dinner%2C%20drinks%2C%20and%20cherished%20moments%20with%20friends%20and%20family.%0A%0AShhh...%20it%27s%20a%20surprise%21%20The%20big%20reveal%20happens%20shortly%20after%204%3A00%20PM.&dur=false&et=20250628T230000Z&in_loc=25003%20Little%20Mack%2C%20St.%20Clair%20Shores%2C%20MI%2048080%20&st=20250628T200000Z&title=Donna%20%26%20Mark%27s%2070th%20Surprise%20Birthday%20Party&v=60";

const outlookUrl = "https://outlook.live.com/calendar/0/action/compose?allday=false&body=We%27re%20throwing%20a%20surprise%2070th%20birthday%20party%20to%20celebrate%20a%20life%20full%20of%20love%2C%20laughter%2C%20and%20unforgettable%20memories%21%0A%0AJoin%20us%20for%20a%20joyful%20evening%20of%20dinner%2C%20drinks%2C%20and%20cherished%20moments%20with%20friends%20and%20family.%0A%0AShhh...%20it%27s%20a%20surprise%21%20The%20big%20reveal%20happens%20shortly%20after%204%3A00%20PM.&enddt=2025-06-28T19%3A00%3A00&location=25003%20Little%20Mack%2C%20St.%20Clair%20Shores%2C%20MI%2048080%20&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2025-06-28T16%3A00%3A00&subject=Donna%20%26%20Mark%27s%2070th%20Surprise%20Birthday%20Party";
</script>
  
<style scoped>
hr {
    margin: 0.75rem 0;
    color: #f8f8f8;
}

.map-link:hover {
    cursor: pointer;
    color: #d1d6b7;
}

.title {
    font-family: Mukta, sans-serif;
    font-weight: 100;
    letter-spacing: 5px;
}
</style>