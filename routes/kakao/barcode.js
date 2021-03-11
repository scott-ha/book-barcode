var express = require('express');
var router = express.Router();

var barcode, kakao_data, kakao_res;

router.post('/', function(req, res, next) {
  console.log(req.body);

  barcode = JSON.parse(req.body.action.params.barcode);

  kakao_data = {
    "version": "2.0",
    "template": {
      "outputs": [{
        "basicCard": {
          "title": "하늘님",
          "description": "찍으신 바코드 num(ISBN)" + barcode,
          "buttons": [{
              "action": "webLink",
              "label": "aa 🗓",
              "webLinkUrl": "https://yjgcorp.com/"
            },
            {
              "action": "webLink",
              "label": "bb 📝",
              "blockId": "https://yjgcorp.com/"
            },
            {
              "action": "webLink",
              "label": "cc 🤔",
              "blockId": "https://yjgcorp.com/"
            }
          ]
        }
      }]
    }
  }

  kakao_res = kakao_data;
  res.status(200).send(kakao_res);
  // initialize
  kakao_data, kakao_res = '';
});

module.exports = router;
