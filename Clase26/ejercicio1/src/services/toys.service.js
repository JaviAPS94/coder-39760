import { TOYSDAO } from "../dao/index.js";

const saveToy = async (toy) => {
    await TOYSDAO.save(toy);
    return toy;
}

const getToys = async () => {
    const toys = await TOYSDAO.getAll();
    return toys;
}

export {
    saveToy,
    getToys
}