function decode(initialMask, replaced, address) {
    replaced.map((mask) => {
        const binaryAddr = address.toString(2).padStart(mask.length, '0');
        let addrStr = '';
        for (let i = 0; i < mask.length; i++) {
            addrStr += initialMask[i] === '0' ? binaryAddr[i] : mask[i];
        }

        return parseInt(addrStr, 2);
    });
}

const getAllMasks = (mask) => !mask.includes('X') ? mask : [getAllMasks(mask.replace('X', '0')), getAllMasks(mask.replace('X', '1')), ].flat();


function secondProblem() {
    const memory = {};
    let initialMask;
    let replaced;

    input.forEach(([i, v]) => {
        if (i === 'mask') {
            initialMask = v;
            replaced = getAllMasks(v);
        } else {
            const initialAddress = parseInt(i.match(/mem\[([0-9]+)\]/)[1], 10);
            const value = parseInt(v, 10);
            decode(initialMask, replaced, initialAddress).forEach(
                (decodedAddress) => {
                    memory[decodedAddress] = value;
                },
            );
        }
    });
    return Object.values(memory).reduce((a, b) => a + b);
};