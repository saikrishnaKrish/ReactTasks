const extractImagesFromData = (data) => {
    return data.map((string) => {
        const matches = string.match(/"([^"]+)"/);
        return matches && matches[1];
    });
};

export default extractImagesFromData;
