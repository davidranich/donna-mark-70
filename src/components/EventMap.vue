<template>
<GMapMap
    :center="venueCoordinates"
    :zoom="19"
    :disableDefaultUI="true"
    class="gmap"
  >
<GMapMarker
    :position="venueMarker.position"
    >
    <GMapInfoWindow
        :opened="true"
        :closeclick="false"
        class="flex"
    >
        <div class="text-center p-1 flex flex-col info-text items-center text-xs sm:text-base md:text-base">
            <img class="w-20 sm:w-30 md:w-30 sm:max-w-xl md:max-w-2xl" src="https://upload.wikimedia.org/wikipedia/en/9/93/KoC_Logotype1.png">
            <span class="font-bold text-xs" style="color: #edaa38;">Knights of Columbus</span>
            <span class="map-link text-xs"><a :href="mapLink" target="_blank">25003 Little Mack Ave, St Clair Shores, MI 48080</a></span>
            <span class="font-bold text-xs" style="color: #263876;">June 28th, 2025 @ 4:00 PM</span>
        </div>
    </GMapInfoWindow>
</GMapMarker>
    </GMapMap>
</template>
  
<script setup>
import { onMounted, onBeforeMount } from 'vue';

const address = "Knights of Columbus, 25003 Little Mack Ave, St Clair Shores, MI 48080";
const encodedAddress = encodeURIComponent(address);

// detect device and pick map platform
const isAppleDevice = /iPad|iPhone|Macintosh|Mac|iPod/.test(navigator.userAgent);

const mapLink = isAppleDevice
  ? `http://maps.apple.com/?q=${encodedAddress}`
  : `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

const venueCoordinates = {
    lat: 42.47977001902156,
    lng: -82.9077743008792
};

const venueMarker = {
    position: {
        lat: venueCoordinates.lat, lng: venueCoordinates.lng
    }
};

const removeDefaultMapControls = () => {
    let elementsLoaded = setInterval(() => {
        let element = document.querySelectorAll('.gm-style-iw-chr');
        if (element.length > 0) {
            removeMultipleElements('.gm-style-iw-chr');
            removeMultipleElements('.gm-style-mtc');
            removeMultipleElements('.gm-control-active');
            removeMultipleElements('.gm-svpc');
            clearInterval(elementsLoaded);
        }
    }, 500);
};

const removeMultipleElements = (elements_class) => {
    let elementsArray = document.querySelectorAll(elements_class);
    elementsArray.forEach(element => {
        element.style.display = 'none';
    });
};

onMounted(() => {
    removeDefaultMapControls();
    window.addEventListener('resize', removeDefaultMapControls);
});

onBeforeMount(() => {
    removeDefaultMapControls();
    window.addEventListener('resize', removeDefaultMapControls);
});
</script>

<style scoped>
.info-text {
    font-family: Mukta, sans-serif;
}

.map-link:hover {
    cursor: pointer;
    color: #263876;
}

@media (min-width: 10rem) {
    .gmap {
    width: 80vw; 
    height: 60vw;
    }
}

/* 'sm' */
@media (min-width: 76rem) {
    .gmap {
    width: 80vw;
    height: 39vw;
    }
}

/* 'xl' */
@media (min-width: 80rem) {
    .gmap {
    width: 65vw; 
    height: 20vw;
    }
}

/* '2xl' */
@media (min-width: 96rem) {
    .gmap {
    width: 50vw; 
    height: 20vw;
    }
}

/* '3xl' */
@media (min-width: 112rem) {
    .gmap {
    width: 50vw;
    height: 20vw;
    }
}

/* '4xl' */
@media (min-width: 128rem) {
    .gmap {
    width: 42vw; 
    height: 20vw;
    }
}

/* '5xl' */
@media (min-width: 144rem) {
    .gmap {
    width: 37vw; 
    height: 20vw;
    }
}
</style>