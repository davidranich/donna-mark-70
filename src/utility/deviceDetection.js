export const isAppleDevice = () => {
    return /iPad|iPhone|Macintosh|Mac|iPod/.test(navigator.userAgent);
};

export const formatMapLink = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return isAppleDevice() ? `http://maps.apple.com/?q=${encodedAddress}` : `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
};