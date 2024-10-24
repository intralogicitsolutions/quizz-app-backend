const { ImageUpload } = require("../models");

module.exports = {
    AuthService: require("./auth.service"),
    LanguageService: require("./language.service"),
    CategoryService: require("./category.service"),
    QuestionService: require("./question.service"),
    ExamDetailService: require("./exam_detail.service"),
    ScoreDetailService: require("./score_detail.service"),
    RankDetailService: require("./rank_detail.service"),
    ExamResultService: require("./exam_result.service"),
    ImageUploadService: require("./image_upload.service")
};
