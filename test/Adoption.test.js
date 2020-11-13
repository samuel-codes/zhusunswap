const Adoption = artifacts.require('Adoption'); // 被测试合约

contract('Adoption', (accounts) => {
    let adoption;
    let expectedAdopter;

    before(async () => {
        adoption = await Adoption.deployed();
    });

    //领养宠物id 8 到一个账号地址
    it("adopting a pet and retrieving account addresses", async () => {
        await adoption.adopt(8, { from: accounts[0] });
        expectedAdopter = accounts[0];
        console.log("expectedAdopter", expectedAdopter);
    });

    //取出宠物id 的领养者
    it("can fetch the address of an owner by pet id", async () => {
        const adopter = await adoption.adopters(8);
        assert.equal(adopter, expectedAdopter, "The owner of the adopted pet should be the first account.");
    });

    //测试所有宠物主人的取回
    it("can fetch the collection of all pet owners' addresses", async () => {
        const adopters = await adoption.getAdopters();
        assert.equal(adopters[8], expectedAdopter, "The owner of the adopted pet should be in the collection.");
    });
});

