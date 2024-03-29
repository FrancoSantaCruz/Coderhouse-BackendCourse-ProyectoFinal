import { generateAllProducts } from '../utils/faker.js';
import { logger } from '../utils/winston.js';

export const mockingProducts = async (req, res, next) => {
    try {
        const products = generateAllProducts(100);
        res.status(200).json({ message: "Fake products generated.", products });
    } catch (error) {
        res.status(error.status).send({ Type: error.name, Error: error.message })
    }
}

export const loggerTest = async (req, res, next) => {
    try {
        logger.critical("Logger critical.");
        logger.error("Logger error.");
        logger.warning("Logger warning.");
        logger.info("Logger info.");
        logger.http("Logger http.");
        logger.debug("Logger debug.");
        
        res.send("Probando los custom loggers de winston 🤠")
    } catch (error) {
        res.status(500).send({ Type: error.name, Error: error.message })
    }
}