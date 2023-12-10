class BaconIpsumApi {
    async getRandomBaconIpsum() {
        const baconIpsum = await $.get(BACON_IPSUM_API);
        return baconIpsum[0];
    }
}
