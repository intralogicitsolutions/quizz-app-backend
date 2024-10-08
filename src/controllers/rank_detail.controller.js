const { RankDetailService } = require("../services");
const { Response } = require("../middlewares");
const { StatusCodes, ResponseMessage } = require("../constants");
const { Logger } = require("../helper");

class RankDetailController { }

RankDetailController.getRankDetails = async (req, res) => {
    try {
        Logger.info(`'Get RankDetails' API Called`, { user_id: req?.user?._id, method: req?.method });
        await RankDetailService.getRankDetails(req, res);
    } catch (error) {
        Logger.error(`'Get RankDetail' API Error: ${error.message}`, { user_id: req?.user?._id, method: req?.method });
        Response.errors(req, res, StatusCodes.HTTP_INTERNAL_SERVER_ERROR, ResponseMessage.TRY_AGAIN_LATER);
    }
}

RankDetailController.getRankDetailById = async (req, res) => {
    try {
        Logger.info(`'Get RankDetails By Id' API Called`, { user_id: req?.user?._id, method: req?.method });
        await RankDetailService.getRankDetailById(req, res);
    } catch (error) {
        Logger.error(`'Get RankDetail By Id' API Error: ${error.message}`, { user_id: req?.user?._id, method: req?.method });
        Response.errors(req, res, StatusCodes.HTTP_INTERNAL_SERVER_ERROR, ResponseMessage.TRY_AGAIN_LATER);
    }
}

RankDetailController.createRankDetail = async (req, res) => {
    try {
        Logger.info(`'Create RankDetail' API Called`, { user_id: req?.user?._id, method: req?.method });
        await RankDetailService.createRankDetail(req, res);
    } catch (error) {
        Logger.error(`'Create RankDetail' API Error: ${error.message}`, { user_id: req?.user?._id, method: req?.method });
        Response.errors(req, res, StatusCodes.HTTP_INTERNAL_SERVER_ERROR, ResponseMessage.TRY_AGAIN_LATER);
    }
}

RankDetailController.updateRankDetail = async (req, res) => {
    try {
        if (!req?.body?._id) {
            Logger.warn(`'Update RankDetail' API Warning: _id is required`, { user_id: req?.user?._id, method: req?.method });
            return Response.errors(req, res, StatusCodes.HTTP_BAD_REQUEST, '_id is required');
        }
        Logger.info(`'Update RankDetail' API Called`, { user_id: req?.user?._id, method: req?.method });
        await RankDetailService.updateRankDetail(req, res);
    } catch (error) {
        Logger.error(`'Update RankDetail' API Error: ${error.message}`, { user_id: req?.user?._id, method: req?.method });
        Response.errors(req, res, StatusCodes.HTTP_INTERNAL_SERVER_ERROR, ResponseMessage.TRY_AGAIN_LATER);
    }
}


module.exports = RankDetailController;