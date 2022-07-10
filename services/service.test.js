const {getInfo, getInfoByid} = require("./service");

jest.mock("./service");

describe("Receive random objects Test", () => {
    test('I should receive ramdom categories', async () => {
        const result = await getInfo();
        expect(result.data).toHaveLength(7);
        expect(result.data[2].id).toEqual(1);
        expect(result.data[2].name).toEqual('hats');
    });

    test('I should receive one category by ID', async () => {
        const result = await getInfoByid(5);
        console.log('result', result.data)
        expect(result.data.id).toEqual(5);
        expect(result.data.name).toEqual('boxes');
    });
});