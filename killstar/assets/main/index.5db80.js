window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AdaptarManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b051yBFf9PcYEMxBasuvrY", "AdaptarManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AdaptarManager = function() {
      function AdaptarManager() {
        this.fullWidth = 0;
        this.fullHeight = 0;
      }
      AdaptarManager.getInstance = function() {
        null == this.instance && (this.instance = new AdaptarManager());
        return this.instance;
      };
      AdaptarManager.prototype.initLandscape = function() {
        var designSize = cc.view.getFrameSize();
        var deviceHeight = designSize.height;
        var deviceWidth = designSize.width;
        this.fullWidth = deviceHeight / deviceWidth * AdaptarManager.WIDTH;
        this.fullHeight = AdaptarManager.WIDTH;
      };
      AdaptarManager.prototype.initVertical = function() {
        var designSize = cc.view.getFrameSize();
        var deviceHeight = designSize.height;
        var deviceWidth = designSize.width;
        this.fullHeight = deviceHeight / deviceWidth * AdaptarManager.WIDTH;
        this.fullWidth = AdaptarManager.WIDTH;
      };
      AdaptarManager.prototype.adaptarBg = function(bgNode) {
        if (bgNode) {
          bgNode.width = this.fullWidth;
          bgNode.height = this.fullHeight;
          bgNode.setPosition(cc.v2(0, 0));
        }
      };
      AdaptarManager.prototype.adaptarLogo = function(logoNode) {
        logoNode && (logoNode.y = this.fullHeight / 2 - 380);
      };
      AdaptarManager.prototype.adapterVerticalUIBottom = function(node) {
        if (node) {
          node.y = -this.fullHeight / 2 + 230;
          this.fullHeight / this.fullWidth > 2 && (node.y = -this.fullHeight / 2 + 360);
        }
      };
      AdaptarManager.prototype.adapterFightUIBottom = function(node) {
        if (node) {
          node.y = -450;
          this.fullHeight > 1334 ? node.getChildByName("iconBottom").y = -150 : this.fullHeight <= 1334 && (node.getChildByName("iconBottom").y = -75);
        }
      };
      AdaptarManager.prototype.adapterDarwMoneyDownUI = function(node) {
        node && (node.y = -this.fullHeight / 2 + 20);
      };
      AdaptarManager.prototype.adapterFightUITop = function(node) {
        if (node) if (this.fullHeight >= 1400) {
          node.y = this.fullHeight / 2;
          node.getChildByName("dongtaiIcon") && (node.getChildByName("dongtaiIcon").y = node.getChildByName("dongtaiIcon").y - 120);
        } else node.y = this.fullHeight / 2;
      };
      AdaptarManager.prototype.adapterFightUIMoveNode = function(node) {
        node && (1280 == this.fullHeight ? node.y = -177 : this.fullHeight > 1280 && this.fullHeight < 1400 ? node.y = -177 - (this.fullHeight - 1280) / 2 : this.fullHeight >= 1400 && (node.y = -177 - (this.fullHeight - 1280 - 80) / 2));
      };
      AdaptarManager.prototype.adapterVerticalUITop = function(node) {
        if (node) {
          node.y = this.fullHeight / 2 - 70;
          this.fullHeight / this.fullWidth > 1.8 && (node.y = this.fullHeight / 2 - 70);
        }
      };
      AdaptarManager.prototype.isChangPing = function() {
        if (this.fullHeight >= 1400) return true;
        return false;
      };
      AdaptarManager.prototype.adapterVerticalUIFindTop = function(node) {
        if (node) {
          node.y = this.fullHeight / 2;
          this.fullHeight / this.fullWidth > 2 && (node.y = this.fullHeight / 2 - 170);
        }
      };
      AdaptarManager.prototype.adapterVerticalUIWnd = function(node) {
        if (node) {
          node.x = AdaptarManager.WIDTH / 2;
          node.y = this.fullHeight / 2;
        }
      };
      AdaptarManager.WIDTH = 720;
      AdaptarManager.HEIGHT = 1280;
      return AdaptarManager;
    }();
    exports.default = AdaptarManager;
    cc._RF.pop();
  }, {} ],
  AudioManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32715KSSCdMlYiL5ggFMo5Z", "AudioManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameDataManager_1 = require("./GameDataManager");
    var AudioManager = function() {
      function AudioManager() {
        this.musicVolume = .7;
        this.soundVolume = .7;
        this.bgMusicAudioID = -1;
      }
      AudioManager.getInstance = function() {
        null == this.instance && (this.instance = new AudioManager());
        return this.instance;
      };
      AudioManager.prototype.init = function() {
        cc.game.on(cc.game.EVENT_HIDE, function() {});
        cc.game.on(cc.game.EVENT_SHOW, function() {});
        this.musicVolume = GameDataManager_1.default.getInstance().userLocalData.musicVolume;
        this.soundVolume = GameDataManager_1.default.getInstance().userLocalData.soundVolume;
      };
      AudioManager.prototype.playMusic = function(url) {
        var self = this;
        cc.loader.loadRes(AudioManager.AUDIO_URL + url, cc.AudioClip, function(err, clip) {
          self.bgMusicAudioID >= 0 && cc.audioEngine.stop(self.bgMusicAudioID);
          self.bgMusicAudioID = cc.audioEngine.play(clip, true, self.musicVolume);
        });
      };
      AudioManager.prototype.playSound = function(url) {
        var self = this;
        cc.loader.loadRes(AudioManager.AUDIO_URL + url, cc.AudioClip, function(err, clip) {
          if (self.soundVolume > 0) var audioId = cc.audioEngine.play(clip, false, self.soundVolume);
        });
      };
      AudioManager.prototype.setSoundVolume = function(v) {
        if (this.soundVolume != v) {
          this.soundVolume = v;
          GameDataManager_1.default.getInstance().userLocalData.setSoundVolume(this.soundVolume);
        }
      };
      AudioManager.prototype.pauseBgM = function() {
        this.bgMusicAudioID >= 0 && cc.audioEngine.pause(this.bgMusicAudioID);
      };
      AudioManager.prototype.setMusicVolume = function(v) {
        this.bgMusicAudioID >= 0 && (v > 0 ? cc.audioEngine.resume(this.bgMusicAudioID) : cc.audioEngine.pause(this.bgMusicAudioID));
        if (this.musicVolume != v) {
          this.musicVolume = v;
          cc.audioEngine.setVolume(this.bgMusicAudioID, v);
          GameDataManager_1.default.getInstance().userLocalData.setMusicVolume(this.musicVolume);
        }
      };
      AudioManager.prototype.pauseAll = function() {
        cc.audioEngine.pauseAll();
      };
      AudioManager.prototype.resumeAll = function() {
        cc.audioEngine.resumeAll();
      };
      AudioManager.AUDIO_URL = "sounds/";
      return AudioManager;
    }();
    exports.default = AudioManager;
    cc._RF.pop();
  }, {
    "./GameDataManager": "GameDataManager"
  } ],
  BaseView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1916JdwVpLsZLtKRvzjZp6", "BaseView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ViewType = void 0;
    var ConstView_1 = require("./ConstView");
    var ListenerManager_1 = require("../Manager/ListenerManager");
    var ViewType = function() {
      function ViewType() {
        this.IsClearPopUpView = false;
        this.View_Type = ConstView_1.default.ViewType.View;
        this.Veiw_ShowMode = ConstView_1.default.VeiwShowMode.View;
      }
      return ViewType;
    }();
    exports.ViewType = ViewType;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseView = function(_super) {
      __extends(BaseView, _super);
      function BaseView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.VeiwType = new ViewType();
        _this.CloseAndDestory = false;
        return _this;
      }
      BaseView.prototype.start = function() {};
      BaseView.prototype.init = function(obj) {};
      BaseView.prototype.showBaseView = function() {
        this.node.active = true;
        this.VeiwType.View_Type == ConstView_1.default.ViewType.PopUp && this.ShowPopUpAnimation(function() {});
      };
      BaseView.prototype.showPopUpView = function() {};
      BaseView.prototype.hidePopUpView = function() {};
      BaseView.prototype.Clsose = function() {
        var _this = this;
        this.VeiwType.View_Type == ConstView_1.default.ViewType.PopUp;
        this.HidePopUpAnimation(function() {
          _this.onClose();
        });
      };
      BaseView.prototype.onClose = function() {
        this.node.destroy();
        ListenerManager_1.default.getInstance().removeMessageByTarget(this);
      };
      BaseView.prototype.ShowPopUpAnimation = function(callback) {
        callback();
      };
      BaseView.prototype.HidePopUpAnimation = function(callback) {
        callback();
      };
      BaseView = __decorate([ ccclass ], BaseView);
      return BaseView;
    }(cc.Component);
    exports.default = BaseView;
    cc._RF.pop();
  }, {
    "../Manager/ListenerManager": "ListenerManager",
    "./ConstView": "ConstView"
  } ],
  CheckBlock: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a0f93DTNJKIbI9a1C8XiQc", "CheckBlock");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightConst_1 = require("./FightConst");
    var FightManger_1 = require("./FightManger");
    var FunUtils_1 = require("../../core/Util/FunUtils");
    var CheckBlock = function() {
      function CheckBlock() {
        this.Map = null;
        this.MapData = null;
        this.HintTable = [];
      }
      CheckBlock.prototype.init = function() {
        var num = FightConst_1.default.FightNum.rowNum;
        this.Map = FightManger_1.default.getInstance().Map;
        this.MapData = [];
        for (var row = 0; row < num; row++) {
          this.MapData[row] = [];
          for (var vertical = 0; vertical < num; vertical++) {
            this.MapData[row][vertical] = [];
            if (this.Map[row][vertical]) {
              this.Map[row][vertical].isSingle = false;
              this.Map[row][vertical].initItemType();
            }
          }
        }
      };
      CheckBlock.prototype.check = function() {
        var num = FightConst_1.default.FightNum.rowNum;
        for (var row = 0; row < num; row++) for (var vertical = 0; vertical < num; vertical++) if (this.Map[row][vertical]) {
          this.pushMapData(this.Map[row][vertical], row, vertical, true);
          var target = this.Map[row][vertical];
          var x = target.xId;
          var y = target.yId;
          var isSingle = true;
          x - 1 >= 0 && this.Map[x - 1][y] && this.Map[x - 1][y].colorType == target.colorType && (isSingle = false);
          x + 1 < FightConst_1.default.FightNum.rowNum && this.Map[x + 1][y] && this.Map[x + 1][y].colorType == target.colorType && (isSingle = false);
          y - 1 >= 0 && this.Map[x][y - 1] && this.Map[x][y - 1].colorType == target.colorType && (isSingle = false);
          y + 1 < FightConst_1.default.FightNum.rowNum && this.Map[x][y + 1] && this.Map[x][y + 1].colorType == target.colorType && (isSingle = false);
          this.Map[row][vertical].isSingle = isSingle;
        }
      };
      CheckBlock.prototype.pushMapData = function(target, row, vertical, isSet) {
        if (isSet) for (var row_1 = 0; row_1 < FightConst_1.default.FightNum.rowNum; row_1++) for (var vertical_1 = 0; vertical_1 < FightConst_1.default.FightNum.rowNum; vertical_1++) this.Map[row_1][vertical_1] && (this.Map[row_1][vertical_1].isPushMapData = false);
        target.isPushMapData = true;
        this.MapData[row][vertical].push(target);
        var x = target.xId;
        var y = target.yId;
        x - 1 >= 0 && this.Map[x - 1][y] && (this.Map[x - 1][y].isPushMapData || this.Map[x - 1][y].colorType != target.colorType || this.pushMapData(this.Map[x - 1][y], row, vertical, false));
        x + 1 < FightConst_1.default.FightNum.rowNum && this.Map[x + 1][y] && (this.Map[x + 1][y].isPushMapData || this.Map[x + 1][y].colorType != target.colorType || this.pushMapData(this.Map[x + 1][y], row, vertical, false));
        y - 1 >= 0 && this.Map[x][y - 1] && (this.Map[x][y - 1].isPushMapData || this.Map[x][y - 1].colorType != target.colorType || this.pushMapData(this.Map[x][y - 1], row, vertical, false));
        y + 1 < FightConst_1.default.FightNum.rowNum && this.Map[x][y + 1] && (this.Map[x][y + 1].isPushMapData || this.Map[x][y + 1].colorType != target.colorType || this.pushMapData(this.Map[x][y + 1], row, vertical, false));
      };
      CheckBlock.prototype.checkGameOver = function() {
        var num = FightConst_1.default.FightNum.rowNum;
        var singleNum = 0;
        for (var row = 0; row < num; row++) for (var vertical = 0; vertical < num; vertical++) if (this.Map[row][vertical]) {
          if (!this.Map[row][vertical].isSingle) return {
            isGameOver: false,
            singleNum: singleNum
          };
          singleNum++;
        }
        return {
          isGameOver: true,
          singleNum: singleNum
        };
      };
      CheckBlock.prototype.setHint = function() {
        var num = FightConst_1.default.FightNum.rowNum;
        var length = 0;
        for (var row = 0; row < num; row++) for (var vertical = 0; vertical < num; vertical++) if (this.MapData[row][vertical] && this.MapData[row][vertical].length > 1) {
          var dataLength = this.MapData[row][vertical].length;
          if (dataLength > length) {
            length = dataLength;
            this.HintTable = this.MapData[row][vertical];
          }
        }
      };
      CheckBlock.prototype.checkInColor = function() {
        var tabel = [];
        var num = FightConst_1.default.FightNum.rowNum;
        for (var row = 0; row < num; row++) for (var vertical = 0; vertical < num; vertical++) this.Map[row][vertical] && this.MapData[row][vertical] && 1 == this.MapData[row][vertical].length && tabel.push(this.MapData[row][vertical]);
        if (tabel.length >= 1) {
          var num_1 = FunUtils_1.default.getRandom(0, tabel.length - 1);
          return tabel[num_1];
        }
        for (var row = 0; row < num; row++) for (var vertical = 0; vertical < num; vertical++) if (this.Map[row][vertical] && this.MapData[row][vertical]) return this.MapData[row][vertical];
      };
      CheckBlock.prototype.checkHongBaoShow = function() {
        var length = 0;
        var num = FightConst_1.default.FightNum.rowNum;
        for (var row = 0; row < num; row++) for (var vertical = 0; vertical < num; vertical++) this.Map[row][vertical] && length++;
        if (length <= 80) return true;
        return false;
      };
      CheckBlock.prototype.checkBomb = function(row, vertical) {
        var table = [];
        table.push(this.Map[row][vertical]);
        if (row - 1 >= 0) {
          this.Map[row - 1][vertical] && table.push(this.Map[row - 1][vertical]);
          vertical - 1 >= 0 && this.Map[row - 1][vertical - 1] && table.push(this.Map[row - 1][vertical - 1]);
          vertical + 1 <= 9 && this.Map[row - 1][vertical + 1] && table.push(this.Map[row - 1][vertical + 1]);
        }
        if (row + 1 <= 9) {
          this.Map[row + 1][vertical] && table.push(this.Map[row + 1][vertical]);
          vertical - 1 >= 0 && this.Map[row + 1][vertical - 1] && table.push(this.Map[row + 1][vertical - 1]);
          vertical + 1 <= 9 && this.Map[row + 1][vertical + 1] && table.push(this.Map[row + 1][vertical + 1]);
        }
        vertical - 1 >= 0 && this.Map[row][vertical - 1] && table.push(this.Map[row][vertical - 1]);
        vertical + 1 <= 9 && this.Map[row][vertical + 1] && table.push(this.Map[row][vertical + 1]);
        return table;
      };
      return CheckBlock;
    }();
    exports.default = CheckBlock;
    cc._RF.pop();
  }, {
    "../../core/Util/FunUtils": "FunUtils",
    "./FightConst": "FightConst",
    "./FightManger": "FightManger"
  } ],
  ConfigAllGuanKa: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae35aAV28pISYwRltwGMBKh", "ConfigAllGuanKa");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ConfigItemAllGuanKa = void 0;
    var ConfigItemAllGuanKa = function() {
      function ConfigItemAllGuanKa() {
        this.type = "";
        this.finds = [];
        this.need = 0;
      }
      return ConfigItemAllGuanKa;
    }();
    exports.ConfigItemAllGuanKa = ConfigItemAllGuanKa;
    var ConfigAllGuanKa = function() {
      function ConfigAllGuanKa() {
        this.datas = [];
        this.map = null;
      }
      ConfigAllGuanKa.prototype.load = function(jsonData) {
        var json = jsonData.json;
        this.map = new Map();
        for (var index = 0; index < json.length; index++) {
          var element = json[index];
          var data = new ConfigItemAllGuanKa();
          data.type = element["type"];
          data.finds = element["finds"];
          data.need = element["need"];
          this.datas.push(data);
          this.map.set(index + 1, data);
        }
      };
      ConfigAllGuanKa.prototype.getData = function(id) {
        return this.map.get(id);
      };
      return ConfigAllGuanKa;
    }();
    exports.default = ConfigAllGuanKa;
    cc._RF.pop();
  }, {} ],
  ConfigLevel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6deedp4M2ZJeIe9/Pim/wh6", "ConfigLevel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ConfigItemLevel = void 0;
    var ConfigItemLevel = function() {
      function ConfigItemLevel() {
        this.id = 0;
        this.map = null;
      }
      return ConfigItemLevel;
    }();
    exports.ConfigItemLevel = ConfigItemLevel;
    var ConfigLevel = function() {
      function ConfigLevel() {
        this.datas = [];
        this.map = null;
      }
      ConfigLevel.prototype.load = function(jsonData) {
        var json = jsonData.json;
        this.map = new Map();
        for (var index = 0; index < json.length; index++) {
          var element = json[index];
          var data = new ConfigItemLevel();
          data.id = element["id"];
          data.map = element["levelInfo"];
          this.datas.push(data);
          this.map.set(data.id, data.map);
        }
      };
      ConfigLevel.prototype.getData = function(id) {
        return this.map.get(id);
      };
      return ConfigLevel;
    }();
    exports.default = ConfigLevel;
    cc._RF.pop();
  }, {} ],
  ConfigManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae1eckWzelKmLTQ3+qQpILm", "ConfigManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ConfigManager = void 0;
    var LoaderManager_1 = require("./LoaderManager");
    var ConfigLevel_1 = require("../JsonConfig/ConfigLevel");
    var ConfigManager = function() {
      function ConfigManager() {
        this.curLoadedCount = 0;
        this.sd_path = "json/";
        this.sd_path_level = "level";
        this.config_level = null;
        this.callback = null;
      }
      ConfigManager.getInstance = function() {
        null == this.instance && (this.instance = new ConfigManager());
        return this.instance;
      };
      ConfigManager.prototype.loadAllConfig = function(callback) {
        this.callback = callback;
        var arrPath = [ this.sd_path + this.sd_path_level ];
        LoaderManager_1.default.getInstance().loadResArr(arrPath, this.onLoaded.bind(this));
      };
      ConfigManager.prototype.onLoaded = function(assets) {
        this.config_level = new ConfigLevel_1.default();
        for (var index = 0; index < assets.length; index++) {
          var json = assets[index];
          json.name == this.sd_path_level && this.config_level.load(json);
        }
        this.callback && this.callback();
      };
      return ConfigManager;
    }();
    exports.ConfigManager = ConfigManager;
    cc._RF.pop();
  }, {
    "../JsonConfig/ConfigLevel": "ConfigLevel",
    "./LoaderManager": "LoaderManager"
  } ],
  ConstView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b6212zHMrdBY4KPzg4p4hkK", "ConstView");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ConstView = function() {
      function ConstView() {}
      ConstView.ViewNode = {
        Veiw_Node: "ViewNode",
        PopUp_Node: "PopUpNode"
      };
      ConstView.ViewPath = {
        ViewRoot_Name: "Canvas/ViewRoot"
      };
      ConstView.ViewType = {
        View: 0,
        PopUp: 1
      };
      ConstView.VeiwShowMode = {
        View: 0,
        PopUp: 1
      };
      ConstView.CleanPopUpView = {
        Clean: true,
        Unclean: false
      };
      ConstView.ViewKeyMap = {
        ViewLogin: {
          src: "prefabs/view/ViewLogin",
          type: ConstView.ViewType.View,
          showMode: ConstView.VeiwShowMode.View,
          isCleanPopUpView: ConstView.CleanPopUpView.Clean,
          ZOrder: 0
        },
        ViewFight: {
          src: "prefabs/view/ViewFight",
          type: ConstView.ViewType.View,
          showMode: ConstView.VeiwShowMode.View,
          isCleanPopUpView: ConstView.CleanPopUpView.Clean,
          ZOrder: 0
        },
        TextPopUp: {
          src: "prefabs/view/TextPopUp",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        LevelUpReward: {
          src: "prefabs/view/LevelUpReward",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        EveryDayReward: {
          src: "prefabs/view/EveryDayReward",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        hongBaoCunQianGuan: {
          src: "prefabs/view/hongBaoCunQianGuan",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        zhuanpan: {
          src: "prefabs/view/zhuanpan",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        HongBaoPopup: {
          src: "prefabs/view/HongBaoPopup",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        signRedWin: {
          src: "prefabs/view/signRedWin",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        proppop: {
          src: "prefabs/view/proppop",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        ViewFail: {
          src: "prefabs/view/ViewFail",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        ViewRegain: {
          src: "prefabs/view/ViewRegain",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        ViewGetProp: {
          src: "prefabs/view/ViewGetProp",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        ViewDrawMoneyMain: {
          src: "prefabs/view/ViewDrawMoneyMain",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        ViewDrawMoneyInput: {
          src: "prefabs/view/ViewDrawMoneyInput",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        ViewHongBao: {
          src: "prefabs/view/ViewHongBao",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        ViewDrawMoney: {
          src: "prefabs/view/ViewDrawMoney",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        ViewDrawMoneyTip: {
          src: "prefabs/view/ViewDrawMoneyTip",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        ViewDrawMoneyRecord: {
          src: "prefabs/view/ViewDrawMoneyRecord",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        ViewInviteFriend: {
          src: "prefabs/view/ViewInviteFriend",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        ViewSet: {
          src: "prefabs/view/ViewSet",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        },
        ViewPassOrInvite: {
          src: "prefabs/view/ViewPassOrInvite",
          type: ConstView.ViewType.PopUp,
          showMode: ConstView.VeiwShowMode.PopUp,
          isCleanPopUpView: ConstView.CleanPopUpView.Unclean,
          ZOrder: 0
        }
      };
      return ConstView;
    }();
    exports.default = ConstView;
    cc._RF.pop();
  }, {} ],
  Const: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "44849eQGFhO+L5tSWN4wK+Y", "Const");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const = function() {
      function Const() {}
      Const.Platform = {
        normal: 0,
        android: 1,
        ios: 2,
        browser: 3,
        wx: 4,
        qq: 5
      };
      Const.Url = {
        HttpUrl: "http://www.kttread.com/api_v2/",
        HttpUrlTest: "http://120.55.42.179/api_v2/",
        HttpYHXY: "http://www.kttread.com/xieyi/xxds/use.html",
        HttpYSZC: "http://www.kttread.com/xieyi/xxds/pri.html",
        HttpTestYHXY: "http://www.kttread.com/xieyi/xxds/use.html",
        HttpTestYSZC: "http://www.kttread.com/xieyi/xxds/pri.html",
        QQConfigUrl: "https://h5game.99aly.com/5agamewx/alywx/htkj/wx/xiaoxiao/qq/config/qq_config.json",
        QQTaskUrl: "https://h5game.99aly.com/5agamewx/alywx/htkj/wx/xiaoxiao/qq/task/task.json"
      };
      Const.Adapter = {
        FightUIBottom: 150,
        FightUITop: 0
      };
      Const.shareAdvShow = {
        share: 0,
        adv: 1
      };
      Const.Export = {
        isShow: true,
        iconUrl: "",
        exportUrl: "http://www.baidu.com"
      };
      Const.AndroidEvent = {
        loginpageview: {
          eventID: "loginpageview",
          eventName: "\u767b\u5f55\u6309\u94ae-\u754c\u9762"
        },
        login_guest: {
          eventID: "login-guest",
          eventName: "\u6e38\u5ba2\u767b\u5f55\u6309\u94ae"
        },
        login_weixin: {
          eventID: "login-weixin",
          eventName: "\u5fae\u4fe1\u767b\u5f55\u6309\u94ae"
        },
        gamemain: {
          eventID: "gamemain",
          eventName: "\u975e\u7b2c\u4e00\u6b21\u8fdb\u5165\u6e38\u620f\u754c\u9762"
        },
        new_gamemain: {
          eventID: "new-gamemain",
          eventName: "\u7b2c\u4e00\u6b21\u8fdb\u5165\u6e38\u620f\u754c\u9762"
        },
        guide_1: {
          eventID: "guide-1",
          eventName: "\u65b0\u624b\u5f15\u5bfc\u20141"
        },
        guide_2: {
          eventID: "guide-2",
          eventName: "\u65b0\u624b\u5f15\u5bfc-2"
        },
        level_up: {
          eventID: "level-up",
          eventName: "\u8fc7\u5173\u6210\u529f"
        },
        wx_gamemain: {
          eventID: "wx-gamemain",
          eventName: "\u5934\u50cf\u70b9\u51fb\u6309\u94ae"
        },
        shuaxin: {
          eventID: "shuaxin",
          eventName: "\u5237\u65b0\u6309\u94ae"
        },
        shipin_shuaxin: {
          eventID: "shipin-shuaxin",
          eventName: "\u83b7\u53d6\u5237\u65b0\u770b\u89c6\u9891"
        },
        chuizi: {
          eventID: "chuizi",
          eventName: "\u9524\u5b50\u6309\u94ae"
        },
        shipin_chuizi: {
          eventID: "shipin-chuizi",
          eventName: "\u83b7\u53d6\u9524\u5b50\u770b\u89c6\u9891"
        },
        huanse: {
          eventID: "huanse",
          eventName: "\u6362\u8272\u6309\u94ae"
        },
        shipin_huanse: {
          eventID: "shipin-huanse",
          eventName: "\u83b7\u53d6\u6362\u8272\u770b\u9053\u5177"
        },
        xiaochu: {
          eventID: "xiaochu",
          eventName: "\u6d88\u9664\u6309\u94ae"
        },
        zhadan: {
          eventID: "zhadan",
          eventName: "\u70b8\u5f39\u6309\u94ae"
        },
        shipin_xiaochu: {
          eventID: "shipin-xiaochu",
          eventName: "\u83b7\u53d6\u6d88\u9664\u770b\u89c6\u9891"
        },
        qipao_exposure: {
          eventID: "qipao-exposure",
          eventName: "\u6c14\u6ce1\u663e\u793a"
        },
        qipao_click: {
          eventID: "qipao-click",
          eventName: "\u6c14\u6ce1\u70b9\u51fb"
        },
        shipin_shuangbei: {
          eventID: "shipin-shuangbei",
          eventName: "\u89c6\u9891\u53cc\u500d"
        },
        qipao_close: {
          eventID: "qipao-close",
          eventName: "\u6c14\u6ce1\u5f39\u51fa\u7ea2\u5305\u5173\u95ed"
        },
        guoguanshibai: {
          eventID: "guoguanshibai",
          eventName: "\u8fc7\u5173\u5931\u8d25"
        },
        shipin_fuhuo: {
          eventID: "shipin-fuhuo",
          eventName: "\u5931\u8d25\u770b\u89c6\u9891\u590d\u6d3b"
        },
        chongxinshiwan: {
          eventID: "chongxinshiwan",
          eventName: "\u5931\u8d25\u91cd\u73a9\u672c\u5173"
        },
        guoguanhongbao_exposure: {
          eventID: "guoguanhongbao-exposure",
          eventName: "\u8fc7\u5173\u7ea2\u5305\u5f39\u6846"
        },
        shipin_guoguanhongbao: {
          eventID: "shipin-guoguanhongbao",
          eventName: "\u770b\u89c6\u9891\u5f97\u5230\u8fc7\u5173\u7ea2\u5305"
        },
        guanbihongbao: {
          eventID: "guanbihongbao",
          eventName: "\u5173\u95ed\u7ea2\u5305\u4e0d\u5f39\u89c6\u9891"
        },
        guanbihongbao_quanping: {
          eventID: "guanbihongbao-quanping",
          eventName: "\u5173\u95ed\u7ea2\u5305\u5f39\u89c6\u9891"
        },
        yaoqinghongbao_exposure: {
          eventID: "yaoqinghongbao-exposure",
          eventName: "\u9080\u8bf7\u7ea2\u5305\u5f39\u6846"
        },
        shipin_yaoqinghongbao: {
          eventID: "shipin-yaoqinghongbao",
          eventName: "\u770b\u89c6\u9891\u5f97\u5230\u9080\u8bf7\u7ea2\u5305"
        },
        fuzhi: {
          eventID: "fuzhi",
          eventName: "\u63d0\u73b0\u9996\u9875\u590d\u5236\u6309\u94ae"
        },
        shuruyaoqingma: {
          eventID: "shuruyaoqingma",
          eventName: "\u63d0\u73b0\u9996\u9875\u8f93\u5165\u9080\u8bf7\u7801\u6309\u94ae"
        },
        tixianjine: {
          eventID: "tixianjine",
          eventName: "\u63d0\u73b0\u9996\u9875\u63d0\u73b0\u4e2d\u95f4\u6309\u94ae"
        },
        tixian: {
          eventID: "tixian",
          eventName: "\u63d0\u73b0(\u5fae\u4fe1\u5934\u50cf)-\u6e38\u620f\u754c\u9762-\u70b9\u51fb"
        },
        wodeshuiguo: {
          eventID: "wodeshuiguo",
          eventName: "\u6211\u7684\u6c34\u679c-\u6e38\u620f\u754c\u9762-\u70b9\u51fb"
        },
        shezhi: {
          eventID: "shezhi",
          eventName: "\u63d0\u73b0\u9996\u9875\u8bbe\u7f6e\u6309\u94ae"
        },
        meirifenhong: {
          eventID: "meirifenhong",
          eventName: "\u6bcf\u65e5\u5206\u7ea2-\u70b9\u51fb-\u6e38\u620f\u754c\u9762"
        },
        choufenhong: {
          eventID: "choufenhong",
          eventName: "\u62bd\u5206\u7ea2\u661f-\u70b9\u51fb-\u6e38\u620f\u754c\u9762"
        },
        meirifuli: {
          eventID: "meirifuli",
          eventName: "\u6bcf\u65e5\u798f\u5229-\u70b9\u51fb-\u6e38\u620f\u754c\u9762"
        },
        yingshouji: {
          eventID: "yingshouji",
          eventName: "\u8d62\u624b\u673a-\u754c\u9762-\u70b9\u51fb"
        },
        dakatixian: {
          eventID: "dakatixian",
          eventName: "\u6253\u5361\u63d0\u73b0-\u754c\u9762-\u70b9\u51fb"
        },
        tixianno_wbd: {
          eventID: "tixianno-wbd",
          eventName: "\u63d0\u73b0\u5931\u8d25\u672a\u7ed1\u5b9a\u5fae\u4fe1"
        },
        tixianno_tjbz: {
          eventID: "tixianno-tjbz",
          eventName: "\u63d0\u73b0\u5931\u8d25\u6761\u4ef6\u4e0d\u6ee1\u8db3"
        },
        tixianno_wx: {
          eventID: "tixianno-wx",
          eventName: "\u63d0\u73b0\u5931\u8d25\u5fae\u4fe1\u672a\u8ba4\u8bc1"
        },
        weixinfenxiang: {
          eventID: "weixinfenxiang",
          eventName: "\u9080\u8bf7\u754c\u9762\u5fae\u4fe1\u5206\u4eab\u6309\u94ae"
        },
        fuzhiyaoqingma: {
          eventID: "fuzhiyaoqingma",
          eventName: "\u9080\u8bf7\u754c\u9762\u9080\u8bf7\u7801\u6309\u94ae"
        },
        fuzhiyaoqinglianjie: {
          eventID: "fuzhiyaoqinglianjie",
          eventName: "\u9080\u8bf7\u754c\u9762\u9080\u8bf7\u94fe\u63a5\u6309\u94ae"
        },
        lmrwmktx: {
          eventID: "lwmktx",
          eventName: "\u9886\u6bcf\u65e5\u65e0\u95e8\u69db\u63d0\u73b0"
        },
        qutixian: {
          eventID: "qutixian",
          eventName: "\u53bb\u63d0\u73b0"
        },
        qiandaoshouji: {
          eventID: "qiandaoshouji",
          eventName: "\u7b7e\u5230\u8d62\u624b\u673a-\u7ea2\u5305\u7ed3\u679c\u5f39\u7a97-\u70b9\u51fb"
        }
      };
      return Const;
    }();
    exports.default = Const;
    cc._RF.pop();
  }, {} ],
  DebugHT: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f0291L0OpNGI42ie9lzIF4n", "DebugHT");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SendDataHttp_1 = require("../core/Net/SendDataHttp");
    var Const_1 = require("./Const");
    var DebugHT = function() {
      function DebugHT() {}
      DebugHT.Test = function() {
        SendDataHttp_1.default.getInstance().HttpUrl = Const_1.default.Url.HttpUrlTest;
      };
      DebugHT.USE_VERSION_QQ = "version2";
      DebugHT.VERSION = "1.0.0";
      DebugHT.Package = "com.htkj.find";
      DebugHT.isDebug = false;
      return DebugHT;
    }();
    exports.default = DebugHT;
    cc._RF.pop();
  }, {
    "../core/Net/SendDataHttp": "SendDataHttp",
    "./Const": "Const"
  } ],
  EventManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b3dbeaPuddDvrdWvMb0rZa8", "EventManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager = function() {
      function EventManager() {}
      EventManager.getInstance = function() {
        null == this.instance && (this.instance = new EventManager());
        return this.instance;
      };
      EventManager.prototype.addBtnEvent = function(btnNode, thisNode, MyComponent, callback, customEventData) {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = thisNode;
        clickEventHandler.component = MyComponent;
        clickEventHandler.handler = callback;
        clickEventHandler.customEventData = customEventData;
        var button = btnNode.getComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);
      };
      return EventManager;
    }();
    exports.default = EventManager;
    cc._RF.pop();
  }, {} ],
  EveryDayReward: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2157fGe1zJBnYCQZO2ccjlj", "EveryDayReward");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var BaseView_1 = require("../../core/View/BaseView");
    var FightManger_1 = require("../fight/FightManger");
    var GameJSB_1 = require("../GameJSB");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EveryDayReward = function(_super) {
      __extends(EveryDayReward, _super);
      function EveryDayReward() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.watchVedioLabel = null;
        _this.scroolBar = null;
        _this.watchVedioNum = 20;
        return _this;
      }
      EveryDayReward.prototype.onLoad = function() {
        GameJSB_1.GameJSB.getAndroidData("/userdata/dayprizedata", "", "dayprizedata");
      };
      EveryDayReward.prototype.start = function() {};
      EveryDayReward.prototype.update = function(dt) {};
      EveryDayReward.prototype.initScrollViewContent = function(num) {
        var mask = cc.find("body/mask", this.node);
        var node = cc.find("huadong/yj ", mask);
        mask.getComponent(cc.ScrollView).content.height = node.height * (num + 1) * 1.15 + node.height / 2;
        for (var i = 0; i < num; i++) {
          var copyNode = cc.instantiate(node);
          copyNode.setParent(node.parent);
        }
      };
      EveryDayReward.prototype.initEveryDayRewards = function(obj) {
        var huadong = cc.find("body/mask/huadong", this.node);
        cc.find("top/watchBtn/watchNum", this.node).getComponent(cc.Label).string = "(" + obj.uservideolast + "/" + obj.dayvideonum + ")";
        huadong.children.length !== obj.dayprizedata.length && this.initScrollViewContent(obj.dayprizedata.length - 1);
        for (var i = 0; i < huadong.children.length; i++) {
          huadong.children[i].getChildByName("showLabel").getComponent(cc.Label).string = obj.dayprizedata[i].money + "\u5143";
          huadong.children[i].getChildByName("txjd").getChildByName("txjdLabel").getComponent(cc.Label).string = "" + obj.dayprizedata[i].money;
          huadong.children[i].getChildByName("ProgressBar").getComponent(cc.ProgressBar).progress = obj.dayprizedata[i].progress / 100;
          huadong.children[i].getChildByName("ProgressBar").getChildByName("barLabel").getComponent(cc.Label).string = (obj.dayprizedata[i].progress >= 100 ? 100 : obj.dayprizedata[i].progress) + "%";
          if (1 == obj.dayprizedata[i].cashstate) {
            cc.find("btn/ytx", huadong.children[i]).active = true;
            cc.find("btn/bktx", huadong.children[i]).active = false;
            cc.find("btn/tx", huadong.children[i]).active = false;
          } else if (0 == obj.dayprizedata[i].cashstate) if (obj.dayprizedata[i].progress >= 100) {
            cc.find("btn/ytx", huadong.children[i]).active = false;
            cc.find("btn/bktx", huadong.children[i]).active = false;
            cc.find("btn/tx", huadong.children[i]).active = true;
          } else if (obj.dayprizedata[i].progress < 100) {
            cc.find("btn/ytx", huadong.children[i]).active = false;
            cc.find("btn/bktx", huadong.children[i]).active = true;
            cc.find("btn/tx", huadong.children[i]).active = false;
          }
        }
        cc.find("bottom/ProgressBar", this.node).getComponent(cc.ProgressBar).progress = window["killStar"]["UserInfo"].gamelvl / 60;
      };
      EveryDayReward.prototype.clickWatchVedio = function() {
        var obj = window["killStar"]["dayprizedata"];
        var num = obj.uservideolast;
        num > 0 && GameJSB_1.GameJSB.getAndroidShowRv("\u6bcf\u65e5\u5956\u52b1");
      };
      EveryDayReward.prototype.clickRewards = function(e) {
        var obj = window["killStar"]["dayprizedata"];
        var childName;
        e.target.children.forEach(function(child) {
          child.active && (childName = child.name);
        });
        switch (childName) {
         case "bktx":
          GameJSB_1.GameJSB.getAndroidShowToast("\u5f53\u524d\u8fdb\u5ea6\u4e0d\u8db3\uff0c\u65e0\u6cd5\u9886\u53d6");
          break;

         case "ytx":
          console.log("\u5f88\u663e\u7136\u9886\u8fc7\u4e86");
          break;

         case "tx":
          var param = {
            money: parseFloat(cc.find("txjd/txjdLabel", e.target.parent).getComponent(cc.Label).string)
          };
          GameJSB_1.GameJSB.getAndroidData("/userdata/dayprizecash", JSON.stringify(param), "dayprizecash");
          FightManger_1.default.getInstance().ViewFight.showText = param.money + "\u5143\u63d0\u73b0\u5df2\u5230\u8d26!";
          ViewManager_1.default.getInstance().ShowView("TextPopUp");
          cc.find("tx", e.target).active = false;
          cc.find("ytx", e.target).active = true;
          cc.find("bktx", e.target).active = false;
        }
      };
      EveryDayReward.prototype.clickCloseBtn = function() {
        ViewManager_1.default.getInstance().CloseView("EveryDayReward");
        FightManger_1.default.getInstance().Status = 1;
      };
      __decorate([ property(cc.Label) ], EveryDayReward.prototype, "watchVedioLabel", void 0);
      __decorate([ property(cc.Node) ], EveryDayReward.prototype, "scroolBar", void 0);
      EveryDayReward = __decorate([ ccclass ], EveryDayReward);
      return EveryDayReward;
    }(BaseView_1.default);
    exports.default = EveryDayReward;
    cc._RF.pop();
  }, {
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/View/BaseView": "BaseView",
    "../GameJSB": "GameJSB",
    "../fight/FightManger": "FightManger"
  } ],
  FightConst: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5634fHezxKtIEJjtaE+pya", "FightConst");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FightConst = function() {
      function FightConst() {}
      FightConst.FightNum = {
        itemBlockWidth: 72,
        itemBlockBgNum: 8,
        rowNum: 10,
        gap: 0,
        startAnimationTime: 100,
        animationSpeed: .3,
        dissolveAnimationSpeed: .04,
        hintAnimationSpeed: .5,
        hintTime: 3e3,
        particleDissolveTime: 1e3,
        sortAnimationSpeed: .5,
        randomTime: .2
      };
      FightConst.GameStatus = {
        NoStart: 0,
        StartGame: 1,
        PauseGame: 2,
        EndGame: 3,
        DropStatus: 4,
        RandomDropStatus: 5,
        NOTouch: 6,
        HammerStatus: 7,
        RefrshStatus: 8,
        IncolorStatus: 9,
        RandomStatus: 10,
        BombStatus: 11
      };
      FightConst.ItemBlockStatus = {
        Normal: 0,
        YesTouch: 1,
        Dissolve: 2
      };
      FightConst.ItemBlockType = {
        Normal: 0,
        Double: 1,
        Bomb: 2
      };
      FightConst.TargetScore = {
        Score: 5,
        PropScore: 10,
        OneScore: 4e3,
        MaxOneScore: 8200,
        MaxScore: 2200,
        TwoScore: 1600,
        Table: [ 300, 50, 100 ]
      };
      FightConst.Score = {
        SmallType: 1,
        BigType: 2,
        SmallSize: 70,
        BigSize: 140
      };
      FightConst.PropTip = {
        PropRefrsh: "\u7acb\u5373\u5237\u65b0\u5f53\u524d\u5e03\u5c40",
        PropHammer: "\u53ef\u51fb\u788e\u4efb\u610f\u9009\u4e2d\u7684\u65b9\u5757",
        PropIncolor: "\u5c06\u9009\u4e2d\u7684\u65b9\u5757\u66f4\u6362\u6210\u4efb\u610f\u989c\u8272",
        PropRandom: "\u968f\u673a\u6d88\u9664\u573a\u4e0a6\u81f38\u4e2a\u65b9\u5757",
        PropBomb: "\u6d88\u96643X3\u533a\u57df\u7684\u65b9\u5757"
      };
      FightConst.randomRowNum = .25;
      FightConst.randomVerticalNum = .25;
      FightConst.VideoPropNum = 0;
      FightConst.TargetScoreTotal = 1900;
      FightConst.ItemScore = 20;
      FightConst = __decorate([ ccclass ], FightConst);
      return FightConst;
    }();
    exports.default = FightConst;
    cc._RF.pop();
  }, {} ],
  FightManger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf6bbVgbT9Owp1hJdR+qLzo", "FightManger");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightConst_1 = require("./FightConst");
    var FightPoolManger_1 = require("./FightPoolManger");
    var CheckBlock_1 = require("./CheckBlock");
    var GameDataManager_1 = require("../../core/Manager/GameDataManager");
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var FunUtils_1 = require("../../core/Util/FunUtils");
    var Guide_1 = require("../Guide");
    var PlatformManger_1 = require("../../core/platform/PlatformManger");
    var Const_1 = require("../Const");
    var ConfigManager_1 = require("../../core/Manager/ConfigManager");
    var AudioManager_1 = require("../../core/Manager/AudioManager");
    var AdaptarManager_1 = require("../../core/Manager/AdaptarManager");
    var GameJSB_1 = require("../GameJSB");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FightManger = function() {
      function FightManger() {
        this.ViewFight = null;
        this.Status = FightConst_1.default.GameStatus.NoStart;
        this.Map = null;
        this.CheckBlock = new CheckBlock_1.default();
        this.HintTimer = null;
        this.ScoreMovePos = null;
        this.HammerAniNode = null;
        this.inColor = null;
        this.HongBao = null;
        this.isHavehongBao = false;
        this.GameModel = null;
        this.showView = [];
        this.roundLevelNum = null;
        this.VideoBox = null;
      }
      FightManger_1 = FightManger;
      FightManger.getInstance = function() {
        null == FightManger_1.instance && (FightManger_1.instance = new FightManger_1());
        return FightManger_1.instance;
      };
      FightManger.prototype.pushShowView = function(viewName) {
        for (var index = 0; index < this.showView.length; index++) {
          var element = this.showView[index];
          if (element == viewName) return;
        }
        this.showView.push(viewName);
      };
      FightManger.prototype.getMapIs0 = function() {
        return GameDataManager_1.default.getInstance().userData.checkMapIs0();
      };
      FightManger.prototype.initData = function(ViewFight) {
        this.showView = [];
        this.ViewFight = ViewFight;
        this.isHavehongBao = false;
        this.ScoreMovePos = this.ViewFight.getNowTargetScorePos();
        FightManger_1.getInstance().Status = FightConst_1.default.GameStatus.NoStart;
        GameDataManager_1.default.getInstance().userData.map ? this.getMapIs0() ? FightManger_1.getInstance().failRestart() : FightManger_1.getInstance().regainContinue() : this.gameStartAni();
      };
      FightManger.prototype.gameStartAni = function() {
        this.ViewFight.gameStartAni();
      };
      FightManger.prototype.gameStart = function(isInit) {
        var _this = this;
        this.initMap(isInit).then(function(result) {
          isInit || _this.ViewFight.setTargetFinish();
          _this.Status = FightConst_1.default.GameStatus.StartGame;
          _this.CheckBlock.setHint();
          _this.checkGameOver();
          1 == GameDataManager_1.default.getInstance().userData.level && Guide_1.default.getInstance().openGuide().showPrompt(_this.CheckBlock.HintTable[0]);
        });
      };
      FightManger.prototype.getRandomMap = function(row, vertical) {
        var colorType = 0;
        var randomRowNum = 0;
        var randomVerticalNum = 0;
        var level = GameDataManager_1.default.getInstance().userData.level;
        if (level <= 3) {
          randomRowNum = .2;
          randomVerticalNum = .7;
        } else if (level <= 10) {
          randomRowNum = .2;
          randomVerticalNum = .5;
        } else {
          randomRowNum = .2;
          randomVerticalNum = .4;
        }
        if (0 == row && 0 == vertical) colorType = FunUtils_1.default.getRandom(1, 8); else {
          var type = 0;
          type = 0 == vertical ? GameDataManager_1.default.getInstance().userData.map[row - 1][9] : GameDataManager_1.default.getInstance().userData.map[row][vertical - 1];
          colorType = Math.random() <= randomRowNum ? type : 0 == row ? FunUtils_1.default.getRandom(1, 8) : Math.random() <= randomVerticalNum ? type = GameDataManager_1.default.getInstance().userData.map[row - 1][vertical] : FunUtils_1.default.getRandom(1, 8);
        }
        return colorType;
      };
      FightManger.prototype.initMap = function(isInit) {
        var _this = this;
        this.ViewFight.MapNode.removeAllChildren();
        this.cleanAllMap();
        this.ViewFight.playRefrshAction();
        this.Map && (this.Map = null);
        this.Map = [];
        isInit && (GameDataManager_1.default.getInstance().userData.map = []);
        var self = this;
        var num = FightConst_1.default.FightNum.rowNum;
        var mapJosn = ConfigManager_1.ConfigManager.getInstance().config_level.getData(1);
        return new Promise(function(resolve, reject) {
          for (var row = 0; row < num; row++) {
            self.Map[row] = [];
            isInit && (GameDataManager_1.default.getInstance().userData.map[row] = []);
            for (var vertical = 0; vertical < num; vertical++) {
              var colorType = FunUtils_1.default.getRandom(1, 8);
              if (isInit) {
                colorType = _this.getRandomMap(row, vertical);
                mapJosn && (colorType = mapJosn[row][vertical]);
              } else colorType = GameDataManager_1.default.getInstance().userData.map[row][vertical];
              self.Map[row][vertical] = _this.addItemBlock(row, vertical, colorType);
              row == num - 1 && vertical == num - 1 ? GameDataManager_1.default.getInstance().userData.setMap(row, vertical, colorType, true) : GameDataManager_1.default.getInstance().userData.setMap(row, vertical, colorType, false);
            }
          }
          _this.CheckBlock.init();
          _this.ViewFight.scheduleOnce(function() {
            _this.CheckBlock.check();
            resolve(void 0);
          }, (FightConst_1.default.FightNum.startAnimationTime + 50) * num / 1e3 + FightConst_1.default.FightNum.animationSpeed);
        });
      };
      FightManger.prototype.addItemBlock = function(row, vertical, colorType) {
        if (0 == colorType) return null;
        var x = -326;
        var y = 326;
        var parentNode = this.ViewFight.MapNode;
        x += FightConst_1.default.FightNum.itemBlockWidth * vertical;
        y -= FightConst_1.default.FightNum.itemBlockWidth * row;
        var pos = cc.v2(x, y);
        var data = {
          XId: row,
          YId: vertical,
          FightManger: this,
          StartTime: (FightConst_1.default.FightNum.rowNum - row) * FightConst_1.default.FightNum.startAnimationTime,
          Pos: pos,
          ColorType: colorType
        };
        var Itemblock = FightPoolManger_1.default.getInstance().createItemBlock(parentNode, pos, data);
        return Itemblock;
      };
      FightManger.prototype.stopAllItemBlockAni = function() {
        for (var row = 0; row < FightConst_1.default.FightNum.rowNum; row++) for (var vertical = 0; vertical < FightConst_1.default.FightNum.rowNum; vertical++) if (this.Map[row][vertical]) {
          this.Map[row][vertical].node.stopAllActions();
          this.Map[row][vertical].node.scale = 1;
        }
      };
      FightManger.prototype.objItemSort = function(type) {
        return function(a, b) {
          var value1 = a[type];
          var value2 = b[type];
          return value1 - value2;
        };
      };
      FightManger.prototype.loadRedBagAni = function() {
        var hongbaoAni = this.ViewFight.hongbaoAni;
        var node = cc.instantiate(hongbaoAni);
        node.setParent(this.ViewFight.node.getChildByName("ViewTop"));
        node.setPosition(0, -700);
      };
      FightManger.prototype.checkTouchBlock = function(xId, yId) {
        var _this = this;
        this.HintTimer && clearTimeout(this.HintTimer);
        if (this.CheckBlock) {
          this.stopAllItemBlockAni();
          if (this.Status == FightConst_1.default.GameStatus.HammerStatus) {
            this.Status = FightConst_1.default.GameStatus.NOTouch;
            this.Map[xId][yId].playDieAction(0, function() {
              _this.checkNeedFall(1);
            });
            FightPoolManger_1.default.getInstance().putHammerAni(this.HammerAniNode);
            this.propSuccess(FightConst_1.default.GameStatus.HammerStatus);
            this.addSocre(this.Map[xId][yId].node.x, this.Map[xId][yId].node.y, FightConst_1.default.Score.SmallType, FightConst_1.default.TargetScore.PropScore, FightConst_1.default.FightNum.dissolveAnimationSpeed, cc.color(255, 255, 0));
            var scoreData = GameDataManager_1.default.getInstance().userData.nowScore + FightConst_1.default.TargetScore.PropScore;
            GameDataManager_1.default.getInstance().userData.setNowScore(scoreData);
            this.ViewFight.setTargetFinish();
          } else {
            this.Status = FightConst_1.default.GameStatus.NOTouch;
            var ItemBlockTable = this.CheckBlock.MapData[xId][yId];
            var length_1 = ItemBlockTable.length;
            ItemBlockTable.sort(this.objItemSort("xId"));
            ItemBlockTable.sort(this.objItemSort("yId"));
            var scoreNum = 0;
            for (var index = 0; index < length_1; index++) {
              var score = FightConst_1.default.ItemScore;
              var element = ItemBlockTable[index];
              scoreNum += score;
              this.addSocre(element.node.x, element.node.y, FightConst_1.default.Score.SmallType, score, FightConst_1.default.FightNum.dissolveAnimationSpeed * (index + 1), cc.color(255, 255, 0));
              if (index == length_1 - 1) {
                var x = this.Map[xId][yId].node.x;
                0 == yId ? x += FightConst_1.default.FightNum.itemBlockWidth : 0;
                9 == yId ? x -= FightConst_1.default.FightNum.itemBlockWidth : 0;
                this.ViewFight.setScoreScale(length_1, scoreNum);
                this.addSocre(x, this.Map[xId][yId].node.y, FightConst_1.default.Score.BigType, scoreNum, FightConst_1.default.FightNum.dissolveAnimationSpeed * (index + 1), cc.color(255, 255, 0));
                var scoreData = GameDataManager_1.default.getInstance().userData.nowScore + scoreNum;
                GameDataManager_1.default.getInstance().userData.setNowScore(scoreData);
                element.playDieAction(FightConst_1.default.FightNum.dissolveAnimationSpeed * index, function() {
                  _this.checkNeedFall(length_1);
                });
              } else element.playDieAction(FightConst_1.default.FightNum.dissolveAnimationSpeed * index);
            }
            var isAc = this.ViewFight.setTargetFinish();
            isAc || this.setTextEffect(length_1);
          }
        }
      };
      FightManger.prototype.checkNeedFall = function(length) {
        if (this.Status == FightConst_1.default.GameStatus.NOTouch) {
          this.Status = FightConst_1.default.GameStatus.DropStatus;
          this.onItemBlockFall();
        }
      };
      FightManger.prototype.onFallData = function() {
        var fallNum = 0;
        var leftMoveNum = 0;
        var num = FightConst_1.default.FightNum.rowNum;
        for (var vertical = 0; vertical < num; vertical++) {
          fallNum = 0;
          for (var row = num - 1; row >= 0; row--) this.Map[row][vertical] && (this.Map[row][vertical].status == FightConst_1.default.ItemBlockStatus.Dissolve ? fallNum++ : 0 != fallNum && this.Map[row][vertical].playFallData({
            x: row + fallNum,
            y: vertical
          }));
        }
        for (var vertical = 0; vertical < num; vertical++) if (0 == GameDataManager_1.default.getInstance().userData.map[num - 1][vertical]) leftMoveNum++; else if (0 != leftMoveNum) for (var row = 0; row < num; row++) this.Map[row][vertical] && this.Map[row][vertical].playFallData({
          x: row,
          y: vertical - leftMoveNum
        });
        GameDataManager_1.default.getInstance().saveUserData();
      };
      FightManger.prototype.onItemBlockFall = function() {
        var _this = this;
        var fallNum = 0;
        var leftMoveNum = 0;
        var time = 0;
        var time1 = 0;
        var time2 = 0;
        var num = FightConst_1.default.FightNum.rowNum;
        var soundNum = 0;
        for (var vertical = 0; vertical < num; vertical++) {
          fallNum = 0;
          for (var row = num - 1; row >= 0; row--) if (this.Map[row][vertical]) if (this.Map[row][vertical].status == FightConst_1.default.ItemBlockStatus.Dissolve) {
            FightPoolManger_1.default.getInstance().putItemBlock(this.Map[row][vertical].node);
            this.Map[row][vertical] = null;
            fallNum++;
          } else if (0 != fallNum) {
            time2 = 1;
            soundNum++;
            time = .08;
            this.Map[row + fallNum][vertical] = this.Map[row][vertical];
            this.Map[row][vertical] = null;
            this.Map[row + fallNum][vertical].playFallAction(fallNum, {
              x: row + fallNum,
              y: vertical
            }, soundNum);
          }
        }
        for (var vertical = 0; vertical < num; vertical++) if (this.Map[num - 1][vertical]) {
          if (0 != leftMoveNum) {
            for (var row = 0; row < num; row++) if (this.Map[row][vertical]) {
              this.Map[row][vertical - leftMoveNum] = this.Map[row][vertical];
              this.Map[row][vertical] = null;
              this.Map[row][vertical - leftMoveNum].playLeftMoveAction(leftMoveNum, {
                x: row,
                y: vertical - leftMoveNum
              }, time * time2);
            }
            time1 = 1;
          }
        } else leftMoveNum++;
        this.ViewFight.scheduleOnce(function() {
          _this.CheckBlock.init();
          _this.CheckBlock.check();
          _this.CheckBlock.setHint();
          _this.addHongBao();
          _this.checkGameOver();
          GameDataManager_1.default.getInstance().saveUserData();
        }, time * time2 + .05 * time1);
      };
      FightManger.prototype.checkGameOver = function() {
        var checkData = this.CheckBlock.checkGameOver();
        if (checkData.isGameOver) this.Status == FightConst_1.default.GameStatus.RandomDropStatus ? this.GameOver() : this.gameOverDissolve(checkData.singleNum); else {
          this.Status = FightConst_1.default.GameStatus.StartGame;
          this.showHint();
        }
      };
      FightManger.prototype.gameOverDissolve = function(singleNum) {
        this.Status = FightConst_1.default.GameStatus.EndGame;
        var num = FightConst_1.default.FightNum.rowNum;
        var isWin = GameDataManager_1.default.getInstance().userData.getIsWin();
        var callbacks = function() {
          this.cleanAllMap();
          this.GameOver();
        }.bind(this);
        if (singleNum > 0 && !isWin) {
          this.Status = FightConst_1.default.GameStatus.StartGame;
          ViewManager_1.default.getInstance().ShowView("proppop");
        } else callbacks();
      };
      FightManger.prototype.GameOver = function() {
        this.Status = FightConst_1.default.GameStatus.EndGame;
        ViewManager_1.default.getInstance().CloseView("ViewHongBao");
        var isWin = GameDataManager_1.default.getInstance().userData.getIsWin();
        PlatformManger_1.default.getInstance().hideBigVideo();
        this.VideoBox && (2 == this.VideoBox.LevelTime ? this.VideoBox.putNode() : this.VideoBox.LevelTime++);
        if (isWin) this.gameWin(); else {
          var userData = GameDataManager_1.default.getInstance().userData;
          var now = userData.nowScore;
          userData.setNowScore(userData.targetScore);
          this.addSocre(0, 0, 2, userData.targetScore - now, .2, cc.color(255, 255, 0));
          GameDataManager_1.default.getInstance().saveUserData();
          var target = this.ViewFight.nodeMove.getChildByName("nowtarget_label").getComponent(cc.Label);
          target.string = FunUtils_1.default.format("{1}/{2}", userData.nowScore, GameDataManager_1.default.getInstance().userData.getTargetScore());
          this.ViewFight.nowScore = userData.nowScore;
          var progress = userData.nowScore / GameDataManager_1.default.getInstance().userData.getTargetScore();
          progress >= 1 && (progress = 1);
          this.ViewFight.setTargetPro(progress);
          this.gameWin();
        }
      };
      FightManger.prototype.cleanAllMap = function() {
        var num = FightConst_1.default.FightNum.rowNum;
        for (var row = 0; row < num; row++) for (var vertical = 0; vertical < num; vertical++) if (this.Map && this.Map[row][vertical]) {
          FightPoolManger_1.default.getInstance().putItemBlock(this.Map[row][vertical].node);
          this.Map[row][vertical] = null;
        }
      };
      FightManger.prototype.failRevive = function() {
        console.log("failrevive");
        this.cleanAllMap();
        var tergetSocre = GameDataManager_1.default.getInstance().userData.getTargetScore();
        var lastScore = GameDataManager_1.default.getInstance().userData.lastScore;
        var score = tergetSocre - lastScore - 1800;
        score < 0 && (score = 0);
        GameDataManager_1.default.getInstance().userData.nowScore = GameDataManager_1.default.getInstance().userData.lastScore + score;
        this.ViewFight.nowScore = GameDataManager_1.default.getInstance().userData.nowScore;
        GameDataManager_1.default.getInstance().userData.setLastScore();
        this.ViewFight.setNowTargetLabel();
        this.ViewFight.setTopLevelTargetLabel();
        this.gameStart(true);
      };
      FightManger.prototype.failViewRestart = function() {
        console.log("failViewRestart");
        this.cleanAllMap();
        GameDataManager_1.default.getInstance().userData.setLevel(1);
        GameDataManager_1.default.getInstance().userData.setNowScore(0);
        this.ViewFight.nowScore = GameDataManager_1.default.getInstance().userData.nowScore;
        this.ViewFight.setNowTargetLabel();
        this.ViewFight.setTopLevelTargetLabel();
        this.gameStart(true);
      };
      FightManger.prototype.failRestart = function() {
        console.log("failRestart");
        this.cleanAllMap();
        GameDataManager_1.default.getInstance().userData.nowScore = GameDataManager_1.default.getInstance().userData.lastScore;
        this.ViewFight.nowScore = GameDataManager_1.default.getInstance().userData.nowScore;
        this.ViewFight.setNowTargetLabel();
        this.ViewFight.setTopLevelTargetLabel();
        GameDataManager_1.default.getInstance().userData.setLastScore();
        this.gameStart(true);
      };
      FightManger.prototype.regainContinue = function() {
        this.ViewFight.nowScore = GameDataManager_1.default.getInstance().userData.nowScore;
        this.ViewFight.setNowTargetLabel();
        this.ViewFight.setTopLevelTargetLabel();
        this.gameStart(false);
      };
      FightManger.prototype.gameWin = function() {
        var _this = this;
        this.cleanAllMap();
        this.ViewFight.setLevleTarget(false);
        this.addPassEffect();
        var level = GameDataManager_1.default.getInstance().userData.level;
        this.roundLevelNum = level;
        GameDataManager_1.default.getInstance().userData.setLevel(level + 1);
        GameDataManager_1.default.getInstance().userData.setLastScore();
        GameDataManager_1.default.getInstance().userData.setMapNull();
        this.ViewFight.scheduleOnce(function() {
          _this.ViewFight.isWangZhuan ? _this.openViewWin() : _this.nextLevel();
          var prmam = {
            playlvl: level
          };
          GameJSB_1.GameJSB.getAndroidData("/userdata/upgamelvl", JSON.stringify(prmam), "upgamelvl");
        }, .7);
      };
      FightManger.prototype.addPassEffect = function() {
        var parentNode = this.ViewFight.MapNode;
        var pos = cc.v2(0, 360);
        var data = {};
        FightPoolManger_1.default.getInstance().createPassEffect(parentNode, pos, data);
      };
      FightManger.prototype.openViewWin = function() {
        this.ViewFight.hongbaoType = "\u8fc7\u5173\u7ea2\u5305";
        window["killStar"]["UserInfo"] && 0 === window["killStar"]["UserInfo"].newuserprizeget && (this.ViewFight.hongbaoType = "\u65b0\u624b\u7ea2\u5305");
        ViewManager_1.default.getInstance().ShowView("signRedWin");
      };
      FightManger.prototype.nextLevel = function() {
        this.ViewFight.setTargetPro(0);
        this.gameStartAni();
      };
      FightManger.prototype.openRedpackFirst = function() {};
      FightManger.prototype.onPropBomb = function() {
        if (this.Status != FightConst_1.default.GameStatus.StartGame) return;
        this.Status = FightConst_1.default.GameStatus.BombStatus;
        this.ViewFight.propBombTip.active = true;
      };
      FightManger.prototype.bombCheckBlock = function(xId, yId) {
        this.HintTimer && clearTimeout(this.HintTimer);
        this.stopAllItemBlockAni();
        this.ViewFight.propBombTip.active = false;
        var table = this.CheckBlock.checkBomb(xId, yId);
        var scoreNum = 0;
        this.Status = FightConst_1.default.GameStatus.NOTouch;
        for (var index = 0; index < table.length; index++) {
          var score = FightConst_1.default.ItemScore;
          var element = table[index];
          scoreNum += score;
          this.addSocre(element.node.x, element.node.y, FightConst_1.default.Score.SmallType, score, FightConst_1.default.FightNum.dissolveAnimationSpeed * (index + 1), cc.color(255, 255, 0));
          if (index == table.length - 1) {
            var x = this.Map[xId][yId].node.x;
            0 == yId ? x += FightConst_1.default.FightNum.itemBlockWidth : 0;
            9 == yId ? x -= FightConst_1.default.FightNum.itemBlockWidth : 0;
            this.ViewFight.setScoreScale(table.length, scoreNum);
            this.addSocre(x, this.Map[xId][yId].node.y, FightConst_1.default.Score.BigType, scoreNum, FightConst_1.default.FightNum.dissolveAnimationSpeed * (index + 1), cc.color(255, 255, 0));
            var scoreData = GameDataManager_1.default.getInstance().userData.nowScore + scoreNum;
            GameDataManager_1.default.getInstance().userData.setNowScore(scoreData);
            element.playDieAction(.04 * index, function() {});
          } else element.playDieAction(.04 * index);
        }
        this.addInColorEffect(xId, yId);
        this.checkBombFall(table.length);
      };
      FightManger.prototype.checkBombFall = function(length) {
        var _this = this;
        this.ViewFight.scheduleOnce(function() {
          if (_this.Status == FightConst_1.default.GameStatus.NOTouch) {
            _this.Status = FightConst_1.default.GameStatus.DropStatus;
            _this.onItemBlockFall();
          }
        }, .04 * length);
      };
      FightManger.prototype.addInColorEffect = function(xId, yId) {
        var parentNode = this.ViewFight.MapNode;
        var pos = this.Map[xId][yId].node.getPosition();
        var data = {};
        FightPoolManger_1.default.getInstance().createInColorEffect(parentNode, pos, data);
      };
      FightManger.prototype.onRandomProp = function() {
        if (this.Status != FightConst_1.default.GameStatus.StartGame) return;
        this.Status = FightConst_1.default.GameStatus.RandomStatus;
        this.HintTimer && clearTimeout(this.HintTimer);
        var sortTable = [];
        var sortTablePos = [];
        var randomPos = this.ViewFight.getPropRandomPos();
        var num = FightConst_1.default.FightNum.rowNum;
        for (var row = 0; row < num; row++) for (var vertical = 0; vertical < num; vertical++) if (this.Map[row][vertical]) {
          sortTable.push(this.Map[row][vertical]);
          sortTablePos.push(this.Map[row][vertical].Data.Pos);
        }
        sortTable.sort(function(a, b) {
          return Math.random() > .5 ? -1 : 1;
        });
        var randomLength = 0;
        randomLength = FunUtils_1.default.getRandom(100, 100);
        randomLength >= sortTable.length && (randomLength = sortTable.length);
        var param = {
          type: 9,
          param: randomLength
        };
        GameJSB_1.GameJSB.getAndroidData("/userReward/rewards", JSON.stringify(param), "rewards");
        for (var index = 0; index < randomLength; index++) {
          var element = sortTable[index];
          var pos = void 0;
          var isOver = false;
          index == randomLength - 1 && (isOver = true);
          var data = {
            MovePos: element.Data.Pos,
            Time: FightConst_1.default.FightNum.randomTime * index,
            XId: element.xId,
            YId: element.yId,
            IsOver: isOver
          };
          pos = 0 == index ? randomPos : sortTable[index - 1].Data.Pos;
          FightPoolManger_1.default.getInstance().createParticleRandom(this.ViewFight.MapNode, pos, data);
        }
      };
      FightManger.prototype.randomCheckBlock = function(xId, yId) {
        this.HintTimer && clearTimeout(this.HintTimer);
        if (this.CheckBlock) {
          for (var row = 0; row < FightConst_1.default.FightNum.rowNum; row++) for (var vertical = 0; vertical < FightConst_1.default.FightNum.rowNum; vertical++) this.Map[row][vertical] && this.Map[row][vertical].node.stopAllActions();
          if (this.Status == FightConst_1.default.GameStatus.RandomStatus) {
            this.Map[xId][yId].playDieAction(0);
            this.addSocre(this.Map[xId][yId].node.x, this.Map[xId][yId].node.y, FightConst_1.default.Score.SmallType, FightConst_1.default.TargetScore.PropScore + 15, FightConst_1.default.FightNum.dissolveAnimationSpeed, cc.color(255, 255, 0));
            var scoreData = GameDataManager_1.default.getInstance().userData.nowScore + FightConst_1.default.TargetScore.PropScore + 15;
            GameDataManager_1.default.getInstance().userData.setNowScore(scoreData);
          }
          this.ViewFight.setTargetFinish();
        }
      };
      FightManger.prototype.randomCheckNeedFall = function() {
        var _this = this;
        this.loadRedBagAni();
        this.ViewFight.scheduleOnce(function() {
          if (_this.Status == FightConst_1.default.GameStatus.RandomStatus) {
            _this.propSuccess(FightConst_1.default.GameStatus.RandomStatus);
            _this.Status = FightConst_1.default.GameStatus.RandomDropStatus;
            _this.onItemBlockFall();
          }
        }, FightConst_1.default.FightNum.dissolveAnimationSpeed);
      };
      FightManger.prototype.onInColorProp = function() {
        if (this.Status != FightConst_1.default.GameStatus.StartGame) return;
        this.Status = FightConst_1.default.GameStatus.IncolorStatus;
        this.HintTimer && clearTimeout(this.HintTimer);
        this.stopAllItemBlockAni();
        var tabel = this.CheckBlock.checkInColor();
        var pos = cc.v2(0, 0);
        var data = {
          ItemBlock: tabel[0]
        };
        this.inColor = FightPoolManger_1.default.getInstance().createInColor(this.ViewFight.MapNode, pos, data);
      };
      FightManger.prototype.closeInColorProp = function(isColor) {
        if (!isColor) {
          this.inColor.itemBlock.node.stopAllActions();
          this.inColor.itemBlock.node.scale = 1;
          this.inColor.itemBlock = null;
          FightPoolManger_1.default.getInstance().putInColor(this.inColor.node);
          this.inColor = null;
          this.checkGameOver();
          return;
        }
        if (this.Status == FightConst_1.default.GameStatus.IncolorStatus) {
          this.inColor.itemBlock.node.stopAllActions();
          this.inColor.itemBlock.node.scale = 1;
          this.inColor.itemBlock = null;
          FightPoolManger_1.default.getInstance().putInColor(this.inColor.node);
          this.inColor = null;
          this.propSuccess(FightConst_1.default.GameStatus.IncolorStatus);
          this.CheckBlock.init();
          this.CheckBlock.check();
          this.CheckBlock.setHint();
          this.checkGameOver();
          GameDataManager_1.default.getInstance().saveUserData();
        }
      };
      FightManger.prototype.onHammerProp = function() {
        if (this.Status != FightConst_1.default.GameStatus.StartGame) return;
        this.Status = FightConst_1.default.GameStatus.HammerStatus;
        this.HammerAniNode = FightPoolManger_1.default.getInstance().createHammerAni(this.ViewFight.MapNode, cc.v2(0, 0));
      };
      FightManger.prototype.objSort = function(type) {
        return function(a, b) {
          var value1 = a[type];
          var value2 = b[type];
          return value1 - value2;
        };
      };
      FightManger.prototype.onRefreshProp = function(isRefrsh) {
        var _this = this;
        if (this.Status != FightConst_1.default.GameStatus.StartGame) return;
        this.Status = FightConst_1.default.GameStatus.RefrshStatus;
        this.HintTimer && clearTimeout(this.HintTimer);
        GameDataManager_1.default.getInstance().userData.setIsUseRefresh(true);
        this.ViewFight.playRefrshAction();
        var sortTable = [];
        var sortTablePos = [];
        var num = FightConst_1.default.FightNum.rowNum;
        for (var row = 0; row < num; row++) for (var vertical = 0; vertical < num; vertical++) if (this.Map[row][vertical]) {
          this.Map[row][vertical].node.stopAllActions();
          this.Map[row][vertical].node.scale = 1;
          sortTable.push(this.Map[row][vertical]);
        }
        var posLength = 0;
        for (var row = num - 1; row >= 0; row--) for (var vertical = 0; vertical < num; vertical++) {
          var x = -324;
          var y = 330;
          x += FightConst_1.default.FightNum.itemBlockWidth * vertical;
          y -= FightConst_1.default.FightNum.itemBlockWidth * row;
          var pos = cc.v3(x, y);
          sortTablePos.push(pos);
          posLength++;
          if (posLength == sortTable.length) break;
        }
        sortTable.sort(this.objSort("colorType"));
        var _loop_1 = function(i) {
          var element = sortTable[i];
          cc.tween(element.node).to(FightConst_1.default.FightNum.sortAnimationSpeed, {
            position: sortTablePos[i]
          }).call(function() {
            if (i == sortTable.length - 1) {
              var index = 0;
              for (var row = num - 1; row >= 0; row--) for (var vertical = 0; vertical < num; vertical++) if (sortTable.length > index) {
                _this.Map[row][vertical] = null;
                _this.Map[row][vertical] = sortTable[index];
                _this.Map[row][vertical].setXYId(row, vertical);
                _this.Map[row][vertical].setDataPos(_this.Map[row][vertical].node.x, _this.Map[row][vertical].node.y);
                index++;
              } else {
                GameDataManager_1.default.getInstance().userData.setMap(row, vertical, 0, false);
                _this.Map[row][vertical] = null;
              }
              _this.CheckBlock.init();
              _this.CheckBlock.check();
              _this.CheckBlock.setHint();
              _this.Status = FightConst_1.default.GameStatus.StartGame;
              var checkData = _this.CheckBlock.checkGameOver();
              GameDataManager_1.default.getInstance().saveUserData();
              isRefrsh || _this.propSuccess(FightConst_1.default.GameStatus.RefrshStatus);
              checkData.isGameOver ? _this.onRefreshProp(true) : _this.showHint();
            }
          }).start();
        };
        for (var i = 0; i < sortTable.length; i++) _loop_1(i);
      };
      FightManger.prototype.propSuccess = function(status) {
        FightConst_1.default.GameStatus.RefrshStatus == status ? this.httpUseProp(3, status) : FightConst_1.default.GameStatus.HammerStatus == status ? this.httpUseProp(4, status) : FightConst_1.default.GameStatus.IncolorStatus == status ? this.httpUseProp(2, status) : FightConst_1.default.GameStatus.RandomStatus == status ? this.httpUseProp(1, status) : FightConst_1.default.GameStatus.BombStatus == status && this.httpUseProp(5, status);
      };
      FightManger.prototype.httpUseProp = function(type, status) {
        this.refreshProp(status, 1);
      };
      FightManger.prototype.refreshProp = function(status, num) {
        if (FightConst_1.default.GameStatus.RefrshStatus == status) {
          var propRefrshNum = GameDataManager_1.default.getInstance().userData.propRefrsh - num;
          GameDataManager_1.default.getInstance().userData.setPropRefrsh(propRefrshNum);
          this.ViewFight.refreshRefrshLabel();
        } else if (FightConst_1.default.GameStatus.HammerStatus == status) {
          var propHammerNum = GameDataManager_1.default.getInstance().userData.propHammer - num;
          GameDataManager_1.default.getInstance().userData.setPropHammer(propHammerNum);
          this.ViewFight.refreshHammerLabel();
        } else if (FightConst_1.default.GameStatus.IncolorStatus == status) {
          var propIncolorNum = GameDataManager_1.default.getInstance().userData.propIncolor - num;
          GameDataManager_1.default.getInstance().userData.setPropIncolor(propIncolorNum);
          this.ViewFight.refreshIncolorLabel();
        } else if (FightConst_1.default.GameStatus.RandomStatus == status) {
          var propRandomNum = GameDataManager_1.default.getInstance().userData.propRandom - num;
          GameDataManager_1.default.getInstance().userData.setPropRandom(propRandomNum);
          this.ViewFight.refreshRandomLabel();
        } else if (FightConst_1.default.GameStatus.BombStatus == status) {
          var propRandomNum = GameDataManager_1.default.getInstance().userData.propBomb - num;
          GameDataManager_1.default.getInstance().userData.setPropBomb(propRandomNum);
          this.ViewFight.refreshBombLabel();
        }
      };
      FightManger.prototype.addParticleParticleFireworks = function() {
        var parentNode = this.ViewFight.ViewCenter;
        for (var index = 1; index < 7; index++) {
          var i = index - 1;
          var colorType = index;
          var time = 200;
          time *= i;
          index >= 4 && (colorType = index - 3);
          var y = 0;
          var x = 0;
          1 == index ? (x = 200, y = -400) : 0;
          2 == index ? (x = -100, y = -300) : 0;
          3 == index ? (x = 0, y = 0) : 0;
          4 == index ? (x = 300, y = 200) : 0;
          5 == index ? (x = 0, y = 300) : 0;
          6 == index ? (x = -220, y = 100) : 0;
          var pos = cc.v2(x, y);
          var data = {
            DelayTime: time,
            Time: FightConst_1.default.FightNum.particleDissolveTime + 1e3 + time,
            ColorType: colorType,
            Index: index
          };
          FightPoolManger_1.default.getInstance().createParticleFireworks(parentNode, pos, data);
        }
      };
      FightManger.prototype.addParticleBlock = function(x, y, colorType) {
        var parentNode = this.ViewFight.MapNode;
        var pos = cc.v2(x, y);
        var data = {
          Time: FightConst_1.default.FightNum.particleDissolveTime,
          ColorType: colorType
        };
        FightPoolManger_1.default.getInstance().createParticleBlock(parentNode, pos, data);
      };
      FightManger.prototype.addSocre = function(x, y, Type, score, time, color) {
        var parentNode = this.ViewFight.MapNode;
        var pos = cc.v2(x, y);
        var data = {
          Type: Type,
          MovePos: this.ScoreMovePos,
          Score: score,
          Time: time,
          Color: color
        };
        FightPoolManger_1.default.getInstance().createScore(parentNode, pos, data);
      };
      FightManger.prototype.setTextEffect = function(length) {
        var param = {
          type: 4,
          param: length
        };
        GameJSB_1.GameJSB.getAndroidData("/userReward/rewards", JSON.stringify(param), "rewards");
        if (length < 5) {
          AudioManager_1.default.getInstance().playSound("xcclick");
          return;
        }
        var type = -1;
        3 == length ? type = 1 : 6 == length ? type = 2 : 9 == length ? type = 3 : length >= 12 && (type = 4);
        length >= 6 && this.ViewFight.isWangZhuan && this.loadRedBagAni();
        this.addTextEffect(type);
      };
      FightManger.prototype.addTextEffect = function(type) {
        if (-1 == type) return;
        var data = {
          Type: type
        };
        var parentNode = this.ViewFight.MapNode;
        FightPoolManger_1.default.getInstance().createTextEffect(parentNode, cc.v2(0, 300), data);
      };
      FightManger.prototype.addTargetCompleteEffectt = function() {
        var data = {};
        var parentNode = this.ViewFight.MapNode;
        FightPoolManger_1.default.getInstance().createTargetCompleteEffectt(parentNode, cc.v2(0, 300), data);
      };
      FightManger.prototype.addHongBao = function() {
        if (!this.CheckBlock.checkHongBaoShow()) return;
        if (!GameDataManager_1.default.getInstance().kaiGuan.isOpenRedPackage) return;
        if (!GameDataManager_1.default.getInstance().hongBao.isShowHongBao_inLevel) return;
        if (this.HongBao) return;
        if (this.isHavehongBao) return;
        var parentNode = this.ViewFight.MapNode;
        var pos = cc.v2(0, 0);
        var y = FunUtils_1.default.getRandom(180, 324);
        var x = FunUtils_1.default.getRandom(0, 648);
        x -= 324;
        pos.x = x;
        pos.y = -y;
        var data = {};
        this.isHavehongBao = true;
        PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.qipao_exposure.eventID, Const_1.default.AndroidEvent.qipao_exposure.eventName);
      };
      FightManger.prototype.pushHongBao = function() {
        this.HongBao && FightPoolManger_1.default.getInstance().putHongBao(this.HongBao.node);
        this.isHavehongBao = false;
      };
      FightManger.prototype.showHint = function() {
        var _this = this;
        this.HintTimer && clearTimeout(this.HintTimer);
        this.CheckBlock.HintTable.length > 1 && (this.HintTimer = setTimeout(function() {
          var ItemBlockTable = _this.CheckBlock.HintTable;
          var length = ItemBlockTable.length;
          for (var index = 0; index < length; index++) {
            var element = ItemBlockTable[index];
            element.playHintAction();
          }
        }, FightConst_1.default.FightNum.hintTime));
      };
      FightManger.prototype.onVideoBoxAdv = function(_type) {
        PlatformManger_1.default.getInstance().showVideo(_type, {
          type: _type,
          success: function() {
            this.advSuccess();
          }.bind(this),
          fail: function() {}.bind(this),
          noVideo: function() {}.bind(this)
        });
      };
      FightManger.prototype.advSuccess = function() {};
      FightManger.prototype.addVideoBox = function() {
        var x = 0;
        var y = AdaptarManager_1.default.getInstance().fullHeight / 6;
        var parentNode = this.ViewFight.node;
        var pos = cc.v2(x, y);
        var data = {};
        this.VideoBox = FightPoolManger_1.default.getInstance().createVideoBox(parentNode, pos, data);
      };
      var FightManger_1;
      FightManger.instance = null;
      FightManger = FightManger_1 = __decorate([ ccclass ], FightManger);
      return FightManger;
    }();
    exports.default = FightManger;
    cc._RF.pop();
  }, {
    "../../core/Manager/AdaptarManager": "AdaptarManager",
    "../../core/Manager/AudioManager": "AudioManager",
    "../../core/Manager/ConfigManager": "ConfigManager",
    "../../core/Manager/GameDataManager": "GameDataManager",
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/Util/FunUtils": "FunUtils",
    "../../core/platform/PlatformManger": "PlatformManger",
    "../Const": "Const",
    "../GameJSB": "GameJSB",
    "../Guide": "Guide",
    "./CheckBlock": "CheckBlock",
    "./FightConst": "FightConst",
    "./FightPoolManger": "FightPoolManger"
  } ],
  FightPoolManger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6460eEeysdGy7Vqh6ifr9oZ", "FightPoolManger");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ItemBlock_1 = require("./ItemBlock");
    var ParticleBlock_1 = require("./ParticleBlock");
    var AdaptarManager_1 = require("../../core/Manager/AdaptarManager");
    var FunUtils_1 = require("../../core/Util/FunUtils");
    var ParticleFireworks_1 = require("./ParticleFireworks");
    var Const_1 = require("../Const");
    var FightConst_1 = require("./FightConst");
    var Score_1 = require("./Score");
    var LoaderManager_1 = require("../../core/Manager/LoaderManager");
    var ParticleRandom_1 = require("./ParticleRandom");
    var InColor_1 = require("./InColor");
    var TextEffect_1 = require("./TextEffect");
    var HongBao_1 = require("./HongBao");
    var FightManger_1 = require("./FightManger");
    var InColorEffect_1 = require("./InColorEffect");
    var PassEffect_1 = require("./PassEffect");
    var ScoreEffect_1 = require("./ScoreEffect");
    var TargetCompleteEffect_1 = require("./TargetCompleteEffect");
    var VideoBox_1 = require("./VideoBox");
    var FightPoolManger = function() {
      function FightPoolManger() {
        this.ItemBlockPool = null;
        this.ParticleBlockPool = null;
        this.ParticleFireworksPool = null;
        this.ScorePool = null;
        this.HammerAniPool = null;
        this.ParticleRandomPool = null;
        this.InColorPool = null;
        this.TextEffectPool = null;
        this.HongBaoPool = null;
        this.InColorEffectPool = null;
        this.PassEffectPool = null;
        this.ScoreEffectPool = null;
        this.TargetCompleteEffectPool = null;
        this.VideoBoxPool = null;
        this.prefabTable = {};
        this.prefabCallBack = null;
        this.ItemBlockPool = new cc.NodePool();
        this.ParticleBlockPool = new cc.NodePool();
        this.ParticleFireworksPool = new cc.NodePool();
        this.ScorePool = new cc.NodePool();
        this.HammerAniPool = new cc.NodePool();
        this.ParticleRandomPool = new cc.NodePool();
        this.InColorPool = new cc.NodePool();
        this.TextEffectPool = new cc.NodePool();
        this.HongBaoPool = new cc.NodePool();
        this.InColorEffectPool = new cc.NodePool();
        this.PassEffectPool = new cc.NodePool();
        this.ScoreEffectPool = new cc.NodePool();
        this.TargetCompleteEffectPool = new cc.NodePool();
        this.VideoBoxPool = new cc.NodePool();
      }
      FightPoolManger.getInstance = function() {
        null == FightPoolManger.instance && (FightPoolManger.instance = new FightPoolManger());
        return FightPoolManger.instance;
      };
      FightPoolManger.prototype.loadResPrefabArr = function(prefabCallBack) {
        this.prefabCallBack = prefabCallBack;
        var arr = [ FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_HammerAni, FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_ItemBlock, FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_ParticleBlock, FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_ParticleFireworks, FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_Score, FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_ParticleRandom, FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_InColor, FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_TextEffect, FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_HongBao, FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_InColorEffect, FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_PassEffect, FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_ScoreEffect, FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_TargetCompleteEffect, FightPoolManger.PATH_FIGHT + FightPoolManger.PATH_VideoBox ];
        LoaderManager_1.default.getInstance().loadResArr(arr, this.loaderPreScuess.bind(this));
      };
      FightPoolManger.prototype.loaderPreScuess = function(assets) {
        this.prefabTable = {};
        for (var index = 0; index < assets.length; index++) {
          var prefab = assets[index];
          var path = prefab.name;
          this.prefabTable[path] = prefab;
        }
        this.initPool();
      };
      FightPoolManger.prototype.initPool = function() {
        for (var i_1 = 0; i_1 < 100; i_1++) {
          var pool_1 = cc.instantiate(this.prefabTable[FightPoolManger.PATH_ItemBlock]);
          this.ItemBlockPool.put(pool_1);
        }
        for (var i_2 = 0; i_2 < 20; i_2++) {
          var pool_2 = cc.instantiate(this.prefabTable[FightPoolManger.PATH_ParticleBlock]);
          this.ParticleBlockPool.put(pool_2);
        }
        for (var i = 0; i < 6; i++) {
          var pool_3 = cc.instantiate(this.prefabTable[FightPoolManger.PATH_ParticleFireworks]);
          this.ParticleFireworksPool.put(pool_3);
        }
        for (var i = 0; i < 10; i++) {
          var pool = cc.instantiate(this.prefabTable[FightPoolManger.PATH_Score]);
          this.ScorePool.put(pool);
        }
        for (var i = 0; i < 1; i++) {
          var pool = cc.instantiate(this.prefabTable[FightPoolManger.PATH_HammerAni]);
          this.HammerAniPool.put(pool);
        }
        for (var i = 0; i < 8; i++) {
          var pool = cc.instantiate(this.prefabTable[FightPoolManger.PATH_ParticleRandom]);
          this.ParticleRandomPool.put(pool);
        }
        for (var i = 0; i < 1; i++) {
          var pool = cc.instantiate(this.prefabTable[FightPoolManger.PATH_InColor]);
          this.InColorPool.put(pool);
        }
        for (var i = 0; i < 1; i++) {
          var pool = cc.instantiate(this.prefabTable[FightPoolManger.PATH_TextEffect]);
          this.TextEffectPool.put(pool);
        }
        for (var i = 0; i < 1; i++) {
          var pool = cc.instantiate(this.prefabTable[FightPoolManger.PATH_HongBao]);
          this.HongBaoPool.put(pool);
        }
        for (var i = 0; i < 1; i++) {
          var pool = cc.instantiate(this.prefabTable[FightPoolManger.PATH_InColorEffect]);
          this.InColorEffectPool.put(pool);
        }
        for (var i = 0; i < 1; i++) {
          var pool = cc.instantiate(this.prefabTable[FightPoolManger.PATH_PassEffect]);
          this.PassEffectPool.put(pool);
        }
        for (var i = 0; i < 8; i++) {
          var pool = cc.instantiate(this.prefabTable[FightPoolManger.PATH_ScoreEffect]);
          this.ScoreEffectPool.put(pool);
        }
        for (var i = 0; i < 1; i++) {
          var pool = cc.instantiate(this.prefabTable[FightPoolManger.PATH_TargetCompleteEffect]);
          this.TargetCompleteEffectPool.put(pool);
        }
        for (var i = 0; i < 1; i++) {
          var pool = cc.instantiate(this.prefabTable[FightPoolManger.PATH_VideoBox]);
          this.VideoBoxPool.put(pool);
        }
        this.prefabCallBack && this.prefabCallBack();
      };
      FightPoolManger.prototype.putItemBlock = function(node) {
        node.parent = null;
        this.ItemBlockPool.put(node);
      };
      FightPoolManger.prototype.addCreateItemBlock = function(parentNode, pos, data) {};
      FightPoolManger.prototype.createItemBlock = function(parentNode, pos, data) {
        var poss = FunUtils_1.default.deepCopy(pos);
        var objItemBlock = this.ItemBlockPool.get();
        if (null == objItemBlock) {
          if (!this.prefabTable[FightPoolManger.PATH_ItemBlock]) return null;
          var prefab = this.prefabTable[FightPoolManger.PATH_ItemBlock];
          objItemBlock = cc.instantiate(prefab);
        }
        parentNode.addChild(objItemBlock);
        var fullHeight = AdaptarManager_1.default.getInstance().fullHeight;
        poss.y = fullHeight - 360 - Const_1.default.Adapter.FightUIBottom + FightConst_1.default.FightNum.itemBlockWidth;
        objItemBlock.setPosition(poss);
        var jsItemBlock = objItemBlock.getComponent(ItemBlock_1.default);
        jsItemBlock.init(data);
        return jsItemBlock;
      };
      FightPoolManger.prototype.getParticleBlock = function() {
        if (!this.prefabTable[FightPoolManger.PATH_ParticleBlock]) return null;
        var node = this.ParticleBlockPool.get();
        null == node && (node = cc.instantiate(this.prefabTable[FightPoolManger.PATH_ParticleBlock]));
        return node;
      };
      FightPoolManger.prototype.putParticleBlock = function(node) {
        node.parent = null;
        this.ParticleBlockPool.put(node);
      };
      FightPoolManger.prototype.createParticleBlock = function(parentNode, pos, data) {
        var objParticleBlock = this.getParticleBlock();
        parentNode.addChild(objParticleBlock);
        objParticleBlock.setPosition(pos);
        var jsParticlelock = objParticleBlock.getComponent(ParticleBlock_1.default);
        jsParticlelock.init(data);
      };
      FightPoolManger.prototype.getParticleFireworks = function() {
        if (!this.prefabTable[FightPoolManger.PATH_ParticleFireworks]) return null;
        var node = this.ParticleFireworksPool.get();
        null == node && (node = cc.instantiate(this.prefabTable[FightPoolManger.PATH_ParticleFireworks]));
        return node;
      };
      FightPoolManger.prototype.putParticleFireworks = function(node) {
        node.parent = null;
        this.ParticleFireworksPool.put(node);
      };
      FightPoolManger.prototype.createParticleFireworks = function(parentNode, pos, data) {
        var obj = this.getParticleFireworks();
        parentNode.addChild(obj);
        obj.setPosition(pos);
        var jsParticlelock = obj.getComponent(ParticleFireworks_1.default);
        jsParticlelock.init(data);
      };
      FightPoolManger.prototype.getScore = function() {
        if (!this.prefabTable[FightPoolManger.PATH_Score]) return null;
        var node = this.ScorePool.get();
        null == node && (node = cc.instantiate(this.prefabTable[FightPoolManger.PATH_Score]));
        return node;
      };
      FightPoolManger.prototype.putScore = function(node) {
        node.parent = null;
        this.ScorePool.put(node);
      };
      FightPoolManger.prototype.createScore = function(parentNode, pos, data) {
        var obj = this.getScore();
        parentNode.addChild(obj);
        obj.setPosition(pos);
        var jsObj = obj.getComponent(Score_1.default);
        jsObj.init(data);
      };
      FightPoolManger.prototype.getHammerAni = function() {
        if (!this.prefabTable[FightPoolManger.PATH_HammerAni]) return null;
        var node = this.HammerAniPool.get();
        null == node && (node = cc.instantiate(this.prefabTable[FightPoolManger.PATH_HammerAni]));
        return node;
      };
      FightPoolManger.prototype.putHammerAni = function(node) {
        node.parent = null;
        this.HammerAniPool.put(node);
      };
      FightPoolManger.prototype.createHammerAni = function(parentNode, pos, data) {
        var obj = this.getHammerAni();
        parentNode.addChild(obj);
        obj.setPosition(pos);
        return obj;
      };
      FightPoolManger.prototype.getParticleRandom = function() {
        if (!this.prefabTable[FightPoolManger.PATH_ParticleRandom]) return null;
        var node = this.ParticleRandomPool.get();
        null == node && (node = cc.instantiate(this.prefabTable[FightPoolManger.PATH_ParticleRandom]));
        return node;
      };
      FightPoolManger.prototype.putParticleRandom = function(node) {
        node.parent = null;
        this.ParticleRandomPool.put(node);
      };
      FightPoolManger.prototype.createParticleRandom = function(parentNode, pos, data) {
        var obj = this.getParticleRandom();
        parentNode.addChild(obj);
        obj.setPosition(pos);
        var jsObj = obj.getComponent(ParticleRandom_1.default);
        jsObj.init(data);
      };
      FightPoolManger.prototype.getInColor = function() {
        if (!this.prefabTable[FightPoolManger.PATH_InColor]) return null;
        var node = this.InColorPool.get();
        null == node && (node = cc.instantiate(this.prefabTable[FightPoolManger.PATH_InColor]));
        return node;
      };
      FightPoolManger.prototype.putInColor = function(node) {
        node.parent = null;
        this.InColorPool.put(node);
      };
      FightPoolManger.prototype.createInColor = function(parentNode, pos, data) {
        var obj = this.getInColor();
        parentNode.addChild(obj);
        obj.setPosition(pos);
        var jsObj = obj.getComponent(InColor_1.default);
        jsObj.init(data);
        return jsObj;
      };
      FightPoolManger.prototype.getTextEffect = function() {
        if (!this.prefabTable[FightPoolManger.PATH_TextEffect]) return null;
        var node = this.TextEffectPool.get();
        null == node && (node = cc.instantiate(this.prefabTable[FightPoolManger.PATH_TextEffect]));
        return node;
      };
      FightPoolManger.prototype.putTextEffect = function(node) {
        node.parent = null;
        this.TextEffectPool.put(node);
      };
      FightPoolManger.prototype.createTextEffect = function(parentNode, pos, data) {
        var obj = this.getTextEffect();
        parentNode.addChild(obj);
        obj.setPosition(pos);
        var jsObj = obj.getComponent(TextEffect_1.default);
        jsObj.init(data);
      };
      FightPoolManger.prototype.getHongBao = function() {
        if (!this.prefabTable[FightPoolManger.PATH_HongBao]) return null;
        var node = this.HongBaoPool.get();
        null == node && (node = cc.instantiate(this.prefabTable[FightPoolManger.PATH_HongBao]));
        return node;
      };
      FightPoolManger.prototype.putHongBao = function(node) {
        node.parent = null;
        this.HongBaoPool.put(node);
        FightManger_1.default.getInstance().HongBao = null;
      };
      FightPoolManger.prototype.createHongBao = function(parentNode, pos, data) {
        var obj = this.getHongBao();
        parentNode.addChild(obj);
        obj.setPosition(pos);
        var jsObj = obj.getComponent(HongBao_1.default);
        jsObj.init(data);
        return jsObj;
      };
      FightPoolManger.prototype.getInColorEffect = function() {
        if (!this.prefabTable[FightPoolManger.PATH_InColorEffect]) return null;
        var node = this.InColorEffectPool.get();
        null == node && (node = cc.instantiate(this.prefabTable[FightPoolManger.PATH_InColorEffect]));
        return node;
      };
      FightPoolManger.prototype.putInColorEffect = function(node) {
        node.parent = null;
        this.InColorEffectPool.put(node);
      };
      FightPoolManger.prototype.createInColorEffect = function(parentNode, pos, data) {
        var obj = this.getInColorEffect();
        parentNode.addChild(obj);
        obj.setPosition(pos);
        var jsObj = obj.getComponent(InColorEffect_1.default);
        jsObj.init(data);
        return jsObj;
      };
      FightPoolManger.prototype.getPassEffect = function() {
        if (!this.prefabTable[FightPoolManger.PATH_PassEffect]) return null;
        var node = this.PassEffectPool.get();
        null == node && (node = cc.instantiate(this.prefabTable[FightPoolManger.PATH_PassEffect]));
        return node;
      };
      FightPoolManger.prototype.putPassEffect = function(node) {
        node.parent = null;
        this.PassEffectPool.put(node);
      };
      FightPoolManger.prototype.createPassEffect = function(parentNode, pos, data) {
        var obj = this.getPassEffect();
        parentNode.addChild(obj);
        obj.setPosition(pos);
        var jsObj = obj.getComponent(PassEffect_1.default);
        jsObj.init(data);
        return jsObj;
      };
      FightPoolManger.prototype.getScoreEffect = function() {
        if (!this.prefabTable[FightPoolManger.PATH_ScoreEffect]) return null;
        var node = this.ScoreEffectPool.get();
        null == node && (node = cc.instantiate(this.prefabTable[FightPoolManger.PATH_ScoreEffect]));
        return node;
      };
      FightPoolManger.prototype.putScoreEffect = function(node) {
        node.parent = null;
        this.ScoreEffectPool.put(node);
      };
      FightPoolManger.prototype.createScoreEffect = function(parentNode, pos, data) {
        var obj = this.getScoreEffect();
        parentNode.addChild(obj);
        obj.setPosition(pos);
        var jsObj = obj.getComponent(ScoreEffect_1.default);
        jsObj.init(data);
        return jsObj;
      };
      FightPoolManger.prototype.getTargetCompleteEffect = function() {
        if (!this.prefabTable[FightPoolManger.PATH_TargetCompleteEffect]) return null;
        var node = this.TargetCompleteEffectPool.get();
        null == node && (node = cc.instantiate(this.prefabTable[FightPoolManger.PATH_TargetCompleteEffect]));
        return node;
      };
      FightPoolManger.prototype.putTargetCompleteEffect = function(node) {
        node.parent = null;
        this.TargetCompleteEffectPool.put(node);
      };
      FightPoolManger.prototype.createTargetCompleteEffectt = function(parentNode, pos, data) {
        var obj = this.getTargetCompleteEffect();
        parentNode.addChild(obj);
        obj.setPosition(pos);
        var jsObj = obj.getComponent(TargetCompleteEffect_1.default);
        jsObj.init(data);
        return jsObj;
      };
      FightPoolManger.prototype.getVideoBox = function() {
        if (!this.prefabTable[FightPoolManger.PATH_VideoBox]) return null;
        var node = this.VideoBoxPool.get();
        null == node && (node = cc.instantiate(this.prefabTable[FightPoolManger.PATH_VideoBox]));
        return node;
      };
      FightPoolManger.prototype.putVideoBox = function(node) {
        node.parent = null;
        this.VideoBoxPool.put(node);
      };
      FightPoolManger.prototype.createVideoBox = function(parentNode, pos, data) {
        var obj = this.getVideoBox();
        parentNode.addChild(obj);
        obj.setPosition(pos);
        var jsObj = obj.getComponent(VideoBox_1.default);
        jsObj.init(data);
        return jsObj;
      };
      FightPoolManger.instance = null;
      FightPoolManger.PATH_FIGHT = "prefabs/fight/";
      FightPoolManger.PATH_HammerAni = "HammerAni";
      FightPoolManger.PATH_ItemBlock = "ItemBlock";
      FightPoolManger.PATH_ParticleBlock = "ParticleBlock";
      FightPoolManger.PATH_ParticleFireworks = "ParticleFireworks";
      FightPoolManger.PATH_Score = "Score";
      FightPoolManger.PATH_ParticleRandom = "ParticleRandom";
      FightPoolManger.PATH_InColor = "InColor";
      FightPoolManger.PATH_TextEffect = "TextEffect";
      FightPoolManger.PATH_HongBao = "HongBao";
      FightPoolManger.PATH_InColorEffect = "InColorEffect";
      FightPoolManger.PATH_PassEffect = "PassEffect";
      FightPoolManger.PATH_ScoreEffect = "ScoreEffect";
      FightPoolManger.PATH_TargetCompleteEffect = "TargetCompleteEffect";
      FightPoolManger.PATH_VideoBox = "VideoBox";
      return FightPoolManger;
    }();
    exports.default = FightPoolManger;
    cc._RF.pop();
  }, {
    "../../core/Manager/AdaptarManager": "AdaptarManager",
    "../../core/Manager/LoaderManager": "LoaderManager",
    "../../core/Util/FunUtils": "FunUtils",
    "../Const": "Const",
    "./FightConst": "FightConst",
    "./FightManger": "FightManger",
    "./HongBao": "HongBao",
    "./InColor": "InColor",
    "./InColorEffect": "InColorEffect",
    "./ItemBlock": "ItemBlock",
    "./ParticleBlock": "ParticleBlock",
    "./ParticleFireworks": "ParticleFireworks",
    "./ParticleRandom": "ParticleRandom",
    "./PassEffect": "PassEffect",
    "./Score": "Score",
    "./ScoreEffect": "ScoreEffect",
    "./TargetCompleteEffect": "TargetCompleteEffect",
    "./TextEffect": "TextEffect",
    "./VideoBox": "VideoBox"
  } ],
  FunUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "120a022dyBFm4JppTF/qVEk", "FunUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AdaptarManager_1 = require("../Manager/AdaptarManager");
    var FunUtils = function() {
      function FunUtils() {}
      FunUtils.randomWord = function(randomFlag, min, max) {
        var str = "", range = min, arr = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
        randomFlag && (range = Math.round(Math.random() * (max - min)) + min);
        for (var i = 0; i < range; i++) {
          var pos = Math.round(Math.random() * (arr.length - 1));
          str += arr[pos];
        }
        return str;
      };
      FunUtils.formatTime = function(format, timestampm) {
        timestampm && timestampm < 1e10 && (timestampm *= 1e3);
        var day = timestampm ? new Date(parseInt(timestampm)) : new Date();
        var year = day.getFullYear() + "";
        var month = day.getMonth() + 1 + "";
        var date = day.getDate() + "";
        var hour = day.getHours() + "";
        var minute = day.getMinutes() + "";
        var second = day.getSeconds() + "";
        var ret = format;
        ret = ret.replace("YYYY", year);
        ret = ret.replace("MM", 2 == month.length ? month : "0" + month);
        ret = ret.replace("DD", 2 == date.length ? date : "0" + date);
        ret = ret.replace("hh", 2 == hour.length ? hour : "0" + hour);
        ret = ret.replace("mm", 2 == minute.length ? minute : "0" + minute);
        ret = ret.replace("ss", 2 == second.length ? second : "0" + second);
        ret = ret.replace("M", month);
        ret = ret.replace("D", date);
        ret = ret.replace("h", hour);
        ret = ret.replace("m", minute);
        ret = ret.replace("s", second);
        return ret;
      };
      FunUtils.deepCopy = function(obj) {
        if ("object" !== typeof obj) return obj;
        var newObj = obj instanceof Array ? [] : {};
        for (var key in obj) obj.hasOwnProperty(key) && (newObj[key] = "object" === typeof obj[key] ? this.deepCopy(obj[key]) : obj[key]);
        return newObj;
      };
      FunUtils.trimName = function(name, Ilength, insertStr) {
        if (!name) return "NULL";
        name = name.toString();
        var tmp = 0;
        var len = 0;
        var okLen = 0;
        var dowble = 0;
        Ilength *= 2;
        for (var i = 0; i < name.length; i++) {
          name.charCodeAt(i) > 255 ? tmp += 2 : len += 1;
          okLen += 1;
          if (tmp + len > Ilength) {
            okLen += dowble - 1;
            return name.substring(0, okLen) + insertStr;
          }
          if (name.codePointAt(i) > 65535) {
            i++;
            i < name.length && (dowble += 1);
          }
        }
        return name.substring(0, okLen + dowble);
      };
      FunUtils.getRandom = function(start, end) {
        return Math.floor(Math.random() * (end - start + 1)) + start;
      };
      FunUtils.getMessUpArr = function(endNum) {
        var arr = [];
        for (var i = 0; i < endNum; i++) arr[i] = i;
        arr.sort(function() {
          return .5 - Math.random();
        });
        return arr;
      };
      FunUtils.getGameConfig = function() {
        var appurl = "https://lidongdong2253.gitee.io/project_config/jiayouhuyukejiyouxiangongshi/xiaoxiaoxiao_app_config.json";
        var url = appurl + "?dt=" + new Date().getTime();
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 3e4;
        xhr.ontimeout = function() {};
        xhr.onreadystatechange = function() {
          if (200 == xhr.status && 4 === xhr.readyState) {
            var responseData = JSON.parse(xhr.responseText);
            responseData.isGameOver && cc.game.end();
          }
        };
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        xhr.send();
      };
      FunUtils.showTip = function(_txt, coler) {
        cc.loader.loadRes("prefabs/common/showTip", function(err, prefab) {
          var tipNode = cc.instantiate(prefab);
          var tipBgNode = tipNode.getChildByName("tip_bg");
          var tipLabel = tipNode.getChildByName("tip_label").getComponent(cc.Label);
          var scene = cc.director.getScene();
          scene.addChild(tipNode);
          tipNode.setPosition(cc.v2(.5 * cc.winSize.width, .5 * cc.winSize.height));
          tipLabel.string = _txt;
          var label = tipLabel;
          label._forceUpdateRenderData && label._forceUpdateRenderData(true);
          tipBgNode.width = label.node.width + 20;
          var tween = cc.tween;
          tween(tipNode).parallel(tween().by(2, {
            position: cc.v2(0, 150)
          }), tween().to(2, {
            opacity: 0
          })).call(function() {
            tipNode.destroy();
          }).start();
        });
      };
      FunUtils.httpDelay = function() {
        cc.loader.loadRes("prefabs/common/ViewHttpDelay", function(err, prefab) {
          var node = cc.instantiate(prefab);
          var scene = cc.director.getScene();
          scene.addChild(node);
          node.setPosition(cc.v2(.5 * AdaptarManager_1.default.getInstance().fullWidth, .5 * AdaptarManager_1.default.getInstance().fullHeight));
        });
      };
      FunUtils.format = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        var result = void 0;
        if (args.length > 0) {
          result = args[0];
          for (var i = 1; i < args.length; i++) if (void 0 != args[i]) {
            var reg = new RegExp("({)" + i + "(})", "g");
            result = result.replace(reg, args[i]);
          }
        }
        return result;
      };
      return FunUtils;
    }();
    exports.default = FunUtils;
    cc._RF.pop();
  }, {
    "../Manager/AdaptarManager": "AdaptarManager"
  } ],
  GameDataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5982h2HI9EaLrx+aY3/2E/", "GameDataManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UserData_1 = require("../Data/UserData");
    var UserLocalData_1 = require("../Data/UserLocalData");
    var FunUtils_1 = require("../Util/FunUtils");
    var TempData = function() {
      function TempData() {
        this.headimgurl = null;
        this.isInputInvite = true;
        this.shareDesc = "";
        this.isShowWelfare = true;
        this.fenHongTotalTime = 0;
        this.fenHongNumTime = 0;
        this.meiRiFenHongMoney = 0;
        this.fenHongAddMoney = 0;
        this.timingRedPacketTime = 0;
        this.timingRedPacketType = 2;
        this.appleTotalNum = 20;
        this.appleNum = 15;
        this.newUserRedPacket = 0;
        this.SignInNum = 0;
      }
      return TempData;
    }();
    var KaiGuan = function() {
      function KaiGuan() {
        this.isOpenTouch = false;
        this.isOpenRedPackage = true;
        this.bannerRefreshTime = 3e3;
        this.isOpenShare = true;
        this.shareDelay = 3e3;
        this.isAllVideo = false;
        this.isAllShare = false;
        this.isEnableOut = false;
        this.isAreaMask = false;
        this.isPingbiUser = false;
      }
      return KaiGuan;
    }();
    var HongBao = function() {
      function HongBao() {
        this.isShowHongBao_inLevel = true;
        this.hongBaoNum_inLevel = 0;
        this.hongBaoNum_inLevel_double = 0;
        this.isShowHongBao_pass = true;
        this.hongBaoNum_pass = 0;
        this.passHongBaoNum = 0;
        this.isPassvideo = true;
        this.isPassAdv = true;
        this.isCloseHongBao = true;
      }
      return HongBao;
    }();
    var LoginData = function() {
      function LoginData() {
        this.code = "";
        this.uid = 0;
        this.sid = null;
        this.openid = "";
        this.unionid = "";
      }
      return LoginData;
    }();
    var GameDataManager = function() {
      function GameDataManager() {
        this.tempData = new TempData();
        this.kaiGuan = new KaiGuan();
        this.loginData = new LoginData();
        this.hongBao = new HongBao();
        this.userData = new UserData_1.default();
        this.userLocalData = new UserLocalData_1.default();
      }
      GameDataManager.getInstance = function() {
        null == this.instance && (this.instance = new GameDataManager());
        return this.instance;
      };
      GameDataManager.prototype.init = function() {
        this.loadAllData();
      };
      GameDataManager.prototype.loadAllData = function() {
        var userData = this.getLocalData(GameDataManager.KEY_USER_DATA);
        if (userData) {
          this.userData.copy(userData);
          this.onDataInit();
        }
        var name = FunUtils_1.default.randomWord(false, 8, 8);
        this.userData.setName(name, false);
        this.userData.setInvitationNum(name, false);
        var userLocalData = this.getLocalData(GameDataManager.KEY_USER_LOCAL_DATA);
        userLocalData && this.userLocalData.copy(userLocalData);
        var openId = FunUtils_1.default.randomWord(true, 6, 10);
        this.userLocalData.setOpenId(openId);
        this.userLocalData.setRegisteredTime(Date.now());
      };
      GameDataManager.prototype.getLocalData = function(key) {
        var str = cc.sys.localStorage.getItem(key);
        if (str) {
          try {
            var data = JSON.parse(str);
            return data;
          } catch (error) {
            console.log(error);
          }
          return null;
        }
        return null;
      };
      GameDataManager.prototype.setLocalData = function(key, data) {
        var str = "{}";
        data && (str = JSON.stringify(data));
        cc.sys.localStorage.setItem(key, str);
      };
      GameDataManager.prototype.saveUserData = function() {
        this.setLocalData(GameDataManager.KEY_USER_DATA, this.userData);
      };
      GameDataManager.prototype.saveUserLocalData = function() {
        this.setLocalData(GameDataManager.KEY_USER_LOCAL_DATA, this.userLocalData);
      };
      GameDataManager.prototype.onDataInit = function() {
        GameDataManager.getInstance().userData.nextDayClean();
      };
      GameDataManager.prototype.removeItem = function(key) {
        cc.sys.localStorage.removeItem(key);
      };
      GameDataManager.prototype.getUserHead = function() {};
      GameDataManager.KEY_USER_DATA = "userData_sister";
      GameDataManager.KEY_USER_LOCAL_DATA = "userLocalData_sister";
      return GameDataManager;
    }();
    exports.default = GameDataManager;
    cc._RF.pop();
  }, {
    "../Data/UserData": "UserData",
    "../Data/UserLocalData": "UserLocalData",
    "../Util/FunUtils": "FunUtils"
  } ],
  GameJSB: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e23a88g85pJgJR3hPzfjsp3", "GameJSB");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameJSB = void 0;
    var AudioManager_1 = require("../core/Manager/AudioManager");
    var ViewManager_1 = require("../core/Manager/ViewManager");
    var FightManger_1 = require("./fight/FightManger");
    var EveryDayReward_1 = require("./view/EveryDayReward");
    var gift_1 = require("./view/gift");
    var GoldPig_1 = require("./view/GoldPig");
    var LevelUpReward_1 = require("./view/LevelUpReward");
    var zhuanpan_1 = require("./view/zhuanpan");
    var GameJSB = function() {
      function GameJSB() {}
      GameJSB.getAndroidData = function(url, param, type) {
        if ("android" == FightManger_1.default.getInstance().GameModel) {
          var className = "org/cocos2dx/javascript/JSB";
          var methodName = "httpRequest";
          var methodSignature = "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, url, param, type);
        }
      };
      GameJSB.getAndroidShowToast = function(str) {
        FightManger_1.default.getInstance().ViewFight.showText = str;
        ViewManager_1.default.getInstance().ShowView("TextPopUp");
      };
      GameJSB.getAndroidWithdrawPage = function() {
        if ("android" == FightManger_1.default.getInstance().GameModel) {
          var className = "org/cocos2dx/javascript/JSB";
          var methodName = "withdrawPage";
          var methodSignature = "()V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature);
        }
      };
      GameJSB.getAndroidShowUserInfo = function() {
        if ("android" == FightManger_1.default.getInstance().GameModel) {
          var className = "org/cocos2dx/javascript/JSB";
          var methodName = "showUserInfo";
          var methodSignature = "()V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature);
        }
      };
      GameJSB.getAndroidDismissAd = function() {
        if ("android" == FightManger_1.default.getInstance().GameModel) {
          var className = "org/cocos2dx/javascript/JSB";
          var methodName = "dismissAd";
          var methodSignature = "()V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature);
        }
      };
      GameJSB.getAndroidShowAd = function(type) {
        if ("android" == FightManger_1.default.getInstance().GameModel) {
          var className = "org/cocos2dx/javascript/JSB";
          var methodName = "showAd";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, type);
        }
      };
      GameJSB.getAndroidShowRv = function(type) {
        if ("android" == FightManger_1.default.getInstance().GameModel) {
          var className = "org/cocos2dx/javascript/JSB";
          var methodName = "showRv";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, type);
        }
      };
      GameJSB.getAndroidIsBGMEnable = function() {
        if ("android" == FightManger_1.default.getInstance().GameModel) {
          var className = "org/cocos2dx/javascript/JSB";
          var methodName = "isBGMEnable";
          var methodSignature = "()I";
          return jsb.reflection.callStaticMethod(className, methodName, methodSignature);
        }
      };
      GameJSB.getAndroidIsSoundEffectEnable = function() {
        if ("android" == FightManger_1.default.getInstance().GameModel) {
          var className = "org/cocos2dx/javascript/JSB";
          var methodName = "isSoundEffectEnable";
          var methodSignature = "()I";
          return jsb.reflection.callStaticMethod(className, methodName, methodSignature);
        }
      };
      GameJSB.initGameMusci = function() {
        0 == GameJSB.getAndroidIsBGMEnable() ? window["killStar"].setyinxiao(0) : 1 == GameJSB.getAndroidIsBGMEnable() ? window["killStar"].setyinxiao(1) : 0 == GameJSB.getAndroidIsSoundEffectEnable() ? window["killStar"].setyinliang(0) : 1 == GameJSB.getAndroidIsSoundEffectEnable() && window["killStar"].setyinliang(1);
      };
      GameJSB.loadAsset = function(url, type) {
        return new Promise(function(resolve, reject) {
          cc.assetManager.loadRemote(url, {
            ext: "." + type
          }, function(err, asset) {
            if (err) reject(err); else if (asset) if ("png" == type || asset instanceof cc.Texture2D) {
              var sprite = new cc.SpriteFrame(asset);
              resolve(sprite);
            } else asset instanceof cc.AudioClip ? resolve(asset) : console.warn("no asset");
          });
        });
      };
      GameJSB.initWindowApi = function() {
        GameJSB.ViewFight = FightManger_1.default.getInstance().ViewFight;
        window["killStar"] = {};
        window["killStar"].setyinliang = function(num) {
          AudioManager_1.default.getInstance().setMusicVolume(num);
        };
        window["killStar"].setyinxiao = function(num) {
          AudioManager_1.default.getInstance().setSoundVolume(num);
        };
        window["killStar"].pauseAll = function() {
          AudioManager_1.default.getInstance().pauseAll();
        };
        window["killStar"].resumeAll = function() {
          AudioManager_1.default.getInstance().resumeAll();
        };
        window["killStar"].wangZhuanIconDisPlay = function(socrk) {
          GameJSB.ViewFight.isWangZhuan = socrk;
          GameJSB.ViewFight.wangZhuanIconDisPlay();
        };
        window["killStar"].zhuanpanNum = function(num) {
          GameJSB.ViewFight.zhuanpanNum = num;
        };
        window["killStar"].obtainHttpData = function(str) {
          GameJSB.obtainHttpData(str);
        };
        window["killStar"].obtainRvCallback = function(type, isPlay) {
          GameJSB.obtainRvCallback(type, isPlay);
        };
        window["killStar"].obtainAdCallback = function(type) {
          GameJSB.obtainAdCallback(type);
        };
        window["killStar"].obtainTime = function(num) {
          cc.find("ViewTop/dongtaiIcon/gift", GameJSB.ViewFight.node).getComponent(gift_1.default).obtainTime(num);
        };
        window["killStar"].GoldPigAniLabel = function(num) {
          cc.find("dongtaiIcon/pig", GameJSB.ViewFight.ViewTop).getComponent("GoldPig").aniAction(num);
        };
      };
      GameJSB.obtainAdCallback = function(type) {
        var obj = JSON.parse(type);
        if (cc.find("Canvas/ViewRoot/PopUpNode/HongBaoPopup/redBag")) {
          var redBag = cc.find("Canvas/ViewRoot/PopUpNode/HongBaoPopup/redBag");
          redBag.y = -obj.screenHeight / 2 + obj.adHeight + redBag.height / 2 + 100;
        }
      };
      GameJSB.obtainRvCallback = function(type, isPlay) {
        console.log("\u5168\u5c4f\u5e7f\u544a\u56de\u8c03", isPlay, type);
        GameJSB.getAndroidData("/register/getUserInfo", "", "UserInfo");
        if (parseInt(isPlay)) {
          var param = void 0;
          switch (type) {
           case "\u5012\u8ba1\u65f6\u7ea2\u5305":
            param = {
              type: 14
            };
            GameJSB.getAndroidData("/userReward/rewards", JSON.stringify(param), "rewards");
            ViewManager_1.default.getInstance().CloseView("signRedWin");
            break;

           case "\u5e78\u8fd0\u7ea2\u5305":
            param = {
              type: 5
            };
            GameJSB.getAndroidData("/userReward/rewards", JSON.stringify(param), "rewards");
            ViewManager_1.default.getInstance().CloseView("signRedWin");
            break;

           case "\u8fc7\u5173\u7ea2\u5305":
            param = {
              type: 2,
              param: FightManger_1.default.getInstance().roundLevelNum
            };
            GameJSB.getAndroidData("/userReward/rewards", JSON.stringify(param), "rewards");
            ViewManager_1.default.getInstance().CloseView("signRedWin");
            break;

           case "\u5e78\u8fd0\u8f6c\u76d8\u62bd\u5956":
            cc.find("Canvas/ViewRoot/PopUpNode/zhuanpan").getComponent(zhuanpan_1.default).clickEvents();
            GameJSB.getAndroidData("/config/configs", "", "configs");
            break;

           case "\u6bcf\u65e5\u5956\u52b1":
            GameJSB.getAndroidData("/userdata/dayprizevideo", "", "dayprizevideo");
            break;

           case "\u4f7f\u7528\u9053\u5177":
            FightManger_1.default.getInstance().onRandomProp();
            ViewManager_1.default.getInstance().CloseView("proppop");
          }
        } else switch (type) {
         case "\u5012\u8ba1\u65f6\u7ea2\u5305":
         case "\u5e78\u8fd0\u7ea2\u5305":
          ViewManager_1.default.getInstance().CloseView("signRedWin");
          break;

         case "\u8fc7\u5173\u7ea2\u5305":
          FightManger_1.default.getInstance().nextLevel();
          ViewManager_1.default.getInstance().CloseView("signRedWin");
        }
      };
      GameJSB.useWindowFunction = function(num) {
        window["killStar"].obtainTime(num);
      };
      GameJSB.obtainHttpData = function(str) {
        console.log("\u5b89\u5353\u56de\u8c03\u6570\u636estr=====>", str);
        if (str) {
          var obj = JSON.parse(str);
          if (0 == obj.code) {
            window["killStar"][obj.cctype] = obj.data;
            console.log("\u5b89\u5353\u56de\u8c03\u6570\u636edata", JSON.stringify(obj.data));
            switch (obj.cctype) {
             case "UserInfo":
              GameJSB.userInfo(obj.data);
              break;

             case "rewards":
              GameJSB.rewards(obj.data);
              break;

             case "upgamelvl":
              GameJSB.upgamelvl(obj.data);
              break;

             case "adRecord":
              GameJSB.adRecord(obj.data);
              break;

             case "getAdType":
              GameJSB.getAdType(obj.data);
              break;

             case "adidconfig":
              GameJSB.adidconfig(obj.data);
              break;

             case "getvideodata":
              GameJSB.getvideodata(obj.data);
              break;

             case "configs":
              GameJSB.configs(obj.data);
              break;

             case "dayprizedata":
              GameJSB.dayprizedata(obj.data);
              break;

             case "dayprizevideo":
              GameJSB.dayprizevideo(obj.data);
              break;

             case "dayprizecash":
              GameJSB.dayprizecash(obj.data);
              break;

             case "gamelvlprizedata":
              GameJSB.gamelvlprizedata(obj.data);
              break;

             case "autoUpdate":
              GameJSB.autoUpdate(obj.data);
            }
          } else console.log(obj.message + "================");
        }
      };
      GameJSB.userInfo = function(obj) {
        var _this = this;
        cc.find("usertouxiang/LVboard/Label", this.ViewFight.ViewTop).getComponent(cc.Label).string = "Lv" + obj.gamelvl + " " + obj.lvlname;
        cc.find("usertouxiang/exProess/progress", this.ViewFight.ViewTop).getComponent(cc.ProgressBar).progress = parseFloat(obj.lvlrate) / 100;
        cc.find("usertouxiang/exProess/progress/progressLabel", this.ViewFight.ViewTop).getComponent(cc.Label).string = Math.round(parseFloat(obj.lvlrate)) + " %";
        FightManger_1.default.getInstance().ViewFight.todayText = obj.todaysave;
        GameJSB.loadAsset(obj.headimgurl, "png").then(function(asset) {
          var uesrHeadHeight = cc.find("usertouxiang/headMask/touxiangkuang", _this.ViewFight.ViewTop).height;
          var uesrHeadWidth = cc.find("usertouxiang/headMask/touxiangkuang", _this.ViewFight.ViewTop).width;
          cc.find("usertouxiang/headMask/touxiangkuang", _this.ViewFight.ViewTop).getComponent(cc.Sprite).spriteFrame = asset;
          cc.find("usertouxiang/headMask/touxiangkuang", _this.ViewFight.ViewTop).height = uesrHeadHeight;
          cc.find("usertouxiang/headMask/touxiangkuang", _this.ViewFight.ViewTop).width = uesrHeadWidth;
        });
        cc.find("hongbaoHome/label", this.ViewFight.ViewTop).getComponent(cc.Label).string = obj.integral + "";
        cc.find("iconBottom/shengjijiangli/popLabel", this.ViewFight.ViewBottom).active = 0 != obj.lvlprizestatus;
      };
      GameJSB.rewards = function(obj) {
        var _this = this;
        obj.todaysave || (obj.todaysave = 0);
        this.ViewFight = FightManger_1.default.getInstance().ViewFight;
        switch (parseInt(obj.type)) {
         case 14:
          FightManger_1.default.getInstance().ViewFight.luckRewardLabel = obj.plusintegral;
          FightManger_1.default.getInstance().ViewFight.rewardname = obj.rewardname;
          FightManger_1.default.getInstance().ViewFight.todayText = obj.todaysave;
          FightManger_1.default.getInstance().ViewFight.hongbaocunqianguan = obj.saveintegral;
          ViewManager_1.default.getInstance().ShowView("HongBaoPopup");
          setTimeout(function() {
            cc.find("hongbaoHome/label", _this.ViewFight.ViewTop).getComponent(cc.Label).string = obj.userinteger + "";
            cc.find("dongtaiIcon/pig", _this.ViewFight.ViewTop).getComponent(GoldPig_1.default).aniAction(obj.saveintegral);
          }, 3e3);
          break;

         case 7:
          FightManger_1.default.getInstance().ViewFight.luckRewardLabel = obj.plusintegral;
          FightManger_1.default.getInstance().ViewFight.rewardname = obj.rewardname;
          ViewManager_1.default.getInstance().ShowView("HongBaoPopup");
          break;

         case 2:
          FightManger_1.default.getInstance().ViewFight.luckRewardLabel = obj.plusintegral;
          FightManger_1.default.getInstance().ViewFight.rewardname = obj.rewardname;
          FightManger_1.default.getInstance().ViewFight.todayText = obj.todaysave;
          FightManger_1.default.getInstance().ViewFight.hongbaocunqianguan = obj.saveintegral;
          ViewManager_1.default.getInstance().ShowView("HongBaoPopup");
          setTimeout(function() {
            cc.find("hongbaoHome/label", _this.ViewFight.ViewTop).getComponent(cc.Label).string = obj.userinteger + "";
            cc.find("dongtaiIcon/pig", _this.ViewFight.ViewTop).getComponent(GoldPig_1.default).aniAction(obj.saveintegral);
          }, 1500);
          break;

         case 1:
          obj.userinteger && (cc.find("hongbaoHome/label", this.ViewFight.ViewTop).getComponent(cc.Label).string = obj.userinteger + "");
          GameJSB.getAndroidData("/register/getUserInfo", "", "UserInfo");
          break;

         case 5:
          FightManger_1.default.getInstance().ViewFight.luckRewardLabel = obj.plusintegral;
          FightManger_1.default.getInstance().ViewFight.rewardname = obj.rewardname;
          FightManger_1.default.getInstance().ViewFight.todayText = obj.todaysave;
          FightManger_1.default.getInstance().ViewFight.hongbaocunqianguan = obj.saveintegral;
          ViewManager_1.default.getInstance().ShowView("HongBaoPopup");
          setTimeout(function() {
            cc.find("hongbaoHome/label", _this.ViewFight.ViewTop).getComponent(cc.Label).string = obj.userinteger + "";
            cc.find("dongtaiIcon/pig", _this.ViewFight.ViewTop).getComponent(GoldPig_1.default).aniAction(obj.saveintegral);
          }, 3e3);
          break;

         case 4:
         case 9:
          FightManger_1.default.getInstance().ViewFight.todayText = obj.todaysave;
          FightManger_1.default.getInstance().ViewFight.hongbaocunqianguan = obj.saveintegral;
          setTimeout(function() {
            cc.find("hongbaoHome/label", _this.ViewFight.ViewTop).getComponent(cc.Label).string = obj.userinteger + "";
            cc.find("dongtaiIcon/pig", _this.ViewFight.ViewTop).getComponent(GoldPig_1.default).aniAction(obj.saveintegral);
          }, 1500);
          break;

         case 3:
          this.ViewFight.zhuanpanNum = obj.lasetablenum;
          FightManger_1.default.getInstance().ViewFight.todayText = obj.todaysave;
          FightManger_1.default.getInstance().ViewFight.hongbaocunqianguan = obj.saveintegral;
          if (1 == obj.prizetype) {
            this.ViewFight.luckRewardType = obj.prizetype;
            FightManger_1.default.getInstance().ViewFight.luckRewardLabel = obj.plusintegral;
            FightManger_1.default.getInstance().ViewFight.rewardname = obj.rewardname;
            var pKey = obj.plusintegral;
            pKey = pKey >= 800 ? 800 : pKey >= 400 ? 500 : 300;
            switch (pKey) {
             case 300:
              this.ViewFight.angleStr = "\u5c11\u91cf\u7ea2\u5305";
              break;

             case 500:
              this.ViewFight.angleStr = "\u4e2d\u91cf\u7ea2\u5305";
              break;

             case 800:
              this.ViewFight.angleStr = "\u5927\u91cf\u7ea2\u5305";
            }
            var zp = cc.find("Canvas/ViewRoot/PopUpNode/zhuanpan").getComponent(zhuanpan_1.default);
            var roulettle = zp.node.getChildByName("roulette");
            var time = 2;
            zp.initAngle(zp.buildAngle(this.ViewFight.angleStr) || 360 * Math.random());
            zp.angleStr = this.ViewFight.angleStr;
            zp.luckRewardType = obj.prizetype;
            zp.doing1(roulettle, time, 360);
          } else if (2 == obj.prizetype) {
            this.ViewFight.luckRewardType = obj.prizetype;
            switch (obj.prizenum) {
             case "0.30":
              this.ViewFight.angleStr = "0.3\u5143\u63d0\u73b0";
              this.ViewFight.showText = "0.3\u5143\u5956\u52b1\u5df2\u5165\u8d26";
              break;

             case "1.00":
              this.ViewFight.angleStr = "1\u5143\u63d0\u73b0";
              this.ViewFight.showText = "1\u5143\u5956\u52b1\u5df2\u5165\u8d26";
              break;

             case "3.00":
              this.ViewFight.angleStr = "3\u5143\u63d0\u73b0";
              this.ViewFight.showText = "3\u5143\u5956\u52b1\u5df2\u5165\u8d26";
            }
            var zp = cc.find("Canvas/ViewRoot/PopUpNode/zhuanpan").getComponent(zhuanpan_1.default);
            var roulettle = zp.node.getChildByName("roulette");
            var time = 2;
            zp.initAngle(zp.buildAngle(this.ViewFight.angleStr) || 360 * Math.random());
            zp.angleStr = this.ViewFight.angleStr;
            zp.luckRewardType = obj.prizetype;
            zp.doing1(roulettle, time, 360);
          }
          break;

         case 17:
          FightManger_1.default.getInstance().ViewFight.todayText = obj.todaysave;
          FightManger_1.default.getInstance().ViewFight.hongbaocunqianguan = obj.saveintegral;
          setTimeout(function() {
            cc.find("hongbaoHome/label", _this.ViewFight.ViewTop).getComponent(cc.Label).string = obj.userinteger + "";
            cc.find("dongtaiIcon/pig", _this.ViewFight.ViewTop).getComponent(GoldPig_1.default).aniAction(obj.saveintegral);
          }, 1500);
          break;

         case 6:
          FightManger_1.default.getInstance().ViewFight.luckRewardLabel = obj.plusintegral;
          FightManger_1.default.getInstance().ViewFight.rewardname = obj.rewardname;
          FightManger_1.default.getInstance().ViewFight.todayText = obj.todaysave;
          FightManger_1.default.getInstance().ViewFight.hongbaocunqianguan = obj.saveintegral;
          setTimeout(function() {
            cc.find("hongbaoHome/label", _this.ViewFight.ViewTop).getComponent(cc.Label).string = obj.userinteger + "";
            cc.find("dongtaiIcon/pig", _this.ViewFight.ViewTop).getComponent(GoldPig_1.default).aniAction(obj.saveintegral);
          }, 1500);
          FightManger_1.default.getInstance().ViewFight.hongbaoType = "\u5347\u7ea7\u5956\u52b1";
          ViewManager_1.default.getInstance().ShowView("HongBaoPopup");
        }
      };
      GameJSB.upgamelvl = function(obj) {
        1 == obj.lvlup && this.ViewFight.lelUpLightAni();
        cc.find("usertouxiang/LVboard/Label", this.ViewFight.ViewTop).getComponent(cc.Label).string = "Lv" + obj.gamelvl + " " + obj.lvlname;
        cc.find("usertouxiang/exProess/progress", this.ViewFight.ViewTop).getComponent(cc.ProgressBar).progress = parseFloat(obj.lvlrate) / 100;
        cc.find("usertouxiang/exProess/progress/progressLabel", this.ViewFight.ViewTop).getComponent(cc.Label).string = Math.round(parseFloat(obj.lvlrate)) + " %";
      };
      GameJSB.adRecord = function(obj) {};
      GameJSB.getAdType = function(obj) {};
      GameJSB.adidconfig = function(obj) {};
      GameJSB.getvideodata = function(obj) {
        switch (obj.videostatus) {
         case 2:
          cc.find("dongtaiIcon/gift", FightManger_1.default.getInstance().ViewFight.ViewTop).getComponent(gift_1.default).obtainTime(obj.videoticktime);
          cc.find("dongtaiIcon/gift/timeLabel", FightManger_1.default.getInstance().ViewFight.ViewTop).active = true;
          cc.find("dongtaiIcon/gift/giftOpen", FightManger_1.default.getInstance().ViewFight.ViewTop).active = false;
          cc.find("dongtaiIcon/gift/giftClose", FightManger_1.default.getInstance().ViewFight.ViewTop).active = true;
          break;

         case 3:
          cc.find("dongtaiIcon/gift/timeLabel", FightManger_1.default.getInstance().ViewFight.ViewTop).active = false;
          cc.find("dongtaiIcon/gift/giftOpen", FightManger_1.default.getInstance().ViewFight.ViewTop).active = true;
          cc.find("dongtaiIcon/gift/giftClose", FightManger_1.default.getInstance().ViewFight.ViewTop).active = false;
        }
      };
      GameJSB.configs = function(obj) {
        FightManger_1.default.getInstance().ViewFight.iconTime = obj.playdevide;
        cc.find("zhuanpan/popLabel/label", FightManger_1.default.getInstance().ViewFight.ViewBottom.getChildByName("iconBottom")).getComponent(cc.Label).string = "\u5269\u4f59" + obj.lasetablenum + "\u6b21";
        FightManger_1.default.getInstance().ViewFight.zhuanpanNum = obj.lasetablenum;
        FightManger_1.default.getInstance().ViewFight.ViewBottom.getChildByName("iconBottom").getChildByName("kuaisuhongbao").getComponent("KuaiSuHongBao").coolingTime = obj.quickredicetime;
        FightManger_1.default.getInstance().ViewFight.ViewBottom.getChildByName("iconBottom").getChildByName("kuaisuhongbao").getComponent("KuaiSuHongBao").coolingNumMax = parseInt(obj.quickrednum.split(",")[0]);
        FightManger_1.default.getInstance().ViewFight.ViewBottom.getChildByName("iconBottom").getChildByName("kuaisuhongbao").getComponent("KuaiSuHongBao").coolingNumMin = parseInt(obj.quickrednum.split(",")[1]);
      };
      GameJSB.dayprizedata = function(obj) {
        cc.find("Canvas/ViewRoot/PopUpNode/EveryDayReward").getComponent(EveryDayReward_1.default).initEveryDayRewards(obj);
      };
      GameJSB.dayprizevideo = function(obj) {
        GameJSB.getAndroidData("/userdata/dayprizedata", "", "dayprizedata");
      };
      GameJSB.dayprizecash = function(obj) {};
      GameJSB.gamelvlprizedata = function(obj) {
        cc.find("Canvas/ViewRoot/PopUpNode/LevelUpReward").getComponent(LevelUpReward_1.default).initLevelUpRewardPopUp(obj);
      };
      GameJSB.autoUpdate = function(obj) {};
      return GameJSB;
    }();
    exports.GameJSB = GameJSB;
    cc._RF.pop();
  }, {
    "../core/Manager/AudioManager": "AudioManager",
    "../core/Manager/ViewManager": "ViewManager",
    "./fight/FightManger": "FightManger",
    "./view/EveryDayReward": "EveryDayReward",
    "./view/GoldPig": "GoldPig",
    "./view/LevelUpReward": "LevelUpReward",
    "./view/gift": "gift",
    "./view/zhuanpan": "zhuanpan"
  } ],
  GoldPig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e8f4PFyq5II50mk54UiUrr", "GoldPig");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GoldPig = function(_super) {
      __extends(GoldPig, _super);
      function GoldPig() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.goldPigRedBag = null;
        _this.goldPigRedBagLabel = null;
        _this.sorck = false;
        return _this;
      }
      GoldPig.prototype.onLoad = function() {};
      GoldPig.prototype.start = function() {};
      GoldPig.prototype.update = function(dt) {};
      GoldPig.prototype.goldPigAni = function() {
        var node = cc.instantiate(this.goldPigRedBag);
        node.opacity = 0;
        node.setParent(this.node.getChildByName("pig").getChildByName("goldPigHongBaoHome"));
        node.width = this.goldPigRedBag.width / 2;
        node.height = this.goldPigRedBag.height / 2;
        node.setPosition(2 * node.width, node.height);
        cc.tween(node).to(.4, {
          x: 7,
          y: node.height / 2,
          opacity: 255
        }).to(.3, {
          x: -7,
          y: -node.height / 2
        }).start();
        this.schedule(function() {
          node.removeFromParent();
        }, 1.5);
      };
      GoldPig.prototype.aniAction = function(num) {
        var _this = this;
        if (!num) return;
        if (this.sorck) return;
        this.sorck = true;
        this.goldPigRedBagLabel.string = num + "";
        this.schedule(function() {
          _this.goldPigAni();
        }, .7, 2);
        this.scheduleOnce(function() {
          cc.find("displayRedBagCunQianGuan", _this.node).opacity = 0;
          cc.find("displayRedBagCunQianGuan", _this.node).active = true;
          cc.find("displayRedBagCunQianGuan", _this.node).runAction(cc.spawn(cc.fadeIn(.75), cc.moveTo(.5, cc.v2(125, 0))));
        }, 2.8);
        this.scheduleOnce(function() {
          cc.find("displayRedBagCunQianGuan", _this.node).runAction(cc.fadeOut(.75));
        }, 4.8);
        this.schedule(function() {
          cc.find("displayRedBagCunQianGuan", _this.node).active = false;
          cc.find("displayRedBagCunQianGuan", _this.node).setPosition(125, -50);
          _this.sorck = false;
        }, 5.55);
      };
      __decorate([ property(cc.Node) ], GoldPig.prototype, "goldPigRedBag", void 0);
      __decorate([ property(cc.Label) ], GoldPig.prototype, "goldPigRedBagLabel", void 0);
      GoldPig = __decorate([ ccclass ], GoldPig);
      return GoldPig;
    }(cc.Component);
    exports.default = GoldPig;
    cc._RF.pop();
  }, {} ],
  GuideLabel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "635b7UPmFZKca1OmO2U/dRO", "GuideLabel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GuideLabel = function(_super) {
      __extends(GuideLabel, _super);
      function GuideLabel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bg_1 = null;
        _this.bg_2 = null;
        return _this;
      }
      GuideLabel.prototype.start = function() {};
      GuideLabel.prototype.init = function(data) {
        if (1 == data.Type) {
          this.bg_1.active = true;
          this.bg_2.active = false;
        }
        if (2 == data.Type) {
          this.bg_1.active = false;
          this.bg_2.active = true;
        }
      };
      __decorate([ property(cc.Node) ], GuideLabel.prototype, "bg_1", void 0);
      __decorate([ property(cc.Node) ], GuideLabel.prototype, "bg_2", void 0);
      GuideLabel = __decorate([ ccclass ], GuideLabel);
      return GuideLabel;
    }(cc.Component);
    exports.default = GuideLabel;
    cc._RF.pop();
  }, {} ],
  Guide: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c5c19tksJNxoLdnLaUuI+Q", "Guide");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GuideIds = void 0;
    var AdaptarManager_1 = require("../core/Manager/AdaptarManager");
    var LoaderManager_1 = require("../core/Manager/LoaderManager");
    var GameDataManager_1 = require("../core/Manager/GameDataManager");
    var PlatformManger_1 = require("../core/platform/PlatformManger");
    var Const_1 = require("./Const");
    var GuideIds;
    (function(GuideIds) {
      GuideIds[GuideIds["gamePrompt"] = 0] = "gamePrompt";
      GuideIds[GuideIds["hongBaoPrompt"] = 1] = "hongBaoPrompt";
    })(GuideIds = exports.GuideIds || (exports.GuideIds = {}));
    var Guide = function() {
      function Guide() {
        this.nowGuideId = -1;
        this.isShowing = false;
        this.guideViewNode = null;
      }
      Guide.getInstance = function() {
        null == Guide.instance && (Guide.instance = new Guide());
        return Guide.instance;
      };
      Guide.prototype.createView = function() {
        this.guideViewNode = new cc.Node();
        this.guideViewNode.width = AdaptarManager_1.default.getInstance().fullWidth;
        this.guideViewNode.height = AdaptarManager_1.default.getInstance().fullHeight;
        var scece = cc.director.getScene();
        scece.addChild(this.guideViewNode);
        this.guideViewNode.setPosition(cc.v2(AdaptarManager_1.default.getInstance().fullWidth / 2, AdaptarManager_1.default.getInstance().fullHeight / 2));
      };
      Guide.prototype.closwGuid = function(guideId, force) {
        void 0 === force && (force = false);
        if (this.nowGuideId != guideId && !force) return false;
        if (this.isShowing) {
          this.isShowing = false;
          this.nowGuideId = -1;
          this.guideViewNode.destroy();
          return true;
        }
        return false;
      };
      Guide.prototype.openGuide = function() {
        if (this.isShowing) return this;
        this.createView();
        this.isShowing = true;
        return this;
      };
      Guide.prototype.createMask = function(maskType, maskPos, maskWidth, maskHeight, bgPost, bgWidth, bgHeight) {
        return __awaiter(this, void 0, void 0, function() {
          var path, prefab, maskNode, mask, bg;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              path = "prefabs/common/GuideNode";
              return [ 4, LoaderManager_1.default.getInstance().loadRes(path, cc.Prefab) ];

             case 1:
              prefab = _a.sent();
              maskNode = cc.instantiate(prefab);
              this.guideViewNode.addChild(maskNode);
              maskNode.width = maskWidth;
              maskNode.height = maskHeight;
              maskNode.setPosition(maskPos);
              mask = maskNode.getComponent(cc.Mask);
              1 == maskType ? mask.type = cc.Mask.Type.RECT : 2 == maskType && (mask.type = cc.Mask.Type.ELLIPSE);
              bg = maskNode.getChildByName("sprite_bg");
              bg.width = bgWidth;
              bg.height = bgHeight;
              bg.setPosition(bgPost);
              return [ 2 ];
            }
          });
        });
      };
      Guide.prototype.createSpine = function(spinePos) {
        return __awaiter(this, void 0, void 0, function() {
          var path, prefab, spineNode, ske;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              path = "prefabs/common/spineNode";
              return [ 4, LoaderManager_1.default.getInstance().loadRes(path, cc.Prefab) ];

             case 1:
              prefab = _a.sent();
              spineNode = cc.instantiate(prefab);
              this.guideViewNode.addChild(spineNode);
              spineNode.setPosition(cc.v2(spinePos.x + 61, spinePos.y - 122));
              ske = spineNode.getComponent(sp.Skeleton);
              ske.setAnimation(0, "point", true);
              return [ 2 ];
            }
          });
        });
      };
      Guide.prototype.createLabel = function(spinePos, type) {
        return __awaiter(this, void 0, void 0, function() {
          var path, prefab, spineNode;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              path = "prefabs/common/GuideLabel";
              return [ 4, LoaderManager_1.default.getInstance().loadRes(path, cc.Prefab) ];

             case 1:
              prefab = _a.sent();
              spineNode = cc.instantiate(prefab);
              this.guideViewNode.addChild(spineNode);
              spineNode.setPosition(cc.v2(spinePos.x, spinePos.y));
              spineNode.getComponent("GuideLabel").init({
                Type: type
              });
              return [ 2 ];
            }
          });
        });
      };
      Guide.prototype.showPrompt = function(ItemBlock) {
        if (GuideIds.gamePrompt != GameDataManager_1.default.getInstance().userData.guideId) return;
        PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.guide_1.eventID, Const_1.default.AndroidEvent.guide_1.eventName);
        var itemPos = ItemBlock.node.convertToWorldSpaceAR(cc.v2(0, 0));
        var pos = this.guideViewNode.convertToNodeSpaceAR(itemPos);
        this.createSpine(pos);
        var labelPos = cc.v2(0, pos.y + 100);
        this.createLabel(labelPos, 1);
        this.nowGuideId = GameDataManager_1.default.getInstance().userData.guideId;
        GameDataManager_1.default.getInstance().userData.setGuideId(GameDataManager_1.default.getInstance().userData.guideId + 1);
      };
      Guide.prototype.showHongBaoPrompt = function(hongBao) {
        if (GuideIds.hongBaoPrompt != GameDataManager_1.default.getInstance().userData.guideId) return;
        PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.guide_2.eventID, Const_1.default.AndroidEvent.guide_2.eventName);
        var itemPos = hongBao.convertToWorldSpaceAR(cc.v2(0, 0));
        var pos = this.guideViewNode.convertToNodeSpaceAR(itemPos);
        this.createSpine(pos);
        var labelPos = cc.v2(0, pos.y + 150);
        this.createLabel(labelPos, 2);
        this.nowGuideId = GameDataManager_1.default.getInstance().userData.guideId;
        GameDataManager_1.default.getInstance().userData.setGuideId(GameDataManager_1.default.getInstance().userData.guideId + 1);
      };
      Guide.instance = null;
      return Guide;
    }();
    exports.default = Guide;
    cc._RF.pop();
  }, {
    "../core/Manager/AdaptarManager": "AdaptarManager",
    "../core/Manager/GameDataManager": "GameDataManager",
    "../core/Manager/LoaderManager": "LoaderManager",
    "../core/platform/PlatformManger": "PlatformManger",
    "./Const": "Const"
  } ],
  HongBaoPopup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2eb9en2EPdIjL2aifR0fSyJ", "HongBaoPopup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var BaseView_1 = require("../../core/View/BaseView");
    var FightManger_1 = require("../fight/FightManger");
    var GameJSB_1 = require("../GameJSB");
    var GoldPig_1 = require("./GoldPig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HongBaoPopup = function(_super) {
      __extends(HongBaoPopup, _super);
      function HongBaoPopup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.popRedBagNum = null;
        _this.isRedBagPop = false;
        _this.i = 3;
        _this.a = null;
        return _this;
      }
      HongBaoPopup.prototype.onLoad = function() {
        this.node.active = true;
        this.selfAdaption();
      };
      HongBaoPopup.prototype.start = function() {};
      HongBaoPopup.prototype.update = function(dt) {};
      HongBaoPopup.prototype.selfAdaption = function() {
        cc.find("redBag/bg/label", this.node).getComponent(cc.Label).string = "" + FightManger_1.default.getInstance().ViewFight.luckRewardLabel;
        cc.find("redBag/title/label", this.node).getComponent(cc.Label).string = "" + FightManger_1.default.getInstance().ViewFight.rewardname;
        if ("\u65b0\u624b\u7ea2\u5305" == FightManger_1.default.getInstance().ViewFight.hongbaoType) {
          cc.find("redBag/btnParent/btn2", this.node).active = false;
          cc.find("redBag/btnParent/btn3", this.node).active = true;
          GameJSB_1.GameJSB.getAndroidShowAd("2");
        } else {
          cc.find("redBag/btnParent/btn2", this.node).active = true;
          cc.find("redBag/btnParent/btn3", this.node).active = false;
          this.counTime();
          GameJSB_1.GameJSB.getAndroidShowAd("1");
        }
      };
      HongBaoPopup.prototype.counTime = function() {
        var _this = this;
        this.i--;
        this.a = setInterval(function() {
          _this.callback();
          cc.find("redBag/btnParent/btn2/()/timeCount", _this.node).getComponent(cc.Label).string = "" + _this.i;
          _this.i--;
        }, 1e3);
      };
      HongBaoPopup.prototype.callback = function() {
        if (this.i < 0) {
          this.i = 0;
          cc.find("redBag/btnParent/btn2", this.node).active = false;
          cc.find("redBag/btnParent/btn", this.node).active = true;
          clearInterval(this.a);
        }
      };
      HongBaoPopup.prototype.clickObtain = function() {
        switch (FightManger_1.default.getInstance().ViewFight.hongbaoType) {
         case "\u5e78\u8fd0\u7ea2\u5305":
          GameJSB_1.GameJSB.getAndroidDismissAd();
          break;

         case "\u5012\u8ba1\u65f6\u7ea2\u5305":
          GameJSB_1.GameJSB.getAndroidData("/userReward/getvideodata", "", "getvideodata");
          GameJSB_1.GameJSB.getAndroidDismissAd();
          break;

         case "\u8fc7\u5173\u7ea2\u5305":
          GameJSB_1.GameJSB.getAndroidDismissAd();
          FightManger_1.default.getInstance().nextLevel();
          break;

         case "\u5347\u7ea7\u5956\u52b1":
          GameJSB_1.GameJSB.getAndroidDismissAd();
          break;

         case "\u5e78\u8fd0\u8f6c\u76d8":
          cc.find("hongbaoHome/label", FightManger_1.default.getInstance().ViewFight.ViewTop).getComponent(cc.Label).string = window["killStar"]["rewards"].userinteger + "";
          cc.find("dongtaiIcon/pig", FightManger_1.default.getInstance().ViewFight.ViewTop).getComponent(GoldPig_1.default).aniAction(window["killStar"]["rewards"].todaysave);
          GameJSB_1.GameJSB.getAndroidDismissAd();
          break;

         case "\u65b0\u624b\u7ea2\u5305":
          FightManger_1.default.getInstance().nextLevel();
          GameJSB_1.GameJSB.getAndroidWithdrawPage();
          GameJSB_1.GameJSB.getAndroidData("/register/getUserInfo", "", "UserInfo");
          GameJSB_1.GameJSB.getAndroidDismissAd();
        }
        this.node.active = false;
        FightManger_1.default.getInstance().loadRedBagAni();
        setTimeout(function() {
          ViewManager_1.default.getInstance().CloseView("HongBaoPopup");
        }, 500);
      };
      __decorate([ property(cc.Label) ], HongBaoPopup.prototype, "popRedBagNum", void 0);
      HongBaoPopup = __decorate([ ccclass ], HongBaoPopup);
      return HongBaoPopup;
    }(BaseView_1.default);
    exports.default = HongBaoPopup;
    cc._RF.pop();
  }, {
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/View/BaseView": "BaseView",
    "../GameJSB": "GameJSB",
    "../fight/FightManger": "FightManger",
    "./GoldPig": "GoldPig"
  } ],
  HongBao: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91e06uCUHZLkIsI6iu1+reo", "HongBao");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightPoolManger_1 = require("./FightPoolManger");
    var Guide_1 = require("../Guide");
    var PlatformManger_1 = require("../../core/platform/PlatformManger");
    var Const_1 = require("../Const");
    var QQPlaform_1 = require("../../core/platform/QQPlaform");
    var RedCenter_1 = require("../../../alySDKW/scripts/RedCenter");
    var GameDataManager_1 = require("../../core/Manager/GameDataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HongBao = function(_super) {
      __extends(HongBao, _super);
      function HongBao() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.particle_1 = null;
        return _this;
      }
      HongBao.prototype.onLoad = function() {
        this.node.on("click", this.onHongbao, this);
      };
      HongBao.prototype.init = function(data) {
        this.particle_1.resetSystem();
        Guide_1.default.getInstance().openGuide().showHongBaoPrompt(this.node);
      };
      HongBao.prototype.onHongbao = function() {
        PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.qipao_click.eventID, Const_1.default.AndroidEvent.qipao_click.eventName);
        Guide_1.default.getInstance().closwGuid(Guide_1.GuideIds.hongBaoPrompt);
        this.openRedpackFirst();
        FightPoolManger_1.default.getInstance().putHongBao(this.node);
      };
      HongBao.prototype.openRedpackFirst = function() {
        var level = GameDataManager_1.default.getInstance().userData.level;
        RedCenter_1.default.getInstance().openRedpackFirst({
          callBack: {
            onOpened: function() {
              console.log("openFirstRd==========");
              QQPlaform_1.default.getInstance().qqShowJimuAd(true);
            },
            onClosed: function() {
              console.log("closefirst==========");
              QQPlaform_1.default.getInstance().qqShowJimuAd(false);
            },
            redpackVideoClose: function() {
              console.log("redpackVideoClose=====1=========");
            }
          },
          ishaveVideo: true,
          redpackType: "4",
          activeName: "\u5173\u5361\u5185\u7ea2\u5305",
          isOpenSecondPage: false,
          openEventPotnum: 4,
          passNum: level
        });
      };
      HongBao.prototype.start = function() {};
      __decorate([ property(cc.ParticleSystem) ], HongBao.prototype, "particle_1", void 0);
      HongBao = __decorate([ ccclass ], HongBao);
      return HongBao;
    }(cc.Component);
    exports.default = HongBao;
    cc._RF.pop();
  }, {
    "../../../alySDKW/scripts/RedCenter": "RedCenter",
    "../../core/Manager/GameDataManager": "GameDataManager",
    "../../core/platform/PlatformManger": "PlatformManger",
    "../../core/platform/QQPlaform": "QQPlaform",
    "../Const": "Const",
    "../Guide": "Guide",
    "./FightPoolManger": "FightPoolManger"
  } ],
  HttpCallBack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5460fRpqWRPzYB01WvIcjoG", "HttpCallBack");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SendDataHttp_1 = require("./SendDataHttp");
    var GameDataManager_1 = require("../Manager/GameDataManager");
    var FightConst_1 = require("../../game/fight/FightConst");
    var DebugHT_1 = require("../../game/DebugHT");
    var HttpCallBack = function() {
      function HttpCallBack() {}
      HttpCallBack.getInstance = function() {
        null == this.instance && (this.instance = new HttpCallBack());
        return this.instance;
      };
      HttpCallBack.prototype.getGameQQConfig = function(callBack) {
        SendDataHttp_1.default.getInstance().getGameQQConfig({
          success: function(responseText) {
            var responseData = JSON.parse(responseText);
            var data = responseData[DebugHT_1.default.USE_VERSION_QQ];
            console.log("====data===", data);
            data.isOpenTouch && (GameDataManager_1.default.getInstance().kaiGuan.isOpenTouch = data.isOpenTouch > 0);
            data.isOpenRedPackage && (GameDataManager_1.default.getInstance().kaiGuan.isOpenRedPackage = data.isOpenRedPackage > 0);
            FightConst_1.default.VideoPropNum = data.videoPropNum;
            GameDataManager_1.default.getInstance().kaiGuan.bannerRefreshTime = data.bannerRefreshTime;
            callBack && callBack();
          }.bind(this),
          fail: function(str) {}.bind(this)
        });
      };
      return HttpCallBack;
    }();
    exports.default = HttpCallBack;
    cc._RF.pop();
  }, {
    "../../game/DebugHT": "DebugHT",
    "../../game/fight/FightConst": "FightConst",
    "../Manager/GameDataManager": "GameDataManager",
    "./SendDataHttp": "SendDataHttp"
  } ],
  HttpLoading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b5b74RhXFhOsKIp8RtQgFtC", "HttpLoading");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HttpLoading = function(_super) {
      __extends(HttpLoading, _super);
      function HttpLoading() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bgNode = null;
        _this.httpBgNode = null;
        _this.loadingAni = null;
        return _this;
      }
      HttpLoading.prototype.init = function() {};
      HttpLoading.prototype.start = function() {};
      __decorate([ property(cc.Node) ], HttpLoading.prototype, "bgNode", void 0);
      __decorate([ property(cc.Node) ], HttpLoading.prototype, "httpBgNode", void 0);
      __decorate([ property(cc.Animation) ], HttpLoading.prototype, "loadingAni", void 0);
      HttpLoading = __decorate([ ccclass ], HttpLoading);
      return HttpLoading;
    }(cc.Component);
    exports.default = HttpLoading;
    cc._RF.pop();
  }, {} ],
  Https: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "768f4F12EhGiL9t5WU3vMqD", "Https");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FunUtils_1 = require("../Util/FunUtils");
    var GameDataManager_1 = require("../Manager/GameDataManager");
    var Md5Api_1 = require("../Util/Md5Api");
    var MainSceneManager_1 = require("../../game/scenes/MainSceneManager");
    var Https = function() {
      function Https() {
        this.retryCallBack = null;
      }
      Https.getInstance = function() {
        null == this.instance && (this.instance = new Https());
        return this.instance;
      };
      Https.prototype.joinParams = function(dataInfo) {
        if ("object" === typeof dataInfo) {
          if (null === dataInfo) return;
          if (Array.isArray(dataInfo)) return JSON.stringify(dataInfo);
          var keys = Object.keys(dataInfo);
          var params = keys.map(function(key, index) {
            return key + "=" + dataInfo[key] + (index === keys.length - 1 ? "" : "&");
          });
          return params.join("");
        }
        return dataInfo + "";
      };
      Https.prototype.get = function(url, callback, dataInfo) {
        if (dataInfo) {
          var connecter = "?";
          "&" === url[url.length - 1] ? connecter = "" : url.indexOf("?") > 0 && (connecter = "&");
          var params = this.joinParams(dataInfo);
          params.length > 0 && (url += connecter + params);
        }
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5e3;
        xhr.ontimeout = function() {
          cc.log("[tydf.https] get: request time out.");
          FunUtils_1.default.showTip("\u8fde\u63a5\u8d85\u65f6,\u8bf7\u68c0\u67e5\u7f51\u7edc!");
          callback && callback.fail && callback.fail("\u8fde\u63a5\u8d85\u65f6,\u8bf7\u68c0\u67e5\u7f51\u7edc!");
        };
        xhr.onreadystatechange = function() {
          200 == xhr.status && 4 === xhr.readyState && callback && callback.success && callback.success(xhr.responseText);
        };
        console.log("==url=", url);
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        xhr.send();
      };
      Https.prototype.post = function(url, callback, dataInfo) {
        var _this = this;
        console.log("post==" + url);
        console.log("post=dataInfo=" + JSON.stringify(dataInfo));
        this.retryCallBack = null;
        this.retryCallBack = function() {
          _this.post(url, callback, dataInfo);
        };
        var sign = null;
        if (GameDataManager_1.default.getInstance().userData.loginToken) {
          var json = JSON.stringify(dataInfo);
          var token = GameDataManager_1.default.getInstance().userData.loginToken;
          var liu = token.substring(0, 6);
          var shi = token.substring(0, 10);
          var add = liu + shi;
          var md5_1 = Md5Api_1.default.getInstance().md5(add);
          var add_2 = md5_1;
          dataInfo && (add_2 = json + md5_1);
          sign = Md5Api_1.default.getInstance().md5(add_2);
        } else {
          var json = JSON.stringify(dataInfo);
          sign = Md5Api_1.default.getInstance().md5(json);
        }
        var xhr = cc.loader.getXMLHttpRequest();
        var outTime = false;
        var timer = setTimeout(function() {
          outTime = true;
          xhr.abort();
          FunUtils_1.default.showTip("\u8fde\u63a5\u8d85\u65f6,\u8bf7\u68c0\u67e5\u7f51\u7edc!");
          callback && callback.fail && callback.fail("\u8fde\u63a5\u8d85\u65f6,\u8bf7\u68c0\u67e5\u7f51\u7edc!");
          FunUtils_1.default.httpDelay();
        }, 1e4);
        xhr.timeout = 1e4;
        xhr.onreadystatechange = function() {
          if (200 == xhr.status && 4 === xhr.readyState) {
            var responseText = xhr.responseText;
            if (outTime) return;
            clearTimeout(timer);
            callback && callback.success && callback.success(responseText);
          }
        };
        xhr.open("POST", encodeURI(url), true);
        xhr.setRequestHeader("Content-Type", 'application/json;charset=UTF-8"');
        if (GameDataManager_1.default.getInstance().userData.loginToken) {
          xhr.setRequestHeader("Authorization", "Bearer " + GameDataManager_1.default.getInstance().userData.loginToken);
          xhr.setRequestHeader("sign", sign);
        } else xhr.setRequestHeader("sign", sign);
        xhr.send(JSON.stringify(dataInfo));
      };
      Https.prototype.onRetry = function() {
        if (this.retryCallBack) {
          MainSceneManager_1.default.getInstance().MainScene.showLoading();
          this.retryCallBack();
        }
      };
      return Https;
    }();
    exports.default = Https;
    cc._RF.pop();
  }, {
    "../../game/scenes/MainSceneManager": "MainSceneManager",
    "../Manager/GameDataManager": "GameDataManager",
    "../Util/FunUtils": "FunUtils",
    "../Util/Md5Api": "Md5Api"
  } ],
  InColorEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c8a3KTrTtNuIIoR8zhk2cn", "InColorEffect");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightPoolManger_1 = require("./FightPoolManger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var InColorEffect = function(_super) {
      __extends(InColorEffect, _super);
      function InColorEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Particle_1 = null;
        _this.Particle_2 = null;
        _this.Particle_3 = null;
        _this.Particle_4 = null;
        return _this;
      }
      InColorEffect.prototype.onLoad = function() {};
      InColorEffect.prototype.init = function(data) {
        var _this = this;
        this.Particle_1.resetSystem();
        this.Particle_2.resetSystem();
        this.Particle_3.resetSystem();
        this.Particle_4.resetSystem();
        this.scheduleOnce(function() {
          FightPoolManger_1.default.getInstance().putInColorEffect(_this.node);
        }, 1);
      };
      InColorEffect.prototype.start = function() {};
      __decorate([ property(cc.ParticleSystem) ], InColorEffect.prototype, "Particle_1", void 0);
      __decorate([ property(cc.ParticleSystem) ], InColorEffect.prototype, "Particle_2", void 0);
      __decorate([ property(cc.ParticleSystem) ], InColorEffect.prototype, "Particle_3", void 0);
      __decorate([ property(cc.ParticleSystem) ], InColorEffect.prototype, "Particle_4", void 0);
      InColorEffect = __decorate([ ccclass ], InColorEffect);
      return InColorEffect;
    }(cc.Component);
    exports.default = InColorEffect;
    cc._RF.pop();
  }, {
    "./FightPoolManger": "FightPoolManger"
  } ],
  InColor: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a05d4F1Y8ZLTLPECv4dqzEP", "InColor");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightManger_1 = require("./FightManger");
    var FightConst_1 = require("./FightConst");
    var FightPoolManger_1 = require("./FightPoolManger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var InColor = function(_super) {
      __extends(InColor, _super);
      function InColor() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.itemSprite = [];
        _this.posX = [ -127.5, -42.5, 42.5, 127.5 ];
        _this.itemBlock = null;
        return _this;
      }
      InColor.prototype.onLoad = function() {
        this.itemSprite[0].node.on("click", this.onItem1, this);
        this.itemSprite[1].node.on("click", this.onItem2, this);
        this.itemSprite[2].node.on("click", this.onItem3, this);
        this.itemSprite[3].node.on("click", this.onItem4, this);
        this.itemSprite[4].node.on("click", this.onItem5, this);
        this.itemSprite[5].node.on("click", this.onItem5, this);
        this.itemSprite[6].node.on("click", this.onItem5, this);
        this.itemSprite[7].node.on("click", this.onItem5, this);
      };
      InColor.prototype.init = function(data) {
        this.setItemSprite(data.ItemBlock);
      };
      InColor.prototype.setNodePosition = function(itemBlock) {
        var x = itemBlock.node.x;
        var y = itemBlock.node.y + 80;
        0 == itemBlock.yId && (x += 142);
        1 == itemBlock.yId && (x += 71);
        itemBlock.yId == FightConst_1.default.FightNum.rowNum - 1 && (x -= 142);
        itemBlock.yId == FightConst_1.default.FightNum.rowNum - 2 && (x -= 71);
        this.node.setPosition(x, y);
      };
      InColor.prototype.setItemSprite = function(itemBlock) {
        this.itemBlock && this.itemBlock.node.stopAllActions();
        itemBlock.playHintAction();
        this.setNodePosition(itemBlock);
        this.itemBlock = itemBlock;
        var color = itemBlock.colorType;
        var posNum = 0;
        for (var index = 0; index < this.itemSprite.length; index++) {
          var element = this.itemSprite[index];
          element.node.active = false;
          if (color != index + 1) {
            element.node.x = this.posX[posNum];
            element.node.active = true;
            posNum++;
          }
        }
      };
      InColor.prototype.onItem1 = function() {
        this.addInColorEffect();
        this.inColor(1);
      };
      InColor.prototype.onItem2 = function() {
        this.addInColorEffect();
        this.inColor(2);
      };
      InColor.prototype.onItem3 = function() {
        this.addInColorEffect();
        this.inColor(3);
      };
      InColor.prototype.onItem4 = function() {
        this.addInColorEffect();
        this.inColor(4);
      };
      InColor.prototype.onItem5 = function() {
        this.addInColorEffect();
        this.inColor(5);
      };
      InColor.prototype.onItem6 = function() {
        this.addInColorEffect();
        this.inColor(6);
      };
      InColor.prototype.onItem7 = function() {
        this.addInColorEffect();
        this.inColor(7);
      };
      InColor.prototype.onItem8 = function() {
        this.addInColorEffect();
        this.inColor(8);
      };
      InColor.prototype.inColor = function(type) {
        var _this = this;
        this.scheduleOnce(function() {
          _this.itemBlock.setInColcor(type);
          FightManger_1.default.getInstance().closeInColorProp(true);
        }, .25);
      };
      InColor.prototype.addInColorEffect = function() {
        var parentNode = FightManger_1.default.getInstance().ViewFight.MapNode;
        var pos = this.itemBlock.node.getPosition();
        var data = {};
        FightPoolManger_1.default.getInstance().createInColorEffect(parentNode, pos, data);
      };
      InColor.prototype.start = function() {};
      __decorate([ property(cc.Sprite) ], InColor.prototype, "itemSprite", void 0);
      InColor = __decorate([ ccclass ], InColor);
      return InColor;
    }(cc.Component);
    exports.default = InColor;
    cc._RF.pop();
  }, {
    "./FightConst": "FightConst",
    "./FightManger": "FightManger",
    "./FightPoolManger": "FightPoolManger"
  } ],
  ItemBlock: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fbd80sz7YBIzojOE5pr8w5S", "ItemBlock");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightConst_1 = require("./FightConst");
    var FightManger_1 = require("./FightManger");
    var FunUtils_1 = require("../../core/Util/FunUtils");
    var GameDataManager_1 = require("../../core/Manager/GameDataManager");
    var FightPoolManger_1 = require("./FightPoolManger");
    var Guide_1 = require("../Guide");
    var AudioManager_1 = require("../../core/Manager/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemBlock = function(_super) {
      __extends(ItemBlock, _super);
      function ItemBlock() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bgSprite = null;
        _this.colorSprieFrame = [];
        _this.status = 0;
        _this.itemType = 0;
        _this.colorType = 0;
        _this.isSingle = false;
        _this.isPushMapData = false;
        _this.xId = 0;
        _this.yId = 0;
        _this.Data = null;
        return _this;
      }
      ItemBlock.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
      };
      ItemBlock.prototype.start = function() {};
      ItemBlock.prototype.init = function(data) {
        this.Data = data;
        this.colorType = data.ColorType;
        this.setXYId(data.XId, data.YId);
        this.status = FightConst_1.default.ItemBlockStatus.Normal;
        this.itemType = 0;
        this.node.angle = 0;
        if (0 == this.colorType) {
          this.status = FightConst_1.default.ItemBlockStatus.Dissolve;
          FightPoolManger_1.default.getInstance().putItemBlock(this.node);
          FightManger_1.default.getInstance().Map[data.XId][data.YId] = null;
          return;
        }
        this.node.active = true;
        this.loadSprite(this.colorType);
        this.playStartAction();
        this.node.setScale(1, 1);
      };
      ItemBlock.prototype.initItemType = function() {
        this.isPushMapData = false;
      };
      ItemBlock.prototype.onTouchStart = function(touch) {
        if (FightManger_1.default.getInstance().Status == FightConst_1.default.GameStatus.IncolorStatus) {
          FightManger_1.default.getInstance().inColor && FightManger_1.default.getInstance().inColor.setItemSprite(this);
          return;
        }
        if (FightManger_1.default.getInstance().Status == FightConst_1.default.GameStatus.BombStatus) {
          FightManger_1.default.getInstance().bombCheckBlock(this.xId, this.yId);
          return;
        }
        if (FightManger_1.default.getInstance().Status == FightConst_1.default.GameStatus.HammerStatus) {
          FightManger_1.default.getInstance().checkTouchBlock(this.xId, this.yId);
          return;
        }
        if (FightManger_1.default.getInstance().Status != FightConst_1.default.GameStatus.StartGame || this.status != FightConst_1.default.ItemBlockStatus.YesTouch) return;
        if (this.isSingle && this.status == FightConst_1.default.ItemBlockStatus.YesTouch) {
          cc.tween(this.node).to(.1, {
            scaleX: 1.1,
            scaleY: .9
          }).to(.3, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
          return;
        }
        if (!this.isSingle && this.status == FightConst_1.default.ItemBlockStatus.YesTouch && FightManger_1.default.getInstance().Status == FightConst_1.default.GameStatus.StartGame) {
          Guide_1.default.getInstance().closwGuid(Guide_1.GuideIds.gamePrompt);
          Guide_1.default.getInstance().closwGuid(Guide_1.GuideIds.hongBaoPrompt);
          FightManger_1.default.getInstance().checkTouchBlock(this.xId, this.yId);
        }
      };
      ItemBlock.prototype.setXYId = function(xId, yId) {
        this.xId = xId;
        this.yId = yId;
        GameDataManager_1.default.getInstance().userData.setMap(xId, yId, this.colorType, false);
      };
      ItemBlock.prototype.setDataPos = function(x, y) {
        this.Data.Pos.x = x;
        this.Data.Pos.y = y;
      };
      ItemBlock.prototype.setInColcor = function(colorType) {
        this.colorType = colorType;
        GameDataManager_1.default.getInstance().userData.setMap(this.xId, this.yId, this.colorType, false);
        this.loadSprite(this.colorType);
      };
      ItemBlock.prototype.loadSprite = function(colorType) {
        this.bgSprite.spriteFrame = this.colorSprieFrame[colorType - 1];
      };
      ItemBlock.prototype.playStartAction = function() {
        var _this = this;
        var posy = this.node.y - this.Data.Pos.y;
        this.status = FightConst_1.default.ItemBlockStatus.YesTouch;
        var tween = cc.tween(this.node).to(posy / 2500, {
          position: cc.v3(this.Data.Pos.x, this.Data.Pos.y),
          scale: 1
        }).call(function() {
          _this.playStartSound();
          _this.node.setScale(1, 1);
          _this.status = FightConst_1.default.ItemBlockStatus.YesTouch;
        });
        if (this.Data.StartTime) {
          var time = FunUtils_1.default.getRandom(this.Data.StartTime, this.Data.StartTime + 50);
          this.scheduleOnce(function() {
            tween.start();
          }, time / 1e3);
        }
      };
      ItemBlock.prototype.playStartSound = function() {
        0 == this.yId && 9 == this.xId && AudioManager_1.default.getInstance().playSound("landing");
        0 == this.yId && 8 == this.xId && AudioManager_1.default.getInstance().playSound("landing");
        0 == this.yId && 7 == this.xId && AudioManager_1.default.getInstance().playSound("landing");
        0 == this.yId && 6 == this.xId && AudioManager_1.default.getInstance().playSound("landing");
        0 == this.yId && 5 == this.xId && AudioManager_1.default.getInstance().playSound("landing");
        0 == this.yId && 4 == this.xId && AudioManager_1.default.getInstance().playSound("landing");
        0 == this.yId && 3 == this.xId && AudioManager_1.default.getInstance().playSound("landing");
        0 == this.yId && 2 == this.xId && AudioManager_1.default.getInstance().playSound("landing");
        0 == this.yId && 1 == this.xId && AudioManager_1.default.getInstance().playSound("landing");
        0 == this.yId && 0 == this.xId && AudioManager_1.default.getInstance().playSound("landing");
      };
      ItemBlock.prototype.playDieAction = function(time, callback, score) {
        var _this = this;
        var self = this;
        GameDataManager_1.default.getInstance().userData.setMap(this.xId, this.yId, 0, false);
        this.node.stopAllActions();
        this.status = FightConst_1.default.ItemBlockStatus.Dissolve;
        this.node.scaleX = 1;
        this.node.scaleY = 1;
        cc.tween(this.node).delay(time).call(function() {
          AudioManager_1.default.getInstance().playSound("pop_star");
          FightManger_1.default.getInstance().addParticleBlock(_this.node.x, _this.node.y, _this.colorType);
          cc.tween(_this.node).to(FightConst_1.default.FightNum.dissolveAnimationSpeed, {
            scale: 0
          }).call(function() {
            callback && callback();
          }).start();
        }).start();
      };
      ItemBlock.prototype.playFallData = function(data) {
        GameDataManager_1.default.getInstance().userData.setMap(this.xId, this.yId, 0, false);
        data && this.setXYId(data.x, data.y);
      };
      ItemBlock.prototype.playFallAction = function(y, data, soundNum) {
        var _this = this;
        this.status = FightConst_1.default.ItemBlockStatus.Normal;
        GameDataManager_1.default.getInstance().userData.setMap(this.xId, this.yId, 0, false);
        data && this.setXYId(data.x, data.y);
        cc.tween(this.node).by(.03, {
          position: cc.v3(0, FightConst_1.default.FightNum.itemBlockWidth / 2)
        }).by(.05, {
          position: cc.v3(0, -y * FightConst_1.default.FightNum.itemBlockWidth - FightConst_1.default.FightNum.itemBlockWidth / 2)
        }).call(function() {
          _this.status = FightConst_1.default.ItemBlockStatus.YesTouch;
          1 == soundNum && AudioManager_1.default.getInstance().playSound("landing");
          _this.setDataPos(_this.node.x, _this.node.y);
        }).start();
      };
      ItemBlock.prototype.playLeftMoveAction = function(x, data, time) {
        var _this = this;
        this.status = FightConst_1.default.ItemBlockStatus.Normal;
        GameDataManager_1.default.getInstance().userData.setMap(this.xId, this.yId, 0, false);
        data && this.setXYId(data.x, data.y);
        cc.tween(this.node).delay(time).by(.05, {
          position: cc.v3(-x * FightConst_1.default.FightNum.itemBlockWidth, 0)
        }, {
          easing: "bounceOut"
        }).call(function() {
          _this.status = FightConst_1.default.ItemBlockStatus.YesTouch;
          _this.setDataPos(_this.node.x, _this.node.y);
        }).start();
      };
      ItemBlock.prototype.playHintAction = function() {
        var tween = cc.tween().delay(0).to(FightConst_1.default.FightNum.hintAnimationSpeed, {
          scale: .95
        }).to(FightConst_1.default.FightNum.hintAnimationSpeed, {
          scale: 1
        }).to(FightConst_1.default.FightNum.hintAnimationSpeed, {
          scale: .95
        }).to(FightConst_1.default.FightNum.hintAnimationSpeed, {
          scale: 1
        });
        tween.clone(this.node).repeatForever().start();
      };
      __decorate([ property(cc.Sprite) ], ItemBlock.prototype, "bgSprite", void 0);
      __decorate([ property(cc.SpriteFrame) ], ItemBlock.prototype, "colorSprieFrame", void 0);
      ItemBlock = __decorate([ ccclass ], ItemBlock);
      return ItemBlock;
    }(cc.Component);
    exports.default = ItemBlock;
    cc._RF.pop();
  }, {
    "../../core/Manager/AudioManager": "AudioManager",
    "../../core/Manager/GameDataManager": "GameDataManager",
    "../../core/Util/FunUtils": "FunUtils",
    "../Guide": "Guide",
    "./FightConst": "FightConst",
    "./FightManger": "FightManger",
    "./FightPoolManger": "FightPoolManger"
  } ],
  JsFunc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a35eaHMRfVEC4qMwxM8FNTG", "JsFunc");
    "use strict";
    var JsFunc = {
      updateRenderData: function updateRenderData(label) {
        label._updateRenderData(true);
      }
    };
    module.exports = JsFunc;
    cc._RF.pop();
  }, {} ],
  KuaiSuHongBao: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a101e9IA3NIgYBBhXj+Pqbj", "KuaiSuHongBao");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../core/Manager/AudioManager");
    var FightManger_1 = require("../fight/FightManger");
    var GameJSB_1 = require("../GameJSB");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.progress = null;
        _this.coolingNum = null;
        _this.coolingTime = null;
        _this.coolingNumMax = null;
        _this.coolingNumMin = null;
        _this.coolNumUpperLimit = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.coolingNum = 0;
        this.progress.getComponent(cc.Sprite).fillRange = 0;
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.update = function(dt) {};
      NewClass.prototype.clickIcon = function() {
        var _this = this;
        this.coolNumUpperLimit = Math.round(this.coolingNumMin + (this.coolingNumMax - this.coolingNumMin + 1) * Math.random());
        console.log("\u5feb\u901f\u7ea2\u5305\u6700\u5927\u503c:", this.coolingNumMax, "\u5feb\u901f\u7ea2\u5305\u6700\u5c0f\u503c:", this.coolingNumMin);
        console.log("\u5feb\u901f\u7ea2\u5305{1.cd\u662f\u9886\u53d6\u51e0\u6b21,2.\u76ee\u524d\u9886\u53d6\u4e86\u51e0\u6b21}" + this.coolNumUpperLimit + " , " + this.coolingNum);
        if (this.coolingNum < this.coolNumUpperLimit) {
          var ViewBottom = FightManger_1.default.getInstance().ViewFight.ViewBottom;
          cc.find("iconBottom/kuaisuhongbao/popLabel", ViewBottom).active && (cc.find("iconBottom/kuaisuhongbao/popLabel", ViewBottom).active = false);
          if (this.progress.getComponent(cc.Sprite).fillRange < 1) {
            AudioManager_1.default.getInstance().playSound("button");
            this.progress.getComponent(cc.Sprite).fillRange = this.progress.getComponent(cc.Sprite).fillRange + 1 / 7;
          }
          if (1 == this.progress.getComponent(cc.Sprite).fillRange) {
            this.coolingNum++;
            var pamrm = {
              type: 17
            };
            GameJSB_1.GameJSB.getAndroidData("/userReward/rewards", JSON.stringify(pamrm), "rewards");
            AudioManager_1.default.getInstance().playSound("xcclick");
            this.progress.getComponent(cc.Sprite).fillRange = 0;
            var hongbaoAni = FightManger_1.default.getInstance().ViewFight.hongbaoAni;
            var node = cc.instantiate(hongbaoAni);
            node.setParent(FightManger_1.default.getInstance().ViewFight.ViewTop);
            node.getComponent("hongbaoAni").isKuaiSuHongBao = true;
            node.setPosition(270, -1190);
          }
        } else {
          console.log("\u8fdb\u5165cd");
          GameJSB_1.GameJSB.getAndroidShowToast("\u7ea2\u5305\u9886\u53d6\u8fc7\u4e8e\u9891\u7e41\uff0c\u4f11\u606f\u4e00\u4e0b\u5427\uff01");
          this.scheduleOnce(function() {
            _this.coolingNum = 0;
            console.log("\u5feb\u901f\u7ea2\u5305cd\u597d\u4e86\uff0c\u91cd\u7f6e\u6b21\u6570\u4e3a", _this.coolingNum);
          }, 6);
        }
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "progress", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../core/Manager/AudioManager": "AudioManager",
    "../GameJSB": "GameJSB",
    "../fight/FightManger": "FightManger"
  } ],
  LevelUpReward: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be3f1nMhW9NLpaxJ0X7f1G2", "LevelUpReward");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var BaseView_1 = require("../../core/View/BaseView");
    var FightManger_1 = require("../fight/FightManger");
    var GameJSB_1 = require("../GameJSB");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LevelUpReward = function(_super) {
      __extends(LevelUpReward, _super);
      function LevelUpReward() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.overBtn = null;
        _this.userIdLabel = null;
        _this.userNameLabel = null;
        _this.userLevelLabel = null;
        _this.uesrHead = null;
        return _this;
      }
      LevelUpReward.prototype.onLoad = function() {
        GameJSB_1.GameJSB.getAndroidData("/userdata/gamelvlprizedata", "", "gamelvlprizedata");
      };
      LevelUpReward.prototype.start = function() {};
      LevelUpReward.prototype.update = function(dt) {};
      LevelUpReward.prototype.clickOverBtn = function() {
        this.overBtn.active = false;
      };
      LevelUpReward.prototype.clickLevelExplain = function() {
        this.overBtn.active = true;
      };
      LevelUpReward.prototype.clickCloseBtn = function() {
        ViewManager_1.default.getInstance().CloseView("LevelUpReward");
        FightManger_1.default.getInstance().Status = 1;
      };
      LevelUpReward.prototype.initScrollViewContent = function(num) {
        var mask = cc.find("body/mask", this.node);
        var node = cc.find("\u6ed1\u52a8/levelUpLabelBtn", mask);
        mask.getComponent(cc.ScrollView).content.height = node.height * (num + 1) * 1.5 + node.height / 2;
        for (var i = 0; i < num; i++) {
          var copyNode = cc.instantiate(node);
          copyNode.setParent(node.parent);
        }
      };
      LevelUpReward.prototype.initLevelUpRewardPopUp = function(obj) {
        var _this = this;
        var slide = cc.find("body/mask/\u6ed1\u52a8", this.node);
        this.userIdLabel.string = "i d:" + obj.userid;
        this.userLevelLabel.string = "Lv." + obj.gamelvl;
        this.userNameLabel.string = obj.nickname;
        GameJSB_1.GameJSB.loadAsset(obj.headimgurl, "png").then(function(asset) {
          var uesrHeadHeight = _this.uesrHead.height;
          var uesrHeadWidth = _this.uesrHead.width;
          _this.uesrHead.getComponent(cc.Sprite).spriteFrame = asset;
          _this.uesrHead.height = uesrHeadHeight;
          _this.uesrHead.width = uesrHeadWidth;
        });
        cc.find("top/topBaord/ProgressBar", this.node).getComponent(cc.ProgressBar).progress = parseFloat(obj.lvlrate) / 100;
        this.initScrollViewContent(obj.lvlprizes.length - 1);
        for (var i = 0; i < obj.lvlprizes.length; i++) {
          cc.find("tixianshu/label", slide.children[i]).getComponent(cc.Label).string = obj.lvlprizes[i].prize + "\u5143";
          cc.find("btn/green/label", slide.children[i]).getComponent(cc.Label).string = obj.lvlprizes[i].gamelvl + "\u7ea7\u63d0\u73b0";
          cc.find("btn", slide.children[i]).getComponent(cc.Button).clickEvents[0].customEventData = "" + obj.lvlprizes[i].gamelvl;
          switch (obj.lvlprizes[i].status) {
           case 0:
            cc.find("btn/green", slide.children[i]).active = true;
            break;

           case 1:
            cc.find("btn/yellow", slide.children[i]).active = true;
            break;

           case 2:
            cc.find("btn/black", slide.children[i]).active = true;
          }
        }
      };
      LevelUpReward.prototype.clickRewardsBtn = function(e, k) {
        var childName;
        e.target.children.forEach(function(child) {
          child.active && (childName = child.name);
        });
        switch (childName) {
         case "green":
          GameJSB_1.GameJSB.getAndroidShowToast("\u5f53\u524d\u7b49\u7ea7\u4e0d\u8db3\uff0c\u65e0\u6cd5\u9886\u53d6");
          break;

         case "black":
          console.log("\u5f88\u663e\u7136\u9886\u8fc7\u4e86");
          break;

         case "yellow":
          var param = {
            type: 6,
            param: parseInt(k)
          };
          GameJSB_1.GameJSB.getAndroidData("/userReward/rewards", JSON.stringify(param), "rewards");
          cc.find("yellow", e.target).active = false;
          cc.find("black", e.target).active = true;
        }
      };
      __decorate([ property(cc.Node) ], LevelUpReward.prototype, "overBtn", void 0);
      __decorate([ property(cc.Label) ], LevelUpReward.prototype, "userIdLabel", void 0);
      __decorate([ property(cc.Label) ], LevelUpReward.prototype, "userNameLabel", void 0);
      __decorate([ property(cc.Label) ], LevelUpReward.prototype, "userLevelLabel", void 0);
      __decorate([ property(cc.Node) ], LevelUpReward.prototype, "uesrHead", void 0);
      LevelUpReward = __decorate([ ccclass ], LevelUpReward);
      return LevelUpReward;
    }(BaseView_1.default);
    exports.default = LevelUpReward;
    cc._RF.pop();
  }, {
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/View/BaseView": "BaseView",
    "../GameJSB": "GameJSB",
    "../fight/FightManger": "FightManger"
  } ],
  ListenerManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71d9cLzWxxJ+qOa8Os/4zPH", "ListenerManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var bindFuncList = [];
    var emitList = [];
    var ListenerManager = function() {
      function ListenerManager() {}
      ListenerManager.getInstance = function() {
        null == this.instance && (this.instance = new ListenerManager());
        return this.instance;
      };
      ListenerManager.prototype.hasMessage = function(target, key, backFunc) {
        var msgs = bindFuncList[key];
        for (var i in msgs) if (target == msgs[i].body && backFunc == msgs[i].func) return true;
        return false;
      };
      ListenerManager.prototype.addMessage = function(target, key, backFunc) {
        var msgObj = {
          body: target,
          func: backFunc
        };
        if (bindFuncList[key]) {
          if (this.hasMessage(target, key, backFunc)) return;
          bindFuncList[key].push(msgObj);
        } else {
          var ary = new Array();
          ary.push(msgObj);
          bindFuncList[key] = ary;
        }
      };
      ListenerManager.prototype.sendMessage = function(data) {
        var key = data.key;
        var args = data.args;
        var ary = bindFuncList[key];
        if (ary) {
          for (var i in ary) if (ary.hasOwnProperty(i)) try {
            ary[i].body && ary[i].func && ary[i].func.call(ary[i].body, args);
          } catch (error) {}
        } else if (emitList[key]) emitList[key].push(args); else {
          var ary_1 = new Array();
          ary_1.push(args);
          emitList[key] = ary_1;
        }
      };
      ListenerManager.prototype.sendNoMessage = function() {
        for (var key in emitList) if (emitList.hasOwnProperty(key)) {
          var emitAry = emitList[key];
          for (var j in emitAry) if (emitAry.hasOwnProperty(j)) {
            var args = emitAry[j];
            var ary = bindFuncList[key];
            for (var iterator in ary) if (ary.hasOwnProperty(iterator)) try {
              ary[iterator].call(this, args);
            } catch (error) {}
          }
        }
        emitList = [];
      };
      ListenerManager.prototype.removeMessageByKey = function(key) {
        bindFuncList[key] && (bindFuncList[key] = null);
      };
      ListenerManager.prototype.removeMessageFromTargetByKey = function(target, key) {
        var msgs = bindFuncList[key];
        for (var j in msgs) msgs[j].body == target && msgs.splice(j, 1);
      };
      ListenerManager.prototype.removeMessageByTarget = function(target) {
        for (var i in bindFuncList) for (var j in bindFuncList[i]) {
          var tempTarget = bindFuncList[i][j].body;
          tempTarget == target && bindFuncList[i].splice(j, 1);
        }
      };
      ListenerManager.prototype.removeAllMessag = function() {
        bindFuncList = [];
      };
      return ListenerManager;
    }();
    exports.default = ListenerManager;
    cc._RF.pop();
  }, {} ],
  LoaderManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30a517UJClOQa3PtUKa/5Tx", "LoaderManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LoaderManager = function() {
      function LoaderManager() {
        this.loadRes = function(url, type) {
          if (!url || !type) {
            cc.log("\u53c2\u6570\u9519\u8bef", url, type);
            return;
          }
          return new Promise(function(resolve, reject) {
            cc.loader.loadRes(url, type, function(err, asset) {
              if (err) {
                cc.log("[\u8d44\u6e90\u52a0\u8f7d] \u9519\u8bef " + err);
                return;
              }
              resolve(asset);
            });
          });
        };
      }
      LoaderManager.getInstance = function() {
        null == LoaderManager.singleInstance && (LoaderManager.singleInstance = new LoaderManager());
        return LoaderManager.singleInstance;
      };
      LoaderManager.prototype.loadResArr = function(paths, callfun) {
        cc.loader.loadResArray(paths, function(err, assets) {
          if (err) {
            cc.log(err);
            return;
          }
          callfun(assets);
        }.bind(this));
      };
      LoaderManager.prototype.loadStaticRes = function(url, type, tag, callback) {
        var _this = this;
        if (!url || !type || !callback) {
          cc.log("\u53c2\u6570\u9519\u8bef");
          return;
        }
        cc.loader.loadRes(url, type, function(err, asset) {
          callback(asset);
          _this._parseStaticRes(asset, tag);
        });
      };
      LoaderManager.prototype.loadStaticResArr = function(paths, tag, callfun) {
        if (!paths || !tag || !callfun) {
          cc.log("\u53c2\u6570\u9519\u8bef");
          return;
        }
        cc.loader.loadResArray(paths, function(err, assets) {
          var _this = this;
          if (err) {
            cc.log(err);
            return;
          }
          callfun(assets);
          assets.forEach(function(asset) {
            _this._parseStaticRes(asset, tag);
          });
        }.bind(this));
      };
      LoaderManager.prototype.loadAudioClip = function(path, callfun) {
        cc.loader.loadRes(path, cc.AudioClip, function(err, audioclip) {
          if (err) {
            cc.log(err);
            return;
          }
          callfun(audioclip);
        });
      };
      LoaderManager.prototype.loadSpriteFrame = function(path, callfun, retainRes) {
        var _this = this;
        void 0 === retainRes && (retainRes = false);
        cc.loader.loadRes(path, cc.SpriteFrame, function(err, spriteFrame) {
          if (err) {
            cc.log(err);
            return;
          }
          retainRes && _this.retatinRes(spriteFrame._textureFilename);
          callfun(spriteFrame);
        });
      };
      LoaderManager.prototype.loadSpriteFrames = function(paths, callfun, retainRes) {
        void 0 === retainRes && (retainRes = false);
        cc.loader.loadResArray(paths, cc.SpriteFrame, function(err, spriteFrames) {
          var _this = this;
          if (err) {
            cc.log(err);
            return;
          }
          retainRes && spriteFrames.forEach(function(spriteFrame) {
            _this.retatinRes(spriteFrame._textureFilename);
          });
          callfun(spriteFrames);
        }.bind(this));
      };
      LoaderManager.prototype.releaseMusicRes = function(res) {
        this.releaseRes(res);
        this.gc();
      };
      LoaderManager.prototype.releaseStaticRes = function(tag) {
        var texturesInCache = cc.loader["_cache"];
        var release_key = [];
        for (var asset in texturesInCache) {
          if (tag && texturesInCache[asset].uTag !== tag) continue;
          if (texturesInCache[asset].bk_count > 0 && texturesInCache[asset].uStatic) {
            null == texturesInCache[asset].uStatic;
            delete texturesInCache[asset].uStatic;
            continue;
          }
          if (texturesInCache[asset].bk_count <= 0) {
            release_key.push(texturesInCache[asset].url);
            cc.log("\u91ca\u653e\u8d44\u6e90:" + texturesInCache[asset].url);
            cc.loader.release(texturesInCache[asset].url);
          }
        }
        release_key.length > 0 && this._depthGC(release_key);
      };
      LoaderManager.prototype.getCacheCount = function() {
        return Object.keys(cc.loader["_cache"]).length;
      };
      LoaderManager.prototype.retatinRes = function(res) {
        if (!cc.loader["_cache"][res]) return;
        cc.loader["_cache"][res].bk_count || (cc.loader["_cache"][res].bk_count = 0);
        cc.loader["_cache"][res].bk_count += 1;
      };
      LoaderManager.prototype.retainArrayRes = function(res) {
        var _this = this;
        res.forEach(function(item) {
          _this.retatinRes(item);
        });
      };
      LoaderManager.prototype.retainNodeRes = function(node) {
        this._parserNodeRes(node, 1);
      };
      LoaderManager.prototype.releaseNodeRes = function(node) {
        this._parserNodeRes(node, -1);
      };
      LoaderManager.prototype.releaseRes = function(res) {
        if (!cc.loader["_cache"][res]) return;
        cc.loader["_cache"][res].bk_count || (cc.loader["_cache"][res].bk_count = 0);
        cc.loader["_cache"][res].bk_count -= 1;
      };
      LoaderManager.prototype.releaseArrayRes = function(res) {
        var _this = this;
        res.forEach(function(item) {
          _this.releaseRes(item);
        });
      };
      LoaderManager.prototype.gc = function() {
        var texturesInCache = cc.loader["_cache"];
        var release_key = [];
        for (var asset in texturesInCache) {
          if (texturesInCache[asset].uStatic) continue;
          if (texturesInCache[asset].bk_count <= 0) {
            release_key.push(texturesInCache[asset].url);
            cc.log("\u91ca\u653e\u8d44\u6e90:" + texturesInCache[asset].url);
            cc.loader.release(texturesInCache[asset].url);
          }
        }
        release_key.length > 0 && this._depthGC(release_key);
      };
      LoaderManager.prototype.updateSpriteTexture = function(target, spriteFrame) {
        if (!target || !spriteFrame || !target.getComponent(cc.Sprite)) return;
        var sprite = target.getComponent(cc.Sprite);
        this._replaceTagetTexture(sprite, "spriteFrame", spriteFrame);
        this.gc();
      };
      LoaderManager.prototype.updateButtonTexture = function(target, normalSprite, pressedSprite, hoverSprite, disabledSprite) {
        if (!target || !normalSprite) {
          cc.log("\u53c2\u6570\u9519\u8bef");
          return;
        }
        if (!target.getComponent(cc.Button)) {
          cc.log("\u76ee\u6807\u8282\u70b9\u6ca1\u6709Button\u7ec4\u4ef6");
          return;
        }
        var button = target.getComponent(cc.Button);
        normalSprite && this._replaceTagetTexture(button, "normalSprite", normalSprite);
        pressedSprite && this._replaceTagetTexture(button, "pressedSprite", pressedSprite);
        hoverSprite && this._replaceTagetTexture(button, "hoverSprite", hoverSprite);
        disabledSprite && this._replaceTagetTexture(button, "disabledSprite", disabledSprite);
        this.gc();
      };
      LoaderManager.prototype._depthGC = function(strs) {
        var texturesInCache = cc.loader["_cache"];
        var release_json = [];
        for (var asset in texturesInCache) if (texturesInCache[asset].dependKeys && texturesInCache[asset].dependKeys.length > 0) {
          var is_release = false;
          for (var i = 0; i < texturesInCache[asset].dependKeys.length; i++) -1 !== strs.indexOf(texturesInCache[asset].dependKeys[i]) && (is_release = true);
          if (is_release) {
            release_json.push(texturesInCache[asset].url);
            cc.log("\u91ca\u653e\u8d44\u6e90:" + texturesInCache[asset].url);
            cc.loader.release(texturesInCache[asset].url);
          }
        }
        release_json.length > 0 && this._depthGC(release_json);
      };
      LoaderManager.prototype._parseStaticRes = function(item, tag) {
        if (item instanceof cc.Texture2D) {
          cc.loader["_cache"][item.url].uStatic = true;
          cc.loader["_cache"][item.url].uTag = tag;
        } else if (item instanceof cc.SpriteFrame) {
          cc.loader["_cache"][item["_textureFilename"]].uStatic = true;
          cc.loader["_cache"][item["_textureFilename"]].uTag = tag;
        } else if (item instanceof cc.Prefab) this._parseStaticPrefab(item, tag); else if (item instanceof cc.BitmapFont) {
          cc.loader["_cache"][item["spriteFrame"]._textureFilename].uStatic = true;
          cc.loader["_cache"][item["spriteFrame"]._textureFilename].uTag = tag;
        } else if (item instanceof cc.SpriteAtlas) {
          var keys = Object.keys(item["_spriteFrames"]);
          keys.forEach(function(key) {
            cc.loader["_cache"][item["_spriteFrames"][key]._textureFilename].uStatic = true;
            cc.loader["_cache"][item["_spriteFrames"][key]._textureFilename].uTag = tag;
          });
        } else item instanceof cc.AnimationClip ? cc.log("AnimationClip \u8d44\u6e90\u52a0\u8f7d\u672a\u505a\u5904\u7406") : item instanceof Object && item["name"] && cc.log("Object \u8d44\u6e90\u52a0\u8f7d\u672a\u505a\u5904\u7406");
      };
      LoaderManager.prototype._parseStaticPrefab = function(node, tag) {
        var _this = this;
        var prefab = node;
        node.data && (prefab = node.data);
        prefab instanceof cc.Scene || this._parseStaticNode(prefab, tag);
        var children = prefab._children;
        children.forEach(function(child) {
          _this._parseStaticNode(child, tag);
          _this._parseStaticPrefab(child, tag);
        });
      };
      LoaderManager.prototype._retatinStaticRes = function(res, tag) {
        if (!cc.loader["_cache"][res]) return;
        cc.loader["_cache"][res].bk_count || (cc.loader["_cache"][res].bk_count = 0);
        cc.loader["_cache"][res].uStatic = true;
        cc.loader["_cache"][res].uTag = tag;
      };
      LoaderManager.prototype._parseStaticNode = function(node, tag) {
        var sprite = node.getComponent(cc.Sprite);
        sprite && sprite.spriteFrame && this._retatinStaticRes(sprite.spriteFrame["_textureFilename"], tag);
        var button = node.getComponent(cc.Button);
        button && button.normalSprite && this._retatinStaticRes(button.normalSprite["_textureFilename"], tag);
        button && button.pressedSprite && this._retatinStaticRes(button.pressedSprite["_textureFilename"], tag);
        button && button.hoverSprite && this._retatinStaticRes(button.hoverSprite["_textureFilename"], tag);
        button && button.disabledSprite && this._retatinStaticRes(button.disabledSprite["_textureFilename"], tag);
        var label = node.getComponent(cc.Label);
        label && label.font && label.font instanceof cc.BitmapFont && label.font["spriteFrame"] && this._retatinStaticRes(label.font["spriteFrame"]._textureFilename, tag);
        var richText = node.getComponent(cc.RichText);
        if (richText && richText.imageAtlas) {
          var keys = Object.keys(richText.imageAtlas["_spriteFrames"]);
          keys.length > 0 && this._retatinStaticRes(richText.imageAtlas["_spriteFrames"][keys[0]]._textureFilename, tag);
        }
        var particleSystem = node.getComponent(cc.ParticleSystem);
        particleSystem && particleSystem["_texture"] && this._retatinStaticRes(particleSystem["_texture"], tag);
        var pageViewIndicator = node.getComponent(cc.PageViewIndicator);
        pageViewIndicator && pageViewIndicator.spriteFrame && this._retatinStaticRes(pageViewIndicator.spriteFrame["_textureFilename"], tag);
        var editBox = node.getComponent(cc.EditBox);
        editBox && editBox.backgroundImage && this._retatinStaticRes(editBox.backgroundImage["_textureFilename"], tag);
        var mask = node.getComponent(cc.Mask);
        mask && mask.spriteFrame && this._retatinStaticRes(mask.spriteFrame["_textureFilename"], tag);
      };
      LoaderManager.prototype._replaceTagetTexture = function(target, attrName, newNormalSprite) {
        if (target[attrName] === newNormalSprite) return;
        target[attrName] && this.releaseRes(target[attrName]._textureFilename);
        this.retatinRes(newNormalSprite["_textureFilename"]);
        target[attrName] = newNormalSprite;
      };
      LoaderManager.prototype._parserNodeRes = function(node, number) {
        var _this = this;
        var children = node.children;
        this._parserNodeComponentRes(node, number);
        children.forEach(function(child) {
          _this._parserNodeRes(child, number);
        });
      };
      LoaderManager.prototype._parserNodeComponentRes = function(node, num) {
        this._parserComponentSprite(node, num);
        this._parserComponentButton(node, num);
        this._parserComponentLabel(node, num);
        this._parserComponentRichText(node, num);
        this._parserComponentParticleSystem(node, num);
        this._parserComponentPageViewIndicator(node, num);
        this._parserComponentEditBox(node, num);
        this._parserComponentMask(node, num);
      };
      LoaderManager.prototype._parserComponentSprite = function(node, num) {
        var sprite = node.getComponent(cc.Sprite);
        if (!sprite) return;
        if (num > 0) {
          this.retatinRes(sprite.spriteFrame["_textureFilename"]);
          return;
        }
        this.releaseRes(sprite.spriteFrame["_textureFilename"]);
      };
      LoaderManager.prototype._parserComponentButton = function(node, num) {
        var button = node.getComponent(cc.Button);
        if (!button) return;
        button.normalSprite && (num > 0 ? this.retatinRes(button.normalSprite["_textureFilename"]) : this.releaseRes(button.normalSprite["_textureFilename"]));
        button.pressedSprite && (num > 0 ? this.retatinRes(button.pressedSprite["_textureFilename"]) : this.releaseRes(button.pressedSprite["_textureFilename"]));
        button.hoverSprite && (num > 0 ? this.retatinRes(button.hoverSprite["_textureFilename"]) : this.releaseRes(button.hoverSprite["_textureFilename"]));
        button.disabledSprite && (num > 0 ? this.retatinRes(button.disabledSprite["_textureFilename"]) : this.releaseRes(button.disabledSprite["_textureFilename"]));
      };
      LoaderManager.prototype._parserComponentLabel = function(node, num) {
        var label = node.getComponent(cc.Label);
        if (!label || !label.font || !(label.font instanceof cc.BitmapFont) || !label.font["spriteFrame"]) return;
        if (num > 0) {
          this.retatinRes(label.font["spriteFrame"]["_textureFilename"]);
          return;
        }
        this.releaseRes(label.font["spriteFrame"]["_textureFilename"]);
      };
      LoaderManager.prototype._parserComponentRichText = function(node, num) {
        var richText = node.getComponent(cc.RichText);
        if (!richText || !richText.imageAtlas) return;
        var keys = Object.keys(richText.imageAtlas["_spriteFrames"]);
        if (keys.length <= 0) return;
        if (num > 0) {
          this.retatinRes(richText.imageAtlas["_spriteFrames"][keys[0]]["_textureFilename"]);
          return;
        }
        this.releaseRes(richText.imageAtlas["_spriteFrames"][keys[0]]["_textureFilename"]);
      };
      LoaderManager.prototype._parserComponentParticleSystem = function(node, num) {
        var particleSystem = node.getComponent(cc.ParticleSystem);
        if (!particleSystem || !particleSystem["_texture"]) return;
        if (num > 0) {
          this.retatinRes(particleSystem["_texture"]);
          return;
        }
        this.releaseRes(particleSystem["_texture"]);
      };
      LoaderManager.prototype._parserComponentPageViewIndicator = function(node, num) {
        var pageViewIndicator = node.getComponent(cc.PageViewIndicator);
        if (!pageViewIndicator || !pageViewIndicator.spriteFrame) return;
        if (num > 0) {
          this.retatinRes(pageViewIndicator.spriteFrame["_textureFilename"]);
          return;
        }
        this.releaseRes(pageViewIndicator.spriteFrame["_textureFilename"]);
      };
      LoaderManager.prototype._parserComponentEditBox = function(node, num) {
        var editBox = node.getComponent(cc.EditBox);
        if (!editBox || !editBox.backgroundImage) return;
        if (num > 0) {
          this.retatinRes(editBox.backgroundImage["_textureFilename"]);
          return;
        }
        this.releaseRes(editBox.backgroundImage["_textureFilename"]);
      };
      LoaderManager.prototype._parserComponentMask = function(node, num) {
        var mask = node.getComponent(cc.Mask);
        if (!mask || !mask.spriteFrame) return;
        if (num > 0) {
          this.retatinRes(mask.spriteFrame["_textureFilename"]);
          return;
        }
        this.releaseRes(mask.spriteFrame["_textureFilename"]);
      };
      LoaderManager.singleInstance = null;
      return LoaderManager;
    }();
    exports.default = LoaderManager;
    cc._RF.pop();
  }, {} ],
  MainSceneManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "702daiFCedHLJJhZrSr1k5p", "MainSceneManager");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainSceneManager = function() {
      function MainSceneManager() {
        this.MainScene = null;
      }
      MainSceneManager_1 = MainSceneManager;
      MainSceneManager.getInstance = function() {
        null == MainSceneManager_1.instance && (MainSceneManager_1.instance = new MainSceneManager_1());
        return MainSceneManager_1.instance;
      };
      MainSceneManager.prototype.init = function(mainScene) {
        this.MainScene = mainScene;
      };
      var MainSceneManager_1;
      MainSceneManager.instance = null;
      MainSceneManager = MainSceneManager_1 = __decorate([ ccclass ], MainSceneManager);
      return MainSceneManager;
    }();
    exports.default = MainSceneManager;
    cc._RF.pop();
  }, {} ],
  MainScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23ab3Sc3stDc5x23ZQlDBek", "MainScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var coreInit_1 = require("../../core/coreInit");
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var AdaptarManager_1 = require("../../core/Manager/AdaptarManager");
    var MainSceneManager_1 = require("./MainSceneManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainScene = function(_super) {
      __extends(MainScene, _super);
      function MainScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ViewLoading = null;
        _this.loadingBg = null;
        _this.loadingAni = null;
        _this.isShowLoading = false;
        _this.timeCallback = null;
        return _this;
      }
      MainScene.prototype.init = function() {};
      MainScene.prototype.onLoad = function() {
        coreInit_1.coreInit.getInstance().load();
        MainSceneManager_1.default.getInstance().init(this);
        this.ViewLoading.active = false;
        AdaptarManager_1.default.getInstance().adaptarBg(this.node.getChildByName("Main_Bg"));
        AdaptarManager_1.default.getInstance().adaptarLogo(this.node.getChildByName("Logo"));
        this.loadLoad();
      };
      MainScene.prototype.loadLoad = function() {
        ViewManager_1.default.getInstance().ShowView("ViewLogin");
      };
      MainScene.prototype.showLoading = function() {
        this.timeCallback && this.unschedule(this.timeCallback);
        this.isShowLoading = false;
        if (!this.ViewLoading.active) {
          this.ViewLoading.active = true;
          this.loadingBg.active = false;
          this.loadingAni.play();
        }
        this.timeCallback = function() {
          this.isShowLoading || (this.loadingBg.active = true);
        }.bind(this);
        this.scheduleOnce(this.timeCallback, 1);
      };
      MainScene.prototype.hideLoading = function() {
        this.timeCallback && this.unschedule(this.timeCallback);
        this.isShowLoading = true;
        if (this.ViewLoading.active) {
          this.ViewLoading.active = false;
          this.loadingAni.stop();
        }
      };
      MainScene.prototype.start = function() {};
      __decorate([ property(cc.Node) ], MainScene.prototype, "ViewLoading", void 0);
      __decorate([ property(cc.Node) ], MainScene.prototype, "loadingBg", void 0);
      __decorate([ property(cc.Animation) ], MainScene.prototype, "loadingAni", void 0);
      MainScene = __decorate([ ccclass ], MainScene);
      return MainScene;
    }(cc.Component);
    exports.default = MainScene;
    cc._RF.pop();
  }, {
    "../../core/Manager/AdaptarManager": "AdaptarManager",
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/coreInit": "coreInit",
    "./MainSceneManager": "MainSceneManager"
  } ],
  Md5Api: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be9d2wnbftB1KQwP4+be4Zw", "Md5Api");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Md5Api = function() {
      function Md5Api() {}
      Md5Api.getInstance = function() {
        null == this.instance && (this.instance = new Md5Api());
        return this.instance;
      };
      Md5Api.prototype.safeAdd = function(x, y) {
        var lsw = (65535 & x) + (65535 & y);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | 65535 & lsw;
      };
      Md5Api.prototype.bitRotateLeft = function(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      };
      Md5Api.prototype.md5cmn = function(q, a, b, x, s, t) {
        return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(a, q), this.safeAdd(x, t)), s), b);
      };
      Md5Api.prototype.md5ff = function(a, b, c, d, x, s, t) {
        return this.md5cmn(b & c | ~b & d, a, b, x, s, t);
      };
      Md5Api.prototype.md5gg = function(a, b, c, d, x, s, t) {
        return this.md5cmn(b & d | c & ~d, a, b, x, s, t);
      };
      Md5Api.prototype.md5hh = function(a, b, c, d, x, s, t) {
        return this.md5cmn(b ^ c ^ d, a, b, x, s, t);
      };
      Md5Api.prototype.md5ii = function(a, b, c, d, x, s, t) {
        return this.md5cmn(c ^ (b | ~d), a, b, x, s, t);
      };
      Md5Api.prototype.binlMD5 = function(x, len) {
        x[len >> 5] |= 128 << len % 32;
        x[14 + (len + 64 >>> 9 << 4)] = len;
        var i;
        var olda;
        var oldb;
        var oldc;
        var oldd;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (i = 0; i < x.length; i += 16) {
          olda = a;
          oldb = b;
          oldc = c;
          oldd = d;
          a = this.md5ff(a, b, c, d, x[i], 7, -680876936);
          d = this.md5ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = this.md5ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = this.md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = this.md5ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = this.md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = this.md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = this.md5ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = this.md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = this.md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = this.md5ff(c, d, a, b, x[i + 10], 17, -42063);
          b = this.md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = this.md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = this.md5ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = this.md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = this.md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
          a = this.md5gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = this.md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = this.md5gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = this.md5gg(b, c, d, a, x[i], 20, -373897302);
          a = this.md5gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = this.md5gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = this.md5gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = this.md5gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = this.md5gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = this.md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = this.md5gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = this.md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = this.md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = this.md5gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = this.md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = this.md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
          a = this.md5hh(a, b, c, d, x[i + 5], 4, -378558);
          d = this.md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = this.md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = this.md5hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = this.md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = this.md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = this.md5hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = this.md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = this.md5hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = this.md5hh(d, a, b, c, x[i], 11, -358537222);
          c = this.md5hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = this.md5hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = this.md5hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = this.md5hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = this.md5hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = this.md5hh(b, c, d, a, x[i + 2], 23, -995338651);
          a = this.md5ii(a, b, c, d, x[i], 6, -198630844);
          d = this.md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = this.md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = this.md5ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = this.md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = this.md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = this.md5ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = this.md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = this.md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = this.md5ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = this.md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = this.md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = this.md5ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = this.md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = this.md5ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = this.md5ii(b, c, d, a, x[i + 9], 21, -343485551);
          a = this.safeAdd(a, olda);
          b = this.safeAdd(b, oldb);
          c = this.safeAdd(c, oldc);
          d = this.safeAdd(d, oldd);
        }
        return [ a, b, c, d ];
      };
      Md5Api.prototype.binl2rstr = function(input) {
        var i;
        var output = "";
        var length32 = 32 * input.length;
        for (i = 0; i < length32; i += 8) output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
        return output;
      };
      Md5Api.prototype.rstr2binl = function(input) {
        var i;
        var output = [];
        output[(input.length >> 2) - 1] = void 0;
        for (i = 0; i < output.length; i += 1) output[i] = 0;
        var length8 = 8 * input.length;
        for (i = 0; i < length8; i += 8) output[i >> 5] |= (255 & input.charCodeAt(i / 8)) << i % 32;
        return output;
      };
      Md5Api.prototype.rstrMD5 = function(s) {
        return this.binl2rstr(this.binlMD5(this.rstr2binl(s), 8 * s.length));
      };
      Md5Api.prototype.rstrHMACMD5 = function(key, data) {
        var i;
        var bkey = this.rstr2binl(key);
        var ipad = [];
        var opad = [];
        var hash;
        ipad[15] = opad[15] = void 0;
        bkey.length > 16 && (bkey = this.binlMD5(bkey, 8 * key.length));
        for (i = 0; i < 16; i += 1) {
          ipad[i] = 909522486 ^ bkey[i];
          opad[i] = 1549556828 ^ bkey[i];
        }
        hash = this.binlMD5(ipad.concat(this.rstr2binl(data)), 512 + 8 * data.length);
        return this.binl2rstr(this.binlMD5(opad.concat(hash), 640));
      };
      Md5Api.prototype.rstr2hex = function(input) {
        var hexTab = "0123456789abcdef";
        var output = "";
        var x;
        var i;
        for (i = 0; i < input.length; i += 1) {
          x = input.charCodeAt(i);
          output += hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(15 & x);
        }
        return output;
      };
      Md5Api.prototype.str2rstrUTF8 = function(input) {
        return unescape(encodeURIComponent(input));
      };
      Md5Api.prototype.rawMD5 = function(s) {
        return this.rstrMD5(this.str2rstrUTF8(s));
      };
      Md5Api.prototype.hexMD5 = function(s) {
        return this.rstr2hex(this.rawMD5(s));
      };
      Md5Api.prototype.rawHMACMD5 = function(k, d) {
        return this.rstrHMACMD5(this.str2rstrUTF8(k), this.str2rstrUTF8(d));
      };
      Md5Api.prototype.hexHMACMD5 = function(k, d) {
        return this.rstr2hex(this.rawHMACMD5(k, d));
      };
      Md5Api.prototype.md5 = function(string, key, raw) {
        if (!key) {
          if (!raw) return this.hexMD5(string);
          return this.rawMD5(string);
        }
        if (!raw) return this.hexHMACMD5(key, string);
        return this.rawHMACMD5(key, string);
      };
      return Md5Api;
    }();
    exports.default = Md5Api;
    cc._RF.pop();
  }, {} ],
  NativeToJs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36284A0RCND6L9HaVITenec", "NativeToJs");
    "use strict";
    var _PlatformManger = _interopRequireDefault(require("./PlatformManger"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.palyVideoOk = function(funName) {
      console.log("===cc.palyVideoOk==", funName);
      setTimeout(function() {
        _PlatformManger["default"].getInstance().palyVideoOk(funName);
      }, 10);
    };
    cc.palyVideoError = function(funName) {
      console.log("===cc.palyVideoError==", funName);
      setTimeout(function() {
        _PlatformManger["default"].getInstance().palyVideoError(funName);
      }, 10);
    };
    cc.resumeGame = function() {
      console.log("===cc.openAudio==");
      setTimeout(function() {
        cc.director.resume();
      }, 10);
    };
    cc.pauseGame = function() {
      console.log("===cc.closeAudio=");
      setTimeout(function() {
        cc.director.pause();
      }, 10);
    };
    cc.wxBindingOk = function(data) {
      console.log("===cc.wxBindingOk==", data);
      setTimeout(function() {
        _PlatformManger["default"].getInstance().wxBindingOk(data);
      }, 10);
    };
    cc.wxBindingError = function(data) {
      console.log("===cc.wxBindingError==", data);
      setTimeout(function() {
        _PlatformManger["default"].getInstance().wxBindingError(data);
      }, 10);
    };
    cc.onBackFinish = function(data) {
      console.log("===cc.onBackFinish==", data);
      setTimeout(function() {
        _PlatformManger["default"].getInstance().onBackFinish(data);
      }, 10);
    };
    cc.onSetCallBack = function(data) {
      console.log("===cc.onSetCallBack==", data);
      setTimeout(function() {
        _PlatformManger["default"].getInstance().onSetCallBack(data);
      }, 10);
    };
    cc.allPageCallBack = function(data) {
      console.log("===cc.allPageCallBack==", data);
      setTimeout(function() {
        _PlatformManger["default"].getInstance().allPageCallBack(data);
      }, 10);
    };
    cc._RF.pop();
  }, {
    "./PlatformManger": "PlatformManger"
  } ],
  ParticleBlock: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1df103tIRtECbm4IWn25ihw", "ParticleBlock");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightPoolManger_1 = require("./FightPoolManger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ParticleBlock = function(_super) {
      __extends(ParticleBlock, _super);
      function ParticleBlock() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.particle_1 = null;
        _this.particle_2 = null;
        _this.particle_3 = null;
        _this.particle_4 = null;
        _this.particle_5 = null;
        _this.particle_6 = null;
        _this.particle_7 = null;
        _this.particle_8 = null;
        _this.color = {
          1: cc.color(35, 170, 0),
          2: cc.color(0, 186, 255),
          3: cc.color(242, 74, 149),
          4: cc.color(255, 1, 0),
          5: cc.color(247, 146, 21),
          6: cc.color(242, 74, 149),
          7: cc.color(255, 1, 0),
          8: cc.color(247, 146, 21)
        };
        return _this;
      }
      ParticleBlock.prototype.init = function(data) {
        var _this = this;
        this.node.scale = .5;
        this.particle_1.resetSystem();
        this.particle_2.resetSystem();
        this.particle_3.resetSystem();
        this.particle_4.resetSystem();
        this.particle_5.resetSystem();
        this.particle_6.resetSystem();
        this.particle_7.resetSystem();
        this.particle_8.resetSystem();
        this.particle_1.startColor = cc.color(255, 255, 255);
        this.particle_2.startColor = this.color[data.ColorType];
        this.particle_3.startColor = this.color[data.ColorType];
        this.particle_4.startColor = this.color[data.ColorType];
        this.particle_5.startColor = this.color[data.ColorType];
        this.particle_6.startColor = this.color[data.ColorType];
        this.particle_7.startColor = this.color[data.ColorType];
        this.particle_8.startColor = this.color[data.ColorType];
        this.particle_1.endColor = cc.color(255, 255, 255);
        this.particle_2.endColor = this.color[data.ColorType];
        this.particle_3.endColor = this.color[data.ColorType];
        this.particle_4.endColor = this.color[data.ColorType];
        this.particle_5.endColor = cc.color(255, 255, 255);
        this.particle_6.endColor = this.color[data.ColorType];
        this.particle_7.endColor = this.color[data.ColorType];
        this.particle_8.endColor = cc.color(255, 255, 255);
        this.node.active = true;
        this.scheduleOnce(function() {
          FightPoolManger_1.default.getInstance().putParticleBlock(_this.node);
        }, data.Time / 1e3);
      };
      ParticleBlock.prototype.start = function() {};
      __decorate([ property(cc.ParticleSystem) ], ParticleBlock.prototype, "particle_1", void 0);
      __decorate([ property(cc.ParticleSystem) ], ParticleBlock.prototype, "particle_2", void 0);
      __decorate([ property(cc.ParticleSystem) ], ParticleBlock.prototype, "particle_3", void 0);
      __decorate([ property(cc.ParticleSystem) ], ParticleBlock.prototype, "particle_4", void 0);
      __decorate([ property(cc.ParticleSystem) ], ParticleBlock.prototype, "particle_5", void 0);
      __decorate([ property(cc.ParticleSystem) ], ParticleBlock.prototype, "particle_6", void 0);
      __decorate([ property(cc.ParticleSystem) ], ParticleBlock.prototype, "particle_7", void 0);
      __decorate([ property(cc.ParticleSystem) ], ParticleBlock.prototype, "particle_8", void 0);
      ParticleBlock = __decorate([ ccclass ], ParticleBlock);
      return ParticleBlock;
    }(cc.Component);
    exports.default = ParticleBlock;
    cc._RF.pop();
  }, {
    "./FightPoolManger": "FightPoolManger"
  } ],
  ParticleFireworks: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8df1bwQeBPRJ01gGx7wbKP", "ParticleFireworks");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightPoolManger_1 = require("./FightPoolManger");
    var AudioManager_1 = require("../../core/Manager/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ParticleFireworks = function(_super) {
      __extends(ParticleFireworks, _super);
      function ParticleFireworks() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.particle_1 = null;
        _this.particle_2 = null;
        _this.particle_3 = null;
        _this.color = {
          1: {
            1: cc.color(255, 73, 27),
            2: cc.color(252, 166, 55),
            3: cc.color(255, 100, 27),
            4: cc.color(228, 0, 0),
            5: cc.color(255, 71, 0),
            6: cc.color(255, 0, 0)
          },
          2: {
            1: cc.color(253, 213, 54),
            2: cc.color(253, 213, 54),
            3: cc.color(255, 237, 27),
            4: cc.color(255, 102, 0),
            5: cc.color(255, 102, 0),
            6: cc.color(255, 173, 0)
          },
          3: {
            1: cc.color(127, 255, 27),
            2: cc.color(127, 255, 27),
            3: cc.color(127, 255, 27),
            4: cc.color(22, 182, 0),
            5: cc.color(22, 182, 0),
            6: cc.color(22, 182, 0)
          }
        };
        return _this;
      }
      ParticleFireworks.prototype.init = function(data) {
        var _this = this;
        this.node.scale = .5;
        this.particle_1.startColor = this.color[data.ColorType][1];
        this.particle_2.startColor = this.color[data.ColorType][2];
        this.particle_3.startColor = this.color[data.ColorType][3];
        this.particle_1.endColor = this.color[data.ColorType][4];
        this.particle_2.endColor = this.color[data.ColorType][5];
        this.particle_3.endColor = this.color[data.ColorType][6];
        this.node.active = false;
        this.scheduleOnce(function() {
          var num = data.Index % 3;
          0 == num && (num = 3);
          var name = "fireworks_0" + num;
          AudioManager_1.default.getInstance().playSound(name);
          _this.node.active = true;
          _this.particle_1.resetSystem();
          _this.particle_2.resetSystem();
          _this.particle_3.resetSystem();
        }, data.DelayTime / 1e3);
        this.scheduleOnce(function() {
          FightPoolManger_1.default.getInstance().putParticleFireworks(_this.node);
        }, data.Time / 1e3);
      };
      ParticleFireworks.prototype.start = function() {};
      __decorate([ property(cc.ParticleSystem) ], ParticleFireworks.prototype, "particle_1", void 0);
      __decorate([ property(cc.ParticleSystem) ], ParticleFireworks.prototype, "particle_2", void 0);
      __decorate([ property(cc.ParticleSystem) ], ParticleFireworks.prototype, "particle_3", void 0);
      ParticleFireworks = __decorate([ ccclass ], ParticleFireworks);
      return ParticleFireworks;
    }(cc.Component);
    exports.default = ParticleFireworks;
    cc._RF.pop();
  }, {
    "../../core/Manager/AudioManager": "AudioManager",
    "./FightPoolManger": "FightPoolManger"
  } ],
  ParticleRandom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0d8c59qg75PFLaMofGkVIZ4", "ParticleRandom");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightPoolManger_1 = require("./FightPoolManger");
    var FightConst_1 = require("./FightConst");
    var FightManger_1 = require("./FightManger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ParticleRandom = function(_super) {
      __extends(ParticleRandom, _super);
      function ParticleRandom() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ParticleRandom.prototype.init = function(data) {
        var _this = this;
        cc.tween(this.node).delay(data.Time).to(FightConst_1.default.FightNum.randomTime, {
          position: data.MovePos
        }, {
          easing: "quadOut"
        }).call(function() {
          FightPoolManger_1.default.getInstance().putParticleRandom(_this.node);
          FightManger_1.default.getInstance().randomCheckBlock(data.XId, data.YId);
          data.IsOver && FightManger_1.default.getInstance().randomCheckNeedFall();
        }).start();
      };
      ParticleRandom.prototype.start = function() {};
      ParticleRandom = __decorate([ ccclass ], ParticleRandom);
      return ParticleRandom;
    }(cc.Component);
    exports.default = ParticleRandom;
    cc._RF.pop();
  }, {
    "./FightConst": "FightConst",
    "./FightManger": "FightManger",
    "./FightPoolManger": "FightPoolManger"
  } ],
  PassEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19a266alYFLeYUDhwkG8vr2", "PassEffect");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightPoolManger_1 = require("./FightPoolManger");
    var AudioManager_1 = require("../../core/Manager/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PassEffect = function(_super) {
      __extends(PassEffect, _super);
      function PassEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Particle_1 = null;
        _this.Particle_2 = null;
        _this.Particle_3 = null;
        _this.Particle_4 = null;
        return _this;
      }
      PassEffect.prototype.init = function(data) {
        var _this = this;
        this.Particle_1.resetSystem();
        this.Particle_2.resetSystem();
        this.Particle_3.resetSystem();
        this.Particle_4.resetSystem();
        AudioManager_1.default.getInstance().playSound("win");
        this.node.getComponent(cc.Animation).play("PassEffect_ani");
        this.scheduleOnce(function() {
          FightPoolManger_1.default.getInstance().putPassEffect(_this.node);
        }, 1);
      };
      PassEffect.prototype.start = function() {};
      __decorate([ property(cc.ParticleSystem) ], PassEffect.prototype, "Particle_1", void 0);
      __decorate([ property(cc.ParticleSystem) ], PassEffect.prototype, "Particle_2", void 0);
      __decorate([ property(cc.ParticleSystem) ], PassEffect.prototype, "Particle_3", void 0);
      __decorate([ property(cc.ParticleSystem) ], PassEffect.prototype, "Particle_4", void 0);
      PassEffect = __decorate([ ccclass ], PassEffect);
      return PassEffect;
    }(cc.Component);
    exports.default = PassEffect;
    cc._RF.pop();
  }, {
    "../../core/Manager/AudioManager": "AudioManager",
    "./FightPoolManger": "FightPoolManger"
  } ],
  PlatformManger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8cd33FR5StDM5lSy3rgLh1b", "PlatformManger");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../../game/Const");
    var WXUtils_1 = require("./WXUtils");
    var GameDataManager_1 = require("../Manager/GameDataManager");
    var FunUtils_1 = require("../Util/FunUtils");
    var ShareAdvType_1 = require("./ShareAdvType");
    var AdaptarManager_1 = require("../Manager/AdaptarManager");
    var QQPlaform_1 = require("./QQPlaform");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlatformManger = function() {
      function PlatformManger() {
        this.platform = 0;
        this.callBackVideo = null;
        this.callBackBinding = null;
      }
      PlatformManger_1 = PlatformManger;
      PlatformManger.getInstance = function() {
        null == PlatformManger_1.instance && (PlatformManger_1.instance = new PlatformManger_1());
        return PlatformManger_1.instance;
      };
      PlatformManger.prototype.initPlatform = function() {
        if (cc.sys.isBrowser) {
          this.platform = Const_1.default.Platform.browser;
          return;
        }
        cc.sys.os == cc.sys.OS_ANDROID && (this.platform = Const_1.default.Platform.android);
        cc.sys.os == cc.sys.OS_IOS && (this.platform = Const_1.default.Platform.ios);
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
          this.platform = Const_1.default.Platform.wx;
          window.qq && (this.platform = Const_1.default.Platform.qq);
        }
        console.log("===this.platform==", this.platform);
        this.init();
      };
      PlatformManger.prototype.init = function() {
        this.platform == Const_1.default.Platform.qq ? QQPlaform_1.default.getInstance().init() : this.platform == Const_1.default.Platform.wx && WXUtils_1.default.getInstance().init();
      };
      PlatformManger.prototype.showShare = function(type, param) {
        if (this.platform == Const_1.default.Platform.wx) {
          if (!GameDataManager_1.default.getInstance().kaiGuan.isOpenShare) {
            param && param.success && param.success(2);
            return;
          }
          WXUtils_1.default.getInstance().wxShare(type, param);
        } else {
          FunUtils_1.default.showTip("\u6d4b\u8bd5\u6a21\u5f0f\u76f4\u63a5\u53d1\u5956 + " + type);
          param && param.success && param.success(2);
        }
      };
      PlatformManger.prototype.sendLog = function(str) {
        if (this.platform == Const_1.default.Platform.android) {
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "PrintLog";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, str);
        } else if (this.platform == Const_1.default.Platform.ios) {
          var className = "AppClient";
          var methodName = "PrintLog:";
          jsb.reflection.callStaticMethod(className, methodName, str);
        }
      };
      PlatformManger.prototype.gamePassEvent = function(level) {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            pass: level
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "gamePassEvent";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else this.platform == Const_1.default.Platform.ios || this.platform == Const_1.default.Platform.browser;
      };
      PlatformManger.prototype.showBanner = function(isShow) {
        isShow;
      };
      PlatformManger.prototype.showBottomBanner = function() {
        if (this.platform == Const_1.default.Platform.android) {
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "showBottomBanner";
          var methodSignature = "()V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature);
        } else if (this.platform == Const_1.default.Platform.ios) {
          var className = "AppClient";
          var methodName = "showBottomBanner";
          jsb.reflection.callStaticMethod(className, methodName, null);
        } else this.platform == Const_1.default.Platform.browser || this.platform == Const_1.default.Platform.qq && QQPlaform_1.default.getInstance().qqShowBanner(true);
      };
      PlatformManger.prototype.hideBottomBanner = function() {
        if (this.platform == Const_1.default.Platform.android) {
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "hideBottomBanner";
          var methodSignature = "()V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature);
        } else if (this.platform == Const_1.default.Platform.ios) {
          var className = "AppClient";
          var methodName = "hideBottomBanner";
          jsb.reflection.callStaticMethod(className, methodName, null);
        } else this.platform == Const_1.default.Platform.browser || this.platform == Const_1.default.Platform.qq && QQPlaform_1.default.getInstance().qqShowBanner(false);
      };
      PlatformManger.prototype.addOnEvent = function(eventID, eventName) {
        this.sendLog(eventName);
        if (this.platform == Const_1.default.Platform.android) {
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "onEvent";
          var methodSignature = "(Ljava/lang/String;Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, eventID, eventName);
        } else if (this.platform == Const_1.default.Platform.ios) {
          var className = "AppClient";
          var methodName = "onEvent:eventName:";
          jsb.reflection.callStaticMethod(className, methodName, eventID, eventName);
        } else this.platform == Const_1.default.Platform.browser;
      };
      PlatformManger.prototype.palyVideoError = function(funName) {
        console.log("===funNameError==", funName);
        this.callBackVideo && this.callBackVideo.success && this.callBackVideo.fail();
      };
      PlatformManger.prototype.palyVideoOk = function(funName) {
        console.log("===funNameok==", funName);
        this.callBackVideo && this.callBackVideo.success && this.callBackVideo.success();
      };
      PlatformManger.prototype.showVideo = function(type, param) {
        if (this.platform == Const_1.default.Platform.android) {
          this.callBackVideo = param;
          var jsonStr = {
            adType: 2,
            adPosition: ShareAdvType_1.default.androidName[type]
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "showAd";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else if (this.platform == Const_1.default.Platform.ios) {
          this.callBackVideo = param;
          var jsonStr = {
            adType: 2,
            adPosition: ShareAdvType_1.default.androidName[type]
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "AppClient";
          var methodName = "showAd:";
          jsb.reflection.callStaticMethod(className, methodName, strJson);
        } else if (this.platform == Const_1.default.Platform.browser) {
          this.callBackVideo = param;
          FunUtils_1.default.showTip("\u6d4b\u8bd5\u6a21\u5f0f\u89c6\u9891\u76f4\u63a5\u53d1\u5956 + " + type);
          param && param.success && param.success(2);
        } else this.platform == Const_1.default.Platform.qq && QQPlaform_1.default.getInstance().qqShowVideo(type, param);
      };
      PlatformManger.prototype.playAdVideo = function(type, param) {
        this.callBackVideo = param;
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            adType: 3,
            adPosition: ShareAdvType_1.default.androidName[type]
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "playAdVideo";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else if (this.platform == Const_1.default.Platform.ios) {
          var jsonStr = {
            adType: 3,
            adPosition: ShareAdvType_1.default.androidName[type]
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "AppClient";
          var methodName = "playAdVideo:";
          jsb.reflection.callStaticMethod(className, methodName, strJson);
        } else if (this.platform == Const_1.default.Platform.browser) {
          FunUtils_1.default.showTip("\u6d4b\u8bd5\u6a21\u5f0f\u89c6\u9891\u76f4\u63a5\u53d1\u5956 + " + type);
          param && param.success && param.success(2);
        }
      };
      PlatformManger.prototype.onSetCallBack = function(data) {
        var date = JSON.parse(data);
        GameDataManager_1.default.getInstance().userLocalData.setMusicOn(date.isMusicOn);
      };
      PlatformManger.prototype.openSettingPage = function() {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            isMusicOn: GameDataManager_1.default.getInstance().userLocalData.isMusicOn
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "openSettingPage";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else this.platform == Const_1.default.Platform.ios || this.platform == Const_1.default.Platform.browser && FunUtils_1.default.showTip("\u663e\u793a\u8bbe\u7f6e\u754c\u9762");
      };
      PlatformManger.prototype.openTaskPage = function(posType) {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            uid: GameDataManager_1.default.getInstance().userData.uid,
            token: GameDataManager_1.default.getInstance().userData.loginToken,
            isMusicOn: GameDataManager_1.default.getInstance().userLocalData.isMusicOn,
            invitationNum: GameDataManager_1.default.getInstance().userData.invitationNum,
            money: GameDataManager_1.default.getInstance().userData.money,
            posType: posType,
            isShowWelfare: GameDataManager_1.default.getInstance().tempData.isShowWelfare
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "openTaskPage";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else if (this.platform == Const_1.default.Platform.ios) ; else if (this.platform == Const_1.default.Platform.browser) {
          FunUtils_1.default.showTip("\u663e\u793a\u6bcf\u65e5\u798f\u5229\u754c\u9762" + posType);
          var data = {
            posType: posType,
            money: GameDataManager_1.default.getInstance().userData.money
          };
          var str = JSON.stringify(data);
          this.allPageCallBack(str);
        }
      };
      PlatformManger.prototype.openCashPage = function(posType) {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            uid: GameDataManager_1.default.getInstance().userData.uid,
            token: GameDataManager_1.default.getInstance().userData.loginToken,
            isMusicOn: GameDataManager_1.default.getInstance().userLocalData.isMusicOn,
            invitationNum: GameDataManager_1.default.getInstance().userData.invitationNum,
            money: GameDataManager_1.default.getInstance().userData.money,
            posType: posType,
            isShowWelfare: GameDataManager_1.default.getInstance().tempData.isShowWelfare
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "openCashPage";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else if (this.platform == Const_1.default.Platform.ios) ; else if (this.platform == Const_1.default.Platform.browser) {
          FunUtils_1.default.showTip("\u663e\u793a\u63d0\u73b0\u754c\u9762" + posType);
          var data = {
            posType: posType,
            money: GameDataManager_1.default.getInstance().userData.money
          };
          var str = JSON.stringify(data);
          this.allPageCallBack(str);
        }
      };
      PlatformManger.prototype.openRewardStar = function() {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            uid: GameDataManager_1.default.getInstance().userData.uid,
            token: GameDataManager_1.default.getInstance().userData.loginToken,
            isMusicOn: GameDataManager_1.default.getInstance().userLocalData.isMusicOn,
            invitationNum: GameDataManager_1.default.getInstance().userData.invitationNum,
            money: GameDataManager_1.default.getInstance().userData.money,
            isShowWelfare: GameDataManager_1.default.getInstance().tempData.isShowWelfare
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "openRewardStar";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else if (this.platform == Const_1.default.Platform.ios) ; else if (this.platform == Const_1.default.Platform.browser) {
          FunUtils_1.default.showTip("\u62bd\u5206\u7ea2\u661f");
          var data = {
            money: GameDataManager_1.default.getInstance().userData.money
          };
          var str = JSON.stringify(data);
          this.allPageCallBack(str);
        }
      };
      PlatformManger.prototype.openTurntable = function(viewName) {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            uid: GameDataManager_1.default.getInstance().userData.uid,
            token: GameDataManager_1.default.getInstance().userData.loginToken,
            isMusicOn: GameDataManager_1.default.getInstance().userLocalData.isMusicOn,
            invitationNum: GameDataManager_1.default.getInstance().userData.invitationNum,
            money: GameDataManager_1.default.getInstance().userData.money,
            viewName: viewName,
            isShowWelfare: GameDataManager_1.default.getInstance().tempData.isShowWelfare
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "turntable";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else if (this.platform == Const_1.default.Platform.ios) ; else if (this.platform == Const_1.default.Platform.browser) {
          FunUtils_1.default.showTip("\u62bd\u5206\u7ea2\u661f" + viewName);
          var data = {
            type: "shareOutStar",
            shareOutStarType: 1,
            addMoney: 2,
            time: 30,
            propRefrshNum: 2
          };
          var str = JSON.stringify(data);
          this.allPageCallBack(str);
        }
      };
      PlatformManger.prototype.openRedStarFinished = function(viewName, money_t, money_b) {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            uid: GameDataManager_1.default.getInstance().userData.uid,
            token: GameDataManager_1.default.getInstance().userData.loginToken,
            isMusicOn: GameDataManager_1.default.getInstance().userLocalData.isMusicOn,
            invitationNum: GameDataManager_1.default.getInstance().userData.invitationNum,
            money: GameDataManager_1.default.getInstance().userData.money,
            viewName: viewName,
            money_t: money_t,
            money_b: money_b,
            isShowWelfare: GameDataManager_1.default.getInstance().tempData.isShowWelfare
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "redStarFinished";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else if (this.platform == Const_1.default.Platform.ios) ; else if (this.platform == Const_1.default.Platform.browser) {
          FunUtils_1.default.showTip("\u83b7\u53d6\u7ea2\u5305\u754c\u9762" + viewName);
          var data = {
            money: GameDataManager_1.default.getInstance().userData.money
          };
          var str = JSON.stringify(data);
          this.allPageCallBack(str);
        }
      };
      PlatformManger.prototype.openNewUserRedPackPage = function(newUserRedPacket) {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            uid: GameDataManager_1.default.getInstance().userData.uid,
            token: GameDataManager_1.default.getInstance().userData.loginToken,
            isMusicOn: GameDataManager_1.default.getInstance().userLocalData.isMusicOn,
            isShowWelfare: GameDataManager_1.default.getInstance().tempData.isShowWelfare,
            newMoney: newUserRedPacket
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "newUserRedPack";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else this.platform == Const_1.default.Platform.ios || this.platform == Const_1.default.Platform.browser && FunUtils_1.default.showTip("\u65b0\u624b\u7ea2\u5305=" + newUserRedPacket);
      };
      PlatformManger.prototype.showBigVideo = function(adHeight, adWidth) {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            adType: 1,
            adPosition: "datu",
            adHeight: adHeight,
            adWidth: adWidth,
            fullHeight: AdaptarManager_1.default.getInstance().fullHeight,
            fullWidth: AdaptarManager_1.default.getInstance().fullWidth
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "showAd";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else if (this.platform == Const_1.default.Platform.ios) {
          var jsonStr = {
            adType: 1,
            adPosition: "datu",
            adHeight: 400,
            bottomMargin: 360
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "AppClient";
          var methodName = "showAd:";
          jsb.reflection.callStaticMethod(className, methodName, strJson);
        } else this.platform == Const_1.default.Platform.browser;
      };
      PlatformManger.prototype.hideBigVideo = function() {
        if (this.platform == Const_1.default.Platform.android) {
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "hideDialogDatu";
          var methodSignature = "()V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature);
        } else if (this.platform == Const_1.default.Platform.ios) {
          var className = "AppClient";
          var methodName = "hideDialogDatu";
          jsb.reflection.callStaticMethod(className, methodName, null);
        } else this.platform == Const_1.default.Platform.browser;
      };
      PlatformManger.prototype.openRedPackTimerPage = function() {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            uid: GameDataManager_1.default.getInstance().userData.uid,
            token: GameDataManager_1.default.getInstance().userData.loginToken,
            isMusicOn: GameDataManager_1.default.getInstance().userLocalData.isMusicOn,
            isShowWelfare: GameDataManager_1.default.getInstance().tempData.isShowWelfare
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "redPackTimer";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else if (this.platform == Const_1.default.Platform.ios) ; else if (this.platform == Const_1.default.Platform.browser) {
          FunUtils_1.default.showTip("\u5b9a\u65f6\u7ea2\u5305");
          var data = {
            type: "redPackTimer",
            timingRedPacketType: 0,
            timingRedPacketTime: 100
          };
          var str = JSON.stringify(data);
          this.allPageCallBack(str);
        }
      };
      PlatformManger.prototype.redPackTimerResultShow = function() {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            uid: GameDataManager_1.default.getInstance().userData.uid,
            token: GameDataManager_1.default.getInstance().userData.loginToken,
            isMusicOn: GameDataManager_1.default.getInstance().userLocalData.isMusicOn,
            isShowWelfare: GameDataManager_1.default.getInstance().tempData.isShowWelfare
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "redPackTimerResultShow";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else if (this.platform == Const_1.default.Platform.ios) ; else if (this.platform == Const_1.default.Platform.browser) {
          FunUtils_1.default.showTip("\u5b9a\u65f6\u7ea2\u5305");
          var data = {
            timingRedPacketType: 0,
            timingRedPacketTime: 100
          };
          var str = JSON.stringify(data);
          this.allPageCallBack(str);
        }
      };
      PlatformManger.prototype.openMyFrutis = function() {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            uid: GameDataManager_1.default.getInstance().userData.uid,
            token: GameDataManager_1.default.getInstance().userData.loginToken,
            isMusicOn: GameDataManager_1.default.getInstance().userLocalData.isMusicOn,
            isShowWelfare: GameDataManager_1.default.getInstance().tempData.isShowWelfare
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "openMyFrutis";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else this.platform == Const_1.default.Platform.ios || this.platform == Const_1.default.Platform.browser && FunUtils_1.default.showTip("\u6211\u7684\u82f9\u679c");
      };
      PlatformManger.prototype.openWinPhone = function(posType) {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            posType: posType
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "winMobilePhone";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else if (this.platform == Const_1.default.Platform.ios) ; else if (this.platform == Const_1.default.Platform.browser) {
          FunUtils_1.default.showTip("\u663e\u793a\u8d62\u624b\u673a\u754c\u9762");
          var data = {
            posType: posType
          };
          var str = JSON.stringify(data);
          this.allPageCallBack(str);
        }
      };
      PlatformManger.prototype.openSignIn = function() {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            uid: GameDataManager_1.default.getInstance().userData.uid
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "openSignIn";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else this.platform == Const_1.default.Platform.ios || this.platform == Const_1.default.Platform.browser && FunUtils_1.default.showTip("\u663e\u793a\u7b7e\u5230\u754c\u9762");
      };
      PlatformManger.prototype.allPageCallBack = function(jsonData) {};
      PlatformManger.prototype.showGetFruitsDialog = function(fruits) {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            uid: GameDataManager_1.default.getInstance().userData.uid,
            token: GameDataManager_1.default.getInstance().userData.loginToken,
            isMusicOn: GameDataManager_1.default.getInstance().userLocalData.isMusicOn,
            isShowWelfare: GameDataManager_1.default.getInstance().tempData.isShowWelfare,
            fruits: fruits
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "showGetFruitsDialog";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else this.platform == Const_1.default.Platform.ios || this.platform == Const_1.default.Platform.browser && FunUtils_1.default.showTip("\u6211\u7684\u82f9\u679c");
      };
      PlatformManger.prototype.openBrowser = function(url) {
        if (this.platform == Const_1.default.Platform.android) {
          console.log("===android==url=", url);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "openBrowser";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, url);
        } else if (this.platform == Const_1.default.Platform.ios) {
          var className = "AppClient";
          var methodName = "openBrowser:";
          jsb.reflection.callStaticMethod(className, methodName, url);
        } else this.platform == Const_1.default.Platform.browser && cc.sys.openURL(url);
      };
      PlatformManger.prototype.copy = function(copyStr) {
        if (this.platform == Const_1.default.Platform.android) {
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "copy";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, copyStr);
        } else if (this.platform == Const_1.default.Platform.ios) {
          var className = "AppClient";
          var methodName = "copy:";
          jsb.reflection.callStaticMethod(className, methodName, copyStr);
        } else this.platform == Const_1.default.Platform.browser && FunUtils_1.default.showTip("\u590d\u5236\u6210\u529f" + copyStr);
      };
      PlatformManger.prototype.shareText = function(msg) {
        if (this.platform == Const_1.default.Platform.android) {
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "shareText";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, msg);
        } else if (this.platform == Const_1.default.Platform.ios) {
          var className = "AppClient";
          var methodName = "shareText:";
          jsb.reflection.callStaticMethod(className, methodName, msg);
        } else this.platform == Const_1.default.Platform.browser && FunUtils_1.default.showTip("\u5206\u4eab" + msg);
      };
      PlatformManger.prototype.wxBindingError = function(funName) {
        console.log("===wxBindingError==", funName);
        this.callBackBinding && this.callBackBinding.success && this.callBackBinding.fail();
      };
      PlatformManger.prototype.wxBindingOk = function(data) {
        console.log("===wxBindingOk==", data);
        if (this.callBackBinding && this.callBackBinding.success) {
          var date = JSON.parse(data);
          this.callBackBinding.success(date);
        }
      };
      PlatformManger.prototype.wxBinding = function(param) {
        this.callBackBinding = param;
        if (this.platform == Const_1.default.Platform.android) {
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "getWXInfo";
          var methodSignature = "()V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature);
        } else if (this.platform == Const_1.default.Platform.ios) {
          var className = "AppClient";
          var methodName = "getWXInfo";
          jsb.reflection.callStaticMethod(className, methodName, null);
        } else if (this.platform == Const_1.default.Platform.browser && param && param.success) {
          var data = {
            openid: GameDataManager_1.default.getInstance().userLocalData.openid,
            nickname: "\u6d4b\u8bd5\u2014\u4e1c",
            sex: 1,
            language: "zh_CN",
            city: "",
            province: "",
            country: "AD",
            headimgurl: "http://thirdwx.qlogo.cn/mmopen/vi_32/73UFconjvSyIGGEATicC3SDROdOhd2w5BdbDLrhZl2cb92duCfXJAObpSB3WCKnVSnL9wR2tfHicUHO54R9uoqvQ/132",
            privilege: [],
            unionid: GameDataManager_1.default.getInstance().userLocalData.openid
          };
          param.success(data);
        }
      };
      PlatformManger.prototype.getAppInfo = function() {
        if (this.platform == Const_1.default.Platform.android) {
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "getAppInfo";
          var methodSignature = "()Ljava/lang/String;";
          var data = jsb.reflection.callStaticMethod(className, methodName, methodSignature);
          console.log("====\u83b7\u53d6Java App\u914d\u7f6e ==", data);
          var date = JSON.parse(data);
          return date;
        }
        if (this.platform == Const_1.default.Platform.ios) {
          var className = "AppClient";
          var methodName = "getAppInfo";
          var data = jsb.reflection.callStaticMethod(className, methodName, null);
          console.log("====\u83b7\u53d6IOS App\u914d\u7f6e ==", data);
          var date = JSON.parse(data);
          return date;
        }
        if (this.platform == Const_1.default.Platform.browser) {
          var date = {
            imei: GameDataManager_1.default.getInstance().userLocalData.openid,
            packageName: "com.jiayou.xiaoxixao",
            versionName: "1.3.1",
            channelName: "lddTest10",
            city: "\u5317\u4eac",
            isFirstOpen: false
          };
          return date;
        }
      };
      PlatformManger.prototype.sendInfo = function() {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            uid: GameDataManager_1.default.getInstance().userData.uid,
            token: GameDataManager_1.default.getInstance().userData.loginToken,
            isMusicOn: GameDataManager_1.default.getInstance().userLocalData.isMusicOn
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "sendInfo";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else this.platform == Const_1.default.Platform.ios || this.platform == Const_1.default.Platform.browser && FunUtils_1.default.showTip("=\u53d1\u9001\u4fe1\u606f=");
      };
      PlatformManger.prototype.hideCoverImg = function() {
        if (this.platform == Const_1.default.Platform.android) {
          var jsonStr = {
            uid: GameDataManager_1.default.getInstance().userData.uid
          };
          var strJson = JSON.stringify(jsonStr);
          var className = "org/cocos2dx/javascript/AppClient";
          var methodName = "hideCoverImg";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb.reflection.callStaticMethod(className, methodName, methodSignature, strJson);
        } else this.platform == Const_1.default.Platform.ios || this.platform == Const_1.default.Platform.browser && FunUtils_1.default.showTip("\u9690\u85cf\u9ed1\u5c4f");
      };
      var PlatformManger_1;
      PlatformManger.instance = null;
      PlatformManger = PlatformManger_1 = __decorate([ ccclass ], PlatformManger);
      return PlatformManger;
    }();
    exports.default = PlatformManger;
    cc._RF.pop();
  }, {
    "../../game/Const": "Const",
    "../Manager/AdaptarManager": "AdaptarManager",
    "../Manager/GameDataManager": "GameDataManager",
    "../Util/FunUtils": "FunUtils",
    "./QQPlaform": "QQPlaform",
    "./ShareAdvType": "ShareAdvType",
    "./WXUtils": "WXUtils"
  } ],
  ProtocolManger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae5fb4+ajJDOZTyq1ZymUNk", "ProtocolManger");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ProtocolManger = function() {
      function ProtocolManger() {}
      ProtocolManger.WebSocket = {};
      ProtocolManger.LocalPro = {
        BackFinish: "BackFinish"
      };
      ProtocolManger = __decorate([ ccclass ], ProtocolManger);
      return ProtocolManger;
    }();
    exports.default = ProtocolManger;
    cc._RF.pop();
  }, {} ],
  QQPlaform: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ab202NbBlJNwqP0+sOxuqxT", "QQPlaform");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FunUtils_1 = require("../Util/FunUtils");
    var ShareAdvType_1 = require("./ShareAdvType");
    var GameDataManager_1 = require("../Manager/GameDataManager");
    var PlatformManger_1 = require("./PlatformManger");
    var Const_1 = require("../../game/Const");
    var QQPlaform = function() {
      function QQPlaform() {
        this.qq = null;
        this.isVideoLoading = false;
        this.isShowVideo = true;
        this.isVideoCached = false;
        this.videoCallBack = null;
        this.videoAdv = null;
        this.videoIds = {
          ad1: "83250bb25c44c0d0736f46faed08809c"
        };
        this.bannerAds = "65c7d9e20341ad154905a6a8e24fc9d4";
        this.bannerAd = null;
        this.showBannerTime = 0;
        this.created = false;
        this.loaded = false;
        this.showed = false;
        this.appbox = null;
        this.qqAppboxId = "aacb791e4db37a6f6bc31ee0d924f4e1";
        this.blockAd = null;
        this.blockAdIds = "62eb69ffcf4f00ff690e7196be6254e8";
      }
      QQPlaform.getInstance = function() {
        null == QQPlaform.instance && (QQPlaform.instance = new QQPlaform());
        return QQPlaform.instance;
      };
      QQPlaform.prototype.init = function() {
        this.qq = window.qq;
      };
      QQPlaform.prototype.login = function(callback) {
        this.qq.login({
          success: function(res) {
            console.log(res);
            res.code && callback(res.code);
          }.bind(this),
          fail: function(res) {
            FunUtils_1.default.showTip("\u767b\u5f55\u5931\u8d25");
          }.bind(this)
        });
      };
      QQPlaform.prototype.qqShowVideo = function(type, videoCallBack) {
        if (!this.isShowVideo) return;
        this.videoCallBack = videoCallBack;
        console.log("=====this.videoCallBack=======", this.videoCallBack);
        this.isShowVideo = false;
        if (this.isVideoLoading) return;
        this.isVideoLoading = false;
        this.cacheVideo();
        this.isVideoCached ? this.showVideo() : this.loadVideo(true);
        var adName = ShareAdvType_1.default.shareAdvName[type];
        adName || (adName = "???");
      };
      QQPlaform.prototype.createVideo = function(videoId) {
        var _this = this;
        this.videoAdv = this.qq.createRewardedVideoAd({
          adUnitId: videoId
        });
        this.videoAdv.bind_this = this;
        this.videoAdv.onError(function(res) {
          _this.videoError(res);
        });
        this.videoAdv.onClose(function(res) {
          _this.videoSuccess(res);
        });
      };
      QQPlaform.prototype.videoError = function(res) {
        console.log("=======videoError======", res);
        this.isShowVideo = true;
        this.isVideoLoading = false;
        this.isVideoCached = false;
        var videoCallBack = this.videoCallBack;
        if (!videoCallBack) return;
        FunUtils_1.default.showTip("\u4eca\u65e5\u5e7f\u544a\u6b21\u6570\u5df2\u770b\u5b8c\uff01\u8bf7\u660e\u65e5\u518d\u8bd5\u3002");
        videoCallBack.noVideo && videoCallBack.noVideo(res);
      };
      QQPlaform.prototype.videoSuccess = function(res) {
        console.log("=======videoSuccess======", res);
        this.isShowVideo = true;
        this.isVideoLoading = false;
        this.isVideoCached = false;
        var videoCallBack = this.videoCallBack;
        console.log("=======videoCallBack======", videoCallBack);
        if (!videoCallBack) return;
        if (res && res.isEnded || void 0 == res) {
          videoCallBack.success && videoCallBack.success(2);
          var adName = ShareAdvType_1.default.shareAdvName[videoCallBack.type];
          adName || (adName = "???");
          this.loadVideo(false);
        } else {
          videoCallBack.fail && videoCallBack.fail(res);
          FunUtils_1.default.showTip("\u89c2\u770b\u5b8c\u6574\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6\uff01");
          this.loadVideo(false);
        }
      };
      QQPlaform.prototype.cacheVideo = function() {
        if (!this.videoAdv) {
          this.createVideo(this.videoIds.ad1);
          return true;
        }
        return false;
      };
      QQPlaform.prototype.showVideo = function() {
        var _this = this;
        this.videoAdv.show().catch(function(err) {
          console.warn(err);
          _this.isShowVideo = true;
          _this.isVideoCached = false;
          FunUtils_1.default.showTip("\u89c6\u9891\u64ad\u653e\u5931\u8d25\uff01\u8bf7\u91cd\u8bd5");
        });
      };
      QQPlaform.prototype.loadVideo = function(isShow) {
        var _this = this;
        this.videoAdv.load().then(function() {
          _this.isVideoLoading = false;
          _this.isVideoCached = true;
          isShow && _this.videoAdv.show();
        }).catch(function(err) {
          console.warn(err);
          _this.isShowVideo = true;
          _this.isVideoLoading = false;
        });
      };
      QQPlaform.prototype.qqShowBanner = function(isShow) {
        if (isShow && this.bannerAd && Date.now() - this.showBannerTime > GameDataManager_1.default.getInstance().kaiGuan.bannerRefreshTime) {
          console.log("destory banner");
          this.bannerAd.destroy();
          this.bannerAd = null;
        }
        this.createBanner(isShow, this.bannerAds);
      };
      QQPlaform.prototype.createBanner = function(isShow, _adUnitId) {
        var _this = this;
        console.log("===_adUnitId===", _adUnitId);
        if (!this.bannerAd) {
          var screenWidth = this.qq.getSystemInfoSync().screenWidth;
          var screenHeight = this.qq.getSystemInfoSync().screenHeight;
          this.showBannerTime = Date.now();
          var bannerAd_1 = this.qq.createBannerAd({
            adUnitId: _adUnitId,
            style: {
              left: (screenWidth - 300) / 2,
              top: screenHeight - 100,
              width: 300,
              height: 100
            }
          });
          bannerAd_1.onError(function(err) {
            console.log(err);
          });
          bannerAd_1.onResize(function(res) {
            console.log(res.width, res.height);
            console.log(bannerAd_1.style.realWidth, bannerAd_1.style.realHeight);
            var screenHeight = _this.qq.getSystemInfoSync().screenHeight;
            bannerAd_1.style.top = screenHeight - bannerAd_1.style.realHeight;
            bannerAd_1.style.left = (screenWidth - bannerAd_1.style.realWidth) / 2;
          });
          this.bannerAd = bannerAd_1;
          console.log("create banner");
        }
        isShow ? this.bannerAd.show() : this.bannerAd.hide();
      };
      QQPlaform.prototype.showAppBox = function(isShow, fend) {
        void 0 === fend && (fend = null);
        if (PlatformManger_1.default.getInstance().platform != Const_1.default.Platform.qq) return;
        var AppBoxFunc = this.qq.createAppBox;
        if (!AppBoxFunc) {
          console.error("\u6ca1\u6709\u4e92\u5bfc\u76d2\u5b50\u7ec4\u4ef6!");
          return;
        }
        this.created || this.createappbox();
        this.loadappbox(isShow, fend);
      };
      QQPlaform.prototype.addLog = function(msg, data) {
        void 0 === data && (data = null);
        console.log(msg);
      };
      QQPlaform.prototype.createappbox = function() {
        this.appbox = this.qq.createAppBox({
          adUnitId: this.qqAppboxId
        });
        var appbox = this.appbox;
        var self = this;
        this.addLog("\u521b\u5efaappbox");
        if (self.created) {
          console.log("off");
          appbox.offClose(this.onClose.bind(this));
        }
        console.log("on");
        self.created = true;
        appbox.onClose(this.onClose);
      };
      QQPlaform.prototype.onLoad = function(res) {
        console.log("appbox onload");
        console.log(res);
      };
      QQPlaform.prototype.onError = function(res) {
        console.log("appbox onerror");
        console.log(res);
      };
      QQPlaform.prototype.onClose = function(res) {
        console.log("appbox onclose");
        console.log(res);
      };
      QQPlaform.prototype.loadappbox = function(isShow, fend) {
        var _this = this;
        var self = this;
        this.addLog("click loadappbox");
        this.appbox ? this.appbox.load().then(function() {
          _this.loaded = true;
          _this.addLog("appbox load success");
          fend && fend(true);
          isShow && _this.showappbox();
        }).catch(function(res) {
          _this.addLog("appbox load error", res);
        }) : this.addLog("\u8bf7\u5148\u521b\u5efaappbox");
      };
      QQPlaform.prototype.showappbox = function() {
        var _this = this;
        var self = this;
        this.addLog("click showappbox");
        this.appbox ? this.appbox.show().then(function() {
          _this.showed = true;
          _this.addLog("appbox show success");
        }).catch(function(res) {
          _this.addLog("appbox show error", res);
        }) : this.addLog("\u8bf7\u5148\u521b\u5efaappbox");
      };
      QQPlaform.prototype.destroyappbox = function() {
        var _this = this;
        var self = this;
        this.addLog("click destroyappbox");
        this.appbox ? this.appbox.destroy().then(function() {
          _this.showed = false;
          _this.loaded = false;
          _this.created = false;
          _this.addLog("appbox destroy success");
        }).catch(function(res) {
          _this.addLog("appbox destroy error", res);
        }) : this.addLog("\u8bf7\u5148\u521b\u5efaappbox");
      };
      QQPlaform.prototype.setBlockPos = function(width, height) {
        if (this.blockAd) {
          var screenWidth = this.qq.getSystemInfoSync().screenWidth;
          var screenHeight = this.qq.getSystemInfoSync().screenHeight;
          var left = screenWidth / 2 - width / 2;
          var top = .08 * screenHeight;
          this.blockAd.style.left = left;
          this.blockAd.style.top = top;
        }
      };
      QQPlaform.prototype.blockAdErr = function(res) {
        console.log(res);
      };
      QQPlaform.prototype.blockResize = function(res) {
        console.log("blockAd resize");
        console.log(res);
        var width = this.blockAd.style.realWidth;
        var height = this.blockAd.style.realHeight;
        this.setBlockPos(width, height);
      };
      QQPlaform.prototype.qqShowJimuAd = function(isShow, needRefresh) {
        void 0 === needRefresh && (needRefresh = true);
        if (!this.qq) return;
        if (!this.qq.createBlockAd) return;
        if (this.blockAd && needRefresh) {
          this.blockAd.offError(this.blockAdErr);
          this.blockAd.offResize(this.blockResize);
          this.blockAd.destroy();
          this.blockAd = null;
        }
        if (!this.blockAd) {
          var screenHeight = this.qq.getSystemInfoSync().screenHeight;
          var top = .08 * screenHeight;
          var blockAd = this.qq.createBlockAd({
            adUnitId: this.blockAdIds,
            size: 5,
            orientation: "landscape",
            style: {
              left: 40,
              top: top
            }
          });
          this.blockAd = blockAd;
          blockAd.onError(this.blockAdErr.bind(this));
          blockAd.onResize(this.blockResize.bind(this));
          console.log("create blockAd");
        }
        isShow ? this.blockAd.show() : this.blockAd.hide();
      };
      QQPlaform.instance = null;
      QQPlaform.appId = "1110661213";
      return QQPlaform;
    }();
    exports.default = QQPlaform;
    cc._RF.pop();
  }, {
    "../../game/Const": "Const",
    "../Manager/GameDataManager": "GameDataManager",
    "../Util/FunUtils": "FunUtils",
    "./PlatformManger": "PlatformManger",
    "./ShareAdvType": "ShareAdvType"
  } ],
  RedCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7a9cx0+mpMFrFEk5hD+qNc", "RedCenter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  RedUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fe5583J0oVK36ycC0XhUeYg", "RedUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var tipsShow_1 = require("./redPack/tipsShow");
    var everyTask_1 = require("./task/everyTask");
    var withdrawSuccess_1 = require("./task/withdrawSuccess");
    var RedUtil = {
      _RedquestState: 1,
      _currentMoney: 0,
      redNect: false,
      _mainprofit: null,
      _turnPage: null,
      firstRedPage: null,
      withdrawPage: null,
      _everyTask: null,
      _withdrawBtn: null,
      _everyRed: null,
      _RedStarBtn: null,
      _everyWithdrawBtn: null,
      _videoWithdrawBtn: null,
      _redRainBtn: null,
      _loginSignBtn: null,
      _videoRedPack: null,
      _litterRedPro: null,
      _litterRedPool: [],
      _currRedNum: 0,
      _everyRedTime: 0,
      _activeName: "",
      _awardMoney: 0,
      _videoSignNum: 0,
      _isOpenSecondPage: false,
      _iseventDot: false,
      _isFirstwithdraw: false,
      _videoWithdrawMoney: -1,
      _renPackRainTime: 0,
      _isredPackRainOpen: false,
      _signMoney: 0,
      _signRedColdTime: -1,
      _LoginSignWin: null,
      _loginCurrNum: 0,
      _setTimeLogin: 5,
      _initFinsh: false,
      _currRedPackNum: 0,
      _url: "https://ad-api.99aly.com/api/",
      eventDispatcher: new cc.EventTarget(),
      redPackType: {
        newPlayer: "1",
        turnPage: "2",
        passOver: "3",
        wuChutype: "4",
        InGame: "5"
      },
      callBackName: {
        onOpened: "onOpened",
        onClosed: "onClosed",
        luckyComplete: "luckyComplete",
        nextOpened: "nextOpened",
        nextClose: "nextClose",
        allClose: "allClose",
        redpackVideoClose: "redpackVideoClose"
      },
      headIcons: [ "alySDK/alyUI/xin-6", "alySDK/alyUI/xin-7", "alySDK/alyUI/xin-8", "alySDK/alyUI/xin-9" ],
      randomName: [ [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "uv", "use" ], [ "1314", "520", "618", "11", "81", "101", "33", "55", "1", "2", "77", "00", "9" ] ],
      randomName2: [ [ "\u874e", "\u5b50", "sun", "\u82b1", "\u5f00\u4e0b", "relly", "emm", "m", "\u5929", "\u5f97", "\u7075", "la", "$" ], [ "...", "?", ",,", "%", "uu", "\u3002", "\u3001", "-", ";;" ] ],
      showData: [ {
        title: "0.01\u5143\u5feb\u901f\u63d0\u73b0\u8bf4\u660e",
        content: "\u4f59\u989d\u8fbe\u52300.01\u5143\u540e\u65b9\u53ef\u4eab\u53d7\u63d0\u73b0"
      }, {
        title: "0.03\u5143\u5feb\u901f\u63d0\u73b0\u8bf4\u660e",
        content: "1.\u8fde\u7eed\u7b7e\u52302\u5929\uff0c\u53ef\u83b7\u5f97\u63d0\u73b0\u673a\u4f1a\n2.\u4eca\u65e5\u8fd8\u672a\u7b7e\u5230\uff0c\u5df2\u8fde\u7eed\u7b7e\u52300\u5929\u3002"
      }, {
        title: "2\u5143\u63d0\u73b0\u89c4\u5219",
        content: "\u9700\u8981\u5f97\u5230\u4e00\u9897\u6c38\u4e45\u5206\u7ea2\u661f\u540e\uff0c\u53ef\u4eab\u53d72\u5143\u63d0\u73b0"
      } ],
      _gameInfo: [],
      WIDTH: 720,
      HEIGHT: 1280,
      setScale: function(node) {
        var designSize = cc.view.getFrameSize();
        var deviceHeight = designSize.height;
        var deviceWidth = designSize.width;
        var fullHeight = deviceHeight / deviceWidth * RedUtil.WIDTH;
        var fullWidth = RedUtil.WIDTH;
        var scaln = fullWidth / node.width;
        node.scaleX = scaln;
        node.scaleY = scaln;
        node.height = fullHeight / scaln;
        node.setPosition(fullWidth / 2, fullHeight / 2);
      },
      opeTips: function(tipstr) {
        cc.loader.loadRes("alySDK/alyprofabs/tips", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            var parentNode = cc.director.getScene();
            newNode.setPosition(360, 795);
            parentNode.addChild(newNode);
            if (tipstr) {
              var cla = newNode.getComponent(tipsShow_1.default);
              cla.getParams(tipstr);
            }
          }
        });
      },
      openWithdrawSuccess: function(money) {
        var parmp = {
          Money: money
        };
        RedUtil.LoadResource("alySDK/alyprofabs/withdrawSuccess", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            console.log("openWithdrawSuccess");
            var parentNode = cc.director.getScene();
            parentNode.addChild(newNode);
            if (parmp) {
              var cla = newNode.getComponent(withdrawSuccess_1.default);
              cla.getParams(parmp);
            }
          }
        });
      },
      setAction: function(node, isOpen, fun) {
        isOpen ? cc.tween(node).to(0, {
          scaleX: 0,
          scaleY: 0
        }).to(.2, {
          scaleX: 1.2,
          scaleY: 1.2
        }).to(.1, {
          scaleX: 1,
          scaleY: 1
        }).start() : cc.tween(node).to(.1, {
          scaleX: 1.2,
          scaleY: 1.2
        }).to(.2, {
          scaleX: 0,
          scaleY: 0
        }).call(function() {
          fun();
        }).start();
      },
      getGameInfo: function() {
        var res = [];
        for (var i = 0; i < RedUtil._gameInfo.length; i++) res.push(RedUtil._gameInfo[i]);
        return res;
      },
      getGameIds: function() {
        var vdata = null;
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
          var qq = window["qq"];
          qq.aly && qq.hasOwnProperty("aly") && (vdata = qq.aly.getRandomUserID());
        } else vdata = {
          UserId: "1110584566",
          OpenId: "C4534005FB5B97DACA82B5601A063E8F"
        };
        return vdata;
      },
      LoadResource: function(downUrl, succFuc) {
        cc.loader.loadRes(downUrl, succFuc);
      },
      LoadSpritRes: function(downUrl, succFuc) {
        cc.loader.loadRes(downUrl, cc.SpriteFrame, succFuc);
      },
      eventgetAward: function(index) {
        RedUtil.eventDispatcher.emit(RedUtil.callBackName.luckyComplete, index);
      },
      callBackRun: function(node, functionC) {
        if (node && functionC) {
          var cf = cc.callFunc(functionC, node);
          node.runAction(cf);
        }
      },
      getRandomNum: function(n, m) {
        var num1 = Math.random() * (m - n + 1);
        var num2 = Math.floor(num1);
        return num2 + n;
      },
      getRandomNumfloat: function(n, m, count) {
        var num1 = Math.random() * (m - n + 1);
        var num2 = num1.toFixed(count);
        return Number(num2) + n;
      },
      getSecondString: function(alltime) {
        var str = "";
        var sec = Math.floor(alltime / 1e3);
        var min = 0;
        var hour = 0;
        var hourM = 0;
        var minM = 0;
        if (sec >= 60) {
          min = Math.floor(sec / 60);
          sec %= 60;
        }
        if (min >= 60) {
          hour = Math.floor(min / 60);
          hourM = min % 60;
          hourM > 0 && (min = Math.floor(hourM / 60));
        }
        hour > 0 && (str = hour > 9 ? hour.toString() + ":" : "0" + hour.toString() + ":");
        min > 0 ? min > 9 ? str += min.toString() : str = str + "0" + min.toString() : str += "00";
        sec > 0 ? str = sec > 9 ? str + ":" + sec.toString() : str + ":0" + sec.toString() : str += ":00";
        return str;
      },
      openQuestRedPack: function(activeName, redpackType, isOpenSecondPage, callback, openEventPotnum) {
        return;
        var fiveminState;
        var vdata;
        var xmlhttp;
        var url;
        var data;
      },
      requestReduceRedPack: function(money) {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "reduceredpacket";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {};
        xmlhttp.onload = function() {};
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            if (0 == res.code && res.total_money) {
              cc.sys.localStorage.setItem("MoneyNum", res.total_money.toString());
              RedUtil.eventDispatcher.emit("changeWithdrawBtnMoney", res.total_money / 100);
            }
          }
        };
        xmlhttp.send(JSON.stringify({
          gameId: vdata.UserId,
          openid: vdata.OpenId,
          totalMoney: money
        }));
      },
      awardRedpack: function(money, mydata) {
        RedUtil._awardMoney = money;
        var vdata = this.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "qqred";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {};
        xmlhttp.onload = function() {};
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            mydata && mydata.SuccessFuc && mydata.SuccessFuc(res);
          }
        };
        xmlhttp.send(JSON.stringify({
          qqAppid: vdata.UserId,
          re_Openid: vdata.OpenId,
          Total_amount: money
        }));
      },
      awardMoney: function(money, mydata) {
        RedUtil._awardMoney = money;
        var vdata = this.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "qqmedalred";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {};
        xmlhttp.onload = function() {};
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            mydata && mydata.SuccessFuc && mydata.SuccessFuc(res);
            RedUtil.withdrawPage && RedUtil.eventDispatcher.emit("withdrawfinsh", res);
          }
        };
        xmlhttp.send(JSON.stringify({
          qqAppid: vdata.UserId,
          re_Openid: vdata.OpenId,
          Total_amount: money
        }));
      },
      everyRedTimeOver: function(money) {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "qqminredpacket";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {};
        xmlhttp.onload = function() {};
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            if (0 == res.code && res.total_money) {
              cc.sys.localStorage.setItem("MoneyNum", res.total_money.toString());
              RedUtil.eventDispatcher.emit("changeWithdrawBtnMoney", res.total_money / 100);
            }
          }
        };
        xmlhttp.send(JSON.stringify({
          gameId: vdata.UserId,
          openId: vdata.OpenId,
          fiveMinMoney: money,
          fiveMinState: 0
        }));
      },
      requestMoney: function() {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "qtotalmoney";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {};
        xmlhttp.onload = function() {};
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            if (0 == res.code && res.total_money) {
              cc.sys.localStorage.setItem("MoneyNum", res.total_money.toString());
              RedUtil.eventDispatcher.emit("changeWithdrawBtnMoney", res.total_money / 100);
            }
          }
        };
        xmlhttp.send(JSON.stringify({
          gameId: vdata.UserId,
          openId: vdata.OpenId
        }));
      },
      requestCount: function(callBack) {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "qcountcashout";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {
          console.log("requestCounterr=========" + xmlhttp.statusText);
        };
        xmlhttp.onload = function() {
          console.log("requestCount=======" + xmlhttp.status);
        };
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            console.log("res======requestCount==========" + JSON.stringify(res));
            0 == res.code && void 0 != res.cash_out && RedUtil.eventDispatcher.emit("openWithdrawPage", res.cash_out, callBack);
          }
        };
        xmlhttp.send(JSON.stringify({
          gameId: vdata.UserId,
          openId: vdata.OpenId
        }));
      },
      requestCountData: function(myData) {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "qcountcashout";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {
          console.log("requestCountData=err========" + xmlhttp.statusText);
        };
        xmlhttp.onload = function() {
          console.log("requestCountData=======" + xmlhttp.status);
        };
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            console.log("res======requestCountData==========" + JSON.stringify(res));
            0 == res.code && void 0 != res.cash_out && myData && myData.SuccessFuc && myData.SuccessFuc(res.cash_out);
          }
        };
        xmlhttp.send(JSON.stringify({
          gameId: vdata.UserId,
          openId: vdata.OpenId
        }));
      },
      taskrequestCount: function(mydata) {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "qcountcashout";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {
          console.log("requestCounterr=========" + xmlhttp.statusText);
        };
        xmlhttp.onload = function() {
          console.log("requestCount=======" + xmlhttp.status);
        };
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            console.log("res======requestCount==========" + JSON.stringify(res));
            0 == res.code && mydata.SuccessFuc(res.cash_out);
          }
        };
        xmlhttp.send(JSON.stringify({
          gameId: vdata.UserId,
          openId: vdata.OpenId
        }));
      },
      requestInitTask: function() {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "inittask";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {
          console.log("requestInitTask=====err====" + xmlhttp.statusText);
        };
        xmlhttp.onload = function() {
          console.log("requestInitTask=======" + xmlhttp.status);
        };
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            console.log("res======requestCount==========" + JSON.stringify(res));
            if (0 == res.code) {
              console.log("\u521d\u59cb\u5316\u4efb\u52a1\u6210\u529f");
              RedUtil._initFinsh = true;
            }
          }
        };
        xmlhttp.send(JSON.stringify({
          gameId: vdata.UserId,
          openId: vdata.OpenId
        }));
      },
      requestEveryTask: function(callBack) {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "taskmedal";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {
          console.log("requestEveryTask=====err====" + xmlhttp.statusText);
        };
        xmlhttp.onload = function() {
          console.log("requestEveryTask=======" + xmlhttp.status);
        };
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            console.log("res======requestCount==========" + JSON.stringify(res));
            0 == res.code && RedUtil.eventDispatcher.emit("openEveryTask", callBack, res);
          }
        };
        xmlhttp.send(JSON.stringify({
          gameId: vdata.UserId,
          openId: vdata.OpenId
        }));
      },
      changeEveryTaskMessage: function(taskId, count) {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "taskadd";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {
          console.log("changeEveryTaskMessage=====err====" + xmlhttp.statusText);
        };
        xmlhttp.onload = function() {
          console.log("changeEveryTaskMessage=======" + xmlhttp.status);
        };
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            console.log("res======changeEveryTaskMessage==========" + JSON.stringify(res));
            0 == res.code && console.log("changeEveryTaskMessage==success");
          }
        };
        xmlhttp.send(JSON.stringify({
          gameId: vdata.UserId,
          openId: vdata.OpenId,
          taskId: taskId,
          addNum: count
        }));
      },
      requestVideoRedCount: function() {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "taskprogress";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {};
        xmlhttp.onload = function() {};
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            console.log("res======requestVideoRedCount==========" + JSON.stringify(res));
            0 == res.code && RedUtil._videoWithdrawBtn && RedUtil._videoWithdrawBtn.getComponent("videoWithdrawBtn").openVideoRedPack(res);
          }
        };
        xmlhttp.send(JSON.stringify({
          gameId: vdata.UserId,
          openId: vdata.OpenId,
          taskId: 1e4
        }));
      },
      requestVideoRedWithdraw: function() {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "qqvideocashout";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {
          console.log("requestVideoRedCount=====err====" + xmlhttp.statusText);
        };
        xmlhttp.onload = function() {
          console.log("requestVideoRedCount=======" + xmlhttp.status);
        };
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            console.log("xmlhttp.responseText======requestVideoRedCount==========" + xmlhttp.responseText);
            console.log("xmlhttp.responseText======typeof==========" + typeof xmlhttp.responseText);
            var res = JSON.parse(xmlhttp.responseText);
            console.log("res======requestVideoRedCount==========" + JSON.stringify(res));
            0 == res.code && (RedUtil._videoWithdrawMoney = res.money);
          }
        };
        xmlhttp.send(JSON.stringify({
          qqAppid: vdata.UserId,
          re_Openid: vdata.OpenId
        }));
      },
      getAwardTask: function(taskId, count) {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "getmedal";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {
          console.log("getAwardTask=====err====" + xmlhttp.statusText);
        };
        xmlhttp.onload = function() {
          console.log("getAwardTask=======" + xmlhttp.status);
        };
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            console.log("res======getAwardTask==========" + JSON.stringify(res));
            0 == res.code && RedUtil._everyTask && RedUtil._everyTask.getComponent(everyTask_1.default).changeOneItem(taskId);
          }
        };
        xmlhttp.send(JSON.stringify({
          gameId: vdata.UserId,
          openId: vdata.OpenId,
          taskId: taskId,
          state: 2
        }));
      },
      requestRedRainCount: function() {
        console.log("requestRedRainCount============");
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "taskprogress";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {
          console.log("requestRedRainCount=====err====" + xmlhttp.statusText);
        };
        xmlhttp.onload = function() {
          console.log("requestRedRainCount=======" + xmlhttp.status);
        };
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            console.log("res======requestRedRainCount==========" + JSON.stringify(res));
            0 == res.code && RedUtil._redRainBtn && RedUtil._redRainBtn.getComponent("redRainBtn").setMessage(res);
          }
        };
        xmlhttp.send(JSON.stringify({
          gameId: vdata.UserId,
          openId: vdata.OpenId,
          taskId: 10001
        }));
      },
      requestLoginSignCount: function(mydata) {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "signinnum";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {
          console.log("requestLoginSignCount=====err====" + xmlhttp.statusText);
        };
        xmlhttp.onload = function() {
          console.log("requestLoginSignCount=======" + xmlhttp.status);
        };
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            var res = JSON.parse(xmlhttp.responseText);
            console.log("res======requestLoginSignCount==========" + JSON.stringify(res));
            0 == res.code && mydata && mydata.SuccessFuc && mydata.SuccessFuc(res);
          }
        };
        xmlhttp.send(JSON.stringify({
          GameId: vdata.UserId,
          OpenId: vdata.OpenId
        }));
      },
      requestLoginSignWithdraw: function() {
        var vdata = RedUtil.getGameIds();
        var xmlhttp = new XMLHttpRequest();
        var url = RedUtil._url + "qqsignintoday";
        xmlhttp.setRequestHeader("content-type", "application/json");
        xmlhttp.open("POST", url, true);
        xmlhttp.onerror = function() {
          console.log("requestLoginSignWithdraw=====err====" + xmlhttp.statusText);
        };
        xmlhttp.onload = function() {
          console.log("requestLoginSignWithdraw=======" + xmlhttp.status);
        };
        xmlhttp.onreadystatechange = function() {
          if (4 == xmlhttp.readyState && xmlhttp.status >= 200 && xmlhttp.status < 400) {
            console.log("init=requestLoginSignWithdraw==========" + xmlhttp.responseText);
            var res = JSON.parse(xmlhttp.responseText);
            console.log("res======requestLoginSignWithdraw==========" + JSON.stringify(res));
            if (0 == res.code) {
              RedUtil._signMoney = res.money;
              RedUtil._LoginSignWin && RedUtil._LoginSignWin.getComponent("loginSignWin").withdrawSucc();
            }
          }
        };
        xmlhttp.send(JSON.stringify({
          qqAppid: vdata.UserId,
          re_Openid: vdata.OpenId
        }));
      },
      getIsInitOpen: function() {
        if (RedUtil._LoginSignWin) return false;
        if (RedUtil.firstRedPage) return false;
        return true;
      },
      extportData: function(logId, logDitl) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
          var qq = window["qq"];
          qq.aly && qq.hasOwnProperty("aly") && qq.aly.eventDot(logId.toString(), logDitl.toString());
        }
      }
    };
    cc._RF.pop();
  }, {
    "./redPack/tipsShow": "tipsShow",
    "./task/everyTask": "everyTask",
    "./task/withdrawSuccess": "withdrawSuccess"
  } ],
  ScoreEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "07f78erWjdH66rbTv8zc6C2", "ScoreEffect");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightPoolManger_1 = require("./FightPoolManger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ScoreEffect = function(_super) {
      __extends(ScoreEffect, _super);
      function ScoreEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Particle_1 = null;
        return _this;
      }
      ScoreEffect.prototype.init = function(data) {
        var _this = this;
        this.Particle_1.resetSystem();
        this.scheduleOnce(function() {
          FightPoolManger_1.default.getInstance().putScoreEffect(_this.node);
        }, .6);
      };
      ScoreEffect.prototype.start = function() {};
      __decorate([ property(cc.ParticleSystem) ], ScoreEffect.prototype, "Particle_1", void 0);
      ScoreEffect = __decorate([ ccclass ], ScoreEffect);
      return ScoreEffect;
    }(cc.Component);
    exports.default = ScoreEffect;
    cc._RF.pop();
  }, {
    "./FightPoolManger": "FightPoolManger"
  } ],
  Score: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5bf8drFS3VCn5R2TjiL+LbZ", "Score");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightConst_1 = require("./FightConst");
    var FightPoolManger_1 = require("./FightPoolManger");
    var FightManger_1 = require("./FightManger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Score = function(_super) {
      __extends(Score, _super);
      function Score() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.data = null;
        return _this;
      }
      Score.prototype.init = function(data) {
        this.data = data;
        this.label.string = data.Score;
        this.node.scale = 1;
        this.label.node.color = data.Color;
        this.label.node.active = false;
        if (data.Type == FightConst_1.default.Score.SmallType) {
          this.label.fontSize = FightConst_1.default.Score.SmallSize;
          this.smallAni(data.MovePos);
        }
        if (data.Type == FightConst_1.default.Score.BigType) {
          this.label.fontSize = FightConst_1.default.Score.BigSize;
          this.bigAni();
        }
      };
      Score.prototype.addScoreEffect = function() {
        var parentNode = FightManger_1.default.getInstance().ViewFight.MapNode;
        var pos = this.data.MovePos;
        var data = {};
        FightPoolManger_1.default.getInstance().createScoreEffect(parentNode, pos, data);
      };
      Score.prototype.smallAni = function(movePos) {
        var _this = this;
        cc.tween(this.node).delay(this.data.Time).call(function() {
          _this.label.node.active = true;
        }).to(.8, {
          position: movePos,
          scale: .5
        }, {
          easing: "quadOut"
        }).call(function() {
          FightManger_1.default.getInstance().ViewFight.nowScore += _this.data.Score;
          FightManger_1.default.getInstance().ViewFight.setNowTargetLabel();
          _this.addScoreEffect();
          FightPoolManger_1.default.getInstance().putScore(_this.node);
        }).start();
      };
      Score.prototype.bigAni = function() {
        var _this = this;
        var movePos = cc.v2(this.node.x, this.node.y + 150);
        cc.tween(this.node).delay(this.data.Time).call(function() {
          _this.label.node.active = true;
        }).to(.3, {
          position: movePos
        }, {
          easing: "quadOut"
        }).to(.4, {
          scale: .8
        }, {
          easing: "quadOut"
        }).delay(.1).call(function() {
          FightPoolManger_1.default.getInstance().putScore(_this.node);
        }).start();
      };
      Score.prototype.start = function() {};
      __decorate([ property(cc.Label) ], Score.prototype, "label", void 0);
      Score = __decorate([ ccclass ], Score);
      return Score;
    }(cc.Component);
    exports.default = Score;
    cc._RF.pop();
  }, {
    "./FightConst": "FightConst",
    "./FightManger": "FightManger",
    "./FightPoolManger": "FightPoolManger"
  } ],
  SendDataHttp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65d23k0RG9J0JAQmT+oWV0Y", "SendDataHttp");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Https_1 = require("./Https");
    var Const_1 = require("../../game/Const");
    var GameDataManager_1 = require("../Manager/GameDataManager");
    var SendDataHttp = function() {
      function SendDataHttp() {
        this.HttpUrl = Const_1.default.Url.HttpUrl;
      }
      SendDataHttp.getInstance = function() {
        null == this.instance && (this.instance = new SendDataHttp());
        return this.instance;
      };
      SendDataHttp.prototype.getGameQQConfig = function(_callBack) {
        var data = null;
        var url = Const_1.default.Url.QQConfigUrl;
        url = url + "?dt=" + new Date().getTime();
        Https_1.default.getInstance().get(url, _callBack, data);
      };
      SendDataHttp.prototype.sendGetToken = function(equipment, packageName, channel, version, openid, nickname, headimgurl, unionid, city, _callBack) {
        var url = this.HttpUrl + "getScoreToken";
        var data = {
          equipment: equipment,
          package: packageName,
          channel: channel,
          version: version,
          openid: openid,
          nickname: nickname,
          headimgurl: encodeURIComponent(headimgurl),
          unionid: unionid,
          city: city
        };
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.sendGetInfo = function(city, channel, version, _callBack) {
        var url = this.HttpUrl + "getScoreDetail?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = {
          city: city,
          channel: channel,
          version: version
        };
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.sendIsHongBao = function(levle, _callBack) {
        var url = this.HttpUrl + "happy_new_pre?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = {
          point: levle
        };
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.sendGetMoney = function(levle, type, _callBack) {
        var url = this.HttpUrl + "happyGrantBalance?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = {
          point: levle,
          type: type
        };
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.sendGetDrawMoneyList = function(_callBack) {
        var url = this.HttpUrl + "advanceRuleHappy?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = null;
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.binDingWechat = function(openid, nickname, headimgurl, unionid, _callBack) {
        var url = this.HttpUrl + "addWechat2?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = {
          openid: openid,
          nickname: nickname,
          headimgurl: encodeURIComponent(headimgurl),
          unionid: unionid
        };
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.sendDrawMoney = function(exchange_id, _callBack) {
        var url = this.HttpUrl + "advanceHappy?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = {
          exchange_id: exchange_id
        };
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.sendDrawMoneyRecordList = function(_callBack) {
        var url = this.HttpUrl + "happyAdvanceList?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = null;
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.sendPassThrough = function(point, targetScore, targetAddScore, targetTableNum, targetLevel, nowScore, lastScore, _callBack) {
        var url = this.HttpUrl + "happyPassThrough?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = {
          point: point,
          targetScore: targetScore,
          targetAddScore: targetAddScore,
          targetTableNum: targetTableNum,
          targetLevel: targetLevel,
          nowScore: nowScore,
          lastScore: lastScore
        };
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.sendAddProp = function(propType, level, _callBack) {
        var url = this.HttpUrl + "addProp?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = {
          prop_type: propType,
          point: level
        };
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.sendUseProp = function(propType, level, _callBack) {
        var url = this.HttpUrl + "useProp?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = {
          prop_type: propType,
          point: level
        };
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.sendAddInvite = function(invite_id, _callBack) {
        var url = this.HttpUrl + "addInvite?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = {
          invite_id: invite_id
        };
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.sendInviteRed = function(_callBack) {
        var url = this.HttpUrl + "inviteRed?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = null;
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.bindingWechat = function(list, _callBack) {
        var url = this.HttpUrl + "addWechat?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = {
          list: list
        };
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.bindingWechat2 = function(openid, nickname, headimgurl, unionid, _callBack) {
        var url = this.HttpUrl + "addWechat2?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = {
          openid: openid,
          nickname: nickname,
          headimgurl: encodeURIComponent(headimgurl),
          unionid: unionid
        };
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.getGrantStar = function(_callBack) {
        var url = this.HttpUrl + "grantStar?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = null;
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      SendDataHttp.prototype.getMemberRedStar = function(_callBack) {
        var url = this.HttpUrl + "simpleDetail?uid=" + GameDataManager_1.default.getInstance().userData.uid;
        var data = null;
        Https_1.default.getInstance().post(url, _callBack, data);
      };
      return SendDataHttp;
    }();
    exports.default = SendDataHttp;
    cc._RF.pop();
  }, {
    "../../game/Const": "Const",
    "../Manager/GameDataManager": "GameDataManager",
    "./Https": "Https"
  } ],
  ShareAdvType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "043a21oVA5GnIE1aHipL1Uz", "ShareAdvType");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShareAdvType = function() {
      function ShareAdvType() {}
      ShareAdvType.AllAdv = function() {
        for (var index = 1; index <= ShareAdvType.TypeNum; ++index) ShareAdvType.shareAdvShow[index] = 1;
      };
      ShareAdvType.AllShare = function() {
        for (var index = 1; index <= ShareAdvType.TypeNum; ++index) ShareAdvType.shareAdvShow[index] = 0;
      };
      ShareAdvType.TypeNum = 11;
      ShareAdvType.ShareAdvType = {
        none: 0,
        addPropRefrsh: 1,
        addPropHammer: 2,
        addPropIncolor: 3,
        addPropRandom: 4,
        hongBaoInLevelDouble: 5,
        hongBaoPass: 6,
        hongBaoInvite: 7,
        revive: 8,
        guoguanquanping: 9,
        addPropBomb: 10,
        videoBox: 11
      };
      ShareAdvType.shareAdvShow = {
        0: 0,
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1
      };
      ShareAdvType.shareAdvName = {
        0: "\u666e\u901a",
        1: "\u9053\u5177\u5237\u65b0-\u89c6\u9891",
        2: "\u9053\u5177\u9524\u5b50-\u89c6\u9891",
        3: "\u9053\u5177\u6362\u8272-\u89c6\u9891",
        4: "\u9053\u5177\u968f\u673a\u6d88\u9664-\u89c6\u9891",
        5: "\u7ea2\u5305\u5173\u5361\u5185-\u89c6\u9891",
        6: "\u7ea2\u5305\u8fc7\u5173-\u89c6\u9891",
        7: "\u7ea2\u5305\u9080\u8bf7-\u89c6\u9891",
        8: "\u590d\u6d3b-\u89c6\u9891",
        9: "\u8fc7\u5173\u89c6\u9891\uff08\u53ef\u5173\u95ed\uff09",
        10: "\u9053\u5177\u70b8\u5f39-\u89c6\u9891",
        11: "\u89c6\u9891\u5b9d\u7bb1-\u89c6\u9891"
      };
      ShareAdvType.androidName = {
        0: "putong",
        1: "shipin-shuaxin",
        2: "shipin-chuizi",
        3: "shipin-huanse",
        4: "shipin-xiaochu",
        5: "shipin-shuangbei",
        6: "shipin-hongbao-guoguan",
        7: "shipin-hongbao-yaoqing",
        8: "shipin-fuhuo",
        9: "guoguanquanping",
        10: "shipin-zhadan",
        11: "shipin-piaofubaoxiang"
      };
      return ShareAdvType;
    }();
    exports.default = ShareAdvType;
    cc._RF.pop();
  }, {} ],
  TargetCompleteEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b7d43TGpNOvqNkVpHlRdzC", "TargetCompleteEffect");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightPoolManger_1 = require("./FightPoolManger");
    var AudioManager_1 = require("../../core/Manager/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TargetCompleteEffect = function(_super) {
      __extends(TargetCompleteEffect, _super);
      function TargetCompleteEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Particle_1 = null;
        _this.Particle_2 = null;
        _this.Particle_3 = null;
        return _this;
      }
      TargetCompleteEffect.prototype.init = function(data) {
        var _this = this;
        this.scheduleOnce(function() {
          _this.Particle_1.resetSystem();
          _this.Particle_2.resetSystem();
          _this.Particle_3.resetSystem();
          AudioManager_1.default.getInstance().playSound("target_win");
          _this.node.getComponent(cc.Animation).play("TargetCompleteEffect_ani");
        }, .27);
        this.scheduleOnce(function() {
          FightPoolManger_1.default.getInstance().putTargetCompleteEffect(_this.node);
        }, 2.2);
      };
      TargetCompleteEffect.prototype.start = function() {};
      __decorate([ property(cc.ParticleSystem) ], TargetCompleteEffect.prototype, "Particle_1", void 0);
      __decorate([ property(cc.ParticleSystem) ], TargetCompleteEffect.prototype, "Particle_2", void 0);
      __decorate([ property(cc.ParticleSystem) ], TargetCompleteEffect.prototype, "Particle_3", void 0);
      TargetCompleteEffect = __decorate([ ccclass ], TargetCompleteEffect);
      return TargetCompleteEffect;
    }(cc.Component);
    exports.default = TargetCompleteEffect;
    cc._RF.pop();
  }, {
    "../../core/Manager/AudioManager": "AudioManager",
    "./FightPoolManger": "FightPoolManger"
  } ],
  TextEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e6c4oGV5FHc7X5Ldn3GXCA", "TextEffect");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightPoolManger_1 = require("./FightPoolManger");
    var AudioManager_1 = require("../../core/Manager/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TextEffect = function(_super) {
      __extends(TextEffect, _super);
      function TextEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.ani = null;
        _this.ParticleSystem_1 = null;
        _this.ParticleSystem_2 = null;
        _this.spriteFrameTable = [];
        return _this;
      }
      TextEffect.prototype.onLoad = function() {};
      TextEffect.prototype.init = function(data) {
        var _this = this;
        this.node.active = false;
        this.loadSprite(data.Type);
        this.scheduleOnce(function() {
          1 == data.Type ? AudioManager_1.default.getInstance().playSound("good") : 2 == data.Type ? AudioManager_1.default.getInstance().playSound("greate") : AudioManager_1.default.getInstance().playSound("perfect");
          _this.node.active = true;
          _this.ParticleSystem_1.resetSystem();
          _this.ParticleSystem_2.resetSystem();
          _this.ani.play("effect_text");
          _this.setSprite(data);
        }, .3);
      };
      TextEffect.prototype.setSprite = function(data) {
        var _this = this;
        this.sprite.node.scale = 0;
        this.sprite.node.opacity = 255;
        this.sprite.node.setPosition(0, 0);
        cc.tween(this.sprite.node).to(.5, {
          scale: 1
        }).to(.5, {
          position: cc.v2(this.sprite.node.x, this.sprite.node.y + 200),
          opacity: 0
        }).call(function() {
          FightPoolManger_1.default.getInstance().putTextEffect(_this.node);
        }).start();
      };
      TextEffect.prototype.loadSprite = function(Type) {
        this.sprite.spriteFrame = this.spriteFrameTable[Type - 1];
      };
      TextEffect.prototype.start = function() {};
      __decorate([ property(cc.Sprite) ], TextEffect.prototype, "sprite", void 0);
      __decorate([ property(cc.Animation) ], TextEffect.prototype, "ani", void 0);
      __decorate([ property(cc.ParticleSystem) ], TextEffect.prototype, "ParticleSystem_1", void 0);
      __decorate([ property(cc.ParticleSystem) ], TextEffect.prototype, "ParticleSystem_2", void 0);
      __decorate([ property(cc.SpriteFrame) ], TextEffect.prototype, "spriteFrameTable", void 0);
      TextEffect = __decorate([ ccclass ], TextEffect);
      return TextEffect;
    }(cc.Component);
    exports.default = TextEffect;
    cc._RF.pop();
  }, {
    "../../core/Manager/AudioManager": "AudioManager",
    "./FightPoolManger": "FightPoolManger"
  } ],
  TextPopUp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "796d4LErGFK1K+BPTonYOSn", "TextPopUp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var BaseView_1 = require("../../core/View/BaseView");
    var FightManger_1 = require("../fight/FightManger");
    var GameJSB_1 = require("../GameJSB");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TextPopUp = function(_super) {
      __extends(TextPopUp, _super);
      function TextPopUp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.closeLabel = null;
        _this.showLabel = null;
        _this.showText = "";
        return _this;
      }
      TextPopUp.prototype.onLoad = function() {
        this.signRedWinInit();
        this.initShowText();
        GameJSB_1.GameJSB.getAndroidShowAd("2");
      };
      TextPopUp.prototype.start = function() {};
      TextPopUp.prototype.update = function(dt) {};
      TextPopUp.prototype.initShowText = function() {
        this.showText = FightManger_1.default.getInstance().ViewFight.showText;
        console.log(this.showText);
        this.showLabel.string = this.showText;
      };
      TextPopUp.prototype.signRedWinInit = function() {
        var _this = this;
        this.closeBtn.active = false;
        var i = 3;
        this.schedule(function() {
          if (0 === i) {
            _this.closeLabel.enabled = false;
            _this.closeBtn.active = true;
          }
          _this.closeLabel.string = i-- + "";
        }, 1, 3, 0);
      };
      TextPopUp.prototype.clickClose = function() {
        ViewManager_1.default.getInstance().CloseView("TextPopUp");
        GameJSB_1.GameJSB.getAndroidDismissAd();
      };
      __decorate([ property(cc.Node) ], TextPopUp.prototype, "closeBtn", void 0);
      __decorate([ property(cc.Label) ], TextPopUp.prototype, "closeLabel", void 0);
      __decorate([ property(cc.Label) ], TextPopUp.prototype, "showLabel", void 0);
      TextPopUp = __decorate([ ccclass ], TextPopUp);
      return TextPopUp;
    }(BaseView_1.default);
    exports.default = TextPopUp;
    cc._RF.pop();
  }, {
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/View/BaseView": "BaseView",
    "../GameJSB": "GameJSB",
    "../fight/FightManger": "FightManger"
  } ],
  UserData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48f0fd1sm1JNrV1ZiIZL7Rl", "UserData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameDataManager_1 = require("../Manager/GameDataManager");
    var FightConst_1 = require("../../game/fight/FightConst");
    var UserData = function() {
      function UserData() {
        this.lastCleanTime = Date.now();
        this.map = null;
        this.level = 1;
        this.nowScore = 0;
        this.lastScore = 0;
        this.targetScore = 0;
        this.targetAddScore = 0;
        this.targetTableNum = 0;
        this.targetLevel = 0;
        this.propRefrsh = 1;
        this.propHammer = 1;
        this.propIncolor = 1;
        this.propRandom = 1;
        this.propBomb = 1;
        this.money = 0;
        this.name = "";
        this.guideId = 0;
        this.invitationNum = "";
        this.invitationHttp = "";
        this.loginToken = null;
        this.uid = 0;
        this.isUseRefresh = false;
      }
      UserData.prototype.copy = function(data) {
        data.lastCleanTime && (this.lastCleanTime = data.lastCleanTime);
        data.map && (this.map = data.map);
        data.level && (this.level = data.level);
        data.nowScore && (this.nowScore = data.nowScore);
        data.lastScore && (this.lastScore = data.lastScore);
        data.targetScore && (this.targetScore = data.targetScore);
        data.targetAddScore && (this.targetAddScore = data.targetAddScore);
        data.lastScore && (this.targetTableNum = data.targetTableNum);
        data.targetLevel && (this.targetLevel = data.targetLevel);
        data.propRefrsh && (this.propRefrsh = data.propRefrsh);
        data.propHammer && (this.propHammer = data.propHammer);
        data.propIncolor && (this.propIncolor = data.propIncolor);
        data.propRandom && (this.propRandom = data.propRandom);
        data.propBomb && (this.propBomb = data.propBomb);
        data.money && (this.money = data.money);
        data.name && (this.name = data.name);
        data.guideId && (this.guideId = data.guideId);
        data.invitationNum && (this.invitationNum = data.invitationNum);
        data.invitationHttp && (this.invitationHttp = data.invitationHttp);
        data.loginToken && (this.loginToken = data.loginToken);
        data.uid && (this.uid = data.uid);
        data.isUseRefresh && (this.isUseRefresh = data.isUseRefresh);
      };
      UserData.prototype.clearData = function() {
        this.lastCleanTime = Date.now();
      };
      UserData.prototype.nextDayClean = function() {
        var now = Date.now();
        var todayZero = new Date();
        todayZero.setHours(0);
        todayZero.setMinutes(0);
        todayZero.setSeconds(0);
        if (this.lastCleanTime < todayZero.getTime()) {
          this.lastCleanTime = now;
          GameDataManager_1.default.getInstance().saveUserData();
        }
      };
      UserData.prototype.setTargetScore = function(targetScore) {
        this.targetScore = targetScore;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setTargetAddScore = function(targetAddScore) {
        this.targetAddScore = targetAddScore;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setTargetTableNum = function(targetTableNum) {
        this.targetTableNum = targetTableNum;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setTargetLevel = function(level) {
        this.targetLevel = level;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setPropRefrsh = function(propRefrsh) {
        this.propRefrsh = propRefrsh;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setPropHammer = function(propHammer) {
        this.propHammer = propHammer;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setPropIncolor = function(propIncolor) {
        this.propIncolor = propIncolor;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setPropRandom = function(propRandom) {
        this.propRandom = propRandom;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setPropBomb = function(propBomb) {
        this.propBomb = propBomb;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setLoginToken = function(loginToken) {
        this.loginToken = loginToken;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setUid = function(uid) {
        this.uid = uid;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.getTargetScore = function() {
        this.targetScore = FightConst_1.default.TargetScoreTotal * this.level + 100 * Math.floor(this.level / 10);
        return this.targetScore;
      };
      UserData.prototype.setGuideId = function(_guideId) {
        if (this.guideId >= _guideId) return false;
        this.guideId = _guideId;
        GameDataManager_1.default.getInstance().saveUserData();
        return true;
      };
      UserData.prototype.setLevel = function(level) {
        this.level = level;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setMoney = function(money) {
        this.money = money;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setName = function(name, isBool) {
        if ("" == this.name || isBool) {
          this.name = name;
          GameDataManager_1.default.getInstance().saveUserData();
        }
      };
      UserData.prototype.setInvitationNum = function(invitationNum, isBool) {
        if ("" == this.invitationNum || isBool) {
          this.invitationNum = invitationNum;
          GameDataManager_1.default.getInstance().saveUserData();
        }
      };
      UserData.prototype.setInvitationHttp = function(invitationHttp) {
        this.invitationHttp = invitationHttp;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setNowScore = function(nowScore) {
        this.nowScore = nowScore;
      };
      UserData.prototype.setLastScore = function() {
        this.lastScore = this.nowScore;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setMap = function(x, y, id, isBool) {
        this.map[x][y] = id;
        isBool && GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.setMapNull = function() {
        this.map = null;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      UserData.prototype.getIsWin = function() {
        if (this.nowScore >= this.targetScore) return true;
        return false;
      };
      UserData.prototype.checkMapIs0 = function() {
        for (var x = 0; x < FightConst_1.default.FightNum.rowNum; x++) for (var y = 0; y < FightConst_1.default.FightNum.rowNum; y++) if (0 != this.map[x][y]) return false;
        return true;
      };
      UserData.prototype.setIsUseRefresh = function(isUseRefresh) {
        this.isUseRefresh = isUseRefresh;
        GameDataManager_1.default.getInstance().saveUserData();
      };
      return UserData;
    }();
    exports.default = UserData;
    cc._RF.pop();
  }, {
    "../../game/fight/FightConst": "FightConst",
    "../Manager/GameDataManager": "GameDataManager"
  } ],
  UserLocalData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "42d5ayhcKZJeYeTYGe9AGAX", "UserLocalData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameDataManager_1 = require("../Manager/GameDataManager");
    var AudioManager_1 = require("../Manager/AudioManager");
    var UserLocalData = function() {
      function UserLocalData() {
        this.openid = "";
        this.musicVolume = .7;
        this.soundVolume = .7;
        this.isMusicOn = true;
        this.registeredTime = 0;
      }
      UserLocalData.prototype.copy = function(data) {
        data.openid && (this.openid = data.openid);
        (data.musicVolume || 0 == data.musicVolume) && (this.musicVolume = data.musicVolume);
        (data.soundVolume || 0 == data.soundVolume) && (this.soundVolume = data.soundVolume);
        (false == data.isMusicOn || data.isMusicOn) && (this.isMusicOn = data.isMusicOn);
        data.registeredTime && (this.registeredTime = data.registeredTime);
      };
      UserLocalData.prototype.setOpenId = function(openid) {
        if (!this.openid) {
          this.openid = openid;
          GameDataManager_1.default.getInstance().saveUserLocalData();
        }
      };
      UserLocalData.prototype.setMusicVolume = function(value) {
        this.musicVolume = value;
        GameDataManager_1.default.getInstance().saveUserLocalData();
      };
      UserLocalData.prototype.setSoundVolume = function(value) {
        this.soundVolume = value;
        GameDataManager_1.default.getInstance().saveUserLocalData();
      };
      UserLocalData.prototype.setMusicOn = function(_bool) {
        if (_bool) {
          this.musicVolume = .7;
          this.soundVolume = .7;
        } else {
          this.musicVolume = 0;
          this.soundVolume = 0;
        }
        AudioManager_1.default.getInstance().setMusicVolume(this.musicVolume);
        AudioManager_1.default.getInstance().setSoundVolume(this.soundVolume);
        this.isMusicOn = _bool;
        GameDataManager_1.default.getInstance().saveUserLocalData();
      };
      UserLocalData.prototype.setRegisteredTime = function(registeredTime) {
        if (!this.registeredTime) {
          this.registeredTime = registeredTime;
          GameDataManager_1.default.getInstance().saveUserLocalData();
        }
      };
      return UserLocalData;
    }();
    exports.default = UserLocalData;
    cc._RF.pop();
  }, {
    "../Manager/AudioManager": "AudioManager",
    "../Manager/GameDataManager": "GameDataManager"
  } ],
  VideoBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e662UTjYZB7LBasbSULMxq", "VideoBox");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FightPoolManger_1 = require("./FightPoolManger");
    var FightManger_1 = require("./FightManger");
    var ShareAdvType_1 = require("../../core/platform/ShareAdvType");
    var AdaptarManager_1 = require("../../core/Manager/AdaptarManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var VideoBox = function(_super) {
      __extends(VideoBox, _super);
      function VideoBox() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.LevelTime = 0;
        return _this;
      }
      VideoBox.prototype.onLoad = function() {};
      VideoBox.prototype.start = function() {};
      VideoBox.prototype.init = function(data) {
        this.node.zIndex = 999;
        this.LevelTime = 0;
        this.playAni();
      };
      VideoBox.prototype.playAni = function() {
        this.node.getComponent(cc.Animation).play();
        var pos_1 = cc.v2(this.node.position);
        var pos_2 = cc.v2(AdaptarManager_1.default.getInstance().fullWidth / 2 - 150, 0);
        var pos_3 = cc.v2(this.node.x, -AdaptarManager_1.default.getInstance().fullHeight / 6);
        var pos_4 = cc.v2(-AdaptarManager_1.default.getInstance().fullWidth / 2 + 150, 0);
        var time = 5;
        var tween = cc.tween().to(time, {
          position: pos_2
        }).to(time, {
          position: pos_3
        }).to(time, {
          position: pos_4
        }).to(time, {
          position: pos_3
        }).to(time, {
          position: pos_2
        }).to(time, {
          position: pos_3
        }).to(time, {
          position: pos_4
        }).to(time, {
          position: pos_3
        }).to(time, {
          position: pos_2
        }).to(time, {
          position: pos_1
        }).to(time, {
          position: pos_4
        }).to(time, {
          position: pos_1
        });
        tween.clone(this.node).repeatForever().start();
      };
      VideoBox.prototype.onclick = function() {
        var type = ShareAdvType_1.default.ShareAdvType.videoBox;
        FightManger_1.default.getInstance().onVideoBoxAdv(type);
        this.putNode();
      };
      VideoBox.prototype.putNode = function() {
        this.node.getComponent(cc.Animation).stop();
        this.node.stopAllActions();
        FightManger_1.default.getInstance().VideoBox = null;
        FightPoolManger_1.default.getInstance().putVideoBox(this.node);
      };
      VideoBox = __decorate([ ccclass ], VideoBox);
      return VideoBox;
    }(cc.Component);
    exports.default = VideoBox;
    cc._RF.pop();
  }, {
    "../../core/Manager/AdaptarManager": "AdaptarManager",
    "../../core/platform/ShareAdvType": "ShareAdvType",
    "./FightManger": "FightManger",
    "./FightPoolManger": "FightPoolManger"
  } ],
  ViewFail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "09a11+vRrhGy6YUuTq+36/d", "ViewFail");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseView_1 = require("../../core/View/BaseView");
    var AdaptarManager_1 = require("../../core/Manager/AdaptarManager");
    var FightManger_1 = require("../fight/FightManger");
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var AudioManager_1 = require("../../core/Manager/AudioManager");
    var PlatformManger_1 = require("../../core/platform/PlatformManger");
    var ShareAdvType_1 = require("../../core/platform/ShareAdvType");
    var Const_1 = require("../Const");
    var QQPlaform_1 = require("../../core/platform/QQPlaform");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ViewFail = function(_super) {
      __extends(ViewFail, _super);
      function ViewFail() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnRevive = null;
        _this.btnRestart = null;
        return _this;
      }
      ViewFail.prototype.onLoad = function() {
        PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.guoguanshibai.eventID, Const_1.default.AndroidEvent.guoguanshibai.eventName);
        this.btnRevive.on("click", this.onRevive, this);
        this.btnRestart.on("click", this.onRestart, this);
        this.setBgSize();
        QQPlaform_1.default.getInstance().qqShowJimuAd(true);
        AudioManager_1.default.getInstance().playSound("fail");
        PlatformManger_1.default.getInstance().showBanner(true);
        var pos = this.btnRestart.parent.convertToWorldSpaceAR(this.btnRestart.position);
        PlatformManger_1.default.getInstance().showBigVideo(pos.y - 40, 545);
      };
      ViewFail.prototype.setBgSize = function() {
        var bg = this.node.getChildByName("bg");
        bg.height = AdaptarManager_1.default.getInstance().fullHeight;
        bg.width = AdaptarManager_1.default.getInstance().fullWidth;
      };
      ViewFail.prototype.init = function(data) {};
      ViewFail.prototype.onAdv = function(_type) {
        PlatformManger_1.default.getInstance().showVideo(_type, {
          type: _type,
          success: function() {
            this.advSuccess();
          }.bind(this),
          fail: function() {}.bind(this),
          noVideo: function() {}.bind(this)
        });
      };
      ViewFail.prototype.advSuccess = function() {
        this.closeUI();
        FightManger_1.default.getInstance().failRevive();
      };
      ViewFail.prototype.onRevive = function() {
        AudioManager_1.default.getInstance().playSound("button");
        PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.shipin_fuhuo.eventID, Const_1.default.AndroidEvent.shipin_fuhuo.eventName);
        PlatformManger_1.default.getInstance().hideBigVideo();
        var type = ShareAdvType_1.default.ShareAdvType.revive;
        this.onAdv(type);
      };
      ViewFail.prototype.onRestart = function() {
        AudioManager_1.default.getInstance().playSound("button");
        PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.chongxinshiwan.eventID, Const_1.default.AndroidEvent.chongxinshiwan.eventName);
        this.closeUI();
        FightManger_1.default.getInstance().failViewRestart();
      };
      ViewFail.prototype.closeUI = function() {
        PlatformManger_1.default.getInstance().showBanner(true);
        QQPlaform_1.default.getInstance().qqShowJimuAd(false);
        PlatformManger_1.default.getInstance().hideBigVideo();
        ViewManager_1.default.getInstance().CloseView("ViewFail");
      };
      ViewFail.prototype.start = function() {};
      __decorate([ property(cc.Node) ], ViewFail.prototype, "btnRevive", void 0);
      __decorate([ property(cc.Node) ], ViewFail.prototype, "btnRestart", void 0);
      ViewFail = __decorate([ ccclass ], ViewFail);
      return ViewFail;
    }(BaseView_1.default);
    exports.default = ViewFail;
    cc._RF.pop();
  }, {
    "../../core/Manager/AdaptarManager": "AdaptarManager",
    "../../core/Manager/AudioManager": "AudioManager",
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/View/BaseView": "BaseView",
    "../../core/platform/PlatformManger": "PlatformManger",
    "../../core/platform/QQPlaform": "QQPlaform",
    "../../core/platform/ShareAdvType": "ShareAdvType",
    "../Const": "Const",
    "../fight/FightManger": "FightManger"
  } ],
  ViewFight: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5406ctfGDBPZqeUzo06EDq2", "ViewFight");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseView_1 = require("../../core/View/BaseView");
    var FightManger_1 = require("../fight/FightManger");
    var EventManager_1 = require("../../core/Manager/EventManager");
    var AudioManager_1 = require("../../core/Manager/AudioManager");
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var AdaptarManager_1 = require("../../core/Manager/AdaptarManager");
    var FunUtils_1 = require("../../core/Util/FunUtils");
    var GameDataManager_1 = require("../../core/Manager/GameDataManager");
    var FightConst_1 = require("../fight/FightConst");
    var ShareAdvType_1 = require("../../core/platform/ShareAdvType");
    var FightPoolManger_1 = require("../fight/FightPoolManger");
    var Guide_1 = require("../Guide");
    var PlatformManger_1 = require("../../core/platform/PlatformManger");
    var Const_1 = require("../Const");
    var QQPlaform_1 = require("../../core/platform/QQPlaform");
    var GameJSB_1 = require("../GameJSB");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ViewFight = function(_super) {
      __extends(ViewFight, _super);
      function ViewFight() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.MapNode = null;
        _this.ViewTop = null;
        _this.ViewBottom = null;
        _this.ViewCenter = null;
        _this.nodeMove = null;
        _this.TargetPro = null;
        _this.LevelTarget = null;
        _this.propBombTip = null;
        _this.hongbaoAni = null;
        _this.hongbaoIcon = null;
        _this.zhuanpanNum = null;
        _this.hongbaoType = "";
        _this.isWangZhuan = true;
        _this.isTouchBtn = false;
        _this.nowScore = 0;
        _this.timeCallback = null;
        _this.timingRedPacketCallback = null;
        _this.isIconDisPlay = true;
        _this.iconTime = 8;
        _this.angleStr = "";
        _this.luckRewardType = null;
        _this.luckRewardLabel = null;
        _this.rewardname = "";
        _this.showText = "";
        _this.todayText = null;
        _this.banbenhaoclicknum = null;
        _this.hongbaocunqianguan = null;
        return _this;
      }
      ViewFight.prototype.onLoad = function() {
        this.banbenhaoclicknum = 0;
        this.MapNode.zIndex = 1;
        ViewManager_1.default.getInstance().CloseView("ViewLogin");
        AdaptarManager_1.default.getInstance().adapterFightUIBottom(this.ViewBottom);
        AdaptarManager_1.default.getInstance().adapterFightUITop(this.ViewTop);
        FightManger_1.default.getInstance().initData(this);
        this.setLevleTarget(false);
        this.adapterFightBg();
        this.initAllBtn();
        this.initLabel();
        this.setTargetPro(0);
        this.refreshRefrshLabel();
        this.refreshHammerLabel();
        this.refreshIncolorLabel();
        this.refreshRandomLabel();
        this.refreshBombLabel();
        this.setNowTargetLabel();
        this.propBombTip.active = false;
        AudioManager_1.default.getInstance().playMusic("bg");
        this.showQQView();
        this.isFirstLoading();
        this.activeState(cc.find("ViewTop/dongtaiIcon/liuxing/liuxing", this.node));
        GameJSB_1.GameJSB.initWindowApi();
        this.initJSB();
      };
      ViewFight.prototype.start = function() {};
      ViewFight.prototype.initJSB = function() {
        var getvideodata = {
          code: 0,
          cctype: "getvideodata",
          data: {
            videostatus: 2,
            videoticktime: 1e4
          },
          message: "\u6210\u529f\uff01"
        };
        var configs = {
          code: 0,
          cctype: "configs",
          data: {
            playdevide: 2,
            gettablenum: 1e4,
            lasetablenum: 30,
            first: 1,
            quickrednum: "2,4",
            quickredicetime: 10
          },
          message: "\u6210\u529f\uff01"
        };
        var dayprizedata = {
          code: 0,
          cctype: "dayprizedata",
          data: {
            uservideolast: 20,
            dayvideonum: 20,
            dayprizedata: [ {
              money: 100,
              progress: 15.55,
              cashstate: 0
            }, {
              money: 200,
              progress: 25.55,
              cashstate: 0
            }, {
              money: 300,
              progress: 35.55,
              cashstate: 1
            }, {
              money: 400,
              progress: 45.55,
              cashstate: 1
            }, {
              money: 500,
              progress: 55.55,
              cashstate: 1
            }, {
              money: 800,
              progress: 65.55,
              cashstate: 1
            } ]
          },
          message: "\u6210\u529f\uff01"
        };
        GameJSB_1.GameJSB.getAndroidData("/register/getUserInfo", "", "UserInfo");
        GameJSB_1.GameJSB.getAndroidData("/config/configs", "", "configs");
        GameJSB_1.GameJSB.getAndroidData("/userReward/getvideodata", "", "getvideodata");
      };
      ViewFight.prototype.isFirstLoading = function() {
        var str = cc.sys.os.toLocaleLowerCase();
        "ios" === str ? FightManger_1.default.getInstance().GameModel = "iphone" : "android" === str ? FightManger_1.default.getInstance().GameModel = "android" : "windows" === str && (FightManger_1.default.getInstance().GameModel = "web");
      };
      ViewFight.prototype.wangZhuanIconDisPlay = function() {
        if (this.isWangZhuan) {
          this.ViewTop.getChildByName("hongbaoHome").active = true;
          this.ViewTop.getChildByName("dongtaiIcon").getChildByName("gift").active = true;
          this.ViewTop.getChildByName("dongtaiIcon").getChildByName("pig").active = true;
          this.ViewBottom.getChildByName("iconBottom").active = true;
        } else {
          this.ViewTop.getChildByName("hongbaoHome").active = false;
          this.ViewTop.getChildByName("dongtaiIcon").getChildByName("gift").active = false;
          this.ViewTop.getChildByName("dongtaiIcon").getChildByName("pig").active = false;
          this.ViewBottom.getChildByName("iconBottom").active = false;
        }
      };
      ViewFight.prototype.clickbanbenhao = function(e) {
        this.banbenhaoclicknum >= 10 && (e.target.opacity = 255);
        this.banbenhaoclicknum++;
      };
      ViewFight.prototype.activeState = function(node) {
        if ("liuxing" == node.name) {
          var doing = cc.tween().by(1, {
            y: -10
          }).by(1, {
            y: 20
          }).by(1, {
            y: -10
          }).to(1, {
            scale: 1
          }).to(1, {
            scale: .8
          }).to(1, {
            scale: 1
          }).to(1, {
            scale: .8
          });
          cc.tween(node).repeatForever(doing).start();
        } else if ("giftOpen" == node.name) {
          var doing = cc.tween().to(.5, {
            angle: 10
          }).to(.5, {
            angle: -10
          }).to(.5, {
            angle: 10
          }).to(.5, {
            angle: -10
          });
          cc.tween(node).repeatForever(doing).start();
        } else if ("giftClose" == node.name) {
          var doing = cc.tween().to(.5, {
            angle: 10
          }).to(.5, {
            angle: -10
          }).to(.5, {
            angle: 10
          }).to(.5, {
            angle: -10
          });
          cc.tween(node).repeatForever(doing).start();
        }
      };
      ViewFight.prototype.clickGoldPig = function() {
        FightManger_1.default.getInstance().Status = 2;
        ViewManager_1.default.getInstance().ShowView("hongBaoCunQianGuan");
      };
      ViewFight.prototype.clickWithdrawPage = function() {
        GameJSB_1.GameJSB.getAndroidWithdrawPage();
      };
      ViewFight.prototype.clickUserHeadPortrait = function() {
        GameJSB_1.GameJSB.getAndroidShowUserInfo();
      };
      ViewFight.prototype.clickRotation = function() {
        1 == FightManger_1.default.getInstance().Status && ViewManager_1.default.getInstance().ShowView("zhuanpan");
      };
      ViewFight.prototype.clickPropBomb = function() {
        1 == FightManger_1.default.getInstance().Status && ViewManager_1.default.getInstance().ShowView("proppop");
      };
      ViewFight.prototype.clickEveryDayReward = function() {
        ViewManager_1.default.getInstance().ShowView("EveryDayReward");
        FightManger_1.default.getInstance().Status = 2;
      };
      ViewFight.prototype.clickLevelReward = function() {
        1 == FightManger_1.default.getInstance().Status && (FightManger_1.default.getInstance().Status = 2);
        ViewManager_1.default.getInstance().ShowView("LevelUpReward");
      };
      ViewFight.prototype.showQQView = function() {};
      ViewFight.prototype.lelUpLightAni = function() {
        var light = cc.find("usertouxiang/LVboard/light", this.ViewTop);
        light.active = true;
        cc.tween(light).repeatForever(cc.tween().to(3.6, {
          angle: 360
        }).call(function() {
          return light.angle = 0;
        })).start();
        this.scheduleOnce(function() {
          light.active = false;
        }, 5);
      };
      ViewFight.prototype.adapterFightBg = function() {
        var bg = this.node.getChildByName("bg");
        bg.width = AdaptarManager_1.default.getInstance().fullWidth;
        bg.height = AdaptarManager_1.default.getInstance().fullHeight;
      };
      ViewFight.prototype.setLevleTarget = function(isBool) {
        this.LevelTarget.active = isBool;
      };
      ViewFight.prototype.initLabel = function() {
        var score_scale_label = this.ViewBottom.getChildByName("score_scale_label").getComponent(cc.Label);
        score_scale_label.node.active = false;
        var level_1 = this.ViewCenter.getChildByName("level_label").getComponent(cc.Label);
        var target_2 = this.ViewCenter.getChildByName("target_label").getComponent(cc.Label);
        level_1.node.setPosition(cc.v2(650, 30));
        target_2.node.setPosition(cc.v2(-650, -30));
      };
      ViewFight.prototype.setTopLevelTargetLabel = function() {
        var level = this.ViewTop.getChildByName("level_label").getComponent(cc.Label);
        var target = this.ViewTop.getChildByName("target_label").getComponent(cc.Label);
        level.string = FunUtils_1.default.format("{1}", GameDataManager_1.default.getInstance().userData.level);
        target.string = FunUtils_1.default.format("{1}", GameDataManager_1.default.getInstance().userData.getTargetScore());
      };
      ViewFight.prototype.setNowTargetLabel = function() {
        0 == this.nowScore && (this.nowScore = GameDataManager_1.default.getInstance().userData.nowScore);
        0 == GameDataManager_1.default.getInstance().userData.nowScore && (this.nowScore = GameDataManager_1.default.getInstance().userData.nowScore);
        var target = this.nodeMove.getChildByName("nowtarget_label").getComponent(cc.Label);
        target.string = FunUtils_1.default.format("{1}/{2}", this.nowScore, GameDataManager_1.default.getInstance().userData.getTargetScore());
        var lastScore = GameDataManager_1.default.getInstance().userData.lastScore;
        var progress = (this.nowScore - lastScore) / (GameDataManager_1.default.getInstance().userData.getTargetScore() - lastScore);
        progress >= 1 && (progress = 1);
        this.setTargetPro(progress);
      };
      ViewFight.prototype.setTargetFinish = function() {
        var _this = this;
        var progress = GameDataManager_1.default.getInstance().userData.nowScore / GameDataManager_1.default.getInstance().userData.getTargetScore();
        if (progress >= 1 && !this.LevelTarget.active) {
          this.scheduleOnce(function() {
            _this.setLevleTarget(true);
          }, .5);
          FightManger_1.default.getInstance().addTargetCompleteEffectt();
          return true;
        }
        return false;
      };
      ViewFight.prototype.setTargetPro = function(progress) {
        this.TargetPro.progress = progress;
      };
      ViewFight.prototype.getNowTargetScorePos = function() {
        var target = this.nodeMove.getChildByName("nowtarget_label");
        var pos = target.parent.convertToWorldSpaceAR(target.position);
        var pos2 = this.MapNode.convertToNodeSpaceAR(pos);
        return pos2;
      };
      ViewFight.prototype.getPropRandomPos = function() {
        var target = this.ViewBottom.getChildByName("btn_random");
        var pos = target.parent.convertToWorldSpaceAR(target.position);
        var pos2 = this.MapNode.convertToNodeSpaceAR(pos);
        return pos2;
      };
      ViewFight.prototype.setScoreScale = function(num, score) {
        var label = this.ViewBottom.getChildByName("score_scale_label").getComponent(cc.Label);
        label.node.active = true;
        label.node.stopAllActions();
        label.node.scale = .1;
        label.string = FunUtils_1.default.format("{1}\u8fde\u6d88{2}", num, score);
        cc.tween(label.node).to(.5, {
          scale: 1.1
        }, {
          easing: "quadOut"
        }).delay(.5).call(function() {
          label.node.active = false;
        }).start();
      };
      ViewFight.prototype.setLevelTargetLabel = function() {
        var level = this.ViewCenter.getChildByName("level_label").getComponent(cc.Label);
        var target = this.ViewCenter.getChildByName("target_label").getComponent(cc.Label);
        level.string = FunUtils_1.default.format("\u5173\u5361:{1}", GameDataManager_1.default.getInstance().userData.level);
        target.string = FunUtils_1.default.format("\u76ee\u6807\u5206\u6570:{1}", GameDataManager_1.default.getInstance().userData.getTargetScore());
      };
      ViewFight.prototype.gameStartAni = function() {
        this.setLevelTargetLabel();
        this.setTopLevelTargetLabel();
        this.setNowTargetLabel();
        FightManger_1.default.getInstance().addParticleParticleFireworks();
        var level = this.ViewCenter.getChildByName("level_label").getComponent(cc.Label);
        var target = this.ViewCenter.getChildByName("target_label").getComponent(cc.Label);
        level.node.setPosition(cc.v2(650, 30));
        target.node.setPosition(cc.v2(-650, -30));
        this.ViewCenter.active = true;
        cc.tween(target.node).to(1, {
          position: cc.v3(0, -30)
        }, {
          easing: "sineOut"
        }).delay(.5).to(1, {
          position: cc.v3(-650, -30)
        }, {
          easing: "quadIn"
        }).call(function() {
          level.node.setPosition(cc.v2(650, 30));
          target.node.setPosition(cc.v2(-650, -30));
          FightManger_1.default.getInstance().gameStart(true);
        }).start();
        cc.tween(level.node).to(1, {
          position: cc.v3(0, 30)
        }, {
          easing: "sineOut"
        }).delay(.5).to(1, {
          position: cc.v3(650, 30)
        }, {
          easing: "quadIn"
        }).start();
      };
      ViewFight.prototype.refreshRefrshLabel = function() {
        var label = this.ViewBottom.getChildByName("btn_refrsh").getChildByName("label").getComponent(cc.Label);
        label.string = FunUtils_1.default.format("{1}", GameDataManager_1.default.getInstance().userData.propRefrsh);
      };
      ViewFight.prototype.refreshHammerLabel = function() {
        var label = this.ViewBottom.getChildByName("btn_hammer").getChildByName("label").getComponent(cc.Label);
        label.string = FunUtils_1.default.format("{1}", GameDataManager_1.default.getInstance().userData.propHammer);
      };
      ViewFight.prototype.refreshIncolorLabel = function() {
        var label = this.ViewBottom.getChildByName("btn_incolor").getChildByName("label").getComponent(cc.Label);
        label.string = FunUtils_1.default.format("{1}", GameDataManager_1.default.getInstance().userData.propIncolor);
      };
      ViewFight.prototype.refreshRandomLabel = function() {
        var label = this.ViewBottom.getChildByName("btn_random").getChildByName("label").getComponent(cc.Label);
        label.string = FunUtils_1.default.format("{1}", GameDataManager_1.default.getInstance().userData.propRandom);
      };
      ViewFight.prototype.refreshBombLabel = function() {
        var label = this.ViewBottom.getChildByName("btn_bomb").getChildByName("label").getComponent(cc.Label);
        label.string = FunUtils_1.default.format("{1}", GameDataManager_1.default.getInstance().userData.propBomb);
      };
      ViewFight.prototype.btnAllCallBanck = function(event, name) {
        if (this.isTouchBtn) return;
        Guide_1.default.getInstance().closwGuid(Guide_1.GuideIds.gamePrompt);
        Guide_1.default.getInstance().closwGuid(Guide_1.GuideIds.hongBaoPrompt);
        this.isTouchBtn = true;
        AudioManager_1.default.getInstance().playSound("button");
        if ("btn_refrsh" == name) {
          PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.shuaxin.eventID, Const_1.default.AndroidEvent.shuaxin.eventName);
          if (0 == GameDataManager_1.default.getInstance().userData.propRefrsh) {
            var advType = ShareAdvType_1.default.ShareAdvType.addPropRefrsh;
            ViewManager_1.default.getInstance().ShowView("ViewGetProp", {
              AdvType: advType
            });
          } else FightManger_1.default.getInstance().onRefreshProp(false);
          this.isTouchBtn = false;
        } else if ("btn_hammer" == name) {
          PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.chuizi.eventID, Const_1.default.AndroidEvent.chuizi.eventName);
          if (FightManger_1.default.getInstance().Status == FightConst_1.default.GameStatus.HammerStatus) {
            FightManger_1.default.getInstance().Status = FightConst_1.default.GameStatus.StartGame;
            FightPoolManger_1.default.getInstance().putHammerAni(FightManger_1.default.getInstance().HammerAniNode);
            this.isTouchBtn = false;
            return;
          }
          if (FightManger_1.default.getInstance().Status != FightConst_1.default.GameStatus.StartGame) {
            this.isTouchBtn = false;
            return;
          }
          if (0 == GameDataManager_1.default.getInstance().userData.propHammer) {
            var advType = ShareAdvType_1.default.ShareAdvType.addPropHammer;
            ViewManager_1.default.getInstance().ShowView("ViewGetProp", {
              AdvType: advType
            });
          } else FightManger_1.default.getInstance().onHammerProp();
          this.isTouchBtn = false;
        } else if ("btn_incolor" == name) {
          PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.huanse.eventID, Const_1.default.AndroidEvent.huanse.eventName);
          if (FightManger_1.default.getInstance().Status == FightConst_1.default.GameStatus.IncolorStatus) {
            FightManger_1.default.getInstance().Status = FightConst_1.default.GameStatus.StartGame;
            FightManger_1.default.getInstance().closeInColorProp(false);
            this.isTouchBtn = false;
            return;
          }
          if (0 == GameDataManager_1.default.getInstance().userData.propIncolor) {
            var advType = ShareAdvType_1.default.ShareAdvType.addPropIncolor;
            ViewManager_1.default.getInstance().ShowView("ViewGetProp", {
              AdvType: advType
            });
          } else FightManger_1.default.getInstance().onInColorProp();
          this.isTouchBtn = false;
        } else if ("btn_random" == name) {
          PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.xiaochu.eventID, Const_1.default.AndroidEvent.xiaochu.eventName);
          if (0 == GameDataManager_1.default.getInstance().userData.propRandom) {
            var advType = ShareAdvType_1.default.ShareAdvType.addPropRandom;
            ViewManager_1.default.getInstance().ShowView("ViewGetProp", {
              AdvType: advType
            });
          } else FightManger_1.default.getInstance().onRandomProp();
          this.isTouchBtn = false;
        } else if ("btn_bomb" == name) {
          PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.zhadan.eventID, Const_1.default.AndroidEvent.zhadan.eventName);
          if (FightManger_1.default.getInstance().Status == FightConst_1.default.GameStatus.BombStatus) {
            FightManger_1.default.getInstance().Status = FightConst_1.default.GameStatus.StartGame;
            this.propBombTip.active = false;
            this.isTouchBtn = false;
            return;
          }
          if (0 == GameDataManager_1.default.getInstance().userData.propBomb) {
            var advType = ShareAdvType_1.default.ShareAdvType.addPropBomb;
            ViewManager_1.default.getInstance().ShowView("ViewGetProp", {
              AdvType: advType
            });
          } else FightManger_1.default.getInstance().onPropBomb();
          this.isTouchBtn = false;
        } else if ("btn_gdyx" == name) {
          QQPlaform_1.default.getInstance().showAppBox(true);
          this.isTouchBtn = false;
        }
      };
      ViewFight.prototype.initAllBtn = function() {
        var self = this;
        var btnHander = function(btnNode, name) {
          EventManager_1.default.getInstance().addBtnEvent(btnNode, self.node, "ViewFight", "btnAllCallBanck", name);
        };
        btnHander(this.ViewBottom.getChildByName("btn_refrsh"), "btn_refrsh");
        btnHander(this.ViewBottom.getChildByName("btn_hammer"), "btn_hammer");
        btnHander(this.ViewBottom.getChildByName("btn_incolor"), "btn_incolor");
        btnHander(this.ViewBottom.getChildByName("btn_random"), "btn_random");
        btnHander(this.ViewBottom.getChildByName("btn_bomb"), "btn_bomb");
        btnHander(this.ViewBottom.getChildByName("btn_gdyx"), "btn_gdyx");
      };
      ViewFight.prototype.playRefrshAction = function() {
        var node = this.ViewBottom.getChildByName("btn_refrsh");
        var level = GameDataManager_1.default.getInstance().userData.level;
        node.stopAllActions();
        if (GameDataManager_1.default.getInstance().userData.isUseRefresh || level < 6) return;
        var tween = cc.tween().delay(0).to(FightConst_1.default.FightNum.hintAnimationSpeed, {
          scale: .9
        }).to(FightConst_1.default.FightNum.hintAnimationSpeed, {
          scale: 1
        }).to(FightConst_1.default.FightNum.hintAnimationSpeed, {
          scale: .9
        }).to(FightConst_1.default.FightNum.hintAnimationSpeed, {
          scale: 1
        });
        tween.clone(node).repeatForever().start();
      };
      ViewFight.prototype.update = function(dt) {
        var _this = this;
        if (1 == FightManger_1.default.getInstance().Status && this.isIconDisPlay && this.isWangZhuan) {
          this.isIconDisPlay = false;
          var listenIcon = setTimeout(function() {
            var node = cc.instantiate(_this.hongbaoIcon);
            node.setParent(_this.node.getChildByName("ViewBottom"));
            var num = FightConst_1.default.FightNum.rowNum;
            var sortTablePos = [];
            for (var row = 0; row < num; row++) for (var vertical = 0; vertical < num; vertical++) FightManger_1.default.getInstance().Map[row][vertical] && sortTablePos.push(FightManger_1.default.getInstance().Map[row][vertical].Data.Pos);
            var iconPosNum = Math.round(Math.random() * (sortTablePos.length - 1));
            sortTablePos[iconPosNum] && node.setPosition(sortTablePos[iconPosNum].x, sortTablePos[iconPosNum].y + 350);
          }, 1e3 * this.iconTime);
        }
      };
      __decorate([ property(cc.Node) ], ViewFight.prototype, "MapNode", void 0);
      __decorate([ property(cc.Node) ], ViewFight.prototype, "ViewTop", void 0);
      __decorate([ property(cc.Node) ], ViewFight.prototype, "ViewBottom", void 0);
      __decorate([ property(cc.Node) ], ViewFight.prototype, "ViewCenter", void 0);
      __decorate([ property(cc.Node) ], ViewFight.prototype, "nodeMove", void 0);
      __decorate([ property(cc.ProgressBar) ], ViewFight.prototype, "TargetPro", void 0);
      __decorate([ property(cc.Node) ], ViewFight.prototype, "LevelTarget", void 0);
      __decorate([ property(cc.Node) ], ViewFight.prototype, "propBombTip", void 0);
      __decorate([ property(cc.Prefab) ], ViewFight.prototype, "hongbaoAni", void 0);
      __decorate([ property(cc.Prefab) ], ViewFight.prototype, "hongbaoIcon", void 0);
      ViewFight = __decorate([ ccclass ], ViewFight);
      return ViewFight;
    }(BaseView_1.default);
    exports.default = ViewFight;
    cc._RF.pop();
  }, {
    "../../core/Manager/AdaptarManager": "AdaptarManager",
    "../../core/Manager/AudioManager": "AudioManager",
    "../../core/Manager/EventManager": "EventManager",
    "../../core/Manager/GameDataManager": "GameDataManager",
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/Util/FunUtils": "FunUtils",
    "../../core/View/BaseView": "BaseView",
    "../../core/platform/PlatformManger": "PlatformManger",
    "../../core/platform/QQPlaform": "QQPlaform",
    "../../core/platform/ShareAdvType": "ShareAdvType",
    "../Const": "Const",
    "../GameJSB": "GameJSB",
    "../Guide": "Guide",
    "../fight/FightConst": "FightConst",
    "../fight/FightManger": "FightManger",
    "../fight/FightPoolManger": "FightPoolManger"
  } ],
  ViewGetProp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc595dh0a1Psa+Jv+qPVURx", "ViewGetProp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseView_1 = require("../../core/View/BaseView");
    var AdaptarManager_1 = require("../../core/Manager/AdaptarManager");
    var FightManger_1 = require("../fight/FightManger");
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var GameDataManager_1 = require("../../core/Manager/GameDataManager");
    var FunUtils_1 = require("../../core/Util/FunUtils");
    var ShareAdvType_1 = require("../../core/platform/ShareAdvType");
    var FightConst_1 = require("../fight/FightConst");
    var PlatformManger_1 = require("../../core/platform/PlatformManger");
    var AudioManager_1 = require("../../core/Manager/AudioManager");
    var Const_1 = require("../Const");
    var RedUtil_1 = require("../../../alySDKW/scripts/RedUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ViewGetProp = function(_super) {
      __extends(ViewGetProp, _super);
      function ViewGetProp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnGetProp = null;
        _this.btnClose = null;
        _this.propImg = null;
        _this.label = null;
        _this.tipNode = null;
        _this.propSpritFrame = [];
        _this.data = null;
        return _this;
      }
      ViewGetProp.prototype.onLoad = function() {
        this.btnGetProp.on("click", this.onGetProp, this);
        this.btnClose.on("click", this.onUiClose, this);
        this.setBgSize();
        this.btnClose.active = false;
        this.scheduleOnce(function() {
          this.btnClose.active = true;
        }, 2);
        PlatformManger_1.default.getInstance().showBanner(false);
        var pos = this.btnClose.parent.convertToWorldSpaceAR(this.btnClose.position);
        PlatformManger_1.default.getInstance().showBigVideo(pos.y - 35, 463);
        RedUtil_1.RedUtil.extportData(8e3, 0);
      };
      ViewGetProp.prototype.setBgSize = function() {
        var bg = this.node.getChildByName("bg");
        bg.height = AdaptarManager_1.default.getInstance().fullHeight;
        bg.width = AdaptarManager_1.default.getInstance().fullWidth;
      };
      ViewGetProp.prototype.init = function(data) {
        this.data = data;
        this.tipNode.active = false;
        this.label.node.active = false;
        if (ShareAdvType_1.default.ShareAdvType.addPropRefrsh == data.AdvType) {
          this.label.node.active = true;
          this.label.string = FunUtils_1.default.format("{1}", FightConst_1.default.PropTip.PropRefrsh);
          this.propImg.spriteFrame = this.propSpritFrame[0];
        } else if (ShareAdvType_1.default.ShareAdvType.addPropHammer == data.AdvType) {
          this.label.node.active = true;
          this.label.string = FunUtils_1.default.format("{1}", FightConst_1.default.PropTip.PropHammer);
          this.propImg.spriteFrame = this.propSpritFrame[1];
        } else if (ShareAdvType_1.default.ShareAdvType.addPropIncolor == data.AdvType) {
          this.label.node.active = true;
          this.label.string = FunUtils_1.default.format("{1}", FightConst_1.default.PropTip.PropIncolor);
          this.propImg.spriteFrame = this.propSpritFrame[2];
        } else if (ShareAdvType_1.default.ShareAdvType.addPropRandom == data.AdvType) {
          this.label.node.active = true;
          this.label.string = FunUtils_1.default.format("{1}", FightConst_1.default.PropTip.PropRandom);
          this.propImg.spriteFrame = this.propSpritFrame[3];
        } else if (ShareAdvType_1.default.ShareAdvType.addPropBomb == data.AdvType) {
          this.label.string = FunUtils_1.default.format("{1}", FightConst_1.default.PropTip.PropBomb);
          this.label.node.active = false;
          this.propImg.spriteFrame = this.propSpritFrame[4];
          this.tipNode.active = true;
        }
      };
      ViewGetProp.prototype.onAdv = function(_type) {
        PlatformManger_1.default.getInstance().showVideo(_type, {
          type: _type,
          success: function() {
            this.advSuccess(_type);
          }.bind(this),
          fail: function() {}.bind(this),
          noVideo: function() {}.bind(this)
        });
      };
      ViewGetProp.prototype.advSuccess = function(_type) {
        RedUtil_1.RedUtil.extportData(8001, 0);
        ShareAdvType_1.default.ShareAdvType.addPropRefrsh == _type ? this.httpGetProp(3, _type) : ShareAdvType_1.default.ShareAdvType.addPropHammer == _type ? this.httpGetProp(4, _type) : ShareAdvType_1.default.ShareAdvType.addPropIncolor == _type ? this.httpGetProp(2, _type) : ShareAdvType_1.default.ShareAdvType.addPropRandom == _type ? this.httpGetProp(1, _type) : ShareAdvType_1.default.ShareAdvType.addPropBomb == _type && this.httpGetProp(5, _type);
      };
      ViewGetProp.prototype.httpGetProp = function(type, _type) {
        this.refreshProp(_type, FightConst_1.default.VideoPropNum);
      };
      ViewGetProp.prototype.refreshProp = function(_type, num) {
        if (ShareAdvType_1.default.ShareAdvType.addPropRefrsh == _type) {
          GameDataManager_1.default.getInstance().userData.setPropRefrsh(num);
          FightManger_1.default.getInstance().ViewFight.refreshRefrshLabel();
        } else if (ShareAdvType_1.default.ShareAdvType.addPropHammer == _type) {
          GameDataManager_1.default.getInstance().userData.setPropHammer(num);
          FightManger_1.default.getInstance().ViewFight.refreshHammerLabel();
        } else if (ShareAdvType_1.default.ShareAdvType.addPropIncolor == _type) {
          GameDataManager_1.default.getInstance().userData.setPropIncolor(num);
          FightManger_1.default.getInstance().ViewFight.refreshIncolorLabel();
        } else if (ShareAdvType_1.default.ShareAdvType.addPropRandom == _type) {
          GameDataManager_1.default.getInstance().userData.setPropRandom(num);
          FightManger_1.default.getInstance().ViewFight.refreshRandomLabel();
        } else if (ShareAdvType_1.default.ShareAdvType.addPropBomb == _type) {
          GameDataManager_1.default.getInstance().userData.setPropBomb(num);
          FightManger_1.default.getInstance().ViewFight.refreshBombLabel();
        }
        this.viewClose();
      };
      ViewGetProp.prototype.onGetProp = function() {
        AudioManager_1.default.getInstance().playSound("button");
        ShareAdvType_1.default.ShareAdvType.addPropRefrsh == this.data.AdvType ? PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.shipin_shuaxin.eventID, Const_1.default.AndroidEvent.shipin_shuaxin.eventName) : ShareAdvType_1.default.ShareAdvType.addPropHammer == this.data.AdvType ? PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.shipin_chuizi.eventID, Const_1.default.AndroidEvent.shipin_chuizi.eventName) : ShareAdvType_1.default.ShareAdvType.addPropIncolor == this.data.AdvType ? PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.shipin_huanse.eventID, Const_1.default.AndroidEvent.shipin_huanse.eventName) : ShareAdvType_1.default.ShareAdvType.addPropRandom == this.data.AdvType && PlatformManger_1.default.getInstance().addOnEvent(Const_1.default.AndroidEvent.shipin_xiaochu.eventID, Const_1.default.AndroidEvent.shipin_xiaochu.eventName);
        this.onAdv(this.data.AdvType);
      };
      ViewGetProp.prototype.onUiClose = function() {
        AudioManager_1.default.getInstance().playSound("button");
        this.viewClose();
      };
      ViewGetProp.prototype.viewClose = function() {
        PlatformManger_1.default.getInstance().hideBigVideo();
        PlatformManger_1.default.getInstance().showBanner(true);
        ViewManager_1.default.getInstance().CloseView("ViewGetProp");
      };
      ViewGetProp.prototype.start = function() {};
      __decorate([ property(cc.Node) ], ViewGetProp.prototype, "btnGetProp", void 0);
      __decorate([ property(cc.Node) ], ViewGetProp.prototype, "btnClose", void 0);
      __decorate([ property(cc.Sprite) ], ViewGetProp.prototype, "propImg", void 0);
      __decorate([ property(cc.Label) ], ViewGetProp.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], ViewGetProp.prototype, "tipNode", void 0);
      __decorate([ property(cc.SpriteFrame) ], ViewGetProp.prototype, "propSpritFrame", void 0);
      ViewGetProp = __decorate([ ccclass ], ViewGetProp);
      return ViewGetProp;
    }(BaseView_1.default);
    exports.default = ViewGetProp;
    cc._RF.pop();
  }, {
    "../../../alySDKW/scripts/RedUtil": "RedUtil",
    "../../core/Manager/AdaptarManager": "AdaptarManager",
    "../../core/Manager/AudioManager": "AudioManager",
    "../../core/Manager/GameDataManager": "GameDataManager",
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/Util/FunUtils": "FunUtils",
    "../../core/View/BaseView": "BaseView",
    "../../core/platform/PlatformManger": "PlatformManger",
    "../../core/platform/ShareAdvType": "ShareAdvType",
    "../Const": "Const",
    "../fight/FightConst": "FightConst",
    "../fight/FightManger": "FightManger"
  } ],
  ViewHttpDelay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24ebfJdbOlPHqncwP/+NJKN", "ViewHttpDelay");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AdaptarManager_1 = require("../core/Manager/AdaptarManager");
    var Https_1 = require("../core/Net/Https");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ViewHttpDelay = function(_super) {
      __extends(ViewHttpDelay, _super);
      function ViewHttpDelay() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnRetry = null;
        return _this;
      }
      ViewHttpDelay.prototype.onLoad = function() {
        AdaptarManager_1.default.getInstance().adaptarBg(this.node.getChildByName("bg"));
        this.btnRetry.on("click", this.onRetry, this);
      };
      ViewHttpDelay.prototype.start = function() {};
      ViewHttpDelay.prototype.onRetry = function() {
        this.node.destroy();
        Https_1.default.getInstance().onRetry();
      };
      __decorate([ property(cc.Node) ], ViewHttpDelay.prototype, "btnRetry", void 0);
      ViewHttpDelay = __decorate([ ccclass ], ViewHttpDelay);
      return ViewHttpDelay;
    }(cc.Component);
    exports.default = ViewHttpDelay;
    cc._RF.pop();
  }, {
    "../core/Manager/AdaptarManager": "AdaptarManager",
    "../core/Net/Https": "Https"
  } ],
  ViewLogin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4972fjQNbxAOJiwb9K9SQXi", "ViewLogin");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PlatformManger_1 = require("../../core/platform/PlatformManger");
    var Const_1 = require("../Const");
    var FunUtils_1 = require("../../core/Util/FunUtils");
    var ConfigManager_1 = require("../../core/Manager/ConfigManager");
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var BaseView_1 = require("../../core/View/BaseView");
    var FightPoolManger_1 = require("../fight/FightPoolManger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ViewLogin = function(_super) {
      __extends(ViewLogin, _super);
      function ViewLogin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.progressBar = null;
        _this.label_pro = null;
        _this.labelLoading = null;
        _this.btnLogin = null;
        _this.btnWxLogin = null;
        _this.btnYszc = null;
        _this.btnYhxy = null;
        _this.toggle = null;
        _this.newPro = 0;
        _this.maxPro = 0;
        _this.lastMaxPro = 0;
        _this.updateTime = 0;
        _this.appInfoData = null;
        _this.startLogin = false;
        return _this;
      }
      ViewLogin.prototype.onLoad = function() {
        PlatformManger_1.default.getInstance().platform == Const_1.default.Platform.ios && (this.label_pro.node.active = false);
        this.startLogin = true;
        PlatformManger_1.default.getInstance().showBanner(true);
        this.httpQQConfig();
      };
      ViewLogin.prototype.httpQQConfig = function() {
        this.loadItemBlockPool();
      };
      ViewLogin.prototype.loadItemBlockPool = function() {
        this.refreshLoadInfo(.5, "\u52a0\u8f7d\u9884\u5236\u4f53...");
        var callback = function() {
          this.loadJson();
        }.bind(this);
        FightPoolManger_1.default.getInstance().loadResPrefabArr(callback);
      };
      ViewLogin.prototype.loadJson = function() {
        var _this = this;
        this.refreshLoadInfo(.8, "\u52a0\u8f7dJson...");
        ConfigManager_1.ConfigManager.getInstance().loadAllConfig(function() {
          _this.getoViewFight();
        });
      };
      ViewLogin.prototype.getoViewFight = function() {
        this.refreshLoadInfo(1, "\u8fdb\u5165\u6e38\u620f\u4e2d...");
        ViewManager_1.default.getInstance().ShowView("ViewFight");
      };
      ViewLogin.prototype.updateProgressValue = function() {
        var add = .06;
        this.newPro > this.maxPro && (add = .01);
        this.newPro < this.lastMaxPro && (add = .2);
        var value = this.newPro + add;
        value > 1 && (value = 1);
        this.refreshProgress(value);
      };
      ViewLogin.prototype.refreshProgress = function(value) {
        this.progressBar.progress = value;
        var num = (100 * value).toFixed(0);
        this.label_pro.string = FunUtils_1.default.format("{1}%", num);
        this.newPro = value;
      };
      ViewLogin.prototype.refreshLoadInfo = function(maxPro, tip) {
        this.labelLoading.string = tip;
        this.lastMaxPro = this.maxPro;
        this.maxPro = maxPro;
        PlatformManger_1.default.getInstance().sendLog(tip);
      };
      ViewLogin.prototype.update = function(dt) {
        if (!this.startLogin) return;
        if (this.updateTime < 10) this.updateTime++; else {
          this.updateTime = 0;
          this.updateProgressValue();
        }
      };
      __decorate([ property(cc.ProgressBar) ], ViewLogin.prototype, "progressBar", void 0);
      __decorate([ property(cc.Label) ], ViewLogin.prototype, "label_pro", void 0);
      __decorate([ property(cc.Label) ], ViewLogin.prototype, "labelLoading", void 0);
      __decorate([ property(cc.Node) ], ViewLogin.prototype, "btnLogin", void 0);
      __decorate([ property(cc.Node) ], ViewLogin.prototype, "btnWxLogin", void 0);
      __decorate([ property(cc.Node) ], ViewLogin.prototype, "btnYszc", void 0);
      __decorate([ property(cc.Node) ], ViewLogin.prototype, "btnYhxy", void 0);
      __decorate([ property(cc.Toggle) ], ViewLogin.prototype, "toggle", void 0);
      ViewLogin = __decorate([ ccclass ], ViewLogin);
      return ViewLogin;
    }(BaseView_1.default);
    exports.default = ViewLogin;
    cc._RF.pop();
  }, {
    "../../core/Manager/ConfigManager": "ConfigManager",
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/Util/FunUtils": "FunUtils",
    "../../core/View/BaseView": "BaseView",
    "../../core/platform/PlatformManger": "PlatformManger",
    "../Const": "Const",
    "../fight/FightPoolManger": "FightPoolManger"
  } ],
  ViewManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b13dslQmZPpog99d9/YvEV", "ViewManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ConstView_1 = require("../View/ConstView");
    var BaseView_1 = require("../View/BaseView");
    var LoaderManager_1 = require("./LoaderManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ViewManager = function(_super) {
      __extends(ViewManager, _super);
      function ViewManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.viewNode = null;
        _this.childNode = null;
        _this.popUpNode = null;
        _this.allViewTable = {};
        _this.popUpViewTable = [];
        _this.nowShowViewTable = {};
        _this.allNameTable = {};
        return _this;
      }
      ViewManager_1 = ViewManager;
      ViewManager.getInstance = function() {
        null == this.instance && (this.instance = cc.find(ConstView_1.default.ViewPath.ViewRoot_Name).addComponent(this));
        return this.instance;
      };
      ViewManager.prototype.onLoad = function() {};
      ViewManager.prototype.start = function() {
        this.viewNode = this.node.getChildByName(ConstView_1.default.ViewNode.Veiw_Node);
        this.popUpNode = this.node.getChildByName(ConstView_1.default.ViewNode.PopUp_Node);
      };
      ViewManager.prototype.ShowView = function(viewName, obj) {
        return __awaiter(this, void 0, void 0, function() {
          var viewData, baseView;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this.nameIsShowing(viewName)) {
                cc.log(viewName + "\u7a97\u4f53\u5df2\u7ecf\u5728\u663e\u793a");
                return [ 2 ];
              }
              this.allNameTable[viewName] = viewName;
              viewData = ConstView_1.default.ViewKeyMap[viewName];
              if ("" == viewName || null == viewName) return [ 2 ];
              if (this.viewIsShowing(viewName)) {
                cc.log(viewName + "\u7a97\u4f53\u5df2\u7ecf\u5728\u663e\u793a");
                return [ 2 ];
              }
              return [ 4, this.LoadAllVeiw(viewName) ];

             case 1:
              baseView = _a.sent();
              if (null == baseView) return [ 2 ];
              baseView.ViewName = viewName;
              baseView.VeiwType.IsClearPopUpView = viewData.isCleanPopUpView;
              baseView.VeiwType.View_Type = viewData.type;
              baseView.VeiwType.Veiw_ShowMode = viewData.showMode;
              baseView.VeiwType.IsClearPopUpView && this.ClearPopUpViewTable();
              switch (viewData.showMode) {
               case ConstView_1.default.VeiwShowMode.View:
                this.LoadViewNowCache(viewName, obj);
                break;

               case ConstView_1.default.VeiwShowMode.PopUp:
                this.PushViewToStack(viewName, obj);
              }
              return [ 2 ];
            }
          });
        });
      };
      ViewManager.prototype.CloseView = function(viewName) {
        var viewData = ConstView_1.default.ViewKeyMap[viewName];
        if ("" == viewName || null == viewName) return;
        var baseView = this.allViewTable[viewName];
        if (null == baseView) return;
        switch (viewData.showMode) {
         case ConstView_1.default.VeiwShowMode.View:
          this.ExitView(viewName);
          break;

         case ConstView_1.default.VeiwShowMode.PopUp:
          this.ExitPopVeiw(viewName);
        }
        baseView.CloseAndDestory && LoaderManager_1.default.getInstance().releaseNodeRes(baseView.node);
      };
      ViewManager.prototype.viewIsShowing = function(viewName) {
        var baseView = this.allViewTable[viewName];
        if (null == baseView) return false;
        return baseView.node.active;
      };
      ViewManager.prototype.nameIsShowing = function(viewName) {
        var baseView = this.allNameTable[viewName];
        if (null == baseView) return false;
        return true;
      };
      ViewManager.prototype.LoadAllVeiw = function(viewName) {
        return __awaiter(this, void 0, void 0, function() {
          var baseView;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              baseView = this.allViewTable[viewName];
              if (!(null == baseView)) return [ 3, 2 ];
              return [ 4, this.LoadVeiw(viewName) ];

             case 1:
              baseView = _a.sent();
              _a.label = 2;

             case 2:
              return [ 2, baseView ];
            }
          });
        });
      };
      ViewManager.prototype.LoadVeiw = function(viewName) {
        return __awaiter(this, void 0, void 0, function() {
          var viewData, strViewPath, pre, node, baseView;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              viewData = ConstView_1.default.ViewKeyMap[viewName];
              strViewPath = viewData.src;
              if ("" == strViewPath || null == strViewPath) return [ 2 ];
              return [ 4, LoaderManager_1.default.getInstance().loadRes(strViewPath, cc.Prefab) ];

             case 1:
              pre = _a.sent();
              node = cc.instantiate(pre);
              baseView = node.getComponent(BaseView_1.default);
              if (null == baseView) return [ 2 ];
              node.active = false;
              switch (viewData.type) {
               case ConstView_1.default.ViewType.View:
                ViewManager_1.getInstance().viewNode && ViewManager_1.getInstance().viewNode.addChild(node);
                break;

               case ConstView_1.default.ViewType.PopUp:
                ViewManager_1.getInstance().popUpNode && ViewManager_1.getInstance().popUpNode.addChild(node);
              }
              this.allViewTable[viewName] = baseView;
              return [ 2, baseView ];
            }
          });
        });
      };
      ViewManager.prototype.ClearPopUpViewTable = function() {
        if (this.popUpViewTable.length >= 1) for (var index = this.popUpViewTable.length - 1; index >= 0; index--) {
          var element = this.popUpViewTable[index];
          for (var key in this.allViewTable) if (element == this.allViewTable[key]) {
            this.RemoveAllViewTable(key);
            break;
          }
          element.Clsose();
        }
        this.popUpViewTable = [];
      };
      ViewManager.prototype.LoadViewNowCache = function(viewName, obj) {
        var baseView = null;
        var baseViewFromAllCache = null;
        baseView = this.nowShowViewTable[viewName];
        if (null != baseView) return;
        baseViewFromAllCache = this.allViewTable[viewName];
        if (null != baseViewFromAllCache) {
          baseViewFromAllCache.init(obj);
          this.nowShowViewTable[viewName] = baseViewFromAllCache;
          baseViewFromAllCache.showBaseView();
        }
      };
      ViewManager.prototype.PushViewToStack = function(viewName, obj) {
        if (this.popUpViewTable.length > 0) {
          var topView = this.popUpViewTable[this.popUpViewTable.length - 1];
          topView.hidePopUpView();
        }
        var baseView = this.allViewTable[viewName];
        if (null == baseView) return;
        baseView.init(obj);
        this.popUpViewTable.push(baseView);
        baseView.node.zIndex = this.popUpViewTable.length;
        baseView.showBaseView();
      };
      ViewManager.prototype.ExitView = function(viewName) {
        var baseView = this.allViewTable[viewName];
        if (null == baseView) return;
        baseView.Clsose();
        this.nowShowViewTable[viewName] = null;
        delete this.nowShowViewTable[viewName];
        this.RemoveAllViewTable(viewName);
      };
      ViewManager.prototype.ExitPopVeiw = function(viewName) {
        if (this.popUpViewTable.length >= 2) {
          var topView = this.popUpViewTable.pop();
          topView.Clsose();
          topView = this.popUpViewTable[this.popUpViewTable.length - 1];
          topView.showPopUpView();
        } else if (this.popUpViewTable.length >= 1) {
          var topView = this.popUpViewTable.pop();
          topView.Clsose();
        }
        this.RemoveAllViewTable(viewName);
      };
      ViewManager.prototype.RemoveAllViewTable = function(viewName) {
        this.allViewTable[viewName] = null;
        delete this.allViewTable[viewName];
        this.allNameTable[viewName] = null;
        delete this.allNameTable[viewName];
      };
      var ViewManager_1;
      ViewManager = ViewManager_1 = __decorate([ ccclass ], ViewManager);
      return ViewManager;
    }(cc.Component);
    exports.default = ViewManager;
    cc._RF.pop();
  }, {
    "../View/BaseView": "BaseView",
    "../View/ConstView": "ConstView",
    "./LoaderManager": "LoaderManager"
  } ],
  ViewRegain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc98cdQcVpBs7llde7+kkYK", "ViewRegain");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseView_1 = require("../../core/View/BaseView");
    var AdaptarManager_1 = require("../../core/Manager/AdaptarManager");
    var FightManger_1 = require("../fight/FightManger");
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var GameDataManager_1 = require("../../core/Manager/GameDataManager");
    var FunUtils_1 = require("../../core/Util/FunUtils");
    var AudioManager_1 = require("../../core/Manager/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ViewRegain = function(_super) {
      __extends(ViewRegain, _super);
      function ViewRegain() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnContinue = null;
        _this.btnRestart = null;
        _this.btnMusic = null;
        _this.label = null;
        return _this;
      }
      ViewRegain.prototype.onLoad = function() {
        this.btnContinue.on("click", this.onContinue, this);
        this.btnRestart.on("click", this.onRestart, this);
        this.btnMusic.on("click", this.onMusic, this);
        this.setBgSize();
        this.refreshMusic();
      };
      ViewRegain.prototype.setBgSize = function() {
        var bg = this.node.getChildByName("bg");
        bg.height = AdaptarManager_1.default.getInstance().fullHeight;
        bg.width = AdaptarManager_1.default.getInstance().fullWidth;
      };
      ViewRegain.prototype.init = function(data) {
        this.getMapIs0() ? this.label.string = FunUtils_1.default.format("\u4e0a\u6b21\u6e38\u620f\u83b7\u5f97\u4e86{1}\u5206\uff0c\u662f\u5426\u7ee7\u7eed\u6e38\u620f\uff1f", GameDataManager_1.default.getInstance().userData.lastScore) : this.label.string = FunUtils_1.default.format("\u4e0a\u6b21\u6e38\u620f\u83b7\u5f97\u4e86{1}\u5206\uff0c\u662f\u5426\u7ee7\u7eed\u6e38\u620f\uff1f", GameDataManager_1.default.getInstance().userData.nowScore);
      };
      ViewRegain.prototype.onMusic = function() {
        AudioManager_1.default.getInstance().playSound("button");
        GameDataManager_1.default.getInstance().userLocalData.isMusicOn ? GameDataManager_1.default.getInstance().userLocalData.setMusicOn(false) : GameDataManager_1.default.getInstance().userLocalData.setMusicOn(true);
        this.refreshMusic();
      };
      ViewRegain.prototype.refreshMusic = function() {
        var on = this.btnMusic.getChildByName("on");
        var off = this.btnMusic.getChildByName("off");
        if (GameDataManager_1.default.getInstance().userLocalData.isMusicOn) {
          on.active = true;
          off.active = false;
        } else {
          on.active = false;
          off.active = true;
        }
      };
      ViewRegain.prototype.getMapIs0 = function() {
        return GameDataManager_1.default.getInstance().userData.checkMapIs0();
      };
      ViewRegain.prototype.onContinue = function() {
        AudioManager_1.default.getInstance().playSound("button");
        ViewManager_1.default.getInstance().CloseView("ViewRegain");
        this.getMapIs0() ? FightManger_1.default.getInstance().failRestart() : FightManger_1.default.getInstance().regainContinue();
      };
      ViewRegain.prototype.onRestart = function() {
        AudioManager_1.default.getInstance().playSound("button");
        ViewManager_1.default.getInstance().CloseView("ViewRegain");
        FightManger_1.default.getInstance().failRestart();
      };
      ViewRegain.prototype.start = function() {};
      __decorate([ property(cc.Node) ], ViewRegain.prototype, "btnContinue", void 0);
      __decorate([ property(cc.Node) ], ViewRegain.prototype, "btnRestart", void 0);
      __decorate([ property(cc.Node) ], ViewRegain.prototype, "btnMusic", void 0);
      __decorate([ property(cc.Label) ], ViewRegain.prototype, "label", void 0);
      ViewRegain = __decorate([ ccclass ], ViewRegain);
      return ViewRegain;
    }(BaseView_1.default);
    exports.default = ViewRegain;
    cc._RF.pop();
  }, {
    "../../core/Manager/AdaptarManager": "AdaptarManager",
    "../../core/Manager/AudioManager": "AudioManager",
    "../../core/Manager/GameDataManager": "GameDataManager",
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/Util/FunUtils": "FunUtils",
    "../../core/View/BaseView": "BaseView",
    "../fight/FightManger": "FightManger"
  } ],
  ViewScrollviewPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "857faw2o7xFWqJh1dNoBtO+", "ViewScrollviewPool");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ViewScrollviewPool = function() {
      function ViewScrollviewPool() {
        this.SpacingNum = 10;
        this.scrollview = null;
        this.contentNode = null;
        this.itemPre = null;
        this.dataList = null;
        this.itemCallBack = null;
        this.initCreateItemNum = 0;
        this.ItemWidth = 0;
        this.ItemHeight = 0;
        this.ContentY = 0;
        this.ViewWidth = 0;
        this.ViewHeight = 0;
        this.RowNum = 0;
        this.itemNodeList = [];
        this.itemMap = {};
      }
      ViewScrollviewPool.prototype.initView = function(ItemWidth, ItemHeight, ContentY, ViewWidth, ViewHeight, RowNum, initCreateItemNum, SpacingNum) {
        cc.log("===initView=====");
        this.ItemWidth = ItemWidth;
        this.ItemHeight = ItemHeight + SpacingNum;
        this.ContentY = ContentY;
        this.ViewWidth = ViewWidth;
        this.ViewHeight = ViewHeight;
        this.RowNum = RowNum;
        this.initCreateItemNum = initCreateItemNum;
        this.SpacingNum = SpacingNum;
      };
      ViewScrollviewPool.prototype.initPoolScrollview = function(scrollview, contentNode, itemPre, dataList, itemCallBack) {
        this.scrollview = scrollview;
        this.contentNode = contentNode;
        this.itemPre = itemPre;
        this.dataList = dataList;
        this.itemCallBack = itemCallBack;
        var num = this.initCreateItemNum;
        this.dataList.length <= this.initCreateItemNum && (num = this.dataList.length);
        for (var i = 0; i < num; ++i) this.createItemNode();
        this.scrollview.node.on("scrolling", this.callback, this);
        this.contentNode.setContentSize(this.ViewWidth, this.getContenHeight());
        this.contentNode.setPosition(cc.v2(0, this.ContentY));
        this.refreshItem();
      };
      ViewScrollviewPool.prototype.callback = function(event) {
        var scrollview = event.detail;
        this.refreshItem();
      };
      ViewScrollviewPool.prototype.refreshItem = function() {
        var minItemIndex = Math.floor((this.contentNode.position.y - this.ContentY) / this.ItemHeight);
        var maxItemIndex = Math.ceil((this.contentNode.position.y + this.ViewHeight - this.ContentY) / this.ItemHeight);
        for (var index = 0; index < this.dataList.length; index++) if (index >= minItemIndex * this.RowNum && index <= maxItemIndex * this.RowNum) {
          var item = this.itemMap[index];
          null != item || this.addItem(index);
        } else {
          var item = this.itemMap[index];
          null != item && this.itemRemove(index, item);
        }
      };
      ViewScrollviewPool.prototype.itemRemove = function(index, item) {
        this.itemMap[index] = null;
        delete this.itemMap[index];
        item.active = false;
        this.itemNodeList.push(item);
      };
      ViewScrollviewPool.prototype.addItem = function(index) {
        var itemData = this.getItemData(index);
        var objItem = null;
        this.itemNodeList.length <= 0 && this.createItemNode();
        objItem = this.itemNodeList.pop();
        objItem.active = true;
        var line = index % this.RowNum;
        var row = Math.floor(index / this.RowNum);
        objItem.x = line * this.ItemWidth - this.ViewWidth / 2 + this.ItemWidth / 2;
        objItem.y = -row * this.ItemHeight - this.ItemHeight / 2;
        this.itemMap[index] = objItem;
        this.itemCallBack(objItem, itemData, index);
      };
      ViewScrollviewPool.prototype.createItemNode = function() {
        console.log("=====create========");
        var obj = cc.instantiate(this.itemPre);
        obj.active = false;
        this.contentNode.addChild(obj);
        this.itemNodeList.push(obj);
      };
      ViewScrollviewPool.prototype.getContenHeight = function() {
        var rowNum = Math.ceil(this.dataList.length / this.RowNum);
        var contentHeight = rowNum * this.ItemHeight;
        contentHeight <= this.ViewHeight + this.SpacingNum && (contentHeight = this.ViewHeight + this.SpacingNum);
        return contentHeight;
      };
      ViewScrollviewPool.prototype.getItemData = function(index) {
        return this.dataList[index];
      };
      ViewScrollviewPool = __decorate([ ccclass ], ViewScrollviewPool);
      return ViewScrollviewPool;
    }();
    exports.default = ViewScrollviewPool;
    cc._RF.pop();
  }, {} ],
  WXUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86352jdghlJ9rVXs+NBPTJh", "WXUtils");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var wxApiJs = require("./wxApiJs");
    var FunUtils_1 = require("../Util/FunUtils");
    var GameDataManager_1 = require("../Manager/GameDataManager");
    var ShareAdvType_1 = require("./ShareAdvType");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WXUtils = function() {
      function WXUtils() {
        this.wx = null;
        this.appId = "wx0963d563bf9fb2aa";
        this.shareCallBack = null;
        this.shareStartTime = 0;
        this.shareUrls = [ "https://h5game.99aly.com/5agamewx/alywx/htkj/wx/zhaocha/shareImg/img_1/01.png", "https://h5game.99aly.com/5agamewx/alywx/htkj/wx/zhaocha/shareImg/img_1/02.png", "https://h5game.99aly.com/5agamewx/alywx/htkj/wx/zhaocha/shareImg/img_1/03.png", "https://h5game.99aly.com/5agamewx/alywx/htkj/wx/zhaocha/shareImg/img_1/04.png", "https://h5game.99aly.com/5agamewx/alywx/htkj/wx/zhaocha/shareImg/img_1/05.png" ];
        this.shareTitles = [ "\u4f60\u80fd\u627e\u51fa3\u5904\u4e0d\u540c\u5417\uff1f", "\u4f60\u80fd\u627e\u51fa\u4e8c\u5f20\u56fe\u7247\u7684\u4e0d\u540c\u5417\uff1f", "\u4f60\u80fd\u627e\u51fa3\u5904\u4e0d\u540c\u5417\uff1f", "\u4f60\u80fd\u627e\u51fa3\u5904\u4e0d\u540c\u5417\uff1f", "\u4f60\u80fd\u627e\u51fa\u4e8c\u5f20\u56fe\u7247\u7684\u4e0d\u540c\u5417\uff1f" ];
        this.invite_channel = 0;
        this.invite_uid = 0;
        this.invite_type = 0;
        this.isVideoLoading = false;
        this.isShowVideo = true;
        this.isVideoCached = false;
        this.videoCallBack = null;
        this.videoAdv = null;
        this.videoIds = {
          ad1: "adunit-015ebafaf9fb2b69"
        };
        this.FeedbackButton = null;
        this.bannerAds = "adunit-12054c7da2ea8db3";
      }
      WXUtils_1 = WXUtils;
      WXUtils.getInstance = function() {
        null == WXUtils_1.instance && (WXUtils_1.instance = new WXUtils_1());
        return WXUtils_1.instance;
      };
      WXUtils.prototype.init = function() {
        this.wx = wxApiJs.getWx();
        this.registerEvent();
        this.onGameLaunch();
        this.cacheVideo();
        this.loadVideo(false);
      };
      WXUtils.prototype.onGameLaunch = function() {
        var lanData = this.wx.getLaunchOptionsSync();
        console.log(lanData);
        if (lanData) {
          var query = lanData.query;
          this.initInvite(query);
        }
      };
      WXUtils.prototype.initInvite = function(query) {
        if (query && query.channel && query.uid && query.act) {
          var channel = parseInt(query.channel);
          var uid = parseInt(query.uid);
          var act = parseInt(query.act);
          if (channel == WXUtils_1.InviteChannel.self && uid && act) {
            this.invite_channel = channel;
            this.invite_uid = uid;
            this.invite_type = act;
            console.log("BIReport.getInstance().sharedIn = uid : " + uid + " | act : " + act);
            var picIndex = parseInt(query.picIndex);
            picIndex && console.log("ald sharedIn = uid : " + uid + " | picIndex : " + picIndex);
          }
        }
      };
      WXUtils.prototype.registerEvent = function() {
        var _this = this;
        wxApiJs.onShow(function(res) {
          _this.onShareResume(res);
        });
        wxApiJs.onShow(function() {});
      };
      WXUtils.prototype.postMessage = function(_type) {
        if (cc.sys.platform != cc.sys.WECHAT_GAME) return;
        try {
          wxApiJs.postMessage(_type);
        } catch (error) {
          cc.log(error.stack);
        }
      };
      WXUtils.prototype.updataScore = function(name, score) {
        if (cc.sys.platform !== cc.sys.WECHAT_GAME) return;
        try {
          wxApiJs.updataScore(name, score);
        } catch (error) {
          cc.log(error.stack);
        }
      };
      WXUtils.prototype.wxShare = function(type, shareCallBack) {
        this.shareCallBack = shareCallBack;
        this.shareCallBack && (this.shareCallBack.type = type);
        this.shareStartTime = Date.now();
        var titleIndex = Math.floor(Math.random() * this.shareTitles.length);
        titleIndex > this.shareTitles.length - 1 && (titleIndex = this.shareTitles.length - 1);
        var title = this.shareTitles[titleIndex];
        var imageIndex = Math.floor(Math.random() * this.shareUrls.length);
        imageIndex > this.shareUrls.length - 1 && (imageIndex = this.shareUrls.length - 1);
        var image = this.shareUrls[imageIndex];
        var query = this.getShareInfo(type, imageIndex);
        var adName = ShareAdvType_1.default.shareAdvName[type];
        adName || (adName = "???");
      };
      WXUtils.prototype.getShareInfo = function(type, picIndex) {
        return FunUtils_1.default.format("channel={1}&uid={2}&act={3}&picIndex={4}", WXUtils_1.InviteChannel.self, GameDataManager_1.default.getInstance().userLocalData.openid, type, picIndex + 10);
      };
      WXUtils.prototype.onShareResume = function(res) {
        var _this = this;
        if (this.shareCallBack) {
          var type = this.shareCallBack.type;
          var nowTime = Date.now();
          var usedTime = nowTime - this.shareStartTime;
          if (usedTime >= GameDataManager_1.default.getInstance().kaiGuan.shareDelay) {
            this.shareCallBack && this.shareCallBack.success && this.shareCallBack.success(1);
            this.shareCallBack = null;
          } else this.wxShowDialog("\u63d0\u793a", "\u5206\u4eab\u5931\u8d25,\u8bf7\u5c1d\u8bd5\u4e0d\u540c\u7fa4", false, function() {
            _this.wxShare(_this.shareCallBack.type, _this.shareCallBack);
          }, function() {
            _this.shareCallBack && _this.shareCallBack.fail && _this.shareCallBack.fail();
            _this.shareCallBack = null;
          });
        }
      };
      WXUtils.prototype.wxShowDialog = function(title, message, showCancel, success, fail) {
        void 0 === showCancel && (showCancel = false);
        void 0 === success && (success = null);
        void 0 === fail && (fail = null);
        if (!this.wx) return;
        this.wx.showModal({
          title: title,
          content: message,
          cancelText: "\u53d6\u6d88",
          confirmText: "\u53bb\u5206\u4eab",
          success: function(res) {
            if (res.confirm) {
              console.log("\u7528\u6237\u70b9\u51fb\u786e\u5b9a");
              success && success();
            } else if (res.cancel) {
              console.log("\u7528\u6237\u70b9\u51fb\u53d6\u6d88");
              fail && fail();
            }
          }
        });
      };
      WXUtils.prototype.wxShowVideo = function(type, videoCallBack) {
        if (!this.isShowVideo) return;
        this.videoCallBack = videoCallBack;
        console.log("=====this.videoCallBack=======", this.videoCallBack);
        this.isShowVideo = false;
        if (this.isVideoLoading) return;
        this.isVideoLoading = false;
        this.cacheVideo();
        this.isVideoCached ? this.showVideo() : this.loadVideo(true);
        var adName = ShareAdvType_1.default.shareAdvName[type];
        adName || (adName = "???");
      };
      WXUtils.prototype.createVideo = function(videoId) {
        var _this = this;
        this.videoAdv = wxApiJs.createVideo(videoId);
        this.videoAdv.bind_this = this;
        this.videoAdv.onError(function(res) {
          _this.videoError(res);
        });
        this.videoAdv.onClose(function(res) {
          _this.videoSuccess(res);
        });
      };
      WXUtils.prototype.videoError = function(res) {
        console.log("=======videoError======", res);
        this.isShowVideo = true;
        this.isVideoLoading = false;
        this.isVideoCached = false;
        var videoCallBack = this.videoCallBack;
        if (!videoCallBack) return;
        FunUtils_1.default.showTip("\u4eca\u65e5\u5e7f\u544a\u6b21\u6570\u5df2\u770b\u5b8c\uff01\u8bf7\u660e\u65e5\u518d\u8bd5\u3002");
        videoCallBack.noVideo && videoCallBack.noVideo(res);
      };
      WXUtils.prototype.videoSuccess = function(res) {
        console.log("=======videoSuccess======", res);
        this.isShowVideo = true;
        this.isVideoLoading = false;
        this.isVideoCached = false;
        var videoCallBack = this.videoCallBack;
        console.log("=======videoCallBack======", videoCallBack);
        if (!videoCallBack) return;
        if (res && res.isEnded || void 0 == res) {
          videoCallBack.success && videoCallBack.success(2);
          var adName = ShareAdvType_1.default.shareAdvName[videoCallBack.type];
          adName || (adName = "???");
          this.loadVideo(false);
        } else {
          videoCallBack.fail && videoCallBack.fail(res);
          FunUtils_1.default.showTip("\u89c2\u770b\u5b8c\u6574\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6\uff01");
          this.loadVideo(false);
        }
      };
      WXUtils.prototype.cacheVideo = function() {
        if (!this.videoAdv) {
          this.createVideo(this.videoIds.ad1);
          return true;
        }
        return false;
      };
      WXUtils.prototype.showVideo = function() {
        var _this = this;
        this.videoAdv.show().catch(function(err) {
          console.warn(err);
          _this.isShowVideo = true;
          _this.isVideoCached = false;
          FunUtils_1.default.showTip("\u89c6\u9891\u64ad\u653e\u5931\u8d25\uff01\u8bf7\u91cd\u8bd5");
        });
      };
      WXUtils.prototype.loadVideo = function(isShow) {
        var _this = this;
        this.videoAdv.load().then(function() {
          _this.isVideoLoading = false;
          _this.isVideoCached = true;
          isShow && _this.videoAdv.show();
        }).catch(function(err) {
          console.warn(err);
          _this.isShowVideo = true;
          _this.isVideoLoading = false;
        });
      };
      WXUtils.prototype.wxShowBanner = function(isShow) {
        if (isShow && wxApiJs.bannerAd && Date.now() - wxApiJs.showBannerTime > GameDataManager_1.default.getInstance().kaiGuan.bannerRefreshTime) {
          console.log("destory banner");
          wxApiJs.bannerAd.destroy();
          wxApiJs.bannerAd = null;
        }
        wxApiJs.wxShowBanner(isShow, this.bannerAds);
      };
      WXUtils.prototype.navigateToMiniProgram = function(_appid, name, _path, _type) {
        if (cc.sys.platform != cc.sys.WECHAT_GAME) return;
        this.wx.navigateToMiniProgram({
          appId: _appid,
          path: _path,
          success: function(data) {},
          fail: function(data) {}
        });
      };
      WXUtils.prototype.wxlogin = function(param) {
        var self = this;
        this.wx.login({
          success: function(res) {
            param.onLogin(res);
          },
          fail: function(res) {
            param.onLoginFail(res);
          }
        });
      };
      WXUtils.prototype.wxShowConversation = function() {
        if (!this.wx) return;
        this.wx.openCustomerServiceConversation({
          sessionFrom: "setting",
          success: function() {},
          fail: function() {}
        });
      };
      WXUtils.prototype.showFeedbackButton = function(node) {
        if (!this.wx) return;
        if (this.FeedbackButton) this.FeedbackButton.show(); else {
          var winSize = cc.director.getWinSize();
          var frameSize = cc.view.getFrameSize();
          var worldPoint = node.convertToWorldSpaceAR(cc.v2(0, 0));
          var top = winSize.height - worldPoint.y - .5 * node.height;
          var left = worldPoint.x - .5 * node.width;
          var nodeTop = top / winSize.height * frameSize.height;
          var nodeLeft = left / winSize.width * frameSize.width;
          var nodeWidth = node.width / winSize.width * frameSize.width;
          var nodeHeight = node.height / winSize.height * frameSize.height;
          this.FeedbackButton = this.wx.createFeedbackButton({
            type: "image",
            image: "",
            style: {
              left: nodeLeft,
              top: nodeTop,
              width: nodeWidth,
              height: nodeHeight
            }
          });
        }
      };
      WXUtils.prototype.hideFeedbackButton = function() {
        this.FeedbackButton && this.FeedbackButton.hide();
      };
      WXUtils.prototype.showDialog = function() {
        if (!this.wx) return;
        this.wx.showModal({
          title: "\u63d0\u793a",
          content: "\u7d2f\u8ba1\u91d1\u989d\u8fbe\u5230100\u5143\u53ef\u63d0\u73b0",
          cancelText: "\u53d6\u6d88",
          confirmText: "\u786e\u5b9a",
          success: function(res) {
            res.confirm ? console.log("\u7528\u6237\u70b9\u51fb\u786e\u5b9a") : res.cancel && console.log("\u7528\u6237\u70b9\u51fb\u53d6\u6d88");
          }
        });
      };
      var WXUtils_1;
      WXUtils.instance = null;
      WXUtils.InviteChannel = {
        null: 0,
        self: 1
      };
      WXUtils = WXUtils_1 = __decorate([ ccclass ], WXUtils);
      return WXUtils;
    }();
    exports.default = WXUtils;
    cc._RF.pop();
  }, {
    "../Manager/GameDataManager": "GameDataManager",
    "../Util/FunUtils": "FunUtils",
    "./ShareAdvType": "ShareAdvType",
    "./wxApiJs": "wxApiJs"
  } ],
  awardtip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9619d2pT4ZJ+rd+miG01YU2", "awardtip");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedUtil_1 = require("../RedUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var awardtip = function(_super) {
      __extends(awardtip, _super);
      function awardtip() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.v_propStr = null;
        _this.v_closeBtn = null;
        _this.v_icon = null;
        _this.v_takeBtn = null;
        _this.redBg = null;
        return _this;
      }
      awardtip.prototype.onLoad = function() {
        this.redBg = this.node.getChildByName("redBg");
        this.v_closeBtn = this.redBg.getChildByName("v_closeBtn").getComponent(cc.Button);
        this.v_takeBtn = this.redBg.getChildByName("v_takeBtn").getComponent(cc.Button);
        this.v_icon = this.redBg.getChildByName("v_icon").getComponent(cc.Sprite);
        this.v_propStr = this.redBg.getChildByName("v_propStr").getComponent(cc.Label);
      };
      awardtip.prototype.start = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        RedUtil_1.RedUtil.setAction(this.redBg, true, null);
        this.v_closeBtn.node.on("click", this.destroySelf, this);
        this.v_takeBtn.node.on("click", this.destroySelf, this);
      };
      awardtip.prototype.destroySelf = function() {
        var node = this.node;
        RedUtil_1.RedUtil.setAction(this.redBg, false, function() {
          node.destroy();
        });
      };
      awardtip.prototype.getParams = function(parmp) {
        if (parmp) {
          var v_icon_1 = this.v_icon;
          parmp.Icon && cc.loader.loadRes(parmp.Icon, cc.SpriteFrame, function(err, spriteframe) {
            v_icon_1.spriteFrame = spriteframe;
          });
          parmp.Text && (this.v_propStr.string = parmp.Text);
        }
      };
      __decorate([ property(cc.Label) ], awardtip.prototype, "v_propStr", void 0);
      __decorate([ property(cc.Button) ], awardtip.prototype, "v_closeBtn", void 0);
      __decorate([ property(cc.Sprite) ], awardtip.prototype, "v_icon", void 0);
      __decorate([ property(cc.Button) ], awardtip.prototype, "v_takeBtn", void 0);
      __decorate([ property(cc.Node) ], awardtip.prototype, "redBg", void 0);
      awardtip = __decorate([ ccclass ], awardtip);
      return awardtip;
    }(cc.Component);
    exports.default = awardtip;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil"
  } ],
  coreInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc38e9D+x9PmqrZCRDjMnEx", "coreInit");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.coreInit = void 0;
    var GameDataManager_1 = require("./Manager/GameDataManager");
    var AdaptarManager_1 = require("./Manager/AdaptarManager");
    var AudioManager_1 = require("./Manager/AudioManager");
    var DebugHT_1 = require("../game/DebugHT");
    var PlatformManger_1 = require("./platform/PlatformManger");
    var coreInit = function() {
      function coreInit() {}
      coreInit.getInstance = function() {
        null == this.instance && (this.instance = new coreInit());
        return this.instance;
      };
      coreInit.prototype.load = function() {
        GameDataManager_1.default.getInstance().loadAllData();
        PlatformManger_1.default.getInstance().initPlatform();
        AdaptarManager_1.default.getInstance().initVertical();
        AudioManager_1.default.getInstance().init();
        cc.debug.setDisplayStats(DebugHT_1.default.isDebug);
        DebugHT_1.default.isDebug && DebugHT_1.default.Test();
      };
      return coreInit;
    }();
    exports.coreInit = coreInit;
    cc._RF.pop();
  }, {
    "../game/DebugHT": "DebugHT",
    "./Manager/AdaptarManager": "AdaptarManager",
    "./Manager/AudioManager": "AudioManager",
    "./Manager/GameDataManager": "GameDataManager",
    "./platform/PlatformManger": "PlatformManger"
  } ],
  everyRedBtn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bbdfcafsqJB5J+XpA+pe+Bt", "everyRedBtn");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedUtil_1 = require("../RedUtil");
    var mainProfitPage_1 = require("./mainProfitPage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var everyRedBtn = function(_super) {
      __extends(everyRedBtn, _super);
      function everyRedBtn() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.v_money = null;
        _this.v_changetime = null;
        _this._callBack = null;
        _this.v_propTitle = "";
        _this.v_propIcon = "";
        _this.currTime = 0;
        _this.currMonty = 0;
        return _this;
      }
      everyRedBtn.prototype.onLoad = function() {
        this.v_money = this.node.getChildByName("v_money").getComponent(cc.Label);
        this.v_changetime = this.node.getChildByName("v_changetime").getComponent(cc.Label);
      };
      everyRedBtn.prototype.start = function() {
        this.node.on("click", this.openmainProfit, this);
        this.setdefaulttext();
      };
      everyRedBtn.prototype.onDisable = function() {
        RedUtil_1.RedUtil._everyRed = null;
      };
      everyRedBtn.prototype.destroySelf = function() {
        this._callBack && this._callBack.onClosed && this._callBack.onClosed();
        this.node.destroy();
      };
      everyRedBtn.prototype.setdefaulttext = function() {
        var date = new Date();
        var dateStr = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        var yesEveryNum = RedUtil_1.RedUtil.getRandomNumfloat(220, 230, 2);
        var yesEvery = cc.sys.localStorage.getItem("yesterdayEvery");
        if (yesEvery) {
          var yesArr = yesEvery.split(";");
          yesArr instanceof Array && yesArr.length > 1 ? yesArr[0] == dateStr ? yesEveryNum = Number(yesArr[1]) : cc.sys.localStorage.setItem("yesterdayEvery", dateStr + ";" + yesEveryNum) : console.log("yesterdayEvery--error");
        } else cc.sys.localStorage.setItem("yesterdayEvery", dateStr + ";" + yesEveryNum);
        this.v_money.string = yesEveryNum + "\u5143";
        this.v_changetime.string = "\u6bcf\u65e5\u5206\u7ea2";
      };
      everyRedBtn.prototype.changeTime = function(time, money, totalmoney) {
        if (time > 0) {
          var timec = time;
          this.currTime = timec;
          RedUtil_1.RedUtil._everyRedTime = timec;
          var count_1 = Math.floor(timec / 500);
          var inNum_1 = 0;
          var cmoney = money;
          this.currMonty = 0;
          var lastMoney_1 = money;
          var singm_1 = cmoney / count_1;
          var v_money_1 = this.v_money;
          var v_changetime_1 = this.v_changetime;
          this.schedule(function() {
            if (inNum_1 < count_1) {
              inNum_1++;
              this.currMonty += singm_1;
              v_money_1.string = this.currMonty.toFixed(4) + "\u5143";
              this.currTime -= 500;
              v_changetime_1.string = RedUtil_1.RedUtil.getSecondString(this.currTime);
            } else {
              var currM = cc.sys.localStorage.getItem("MoneyNum");
              console.log("currentMOney=============" + money);
              RedUtil_1.RedUtil.everyRedTimeOver(100 * money);
              RedUtil_1.RedUtil._everyRedTime = 0;
              this.currTime = 0;
              this.currMonty = 0;
              v_money_1.string = lastMoney_1.toString() + "\u5143";
              v_changetime_1.string = "\u6bcf\u65e5\u5206\u7ea2";
              this.unscheduleAllCallbacks();
              this.setdefaulttext();
            }
          }, .5);
        }
      };
      everyRedBtn.prototype.openmainProfit = function() {
        var parentNode = cc.director.getScene();
        var parmp = {
          callBack: this._callBack,
          propTitle: this.v_propTitle,
          propIcon: this.v_propIcon
        };
        cc.loader.loadRes("alySDK/alyprofabs/mainprofit", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            parentNode.addChild(newNode);
            newNode.setPosition(parentNode.width / 2, parentNode.height / 2);
            RedUtil_1.RedUtil._mainprofit = newNode;
            if (parmp) {
              var cla = newNode.getComponent(mainProfitPage_1.default);
              cla.getParams(parmp);
            }
          }
        });
      };
      everyRedBtn.prototype.getParams = function(parmp) {
        if (parmp) {
          if (parmp.callBack) {
            this._callBack = parmp.callBack;
            this._callBack && this._callBack.onOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.onOpened);
          }
          parmp.propTitle && "" != parmp.propTitle && (this.v_propTitle = parmp.propTitle);
          parmp.propIcon && "" != parmp.propIcon && (this.v_propIcon = parmp.propIcon);
        }
      };
      __decorate([ property(cc.Label) ], everyRedBtn.prototype, "v_money", void 0);
      __decorate([ property(cc.Label) ], everyRedBtn.prototype, "v_changetime", void 0);
      __decorate([ property ], everyRedBtn.prototype, "_callBack", void 0);
      __decorate([ property ], everyRedBtn.prototype, "v_propTitle", void 0);
      __decorate([ property ], everyRedBtn.prototype, "v_propIcon", void 0);
      __decorate([ property ], everyRedBtn.prototype, "currTime", void 0);
      __decorate([ property ], everyRedBtn.prototype, "currMonty", void 0);
      everyRedBtn = __decorate([ ccclass ], everyRedBtn);
      return everyRedBtn;
    }(cc.Component);
    exports.default = everyRedBtn;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil",
    "./mainProfitPage": "mainProfitPage"
  } ],
  everyTask: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ab30lAasRJe4SXwpqTc5vU", "everyTask");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RedUtil_1 = require("../RedUtil");
    var everyTask = function(_super) {
      __extends(everyTask, _super);
      function everyTask() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.background = null;
        _this.listView = null;
        _this.v_backBtn = null;
        _this.v_myProgre = null;
        _this.v_myNum = null;
        _this.v_tixianBtn = null;
        _this.v_tixianBtnsp = null;
        _this._callBack = null;
        _this._messageCode = null;
        _this._canWithdrawNow = false;
        _this._goCom = 0;
        _this._canget = 1;
        _this._isfinsh = 2;
        _this._gameInfo = [];
        _this.onPrefab = null;
        _this.onPrefab2 = null;
        _this._withdrawIndex = -1;
        _this.cliclTime = -1;
        return _this;
      }
      everyTask.prototype.onLoad = function() {
        this.background = this.node.getChildByName("background");
        this.listView = this.background.getChildByName("listView").getComponent(cc.ScrollView);
        this.v_backBtn = this.listView.content.getChildByName("topDi").getChildByName("v_backBtn").getComponent(cc.Button);
        this.v_myProgre || (this.v_myProgre = this.listView.content.getChildByName("topContentDi").getChildByName("v_myProgre").getComponent(cc.ProgressBar));
        this.v_myNum = this.listView.content.getChildByName("topContentDi").getChildByName("v_myNum").getComponent(cc.Label);
        this.v_tixianBtn = this.listView.content.getChildByName("topContentDi").getChildByName("v_tixianBtn").getComponent(cc.Button);
        this.v_tixianBtnsp = this.listView.content.getChildByName("topContentDi").getChildByName("v_tixianBtnsp");
      };
      everyTask.prototype.start = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        this.background.width = this.node.width;
        this.background.height = this.node.height;
        this.listView.node.height = this.node.height - 30;
        this.listView.node.width = this.node.width;
        var view = this.listView.node.getChildByName("view");
        view.width = this.node.width;
        view.height = this.node.height - 30;
        this.v_backBtn.node.on("click", this.closeClick, this);
        this.v_tixianBtn.node.on("click", this.openWithdraw, this);
        RedUtil_1.RedUtil.eventDispatcher.on("withdrawNowFinsh", this.withdrawNowFinsh);
        this.schedule(function() {
          cc.tween(this.v_tixianBtnsp).to(.6, {
            scaleX: 1.2,
            scaleY: 1.2
          }).to(.6, {
            scaleX: 1,
            scaleY: 1
          }).start();
        }, 1.2);
        RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(9e3, 555);
      };
      everyTask.prototype.refreshMessage = function(messCode, callBack) {
        console.log("refreshMessage============");
        this._messageCode = messCode;
        this.init();
      };
      everyTask.prototype.init = function() {
        console.log("init==============");
        this._gameInfo = [];
        var sourceGameInfo = RedUtil_1.RedUtil.getGameInfo();
        if (sourceGameInfo.length <= 0) {
          console.log("JSON is error");
          return;
        }
        if (this._messageCode && this._messageCode.medal > 0) if (this._messageCode.medal >= 20) {
          this._canWithdrawNow = true;
          this.v_myNum.string = "\u6211\u7684\u52cb\u7ae0\u6570\uff1a20/20";
          this.v_myProgre.progress = 1;
        } else {
          this.v_myNum.string = "\u6211\u7684\u52cb\u7ae0\u6570\uff1a" + this._messageCode.medal + "/20";
          this.v_myProgre.progress = this._messageCode.medal / 20;
        }
        for (var index = 0; index < sourceGameInfo.length; index++) {
          var element = sourceGameInfo[index];
          element.state = 0;
          element.currLength = 0;
          if (this._messageCode && this._messageCode.tasklist.length > 0) for (var j = 0; j < this._messageCode.tasklist.length; j++) {
            var messlist = this._messageCode.tasklist[j];
            if (element.taskId == messlist.TaskId) {
              element.currLength = messlist.Count;
              element.state = messlist.State;
            }
          }
          element.currLength >= element.allLength && element.state != this._isfinsh && (element.state = this._canget);
          this._gameInfo.push(element);
        }
        this.changeList();
        console.log("init------2");
      };
      everyTask.prototype.changeList = function() {
        for (var index = 0; index < this._gameInfo.length; index++) {
          var child = this.listView.content.getChildByName("taskItemlist" + index);
          this.listView.content.removeChild(child);
        }
        this.sortItem();
        var self = this;
        var showList = function(err, obj) {
          self.onPrefab2 = obj;
          var length = self._gameInfo.length;
          var offey = -485;
          var allHeight = 0;
          var _loop_1 = function(index) {
            var ele = self._gameInfo[index];
            var item = null;
            item = ele.allLength > 0 ? cc.instantiate(self.onPrefab2) : cc.instantiate(self.onPrefab);
            item.y = offey + 10;
            offey -= item.height + 10;
            allHeight += item.height + 10;
            item.x = self.listView.content.width / 2;
            item.name = "taskItemlist" + index;
            self.listView.content.addChild(item);
            var v_title = item.getChildByName("v_title").getComponent(cc.Label);
            v_title.string = ele.title;
            var v_downTitle = item.getChildByName("v_downTitle").getComponent(cc.Label);
            v_downTitle.string = ele.litter_title;
            var v_xunNum = item.getChildByName("v_xunNum").getComponent(cc.Label);
            v_xunNum.string = "+" + ele.medal.toString();
            var xunzhang = item.getChildByName("xunzhang");
            var v_complete = item.getChildByName("v_complete").getComponent(cc.Button);
            if (ele.allLength > 0) {
              var gray = item.getChildByName("gray");
              var v_pro = item.getChildByName("v_pro").getComponent(cc.ProgressBar);
              var jinduNum = item.getChildByName("jinduNum").getComponent(cc.Label);
              if (ele.state == self._isfinsh) {
                gray.active = true;
                v_pro.active = false;
                jinduNum.color = new cc.Color(226, 226, 226);
                jinduNum.string = ele.allLength.toString() + "/" + ele.allLength.toString();
              } else {
                var curr = ele.currLength;
                curr > ele.allLength && (curr = ele.allLength);
                var lne = curr / ele.allLength;
                v_pro.progress = lne;
                jinduNum.string = curr.toString() + "/" + ele.allLength.toString();
              }
            }
            if (ele.state == self._isfinsh) {
              cc.loader.loadRes("alySDK/alyUI/haveget", cc.SpriteFrame, function(err, spriteframe) {
                var sprt = v_complete.node.getComponent(cc.Sprite);
                sprt.spriteFrame = spriteframe;
              });
              v_complete.node.y = -80;
              v_xunNum.node.active = false;
              xunzhang.active = false;
            } else if (ele.state == self._canget) {
              console.log("get===0====");
              cc.loader.loadRes("alySDK/alyUI/get", cc.SpriteFrame, function(err, spriteframe) {
                console.log("get====1===");
                var sprt = v_complete.node.getComponent(cc.Sprite);
                sprt.spriteFrame = spriteframe;
              });
            }
            ele.state != self._isfinsh && v_complete.node.on("click", function() {
              self.litterBtnClieck(index.toString());
            }, self);
          };
          for (var index = 0; index < length; index++) _loop_1(index);
          self.listView.content.height = 480 + allHeight;
        };
        RedUtil_1.RedUtil.LoadResource("alySDK/alyprofabs/taskIteml", function(err, prafb) {
          if (prafb) {
            self.onPrefab = prafb;
            RedUtil_1.RedUtil.LoadResource("alySDK/alyprofabs/taskLoItem", showList);
          }
        });
      };
      everyTask.prototype.litterBtnClieck = function(clickIndex) {
        console.log("index===============" + clickIndex);
        var index = Number(clickIndex);
        var ele = this._gameInfo[index];
        this._withdrawIndex = index;
        if (ele.state == this._canget) {
          RedUtil_1.RedUtil.getAwardTask(ele.taskId, ele.medal);
          console.log("ele.medal=====" + ele.medal);
        } else ele.state == this._goCom && (ele.isOpenWithdraw ? this.btnwithdraw() : this.closeClick());
      };
      everyTask.prototype.openWithdraw = function() {
        if (this._canWithdrawNow) {
          if (this.cliclTime > 0) {
            RedUtil_1.RedUtil.opeTips("\u64cd\u4f5c\u592a\u9891\u7e41\u4e86");
            return;
          }
          this.cliclTime = 2;
          var self_1 = this;
          var money_1 = 10;
          RedUtil_1.RedUtil.awardMoney(money_1, {
            SuccessFuc: function(mess) {
              console.log("everyTasd withdraw compelet----------" + JSON.stringify(mess));
              if (0 == mess.code) {
                RedUtil_1.RedUtil.openWithdrawSuccess(money_1 / 100);
                console.log("\u76f4\u63a5\u63d0\u73b0==========" + money_1);
                self_1.withdrawNowFinsh();
              } else RedUtil_1.RedUtil.opeTips("\u63d0\u73b0\u5931\u8d25");
            }
          });
        } else RedUtil_1.RedUtil.opeTips("\u52cb\u7ae0\u4e0d\u8db3");
      };
      everyTask.prototype.btnwithdraw = function() {
        RedUtil_1.RedUtil.requestCount({});
        RedUtil_1.RedUtil._isFirstwithdraw = true;
      };
      everyTask.prototype.closeClick = function() {
        console.log("closeClick======");
        this._callBack && this._callBack.nextClose && this._callBack.nextClose();
        RedUtil_1.RedUtil.eventDispatcher.off("withdrawNowFinsh");
        RedUtil_1.RedUtil._everyTask = null;
        this.node.destroy();
      };
      everyTask.prototype.withdrawNowFinsh = function() {
        console.log("withdrawNowFinsh==========");
        this._canWithdrawNow = false;
        this.v_myNum.string = "\u6211\u7684\u52cb\u7ae0\u6570\uff1a0/20";
        this.v_myProgre.progress = 0;
      };
      everyTask.prototype.changeOneItem = function(taskId) {
        var exitId = 0;
        if (this._gameInfo[this._withdrawIndex].taskId == taskId) exitId = this._gameInfo[this._withdrawIndex].id; else for (var index = 0; index < this._gameInfo.length; index++) {
          var element = this._gameInfo[index];
          element.taskId == taskId && (exitId = this._gameInfo[index].id);
        }
        exitId > 0 && RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(exitId, 55);
        RedUtil_1.RedUtil.requestEveryTask(this._callBack);
      };
      everyTask.prototype.withdrawFinsh = function() {
        RedUtil_1.RedUtil._isFirstwithdraw = false;
        if (this._withdrawIndex > -1) {
          var curr = this._gameInfo[this._withdrawIndex].currLength;
          this._gameInfo[this._withdrawIndex].currLength = curr + 1;
          this._gameInfo[this._withdrawIndex].currLength >= this._gameInfo[this._withdrawIndex].allLength && this._gameInfo[this._withdrawIndex].state != this._isfinsh && (this._gameInfo[this._withdrawIndex].state = this._canget);
        }
        this.changeList();
      };
      everyTask.prototype.sortItem = function() {
        var lingqu = [];
        var daiwancheng = [];
        var yiwangcheng = [];
        for (var index = 0; index < this._gameInfo.length; index++) {
          var element = this._gameInfo[index];
          element.state == this._canget ? lingqu.push(element) : element.state == this._isfinsh ? yiwangcheng.push(element) : daiwancheng.push(element);
        }
        var count = 0;
        for (var i = 0; i < lingqu.length; i++) {
          this._gameInfo[i] = lingqu[i];
          count++;
        }
        for (var i = 0; i < daiwancheng.length; i++) {
          this._gameInfo[count] = daiwancheng[i];
          count++;
        }
        for (var i = 0; i < yiwangcheng.length; i++) {
          this._gameInfo[count] = yiwangcheng[i];
          count++;
        }
      };
      everyTask.prototype.getParams = function(parmp) {
        var _this = this;
        if (parmp) {
          if (parmp.callBack) {
            this._callBack = parmp.callBack;
            this._callBack && this._callBack.nextOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.nextOpened);
          }
          parmp.messageCode && (this._messageCode = parmp.messageCode);
        }
        setTimeout(function() {
          _this.init();
          var self = _this;
          RedUtil_1.RedUtil.taskrequestCount({
            SuccessFuc: function(count) {
              if (count > 0) {
                var taskId = -1;
                if (self._gameInfo[0].isOpenWithdraw && self._gameInfo[0].state != self._isfinsh) {
                  self._gameInfo[0].state = self._canget;
                  taskId = self._gameInfo[0].taskId;
                  self._gameInfo[0].currLength = self._gameInfo[0].allLength;
                } else for (var index = 0; index < self._gameInfo.length; index++) {
                  var element = self._gameInfo[index];
                  if (element.isOpenWithdraw && self._gameInfo[index].state != self._isfinsh) {
                    self._gameInfo[index].state = self._canget;
                    self._gameInfo[index].currLength = self._gameInfo[index].allLength;
                    taskId = self._gameInfo[index].taskId;
                  }
                }
                if (taskId > -1) {
                  RedUtil_1.RedUtil.changeEveryTaskMessage(taskId, 1);
                  self.changeList();
                }
              }
            }
          });
        }, 300);
      };
      everyTask.prototype.update = function(dt) {
        this.cliclTime > 0 && (this.cliclTime -= dt);
      };
      __decorate([ property(cc.Node) ], everyTask.prototype, "background", void 0);
      __decorate([ property(cc.ScrollView) ], everyTask.prototype, "listView", void 0);
      __decorate([ property(cc.Button) ], everyTask.prototype, "v_backBtn", void 0);
      __decorate([ property(cc.ProgressBar) ], everyTask.prototype, "v_myProgre", void 0);
      __decorate([ property(cc.Label) ], everyTask.prototype, "v_myNum", void 0);
      __decorate([ property(cc.Button) ], everyTask.prototype, "v_tixianBtn", void 0);
      __decorate([ property(cc.Node) ], everyTask.prototype, "v_tixianBtnsp", void 0);
      __decorate([ property ], everyTask.prototype, "_callBack", void 0);
      __decorate([ property ], everyTask.prototype, "_messageCode", void 0);
      __decorate([ property ], everyTask.prototype, "_canWithdrawNow", void 0);
      __decorate([ property ], everyTask.prototype, "_goCom", void 0);
      __decorate([ property ], everyTask.prototype, "_canget", void 0);
      __decorate([ property ], everyTask.prototype, "_isfinsh", void 0);
      __decorate([ property ], everyTask.prototype, "_gameInfo", void 0);
      __decorate([ property ], everyTask.prototype, "onPrefab", void 0);
      __decorate([ property ], everyTask.prototype, "onPrefab2", void 0);
      __decorate([ property ], everyTask.prototype, "_withdrawIndex", void 0);
      __decorate([ property ], everyTask.prototype, "cliclTime", void 0);
      everyTask = __decorate([ ccclass ], everyTask);
      return everyTask;
    }(cc.Component);
    exports.default = everyTask;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil"
  } ],
  everyWithdrawBtn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "69615CJZlJFm6bYeYt3jU8T", "everyWithdrawBtn");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedUtil_1 = require("../RedUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var everyWithdrawBtn = function(_super) {
      __extends(everyWithdrawBtn, _super);
      function everyWithdrawBtn() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._callBack = null;
        return _this;
      }
      everyWithdrawBtn.prototype.start = function() {
        this.node.on("click", this.openEveryTask, this);
        this.playAni();
      };
      everyWithdrawBtn.prototype.playAni = function() {
        var node = this.node;
        this.schedule(function() {
          cc.tween(this.node).to(.1, {
            angle: -15
          }).to(.3, {
            scaleX: 1.5,
            scaleY: 1.5
          }).to(.1, {
            angle: 15
          }).to(.1, {
            angle: -15
          }).to(.1, {
            angle: 15
          }).to(.1, {
            angle: -15
          }).to(.1, {
            angle: 0
          }).to(.3, {
            scaleX: 1,
            scaleY: 1
          }).start();
        }, 1.6);
      };
      everyWithdrawBtn.prototype.stopAni = function() {
        console.log("stopAni============");
        this.unscheduleAllCallbacks();
      };
      everyWithdrawBtn.prototype.openEveryTask = function() {
        this.stopAni();
        RedUtil_1.RedUtil.requestEveryTask(this._callBack);
      };
      everyWithdrawBtn.prototype.destroySelf = function() {
        this._callBack && this._callBack.onClosed && this._callBack.onClosed();
        this.node.destroy();
      };
      everyWithdrawBtn.prototype.getParams = function(parmp) {
        if (parmp && parmp.callBack) {
          this._callBack = parmp.callBack;
          this._callBack && this._callBack.onOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.onOpened);
        }
      };
      __decorate([ property ], everyWithdrawBtn.prototype, "_callBack", void 0);
      everyWithdrawBtn = __decorate([ ccclass ], everyWithdrawBtn);
      return everyWithdrawBtn;
    }(cc.Component);
    exports.default = everyWithdrawBtn;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil"
  } ],
  gift: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0dc22tsIx5DqbmwzkKQouE0", "gift");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var FightManger_1 = require("../fight/FightManger");
    var GameJSB_1 = require("../GameJSB");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var gift = function(_super) {
      __extends(gift, _super);
      function gift() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.timeLabel = null;
        _this.countDownHongBao = null;
        _this.timeCD = null;
        return _this;
      }
      gift.prototype.onLoad = function() {
        FightManger_1.default.getInstance().ViewFight.node.getComponent("ViewFight").activeState(cc.find("ViewTop/dongtaiIcon/gift/giftClose", FightManger_1.default.getInstance().ViewFight.node));
        FightManger_1.default.getInstance().ViewFight.node.getComponent("ViewFight").activeState(cc.find("ViewTop/dongtaiIcon/gift/giftOpen", FightManger_1.default.getInstance().ViewFight.node));
      };
      gift.prototype.start = function() {};
      gift.prototype.update = function(dt) {};
      gift.prototype.obtainTime = function(num) {
        this.timeCD = num / 1e3;
        clearInterval(this.countDownHongBao);
        this.countDown();
      };
      gift.prototype.countDown = function() {
        var _this = this;
        var ViewFight = this.node.parent.parent.parent;
        this.timeLabel.node.active = true;
        if (!this.timeCD) return;
        this.countDownHongBao = setInterval(function() {
          if (_this.timeCD > 0) {
            var minutes = Math.floor(_this.timeCD / 60);
            var seconds = Math.floor(_this.timeCD % 60);
            _this.timeLabel.string = 0 == seconds ? "0" + minutes + "\uff1a 00" : seconds < 10 ? "0" + minutes + "\uff1a 0" + seconds : "0" + minutes + "\uff1a " + seconds;
            _this.timeCD = _this.timeCD - 1;
          } else {
            _this.timeCD = null;
            _this.timeLabel.node.active = false;
            clearInterval(_this.countDownHongBao);
            cc.find("ViewTop/dongtaiIcon/gift/giftOpen", ViewFight).active = true;
            cc.find("ViewTop/dongtaiIcon/gift/giftClose", ViewFight).active = false;
            ViewFight.getComponent("ViewFight").activeState(cc.find("ViewTop/dongtaiIcon/gift/giftOpen", ViewFight));
          }
        }, 1e3);
      };
      gift.prototype.clickTimeHongBao = function() {
        if (this.node.getChildByName("giftOpen").active) {
          FightManger_1.default.getInstance().ViewFight.hongbaoType = "\u5012\u8ba1\u65f6\u7ea2\u5305";
          ViewManager_1.default.getInstance().ShowView("signRedWin");
        } else GameJSB_1.GameJSB.getAndroidShowToast("\u8bf7\u5012\u8ba1\u65f6\u7ed3\u675f\u540e\u7ee7\u7eed\u9886\u7ea2\u5305");
      };
      __decorate([ property(cc.Label) ], gift.prototype, "timeLabel", void 0);
      gift = __decorate([ ccclass ], gift);
      return gift;
    }(cc.Component);
    exports.default = gift;
    cc._RF.pop();
  }, {
    "../../core/Manager/ViewManager": "ViewManager",
    "../GameJSB": "GameJSB",
    "../fight/FightManger": "FightManger"
  } ],
  hongBaoCunQianGuan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b7e7dJr58xMyb5svqccSpa2", "hongBaoCunQianGuan");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseView_1 = require("../../core/View/BaseView");
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var FightManger_1 = require("../fight/FightManger");
    var AdaptarManager_1 = require("../../core/Manager/AdaptarManager");
    var GameJSB_1 = require("../GameJSB");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var hongBaoCunQianGuan = function(_super) {
      __extends(hongBaoCunQianGuan, _super);
      function hongBaoCunQianGuan() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.showTextLabel = null;
        _this.spriteList = [];
        return _this;
      }
      hongBaoCunQianGuan.prototype.onLoad = function() {
        this.initHBCQG();
      };
      hongBaoCunQianGuan.prototype.start = function() {};
      hongBaoCunQianGuan.prototype.update = function(dt) {};
      hongBaoCunQianGuan.prototype.initHBCQG = function() {
        var userInfo = window["killStar"]["UserInfo"];
        var boo = 0 != userInfo.yesdaysave;
        if (boo) {
          cc.find("showYesterday", this.node).getComponent(cc.Sprite).spriteFrame = this.spriteList[1];
          cc.find("showYesterday/label", this.node).getComponent(cc.Label).string = userInfo.yesdaysave + "";
        } else {
          cc.find("showYesterday", this.node).getComponent(cc.Sprite).spriteFrame = this.spriteList[0];
          cc.find("showYesterday/label", this.node).getComponent(cc.Label).string = FightManger_1.default.getInstance().ViewFight.todayText + "";
        }
        this.node.getChildByName("label").getChildByName("nowLabel").active = boo;
        this.node.getChildByName("label").getChildByName("lastLabel").active = !boo;
        this.node.getChildByName("clickBtn").getChildByName("now").active = boo;
        this.node.getChildByName("clickBtn").getChildByName("last").active = !boo;
      };
      hongBaoCunQianGuan.prototype.clickLingQu = function() {
        if (this.node.getChildByName("clickBtn").children[1].active) {
          var pamrm = {
            type: 1
          };
          GameJSB_1.GameJSB.getAndroidData("/userReward/rewards", JSON.stringify(pamrm), "rewards");
          cc.find("clickBtn/last", this.node).active = true;
          cc.find("clickBtn/now", this.node).active = false;
          cc.find("showYesterday", this.node).getComponent(cc.Sprite).spriteFrame = this.spriteList[0];
          this.hongbaoLight();
        } else GameJSB_1.GameJSB.getAndroidShowToast("\u8bf7\u660e\u65e5\u518d\u6765\u9886\u53d6");
      };
      hongBaoCunQianGuan.prototype.clickClose = function() {
        ViewManager_1.default.getInstance().CloseView("hongBaoCunQianGuan");
        FightManger_1.default.getInstance().Status = 1;
      };
      hongBaoCunQianGuan.prototype.hongbaoLight = function() {
        var _this = this;
        var cont = 0;
        var hongbaoHome = cc.find("hongbaoHome", FightManger_1.default.getInstance().ViewFight.ViewTop);
        var fullHeight = AdaptarManager_1.default.getInstance().fullHeight;
        var time = setInterval(function() {
          6 == cont && clearInterval(time);
          _this.node.getChildByName("hongbaoAni").children[cont].active = true;
          cc.tween(_this.node.getChildByName("hongbaoAni").children[cont]).to(.7, {
            x: hongbaoHome.x,
            y: hongbaoHome.y + Math.abs(_this.node.getChildByName("hongbaoAni").y) + Math.abs(FightManger_1.default.getInstance().ViewFight.ViewTop.y),
            opacity: 87
          }).start();
          cont++;
        }, 110);
        setTimeout(function() {
          FightManger_1.default.getInstance().Status = 1;
          ViewManager_1.default.getInstance().CloseView("hongBaoCunQianGuan");
        }, 1050);
      };
      __decorate([ property(cc.Label) ], hongBaoCunQianGuan.prototype, "showTextLabel", void 0);
      __decorate([ property(cc.SpriteFrame) ], hongBaoCunQianGuan.prototype, "spriteList", void 0);
      hongBaoCunQianGuan = __decorate([ ccclass ], hongBaoCunQianGuan);
      return hongBaoCunQianGuan;
    }(BaseView_1.default);
    exports.default = hongBaoCunQianGuan;
    cc._RF.pop();
  }, {
    "../../core/Manager/AdaptarManager": "AdaptarManager",
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/View/BaseView": "BaseView",
    "../GameJSB": "GameJSB",
    "../fight/FightManger": "FightManger"
  } ],
  hongbaoAni: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "988d3/S3T1KVKWjCyqz0wQX", "hongbaoAni");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AdaptarManager_1 = require("../../core/Manager/AdaptarManager");
    var FightManger_1 = require("../../game/fight/FightManger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var hongbaoAni = function(_super) {
      __extends(hongbaoAni, _super);
      function hongbaoAni() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isKuaiSuHongBao = false;
        return _this;
      }
      hongbaoAni.prototype.onLoad = function() {
        this.node.parent.zIndex = 100;
        this.node.children.forEach(function(child) {
          child.active = false;
        });
      };
      hongbaoAni.prototype.start = function() {
        this.isKuaiSuHongBao ? this.kshbLight() : this.hongbaoLight();
      };
      hongbaoAni.prototype.update = function(dt) {};
      hongbaoAni.prototype.hongbaoLight = function() {
        var _this = this;
        var cont = 0;
        var parent = FightManger_1.default.getInstance().ViewFight.ViewTop;
        var hongbaoHome = cc.find("hongbaoHome", parent);
        var fullHeight = AdaptarManager_1.default.getInstance().fullHeight;
        var gaodu = fullHeight >= 1400 ? 2 * hongbaoHome.y + hongbaoHome.y / 2 : hongbaoHome.y / 2;
        var pig = cc.find("dongtaiIcon/pig", parent);
        var time = setInterval(function() {
          6 == cont && clearInterval(time);
          if (cont <= 2) {
            if (FightManger_1.default.getInstance().ViewFight.hongbaocunqianguan > 0) {
              _this.node.children[cont + 7].active = true;
              cc.tween(_this.node.children[cont + 7]).to(.7, {
                x: pig.x,
                y: parent.y + pig.y / 2 + 2 * parent.getChildByName("dongtaiIcon").y + gaodu,
                opacity: 87
              }).start();
            }
            _this.node.children[cont].active = true;
            cc.tween(_this.node.children[cont]).to(.7, {
              x: hongbaoHome.x - 120,
              y: parent.y + gaodu,
              opacity: 87
            }).start();
          } else {
            _this.node.children[cont].active = true;
            cc.tween(_this.node.children[cont]).to(.7, {
              x: hongbaoHome.x - 120,
              y: parent.y + gaodu,
              opacity: 87
            }).start();
          }
          cont++;
        }, 110);
        setTimeout(function() {
          _this.node.removeFromParent();
        }, 1050);
      };
      hongbaoAni.prototype.kshbLight = function() {
        var _this = this;
        var cont = 0;
        var parent = FightManger_1.default.getInstance().ViewFight.ViewTop;
        var hongbaoHome = cc.find("hongbaoHome", parent);
        var fullHeight = AdaptarManager_1.default.getInstance().fullHeight;
        var gaodu = fullHeight >= 1400 ? 2 * hongbaoHome.y + hongbaoHome.y / 2 : hongbaoHome.y / 2;
        var pig = cc.find("dongtaiIcon/pig", parent);
        var time = setInterval(function() {
          6 == cont && clearInterval(time);
          if (cont <= 2) {
            if (FightManger_1.default.getInstance().ViewFight.hongbaocunqianguan > 0) {
              _this.node.children[cont + 7].active = true;
              cc.tween(_this.node.children[cont + 7]).to(1, {
                x: -560,
                y: 987.5 + gaodu,
                opacity: 87
              }).start();
            }
            _this.node.children[cont].active = true;
            cc.tween(_this.node.children[cont]).to(1, {
              x: -135,
              y: 1140,
              opacity: 87
            }).start();
          } else {
            _this.node.children[cont].active = true;
            cc.tween(_this.node.children[cont]).to(1, {
              x: -135,
              y: 1140,
              opacity: 87
            }).start();
          }
          cont++;
        }, 180);
        setTimeout(function() {
          _this.node.removeFromParent();
        }, 1760);
      };
      hongbaoAni = __decorate([ ccclass ], hongbaoAni);
      return hongbaoAni;
    }(cc.Component);
    exports.default = hongbaoAni;
    cc._RF.pop();
  }, {
    "../../core/Manager/AdaptarManager": "AdaptarManager",
    "../../game/fight/FightManger": "FightManger"
  } ],
  hongbaoIcon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20e1dxlmkdJDp12RX64hZGZ", "hongbaoIcon");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var FightManger_1 = require("../fight/FightManger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var hongbaoIcon = function(_super) {
      __extends(hongbaoIcon, _super);
      function hongbaoIcon() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.timeLabel = null;
        return _this;
      }
      hongbaoIcon.prototype.onLoad = function() {
        this.node.zIndex = 101;
        cc.game.setFrameRate(30);
        this.startTime = Date.now();
      };
      hongbaoIcon.prototype.start = function() {};
      hongbaoIcon.prototype.update = function(dt) {
        this.iconTime();
        if (3 == FightManger_1.default.getInstance().Status && this.node) {
          this.node.parent.parent.getComponent("ViewFight").isIconDisPlay = true;
          this.node.removeFromParent();
        }
      };
      hongbaoIcon.prototype.iconTime = function() {
        if (parseFloat(this.timeLabel.string) >= 0) {
          var lose = Date.now() - this.startTime;
          var num = (1e4 - lose) / 1e3;
          this.timeLabel.string = num + "";
        } else {
          this.node.parent.parent.getComponent("ViewFight").isIconDisPlay = true;
          this.node.removeFromParent();
        }
      };
      hongbaoIcon.prototype.clickRedBagIcon = function() {
        ViewManager_1.default.getInstance().ShowView("signRedWin");
        this.node.parent.parent.getComponent("ViewFight").hongbaoType = "\u5e78\u8fd0\u7ea2\u5305";
        this.node.parent.parent.getComponent("ViewFight").isIconDisPlay = true;
        this.node.removeFromParent();
      };
      __decorate([ property(cc.Label) ], hongbaoIcon.prototype, "timeLabel", void 0);
      hongbaoIcon = __decorate([ ccclass ], hongbaoIcon);
      return hongbaoIcon;
    }(cc.Component);
    exports.default = hongbaoIcon;
    cc._RF.pop();
  }, {
    "../../core/Manager/ViewManager": "ViewManager",
    "../fight/FightManger": "FightManger"
  } ],
  intrducePage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57b78AgEaZNTro9jagmYAJR", "intrducePage");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedUtil_1 = require("../RedUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.v_title = null;
        _this.v_content = null;
        _this.v_closeBtn = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var v_backg = this.node.getChildByName("v_backg");
        this.v_title = v_backg.getChildByName("v_title").getComponent(cc.Label);
        this.v_content = v_backg.getChildByName("v_content").getComponent(cc.Label);
        this.v_closeBtn = this.node.getChildByName("v_closeBtn").getComponent(cc.Button);
      };
      NewClass.prototype.start = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        this.v_closeBtn.node.on("click", this.destroySelf, this);
      };
      NewClass.prototype.destroySelf = function() {
        this.node.destroy();
      };
      NewClass.prototype.getParams = function(parmp) {
        if (parmp) {
          parmp.title && "" != parmp.title && (this.v_title.string = parmp.title);
          parmp.content && "" != parmp.content && (this.v_content.string = parmp.content);
        }
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "v_title", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "v_content", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "v_closeBtn", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil"
  } ],
  litterRedPack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8dfbFbGvRArqMwzNYTz7rf", "litterRedPack");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedUtil_1 = require("../RedUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var litterRedPack = function(_super) {
      __extends(litterRedPack, _super);
      function litterRedPack() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.clickBtn = null;
        _this.dronBone = null;
        _this.clickNum = 0;
        _this.mayclickNum = 0;
        _this._minX = 0;
        _this._maxX = 0;
        _this._minY = 0;
        _this._maxY = 0;
        _this.roadlength = 1;
        return _this;
      }
      litterRedPack.prototype.onLoad = function() {
        this.dronBone = this.node.getChildByName("playani").getComponent(dragonBones.ArmatureDisplay);
        this.dronBone.addEventListener(dragonBones.EventObject.COMPLETE, this.hideSelf, this);
        this.clickBtn = this.node.getChildByName("clickBtn").getComponent(cc.Button);
        this.clickBtn.node.on("click", this.clickSelf, this);
        this.node.getChildByName("playani").active = false;
      };
      litterRedPack.prototype.onEnable = function() {
        this.playAni();
        this.clickNum = RedUtil_1.RedUtil.getRandomNum(1, 2);
        this.mayclickNum = 0;
        this.roadlength = RedUtil_1.RedUtil.getRandomNum(3, 4.5);
        var parent = this.node.parent;
        var pwidth = parent.width;
        var pheith = parent.height;
        this._minX = -(.5 * pwidth - 10 - .5 * this.node.width);
        this._maxX = .5 * pwidth - 10 - .5 * this.node.width;
        this._minY = .5 * pheith + 280;
        this._maxY = -(.5 * pheith - 10 - .5 * this.node.height);
        var len = Math.floor((pwidth - 20) / this.node.width);
        var rodnum = RedUtil_1.RedUtil.getRandomNum(0, len);
        var posx = this._minX + this.node.width * rodnum;
        posx > this._maxX && (posx = this._maxX);
        this.node.setPosition(posx, this._minY);
        this.clickBtn.node.active = true;
      };
      litterRedPack.prototype.start = function() {};
      litterRedPack.prototype.playAni = function() {
        var node = this.node;
        cc.tween(this.node).to(.1, {
          angle: -15
        }).start();
        this.schedule(function() {
          cc.tween(this.node).to(.3, {
            angle: 15
          }).to(.3, {
            angle: -15
          }).to(.3, {
            angle: 15
          }).to(.3, {
            angle: -15
          }).start();
        }, 1.2);
      };
      litterRedPack.prototype.stopAni = function() {
        this.unscheduleAllCallbacks();
      };
      litterRedPack.prototype.clickSelf = function() {
        this.mayclickNum += 1;
        if (this.mayclickNum >= this.clickNum) {
          this.clickBtn.node.active = false;
          this.node.getChildByName("playani").active = true;
          this.dronBone.playAnimation("Sprite", 1);
        }
      };
      litterRedPack.prototype.hideSelf = function() {
        this.mayclickNum = 0;
        this.node.parent.removeChild(this.node);
        this.node.active = false;
        if (this.node) {
          RedUtil_1.RedUtil._litterRedPool.push(this.node);
          RedUtil_1.RedUtil._currRedNum -= 1;
        }
        this.node.getChildByName("playani").active = false;
      };
      litterRedPack.prototype.onDisable = function() {
        this.stopAni();
      };
      litterRedPack.prototype.update = function(dt) {
        this.node.y <= this._maxY ? this.hideSelf() : this.node.y -= this.roadlength;
      };
      __decorate([ property(cc.Button) ], litterRedPack.prototype, "clickBtn", void 0);
      __decorate([ property(dragonBones.ArmatureDisplay) ], litterRedPack.prototype, "dronBone", void 0);
      __decorate([ property ], litterRedPack.prototype, "clickNum", void 0);
      __decorate([ property ], litterRedPack.prototype, "mayclickNum", void 0);
      __decorate([ property ], litterRedPack.prototype, "_minX", void 0);
      __decorate([ property ], litterRedPack.prototype, "_maxX", void 0);
      __decorate([ property ], litterRedPack.prototype, "_minY", void 0);
      __decorate([ property ], litterRedPack.prototype, "_maxY", void 0);
      __decorate([ property ], litterRedPack.prototype, "roadlength", void 0);
      litterRedPack = __decorate([ ccclass ], litterRedPack);
      return litterRedPack;
    }(cc.Component);
    exports.default = litterRedPack;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil"
  } ],
  loginSignBtn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5adb3M6D4VK34qjeYexpH5L", "loginSignBtn");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RedUtil_1 = require("../RedUtil");
    var loginSignWin_1 = require("./loginSignWin");
    var loginSignBtn = function(_super) {
      __extends(loginSignBtn, _super);
      function loginSignBtn() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.timeStr = null;
        _this._callBack = null;
        return _this;
      }
      loginSignBtn.prototype.onLoad = function() {
        this.timeStr = this.node.getChildByName("timeStr").getComponent(cc.Label);
      };
      loginSignBtn.prototype.start = function() {
        this.timeStr.node.active = false;
        this.node.on("click", this.requestCount, this);
      };
      loginSignBtn.prototype.requestCount = function() {
        var self = this;
        RedUtil_1.RedUtil.requestLoginSignCount({
          SuccessFuc: function(res) {
            self.selfClick(res);
          }
        });
      };
      loginSignBtn.prototype.selfClick = function(message) {
        if (RedUtil_1.RedUtil._LoginSignWin) RedUtil_1.RedUtil._LoginSignWin.getComponent(loginSignWin_1.default).RefreshRed(message); else {
          var parmp_1 = {
            callBack: this._callBack,
            MessageCode: message
          };
          var parentNode_1 = cc.director.getScene();
          RedUtil_1.RedUtil.LoadResource("alySDK/alyprofabs/loginSIgnWin", function(err, prefab) {
            var newNode = cc.instantiate(prefab);
            if (newNode) {
              parentNode_1.addChild(newNode);
              RedUtil_1.RedUtil._LoginSignWin = newNode;
              if (parmp_1) {
                var cla = newNode.getComponent(loginSignWin_1.default);
                cla.getParams(parmp_1);
              }
            }
          });
        }
      };
      loginSignBtn.prototype.destroySelf = function() {
        this._callBack && this._callBack.onClosed && this._callBack.onClosed();
        this.node.destroy();
      };
      loginSignBtn.prototype.getParams = function(parmp) {
        if (parmp && parmp.callBack) {
          this._callBack = parmp.callBack;
          this._callBack && this._callBack.onOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.onOpened);
        }
      };
      loginSignBtn.prototype.update = function(dt) {
        if (RedUtil_1.RedUtil._signRedColdTime > 0) {
          this.timeStr.node.active = true;
          this.timeStr.string = RedUtil_1.RedUtil.getSecondString(1e3 * RedUtil_1.RedUtil._signRedColdTime);
          RedUtil_1.RedUtil._signRedColdTime -= dt;
        } else if (this.timeStr.node.active) {
          console.log("timeStr=======hid");
          this.timeStr.node.active = false;
        }
      };
      __decorate([ property(cc.Label) ], loginSignBtn.prototype, "timeStr", void 0);
      __decorate([ property ], loginSignBtn.prototype, "_callBack", void 0);
      loginSignBtn = __decorate([ ccclass ], loginSignBtn);
      return loginSignBtn;
    }(cc.Component);
    exports.default = loginSignBtn;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil",
    "./loginSignWin": "loginSignWin"
  } ],
  loginSignWin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e5abLruj5KP4KudAyP4aRI", "loginSignWin");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedUtil_1 = require("../RedUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var loginSignWin = function(_super) {
      __extends(loginSignWin, _super);
      function loginSignWin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.backbg = null;
        _this.redBg = null;
        _this.topScroll = null;
        _this.closeBtn = null;
        _this.litterRedPacks = [];
        _this.text = "hello";
        _this._callBack = null;
        _this.daycount = 0;
        _this.redCount = 0;
        _this._currTimeLabel = null;
        _this._canGetRed = false;
        _this._moneyStrs = [];
        return _this;
      }
      loginSignWin.prototype.onLoad = function() {
        this.backbg = this.node.getChildByName("backbg");
        this.redBg = this.node.getChildByName("redBg");
        this.topScroll = this.redBg.getChildByName("topScroll").getComponent(cc.ScrollView);
        this.closeBtn = this.redBg.getChildByName("closeBtn").getComponent(cc.Button);
        for (var index = 0; index < 3; index++) {
          var litterPack = this.redBg.getChildByName("litterPak" + index);
          litterPack && this.litterRedPacks.push(litterPack);
        }
      };
      loginSignWin.prototype.start = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        this.closeBtn.node.on("click", this.destroySelf, this);
        this._canGetRed = false;
        RedUtil_1.RedUtil._setTimeLogin = 5;
        RedUtil_1.RedUtil.setAction(this.redBg, true, null);
        RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(4003, 555);
      };
      loginSignWin.prototype.showtoplist = function() {
        console.log("this.daycount========" + this.daycount);
        var chickBtn = this.topScroll.content.getChildByName("clickBtn0");
        chickBtn.on("click", function() {
          this.dayClick(0);
        }, this);
        if (chickBtn) {
          var _loop_1 = function(index) {
            var newNode = cc.instantiate(chickBtn);
            newNode.name = "clickBtn" + index;
            newNode.setPosition(205 * index, -23);
            this_1.topScroll.content.addChild(newNode);
            var daystr = newNode.getChildByName("daystr").getComponent(cc.Label);
            daystr.string = "\u7b2c" + (index + 1) + "\u5929";
            this_1.daycount != index && RedUtil_1.RedUtil.LoadSpritRes("alySDK/alyUI/noCheck", function(err, spriteframe) {
              newNode.getComponent(cc.Sprite).spriteFrame = spriteframe;
              newNode.y = -6.5;
              daystr.node.y = -44;
            });
            newNode.on("click", function() {
              this.dayClick(index);
            }, this_1);
          };
          var this_1 = this;
          for (var index = 1; index < 14; index++) _loop_1(index);
        }
        0 != this.daycount && RedUtil_1.RedUtil.LoadSpritRes("alySDK/alyUI/noCheck", function(err, spriteframe) {
          chickBtn.getComponent(cc.Sprite).spriteFrame = spriteframe;
          chickBtn.y = -6.5;
          var daystr = chickBtn.getChildByName("daystr");
          daystr.y = -44;
        });
        this.topScroll.content.width = 2841;
        this.daycount > 2 && (this.topScroll.content.x = -295 - 205 * this.daycount);
      };
      loginSignWin.prototype.dayClick = function(index) {
        index < this.daycount ? RedUtil_1.RedUtil.opeTips("\u5df2\u8d85\u8fc7\u9886\u53d6\u8303\u56f4") : index > this.daycount && RedUtil_1.RedUtil.opeTips("\u7b2c" + (index + 1) + "\u89e3\u9501");
      };
      loginSignWin.prototype.showRedState = function() {
        console.log("this.redCount============" + this.redCount);
        var _loop_2 = function(index) {
          var redPac = this_2.redBg.getChildByName("litterPak" + index);
          redPac.on("click", function() {
            this.redPackClick(index);
          }, this_2);
          if (index == this_2.redCount) {
            var bottomText = redPac.getChildByName("bottomText").getComponent(cc.Label);
            bottomText.string = "\u53ef\u6253\u5f00";
            bottomText.node.color = new cc.Color(156, 199, 130);
            this_2._currTimeLabel = bottomText;
          } else if (index < this_2.redCount) {
            var bottomText = redPac.getChildByName("bottomText").getComponent(cc.Label);
            bottomText.string = "\u5df2\u9886\u53d6";
            bottomText.node.color = new cc.Color(134, 116, 90);
            var moneystr = redPac.getChildByName("moneystr").getComponent(cc.Label);
            this_2._moneyStrs[index] && (moneystr.string = this_2._moneyStrs[index] / 100 + "\u5143");
          }
        };
        var this_2 = this;
        for (var index = 0; index < 4; index++) _loop_2(index);
      };
      loginSignWin.prototype.redPackClick = function(index) {
        index == this.redCount && (RedUtil_1.RedUtil._signRedColdTime <= 0 ? this.openSignRed() : RedUtil_1.RedUtil.opeTips("\u5012\u8ba1\u65f6\u7ed3\u675f\u518d\u6765\u9886\u53d6\uff01"));
      };
      loginSignWin.prototype.openSignRed = function() {
        var parentNode = cc.director.getScene();
        RedUtil_1.RedUtil.LoadResource("alySDK/alyprofabs/signRedWin", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          newNode && parentNode.addChild(newNode);
        });
      };
      loginSignWin.prototype.withdrawSucc = function() {
        var self = this;
        RedUtil_1.RedUtil.requestLoginSignCount({
          SuccessFuc: function(mess) {
            self.RefreshRed(mess);
          }
        });
      };
      loginSignWin.prototype.init = function(message) {
        this.redCount = message.TodayNum;
        this.daycount = message.SignNum;
        RedUtil_1.RedUtil._loginCurrNum = this.redCount;
        var data = message.data;
        this._moneyStrs = [];
        data.FirstNum && this._moneyStrs.push(data.FirstNum);
        data.SecondNum && this._moneyStrs.push(data.SecondNum);
        data.ThirdNum && this._moneyStrs.push(data.ThirdNum);
        data.FourthNum && this._moneyStrs.push(data.FourthNum);
        this.showtoplist();
        this.showRedState();
      };
      loginSignWin.prototype.RefreshRed = function(message) {
        console.log("RefreshRed==============");
        var expId = 4e3 + 10 * (this.daycount + 1) + this.redCount;
        RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(expId, 555);
        this.redCount = message.TodayNum;
        this.daycount = message.SignNum;
        RedUtil_1.RedUtil._loginCurrNum = this.redCount;
        var data = message.data;
        this._moneyStrs = [];
        data.FirstNum && this._moneyStrs.push(data.FirstNum);
        data.SecondNum && this._moneyStrs.push(data.SecondNum);
        data.ThirdNum && this._moneyStrs.push(data.ThirdNum);
        data.FourthNum && this._moneyStrs.push(data.FourthNum);
        this.showRedState();
      };
      loginSignWin.prototype.destroySelf = function() {
        var self = this;
        RedUtil_1.RedUtil.setAction(this.redBg, false, function() {
          self.setCall();
        });
      };
      loginSignWin.prototype.setCall = function() {
        RedUtil_1.RedUtil._LoginSignWin = null;
        this._callBack && this._callBack.nextClose && RedUtil_1.RedUtil.getIsInitOpen() && this._callBack.nextClose();
        this.node.destroy();
      };
      loginSignWin.prototype.getParams = function(parmp) {
        var _this = this;
        if (parmp) {
          if (parmp.callBack) {
            this._callBack = parmp.callBack;
            this._callBack && this._callBack.nextOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.nextOpened);
          }
          parmp.activeName && (RedUtil_1.RedUtil._activeName = parmp.activeName);
          parmp.MessageCode && setTimeout(function() {
            _this.init(parmp.MessageCode);
          }, 200);
        }
      };
      loginSignWin.prototype.update = function(dt) {
        RedUtil_1.RedUtil._signRedColdTime > 0 ? this._currTimeLabel && (this._currTimeLabel.string = RedUtil_1.RedUtil.getSecondString(1e3 * RedUtil_1.RedUtil._signRedColdTime)) : this._currTimeLabel && this.redCount < 4 && "\u53ef\u6253\u5f00" != this._currTimeLabel.string && (this._currTimeLabel.string = "\u53ef\u6253\u5f00");
      };
      __decorate([ property(cc.Node) ], loginSignWin.prototype, "backbg", void 0);
      __decorate([ property(cc.Node) ], loginSignWin.prototype, "redBg", void 0);
      __decorate([ property(cc.ScrollView) ], loginSignWin.prototype, "topScroll", void 0);
      __decorate([ property(cc.Button) ], loginSignWin.prototype, "closeBtn", void 0);
      __decorate([ property ], loginSignWin.prototype, "litterRedPacks", void 0);
      __decorate([ property ], loginSignWin.prototype, "text", void 0);
      __decorate([ property ], loginSignWin.prototype, "_callBack", void 0);
      __decorate([ property ], loginSignWin.prototype, "daycount", void 0);
      __decorate([ property ], loginSignWin.prototype, "redCount", void 0);
      __decorate([ property(cc.Label) ], loginSignWin.prototype, "_currTimeLabel", void 0);
      __decorate([ property ], loginSignWin.prototype, "_canGetRed", void 0);
      __decorate([ property ], loginSignWin.prototype, "_moneyStrs", void 0);
      loginSignWin = __decorate([ ccclass ], loginSignWin);
      return loginSignWin;
    }(cc.Component);
    exports.default = loginSignWin;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil"
  } ],
  mainProfitPage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "def52gZjxFNb5kqXjn7Rz6g", "mainProfitPage");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedUtil_1 = require("../RedUtil");
    var turnPage_1 = require("./turnPage");
    var intrducePage_1 = require("./intrducePage");
    var myStarPage_1 = require("./myStarPage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.v_backBtn = null;
        _this.v_guanggaoBtn = null;
        _this.v_yearstoday = null;
        _this.v_history = null;
        _this.v_fenhongBtn = null;
        _this.v_everyred = null;
        _this.v_myRedBtn = null;
        _this.v_todayNum = null;
        _this.v_willNum = null;
        _this.v_alltake = null;
        _this.v_listBg = null;
        _this.background = null;
        _this.v_listScrollbg = null;
        _this.v_selectRedBtn = null;
        _this.listView = null;
        _this.v_list = null;
        _this.bottomBorder = null;
        _this._callBack = null;
        _this.v_propTitle = "";
        _this.v_propIcon = "";
        _this.surplusNum = 0;
        _this.yesterdayHaveNum = 0;
        _this.isHaveListsave = false;
        _this.isoverCreate = false;
        _this.itemList = [];
        _this.itemListName = [];
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.background = this.node.getChildByName("background");
        this.listView || (this.listView = this.background.getChildByName("listView").getComponent(cc.ScrollView));
        if (!this.v_backBtn || !this.v_guanggaoBtn || !this.v_yearstoday || !this.v_history || !this.v_fenhongBtn || !this.v_everyred || !this.v_myRedBtn || !this.v_todayNum || !this.v_willNum || !this.v_alltake || !this.v_listBg || !this.v_listScrollbg) {
          var content = this.listView.content;
          var topDi = content.getChildByName("topDi");
          this.v_backBtn = topDi.getChildByName("v_backBtn").getComponent(cc.Button);
          var topContentDi = content.getChildByName("topContentDi");
          this.v_guanggaoBtn = topContentDi.getChildByName("tiphor").getChildByName("v_guanggaoBtn").getComponent(cc.Button);
          this.v_yearstoday = topContentDi.getChildByName("yearstodayP").getChildByName("v_yearstoday").getComponent(cc.Label);
          this.v_history = topContentDi.getChildByName("historyP").getChildByName("v_history").getComponent(cc.Label);
          var middContent = content.getChildByName("middContent");
          this.v_fenhongBtn = middContent.getChildByName("tiphor").getChildByName("v_fenhongBtn").getComponent(cc.Button);
          var redbg = middContent.getChildByName("redbg");
          this.v_everyred = redbg.getChildByName("v_everyred").getComponent(cc.Label);
          this.v_myRedBtn = redbg.getChildByName("v_myRedBtn").getComponent(cc.Button);
          this.v_todayNum = middContent.getChildByName("leftNode").getChildByName("v_todayNum").getComponent(cc.Label);
          this.v_willNum = middContent.getChildByName("centertNode").getChildByName("v_willNum").getComponent(cc.Label);
          this.v_alltake = middContent.getChildByName("rightNode").getChildByName("v_alltake").getComponent(cc.Label);
          this.v_listBg = content.getChildByName("v_listBg");
          this.v_listScrollbg = content.getChildByName("v_listScrollbg");
        }
        this.bottomBorder = this.background.getChildByName("bottomBorder");
        this.v_selectRedBtn || (this.v_selectRedBtn = this.bottomBorder.getChildByName("v_selectRedBtn").getComponent(cc.Button));
      };
      NewClass.prototype.start = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        this.background.width = this.node.width;
        this.background.height = this.node.height;
        console.log("this.node.height============" + this.node.height);
        console.log("this.node.width===y========" + this.node.width);
        console.log("this.background.x============" + this.background.x);
        console.log("this.background.y====y========" + this.background.y);
        this.listView.node.height = this.node.height - 140;
        this.listView.node.width = this.node.width;
        var view = this.listView.node.getChildByName("view");
        view.width = this.node.width;
        view.height = this.node.height - 140;
        this.listView.content.width = this.node.width;
        this.listView.content.height = view.height;
        this.listView.content.setPosition(0, 0);
        this.bottomBorder.width = this.node.width;
        this.bottomBorder.y = -(this.node.height - 110);
        this.v_backBtn.node.on("click", this.destroySelf, this);
        this.v_selectRedBtn.node.on("click", this.openTurnPage, this);
        this.v_guanggaoBtn.node.on("click", this.openintrducePage, this);
        this.v_fenhongBtn.node.on("click", this.openintrducePage2, this);
        this.v_myRedBtn.node.on("click", this.myRedStarClick, this);
        this.showInit();
      };
      NewClass.prototype.onEnable = function() {
        RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(2005, 0);
      };
      NewClass.prototype.update = function(dt) {
        if (this.yesterdayHaveNum > 5 && this.isoverCreate && this.v_list) {
          var allper = 89 * (this.yesterdayHaveNum - 5);
          var py = this.v_list.getContentPosition().y;
          var px = this.v_list.getContentPosition().x;
          if (py >= allper) {
            this.v_list.stopAutoScroll();
            this.v_list.setContentPosition(new cc.Vec2(px, 0));
          } else this.v_list.setContentPosition(new cc.Vec2(px, py + 3));
        }
      };
      NewClass.prototype.onDisable = function() {
        console.log("onDisable=============");
        RedUtil_1.RedUtil._mainprofit = null;
      };
      NewClass.prototype.destroySelf = function() {
        this._callBack && this._callBack.nextClose && this._callBack.nextClose();
        this.node.destroy();
      };
      NewClass.prototype.showInit = function() {
        var yersterNum = RedUtil_1.RedUtil.getRandomNum(1e4, 99999);
        var historyNum = 0;
        var yer = cc.sys.localStorage.getItem("yesterdayMoney");
        var date = new Date();
        var dateStr = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        if (yer) {
          var yerarr = yer.split(";");
          if (yerarr instanceof Array && yerarr.length > 1) {
            var yerstr = yerarr[0];
            if (dateStr == yerstr) yersterNum = Number(yerarr[1]); else {
              var saveStr = dateStr + ";" + yersterNum;
              cc.sys.localStorage.setItem("yesterdayMoney", saveStr);
            }
          } else console.log("error----saveyear");
        } else {
          var saveStr = dateStr + ";" + yersterNum;
          cc.sys.localStorage.setItem("yesterdayMoney", saveStr);
        }
        var history = cc.sys.localStorage.getItem("historyMoney");
        if (history) {
          var hisarr = history.split(";");
          if (hisarr instanceof Array && hisarr.length > 1) {
            var hisStr = hisarr[0];
            if (hisStr == dateStr) historyNum = Number(hisarr[1]); else {
              historyNum = Number(hisarr[1]) + Number(yersterNum);
              var saveStr = dateStr + ";" + historyNum;
              cc.sys.localStorage.setItem("historyMoney", saveStr);
            }
          } else console.log("errrrrrrr--saveHistory");
        } else {
          var saveStr = dateStr + ";" + yersterNum;
          cc.sys.localStorage.setItem("historyMoney", saveStr);
          historyNum = yersterNum;
        }
        this.v_yearstoday.string = yersterNum.toString();
        this.v_history.string = historyNum.toString();
        var yesEveryNum = RedUtil_1.RedUtil.getRandomNumfloat(220, 230, 2);
        var yesEvery = cc.sys.localStorage.getItem("yesterdayEvery");
        if (yesEvery) {
          var yesArr = yesEvery.split(";");
          yesArr instanceof Array && yesArr.length > 1 ? yesArr[0] == dateStr ? yesEveryNum = Number(yesArr[1]) : cc.sys.localStorage.setItem("yesterdayEvery", dateStr + ";" + yesEveryNum) : console.log("yesterdayEvery--error");
        } else cc.sys.localStorage.setItem("yesterdayEvery", dateStr + ";" + yesEveryNum);
        this.v_everyred.string = yesEveryNum.toString();
        var todayhave = RedUtil_1.RedUtil.getRandomNum(1, 100);
        var yesterdayhave = 0;
        var todayM = cc.sys.localStorage.getItem("todayHaveNum");
        console.log("todayM=======" + todayM);
        if (todayM) {
          var todayArr = todayM.split(";");
          if (todayArr instanceof Array && todayArr.length > 1) if (todayArr[0] == dateStr) todayhave = Number(todayArr[1]); else {
            yesterdayhave = Number(todayArr[1]);
            cc.sys.localStorage.setItem("todayHaveNum", dateStr + ";" + todayhave);
          }
        } else cc.sys.localStorage.setItem("todayHaveNum", dateStr + ";" + todayhave);
        this.v_todayNum.string = todayhave.toString();
        this.v_willNum.string = (5e4 - todayhave).toString();
        this.surplusNum = 5e4 - todayhave;
        var yesterM = cc.sys.localStorage.getItem("yesterdayHaveNum");
        if (yesterM) {
          var yesterMarr = yesterM.split(";");
          yesterMarr instanceof Array && yesterMarr.length > 1 && (yesterMarr[0] == dateStr ? yesterdayhave = Number(yesterMarr[1]) : cc.sys.localStorage.setItem("yesterdayHaveNum", dateStr + ";" + yesterdayhave));
        } else cc.sys.localStorage.setItem("yesterdayHaveNum", dateStr + ";" + yesterdayhave);
        this.yesterdayHaveNum = yesterdayhave;
        var haveGiveNum = yesterdayhave;
        var gived = cc.sys.localStorage.getItem("allHaveGiveNum");
        if (gived) {
          var giveArr = gived.split(";");
          if (giveArr instanceof Array && giveArr.length > 1) if (giveArr[0] == dateStr) haveGiveNum = Number(giveArr[1]); else {
            var centN = Number(giveArr[1]);
            centN += yesterdayhave;
            cc.sys.localStorage.setItem("allHaveGiveNum", dateStr + ";" + centN);
          }
        } else cc.sys.localStorage.setItem("allHaveGiveNum", dateStr + ";" + haveGiveNum);
        this.v_alltake.string = haveGiveNum.toString();
        this.showList();
      };
      NewClass.prototype.showList = function() {
        console.log("self.isHaveListsave ========" + this.isHaveListsave.toString());
        console.log("self.this.yesterdayHaveNum ========" + this.yesterdayHaveNum);
        if (this.yesterdayHaveNum > 0) {
          var yesterListdate = cc.sys.localStorage.getItem("yesterdayListdate");
          var date = new Date();
          var dateStr = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
          yesterListdate && yesterListdate == dateStr && (this.isHaveListsave = true);
          this.listView.content.height = 1615;
          this.v_listScrollbg.active = true;
          this.v_listBg.active = false;
          var height = 89 * this.yesterdayHaveNum;
          this.v_list = this.v_listScrollbg.getChildByName("v_list").getComponent(cc.ScrollView);
          this.v_list.content.height = height;
          this.showScrolllist(this.v_list.content);
          this.isoverCreate = true;
        } else {
          this.listView.content.height = 1140;
          this.v_listScrollbg.active = false;
          this.v_listBg.active = true;
        }
      };
      NewClass.prototype.showScrolllist = function(parent) {
        var prefab = null;
        var self = this;
        cc.loader.loadRes("alySDK/alyprofabs/profitItem", function(err, prefabb) {
          console.log("profah=================");
          prefab = prefabb;
          var timearr = null;
          var nameArr = null;
          var iconNums = null;
          if (self.isHaveListsave) {
            var listItem = JSON.parse(cc.sys.localStorage.getItem("yesterdayList"));
            timearr = listItem.yesterdayListTime;
            if (timearr.length == self.yesterdayHaveNum) {
              nameArr = listItem.yesterdayListName;
              iconNums = listItem.yesterdayListIcon;
            } else {
              self.isHaveListsave = false;
              timearr = [];
              for (var j = 0; j < self.yesterdayHaveNum; j++) {
                var arr = [];
                var hour = RedUtil_1.RedUtil.getRandomNum(0, 23);
                var min = RedUtil_1.RedUtil.getRandomNum(0, 59);
                var sec = RedUtil_1.RedUtil.getRandomNum(0, 59);
                arr.push(hour);
                arr.push(min);
                arr.push(sec);
                timearr.push(arr);
              }
              self.sortTime(timearr);
            }
          } else {
            timearr = [];
            for (var j = 0; j < self.yesterdayHaveNum; j++) {
              var arr = [];
              var hour = RedUtil_1.RedUtil.getRandomNum(0, 23);
              var min = RedUtil_1.RedUtil.getRandomNum(0, 59);
              var sec = RedUtil_1.RedUtil.getRandomNum(0, 59);
              arr.push(hour);
              arr.push(min);
              arr.push(sec);
              timearr.push(arr);
            }
            self.sortTime(timearr);
          }
          if (!nameArr && !iconNums) {
            nameArr = [];
            iconNums = [];
          }
          var _loop_1 = function(i) {
            var item = cc.instantiate(prefab);
            parent.addChild(item);
            item.setPosition(0, -89 * i);
            var randName = "";
            var index = RedUtil_1.RedUtil.getRandomNum(0, 30);
            if (self.isHaveListsave) {
              randName = nameArr[i];
              self.itemListName.push(randName);
              var indd = self.itemList.indexOf(index);
              -1 == indd && self.itemList.push(index);
            } else {
              var indd = self.itemList.indexOf(index);
              if (indd > -1) randName = self.itemListName[indd]; else {
                randName = self.getRandomName();
                self.itemListName.push(randName);
                self.itemList.push(index);
              }
              nameArr.push(randName);
            }
            var timeM = timearr[i];
            var randtime = self.getRandomTime(timeM[0], timeM[1], timeM[2]);
            var iconNum = 0;
            if (self.isHaveListsave) iconNum = iconNums[i]; else {
              var rand = RedUtil_1.RedUtil.getRandomNum(1, 3);
              1 != rand && (iconNum = RedUtil_1.RedUtil.getRandomNum(0, RedUtil_1.RedUtil.headIcons.length - 1));
              iconNums.push(iconNum);
            }
            var iconskin = RedUtil_1.RedUtil.headIcons[iconNum];
            var vHeadicon = item.getChildByName("vHeadicon").getComponent(cc.Sprite);
            var userName = item.getChildByName("userName").getComponent(cc.Label);
            var vTime = item.getChildByName("vTime").getComponent(cc.Label);
            cc.loader.loadRes(iconskin, cc.SpriteFrame, function(err, spriteframe) {
              vHeadicon.spriteFrame = spriteframe;
            });
            userName.string = randName;
            vTime.string = randtime;
          };
          for (var i = 0; i < self.yesterdayHaveNum; i++) _loop_1(i);
          if (!self.isHaveListsave) {
            var date = new Date();
            var datestr = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
            cc.sys.localStorage.setItem("yesterdayListdate", datestr);
            var listarr = {
              yesterdayListTime: timearr,
              yesterdayListName: nameArr,
              yesterdayListIcon: iconNums
            };
            cc.sys.localStorage.setItem("yesterdayList", JSON.stringify(listarr));
          }
        });
        console.log("prefabb===========" + prefab);
      };
      NewClass.prototype.myRedStarClick = function() {
        RedUtil_1.RedUtil._RedquestState = 1;
        RedUtil_1.RedUtil.openQuestRedPack("", "2", false, null, 0);
      };
      NewClass.prototype.getRandomName = function() {
        var ranIndex = RedUtil_1.RedUtil.getRandomNum(1, 2);
        var strName = "";
        var randName = RedUtil_1.RedUtil.randomName;
        2 == ranIndex && (randName = RedUtil_1.RedUtil.randomName2);
        if (randName) {
          var firstArr = randName[0];
          var secondArr = randName[1];
          var ranNum1 = RedUtil_1.RedUtil.getRandomNum(1, 2);
          if (ranNum1 > 0) for (var i = 0; i < ranNum1; i++) {
            var rand = RedUtil_1.RedUtil.getRandomNum(0, firstArr.length - 1);
            firstArr[rand] && (strName += firstArr[rand]);
          } else {
            var rand = RedUtil_1.RedUtil.getRandomNum(0, firstArr.length - 1);
            firstArr[rand] && (strName += firstArr[rand]);
          }
          var ranNum2 = RedUtil_1.RedUtil.getRandomNum(1, 2);
          if (ranNum2 > 0) for (var i = 0; i < ranNum2; i++) {
            var rand = RedUtil_1.RedUtil.getRandomNum(0, secondArr.length - 1);
            secondArr[rand] && (strName += secondArr[rand]);
          } else {
            var rand = RedUtil_1.RedUtil.getRandomNum(0, secondArr.length - 1);
            secondArr[rand] && (strName += secondArr[rand]);
          }
        }
        return strName;
      };
      NewClass.prototype.sortTime = function(arry) {
        if (arry instanceof Array) {
          var falag = false;
          for (var i = 0; i < arry.length - 1; i++) {
            falag = falag;
            for (var j = arry.length - 1; j > i; j--) {
              var currt = arry[j - 1];
              var next = arry[j];
              if (currt instanceof Array && currt.length > 2) if (currt[0] < next[0]) {
                var temp = arry[j - 1];
                arry[j - 1] = arry[j];
                arry[j] = temp;
                falag = true;
              } else if (currt[0] == next[0]) if (currt[1] < next[1]) {
                var temp = arry[j - 1];
                arry[j - 1] = arry[j];
                arry[j] = temp;
                falag = true;
              } else if (currt[1] == next[1] && currt[2] < next[2]) {
                var temp = arry[j - 1];
                arry[j - 1] = arry[j];
                arry[j] = temp;
                falag = true;
              }
            }
          }
        }
      };
      NewClass.prototype.getRandomTime = function(hour, min, sec) {
        var timeStr1 = hour > 9 ? hour.toString() : "0" + hour.toString();
        var timeStr2 = min > 9 ? min.toString() : "0" + min.toString();
        var timeStr3 = sec > 9 ? sec.toString() : "0" + sec.toString();
        return timeStr1 + ":" + timeStr2 + ":" + timeStr3;
      };
      NewClass.prototype.getParams = function(parmp) {
        if (parmp) {
          if (parmp.callBack) {
            this._callBack = parmp.callBack;
            this._callBack && this._callBack.nextOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.nextOpened);
          }
          parmp.propTitle && "" != parmp.propTitle && (this.v_propTitle = parmp.propTitle);
          parmp.propIcon && "" != parmp.propIcon && (this.v_propIcon = parmp.propIcon);
        }
      };
      NewClass.prototype.openTurnPage = function() {
        var parmp = {
          callBack: this._callBack,
          propTitle: this.v_propTitle,
          propIcon: this.v_propIcon,
          starNum: this.surplusNum
        };
        cc.loader.loadRes("alySDK/alyprofabs/turnPage", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            var parentNode = cc.director.getScene();
            parentNode.addChild(newNode);
            newNode.setPosition(parentNode.width / 2, parentNode.height / 2);
            RedUtil_1.RedUtil._turnPage = newNode;
            if (parmp) {
              var cla = newNode.getComponent(turnPage_1.default);
              cla.getParams(parmp);
            }
          }
        });
      };
      NewClass.prototype.openintrducePage = function() {
        var parentNode = cc.director.getScene();
        cc.loader.loadRes("alySDK/alyprofabs/intrducePage", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            parentNode.addChild(newNode);
            newNode.setPosition(parentNode.width / 2, parentNode.height / 2);
          }
        });
      };
      NewClass.prototype.openintrducePage2 = function() {
        var parentNode = cc.director.getScene();
        var parmp = {
          title: "\u5e7f\u544a\u6536\u76ca\u8bf4\u660e",
          content: "\u5e7f\u544a\u6536\u76ca\u662f\u6307\u8be5\u6b3e\u6e38\u620f\u901a\u8fc7\u5e94\u7528\u5185\u5e7f\u544a\n\u53ca\u5176\u5b83\u5546\u4e1a\u5316\u65b9\u5f0f\u83b7\u5f97\u7684\u6536\u76ca\uff0c\u5168\u73b0\u91d1\u516c\n\u5f00\u900f\u660e\uff0c\u5927\u5bb6\u5171\u540c\u76d1\u7763\u3002"
        };
        cc.loader.loadRes("alySDK/alyprofabs/intrducePage", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            parentNode.addChild(newNode);
            newNode.setPosition(parentNode.width / 2, parentNode.height / 2);
            if (parmp) {
              var cla = newNode.getComponent(intrducePage_1.default);
              cla.getParams(parmp);
            }
          }
        });
      };
      NewClass.prototype.openMyStarPage = function(todaymoney, totalmoney) {
        console.log("openMyStarPage--------");
        var parentNode = cc.director.getScene();
        var xianshinum = 0;
        var longnum = 0;
        var date = new Date();
        var dateStr = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        var todayStar = cc.sys.localStorage.getItem("todayRedNum");
        if (todayStar) {
          var todayArr = todayStar.split(";");
          todayArr instanceof Array && todayArr.length > 1 && todayArr[0] == dateStr && (xianshinum = Number(todayArr[1]));
        }
        var parmp = {
          propTitle: this.v_propTitle,
          propIcon: this.v_propIcon,
          xianshi: xianshinum,
          today: todaymoney,
          allNum: totalmoney,
          longNum: 0,
          starNum: this.surplusNum,
          callBack: this._callBack
        };
        cc.loader.loadRes("alySDK/alyprofabs/myRedStarPgae", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            parentNode.addChild(newNode);
            newNode.setPosition(parentNode.width / 2, parentNode.height / 2);
            if (parmp) {
              var cla = newNode.getComponent(myStarPage_1.default);
              cla.getParams(parmp);
            }
          }
        });
      };
      __decorate([ property(cc.Button) ], NewClass.prototype, "v_backBtn", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "v_guanggaoBtn", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "v_yearstoday", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "v_history", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "v_fenhongBtn", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "v_everyred", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "v_myRedBtn", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "v_todayNum", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "v_willNum", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "v_alltake", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "v_listBg", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "background", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "v_listScrollbg", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "v_selectRedBtn", void 0);
      __decorate([ property(cc.ScrollView) ], NewClass.prototype, "listView", void 0);
      __decorate([ property(cc.ScrollView) ], NewClass.prototype, "v_list", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "bottomBorder", void 0);
      __decorate([ property ], NewClass.prototype, "_callBack", void 0);
      __decorate([ property ], NewClass.prototype, "v_propTitle", void 0);
      __decorate([ property ], NewClass.prototype, "v_propIcon", void 0);
      __decorate([ property ], NewClass.prototype, "surplusNum", void 0);
      __decorate([ property ], NewClass.prototype, "yesterdayHaveNum", void 0);
      __decorate([ property ], NewClass.prototype, "isHaveListsave", void 0);
      __decorate([ property ], NewClass.prototype, "isoverCreate", void 0);
      __decorate([ property ], NewClass.prototype, "itemList", void 0);
      __decorate([ property ], NewClass.prototype, "itemListName", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil",
    "./intrducePage": "intrducePage",
    "./myStarPage": "myStarPage",
    "./turnPage": "turnPage"
  } ],
  moneyRecordPage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f0a5NmXMtB+rgZtLjiZu25", "moneyRecordPage");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RedUtil_1 = require("../RedUtil");
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.v_intrdList = null;
        _this.closeBtn = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        if (!this.v_intrdList || !this.closeBtn) {
          var background = this.node.getChildByName("background");
          this.closeBtn = background.getChildByName("closeBtn").getComponent(cc.Button);
          this.v_intrdList = background.getChildByName("v_intrdList").getComponent(cc.ScrollView);
        }
      };
      NewClass.prototype.start = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        var background = this.node.getChildByName("background");
        background.width = this.node.width;
        background.height = this.node.height;
        background.setPosition(.5 * -this.node.width, .5 * this.node.height);
        console.log("node--222222-");
        this.v_intrdList.node.height = this.node.height - 181;
        var view = this.v_intrdList.node.getChildByName("view");
        view.height = this.node.height - 181;
        this.v_intrdList.content.setPosition(0, 0);
        this.v_intrdList.node.setPosition(.5 * (this.node.width - this.v_intrdList.node.width), -145);
        this.closeBtn.node.on("click", this.destroySelf, this);
        var record = cc.sys.localStorage.getItem("MoneyRecord");
        if (record) {
          var recordO = JSON.parse(record);
          var name = recordO.recordName;
          var time = recordO.MoneyTime;
          var money = recordO.MoneyValue;
          this._setList(name, time, money);
        }
      };
      NewClass.prototype._setList = function(arr, arr2, arr3) {
        console.log("arr.length===========================================" + arr.length);
        var content = this.v_intrdList.content;
        content.height = 80 * arr.length;
        var _loop_1 = function(i) {
          cc.loader.loadRes("alySDK/alyprofabs/moneyLIst_item", function(err, prefab) {
            var newNode = cc.instantiate(prefab);
            if (newNode) {
              newNode.setPosition(0, -80 * i);
              content.addChild(newNode);
              var aName = newNode.getChildByName("aName").getComponent(cc.Label);
              aName.string = arr[i];
              var aTime = newNode.getChildByName("aTime").getComponent(cc.Label);
              aTime.string = arr2[i];
              var money = newNode.getChildByName("money").getComponent(cc.Label);
              money.string = "+" + Number(arr3[i]) / 100;
            }
          });
        };
        for (var i = 0; i < arr.length; i++) _loop_1(i);
      };
      NewClass.prototype.destroySelf = function() {
        this.node.destroy();
      };
      __decorate([ property(cc.ScrollView) ], NewClass.prototype, "v_intrdList", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "closeBtn", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil"
  } ],
  myStarPage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12c81oblOpAbqBI8cbsgwQT", "myStarPage");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var turnPage_1 = require("./turnPage");
    var RedUtil_1 = require("../RedUtil");
    var myStarPage = function(_super) {
      __extends(myStarPage, _super);
      function myStarPage() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.v_xianshi = null;
        _this.v_fenhong = null;
        _this.v_leiji = null;
        _this.v_yongjiu = null;
        _this.v_selectBtn = null;
        _this.v_closeBtn = null;
        _this.v_propTitle = "";
        _this.v_propIcon = "";
        _this.surplusNum = 0;
        _this._callBack = null;
        return _this;
      }
      myStarPage.prototype.onLoad = function() {
        var redBg = this.node.getChildByName("redBg");
        this.v_fenhong = redBg.getChildByName("v_fenhong").getComponent(cc.Label);
        this.v_xianshi = redBg.getChildByName("v_xianshi").getComponent(cc.Label);
        this.v_leiji = redBg.getChildByName("v_leiji").getComponent(cc.Label);
        this.v_yongjiu = redBg.getChildByName("v_yongjiu").getComponent(cc.Label);
        this.v_selectBtn = redBg.getChildByName("v_selectBtn").getComponent(cc.Button);
        this.v_closeBtn = this.node.getChildByName("v_closeBtn").getComponent(cc.Button);
      };
      myStarPage.prototype.start = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        this.v_closeBtn.node.on("click", this.destroySelf, this);
        this.v_selectBtn.node.on("click", this.openTurnPage, this);
      };
      myStarPage.prototype.destroySelf = function() {
        this.node.destroy();
      };
      myStarPage.prototype.openTurnPage = function() {
        var parmp = {
          starNum: this.surplusNum,
          propTitle: this.v_propTitle,
          propIcon: this.v_propIcon,
          callBack: this._callBack
        };
        cc.loader.loadRes("alySDK/alyprofabs/turnPage", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            var parentNode = cc.director.getScene();
            parentNode.addChild(newNode);
            newNode.setPosition(parentNode.width / 2, parentNode.height / 2);
            if (parmp) {
              var cla = newNode.getComponent(turnPage_1.default);
              cla.getParams(parmp);
            }
          }
        });
      };
      myStarPage.prototype.getParams = function(parmp) {
        if (parmp) {
          parmp.callBack && (this._callBack = parmp.callBack);
          parmp.propTitle && "" != parmp.propTitle && (this.v_propTitle = parmp.propTitle);
          parmp.propIcon && "" != parmp.propIcon && (this.v_propIcon = parmp.propIcon);
          this.v_xianshi.string = "\u83b7\u5f97\u9650\u65f6\u5206\u7ea2\u661f\uff1a" + parmp.xianshi + "\u9897";
          this.v_fenhong.string = "\u4eca\u65e5\u5206\u7ea2\uff1a" + parmp.today + "\u5143";
          this.v_leiji.string = "\u7d2f\u8ba1\u5206\u7ea2\uff1a" + parmp.allNum + "\u5143";
          var strv = "\u672a\u83b7\u5f97";
          parmp.longNum > 0 && (strv = parmp.longNum + "\u9897");
          this.v_yongjiu.string = "\u6c38\u4e45\u5206\u7ea2\u661f\uff1a" + strv;
          this.surplusNum = parmp.starNum;
        }
      };
      __decorate([ property(cc.Label) ], myStarPage.prototype, "v_xianshi", void 0);
      __decorate([ property(cc.Label) ], myStarPage.prototype, "v_fenhong", void 0);
      __decorate([ property(cc.Label) ], myStarPage.prototype, "v_leiji", void 0);
      __decorate([ property(cc.Label) ], myStarPage.prototype, "v_yongjiu", void 0);
      __decorate([ property(cc.Button) ], myStarPage.prototype, "v_selectBtn", void 0);
      __decorate([ property(cc.Button) ], myStarPage.prototype, "v_closeBtn", void 0);
      __decorate([ property ], myStarPage.prototype, "v_propTitle", void 0);
      __decorate([ property ], myStarPage.prototype, "v_propIcon", void 0);
      __decorate([ property ], myStarPage.prototype, "surplusNum", void 0);
      __decorate([ property ], myStarPage.prototype, "_callBack", void 0);
      myStarPage = __decorate([ ccclass ], myStarPage);
      return myStarPage;
    }(cc.Component);
    exports.default = myStarPage;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil",
    "./turnPage": "turnPage"
  } ],
  proppop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30c57VQv7JMMZmEAycaD3Tz", "proppop");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var BaseView_1 = require("../../core/View/BaseView");
    var GameJSB_1 = require("../GameJSB");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var proppop = function(_super) {
      __extends(proppop, _super);
      function proppop() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      proppop.prototype.onLoad = function() {};
      proppop.prototype.start = function() {};
      proppop.prototype.update = function(dt) {};
      proppop.prototype.clickBtn = function() {
        GameJSB_1.GameJSB.getAndroidShowRv("\u4f7f\u7528\u9053\u5177");
      };
      proppop.prototype.exam = function() {
        var now = new Date(this.time);
        var killStarTime = parseInt(localStorage.getItem("killStarTime"));
        var last = now;
        killStarTime && (last = new Date(killStarTime));
        return last.getMonth() == now.getMonth() && last.getDate() == now.getDate() && now != last;
      };
      proppop.prototype.clickCloseBtn = function() {
        ViewManager_1.default.getInstance().CloseView("proppop");
      };
      proppop = __decorate([ ccclass ], proppop);
      return proppop;
    }(BaseView_1.default);
    exports.default = proppop;
    cc._RF.pop();
  }, {
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/View/BaseView": "BaseView",
    "../GameJSB": "GameJSB"
  } ],
  protobuf_all: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "405116r239MCq3BHS2HyFbY", "protobuf_all");
    "use strict";
    (function(global, undefined) {
      (function prelude(modules, cache, entries) {
        function $require(name) {
          var $module = cache[name];
          $module || modules[name][0].call($module = cache[name] = {
            exports: {}
          }, $require, $module, $module.exports);
          return $module.exports;
        }
        var protobuf = global.protobuf = $require(entries[0]);
        "function" === typeof define && define.amd && define([ "long" ], function(Long) {
          if (Long && Long.isLong) {
            protobuf.util.Long = Long;
            protobuf.configure();
          }
          return protobuf;
        });
        "object" === typeof module && module && module.exports && (module.exports = protobuf);
      })({
        1: [ function(require, module, exports) {
          module.exports = asPromise;
          function asPromise(fn, ctx) {
            var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
            while (index < arguments.length) params[offset++] = arguments[index++];
            return new Promise(function executor(resolve, reject) {
              params[offset] = function callback(err) {
                if (pending) {
                  pending = false;
                  if (err) reject(err); else {
                    var params = new Array(arguments.length - 1), offset = 0;
                    while (offset < params.length) params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                  }
                }
              };
              try {
                fn.apply(ctx || null, params);
              } catch (err) {
                if (pending) {
                  pending = false;
                  reject(err);
                }
              }
            });
          }
        }, {} ],
        2: [ function(require, module, exports) {
          var base64 = exports;
          base64.length = function length(string) {
            var p = string.length;
            if (!p) return 0;
            var n = 0;
            while (--p % 4 > 1 && "=" === string.charAt(p)) ++n;
            return Math.ceil(3 * string.length) / 4 - n;
          };
          var b64 = new Array(64);
          var s64 = new Array(123);
          for (var i = 0; i < 64; ) s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
          base64.encode = function encode(buffer, start, end) {
            var parts = null, chunk = [];
            var i = 0, j = 0, t;
            while (start < end) {
              var b = buffer[start++];
              switch (j) {
               case 0:
                chunk[i++] = b64[b >> 2];
                t = (3 & b) << 4;
                j = 1;
                break;

               case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (15 & b) << 2;
                j = 2;
                break;

               case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[63 & b];
                j = 0;
              }
              if (i > 8191) {
                (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
                i = 0;
              }
            }
            if (j) {
              chunk[i++] = b64[t];
              chunk[i++] = 61;
              1 === j && (chunk[i++] = 61);
            }
            if (parts) {
              i && parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
              return parts.join("");
            }
            return String.fromCharCode.apply(String, chunk.slice(0, i));
          };
          var invalidEncoding = "invalid encoding";
          base64.decode = function decode(string, buffer, offset) {
            var start = offset;
            var j = 0, t;
            for (var i = 0; i < string.length; ) {
              var c = string.charCodeAt(i++);
              if (61 === c && j > 1) break;
              if ((c = s64[c]) === undefined) throw Error(invalidEncoding);
              switch (j) {
               case 0:
                t = c;
                j = 1;
                break;

               case 1:
                buffer[offset++] = t << 2 | (48 & c) >> 4;
                t = c;
                j = 2;
                break;

               case 2:
                buffer[offset++] = (15 & t) << 4 | (60 & c) >> 2;
                t = c;
                j = 3;
                break;

               case 3:
                buffer[offset++] = (3 & t) << 6 | c;
                j = 0;
              }
            }
            if (1 === j) throw Error(invalidEncoding);
            return offset - start;
          };
          base64.test = function test(string) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
          };
        }, {} ],
        3: [ function(require, module, exports) {
          module.exports = codegen;
          function codegen(functionParams, functionName) {
            if ("string" === typeof functionParams) {
              functionName = functionParams;
              functionParams = undefined;
            }
            var body = [];
            function Codegen(formatStringOrScope) {
              if ("string" !== typeof formatStringOrScope) {
                var source = toString();
                codegen.verbose && console.log("codegen: " + source);
                source = "return " + source;
                if (formatStringOrScope) {
                  var scopeKeys = Object.keys(formatStringOrScope), scopeParams = new Array(scopeKeys.length + 1), scopeValues = new Array(scopeKeys.length), scopeOffset = 0;
                  while (scopeOffset < scopeKeys.length) {
                    scopeParams[scopeOffset] = scopeKeys[scopeOffset];
                    scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
                  }
                  scopeParams[scopeOffset] = source;
                  return Function.apply(null, scopeParams).apply(null, scopeValues);
                }
                return Function(source)();
              }
              var formatParams = new Array(arguments.length - 1), formatOffset = 0;
              while (formatOffset < formatParams.length) formatParams[formatOffset] = arguments[++formatOffset];
              formatOffset = 0;
              formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
                var value = formatParams[formatOffset++];
                switch ($1) {
                 case "d":
                 case "f":
                  return String(Number(value));

                 case "i":
                  return String(Math.floor(value));

                 case "j":
                  return JSON.stringify(value);

                 case "s":
                  return String(value);
                }
                return "%";
              });
              if (formatOffset !== formatParams.length) throw Error("parameter count mismatch");
              body.push(formatStringOrScope);
              return Codegen;
            }
            function toString(functionNameOverride) {
              return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
            }
            Codegen.toString = toString;
            return Codegen;
          }
          codegen.verbose = false;
        }, {} ],
        4: [ function(require, module, exports) {
          module.exports = EventEmitter;
          function EventEmitter() {
            this._listeners = {};
          }
          EventEmitter.prototype.on = function on(evt, fn, ctx) {
            (this._listeners[evt] || (this._listeners[evt] = [])).push({
              fn: fn,
              ctx: ctx || this
            });
            return this;
          };
          EventEmitter.prototype.off = function off(evt, fn) {
            if (evt === undefined) this._listeners = {}; else if (fn === undefined) this._listeners[evt] = []; else {
              var listeners = this._listeners[evt];
              for (var i = 0; i < listeners.length; ) listeners[i].fn === fn ? listeners.splice(i, 1) : ++i;
            }
            return this;
          };
          EventEmitter.prototype.emit = function emit(evt) {
            var listeners = this._listeners[evt];
            if (listeners) {
              var args = [], i = 1;
              for (;i < arguments.length; ) args.push(arguments[i++]);
              for (i = 0; i < listeners.length; ) listeners[i].fn.apply(listeners[i++].ctx, args);
            }
            return this;
          };
        }, {} ],
        5: [ function(require, module, exports) {
          module.exports = fetch;
          var asPromise = require(1), inquire = require(7);
          var fs = inquire("fs");
          function fetch(filename, options, callback) {
            if ("function" === typeof options) {
              callback = options;
              options = {};
            } else options || (options = {});
            if (!callback) return asPromise(fetch, this, filename, options);
            if (!options.xhr && fs && fs.readFile) return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
              return err && "undefined" !== typeof XMLHttpRequest ? fetch.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
            });
            return fetch.xhr(filename, options, callback);
          }
          fetch.xhr = function fetch_xhr(filename, options, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function fetchOnReadyStateChange() {
              if (4 !== xhr.readyState) return undefined;
              if (0 !== xhr.status && 200 !== xhr.status) return callback(Error("status " + xhr.status));
              if (options.binary) {
                var buffer = xhr.response;
                if (!buffer) {
                  buffer = [];
                  for (var i = 0; i < xhr.responseText.length; ++i) buffer.push(255 & xhr.responseText.charCodeAt(i));
                }
                return callback(null, "undefined" !== typeof Uint8Array ? new Uint8Array(buffer) : buffer);
              }
              return callback(null, xhr.responseText);
            };
            if (options.binary) {
              "overrideMimeType" in xhr && xhr.overrideMimeType("text/plain; charset=x-user-defined");
              xhr.responseType = "arraybuffer";
            }
            xhr.open("GET", filename);
            xhr.send();
          };
        }, {
          1: 1,
          7: 7
        } ],
        6: [ function(require, module, exports) {
          module.exports = factory(factory);
          function factory(exports) {
            "undefined" !== typeof Float32Array ? function() {
              var f32 = new Float32Array([ -0 ]), f8b = new Uint8Array(f32.buffer), le = 128 === f8b[3];
              function writeFloat_f32_cpy(val, buf, pos) {
                f32[0] = val;
                buf[pos] = f8b[0];
                buf[pos + 1] = f8b[1];
                buf[pos + 2] = f8b[2];
                buf[pos + 3] = f8b[3];
              }
              function writeFloat_f32_rev(val, buf, pos) {
                f32[0] = val;
                buf[pos] = f8b[3];
                buf[pos + 1] = f8b[2];
                buf[pos + 2] = f8b[1];
                buf[pos + 3] = f8b[0];
              }
              exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
              exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
              function readFloat_f32_cpy(buf, pos) {
                f8b[0] = buf[pos];
                f8b[1] = buf[pos + 1];
                f8b[2] = buf[pos + 2];
                f8b[3] = buf[pos + 3];
                return f32[0];
              }
              function readFloat_f32_rev(buf, pos) {
                f8b[3] = buf[pos];
                f8b[2] = buf[pos + 1];
                f8b[1] = buf[pos + 2];
                f8b[0] = buf[pos + 3];
                return f32[0];
              }
              exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
              exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
            }() : function() {
              function writeFloat_ieee754(writeUint, val, buf, pos) {
                var sign = val < 0 ? 1 : 0;
                sign && (val = -val);
                if (0 === val) writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos); else if (isNaN(val)) writeUint(2143289344, buf, pos); else if (val > 34028234663852886e22) writeUint((sign << 31 | 2139095040) >>> 0, buf, pos); else if (val < 11754943508222875e-54) writeUint((sign << 31 | Math.round(val / 1401298464324817e-60)) >>> 0, buf, pos); else {
                  var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = 8388607 & Math.round(val * Math.pow(2, -exponent) * 8388608);
                  writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
                }
              }
              exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
              exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
              function readFloat_ieee754(readUint, buf, pos) {
                var uint = readUint(buf, pos), sign = 2 * (uint >> 31) + 1, exponent = uint >>> 23 & 255, mantissa = 8388607 & uint;
                return 255 === exponent ? mantissa ? NaN : Infinity * sign : 0 === exponent ? 1401298464324817e-60 * sign * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
              }
              exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
              exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
            }();
            "undefined" !== typeof Float64Array ? function() {
              var f64 = new Float64Array([ -0 ]), f8b = new Uint8Array(f64.buffer), le = 128 === f8b[7];
              function writeDouble_f64_cpy(val, buf, pos) {
                f64[0] = val;
                buf[pos] = f8b[0];
                buf[pos + 1] = f8b[1];
                buf[pos + 2] = f8b[2];
                buf[pos + 3] = f8b[3];
                buf[pos + 4] = f8b[4];
                buf[pos + 5] = f8b[5];
                buf[pos + 6] = f8b[6];
                buf[pos + 7] = f8b[7];
              }
              function writeDouble_f64_rev(val, buf, pos) {
                f64[0] = val;
                buf[pos] = f8b[7];
                buf[pos + 1] = f8b[6];
                buf[pos + 2] = f8b[5];
                buf[pos + 3] = f8b[4];
                buf[pos + 4] = f8b[3];
                buf[pos + 5] = f8b[2];
                buf[pos + 6] = f8b[1];
                buf[pos + 7] = f8b[0];
              }
              exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
              exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
              function readDouble_f64_cpy(buf, pos) {
                f8b[0] = buf[pos];
                f8b[1] = buf[pos + 1];
                f8b[2] = buf[pos + 2];
                f8b[3] = buf[pos + 3];
                f8b[4] = buf[pos + 4];
                f8b[5] = buf[pos + 5];
                f8b[6] = buf[pos + 6];
                f8b[7] = buf[pos + 7];
                return f64[0];
              }
              function readDouble_f64_rev(buf, pos) {
                f8b[7] = buf[pos];
                f8b[6] = buf[pos + 1];
                f8b[5] = buf[pos + 2];
                f8b[4] = buf[pos + 3];
                f8b[3] = buf[pos + 4];
                f8b[2] = buf[pos + 5];
                f8b[1] = buf[pos + 6];
                f8b[0] = buf[pos + 7];
                return f64[0];
              }
              exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
              exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
            }() : function() {
              function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
                var sign = val < 0 ? 1 : 0;
                sign && (val = -val);
                if (0 === val) {
                  writeUint(0, buf, pos + off0);
                  writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos + off1);
                } else if (isNaN(val)) {
                  writeUint(0, buf, pos + off0);
                  writeUint(2146959360, buf, pos + off1);
                } else if (val > 17976931348623157e292) {
                  writeUint(0, buf, pos + off0);
                  writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
                } else {
                  var mantissa;
                  if (val < 22250738585072014e-324) {
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                  } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    1024 === exponent && (exponent = 1023);
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(4503599627370496 * mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | 1048576 * mantissa & 1048575) >>> 0, buf, pos + off1);
                  }
                }
              }
              exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
              exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
              function readDouble_ieee754(readUint, off0, off1, buf, pos) {
                var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
                var sign = 2 * (hi >> 31) + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (1048575 & hi) + lo;
                return 2047 === exponent ? mantissa ? NaN : Infinity * sign : 0 === exponent ? 5e-324 * sign * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
              }
              exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
              exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
            }();
            return exports;
          }
          function writeUintLE(val, buf, pos) {
            buf[pos] = 255 & val;
            buf[pos + 1] = val >>> 8 & 255;
            buf[pos + 2] = val >>> 16 & 255;
            buf[pos + 3] = val >>> 24;
          }
          function writeUintBE(val, buf, pos) {
            buf[pos] = val >>> 24;
            buf[pos + 1] = val >>> 16 & 255;
            buf[pos + 2] = val >>> 8 & 255;
            buf[pos + 3] = 255 & val;
          }
          function readUintLE(buf, pos) {
            return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
          }
          function readUintBE(buf, pos) {
            return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
          }
        }, {} ],
        7: [ function(require, module, exports) {
          module.exports = inquire;
          function inquire(moduleName) {
            try {
              var mod = eval("quire".replace(/^/, "re"))(moduleName);
              if (mod && (mod.length || Object.keys(mod).length)) return mod;
            } catch (e) {}
            return null;
          }
        }, {} ],
        8: [ function(require, module, exports) {
          var path = exports;
          var isAbsolute = path.isAbsolute = function isAbsolute(path) {
            return /^(?:\/|\w+:)/.test(path);
          };
          var normalize = path.normalize = function normalize(path) {
            path = path.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
            var parts = path.split("/"), absolute = isAbsolute(path), prefix = "";
            absolute && (prefix = parts.shift() + "/");
            for (var i = 0; i < parts.length; ) ".." === parts[i] ? i > 0 && ".." !== parts[i - 1] ? parts.splice(--i, 2) : absolute ? parts.splice(i, 1) : ++i : "." === parts[i] ? parts.splice(i, 1) : ++i;
            return prefix + parts.join("/");
          };
          path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
            alreadyNormalized || (includePath = normalize(includePath));
            if (isAbsolute(includePath)) return includePath;
            alreadyNormalized || (originPath = normalize(originPath));
            return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
          };
        }, {} ],
        9: [ function(require, module, exports) {
          module.exports = pool;
          function pool(alloc, slice, size) {
            var SIZE = size || 8192;
            var MAX = SIZE >>> 1;
            var slab = null;
            var offset = SIZE;
            return function pool_alloc(size) {
              if (size < 1 || size > MAX) return alloc(size);
              if (offset + size > SIZE) {
                slab = alloc(SIZE);
                offset = 0;
              }
              var buf = slice.call(slab, offset, offset += size);
              7 & offset && (offset = 1 + (7 | offset));
              return buf;
            };
          }
        }, {} ],
        10: [ function(require, module, exports) {
          var utf8 = exports;
          utf8.length = function utf8_length(string) {
            var len = 0, c = 0;
            for (var i = 0; i < string.length; ++i) {
              c = string.charCodeAt(i);
              if (c < 128) len += 1; else if (c < 2048) len += 2; else if (55296 === (64512 & c) && 56320 === (64512 & string.charCodeAt(i + 1))) {
                ++i;
                len += 4;
              } else len += 3;
            }
            return len;
          };
          utf8.read = function utf8_read(buffer, start, end) {
            var len = end - start;
            if (len < 1) return "";
            var parts = null, chunk = [], i = 0, t;
            while (start < end) {
              t = buffer[start++];
              if (t < 128) chunk[i++] = t; else if (t > 191 && t < 224) chunk[i++] = (31 & t) << 6 | 63 & buffer[start++]; else if (t > 239 && t < 365) {
                t = ((7 & t) << 18 | (63 & buffer[start++]) << 12 | (63 & buffer[start++]) << 6 | 63 & buffer[start++]) - 65536;
                chunk[i++] = 55296 + (t >> 10);
                chunk[i++] = 56320 + (1023 & t);
              } else chunk[i++] = (15 & t) << 12 | (63 & buffer[start++]) << 6 | 63 & buffer[start++];
              if (i > 8191) {
                (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
                i = 0;
              }
            }
            if (parts) {
              i && parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
              return parts.join("");
            }
            return String.fromCharCode.apply(String, chunk.slice(0, i));
          };
          utf8.write = function utf8_write(string, buffer, offset) {
            var start = offset, c1, c2;
            for (var i = 0; i < string.length; ++i) {
              c1 = string.charCodeAt(i);
              if (c1 < 128) buffer[offset++] = c1; else if (c1 < 2048) {
                buffer[offset++] = c1 >> 6 | 192;
                buffer[offset++] = 63 & c1 | 128;
              } else if (55296 === (64512 & c1) && 56320 === (64512 & (c2 = string.charCodeAt(i + 1)))) {
                c1 = 65536 + ((1023 & c1) << 10) + (1023 & c2);
                ++i;
                buffer[offset++] = c1 >> 18 | 240;
                buffer[offset++] = c1 >> 12 & 63 | 128;
                buffer[offset++] = c1 >> 6 & 63 | 128;
                buffer[offset++] = 63 & c1 | 128;
              } else {
                buffer[offset++] = c1 >> 12 | 224;
                buffer[offset++] = c1 >> 6 & 63 | 128;
                buffer[offset++] = 63 & c1 | 128;
              }
            }
            return offset - start;
          };
        }, {} ],
        11: [ function(require, module, exports) {
          module.exports = common;
          var commonRe = /\/|\./;
          function common(name, json) {
            if (!commonRe.test(name)) {
              name = "google/protobuf/" + name + ".proto";
              json = {
                nested: {
                  google: {
                    nested: {
                      protobuf: {
                        nested: json
                      }
                    }
                  }
                }
              };
            }
            common[name] = json;
          }
          common("any", {
            Any: {
              fields: {
                type_url: {
                  type: "string",
                  id: 1
                },
                value: {
                  type: "bytes",
                  id: 2
                }
              }
            }
          });
          var timeType;
          common("duration", {
            Duration: timeType = {
              fields: {
                seconds: {
                  type: "int64",
                  id: 1
                },
                nanos: {
                  type: "int32",
                  id: 2
                }
              }
            }
          });
          common("timestamp", {
            Timestamp: timeType
          });
          common("empty", {
            Empty: {
              fields: {}
            }
          });
          common("struct", {
            Struct: {
              fields: {
                fields: {
                  keyType: "string",
                  type: "Value",
                  id: 1
                }
              }
            },
            Value: {
              oneofs: {
                kind: {
                  oneof: [ "nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue" ]
                }
              },
              fields: {
                nullValue: {
                  type: "NullValue",
                  id: 1
                },
                numberValue: {
                  type: "double",
                  id: 2
                },
                stringValue: {
                  type: "string",
                  id: 3
                },
                boolValue: {
                  type: "bool",
                  id: 4
                },
                structValue: {
                  type: "Struct",
                  id: 5
                },
                listValue: {
                  type: "ListValue",
                  id: 6
                }
              }
            },
            NullValue: {
              values: {
                NULL_VALUE: 0
              }
            },
            ListValue: {
              fields: {
                values: {
                  rule: "repeated",
                  type: "Value",
                  id: 1
                }
              }
            }
          });
          common("wrappers", {
            DoubleValue: {
              fields: {
                value: {
                  type: "double",
                  id: 1
                }
              }
            },
            FloatValue: {
              fields: {
                value: {
                  type: "float",
                  id: 1
                }
              }
            },
            Int64Value: {
              fields: {
                value: {
                  type: "int64",
                  id: 1
                }
              }
            },
            UInt64Value: {
              fields: {
                value: {
                  type: "uint64",
                  id: 1
                }
              }
            },
            Int32Value: {
              fields: {
                value: {
                  type: "int32",
                  id: 1
                }
              }
            },
            UInt32Value: {
              fields: {
                value: {
                  type: "uint32",
                  id: 1
                }
              }
            },
            BoolValue: {
              fields: {
                value: {
                  type: "bool",
                  id: 1
                }
              }
            },
            StringValue: {
              fields: {
                value: {
                  type: "string",
                  id: 1
                }
              }
            },
            BytesValue: {
              fields: {
                value: {
                  type: "bytes",
                  id: 1
                }
              }
            }
          });
          common.get = function get(file) {
            return common[file] || null;
          };
        }, {} ],
        12: [ function(require, module, exports) {
          var converter = exports;
          var Enum = require(15), util = require(37);
          function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
            if (field.resolvedType) if (field.resolvedType instanceof Enum) {
              gen("switch(d%s){", prop);
              for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
                field.repeated && values[keys[i]] === field.typeDefault && gen("default:");
                gen("case%j:", keys[i])("case %i:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
              }
              gen("}");
            } else gen('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop); else {
              var isUnsigned = false;
              switch (field.type) {
               case "double":
               case "float":
                gen("m%s=Number(d%s)", prop, prop);
                break;

               case "uint32":
               case "fixed32":
                gen("m%s=d%s>>>0", prop, prop);
                break;

               case "int32":
               case "sint32":
               case "sfixed32":
                gen("m%s=d%s|0", prop, prop);
                break;

               case "uint64":
                isUnsigned = true;

               case "int64":
               case "sint64":
               case "fixed64":
               case "sfixed64":
                gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)('else if(typeof d%s==="string")', prop)("m%s=parseInt(d%s,10)", prop, prop)('else if(typeof d%s==="number")', prop)("m%s=d%s", prop, prop)('else if(typeof d%s==="object")', prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
                break;

               case "bytes":
                gen('if(typeof d%s==="string")', prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length)", prop)("m%s=d%s", prop, prop);
                break;

               case "string":
                gen("m%s=String(d%s)", prop, prop);
                break;

               case "bool":
                gen("m%s=Boolean(d%s)", prop, prop);
              }
            }
            return gen;
          }
          converter.fromObject = function fromObject(mtype) {
            var fields = mtype.fieldsArray;
            var gen = util.codegen([ "d" ], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
            if (!fields.length) return gen("return new this.ctor");
            gen("var m=new this.ctor");
            for (var i = 0; i < fields.length; ++i) {
              var field = fields[i].resolve(), prop = util.safeProp(field.name);
              if (field.map) {
                gen("if(d%s){", prop)('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
                genValuePartial_fromObject(gen, field, i, prop + "[ks[i]]")("}")("}");
              } else if (field.repeated) {
                gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
                genValuePartial_fromObject(gen, field, i, prop + "[i]")("}")("}");
              } else {
                field.resolvedType instanceof Enum || gen("if(d%s!=null){", prop);
                genValuePartial_fromObject(gen, field, i, prop);
                field.resolvedType instanceof Enum || gen("}");
              }
            }
            return gen("return m");
          };
          function genValuePartial_toObject(gen, field, fieldIndex, prop) {
            if (field.resolvedType) field.resolvedType instanceof Enum ? gen("d%s=o.enums===String?types[%i].values[m%s]:m%s", prop, fieldIndex, prop, prop) : gen("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop); else {
              var isUnsigned = false;
              switch (field.type) {
               case "double":
               case "float":
                gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
                break;

               case "uint64":
                isUnsigned = true;

               case "int64":
               case "sint64":
               case "fixed64":
               case "sfixed64":
                gen('if(typeof m%s==="number")', prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
                break;

               case "bytes":
                gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
                break;

               default:
                gen("d%s=m%s", prop, prop);
              }
            }
            return gen;
          }
          converter.toObject = function toObject(mtype) {
            var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
            if (!fields.length) return util.codegen()("return {}");
            var gen = util.codegen([ "m", "o" ], mtype.name + "$toObject")("if(!o)")("o={}")("var d={}");
            var repeatedFields = [], mapFields = [], normalFields = [], i = 0;
            for (;i < fields.length; ++i) fields[i].partOf || (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
            if (repeatedFields.length) {
              gen("if(o.arrays||o.defaults){");
              for (i = 0; i < repeatedFields.length; ++i) gen("d%s=[]", util.safeProp(repeatedFields[i].name));
              gen("}");
            }
            if (mapFields.length) {
              gen("if(o.objects||o.defaults){");
              for (i = 0; i < mapFields.length; ++i) gen("d%s={}", util.safeProp(mapFields[i].name));
              gen("}");
            }
            if (normalFields.length) {
              gen("if(o.defaults){");
              for (i = 0; i < normalFields.length; ++i) {
                var field = normalFields[i], prop = util.safeProp(field.name);
                field.resolvedType instanceof Enum ? gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault) : field["long"] ? gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)("}else")("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber()) : field.bytes ? gen("d%s=o.bytes===String?%j:%s", prop, String.fromCharCode.apply(String, field.typeDefault), "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]") : gen("d%s=%j", prop, field.typeDefault);
              }
              gen("}");
            }
            var hasKs2 = false;
            for (i = 0; i < fields.length; ++i) {
              var field = fields[i], index = mtype._fieldsArray.indexOf(field), prop = util.safeProp(field.name);
              if (field.map) {
                if (!hasKs2) {
                  hasKs2 = true;
                  gen("var ks2");
                }
                gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
                genValuePartial_toObject(gen, field, index, prop + "[ks2[j]]")("}");
              } else if (field.repeated) {
                gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
                genValuePartial_toObject(gen, field, index, prop + "[j]")("}");
              } else {
                gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name);
                genValuePartial_toObject(gen, field, index, prop);
                field.partOf && gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
              }
              gen("}");
            }
            return gen("return d");
          };
        }, {
          15: 15,
          37: 37
        } ],
        13: [ function(require, module, exports) {
          module.exports = decoder;
          var Enum = require(15), types = require(36), util = require(37);
          function missing(field) {
            return "missing required '" + field.name + "'";
          }
          function decoder(mtype) {
            var gen = util.codegen([ "r", "l" ], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field) {
              return field.map;
            }).length ? ",k" : ""))("while(r.pos<c){")("var t=r.uint32()");
            mtype.group && gen("if((t&7)===4)")("break");
            gen("switch(t>>>3){");
            var i = 0;
            for (;i < mtype.fieldsArray.length; ++i) {
              var field = mtype._fieldsArray[i].resolve(), type = field.resolvedType instanceof Enum ? "int32" : field.type, ref = "m" + util.safeProp(field.name);
              gen("case %i:", field.id);
              if (field.map) {
                gen("r.skip().pos++")("if(%s===util.emptyObject)", ref)("%s={}", ref)("k=r.%s()", field.keyType)("r.pos++");
                types["long"][field.keyType] !== undefined ? types.basic[type] === undefined ? gen('%s[typeof k==="object"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())', ref, i) : gen('%s[typeof k==="object"?util.longToHash(k):k]=r.%s()', ref, type) : types.basic[type] === undefined ? gen("%s[k]=types[%i].decode(r,r.uint32())", ref, i) : gen("%s[k]=r.%s()", ref, type);
              } else if (field.repeated) {
                gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref);
                types.packed[type] !== undefined && gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("}else");
                types.basic[type] === undefined ? gen(field.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", ref, i) : gen("%s.push(r.%s())", ref, type);
              } else types.basic[type] === undefined ? gen(field.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", ref, i) : gen("%s=r.%s()", ref, type);
              gen("break");
            }
            gen("default:")("r.skipType(t&7)")("break")("}")("}");
            for (i = 0; i < mtype._fieldsArray.length; ++i) {
              var rfield = mtype._fieldsArray[i];
              rfield.required && gen("if(!m.hasOwnProperty(%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
            }
            return gen("return m");
          }
        }, {
          15: 15,
          36: 36,
          37: 37
        } ],
        14: [ function(require, module, exports) {
          module.exports = encoder;
          var Enum = require(15), types = require(36), util = require(37);
          function genTypePartial(gen, field, fieldIndex, ref) {
            return field.resolvedType.group ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
          }
          function encoder(mtype) {
            var gen = util.codegen([ "m", "w" ], mtype.name + "$encode")("if(!w)")("w=Writer.create()");
            var i, ref;
            var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
            for (var i = 0; i < fields.length; ++i) {
              var field = fields[i].resolve(), index = mtype._fieldsArray.indexOf(field), type = field.resolvedType instanceof Enum ? "int32" : field.type, wireType = types.basic[type];
              ref = "m" + util.safeProp(field.name);
              if (field.map) {
                gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
                wireType === undefined ? gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref) : gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
                gen("}")("}");
              } else if (field.repeated) {
                gen("if(%s!=null&&%s.length){", ref, ref);
                if (field.packed && types.packed[type] !== undefined) gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()"); else {
                  gen("for(var i=0;i<%s.length;++i)", ref);
                  wireType === undefined ? genTypePartial(gen, field, index, ref + "[i]") : gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
                }
                gen("}");
              } else {
                field.optional && gen("if(%s!=null&&m.hasOwnProperty(%j))", ref, field.name);
                wireType === undefined ? genTypePartial(gen, field, index, ref) : gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
              }
            }
            return gen("return w");
          }
        }, {
          15: 15,
          36: 36,
          37: 37
        } ],
        15: [ function(require, module, exports) {
          module.exports = Enum;
          var ReflectionObject = require(24);
          ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
          var Namespace = require(23), util = require(37);
          function Enum(name, values, options) {
            ReflectionObject.call(this, name, options);
            if (values && "object" !== typeof values) throw TypeError("values must be an object");
            this.valuesById = {};
            this.values = Object.create(this.valuesById);
            this.comments = {};
            this.reserved = undefined;
            if (values) for (var keys = Object.keys(values), i = 0; i < keys.length; ++i) "number" === typeof values[keys[i]] && (this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i]);
          }
          Enum.fromJSON = function fromJSON(name, json) {
            var enm = new Enum(name, json.values, json.options);
            enm.reserved = json.reserved;
            return enm;
          };
          Enum.prototype.toJSON = function toJSON() {
            return util.toObject([ "options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined ]);
          };
          Enum.prototype.add = function add(name, id, comment) {
            if (!util.isString(name)) throw TypeError("name must be a string");
            if (!util.isInteger(id)) throw TypeError("id must be an integer");
            if (this.values[name] !== undefined) throw Error("duplicate name '" + name + "' in " + this);
            if (this.isReservedId(id)) throw Error("id " + id + " is reserved in " + this);
            if (this.isReservedName(name)) throw Error("name '" + name + "' is reserved in " + this);
            if (this.valuesById[id] !== undefined) {
              if (!(this.options && this.options.allow_alias)) throw Error("duplicate id " + id + " in " + this);
              this.values[name] = id;
            } else this.valuesById[this.values[name] = id] = name;
            this.comments[name] = comment || null;
            return this;
          };
          Enum.prototype.remove = function remove(name) {
            if (!util.isString(name)) throw TypeError("name must be a string");
            var val = this.values[name];
            if (null == val) throw Error("name '" + name + "' does not exist in " + this);
            delete this.valuesById[val];
            delete this.values[name];
            delete this.comments[name];
            return this;
          };
          Enum.prototype.isReservedId = function isReservedId(id) {
            return Namespace.isReservedId(this.reserved, id);
          };
          Enum.prototype.isReservedName = function isReservedName(name) {
            return Namespace.isReservedName(this.reserved, name);
          };
        }, {
          23: 23,
          24: 24,
          37: 37
        } ],
        16: [ function(require, module, exports) {
          module.exports = Field;
          var ReflectionObject = require(24);
          ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
          var Enum = require(15), types = require(36), util = require(37);
          var Type;
          var ruleRe = /^required|optional|repeated$/;
          Field.fromJSON = function fromJSON(name, json) {
            return new Field(name, json.id, json.type, json.rule, json.extend, json.options);
          };
          function Field(name, id, type, rule, extend, options) {
            if (util.isObject(rule)) {
              options = rule;
              rule = extend = undefined;
            } else if (util.isObject(extend)) {
              options = extend;
              extend = undefined;
            }
            ReflectionObject.call(this, name, options);
            if (!util.isInteger(id) || id < 0) throw TypeError("id must be a non-negative integer");
            if (!util.isString(type)) throw TypeError("type must be a string");
            if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase())) throw TypeError("rule must be a string rule");
            if (extend !== undefined && !util.isString(extend)) throw TypeError("extend must be a string");
            this.rule = rule && "optional" !== rule ? rule : undefined;
            this.type = type;
            this.id = id;
            this.extend = extend || undefined;
            this.required = "required" === rule;
            this.optional = !this.required;
            this.repeated = "repeated" === rule;
            this.map = false;
            this.message = null;
            this.partOf = null;
            this.typeDefault = null;
            this.defaultValue = null;
            this["long"] = !!util.Long && types["long"][type] !== undefined;
            this.bytes = "bytes" === type;
            this.resolvedType = null;
            this.extensionField = null;
            this.declaringField = null;
            this._packed = null;
          }
          Object.defineProperty(Field.prototype, "packed", {
            get: function get() {
              null === this._packed && (this._packed = false !== this.getOption("packed"));
              return this._packed;
            }
          });
          Field.prototype.setOption = function setOption(name, value, ifNotSet) {
            "packed" === name && (this._packed = null);
            return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
          };
          Field.prototype.toJSON = function toJSON() {
            return util.toObject([ "rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options ]);
          };
          Field.prototype.resolve = function resolve() {
            if (this.resolved) return this;
            if ((this.typeDefault = types.defaults[this.type]) === undefined) {
              this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
              this.resolvedType instanceof Type ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
            }
            if (this.options && null != this.options["default"]) {
              this.typeDefault = this.options["default"];
              this.resolvedType instanceof Enum && "string" === typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault]);
            }
            if (this.options) {
              true !== this.options.packed && (this.options.packed === undefined || !this.resolvedType || this.resolvedType instanceof Enum) || delete this.options.packed;
              Object.keys(this.options).length || (this.options = undefined);
            }
            if (this["long"]) {
              this.typeDefault = util.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0));
              Object.freeze && Object.freeze(this.typeDefault);
            } else if (this.bytes && "string" === typeof this.typeDefault) {
              var buf;
              util.base64.test(this.typeDefault) ? util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0) : util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
              this.typeDefault = buf;
            }
            this.map ? this.defaultValue = util.emptyObject : this.repeated ? this.defaultValue = util.emptyArray : this.defaultValue = this.typeDefault;
            this.parent instanceof Type && (this.parent.ctor.prototype[this.name] = this.defaultValue);
            return ReflectionObject.prototype.resolve.call(this);
          };
          Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
            "function" === typeof fieldType ? fieldType = util.decorateType(fieldType).name : fieldType && "object" === typeof fieldType && (fieldType = util.decorateEnum(fieldType).name);
            return function fieldDecorator(prototype, fieldName) {
              util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, {
                default: defaultValue
              }));
            };
          };
          Field._configure = function configure(Type_) {
            Type = Type_;
          };
        }, {
          15: 15,
          24: 24,
          36: 36,
          37: 37
        } ],
        17: [ function(require, module, exports) {
          var protobuf = module.exports = require(18);
          protobuf.build = "light";
          function load(filename, root, callback) {
            if ("function" === typeof root) {
              callback = root;
              root = new protobuf.Root();
            } else root || (root = new protobuf.Root());
            return root.load(filename, callback);
          }
          protobuf.load = load;
          function loadSync(filename, root) {
            root || (root = new protobuf.Root());
            return root.loadSync(filename);
          }
          protobuf.loadSync = loadSync;
          protobuf.encoder = require(14);
          protobuf.decoder = require(13);
          protobuf.verifier = require(40);
          protobuf.converter = require(12);
          protobuf.ReflectionObject = require(24);
          protobuf.Namespace = require(23);
          protobuf.Root = require(29);
          protobuf.Enum = require(15);
          protobuf.Type = require(35);
          protobuf.Field = require(16);
          protobuf.OneOf = require(25);
          protobuf.MapField = require(20);
          protobuf.Service = require(33);
          protobuf.Method = require(22);
          protobuf.Message = require(21);
          protobuf.wrappers = require(41);
          protobuf.types = require(36);
          protobuf.util = require(37);
          protobuf.ReflectionObject._configure(protobuf.Root);
          protobuf.Namespace._configure(protobuf.Type, protobuf.Service);
          protobuf.Root._configure(protobuf.Type);
          protobuf.Field._configure(protobuf.Type);
        }, {
          12: 12,
          13: 13,
          14: 14,
          15: 15,
          16: 16,
          18: 18,
          20: 20,
          21: 21,
          22: 22,
          23: 23,
          24: 24,
          25: 25,
          29: 29,
          33: 33,
          35: 35,
          36: 36,
          37: 37,
          40: 40,
          41: 41
        } ],
        18: [ function(require, module, exports) {
          var protobuf = exports;
          protobuf.build = "minimal";
          protobuf.Writer = require(42);
          protobuf.BufferWriter = require(43);
          protobuf.Reader = require(27);
          protobuf.BufferReader = require(28);
          protobuf.util = require(39);
          protobuf.rpc = require(31);
          protobuf.roots = require(30);
          protobuf.configure = configure;
          function configure() {
            protobuf.Reader._configure(protobuf.BufferReader);
            protobuf.util._configure();
          }
          protobuf.Writer._configure(protobuf.BufferWriter);
          configure();
        }, {
          27: 27,
          28: 28,
          30: 30,
          31: 31,
          39: 39,
          42: 42,
          43: 43
        } ],
        19: [ function(require, module, exports) {
          var protobuf = module.exports = require(17);
          protobuf.build = "full";
          protobuf.tokenize = require(34);
          protobuf.parse = require(26);
          protobuf.common = require(11);
          protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common);
        }, {
          11: 11,
          17: 17,
          26: 26,
          34: 34
        } ],
        20: [ function(require, module, exports) {
          module.exports = MapField;
          var Field = require(16);
          ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
          var types = require(36), util = require(37);
          function MapField(name, id, keyType, type, options) {
            Field.call(this, name, id, type, options);
            if (!util.isString(keyType)) throw TypeError("keyType must be a string");
            this.keyType = keyType;
            this.resolvedKeyType = null;
            this.map = true;
          }
          MapField.fromJSON = function fromJSON(name, json) {
            return new MapField(name, json.id, json.keyType, json.type, json.options);
          };
          MapField.prototype.toJSON = function toJSON() {
            return util.toObject([ "keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options ]);
          };
          MapField.prototype.resolve = function resolve() {
            if (this.resolved) return this;
            if (types.mapKey[this.keyType] === undefined) throw Error("invalid key type: " + this.keyType);
            return Field.prototype.resolve.call(this);
          };
          MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
            "function" === typeof fieldValueType ? fieldValueType = util.decorateType(fieldValueType).name : fieldValueType && "object" === typeof fieldValueType && (fieldValueType = util.decorateEnum(fieldValueType).name);
            return function mapFieldDecorator(prototype, fieldName) {
              util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
            };
          };
        }, {
          16: 16,
          36: 36,
          37: 37
        } ],
        21: [ function(require, module, exports) {
          module.exports = Message;
          var util = require(39);
          function Message(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) this[keys[i]] = properties[keys[i]];
          }
          Message.create = function create(properties) {
            return this.$type.create(properties);
          };
          Message.encode = function encode(message, writer) {
            return this.$type.encode(message, writer);
          };
          Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.$type.encodeDelimited(message, writer);
          };
          Message.decode = function decode(reader) {
            return this.$type.decode(reader);
          };
          Message.decodeDelimited = function decodeDelimited(reader) {
            return this.$type.decodeDelimited(reader);
          };
          Message.verify = function verify(message) {
            return this.$type.verify(message);
          };
          Message.fromObject = function fromObject(object) {
            return this.$type.fromObject(object);
          };
          Message.toObject = function toObject(message, options) {
            return this.$type.toObject(message, options);
          };
          Message.prototype.toJSON = function toJSON() {
            return this.$type.toObject(this, util.toJSONOptions);
          };
        }, {
          39: 39
        } ],
        22: [ function(require, module, exports) {
          module.exports = Method;
          var ReflectionObject = require(24);
          ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
          var util = require(37);
          function Method(name, type, requestType, responseType, requestStream, responseStream, options) {
            if (util.isObject(requestStream)) {
              options = requestStream;
              requestStream = responseStream = undefined;
            } else if (util.isObject(responseStream)) {
              options = responseStream;
              responseStream = undefined;
            }
            if (!(type === undefined || util.isString(type))) throw TypeError("type must be a string");
            if (!util.isString(requestType)) throw TypeError("requestType must be a string");
            if (!util.isString(responseType)) throw TypeError("responseType must be a string");
            ReflectionObject.call(this, name, options);
            this.type = type || "rpc";
            this.requestType = requestType;
            this.requestStream = !!requestStream || undefined;
            this.responseType = responseType;
            this.responseStream = !!responseStream || undefined;
            this.resolvedRequestType = null;
            this.resolvedResponseType = null;
          }
          Method.fromJSON = function fromJSON(name, json) {
            return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options);
          };
          Method.prototype.toJSON = function toJSON() {
            return util.toObject([ "type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options ]);
          };
          Method.prototype.resolve = function resolve() {
            if (this.resolved) return this;
            this.resolvedRequestType = this.parent.lookupType(this.requestType);
            this.resolvedResponseType = this.parent.lookupType(this.responseType);
            return ReflectionObject.prototype.resolve.call(this);
          };
        }, {
          24: 24,
          37: 37
        } ],
        23: [ function(require, module, exports) {
          module.exports = Namespace;
          var ReflectionObject = require(24);
          ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
          var Enum = require(15), Field = require(16), util = require(37);
          var Type, Service;
          Namespace.fromJSON = function fromJSON(name, json) {
            return new Namespace(name, json.options).addJSON(json.nested);
          };
          function arrayToJSON(array) {
            if (!(array && array.length)) return undefined;
            var obj = {};
            for (var i = 0; i < array.length; ++i) obj[array[i].name] = array[i].toJSON();
            return obj;
          }
          Namespace.arrayToJSON = arrayToJSON;
          Namespace.isReservedId = function isReservedId(reserved, id) {
            if (reserved) for (var i = 0; i < reserved.length; ++i) if ("string" !== typeof reserved[i] && reserved[i][0] <= id && reserved[i][1] >= id) return true;
            return false;
          };
          Namespace.isReservedName = function isReservedName(reserved, name) {
            if (reserved) for (var i = 0; i < reserved.length; ++i) if (reserved[i] === name) return true;
            return false;
          };
          function Namespace(name, options) {
            ReflectionObject.call(this, name, options);
            this.nested = undefined;
            this._nestedArray = null;
          }
          function clearCache(namespace) {
            namespace._nestedArray = null;
            return namespace;
          }
          Object.defineProperty(Namespace.prototype, "nestedArray", {
            get: function get() {
              return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
            }
          });
          Namespace.prototype.toJSON = function toJSON() {
            return util.toObject([ "options", this.options, "nested", arrayToJSON(this.nestedArray) ]);
          };
          Namespace.prototype.addJSON = function addJSON(nestedJson) {
            var ns = this;
            if (nestedJson) for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
              nested = nestedJson[names[i]];
              ns.add((nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : nested.id !== undefined ? Field.fromJSON : Namespace.fromJSON)(names[i], nested));
            }
            return this;
          };
          Namespace.prototype.get = function get(name) {
            return this.nested && this.nested[name] || null;
          };
          Namespace.prototype.getEnum = function getEnum(name) {
            if (this.nested && this.nested[name] instanceof Enum) return this.nested[name].values;
            throw Error("no such enum");
          };
          Namespace.prototype.add = function add(object) {
            if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof Enum || object instanceof Service || object instanceof Namespace)) throw TypeError("object must be a valid nested object");
            if (this.nested) {
              var prev = this.get(object.name);
              if (prev) {
                if (!(prev instanceof Namespace && object instanceof Namespace) || prev instanceof Type || prev instanceof Service) throw Error("duplicate name '" + object.name + "' in " + this);
                var nested = prev.nestedArray;
                for (var i = 0; i < nested.length; ++i) object.add(nested[i]);
                this.remove(prev);
                this.nested || (this.nested = {});
                object.setOptions(prev.options, true);
              }
            } else this.nested = {};
            this.nested[object.name] = object;
            object.onAdd(this);
            return clearCache(this);
          };
          Namespace.prototype.remove = function remove(object) {
            if (!(object instanceof ReflectionObject)) throw TypeError("object must be a ReflectionObject");
            if (object.parent !== this) throw Error(object + " is not a member of " + this);
            delete this.nested[object.name];
            Object.keys(this.nested).length || (this.nested = undefined);
            object.onRemove(this);
            return clearCache(this);
          };
          Namespace.prototype.define = function define(path, json) {
            if (util.isString(path)) path = path.split("."); else if (!Array.isArray(path)) throw TypeError("illegal path");
            if (path && path.length && "" === path[0]) throw Error("path must be relative");
            var ptr = this;
            while (path.length > 0) {
              var part = path.shift();
              if (ptr.nested && ptr.nested[part]) {
                ptr = ptr.nested[part];
                if (!(ptr instanceof Namespace)) throw Error("path conflicts with non-namespace objects");
              } else ptr.add(ptr = new Namespace(part));
            }
            json && ptr.addJSON(json);
            return ptr;
          };
          Namespace.prototype.resolveAll = function resolveAll() {
            var nested = this.nestedArray, i = 0;
            while (i < nested.length) nested[i] instanceof Namespace ? nested[i++].resolveAll() : nested[i++].resolve();
            return this.resolve();
          };
          Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
            if ("boolean" === typeof filterTypes) {
              parentAlreadyChecked = filterTypes;
              filterTypes = undefined;
            } else filterTypes && !Array.isArray(filterTypes) && (filterTypes = [ filterTypes ]);
            if (util.isString(path) && path.length) {
              if ("." === path) return this.root;
              path = path.split(".");
            } else if (!path.length) return this;
            if ("" === path[0]) return this.root.lookup(path.slice(1), filterTypes);
            var found = this.get(path[0]);
            if (found) {
              if (1 === path.length) {
                if (!filterTypes || filterTypes.indexOf(found.constructor) > -1) return found;
              } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true))) return found;
            } else for (var i = 0; i < this.nestedArray.length; ++i) if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true))) return found;
            if (null === this.parent || parentAlreadyChecked) return null;
            return this.parent.lookup(path, filterTypes);
          };
          Namespace.prototype.lookupType = function lookupType(path) {
            var found = this.lookup(path, [ Type ]);
            if (!found) throw Error("no such type");
            return found;
          };
          Namespace.prototype.lookupEnum = function lookupEnum(path) {
            var found = this.lookup(path, [ Enum ]);
            if (!found) throw Error("no such Enum '" + path + "' in " + this);
            return found;
          };
          Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
            var found = this.lookup(path, [ Type, Enum ]);
            if (!found) throw Error("no such Type or Enum '" + path + "' in " + this);
            return found;
          };
          Namespace.prototype.lookupService = function lookupService(path) {
            var found = this.lookup(path, [ Service ]);
            if (!found) throw Error("no such Service '" + path + "' in " + this);
            return found;
          };
          Namespace._configure = function(Type_, Service_) {
            Type = Type_;
            Service = Service_;
          };
        }, {
          15: 15,
          16: 16,
          24: 24,
          37: 37
        } ],
        24: [ function(require, module, exports) {
          module.exports = ReflectionObject;
          ReflectionObject.className = "ReflectionObject";
          var util = require(37);
          var Root;
          function ReflectionObject(name, options) {
            if (!util.isString(name)) throw TypeError("name must be a string");
            if (options && !util.isObject(options)) throw TypeError("options must be an object");
            this.options = options;
            this.name = name;
            this.parent = null;
            this.resolved = false;
            this.comment = null;
            this.filename = null;
          }
          Object.defineProperties(ReflectionObject.prototype, {
            root: {
              get: function get() {
                var ptr = this;
                while (null !== ptr.parent) ptr = ptr.parent;
                return ptr;
              }
            },
            fullName: {
              get: function get() {
                var path = [ this.name ], ptr = this.parent;
                while (ptr) {
                  path.unshift(ptr.name);
                  ptr = ptr.parent;
                }
                return path.join(".");
              }
            }
          });
          ReflectionObject.prototype.toJSON = function toJSON() {
            throw Error();
          };
          ReflectionObject.prototype.onAdd = function onAdd(parent) {
            this.parent && this.parent !== parent && this.parent.remove(this);
            this.parent = parent;
            this.resolved = false;
            var root = parent.root;
            root instanceof Root && root._handleAdd(this);
          };
          ReflectionObject.prototype.onRemove = function onRemove(parent) {
            var root = parent.root;
            root instanceof Root && root._handleRemove(this);
            this.parent = null;
            this.resolved = false;
          };
          ReflectionObject.prototype.resolve = function resolve() {
            if (this.resolved) return this;
            this.root instanceof Root && (this.resolved = true);
            return this;
          };
          ReflectionObject.prototype.getOption = function getOption(name) {
            if (this.options) return this.options[name];
            return undefined;
          };
          ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
            ifNotSet && this.options && this.options[name] !== undefined || ((this.options || (this.options = {}))[name] = value);
            return this;
          };
          ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
            if (options) for (var keys = Object.keys(options), i = 0; i < keys.length; ++i) this.setOption(keys[i], options[keys[i]], ifNotSet);
            return this;
          };
          ReflectionObject.prototype.toString = function toString() {
            var className = this.constructor.className, fullName = this.fullName;
            if (fullName.length) return className + " " + fullName;
            return className;
          };
          ReflectionObject._configure = function(Root_) {
            Root = Root_;
          };
        }, {
          37: 37
        } ],
        25: [ function(require, module, exports) {
          module.exports = OneOf;
          var ReflectionObject = require(24);
          ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
          var Field = require(16), util = require(37);
          function OneOf(name, fieldNames, options) {
            if (!Array.isArray(fieldNames)) {
              options = fieldNames;
              fieldNames = undefined;
            }
            ReflectionObject.call(this, name, options);
            if (!(fieldNames === undefined || Array.isArray(fieldNames))) throw TypeError("fieldNames must be an Array");
            this.oneof = fieldNames || [];
            this.fieldsArray = [];
          }
          OneOf.fromJSON = function fromJSON(name, json) {
            return new OneOf(name, json.oneof, json.options);
          };
          OneOf.prototype.toJSON = function toJSON() {
            return util.toObject([ "options", this.options, "oneof", this.oneof ]);
          };
          function addFieldsToParent(oneof) {
            if (oneof.parent) for (var i = 0; i < oneof.fieldsArray.length; ++i) oneof.fieldsArray[i].parent || oneof.parent.add(oneof.fieldsArray[i]);
          }
          OneOf.prototype.add = function add(field) {
            if (!(field instanceof Field)) throw TypeError("field must be a Field");
            field.parent && field.parent !== this.parent && field.parent.remove(field);
            this.oneof.push(field.name);
            this.fieldsArray.push(field);
            field.partOf = this;
            addFieldsToParent(this);
            return this;
          };
          OneOf.prototype.remove = function remove(field) {
            if (!(field instanceof Field)) throw TypeError("field must be a Field");
            var index = this.fieldsArray.indexOf(field);
            if (index < 0) throw Error(field + " is not a member of " + this);
            this.fieldsArray.splice(index, 1);
            index = this.oneof.indexOf(field.name);
            index > -1 && this.oneof.splice(index, 1);
            field.partOf = null;
            return this;
          };
          OneOf.prototype.onAdd = function onAdd(parent) {
            ReflectionObject.prototype.onAdd.call(this, parent);
            var self = this;
            for (var i = 0; i < this.oneof.length; ++i) {
              var field = parent.get(this.oneof[i]);
              if (field && !field.partOf) {
                field.partOf = self;
                self.fieldsArray.push(field);
              }
            }
            addFieldsToParent(this);
          };
          OneOf.prototype.onRemove = function onRemove(parent) {
            for (var i = 0, field; i < this.fieldsArray.length; ++i) (field = this.fieldsArray[i]).parent && field.parent.remove(field);
            ReflectionObject.prototype.onRemove.call(this, parent);
          };
          OneOf.d = function decorateOneOf() {
            var fieldNames = new Array(arguments.length), index = 0;
            while (index < arguments.length) fieldNames[index] = arguments[index++];
            return function oneOfDecorator(prototype, oneofName) {
              util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
              Object.defineProperty(prototype, oneofName, {
                get: util.oneOfGetter(fieldNames),
                set: util.oneOfSetter(fieldNames)
              });
            };
          };
        }, {
          16: 16,
          24: 24,
          37: 37
        } ],
        26: [ function(require, module, exports) {
          module.exports = parse;
          parse.filename = null;
          parse.defaults = {
            keepCase: false
          };
          var tokenize = require(34), Root = require(29), Type = require(35), Field = require(16), MapField = require(20), OneOf = require(25), Enum = require(15), Service = require(33), Method = require(22), types = require(36), util = require(37);
          var base10Re = /^[1-9][0-9]*$/, base10NegRe = /^-?[1-9][0-9]*$/, base16Re = /^0[x][0-9a-fA-F]+$/, base16NegRe = /^-?0[x][0-9a-fA-F]+$/, base8Re = /^0[0-7]+$/, base8NegRe = /^-?0[0-7]+$/, numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/, typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/, fqTypeRefRe = /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/;
          function parse(source, root, options) {
            if (!(root instanceof Root)) {
              options = root;
              root = new Root();
            }
            options || (options = parse.defaults);
            var tn = tokenize(source), next = tn.next, push = tn.push, peek = tn.peek, skip = tn.skip, cmnt = tn.cmnt;
            var head = true, pkg, imports, weakImports, syntax, isProto3 = false;
            var ptr = root;
            var applyCase = options.keepCase ? function(name) {
              return name;
            } : util.camelCase;
            function illegal(token, name, insideTryCatch) {
              var filename = parse.filename;
              insideTryCatch || (parse.filename = null);
              return Error("illegal " + (name || "token") + " '" + token + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
            }
            function readString() {
              var values = [], token;
              do {
                if ('"' !== (token = next()) && "'" !== token) throw illegal(token);
                values.push(next());
                skip(token);
                token = peek();
              } while ('"' === token || "'" === token);
              return values.join("");
            }
            function readValue(acceptTypeRef) {
              var token = next();
              switch (token) {
               case "'":
               case '"':
                push(token);
                return readString();

               case "true":
               case "TRUE":
                return true;

               case "false":
               case "FALSE":
                return false;
              }
              try {
                return parseNumber(token, true);
              } catch (e) {
                if (acceptTypeRef && typeRefRe.test(token)) return token;
                throw illegal(token, "value");
              }
            }
            function readRanges(target, acceptStrings) {
              var token, start;
              do {
                !acceptStrings || '"' !== (token = peek()) && "'" !== token ? target.push([ start = parseId(next()), skip("to", true) ? parseId(next()) : start ]) : target.push(readString());
              } while (skip(",", true));
              skip(";");
            }
            function parseNumber(token, insideTryCatch) {
              var sign = 1;
              if ("-" === token.charAt(0)) {
                sign = -1;
                token = token.substring(1);
              }
              switch (token) {
               case "inf":
               case "INF":
               case "Inf":
                return Infinity * sign;

               case "nan":
               case "NAN":
               case "Nan":
               case "NaN":
                return NaN;

               case "0":
                return 0;
              }
              if (base10Re.test(token)) return sign * parseInt(token, 10);
              if (base16Re.test(token)) return sign * parseInt(token, 16);
              if (base8Re.test(token)) return sign * parseInt(token, 8);
              if (numberRe.test(token)) return sign * parseFloat(token);
              throw illegal(token, "number", insideTryCatch);
            }
            function parseId(token, acceptNegative) {
              switch (token) {
               case "max":
               case "MAX":
               case "Max":
                return 536870911;

               case "0":
                return 0;
              }
              if (!acceptNegative && "-" === token.charAt(0)) throw illegal(token, "id");
              if (base10NegRe.test(token)) return parseInt(token, 10);
              if (base16NegRe.test(token)) return parseInt(token, 16);
              if (base8NegRe.test(token)) return parseInt(token, 8);
              throw illegal(token, "id");
            }
            function parsePackage() {
              if (pkg !== undefined) throw illegal("package");
              pkg = next();
              if (!typeRefRe.test(pkg)) throw illegal(pkg, "name");
              ptr = ptr.define(pkg);
              skip(";");
            }
            function parseImport() {
              var token = peek();
              var whichImports;
              switch (token) {
               case "weak":
                whichImports = weakImports || (weakImports = []);
                next();
                break;

               case "public":
                next();

               default:
                whichImports = imports || (imports = []);
              }
              token = readString();
              skip(";");
              whichImports.push(token);
            }
            function parseSyntax() {
              skip("=");
              syntax = readString();
              isProto3 = "proto3" === syntax;
              if (!isProto3 && "proto2" !== syntax) throw illegal(syntax, "syntax");
              skip(";");
            }
            function parseCommon(parent, token) {
              switch (token) {
               case "option":
                parseOption(parent, token);
                skip(";");
                return true;

               case "message":
                parseType(parent, token);
                return true;

               case "enum":
                parseEnum(parent, token);
                return true;

               case "service":
                parseService(parent, token);
                return true;

               case "extend":
                parseExtension(parent, token);
                return true;
              }
              return false;
            }
            function ifBlock(obj, fnIf, fnElse) {
              var trailingLine = tn.line;
              if (obj) {
                obj.comment = cmnt();
                obj.filename = parse.filename;
              }
              if (skip("{", true)) {
                var token;
                while ("}" !== (token = next())) fnIf(token);
                skip(";", true);
              } else {
                fnElse && fnElse();
                skip(";");
                obj && "string" !== typeof obj.comment && (obj.comment = cmnt(trailingLine));
              }
            }
            function parseType(parent, token) {
              if (!nameRe.test(token = next())) throw illegal(token, "type name");
              var type = new Type(token);
              ifBlock(type, function parseType_block(token) {
                if (parseCommon(type, token)) return;
                switch (token) {
                 case "map":
                  parseMapField(type, token);
                  break;

                 case "required":
                 case "optional":
                 case "repeated":
                  parseField(type, token);
                  break;

                 case "oneof":
                  parseOneOf(type, token);
                  break;

                 case "extensions":
                  readRanges(type.extensions || (type.extensions = []));
                  break;

                 case "reserved":
                  readRanges(type.reserved || (type.reserved = []), true);
                  break;

                 default:
                  if (!isProto3 || !typeRefRe.test(token)) throw illegal(token);
                  push(token);
                  parseField(type, "optional");
                }
              });
              parent.add(type);
            }
            function parseField(parent, rule, extend) {
              var type = next();
              if ("group" === type) {
                parseGroup(parent, rule);
                return;
              }
              if (!typeRefRe.test(type)) throw illegal(type, "type");
              var name = next();
              if (!nameRe.test(name)) throw illegal(name, "name");
              name = applyCase(name);
              skip("=");
              var field = new Field(name, parseId(next()), type, rule, extend);
              ifBlock(field, function parseField_block(token) {
                if ("option" !== token) throw illegal(token);
                parseOption(field, token);
                skip(";");
              }, function parseField_line() {
                parseInlineOptions(field);
              });
              parent.add(field);
              isProto3 || !field.repeated || types.packed[type] === undefined && types.basic[type] !== undefined || field.setOption("packed", false, true);
            }
            function parseGroup(parent, rule) {
              var name = next();
              if (!nameRe.test(name)) throw illegal(name, "name");
              var fieldName = util.lcFirst(name);
              name === fieldName && (name = util.ucFirst(name));
              skip("=");
              var id = parseId(next());
              var type = new Type(name);
              type.group = true;
              var field = new Field(fieldName, id, name, rule);
              field.filename = parse.filename;
              ifBlock(type, function parseGroup_block(token) {
                switch (token) {
                 case "option":
                  parseOption(type, token);
                  skip(";");
                  break;

                 case "required":
                 case "optional":
                 case "repeated":
                  parseField(type, token);
                  break;

                 default:
                  throw illegal(token);
                }
              });
              parent.add(type).add(field);
            }
            function parseMapField(parent) {
              skip("<");
              var keyType = next();
              if (types.mapKey[keyType] === undefined) throw illegal(keyType, "type");
              skip(",");
              var valueType = next();
              if (!typeRefRe.test(valueType)) throw illegal(valueType, "type");
              skip(">");
              var name = next();
              if (!nameRe.test(name)) throw illegal(name, "name");
              skip("=");
              var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
              ifBlock(field, function parseMapField_block(token) {
                if ("option" !== token) throw illegal(token);
                parseOption(field, token);
                skip(";");
              }, function parseMapField_line() {
                parseInlineOptions(field);
              });
              parent.add(field);
            }
            function parseOneOf(parent, token) {
              if (!nameRe.test(token = next())) throw illegal(token, "name");
              var oneof = new OneOf(applyCase(token));
              ifBlock(oneof, function parseOneOf_block(token) {
                if ("option" === token) {
                  parseOption(oneof, token);
                  skip(";");
                } else {
                  push(token);
                  parseField(oneof, "optional");
                }
              });
              parent.add(oneof);
            }
            function parseEnum(parent, token) {
              if (!nameRe.test(token = next())) throw illegal(token, "name");
              var enm = new Enum(token);
              ifBlock(enm, function parseEnum_block(token) {
                switch (token) {
                 case "option":
                  parseOption(enm, token);
                  skip(";");
                  break;

                 case "reserved":
                  readRanges(enm.reserved || (enm.reserved = []), true);
                  break;

                 default:
                  parseEnumValue(enm, token);
                }
              });
              parent.add(enm);
            }
            function parseEnumValue(parent, token) {
              if (!nameRe.test(token)) throw illegal(token, "name");
              skip("=");
              var value = parseId(next(), true), dummy = {};
              ifBlock(dummy, function parseEnumValue_block(token) {
                if ("option" !== token) throw illegal(token);
                parseOption(dummy, token);
                skip(";");
              }, function parseEnumValue_line() {
                parseInlineOptions(dummy);
              });
              parent.add(token, value, dummy.comment);
            }
            function parseOption(parent, token) {
              var isCustom = skip("(", true);
              if (!typeRefRe.test(token = next())) throw illegal(token, "name");
              var name = token;
              if (isCustom) {
                skip(")");
                name = "(" + name + ")";
                token = peek();
                if (fqTypeRefRe.test(token)) {
                  name += token;
                  next();
                }
              }
              skip("=");
              parseOptionValue(parent, name);
            }
            function parseOptionValue(parent, name) {
              if (skip("{", true)) do {
                if (!nameRe.test(token = next())) throw illegal(token, "name");
                if ("{" === peek()) parseOptionValue(parent, name + "." + token); else {
                  skip(":");
                  "{" === peek() ? parseOptionValue(parent, name + "." + token) : setOption(parent, name + "." + token, readValue(true));
                }
              } while (!skip("}", true)); else setOption(parent, name, readValue(true));
            }
            function setOption(parent, name, value) {
              parent.setOption && parent.setOption(name, value);
            }
            function parseInlineOptions(parent) {
              if (skip("[", true)) {
                do {
                  parseOption(parent, "option");
                } while (skip(",", true));
                skip("]");
              }
              return parent;
            }
            function parseService(parent, token) {
              if (!nameRe.test(token = next())) throw illegal(token, "service name");
              var service = new Service(token);
              ifBlock(service, function parseService_block(token) {
                if (parseCommon(service, token)) return;
                if ("rpc" !== token) throw illegal(token);
                parseMethod(service, token);
              });
              parent.add(service);
            }
            function parseMethod(parent, token) {
              var type = token;
              if (!nameRe.test(token = next())) throw illegal(token, "name");
              var name = token, requestType, requestStream, responseType, responseStream;
              skip("(");
              skip("stream", true) && (requestStream = true);
              if (!typeRefRe.test(token = next())) throw illegal(token);
              requestType = token;
              skip(")");
              skip("returns");
              skip("(");
              skip("stream", true) && (responseStream = true);
              if (!typeRefRe.test(token = next())) throw illegal(token);
              responseType = token;
              skip(")");
              var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
              ifBlock(method, function parseMethod_block(token) {
                if ("option" !== token) throw illegal(token);
                parseOption(method, token);
                skip(";");
              });
              parent.add(method);
            }
            function parseExtension(parent, token) {
              if (!typeRefRe.test(token = next())) throw illegal(token, "reference");
              var reference = token;
              ifBlock(null, function parseExtension_block(token) {
                switch (token) {
                 case "required":
                 case "repeated":
                 case "optional":
                  parseField(parent, token, reference);
                  break;

                 default:
                  if (!isProto3 || !typeRefRe.test(token)) throw illegal(token);
                  push(token);
                  parseField(parent, "optional", reference);
                }
              });
            }
            var token;
            while (null !== (token = next())) switch (token) {
             case "package":
              if (!head) throw illegal(token);
              parsePackage();
              break;

             case "import":
              if (!head) throw illegal(token);
              parseImport();
              break;

             case "syntax":
              if (!head) throw illegal(token);
              parseSyntax();
              break;

             case "option":
              if (!head) throw illegal(token);
              parseOption(ptr, token);
              skip(";");
              break;

             default:
              if (parseCommon(ptr, token)) {
                head = false;
                continue;
              }
              throw illegal(token);
            }
            parse.filename = null;
            return {
              package: pkg,
              imports: imports,
              weakImports: weakImports,
              syntax: syntax,
              root: root
            };
          }
        }, {
          15: 15,
          16: 16,
          20: 20,
          22: 22,
          25: 25,
          29: 29,
          33: 33,
          34: 34,
          35: 35,
          36: 36,
          37: 37
        } ],
        27: [ function(require, module, exports) {
          module.exports = Reader;
          var util = require(39);
          var BufferReader;
          var LongBits = util.LongBits, utf8 = util.utf8;
          function indexOutOfRange(reader, writeLength) {
            return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
          }
          function Reader(buffer) {
            this.buf = buffer;
            this.pos = 0;
            this.len = buffer.length;
          }
          var create_array = "undefined" !== typeof Uint8Array ? function create_typed_array(buffer) {
            if (buffer instanceof Uint8Array || Array.isArray(buffer)) return new Reader(buffer);
            throw Error("illegal buffer");
          } : function create_array(buffer) {
            if (Array.isArray(buffer)) return new Reader(buffer);
            throw Error("illegal buffer");
          };
          Reader.create = util.Buffer ? function create_buffer_setup(buffer) {
            return (Reader.create = function create_buffer(buffer) {
              return util.Buffer.isBuffer(buffer) ? new BufferReader(buffer) : create_array(buffer);
            })(buffer);
          } : create_array;
          Reader.prototype._slice = util.Array.prototype.subarray || util.Array.prototype.slice;
          Reader.prototype.uint32 = function read_uint32_setup() {
            var value = 4294967295;
            return function read_uint32() {
              value = (127 & this.buf[this.pos]) >>> 0;
              if (this.buf[this.pos++] < 128) return value;
              value = (value | (127 & this.buf[this.pos]) << 7) >>> 0;
              if (this.buf[this.pos++] < 128) return value;
              value = (value | (127 & this.buf[this.pos]) << 14) >>> 0;
              if (this.buf[this.pos++] < 128) return value;
              value = (value | (127 & this.buf[this.pos]) << 21) >>> 0;
              if (this.buf[this.pos++] < 128) return value;
              value = (value | (15 & this.buf[this.pos]) << 28) >>> 0;
              if (this.buf[this.pos++] < 128) return value;
              if ((this.pos += 5) > this.len) {
                this.pos = this.len;
                throw indexOutOfRange(this, 10);
              }
              return value;
            };
          }();
          Reader.prototype.int32 = function read_int32() {
            return 0 | this.uint32();
          };
          Reader.prototype.sint32 = function read_sint32() {
            var value = this.uint32();
            return value >>> 1 ^ -(1 & value) | 0;
          };
          function readLongVarint() {
            var bits = new LongBits(0, 0);
            var i = 0;
            if (!(this.len - this.pos > 4)) {
              for (;i < 3; ++i) {
                if (this.pos >= this.len) throw indexOutOfRange(this);
                bits.lo = (bits.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0;
                if (this.buf[this.pos++] < 128) return bits;
              }
              bits.lo = (bits.lo | (127 & this.buf[this.pos++]) << 7 * i) >>> 0;
              return bits;
            }
            for (;i < 4; ++i) {
              bits.lo = (bits.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0;
              if (this.buf[this.pos++] < 128) return bits;
            }
            bits.lo = (bits.lo | (127 & this.buf[this.pos]) << 28) >>> 0;
            bits.hi = (bits.hi | (127 & this.buf[this.pos]) >> 4) >>> 0;
            if (this.buf[this.pos++] < 128) return bits;
            i = 0;
            if (this.len - this.pos > 4) for (;i < 5; ++i) {
              bits.hi = (bits.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0;
              if (this.buf[this.pos++] < 128) return bits;
            } else for (;i < 5; ++i) {
              if (this.pos >= this.len) throw indexOutOfRange(this);
              bits.hi = (bits.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0;
              if (this.buf[this.pos++] < 128) return bits;
            }
            throw Error("invalid varint encoding");
          }
          Reader.prototype.bool = function read_bool() {
            return 0 !== this.uint32();
          };
          function readFixed32_end(buf, end) {
            return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
          }
          Reader.prototype.fixed32 = function read_fixed32() {
            if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
            return readFixed32_end(this.buf, this.pos += 4);
          };
          Reader.prototype.sfixed32 = function read_sfixed32() {
            if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
            return 0 | readFixed32_end(this.buf, this.pos += 4);
          };
          function readFixed64() {
            if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
            return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
          }
          Reader.prototype["float"] = function read_float() {
            if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
            var value = util["float"].readFloatLE(this.buf, this.pos);
            this.pos += 4;
            return value;
          };
          Reader.prototype["double"] = function read_double() {
            if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
            var value = util["float"].readDoubleLE(this.buf, this.pos);
            this.pos += 8;
            return value;
          };
          Reader.prototype.bytes = function read_bytes() {
            var length = this.uint32(), start = this.pos, end = this.pos + length;
            if (end > this.len) throw indexOutOfRange(this, length);
            this.pos += length;
            if (Array.isArray(this.buf)) return this.buf.slice(start, end);
            return start === end ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end);
          };
          Reader.prototype.string = function read_string() {
            var bytes = this.bytes();
            return utf8.read(bytes, 0, bytes.length);
          };
          Reader.prototype.skip = function skip(length) {
            if ("number" === typeof length) {
              if (this.pos + length > this.len) throw indexOutOfRange(this, length);
              this.pos += length;
            } else do {
              if (this.pos >= this.len) throw indexOutOfRange(this);
            } while (128 & this.buf[this.pos++]);
            return this;
          };
          Reader.prototype.skipType = function(wireType) {
            switch (wireType) {
             case 0:
              this.skip();
              break;

             case 1:
              this.skip(8);
              break;

             case 2:
              this.skip(this.uint32());
              break;

             case 3:
              do {
                if (4 === (wireType = 7 & this.uint32())) break;
                this.skipType(wireType);
              } while (true);
              break;

             case 5:
              this.skip(4);
              break;

             default:
              throw Error("invalid wire type " + wireType + " at offset " + this.pos);
            }
            return this;
          };
          Reader._configure = function(BufferReader_) {
            BufferReader = BufferReader_;
            var fn = util.Long ? "toLong" : "toNumber";
            util.merge(Reader.prototype, {
              int64: function read_int64() {
                return readLongVarint.call(this)[fn](false);
              },
              uint64: function read_uint64() {
                return readLongVarint.call(this)[fn](true);
              },
              sint64: function read_sint64() {
                return readLongVarint.call(this).zzDecode()[fn](false);
              },
              fixed64: function read_fixed64() {
                return readFixed64.call(this)[fn](true);
              },
              sfixed64: function read_sfixed64() {
                return readFixed64.call(this)[fn](false);
              }
            });
          };
        }, {
          39: 39
        } ],
        28: [ function(require, module, exports) {
          module.exports = BufferReader;
          var Reader = require(27);
          (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
          var util = require(39);
          function BufferReader(buffer) {
            Reader.call(this, buffer);
          }
          util.Buffer && (BufferReader.prototype._slice = util.Buffer.prototype.slice);
          BufferReader.prototype.string = function read_string_buffer() {
            var len = this.uint32();
            return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len));
          };
        }, {
          27: 27,
          39: 39
        } ],
        29: [ function(require, module, exports) {
          module.exports = Root;
          var Namespace = require(23);
          ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";
          var Field = require(16), Enum = require(15), OneOf = require(25), util = require(37);
          var Type, parse, common;
          function Root(options) {
            Namespace.call(this, "", options);
            this.deferred = [];
            this.files = [];
          }
          Root.fromJSON = function fromJSON(json, root) {
            root || (root = new Root());
            json.options && root.setOptions(json.options);
            return root.addJSON(json.nested);
          };
          Root.prototype.resolvePath = util.path.resolve;
          function SYNC() {}
          Root.prototype.load = function load(filename, options, callback) {
            if ("function" === typeof options) {
              callback = options;
              options = undefined;
            }
            var self = this;
            if (!callback) return util.asPromise(load, self, filename, options);
            var sync = callback === SYNC;
            function finish(err, root) {
              if (!callback) return;
              var cb = callback;
              callback = null;
              if (sync) throw err;
              cb(err, root);
            }
            function process(filename, source) {
              try {
                util.isString(source) && "{" === source.charAt(0) && (source = JSON.parse(source));
                if (util.isString(source)) {
                  parse.filename = filename;
                  var parsed = parse(source, self, options), resolved, i = 0;
                  if (parsed.imports) for (;i < parsed.imports.length; ++i) (resolved = self.resolvePath(filename, parsed.imports[i])) && fetch(resolved);
                  if (parsed.weakImports) for (i = 0; i < parsed.weakImports.length; ++i) (resolved = self.resolvePath(filename, parsed.weakImports[i])) && fetch(resolved, true);
                } else self.setOptions(source.options).addJSON(source.nested);
              } catch (err) {
                finish(err);
              }
              sync || queued || finish(null, self);
            }
            function fetch(filename, weak) {
              var idx = filename.lastIndexOf("google/protobuf/");
              if (idx > -1) {
                var altname = filename.substring(idx);
                altname in common && (filename = altname);
              }
              if (self.files.indexOf(filename) > -1) return;
              self.files.push(filename);
              if (filename in common) {
                if (sync) process(filename, common[filename]); else {
                  ++queued;
                  setTimeout(function() {
                    --queued;
                    process(filename, common[filename]);
                  });
                }
                return;
              }
              if (sync) {
                var source;
                try {
                  source = util.fs.readFileSync(filename).toString("utf8");
                } catch (err) {
                  weak || finish(err);
                  return;
                }
                process(filename, source);
              } else {
                ++queued;
                util.fetch(filename, function(err, source) {
                  --queued;
                  if (!callback) return;
                  if (err) {
                    weak ? queued || finish(null, self) : finish(err);
                    return;
                  }
                  process(filename, source);
                });
              }
            }
            var queued = 0;
            util.isString(filename) && (filename = [ filename ]);
            for (var i = 0, resolved; i < filename.length; ++i) (resolved = self.resolvePath("", filename[i])) && fetch(resolved);
            if (sync) return self;
            queued || finish(null, self);
            return undefined;
          };
          Root.prototype.loadSync = function loadSync(filename, options) {
            if (!util.isNode) throw Error("not supported");
            return this.load(filename, options, SYNC);
          };
          Root.prototype.resolveAll = function resolveAll() {
            if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
              return "'extend " + field.extend + "' in " + field.parent.fullName;
            }).join(", "));
            return Namespace.prototype.resolveAll.call(this);
          };
          var exposeRe = /^[A-Z]/;
          function tryHandleExtension(root, field) {
            var extendedType = field.parent.lookup(field.extend);
            if (extendedType) {
              var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
              sisterField.declaringField = field;
              field.extensionField = sisterField;
              extendedType.add(sisterField);
              return true;
            }
            return false;
          }
          Root.prototype._handleAdd = function _handleAdd(object) {
            if (object instanceof Field) object.extend === undefined || object.extensionField || tryHandleExtension(this, object) || this.deferred.push(object); else if (object instanceof Enum) exposeRe.test(object.name) && (object.parent[object.name] = object.values); else if (!(object instanceof OneOf)) {
              if (object instanceof Type) for (var i = 0; i < this.deferred.length; ) tryHandleExtension(this, this.deferred[i]) ? this.deferred.splice(i, 1) : ++i;
              for (var j = 0; j < object.nestedArray.length; ++j) this._handleAdd(object._nestedArray[j]);
              exposeRe.test(object.name) && (object.parent[object.name] = object);
            }
          };
          Root.prototype._handleRemove = function _handleRemove(object) {
            if (object instanceof Field) {
              if (object.extend !== undefined) if (object.extensionField) {
                object.extensionField.parent.remove(object.extensionField);
                object.extensionField = null;
              } else {
                var index = this.deferred.indexOf(object);
                index > -1 && this.deferred.splice(index, 1);
              }
            } else if (object instanceof Enum) exposeRe.test(object.name) && delete object.parent[object.name]; else if (object instanceof Namespace) {
              for (var i = 0; i < object.nestedArray.length; ++i) this._handleRemove(object._nestedArray[i]);
              exposeRe.test(object.name) && delete object.parent[object.name];
            }
          };
          Root._configure = function(Type_, parse_, common_) {
            Type = Type_;
            parse = parse_;
            common = common_;
          };
        }, {
          15: 15,
          16: 16,
          23: 23,
          25: 25,
          37: 37
        } ],
        30: [ function(require, module, exports) {
          module.exports = {};
        }, {} ],
        31: [ function(require, module, exports) {
          var rpc = exports;
          rpc.Service = require(32);
        }, {
          32: 32
        } ],
        32: [ function(require, module, exports) {
          module.exports = Service;
          var util = require(39);
          (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
          function Service(rpcImpl, requestDelimited, responseDelimited) {
            if ("function" !== typeof rpcImpl) throw TypeError("rpcImpl must be a function");
            util.EventEmitter.call(this);
            this.rpcImpl = rpcImpl;
            this.requestDelimited = Boolean(requestDelimited);
            this.responseDelimited = Boolean(responseDelimited);
          }
          Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
            if (!request) throw TypeError("request must be specified");
            var self = this;
            if (!callback) return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);
            if (!self.rpcImpl) {
              setTimeout(function() {
                callback(Error("already ended"));
              }, 0);
              return undefined;
            }
            try {
              return self.rpcImpl(method, requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
                if (err) {
                  self.emit("error", err, method);
                  return callback(err);
                }
                if (null === response) {
                  self.end(true);
                  return undefined;
                }
                if (!(response instanceof responseCtor)) try {
                  response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                } catch (err) {
                  self.emit("error", err, method);
                  return callback(err);
                }
                self.emit("data", response, method);
                return callback(null, response);
              });
            } catch (err) {
              self.emit("error", err, method);
              setTimeout(function() {
                callback(err);
              }, 0);
              return undefined;
            }
          };
          Service.prototype.end = function end(endedByRPC) {
            if (this.rpcImpl) {
              endedByRPC || this.rpcImpl(null, null, null);
              this.rpcImpl = null;
              this.emit("end").off();
            }
            return this;
          };
        }, {
          39: 39
        } ],
        33: [ function(require, module, exports) {
          module.exports = Service;
          var Namespace = require(23);
          ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
          var Method = require(22), util = require(37), rpc = require(31);
          function Service(name, options) {
            Namespace.call(this, name, options);
            this.methods = {};
            this._methodsArray = null;
          }
          Service.fromJSON = function fromJSON(name, json) {
            var service = new Service(name, json.options);
            if (json.methods) for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i) service.add(Method.fromJSON(names[i], json.methods[names[i]]));
            json.nested && service.addJSON(json.nested);
            return service;
          };
          Service.prototype.toJSON = function toJSON() {
            var inherited = Namespace.prototype.toJSON.call(this);
            return util.toObject([ "options", inherited && inherited.options || undefined, "methods", Namespace.arrayToJSON(this.methodsArray) || {}, "nested", inherited && inherited.nested || undefined ]);
          };
          Object.defineProperty(Service.prototype, "methodsArray", {
            get: function get() {
              return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
            }
          });
          function clearCache(service) {
            service._methodsArray = null;
            return service;
          }
          Service.prototype.get = function get(name) {
            return this.methods[name] || Namespace.prototype.get.call(this, name);
          };
          Service.prototype.resolveAll = function resolveAll() {
            var methods = this.methodsArray;
            for (var i = 0; i < methods.length; ++i) methods[i].resolve();
            return Namespace.prototype.resolve.call(this);
          };
          Service.prototype.add = function add(object) {
            if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);
            if (object instanceof Method) {
              this.methods[object.name] = object;
              object.parent = this;
              return clearCache(this);
            }
            return Namespace.prototype.add.call(this, object);
          };
          Service.prototype.remove = function remove(object) {
            if (object instanceof Method) {
              if (this.methods[object.name] !== object) throw Error(object + " is not a member of " + this);
              delete this.methods[object.name];
              object.parent = null;
              return clearCache(this);
            }
            return Namespace.prototype.remove.call(this, object);
          };
          Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
            for (var i = 0, method; i < this.methodsArray.length; ++i) {
              var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
              rpcService[methodName] = util.codegen([ "r", "c" ], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
                m: method,
                q: method.resolvedRequestType.ctor,
                s: method.resolvedResponseType.ctor
              });
            }
            return rpcService;
          };
        }, {
          22: 22,
          23: 23,
          31: 31,
          37: 37
        } ],
        34: [ function(require, module, exports) {
          module.exports = tokenize;
          var delimRe = /[\s{}=;:[\],'"()<>]/g, stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
          var setCommentRe = /^ *[*/]+ */, setCommentSplitRe = /\n/g, whitespaceRe = /\s/, unescapeRe = /\\(.?)/g;
          var unescapeMap = {
            0: "\0",
            r: "\r",
            n: "\n",
            t: "\t"
          };
          function unescape(str) {
            return str.replace(unescapeRe, function($0, $1) {
              switch ($1) {
               case "\\":
               case "":
                return $1;

               default:
                return unescapeMap[$1] || "";
              }
            });
          }
          tokenize.unescape = unescape;
          function tokenize(source) {
            source = source.toString();
            var offset = 0, length = source.length, line = 1, commentType = null, commentText = null, commentLine = 0, commentLineEmpty = false;
            var stack = [];
            var stringDelim = null;
            function illegal(subject) {
              return Error("illegal " + subject + " (line " + line + ")");
            }
            function readString() {
              var re = "'" === stringDelim ? stringSingleRe : stringDoubleRe;
              re.lastIndex = offset - 1;
              var match = re.exec(source);
              if (!match) throw illegal("string");
              offset = re.lastIndex;
              push(stringDelim);
              stringDelim = null;
              return unescape(match[1]);
            }
            function charAt(pos) {
              return source.charAt(pos);
            }
            function setComment(start, end) {
              commentType = source.charAt(start++);
              commentLine = line;
              commentLineEmpty = false;
              var offset = start - 3, c;
              do {
                if (--offset < 0 || "\n" === (c = source.charAt(offset))) {
                  commentLineEmpty = true;
                  break;
                }
              } while (" " === c || "\t" === c);
              var lines = source.substring(start, end).split(setCommentSplitRe);
              for (var i = 0; i < lines.length; ++i) lines[i] = lines[i].replace(setCommentRe, "").trim();
              commentText = lines.join("\n").trim();
            }
            function next() {
              if (stack.length > 0) return stack.shift();
              if (stringDelim) return readString();
              var repeat, prev, curr, start, isDoc;
              do {
                if (offset === length) return null;
                repeat = false;
                while (whitespaceRe.test(curr = charAt(offset))) {
                  "\n" === curr && ++line;
                  if (++offset === length) return null;
                }
                if ("/" === charAt(offset)) {
                  if (++offset === length) throw illegal("comment");
                  if ("/" === charAt(offset)) {
                    isDoc = "/" === charAt(start = offset + 1);
                    while ("\n" !== charAt(++offset)) if (offset === length) return null;
                    ++offset;
                    isDoc && setComment(start, offset - 1);
                    ++line;
                    repeat = true;
                  } else {
                    if ("*" !== (curr = charAt(offset))) return "/";
                    isDoc = "*" === charAt(start = offset + 1);
                    do {
                      "\n" === curr && ++line;
                      if (++offset === length) throw illegal("comment");
                      prev = curr;
                      curr = charAt(offset);
                    } while ("*" !== prev || "/" !== curr);
                    ++offset;
                    isDoc && setComment(start, offset - 2);
                    repeat = true;
                  }
                }
              } while (repeat);
              var end = offset;
              delimRe.lastIndex = 0;
              var delim = delimRe.test(charAt(end++));
              if (!delim) while (end < length && !delimRe.test(charAt(end))) ++end;
              var token = source.substring(offset, offset = end);
              '"' !== token && "'" !== token || (stringDelim = token);
              return token;
            }
            function push(token) {
              stack.push(token);
            }
            function peek() {
              if (!stack.length) {
                var token = next();
                if (null === token) return null;
                push(token);
              }
              return stack[0];
            }
            function skip(expected, optional) {
              var actual = peek(), equals = actual === expected;
              if (equals) {
                next();
                return true;
              }
              if (!optional) throw illegal("token '" + actual + "', '" + expected + "' expected");
              return false;
            }
            function cmnt(trailingLine) {
              var ret = null;
              if (trailingLine === undefined) commentLine !== line - 1 || "*" !== commentType && !commentLineEmpty || (ret = commentText); else {
                commentLine < trailingLine && peek();
                commentLine !== trailingLine || commentLineEmpty || "/" !== commentType || (ret = commentText);
              }
              return ret;
            }
            return Object.defineProperty({
              next: next,
              peek: peek,
              push: push,
              skip: skip,
              cmnt: cmnt
            }, "line", {
              get: function get() {
                return line;
              }
            });
          }
        }, {} ],
        35: [ function(require, module, exports) {
          module.exports = Type;
          var Namespace = require(23);
          ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
          var Enum = require(15), OneOf = require(25), Field = require(16), MapField = require(20), Service = require(33), Message = require(21), Reader = require(27), Writer = require(42), util = require(37), encoder = require(14), decoder = require(13), verifier = require(40), converter = require(12), wrappers = require(41);
          function Type(name, options) {
            Namespace.call(this, name, options);
            this.fields = {};
            this.oneofs = undefined;
            this.extensions = undefined;
            this.reserved = undefined;
            this.group = undefined;
            this._fieldsById = null;
            this._fieldsArray = null;
            this._oneofsArray = null;
            this._ctor = null;
          }
          Object.defineProperties(Type.prototype, {
            fieldsById: {
              get: function get() {
                if (this._fieldsById) return this._fieldsById;
                this._fieldsById = {};
                for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
                  var field = this.fields[names[i]], id = field.id;
                  if (this._fieldsById[id]) throw Error("duplicate id " + id + " in " + this);
                  this._fieldsById[id] = field;
                }
                return this._fieldsById;
              }
            },
            fieldsArray: {
              get: function get() {
                return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
              }
            },
            oneofsArray: {
              get: function get() {
                return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
              }
            },
            ctor: {
              get: function get() {
                return this._ctor || (this.ctor = Type.generateConstructor(this)());
              },
              set: function set(ctor) {
                var prototype = ctor.prototype;
                if (!(prototype instanceof Message)) {
                  (ctor.prototype = new Message()).constructor = ctor;
                  util.merge(ctor.prototype, prototype);
                }
                ctor.$type = ctor.prototype.$type = this;
                util.merge(ctor, Message, true);
                this._ctor = ctor;
                var i = 0;
                for (;i < this.fieldsArray.length; ++i) this._fieldsArray[i].resolve();
                var ctorProperties = {};
                for (i = 0; i < this.oneofsArray.length; ++i) ctorProperties[this._oneofsArray[i].resolve().name] = {
                  get: util.oneOfGetter(this._oneofsArray[i].oneof),
                  set: util.oneOfSetter(this._oneofsArray[i].oneof)
                };
                i && Object.defineProperties(ctor.prototype, ctorProperties);
              }
            }
          });
          Type.generateConstructor = function generateConstructor(mtype) {
            var gen = util.codegen([ "p" ], mtype.name);
            for (var i = 0, field; i < mtype.fieldsArray.length; ++i) (field = mtype._fieldsArray[i]).map ? gen("this%s={}", util.safeProp(field.name)) : field.repeated && gen("this%s=[]", util.safeProp(field.name));
            return gen("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
          };
          function clearCache(type) {
            type._fieldsById = type._fieldsArray = type._oneofsArray = null;
            delete type.encode;
            delete type.decode;
            delete type.verify;
            return type;
          }
          Type.fromJSON = function fromJSON(name, json) {
            var type = new Type(name, json.options);
            type.extensions = json.extensions;
            type.reserved = json.reserved;
            var names = Object.keys(json.fields), i = 0;
            for (;i < names.length; ++i) type.add(("undefined" !== typeof json.fields[names[i]].keyType ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]]));
            if (json.oneofs) for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i) type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
            if (json.nested) for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
              var nested = json.nested[names[i]];
              type.add((nested.id !== undefined ? Field.fromJSON : nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : Namespace.fromJSON)(names[i], nested));
            }
            json.extensions && json.extensions.length && (type.extensions = json.extensions);
            json.reserved && json.reserved.length && (type.reserved = json.reserved);
            json.group && (type.group = true);
            return type;
          };
          Type.prototype.toJSON = function toJSON() {
            var inherited = Namespace.prototype.toJSON.call(this);
            return util.toObject([ "options", inherited && inherited.options || undefined, "oneofs", Namespace.arrayToJSON(this.oneofsArray), "fields", Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) {
              return !obj.declaringField;
            })) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", inherited && inherited.nested || undefined ]);
          };
          Type.prototype.resolveAll = function resolveAll() {
            var fields = this.fieldsArray, i = 0;
            while (i < fields.length) fields[i++].resolve();
            var oneofs = this.oneofsArray;
            i = 0;
            while (i < oneofs.length) oneofs[i++].resolve();
            return Namespace.prototype.resolveAll.call(this);
          };
          Type.prototype.get = function get(name) {
            return this.fields[name] || this.oneofs && this.oneofs[name] || this.nested && this.nested[name] || null;
          };
          Type.prototype.add = function add(object) {
            if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);
            if (object instanceof Field && object.extend === undefined) {
              if (this._fieldsById ? this._fieldsById[object.id] : this.fieldsById[object.id]) throw Error("duplicate id " + object.id + " in " + this);
              if (this.isReservedId(object.id)) throw Error("id " + object.id + " is reserved in " + this);
              if (this.isReservedName(object.name)) throw Error("name '" + object.name + "' is reserved in " + this);
              object.parent && object.parent.remove(object);
              this.fields[object.name] = object;
              object.message = this;
              object.onAdd(this);
              return clearCache(this);
            }
            if (object instanceof OneOf) {
              this.oneofs || (this.oneofs = {});
              this.oneofs[object.name] = object;
              object.onAdd(this);
              return clearCache(this);
            }
            return Namespace.prototype.add.call(this, object);
          };
          Type.prototype.remove = function remove(object) {
            if (object instanceof Field && object.extend === undefined) {
              if (!this.fields || this.fields[object.name] !== object) throw Error(object + " is not a member of " + this);
              delete this.fields[object.name];
              object.parent = null;
              object.onRemove(this);
              return clearCache(this);
            }
            if (object instanceof OneOf) {
              if (!this.oneofs || this.oneofs[object.name] !== object) throw Error(object + " is not a member of " + this);
              delete this.oneofs[object.name];
              object.parent = null;
              object.onRemove(this);
              return clearCache(this);
            }
            return Namespace.prototype.remove.call(this, object);
          };
          Type.prototype.isReservedId = function isReservedId(id) {
            return Namespace.isReservedId(this.reserved, id);
          };
          Type.prototype.isReservedName = function isReservedName(name) {
            return Namespace.isReservedName(this.reserved, name);
          };
          Type.prototype.create = function create(properties) {
            return new this.ctor(properties);
          };
          Type.prototype.setup = function setup() {
            var fullName = this.fullName, types = [];
            for (var i = 0; i < this.fieldsArray.length; ++i) types.push(this._fieldsArray[i].resolve().resolvedType);
            this.encode = encoder(this)({
              Writer: Writer,
              types: types,
              util: util
            });
            this.decode = decoder(this)({
              Reader: Reader,
              types: types,
              util: util
            });
            this.verify = verifier(this)({
              types: types,
              util: util
            });
            this.fromObject = converter.fromObject(this)({
              types: types,
              util: util
            });
            this.toObject = converter.toObject(this)({
              types: types,
              util: util
            });
            var wrapper = wrappers[fullName];
            if (wrapper) {
              var originalThis = Object.create(this);
              originalThis.fromObject = this.fromObject;
              this.fromObject = wrapper.fromObject.bind(originalThis);
              originalThis.toObject = this.toObject;
              this.toObject = wrapper.toObject.bind(originalThis);
            }
            return this;
          };
          Type.prototype.encode = function encode_setup(message, writer) {
            return this.setup().encode(message, writer);
          };
          Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
          };
          Type.prototype.decode = function decode_setup(reader, length) {
            return this.setup().decode(reader, length);
          };
          Type.prototype.decodeDelimited = function decodeDelimited(reader) {
            reader instanceof Reader || (reader = Reader.create(reader));
            return this.decode(reader, reader.uint32());
          };
          Type.prototype.verify = function verify_setup(message) {
            return this.setup().verify(message);
          };
          Type.prototype.fromObject = function fromObject(object) {
            return this.setup().fromObject(object);
          };
          Type.prototype.toObject = function toObject(message, options) {
            return this.setup().toObject(message, options);
          };
          Type.d = function decorateType(typeName) {
            return function typeDecorator(target) {
              util.decorateType(target, typeName);
            };
          };
        }, {
          12: 12,
          13: 13,
          14: 14,
          15: 15,
          16: 16,
          20: 20,
          21: 21,
          23: 23,
          25: 25,
          27: 27,
          33: 33,
          37: 37,
          40: 40,
          41: 41,
          42: 42
        } ],
        36: [ function(require, module, exports) {
          var types = exports;
          var util = require(37);
          var s = [ "double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes" ];
          function bake(values, offset) {
            var i = 0, o = {};
            offset |= 0;
            while (i < values.length) o[s[i + offset]] = values[i++];
            return o;
          }
          types.basic = bake([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2 ]);
          types.defaults = bake([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", util.emptyArray, null ]);
          types["long"] = bake([ 0, 0, 0, 1, 1 ], 7);
          types.mapKey = bake([ 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2 ], 2);
          types.packed = bake([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0 ]);
        }, {
          37: 37
        } ],
        37: [ function(require, module, exports) {
          var util = module.exports = require(39);
          var roots = require(30);
          var Type, Enum;
          util.codegen = require(3);
          util.fetch = require(5);
          util.path = require(8);
          util.fs = util.inquire("fs");
          util.toArray = function toArray(object) {
            if (object) {
              var keys = Object.keys(object), array = new Array(keys.length), index = 0;
              while (index < keys.length) array[index] = object[keys[index++]];
              return array;
            }
            return [];
          };
          util.toObject = function toObject(array) {
            var object = {}, index = 0;
            while (index < array.length) {
              var key = array[index++], val = array[index++];
              val !== undefined && (object[key] = val);
            }
            return object;
          };
          var safePropBackslashRe = /\\/g, safePropQuoteRe = /"/g;
          util.isReserved = function isReserved(name) {
            return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
          };
          util.safeProp = function safeProp(prop) {
            if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop)) return '["' + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, '\\"') + '"]';
            return "." + prop;
          };
          util.ucFirst = function ucFirst(str) {
            return str.charAt(0).toUpperCase() + str.substring(1);
          };
          var camelCaseRe = /_([a-z])/g;
          util.camelCase = function camelCase(str) {
            return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function($0, $1) {
              return $1.toUpperCase();
            });
          };
          util.compareFieldsById = function compareFieldsById(a, b) {
            return a.id - b.id;
          };
          util.decorateType = function decorateType(ctor, typeName) {
            if (ctor.$type) {
              if (typeName && ctor.$type.name !== typeName) {
                util.decorateRoot.remove(ctor.$type);
                ctor.$type.name = typeName;
                util.decorateRoot.add(ctor.$type);
              }
              return ctor.$type;
            }
            Type || (Type = require(35));
            var type = new Type(typeName || ctor.name);
            util.decorateRoot.add(type);
            type.ctor = ctor;
            Object.defineProperty(ctor, "$type", {
              value: type,
              enumerable: false
            });
            Object.defineProperty(ctor.prototype, "$type", {
              value: type,
              enumerable: false
            });
            return type;
          };
          var decorateEnumIndex = 0;
          util.decorateEnum = function decorateEnum(object) {
            if (object.$type) return object.$type;
            Enum || (Enum = require(15));
            var enm = new Enum("Enum" + decorateEnumIndex++, object);
            util.decorateRoot.add(enm);
            Object.defineProperty(object, "$type", {
              value: enm,
              enumerable: false
            });
            return enm;
          };
          Object.defineProperty(util, "decorateRoot", {
            get: function get() {
              return roots["decorated"] || (roots["decorated"] = new (require(29))());
            }
          });
        }, {
          15: 15,
          29: 29,
          3: 3,
          30: 30,
          35: 35,
          39: 39,
          5: 5,
          8: 8
        } ],
        38: [ function(require, module, exports) {
          module.exports = LongBits;
          var util = require(39);
          function LongBits(lo, hi) {
            this.lo = lo >>> 0;
            this.hi = hi >>> 0;
          }
          var zero = LongBits.zero = new LongBits(0, 0);
          zero.toNumber = function() {
            return 0;
          };
          zero.zzEncode = zero.zzDecode = function() {
            return this;
          };
          zero.length = function() {
            return 1;
          };
          var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
          LongBits.fromNumber = function fromNumber(value) {
            if (0 === value) return zero;
            var sign = value < 0;
            sign && (value = -value);
            var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
            if (sign) {
              hi = ~hi >>> 0;
              lo = ~lo >>> 0;
              if (++lo > 4294967295) {
                lo = 0;
                ++hi > 4294967295 && (hi = 0);
              }
            }
            return new LongBits(lo, hi);
          };
          LongBits.from = function from(value) {
            if ("number" === typeof value) return LongBits.fromNumber(value);
            if (util.isString(value)) {
              if (!util.Long) return LongBits.fromNumber(parseInt(value, 10));
              value = util.Long.fromString(value);
            }
            return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
          };
          LongBits.prototype.toNumber = function toNumber(unsigned) {
            if (!unsigned && this.hi >>> 31) {
              var lo = 1 + ~this.lo >>> 0, hi = ~this.hi >>> 0;
              lo || (hi = hi + 1 >>> 0);
              return -(lo + 4294967296 * hi);
            }
            return this.lo + 4294967296 * this.hi;
          };
          LongBits.prototype.toLong = function toLong(unsigned) {
            return util.Long ? new util.Long(0 | this.lo, 0 | this.hi, Boolean(unsigned)) : {
              low: 0 | this.lo,
              high: 0 | this.hi,
              unsigned: Boolean(unsigned)
            };
          };
          var charCodeAt = String.prototype.charCodeAt;
          LongBits.fromHash = function fromHash(hash) {
            if (hash === zeroHash) return zero;
            return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
          };
          LongBits.prototype.toHash = function toHash() {
            return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
          };
          LongBits.prototype.zzEncode = function zzEncode() {
            var mask = this.hi >> 31;
            this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
            this.lo = (this.lo << 1 ^ mask) >>> 0;
            return this;
          };
          LongBits.prototype.zzDecode = function zzDecode() {
            var mask = -(1 & this.lo);
            this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
            this.hi = (this.hi >>> 1 ^ mask) >>> 0;
            return this;
          };
          LongBits.prototype.length = function length() {
            var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
            return 0 === part2 ? 0 === part1 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
          };
        }, {
          39: 39
        } ],
        39: [ function(require, module, exports) {
          var util = exports;
          util.asPromise = require(1);
          util.base64 = require(2);
          util.EventEmitter = require(4);
          util["float"] = require(6);
          util.inquire = require(7);
          util.utf8 = require(10);
          util.pool = require(9);
          util.LongBits = require(38);
          util.emptyArray = Object.freeze ? Object.freeze([]) : [];
          util.emptyObject = Object.freeze ? Object.freeze({}) : {};
          util.isNode = Boolean(global.process && global.process.versions && global.process.versions.node);
          util.isInteger = Number.isInteger || function isInteger(value) {
            return "number" === typeof value && isFinite(value) && Math.floor(value) === value;
          };
          util.isString = function isString(value) {
            return "string" === typeof value || value instanceof String;
          };
          util.isObject = function isObject(value) {
            return value && "object" === typeof value;
          };
          util.isset = util.isSet = function isSet(obj, prop) {
            var value = obj[prop];
            if (null != value && obj.hasOwnProperty(prop)) return "object" !== typeof value || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
            return false;
          };
          util.Buffer = function() {
            try {
              var Buffer = util.inquire("buffer").Buffer;
              return Buffer.prototype.utf8Write ? Buffer : null;
            } catch (e) {
              return null;
            }
          }();
          util._Buffer_from = null;
          util._Buffer_allocUnsafe = null;
          util.newBuffer = function newBuffer(sizeOrArray) {
            return "number" === typeof sizeOrArray ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : "undefined" === typeof Uint8Array ? sizeOrArray : new Uint8Array(sizeOrArray);
          };
          util.Array = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
          util.Long = global.dcodeIO && global.dcodeIO.Long || util.inquire("long");
          util.key2Re = /^true|false|0|1$/;
          util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
          util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
          util.longToHash = function longToHash(value) {
            return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
          };
          util.longFromHash = function longFromHash(hash, unsigned) {
            var bits = util.LongBits.fromHash(hash);
            if (util.Long) return util.Long.fromBits(bits.lo, bits.hi, unsigned);
            return bits.toNumber(Boolean(unsigned));
          };
          function merge(dst, src, ifNotSet) {
            for (var keys = Object.keys(src), i = 0; i < keys.length; ++i) dst[keys[i]] !== undefined && ifNotSet || (dst[keys[i]] = src[keys[i]]);
            return dst;
          }
          util.merge = merge;
          util.lcFirst = function lcFirst(str) {
            return str.charAt(0).toLowerCase() + str.substring(1);
          };
          function newError(name) {
            function CustomError(message, properties) {
              if (!(this instanceof CustomError)) return new CustomError(message, properties);
              Object.defineProperty(this, "message", {
                get: function get() {
                  return message;
                }
              });
              Error.captureStackTrace ? Error.captureStackTrace(this, CustomError) : Object.defineProperty(this, "stack", {
                value: new Error().stack || ""
              });
              properties && merge(this, properties);
            }
            (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;
            Object.defineProperty(CustomError.prototype, "name", {
              get: function get() {
                return name;
              }
            });
            CustomError.prototype.toString = function toString() {
              return this.name + ": " + this.message;
            };
            return CustomError;
          }
          util.newError = newError;
          util.ProtocolError = newError("ProtocolError");
          util.oneOfGetter = function getOneOf(fieldNames) {
            var fieldMap = {};
            for (var i = 0; i < fieldNames.length; ++i) fieldMap[fieldNames[i]] = 1;
            return function() {
              for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i) if (1 === fieldMap[keys[i]] && this[keys[i]] !== undefined && null !== this[keys[i]]) return keys[i];
            };
          };
          util.oneOfSetter = function setOneOf(fieldNames) {
            return function(name) {
              for (var i = 0; i < fieldNames.length; ++i) fieldNames[i] !== name && delete this[fieldNames[i]];
            };
          };
          util.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: true
          };
          util._configure = function() {
            var Buffer = util.Buffer;
            if (!Buffer) {
              util._Buffer_from = util._Buffer_allocUnsafe = null;
              return;
            }
            util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from || function Buffer_from(value, encoding) {
              return new Buffer(value, encoding);
            };
            util._Buffer_allocUnsafe = Buffer.allocUnsafe || function Buffer_allocUnsafe(size) {
              return new Buffer(size);
            };
          };
        }, {
          1: 1,
          10: 10,
          2: 2,
          38: 38,
          4: 4,
          6: 6,
          7: 7,
          9: 9
        } ],
        40: [ function(require, module, exports) {
          module.exports = verifier;
          var Enum = require(15), util = require(37);
          function invalid(field, expected) {
            return field.name + ": " + expected + (field.repeated && "array" !== expected ? "[]" : field.map && "object" !== expected ? "{k:" + field.keyType + "}" : "") + " expected";
          }
          function genVerifyValue(gen, field, fieldIndex, ref) {
            if (field.resolvedType) if (field.resolvedType instanceof Enum) {
              gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));
              for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j) gen("case %i:", field.resolvedType.values[keys[j]]);
              gen("break")("}");
            } else gen("{")("var e=types[%i].verify(%s);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}"); else switch (field.type) {
             case "int32":
             case "uint32":
             case "sint32":
             case "fixed32":
             case "sfixed32":
              gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
              break;

             case "int64":
             case "uint64":
             case "sint64":
             case "fixed64":
             case "sfixed64":
              gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
              break;

             case "float":
             case "double":
              gen('if(typeof %s!=="number")', ref)("return%j", invalid(field, "number"));
              break;

             case "bool":
              gen('if(typeof %s!=="boolean")', ref)("return%j", invalid(field, "boolean"));
              break;

             case "string":
              gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
              break;

             case "bytes":
              gen('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', ref, ref, ref)("return%j", invalid(field, "buffer"));
            }
            return gen;
          }
          function genVerifyKey(gen, field, ref) {
            switch (field.keyType) {
             case "int32":
             case "uint32":
             case "sint32":
             case "fixed32":
             case "sfixed32":
              gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
              break;

             case "int64":
             case "uint64":
             case "sint64":
             case "fixed64":
             case "sfixed64":
              gen("if(!util.key64Re.test(%s))", ref)("return%j", invalid(field, "integer|Long key"));
              break;

             case "bool":
              gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
            }
            return gen;
          }
          function verifier(mtype) {
            var gen = util.codegen([ "m" ], mtype.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected");
            var oneofs = mtype.oneofsArray, seenFirstField = {};
            oneofs.length && gen("var p={}");
            for (var i = 0; i < mtype.fieldsArray.length; ++i) {
              var field = mtype._fieldsArray[i].resolve(), ref = "m" + util.safeProp(field.name);
              field.optional && gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name);
              if (field.map) {
                gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
                genVerifyKey(gen, field, "k[i]");
                genVerifyValue(gen, field, i, ref + "[k[i]]")("}");
              } else if (field.repeated) {
                gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
                genVerifyValue(gen, field, i, ref + "[i]")("}");
              } else {
                if (field.partOf) {
                  var oneofProp = util.safeProp(field.partOf.name);
                  1 === seenFirstField[field.partOf.name] && gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
                  seenFirstField[field.partOf.name] = 1;
                  gen("p%s=1", oneofProp);
                }
                genVerifyValue(gen, field, i, ref);
              }
              field.optional && gen("}");
            }
            return gen("return null");
          }
        }, {
          15: 15,
          37: 37
        } ],
        41: [ function(require, module, exports) {
          var wrappers = exports;
          var Message = require(21);
          wrappers[".google.protobuf.Any"] = {
            fromObject: function fromObject(object) {
              if (object && object["@type"]) {
                var type = this.lookup(object["@type"]);
                if (type) {
                  var type_url = "." === object["@type"].charAt(0) ? object["@type"].substr(1) : object["@type"];
                  return this.create({
                    type_url: "/" + type_url,
                    value: type.encode(type.fromObject(object)).finish()
                  });
                }
              }
              return this.fromObject(object);
            },
            toObject: function toObject(message, options) {
              if (options && options.json && message.type_url && message.value) {
                var name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
                var type = this.lookup(name);
                type && (message = type.decode(message.value));
              }
              if (!(message instanceof this.ctor) && message instanceof Message) {
                var object = message.$type.toObject(message, options);
                object["@type"] = message.$type.fullName;
                return object;
              }
              return this.toObject(message, options);
            }
          };
        }, {
          21: 21
        } ],
        42: [ function(require, module, exports) {
          module.exports = Writer;
          var util = require(39);
          var BufferWriter;
          var LongBits = util.LongBits, base64 = util.base64, utf8 = util.utf8;
          function Op(fn, len, val) {
            this.fn = fn;
            this.len = len;
            this.next = undefined;
            this.val = val;
          }
          function noop() {}
          function State(writer) {
            this.head = writer.head;
            this.tail = writer.tail;
            this.len = writer.len;
            this.next = writer.states;
          }
          function Writer() {
            this.len = 0;
            this.head = new Op(noop, 0, 0);
            this.tail = this.head;
            this.states = null;
          }
          Writer.create = util.Buffer ? function create_buffer_setup() {
            return (Writer.create = function create_buffer() {
              return new BufferWriter();
            })();
          } : function create_array() {
            return new Writer();
          };
          Writer.alloc = function alloc(size) {
            return new util.Array(size);
          };
          util.Array !== Array && (Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray));
          Writer.prototype._push = function push(fn, len, val) {
            this.tail = this.tail.next = new Op(fn, len, val);
            this.len += len;
            return this;
          };
          function writeByte(val, buf, pos) {
            buf[pos] = 255 & val;
          }
          function writeVarint32(val, buf, pos) {
            while (val > 127) {
              buf[pos++] = 127 & val | 128;
              val >>>= 7;
            }
            buf[pos] = val;
          }
          function VarintOp(len, val) {
            this.len = len;
            this.next = undefined;
            this.val = val;
          }
          VarintOp.prototype = Object.create(Op.prototype);
          VarintOp.prototype.fn = writeVarint32;
          Writer.prototype.uint32 = function write_uint32(value) {
            this.len += (this.tail = this.tail.next = new VarintOp((value >>>= 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
            return this;
          };
          Writer.prototype.int32 = function write_int32(value) {
            return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
          };
          Writer.prototype.sint32 = function write_sint32(value) {
            return this.uint32((value << 1 ^ value >> 31) >>> 0);
          };
          function writeVarint64(val, buf, pos) {
            while (val.hi) {
              buf[pos++] = 127 & val.lo | 128;
              val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
              val.hi >>>= 7;
            }
            while (val.lo > 127) {
              buf[pos++] = 127 & val.lo | 128;
              val.lo = val.lo >>> 7;
            }
            buf[pos++] = val.lo;
          }
          Writer.prototype.uint64 = function write_uint64(value) {
            var bits = LongBits.from(value);
            return this._push(writeVarint64, bits.length(), bits);
          };
          Writer.prototype.int64 = Writer.prototype.uint64;
          Writer.prototype.sint64 = function write_sint64(value) {
            var bits = LongBits.from(value).zzEncode();
            return this._push(writeVarint64, bits.length(), bits);
          };
          Writer.prototype.bool = function write_bool(value) {
            return this._push(writeByte, 1, value ? 1 : 0);
          };
          function writeFixed32(val, buf, pos) {
            buf[pos] = 255 & val;
            buf[pos + 1] = val >>> 8 & 255;
            buf[pos + 2] = val >>> 16 & 255;
            buf[pos + 3] = val >>> 24;
          }
          Writer.prototype.fixed32 = function write_fixed32(value) {
            return this._push(writeFixed32, 4, value >>> 0);
          };
          Writer.prototype.sfixed32 = Writer.prototype.fixed32;
          Writer.prototype.fixed64 = function write_fixed64(value) {
            var bits = LongBits.from(value);
            return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
          };
          Writer.prototype.sfixed64 = Writer.prototype.fixed64;
          Writer.prototype["float"] = function write_float(value) {
            return this._push(util["float"].writeFloatLE, 4, value);
          };
          Writer.prototype["double"] = function write_double(value) {
            return this._push(util["float"].writeDoubleLE, 8, value);
          };
          var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
            buf.set(val, pos);
          } : function writeBytes_for(val, buf, pos) {
            for (var i = 0; i < val.length; ++i) buf[pos + i] = val[i];
          };
          Writer.prototype.bytes = function write_bytes(value) {
            var len = value.length >>> 0;
            if (!len) return this._push(writeByte, 1, 0);
            if (util.isString(value)) {
              var buf = Writer.alloc(len = base64.length(value));
              base64.decode(value, buf, 0);
              value = buf;
            }
            return this.uint32(len)._push(writeBytes, len, value);
          };
          Writer.prototype.string = function write_string(value) {
            var len = utf8.length(value);
            return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
          };
          Writer.prototype.fork = function fork() {
            this.states = new State(this);
            this.head = this.tail = new Op(noop, 0, 0);
            this.len = 0;
            return this;
          };
          Writer.prototype.reset = function reset() {
            if (this.states) {
              this.head = this.states.head;
              this.tail = this.states.tail;
              this.len = this.states.len;
              this.states = this.states.next;
            } else {
              this.head = this.tail = new Op(noop, 0, 0);
              this.len = 0;
            }
            return this;
          };
          Writer.prototype.ldelim = function ldelim() {
            var head = this.head, tail = this.tail, len = this.len;
            this.reset().uint32(len);
            if (len) {
              this.tail.next = head.next;
              this.tail = tail;
              this.len += len;
            }
            return this;
          };
          Writer.prototype.finish = function finish() {
            var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
            while (head) {
              head.fn(head.val, buf, pos);
              pos += head.len;
              head = head.next;
            }
            return buf;
          };
          Writer._configure = function(BufferWriter_) {
            BufferWriter = BufferWriter_;
          };
        }, {
          39: 39
        } ],
        43: [ function(require, module, exports) {
          module.exports = BufferWriter;
          var Writer = require(42);
          (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
          var util = require(39);
          var Buffer = util.Buffer;
          function BufferWriter() {
            Writer.call(this);
          }
          BufferWriter.alloc = function alloc_buffer(size) {
            return (BufferWriter.alloc = util._Buffer_allocUnsafe)(size);
          };
          var writeBytesBuffer = Buffer && Buffer.prototype instanceof Uint8Array && "set" === Buffer.prototype.set.name ? function writeBytesBuffer_set(val, buf, pos) {
            buf.set(val, pos);
          } : function writeBytesBuffer_copy(val, buf, pos) {
            if (val.copy) val.copy(buf, pos, 0, val.length); else for (var i = 0; i < val.length; ) buf[pos++] = val[i++];
          };
          BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
            util.isString(value) && (value = util._Buffer_from(value, "base64"));
            var len = value.length >>> 0;
            this.uint32(len);
            len && this._push(writeBytesBuffer, len, value);
            return this;
          };
          function writeStringBuffer(val, buf, pos) {
            val.length < 40 ? util.utf8.write(val, buf, pos) : buf.utf8Write(val, pos);
          }
          BufferWriter.prototype.string = function write_string_buffer(value) {
            var len = Buffer.byteLength(value);
            this.uint32(len);
            len && this._push(writeStringBuffer, len, value);
            return this;
          };
        }, {
          39: 39,
          42: 42
        } ]
      }, {}, [ 19 ]);
    })("object" === typeof window && window || "object" === typeof self && self || void 0);
    var $protobuf = window.protobuf;
    $protobuf.roots["default"] = window;
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util, $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    $root.pro = function() {
      var e = {};
      return e.RequestHeader = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.sid = "", r.prototype.uid = 0, r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.sid && e.hasOwnProperty("sid") && r.uint32(10).string(e.sid), 
          null != e.uid && e.hasOwnProperty("uid") && r.uint32(16).int32(e.uid), r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.RequestHeader(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.sid = e.string();
              break;

             case 2:
              n.uid = e.int32();
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          return "object" != typeof e || null === e ? "object expected" : null != e.sid && e.hasOwnProperty("sid") && !$util.isString(e.sid) ? "sid: string expected" : null != e.uid && e.hasOwnProperty("uid") && !$util.isInteger(e.uid) ? "uid: integer expected" : null;
        }, r;
      }(), e.ResponseHeader = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.ret = 0, r.prototype.msg = "", r.prototype.time = 0, r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.ret && e.hasOwnProperty("ret") && r.uint32(8).int32(e.ret), 
          null != e.msg && e.hasOwnProperty("msg") && r.uint32(18).string(e.msg), null != e.time && e.hasOwnProperty("time") && r.uint32(24).int32(e.time), 
          r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.ResponseHeader(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.ret = e.int32();
              break;

             case 2:
              n.msg = e.string();
              break;

             case 3:
              n.time = e.int32();
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          return "object" != typeof e || null === e ? "object expected" : null != e.ret && e.hasOwnProperty("ret") && !$util.isInteger(e.ret) ? "ret: integer expected" : null != e.msg && e.hasOwnProperty("msg") && !$util.isString(e.msg) ? "msg: string expected" : null != e.time && e.hasOwnProperty("time") && !$util.isInteger(e.time) ? "time: integer expected" : null;
        }, r;
      }(), e.DefaultErrorResponse = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.header = null, r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.header && e.hasOwnProperty("header") && $root.pro.ResponseHeader.encode(e.header, r.uint32(10).fork()).ldelim(), 
          r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.DefaultErrorResponse(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.header = $root.pro.ResponseHeader.decode(e, e.uint32());
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          if ("object" != typeof e || null === e) return "object expected";
          if (null != e.header && e.hasOwnProperty("header")) {
            var r = $root.pro.ResponseHeader.verify(e.header);
            if (r) return "header." + r;
          }
          return null;
        }, r;
      }(), e.LoginRequest = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.header = null, r.prototype.openid = "", r.prototype.code = "", 
        r.prototype.rawData = "", r.prototype.signature = "", r.prototype.encryptedData = "", 
        r.prototype.iv = "", r.prototype.clientData = "", r.prototype.invite = "", r.prototype.appid = "", 
        r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.header && e.hasOwnProperty("header") && $root.pro.RequestHeader.encode(e.header, r.uint32(10).fork()).ldelim(), 
          null != e.openid && e.hasOwnProperty("openid") && r.uint32(18).string(e.openid), 
          null != e.code && e.hasOwnProperty("code") && r.uint32(26).string(e.code), null != e.rawData && e.hasOwnProperty("rawData") && r.uint32(34).string(e.rawData), 
          null != e.signature && e.hasOwnProperty("signature") && r.uint32(42).string(e.signature), 
          null != e.encryptedData && e.hasOwnProperty("encryptedData") && r.uint32(50).string(e.encryptedData), 
          null != e.iv && e.hasOwnProperty("iv") && r.uint32(58).string(e.iv), null != e.clientData && e.hasOwnProperty("clientData") && r.uint32(66).string(e.clientData), 
          null != e.invite && e.hasOwnProperty("invite") && r.uint32(74).string(e.invite), 
          null != e.appid && e.hasOwnProperty("appid") && r.uint32(82).string(e.appid), r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.LoginRequest(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.header = $root.pro.RequestHeader.decode(e, e.uint32());
              break;

             case 2:
              n.openid = e.string();
              break;

             case 3:
              n.code = e.string();
              break;

             case 4:
              n.rawData = e.string();
              break;

             case 5:
              n.signature = e.string();
              break;

             case 6:
              n.encryptedData = e.string();
              break;

             case 7:
              n.iv = e.string();
              break;

             case 8:
              n.clientData = e.string();
              break;

             case 9:
              n.invite = e.string();
              break;

             case 10:
              n.appid = e.string();
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          if ("object" != typeof e || null === e) return "object expected";
          if (null != e.header && e.hasOwnProperty("header")) {
            var r = $root.pro.RequestHeader.verify(e.header);
            if (r) return "header." + r;
          }
          return null != e.openid && e.hasOwnProperty("openid") && !$util.isString(e.openid) ? "openid: string expected" : null != e.code && e.hasOwnProperty("code") && !$util.isString(e.code) ? "code: string expected" : null != e.rawData && e.hasOwnProperty("rawData") && !$util.isString(e.rawData) ? "rawData: string expected" : null != e.signature && e.hasOwnProperty("signature") && !$util.isString(e.signature) ? "signature: string expected" : null != e.encryptedData && e.hasOwnProperty("encryptedData") && !$util.isString(e.encryptedData) ? "encryptedData: string expected" : null != e.iv && e.hasOwnProperty("iv") && !$util.isString(e.iv) ? "iv: string expected" : null != e.clientData && e.hasOwnProperty("clientData") && !$util.isString(e.clientData) ? "clientData: string expected" : null != e.invite && e.hasOwnProperty("invite") && !$util.isString(e.invite) ? "invite: string expected" : null != e.appid && e.hasOwnProperty("appid") && !$util.isString(e.appid) ? "appid: string expected" : null;
        }, r;
      }(), e.LoginResponse = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.header = null, r.prototype.uid = 0, r.prototype.sid = "", r.prototype.playerData = "", 
        r.prototype.cover = 0, r.prototype.openid = "", r.prototype.unionid = "", r.prototype.state = 0, 
        r.prototype.score = 0, r.prototype.myRankRo = null, r.prototype.areaState = 0, r.prototype.playDt = 0, 
        r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.header && e.hasOwnProperty("header") && $root.pro.ResponseHeader.encode(e.header, r.uint32(10).fork()).ldelim(), 
          null != e.uid && e.hasOwnProperty("uid") && r.uint32(16).int32(e.uid), null != e.sid && e.hasOwnProperty("sid") && r.uint32(26).string(e.sid), 
          null != e.playerData && e.hasOwnProperty("playerData") && r.uint32(34).string(e.playerData), 
          null != e.cover && e.hasOwnProperty("cover") && r.uint32(40).int32(e.cover), null != e.openid && e.hasOwnProperty("openid") && r.uint32(50).string(e.openid), 
          null != e.unionid && e.hasOwnProperty("unionid") && r.uint32(58).string(e.unionid), 
          null != e.state && e.hasOwnProperty("state") && r.uint32(64).int32(e.state), null != e.score && e.hasOwnProperty("score") && r.uint32(72).int32(e.score), 
          null != e.myRankRo && e.hasOwnProperty("myRankRo") && $root.pro.MyRankRo.encode(e.myRankRo, r.uint32(82).fork()).ldelim(), 
          null != e.areaState && e.hasOwnProperty("areaState") && r.uint32(88).int32(e.areaState), 
          null != e.playDt && e.hasOwnProperty("playDt") && r.uint32(96).int32(e.playDt), 
          r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.LoginResponse(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.header = $root.pro.ResponseHeader.decode(e, e.uint32());
              break;

             case 2:
              n.uid = e.int32();
              break;

             case 3:
              n.sid = e.string();
              break;

             case 4:
              n.playerData = e.string();
              break;

             case 5:
              n.cover = e.int32();
              break;

             case 6:
              n.openid = e.string();
              break;

             case 7:
              n.unionid = e.string();
              break;

             case 8:
              n.state = e.int32();
              break;

             case 9:
              n.score = e.int32();
              break;

             case 10:
              n.myRankRo = $root.pro.MyRankRo.decode(e, e.uint32());
              break;

             case 11:
              n.areaState = e.int32();
              break;

             case 12:
              n.playDt = e.int32();
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          if ("object" != typeof e || null === e) return "object expected";
          var r;
          if (null != e.header && e.hasOwnProperty("header") && (r = $root.pro.ResponseHeader.verify(e.header))) return "header." + r;
          if (null != e.uid && e.hasOwnProperty("uid") && !$util.isInteger(e.uid)) return "uid: integer expected";
          if (null != e.sid && e.hasOwnProperty("sid") && !$util.isString(e.sid)) return "sid: string expected";
          if (null != e.playerData && e.hasOwnProperty("playerData") && !$util.isString(e.playerData)) return "playerData: string expected";
          if (null != e.cover && e.hasOwnProperty("cover") && !$util.isInteger(e.cover)) return "cover: integer expected";
          if (null != e.openid && e.hasOwnProperty("openid") && !$util.isString(e.openid)) return "openid: string expected";
          if (null != e.unionid && e.hasOwnProperty("unionid") && !$util.isString(e.unionid)) return "unionid: string expected";
          if (null != e.state && e.hasOwnProperty("state") && !$util.isInteger(e.state)) return "state: integer expected";
          if (null != e.score && e.hasOwnProperty("score") && !$util.isInteger(e.score)) return "score: integer expected";
          if (null != e.myRankRo && e.hasOwnProperty("myRankRo") && (r = $root.pro.MyRankRo.verify(e.myRankRo))) return "myRankRo." + r;
          return null != e.areaState && e.hasOwnProperty("areaState") && !$util.isInteger(e.areaState) ? "areaState: integer expected" : null != e.playDt && e.hasOwnProperty("playDt") && !$util.isInteger(e.playDt) ? "playDt: integer expected" : null;
        }, r;
      }(), e.PollingRequest = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.header = null, r.prototype.playerData = "", r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.header && e.hasOwnProperty("header") && $root.pro.RequestHeader.encode(e.header, r.uint32(10).fork()).ldelim(), 
          null != e.playerData && e.hasOwnProperty("playerData") && r.uint32(18).string(e.playerData), 
          r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.PollingRequest(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.header = $root.pro.RequestHeader.decode(e, e.uint32());
              break;

             case 2:
              n.playerData = e.string();
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          if ("object" != typeof e || null === e) return "object expected";
          if (null != e.header && e.hasOwnProperty("header")) {
            var r = $root.pro.RequestHeader.verify(e.header);
            if (r) return "header." + r;
          }
          return null != e.playerData && e.hasOwnProperty("playerData") && !$util.isString(e.playerData) ? "playerData: string expected" : null;
        }, r;
      }(), e.PollingResponse = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.header = null, r.prototype.score = 0, r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.header && e.hasOwnProperty("header") && $root.pro.ResponseHeader.encode(e.header, r.uint32(10).fork()).ldelim(), 
          null != e.score && e.hasOwnProperty("score") && r.uint32(16).int32(e.score), r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.PollingResponse(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.header = $root.pro.ResponseHeader.decode(e, e.uint32());
              break;

             case 2:
              n.score = e.int32();
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          if ("object" != typeof e || null === e) return "object expected";
          if (null != e.header && e.hasOwnProperty("header")) {
            var r = $root.pro.ResponseHeader.verify(e.header);
            if (r) return "header." + r;
          }
          return null != e.score && e.hasOwnProperty("score") && !$util.isInteger(e.score) ? "score: integer expected" : null;
        }, r;
      }(), e.ClickShareRequest = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.header = null, r.prototype.invite = "", r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.header && e.hasOwnProperty("header") && $root.pro.RequestHeader.encode(e.header, r.uint32(10).fork()).ldelim(), 
          null != e.invite && e.hasOwnProperty("invite") && r.uint32(18).string(e.invite), 
          r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.ClickShareRequest(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.header = $root.pro.RequestHeader.decode(e, e.uint32());
              break;

             case 2:
              n.invite = e.string();
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          if ("object" != typeof e || null === e) return "object expected";
          if (null != e.header && e.hasOwnProperty("header")) {
            var r = $root.pro.RequestHeader.verify(e.header);
            if (r) return "header." + r;
          }
          return null != e.invite && e.hasOwnProperty("invite") && !$util.isString(e.invite) ? "invite: string expected" : null;
        }, r;
      }(), e.ClickShareResponse = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.header = null, r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.header && e.hasOwnProperty("header") && $root.pro.ResponseHeader.encode(e.header, r.uint32(10).fork()).ldelim(), 
          r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.ClickShareResponse(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.header = $root.pro.ResponseHeader.decode(e, e.uint32());
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          if ("object" != typeof e || null === e) return "object expected";
          if (null != e.header && e.hasOwnProperty("header")) {
            var r = $root.pro.ResponseHeader.verify(e.header);
            if (r) return "header." + r;
          }
          return null;
        }, r;
      }(), e.SetPlayerInfoRequest = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.header = null, r.prototype.data = "", r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.header && e.hasOwnProperty("header") && $root.pro.RequestHeader.encode(e.header, r.uint32(10).fork()).ldelim(), 
          null != e.data && e.hasOwnProperty("data") && r.uint32(18).string(e.data), r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.SetPlayerInfoRequest(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.header = $root.pro.RequestHeader.decode(e, e.uint32());
              break;

             case 2:
              n.data = e.string();
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          if ("object" != typeof e || null === e) return "object expected";
          if (null != e.header && e.hasOwnProperty("header")) {
            var r = $root.pro.RequestHeader.verify(e.header);
            if (r) return "header." + r;
          }
          return null != e.data && e.hasOwnProperty("data") && !$util.isString(e.data) ? "data: string expected" : null;
        }, r;
      }(), e.SetPlayerInfoResponse = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.header = null, r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.header && e.hasOwnProperty("header") && $root.pro.ResponseHeader.encode(e.header, r.uint32(10).fork()).ldelim(), 
          r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.SetPlayerInfoResponse(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.header = $root.pro.ResponseHeader.decode(e, e.uint32());
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          if ("object" != typeof e || null === e) return "object expected";
          if (null != e.header && e.hasOwnProperty("header")) {
            var r = $root.pro.ResponseHeader.verify(e.header);
            if (r) return "header." + r;
          }
          return null;
        }, r;
      }(), e.UpChallengeScoreRequest = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.header = null, r.prototype.value = 0, r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.header && e.hasOwnProperty("header") && $root.pro.RequestHeader.encode(e.header, r.uint32(10).fork()).ldelim(), 
          null != e.value && e.hasOwnProperty("value") && r.uint32(16).int32(e.value), r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.UpChallengeScoreRequest(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.header = $root.pro.RequestHeader.decode(e, e.uint32());
              break;

             case 2:
              n.value = e.int32();
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          if ("object" != typeof e || null === e) return "object expected";
          if (null != e.header && e.hasOwnProperty("header")) {
            var r = $root.pro.RequestHeader.verify(e.header);
            if (r) return "header." + r;
          }
          return null != e.value && e.hasOwnProperty("value") && !$util.isInteger(e.value) ? "value: integer expected" : null;
        }, r;
      }(), e.UpChallengeScoreResponse = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.header = null, r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.header && e.hasOwnProperty("header") && $root.pro.ResponseHeader.encode(e.header, r.uint32(10).fork()).ldelim(), 
          r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.UpChallengeScoreResponse(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.header = $root.pro.ResponseHeader.decode(e, e.uint32());
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          if ("object" != typeof e || null === e) return "object expected";
          if (null != e.header && e.hasOwnProperty("header")) {
            var r = $root.pro.ResponseHeader.verify(e.header);
            if (r) return "header." + r;
          }
          return null;
        }, r;
      }(), e.ChallengeRankRequest = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.header = null, r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.header && e.hasOwnProperty("header") && $root.pro.RequestHeader.encode(e.header, r.uint32(10).fork()).ldelim(), 
          r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.ChallengeRankRequest(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.header = $root.pro.RequestHeader.decode(e, e.uint32());
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          if ("object" != typeof e || null === e) return "object expected";
          if (null != e.header && e.hasOwnProperty("header")) {
            var r = $root.pro.RequestHeader.verify(e.header);
            if (r) return "header." + r;
          }
          return null;
        }, r;
      }(), e.ChallengeRankResponse = function() {
        function r(e) {
          if (this.rankRos = [], e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.header = null, r.prototype.rankRos = $util.emptyArray, r.prototype.myRankRo = null, 
        r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          if (r || (r = $Writer.create()), null != e.header && e.hasOwnProperty("header") && $root.pro.ResponseHeader.encode(e.header, r.uint32(10).fork()).ldelim(), 
          null != e.rankRos && e.rankRos.length) for (var t = 0; t < e.rankRos.length; ++t) $root.pro.RankRo.encode(e.rankRos[t], r.uint32(18).fork()).ldelim();
          return null != e.myRankRo && e.hasOwnProperty("myRankRo") && $root.pro.MyRankRo.encode(e.myRankRo, r.uint32(26).fork()).ldelim(), 
          r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.ChallengeRankResponse(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.header = $root.pro.ResponseHeader.decode(e, e.uint32());
              break;

             case 2:
              n.rankRos && n.rankRos.length || (n.rankRos = []), n.rankRos.push($root.pro.RankRo.decode(e, e.uint32()));
              break;

             case 3:
              n.myRankRo = $root.pro.MyRankRo.decode(e, e.uint32());
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          if ("object" != typeof e || null === e) return "object expected";
          if (null != e.header && e.hasOwnProperty("header") && (t = $root.pro.ResponseHeader.verify(e.header))) return "header." + t;
          if (null != e.rankRos && e.hasOwnProperty("rankRos")) {
            if (!Array.isArray(e.rankRos)) return "rankRos: array expected";
            for (var r = 0; r < e.rankRos.length; ++r) {
              var t;
              if (t = $root.pro.RankRo.verify(e.rankRos[r])) return "rankRos." + t;
            }
          }
          if (null != e.myRankRo && e.hasOwnProperty("myRankRo") && (t = $root.pro.MyRankRo.verify(e.myRankRo))) return "myRankRo." + t;
          return null;
        }, r;
      }(), e.FriendDataRo = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.fid = 0, r.prototype.nick = "", r.prototype.avatarUrl = "", r.prototype.baseData = "", 
        r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.fid && e.hasOwnProperty("fid") && r.uint32(8).int32(e.fid), 
          null != e.nick && e.hasOwnProperty("nick") && r.uint32(18).string(e.nick), null != e.avatarUrl && e.hasOwnProperty("avatarUrl") && r.uint32(26).string(e.avatarUrl), 
          null != e.baseData && e.hasOwnProperty("baseData") && r.uint32(34).string(e.baseData), 
          r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.FriendDataRo(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.fid = e.int32();
              break;

             case 2:
              n.nick = e.string();
              break;

             case 3:
              n.avatarUrl = e.string();
              break;

             case 4:
              n.baseData = e.string();
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          return "object" != typeof e || null === e ? "object expected" : null != e.fid && e.hasOwnProperty("fid") && !$util.isInteger(e.fid) ? "fid: integer expected" : null != e.nick && e.hasOwnProperty("nick") && !$util.isString(e.nick) ? "nick: string expected" : null != e.avatarUrl && e.hasOwnProperty("avatarUrl") && !$util.isString(e.avatarUrl) ? "avatarUrl: string expected" : null != e.baseData && e.hasOwnProperty("baseData") && !$util.isString(e.baseData) ? "baseData: string expected" : null;
        }, r;
      }(), e.RankRo = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.rank = 0, r.prototype.score = 0, r.prototype.fid = 0, r.prototype.nick = "", 
        r.prototype.avatarUrl = "", r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.rank && e.hasOwnProperty("rank") && r.uint32(8).int32(e.rank), 
          null != e.score && e.hasOwnProperty("score") && r.uint32(16).int32(e.score), null != e.fid && e.hasOwnProperty("fid") && r.uint32(24).int32(e.fid), 
          null != e.nick && e.hasOwnProperty("nick") && r.uint32(34).string(e.nick), null != e.avatarUrl && e.hasOwnProperty("avatarUrl") && r.uint32(42).string(e.avatarUrl), 
          r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.RankRo(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.rank = e.int32();
              break;

             case 2:
              n.score = e.int32();
              break;

             case 3:
              n.fid = e.int32();
              break;

             case 4:
              n.nick = e.string();
              break;

             case 5:
              n.avatarUrl = e.string();
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          return "object" != typeof e || null === e ? "object expected" : null != e.rank && e.hasOwnProperty("rank") && !$util.isInteger(e.rank) ? "rank: integer expected" : null != e.score && e.hasOwnProperty("score") && !$util.isInteger(e.score) ? "score: integer expected" : null != e.fid && e.hasOwnProperty("fid") && !$util.isInteger(e.fid) ? "fid: integer expected" : null != e.nick && e.hasOwnProperty("nick") && !$util.isString(e.nick) ? "nick: string expected" : null != e.avatarUrl && e.hasOwnProperty("avatarUrl") && !$util.isString(e.avatarUrl) ? "avatarUrl: string expected" : null;
        }, r;
      }(), e.MyRankRo = function() {
        function r(e) {
          if (e) for (var r = Object.keys(e), t = 0; t < r.length; ++t) null != e[r[t]] && (this[r[t]] = e[r[t]]);
        }
        return r.prototype.rank = 0, r.prototype.score = 0, r.create = function(e) {
          return new r(e);
        }, r.encode = function(e, r) {
          return r || (r = $Writer.create()), null != e.rank && e.hasOwnProperty("rank") && r.uint32(8).int32(e.rank), 
          null != e.score && e.hasOwnProperty("score") && r.uint32(16).int32(e.score), r;
        }, r.encodeDelimited = function(e, r) {
          return this.encode(e, r).ldelim();
        }, r.decode = function(e, r) {
          e instanceof $Reader || (e = $Reader.create(e));
          for (var t = void 0 === r ? e.len : e.pos + r, n = new $root.pro.MyRankRo(); e.pos < t; ) {
            var o = e.uint32();
            switch (o >>> 3) {
             case 1:
              n.rank = e.int32();
              break;

             case 2:
              n.score = e.int32();
              break;

             default:
              e.skipType(7 & o);
            }
          }
          return n;
        }, r.decodeDelimited = function(e) {
          return e instanceof $Reader || (e = new $Reader(e)), this.decode(e, e.uint32());
        }, r.verify = function(e) {
          return "object" != typeof e || null === e ? "object expected" : null != e.rank && e.hasOwnProperty("rank") && !$util.isInteger(e.rank) ? "rank: integer expected" : null != e.score && e.hasOwnProperty("score") && !$util.isInteger(e.score) ? "score: integer expected" : null;
        }, r;
      }(), e;
    }();
    cc._RF.pop();
  }, {
    1: void 0,
    10: void 0,
    11: void 0,
    12: void 0,
    13: void 0,
    14: void 0,
    15: void 0,
    16: void 0,
    17: void 0,
    18: void 0,
    2: void 0,
    20: void 0,
    21: void 0,
    22: void 0,
    23: void 0,
    24: void 0,
    25: void 0,
    26: void 0,
    27: void 0,
    28: void 0,
    29: void 0,
    3: void 0,
    30: void 0,
    31: void 0,
    32: void 0,
    33: void 0,
    34: void 0,
    35: void 0,
    36: void 0,
    37: void 0,
    38: void 0,
    39: void 0,
    4: void 0,
    40: void 0,
    41: void 0,
    42: void 0,
    43: void 0,
    5: void 0,
    6: void 0,
    7: void 0,
    8: void 0,
    9: void 0
  } ],
  redRainBtn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b7b0auLTZhORKVKZ5t4lfEd", "redRainBtn");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var redpackRain_1 = require("./redpackRain");
    var RedUtil_1 = require("../RedUtil");
    var redRainBtn = function(_super) {
      __extends(redRainBtn, _super);
      function redRainBtn() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.freeNum = null;
        _this.timeCount = null;
        _this._callBack = null;
        _this._freecount = 3;
        _this.videoAd = null;
        return _this;
      }
      redRainBtn.prototype.onLoad = function() {
        this.freeNum = this.node.getChildByName("freeNum").getComponent(cc.Label);
        this.timeCount = this.node.getChildByName("timeCount").getComponent(cc.Label);
      };
      redRainBtn.prototype.start = function() {
        this.timeCount.node.active = false;
        this.node.on("click", this.selfClick, this);
        setTimeout(function() {
          RedUtil_1.RedUtil.requestRedRainCount();
        }, 500);
      };
      redRainBtn.prototype.selfClick = function() {
        console.log("selfClick---------" + this._freecount);
        this._freecount > 0 ? RedUtil_1.RedUtil._renPackRainTime <= 0 && this.openVidio() : RedUtil_1.RedUtil.opeTips("\u4eca\u65e5\u6b21\u6570\u5df2\u8fbe\u4e0a\u9650\uff0c\u660e\u5929\u5728\u6765\u8bd5\u8bd5\uff01");
      };
      redRainBtn.prototype.openVidio = function() {
        var _this = this;
        console.log("openVideo=============");
        var self = this;
        var aunId = "";
        var qq = window["qq"];
        if (!qq) {
          console.log("openVideo====qq======null===");
          return;
        }
        if (qq.aly.aUnID) {
          aunId = qq.aly.aUnID;
          console.log("qq.aly.aUnID--\u7ea2\u5305------" + qq.aly.aUnID);
        }
        this.videoAd = qq.createRewardedVideoAd({
          adUnitId: aunId
        });
        this.videoAd.onError(function(errm) {
          console.log("emerrrrrrr==\u7ea2\u5305\u96e8===" + JSON.stringify(errm));
          RedUtil_1.RedUtil.opeTips("\u5e7f\u544a\u6ca1\u6709\u51c6\u5907\u597d\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5");
        });
        this.videoAd.onLoad(function(res) {
          console.log("onload===\u7ea2\u5305\u96e8==" + res);
        });
        this.videoAd.show().catch(function(err) {
          _this.videoAd.load().then(function() {
            console.log("\u7ea2\u5305\u96e8\u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
            _this.videoAd.show().then(function() {
              console.log("\u7ea2\u5305\u96e8\u5e7f\u544a\u663e\u793a\u6210\u529f");
            }).catch(function(err) {
              console.log("\u7ea2\u5305\u96e8\u5e7f\u544a\u663e\u793a\u5931\u8d25");
            });
          }).catch(function(err) {
            console.log("\u7ea2\u5305\u96e8\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25");
          });
        });
        this.videoAd.onClose(function(statue) {
          if (statue && statue.isEnded || void 0 === statue) {
            self.videoAd.offClose();
            self.setRedVideo();
            console.log("\u7ea2\u5305\u96e8\u5e7f\u544a\u5173\u95ed\u6210\u529f==============");
          } else self.videoAd.offClose();
        });
      };
      redRainBtn.prototype.setRedVideo = function() {
        RedUtil_1.RedUtil._renPackRainTime = 180;
        this.openRedRain();
        this.timeCount.node.active = true;
        RedUtil_1.RedUtil.changeEveryTaskMessage(10001, 1);
        this._freecount -= 1;
        this.freeNum.string = "\u4eca\u65e5\u514d\u8d39" + this._freecount + "\u6b21";
      };
      redRainBtn.prototype.openRedRain = function() {
        this.addPoolitem();
        var parmp = {
          callBack: this._callBack
        };
        var parentNode = cc.director.getScene();
        RedUtil_1.RedUtil.LoadResource("alySDK/alyprofabs/redpackRain", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            parentNode.addChild(newNode);
            if (parmp) {
              var cla = newNode.getComponent(redpackRain_1.default);
              cla.getParams(parmp);
            }
          }
        });
      };
      redRainBtn.prototype.destroySelf = function() {
        this._callBack && this._callBack.onClosed && this._callBack.onClosed();
        this.node.destroy();
      };
      redRainBtn.prototype.addPoolitem = function() {
        if (RedUtil_1.RedUtil._litterRedPool.length <= 0) for (var index = 0; index < 15; index++) if (RedUtil_1.RedUtil._litterRedPro) {
          var newNode = cc.instantiate(RedUtil_1.RedUtil._litterRedPro);
          if (newNode) {
            newNode.active = false;
            RedUtil_1.RedUtil._litterRedPool.push(newNode);
          }
        } else RedUtil_1.RedUtil.LoadResource("alySDK/alyprofabs/litterRedPack", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            newNode.active = false;
            RedUtil_1.RedUtil._litterRedPool.push(newNode);
          }
        });
      };
      redRainBtn.prototype.setMessage = function(messCode) {
        if (messCode) {
          this._freecount = 3 - messCode.Count;
          this.freeNum.string = "\u4eca\u65e5\u514d\u8d39" + this._freecount + "\u6b21";
        }
      };
      redRainBtn.prototype.getParams = function(parmp) {
        if (parmp && parmp.callBack) {
          this._callBack = parmp.callBack;
          this._callBack && this._callBack.onOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.onOpened);
        }
      };
      redRainBtn.prototype.update = function(dt) {
        if (RedUtil_1.RedUtil._renPackRainTime > 0) {
          RedUtil_1.RedUtil._renPackRainTime -= dt;
          this.timeCount.string = RedUtil_1.RedUtil.getSecondString(1e3 * RedUtil_1.RedUtil._renPackRainTime);
        } else this.timeCount.node.active = false;
      };
      __decorate([ property(cc.Label) ], redRainBtn.prototype, "freeNum", void 0);
      __decorate([ property(cc.Label) ], redRainBtn.prototype, "timeCount", void 0);
      __decorate([ property ], redRainBtn.prototype, "_callBack", void 0);
      __decorate([ property ], redRainBtn.prototype, "_freecount", void 0);
      __decorate([ property ], redRainBtn.prototype, "videoAd", void 0);
      redRainBtn = __decorate([ ccclass ], redRainBtn);
      return redRainBtn;
    }(cc.Component);
    exports.default = redRainBtn;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil",
    "./redpackRain": "redpackRain"
  } ],
  redStarBtn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d6dc2CbkFNCaZ8U9DUdvAYw", "redStarBtn");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var turnPage_1 = require("./turnPage");
    var RedUtil_1 = require("../RedUtil");
    var redStarBtn = function(_super) {
      __extends(redStarBtn, _super);
      function redStarBtn() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.v_propTitle = "";
        _this.v_propIcon = "";
        _this._callBack = null;
        return _this;
      }
      redStarBtn.prototype.start = function() {
        this.node.on("click", this.openTurnPage, this);
      };
      redStarBtn.prototype.onDisable = function() {
        RedUtil_1.RedUtil._RedStarBtn = null;
      };
      redStarBtn.prototype.openTurnPage = function() {
        var date = new Date();
        var dateStr = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        var yesterdayhave = 0;
        var todayhave = 0;
        var todayM = cc.sys.localStorage.getItem("todayHaveNum");
        if (todayM) {
          var todayArr = todayM.split(";");
          if (todayArr instanceof Array && todayArr.length > 1) if (todayArr[0] == dateStr) todayhave = Number(todayArr[1]); else {
            yesterdayhave = Number(todayArr[1]);
            var yesterM = cc.sys.localStorage.getItem("yesterdayHaveNum");
            if (yesterM) {
              var yesterMarr = yesterM.split(";");
              if (yesterMarr instanceof Array && yesterMarr.length > 1) if (yesterMarr[0] == dateStr) {
                yesterdayhave = Number(yesterMarr[1]);
                console.log("yesterMarr=======" + yesterMarr[1]);
              } else cc.sys.localStorage.setItem("yesterdayHaveNum", dateStr + ";" + yesterdayhave);
            }
            todayhave = RedUtil_1.RedUtil.getRandomNum(1, 100);
            cc.sys.localStorage.setItem("todayHaveNum", dateStr + ";" + todayhave);
          }
        } else {
          todayhave = RedUtil_1.RedUtil.getRandomNum(1, 100);
          cc.sys.localStorage.setItem("todayHaveNum", dateStr + ";" + todayhave);
        }
        var starnum = 5e4 - todayhave;
        var parentNode = cc.director.getScene();
        var parmp = {
          callBack: this._callBack,
          propIcon: this.v_propIcon,
          propTitle: this.v_propTitle,
          starNum: starnum
        };
        cc.loader.loadRes("alySDK/alyprofabs/turnPage", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            parentNode.addChild(newNode);
            newNode.setPosition(parentNode.width / 2, parentNode.height / 2);
            RedUtil_1.RedUtil._turnPage = newNode;
            if (parmp) {
              var cla = newNode.getComponent(turnPage_1.default);
              cla.getParams(parmp);
            }
          }
        });
      };
      redStarBtn.prototype.destroySelf = function() {
        this._callBack && this._callBack.onClosed && this._callBack.onClosed();
        this.node.destroy();
      };
      redStarBtn.prototype.getParams = function(parmp) {
        if (parmp) {
          if (parmp.callBack) {
            this._callBack = parmp.callBack;
            this._callBack && this._callBack.onOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.onOpened);
          }
          parmp.propTitle && "" != parmp.propTitle && (this.v_propTitle = parmp.propTitle);
          parmp.propIcon && "" != parmp.propIcon && (this.v_propIcon = parmp.propIcon);
        }
      };
      __decorate([ property ], redStarBtn.prototype, "v_propTitle", void 0);
      __decorate([ property ], redStarBtn.prototype, "v_propIcon", void 0);
      __decorate([ property ], redStarBtn.prototype, "_callBack", void 0);
      redStarBtn = __decorate([ ccclass ], redStarBtn);
      return redStarBtn;
    }(cc.Component);
    exports.default = redStarBtn;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil",
    "./turnPage": "turnPage"
  } ],
  redpackFirstWin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92d5dES1OpJlbTi4F1+Hm2I", "redpackFirstWin");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedUtil_1 = require("../RedUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var redpackFirstWin = function(_super) {
      __extends(redpackFirstWin, _super);
      function redpackFirstWin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.redpackType = "";
        _this._ishaveVideo = false;
        _this.videoAd = null;
        _this._callBack = null;
        _this.clieckBtn = null;
        _this.closeBtn = null;
        _this.redBg = null;
        _this.tipStr = null;
        _this.yuanlaibig = null;
        _this.passStr = null;
        _this.passStr2 = null;
        _this.video_tipStr = null;
        _this._isSend = false;
        _this._eventDotnum = 0;
        _this._passNum = 0;
        return _this;
      }
      redpackFirstWin.prototype.onLoad = function() {
        this.redBg = this.node.getChildByName("redBg");
        this.tipStr = this.redBg.getChildByName("tipStr").getComponent(cc.Label);
        this.yuanlaibig = this.redBg.getChildByName("yuanlaibig").getComponent(cc.Label);
        this.passStr = this.redBg.getChildByName("passStr").getComponent(cc.Label);
        this.passStr2 = this.redBg.getChildByName("passStr2").getComponent(cc.Label);
        this.clieckBtn = this.redBg.getChildByName("clieckBtn").getComponent(cc.Button);
        this.closeBtn = this.redBg.getChildByName("closeBtn").getComponent(cc.Button);
        this.video_tipStr = this.redBg.getChildByName("video_tipStr");
      };
      redpackFirstWin.prototype.onEnable = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        this.redBg.setPosition(0, 0);
        RedUtil_1.RedUtil.setAction(this.redBg, true, null);
        this.closeBtn.node.on("click", this.clickClose, this);
        var clickHandler = new cc.Component.EventHandler();
        clickHandler.target = this.node;
        clickHandler.component = "redpackFirstWin";
        clickHandler.handler = "openRedpackClieck";
        clickHandler.customEventData = "clieck";
        this.clieckBtn.clickEvents.push(clickHandler);
      };
      redpackFirstWin.prototype.update = function(dt) {
        this._isSend && this.setChange();
      };
      redpackFirstWin.prototype.onDisable = function() {
        console.log("disable============");
        RedUtil_1.RedUtil.firstRedPage = null;
      };
      redpackFirstWin.prototype.clickClose = function() {
        var self = this;
        RedUtil_1.RedUtil.setAction(this.redBg, false, function() {
          self.setCall();
        });
      };
      redpackFirstWin.prototype.setCall = function() {
        this._callBack && this._callBack.onClosed && this._callBack.onClosed();
        this.node.destroy();
      };
      redpackFirstWin.prototype.destroySelf = function() {
        this.node.destroy();
      };
      redpackFirstWin.prototype.openRedpackClieck = function(event, customEventData) {
        console.log("openRedpackClieck=============" + customEventData);
        this._ishaveVideo ? this.openVidio() : this.opensecond();
      };
      redpackFirstWin.prototype.opensecond = function() {
        var _this = this;
        this._callBack && this._callBack.redpackVideoClose && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.redpackVideoClose);
        RedUtil_1.RedUtil.openQuestRedPack(RedUtil_1.RedUtil._activeName, this.redpackType, false, null, this._eventDotnum);
        this.clieckBtn.node.angle = 0;
        cc.tween(this.clieckBtn.node).to(.6, {
          angle: -360
        }).call(function() {
          console.log("rotatioon");
          if (RedUtil_1.RedUtil.redNect) {
            _this.destroySelf();
            _this.openSecondredPage(cc.director.getScene(), {
              callBack: _this._callBack,
              openEventPotnum: _this._eventDotnum,
              isOpenWithdraw: _this.redpackType == RedUtil_1.RedUtil.redPackType.newPlayer
            });
          } else {
            RedUtil_1.RedUtil.opeTips("\u7f51\u7edc\u5ef6\u8fdf\uff0c\u8bf7\u7a0d\u7b49");
            _this._isSend = true;
          }
        }).start();
      };
      redpackFirstWin.prototype.setChange = function() {
        if (RedUtil_1.RedUtil.redNect) {
          RedUtil_1.RedUtil.redNect = false;
          this._isSend = false;
          this.destroySelf();
          this.openSecondredPage(cc.director.getScene(), {
            callBack: this._callBack,
            openEventPotnum: this._eventDotnum,
            isOpenWithdraw: this.redpackType == RedUtil_1.RedUtil.redPackType.newPlayer
          });
        }
      };
      redpackFirstWin.prototype.openVidio = function() {
        var _this = this;
        console.log("openVideo=============");
        var self = this;
        var aunId = "";
        var qq = window["qq"];
        if (!qq) {
          console.log("openVideo====qq======null===");
          return;
        }
        if (qq.aly.aUnID) {
          aunId = qq.aly.aUnID;
          console.log("qq.aly.aUnID--\u7ea2\u5305------" + qq.aly.aUnID);
        }
        this.videoAd = qq.createRewardedVideoAd({
          adUnitId: aunId
        });
        this.videoAd.onError(function(errm) {
          console.log("emerrrrrrr==\u7ea2\u5305===" + JSON.stringify(errm));
          RedUtil_1.RedUtil.opeTips(errm);
        });
        this.videoAd.onLoad(function(res) {
          console.log("onload===\u7ea2\u5305==" + res);
        });
        this.videoAd.show().catch(function(err) {
          _this.videoAd.load().then(function() {
            console.log("\u7ea2\u5305\u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
            _this.videoAd.show().then(function() {
              console.log("\u7ea2\u5305\u5e7f\u544a\u663e\u793a\u6210\u529f");
            }).catch(function(err) {
              console.log("\u7ea2\u5305\u5e7f\u544a\u663e\u793a\u5931\u8d25");
            });
          }).catch(function(err) {
            console.log("\u7ea2\u5305\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25");
          });
        });
        this.videoAd.onClose(function(statue) {
          if (statue && statue.isEnded || void 0 === statue) {
            self.videoAd.offClose();
            self.opensecond();
            console.log("\u7ea2\u5305\u5e7f\u544a\u5173\u95ed\u6210\u529f==============");
          } else {
            self.videoAd.offClose();
            _this._eventDotnum > 0 && RedUtil_1.RedUtil.extportData(1e3 * _this._eventDotnum + 2, 0);
          }
        });
      };
      redpackFirstWin.prototype.getParams = function(parmp) {
        if (parmp) {
          this._ishaveVideo = parmp.ishaveVideo;
          this._ishaveVideo || (this.video_tipStr.active = false);
          if (parmp.callBack) {
            this._callBack = parmp.callBack;
            this._callBack && this._callBack.onOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.onOpened);
          }
          parmp.activeName && (RedUtil_1.RedUtil._activeName = parmp.activeName);
          if (parmp.redpackType) {
            this.redpackType = parmp.redpackType;
            if (parmp.redpackType == RedUtil_1.RedUtil.redPackType.passOver) {
              this.passStr.node.active = true;
              this.passStr2.node.active = true;
              this.tipStr.node.active = false;
              this.yuanlaibig.node.active = false;
            } else parmp.redpackType == RedUtil_1.RedUtil.redPackType.newPlayer && (this.closeBtn.node.active = false);
          }
          parmp.passNum && (this._passNum = parmp.passNum);
          if (this.redpackType == RedUtil_1.RedUtil.redPackType.passOver && parmp.passNum < 4) RedUtil_1.RedUtil.extportData(4090, 2); else if (parmp.openEventPotnum > 0) {
            this._eventDotnum = parmp.openEventPotnum;
            RedUtil_1.RedUtil.extportData(1e3 * parmp.openEventPotnum, 2);
          }
        }
      };
      redpackFirstWin.prototype.openSecondredPage = function(parentNode, parmp) {
        var scccSrc = "redpackSecondWin";
        this.redpackType == RedUtil_1.RedUtil.redPackType.passOver && this._passNum < 4 && (scccSrc = "redpackSecondCheckWin");
        cc.loader.loadRes("alySDK/alyprofabs/" + scccSrc, function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            parentNode.addChild(newNode);
            newNode.setPosition(parentNode.width / 2, parentNode.height / 2);
            if (parmp) {
              var cla = newNode.getComponent(scccSrc);
              cla.getParams(parmp);
            }
          }
        });
      };
      __decorate([ property ], redpackFirstWin.prototype, "redpackType", void 0);
      __decorate([ property ], redpackFirstWin.prototype, "_ishaveVideo", void 0);
      __decorate([ property ], redpackFirstWin.prototype, "videoAd", void 0);
      __decorate([ property ], redpackFirstWin.prototype, "_callBack", void 0);
      __decorate([ property(cc.Button) ], redpackFirstWin.prototype, "clieckBtn", void 0);
      __decorate([ property(cc.Button) ], redpackFirstWin.prototype, "closeBtn", void 0);
      __decorate([ property(cc.Node) ], redpackFirstWin.prototype, "redBg", void 0);
      __decorate([ property(cc.Label) ], redpackFirstWin.prototype, "tipStr", void 0);
      __decorate([ property(cc.Label) ], redpackFirstWin.prototype, "yuanlaibig", void 0);
      __decorate([ property(cc.Label) ], redpackFirstWin.prototype, "passStr", void 0);
      __decorate([ property(cc.Label) ], redpackFirstWin.prototype, "passStr2", void 0);
      __decorate([ property(cc.Node) ], redpackFirstWin.prototype, "video_tipStr", void 0);
      __decorate([ property ], redpackFirstWin.prototype, "_isSend", void 0);
      __decorate([ property ], redpackFirstWin.prototype, "_eventDotnum", void 0);
      __decorate([ property ], redpackFirstWin.prototype, "_passNum", void 0);
      redpackFirstWin = __decorate([ ccclass ], redpackFirstWin);
      return redpackFirstWin;
    }(cc.Component);
    exports.default = redpackFirstWin;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil"
  } ],
  redpackRain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7ffa3BTqFxMsomvWMcAxxEv", "redpackRain");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RedUtil_1 = require("../RedUtil");
    var RedCenter_1 = require("../RedCenter");
    var redpackRain = function(_super) {
      __extends(redpackRain, _super);
      function redpackRain() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.redBg = null;
        _this.text = "hello";
        _this._callBack = null;
        _this.downTime = -1;
        _this.cortalTime = 15;
        _this.isStart = false;
        _this.numIcon = null;
        _this._isShowBox = false;
        _this._isOpenAppBox = true;
        return _this;
      }
      redpackRain.prototype.onLoad = function() {
        this.redBg = this.node.getChildByName("redBg");
        this.numIcon = this.redBg.getChildByName("numIcon").getComponent(cc.Sprite);
      };
      redpackRain.prototype.start = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        this.redBg.width = this.node.width;
        this.redBg.height = this.node.height;
        this.redBg.setPosition(0, 0);
        RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(5003, 555);
        this.cortalTime = 15;
        this.numIcon.node.active = true;
        this.numIcon.node.scaleX = .3;
        this.numIcon.node.scaleY = .3;
        this.numIcon.node.y = 265;
        cc.tween(this.numIcon.node).to(.1, {
          scaleX: 1,
          scaleY: 1,
          y: 449
        }).start();
        var self = this;
        setTimeout(function() {
          RedUtil_1.RedUtil.LoadSpritRes("alySDK/alyUI/num2", function(err, spriteframe) {
            self.numIcon.spriteFrame = spriteframe;
            setTimeout(function() {
              RedUtil_1.RedUtil.LoadSpritRes("alySDK/alyUI/num1", function(err, spriteframe) {
                self.numIcon.spriteFrame = spriteframe;
                setTimeout(function() {
                  RedUtil_1.RedUtil.LoadSpritRes("alySDK/alyUI/go", function(err, spriteframe) {
                    self.numIcon.spriteFrame = spriteframe;
                    setTimeout(function() {
                      self.numIcon.node.active = false;
                      self.startOpenRed();
                    }, 100);
                  });
                }, 800);
              });
            }, 800);
          });
        }, 800);
      };
      redpackRain.prototype.startOpenRed = function() {
        var _this = this;
        this.downTime = 0;
        this.showRain(0, 0);
        this.showRain(0, 130);
        this.showRain(0, 290);
        this.showRain(50, 330);
        RedUtil_1.RedUtil._currRedNum = 4;
        setTimeout(function() {
          _this.isStart = true;
        }, 500);
      };
      redpackRain.prototype.showRain = function(x, y) {
        var parentNode = this.redBg;
        if (RedUtil_1.RedUtil._litterRedPool.length > 0) {
          var newNode = RedUtil_1.RedUtil._litterRedPool[RedUtil_1.RedUtil._litterRedPool.length - 1];
          parentNode.addChild(newNode);
          newNode.setPosition(x, y);
          newNode.active = true;
          RedUtil_1.RedUtil._litterRedPool.pop();
        } else this.createLitter(x, y);
      };
      redpackRain.prototype.createLitter = function(x, y) {
        var parentNode = this.redBg;
        if (RedUtil_1.RedUtil._litterRedPro) {
          var newNode = cc.instantiate(RedUtil_1.RedUtil._litterRedPro);
          if (newNode) {
            parentNode.addChild(newNode);
            newNode.setPosition(x, y);
          }
        } else RedUtil_1.RedUtil.LoadResource("alySDK/alyprofabs/litterRedPack", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            parentNode.addChild(newNode);
            newNode.setPosition(x, y);
          }
        });
      };
      redpackRain.prototype.getParams = function(parmp) {
        if (parmp && parmp.callBack) {
          this._callBack = parmp.callBack;
          this._callBack && this._callBack.nextOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.nextOpened);
        }
      };
      redpackRain.prototype.destroyself = function() {
        RedUtil_1.RedUtil._isredPackRainOpen = true;
        RedCenter_1.default.getInstance().openRedpackFirst({
          callBack: this._callBack,
          activeName: "\u7ea2\u5305\u96e8",
          redpackType: "4",
          isOpenSecondPage: true
        });
        RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(5004, 555);
        if (RedUtil_1.RedUtil._litterRedPool.length > 0) {
          for (var index = 0; index < RedUtil_1.RedUtil._litterRedPool.length; index++) {
            var element = RedUtil_1.RedUtil._litterRedPool[index];
            element && element.destroy();
          }
          RedUtil_1.RedUtil._litterRedPool = [];
        }
        this.redBg.destroyAllChildren();
        this.node.destroy();
        this.isStart = false;
        this._isShowBox = false;
        RedUtil_1.RedUtil._currRedNum = 0;
      };
      redpackRain.prototype.addRedPack = function() {
        RedUtil_1.RedUtil._currRedNum += 1;
        this.showRain(0, 0);
      };
      redpackRain.prototype.update = function(dt) {
        if (this.downTime > -1 && this.isStart) if (this.downTime < this.cortalTime) {
          this.downTime += dt;
          if (RedUtil_1.RedUtil._currRedNum < 15) {
            var count = 15 - RedUtil_1.RedUtil._currRedNum;
            for (var index = 0; index < count; index++) this.addRedPack();
          }
          if (Math.floor(this.downTime) == this.cortalTime - 2 && !this._isShowBox) {
            console.log("this.downTime===========" + this.downTime);
            this._isShowBox = true;
            this.createBoxShow();
          }
        } else {
          this.downTime = -1;
          this.destroyself();
        }
      };
      redpackRain.prototype.createBoxShow = function() {
        this._callBack && this._callBack.showBoxFun && this._callBack.showBoxFun();
      };
      __decorate([ property(cc.Node) ], redpackRain.prototype, "redBg", void 0);
      __decorate([ property ], redpackRain.prototype, "text", void 0);
      __decorate([ property ], redpackRain.prototype, "_callBack", void 0);
      __decorate([ property ], redpackRain.prototype, "downTime", void 0);
      __decorate([ property ], redpackRain.prototype, "cortalTime", void 0);
      __decorate([ property ], redpackRain.prototype, "isStart", void 0);
      __decorate([ property(cc.Sprite) ], redpackRain.prototype, "numIcon", void 0);
      __decorate([ property ], redpackRain.prototype, "_isShowBox", void 0);
      __decorate([ property ], redpackRain.prototype, "_isOpenAppBox", void 0);
      redpackRain = __decorate([ ccclass ], redpackRain);
      return redpackRain;
    }(cc.Component);
    exports.default = redpackRain;
    cc._RF.pop();
  }, {
    "../RedCenter": "RedCenter",
    "../RedUtil": "RedUtil"
  } ],
  redpackSecondCheckWin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7bee9TVDy9DdpoRj4LR5DbB", "redpackSecondCheckWin");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RedUtil_1 = require("../RedUtil");
    var RedCenter_1 = require("../RedCenter");
    var redpackSecondCheckWin = function(_super) {
      __extends(redpackSecondCheckWin, _super);
      function redpackSecondCheckWin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.v_money = null;
        _this.v_yuan = null;
        _this.redbg = null;
        _this.bgPar = null;
        _this.background = null;
        _this.allmoney = null;
        _this.money = 0;
        _this._callBack = null;
        _this.seeBtn = null;
        _this.videoAd = null;
        _this._seeVideo = false;
        _this._eventDotnum = 0;
        return _this;
      }
      redpackSecondCheckWin.prototype.onLoad = function() {
        this.background = this.node.getChildByName("background");
        this.bgPar = this.node.getChildByName("bgPar");
        this.redbg = this.bgPar.getChildByName("redbg");
        this.closeBtn = this.redbg.getChildByName("closeBtn").getComponent(cc.Button);
        this.v_money = this.redbg.getChildByName("v_money").getComponent(cc.Label);
        this.v_yuan = this.redbg.getChildByName("v_yuan");
        this.allmoney = this.redbg.getChildByName("setPP").getChildByName("allmoney").getComponent(cc.Label);
        this.seeBtn = this.redbg.getChildByName("seeBtn");
        this.money = RedUtil_1.RedUtil._currentMoney;
        this.v_money.string = "\uffe5" + (this.money / 100).toString();
      };
      redpackSecondCheckWin.prototype.start = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        this.background.width = this.node.width;
        var mwidth = this.v_money.node.width;
        var nwidth = this.v_yuan.width;
        var allw = mwidth + nwidth + 8;
        var leftOff = (this.redbg.width - allw) / 2;
        this.v_money.node.x = leftOff + mwidth / 2;
        this.v_yuan.x = leftOff + mwidth + nwidth / 2 + 8;
        var monstr = cc.sys.localStorage.getItem("MoneyNum");
        if (monstr) {
          var currmoney = (Number(monstr) - this.money) / 100;
          RedCenter_1.default.getInstance().changeWithdrawBtnMoney(currmoney);
          this.allmoney.string = "\u4f59\u989d\uff1a" + currmoney;
        }
        this.closeBtn.node.on("click", this.closeSelf, this);
        this.seeBtn.on("click", this.openVidio, this);
      };
      redpackSecondCheckWin.prototype.closeSelf = function() {
        console.log("closeSelf===========");
        this._seeVideo || RedUtil_1.RedUtil.requestReduceRedPack(RedUtil_1.RedUtil._currentMoney);
        RedUtil_1.RedUtil.extportData(4092, 0);
        RedUtil_1.RedUtil._currentMoney = 0;
        RedUtil_1.RedUtil._currRedPackNum = 0;
        var self = this;
        RedUtil_1.RedUtil.setAction(this.bgPar, false, function() {
          self.setCall();
        });
      };
      redpackSecondCheckWin.prototype.destroySelf = function() {
        RedUtil_1.RedUtil._currentMoney = 0;
        RedUtil_1.RedUtil._currRedPackNum = 0;
        var self = this;
        RedUtil_1.RedUtil.setAction(this.bgPar, false, function() {
          self.setCall();
        });
      };
      redpackSecondCheckWin.prototype.setCall = function() {
        this._callBack && this._callBack.onClosed && this._callBack.onClosed();
        this.node.destroy();
      };
      redpackSecondCheckWin.prototype.openVidio = function() {
        var _this = this;
        console.log("openVideo=============");
        var self = this;
        var aunId = "";
        var qq = window["qq"];
        if (!qq) {
          console.log("openVideo====qq======null===");
          return;
        }
        if (qq.aly.aUnID) {
          aunId = qq.aly.aUnID;
          console.log("qq.aly.aUnID--\u7ea2\u5305------" + qq.aly.aUnID);
        }
        this.videoAd = qq.createRewardedVideoAd({
          adUnitId: aunId
        });
        this.videoAd.onError(function(errm) {
          console.log("emerrrrrrr==\u7ea2\u5305===" + JSON.stringify(errm));
          RedUtil_1.RedUtil.opeTips(errm);
        });
        this.videoAd.onLoad(function(res) {
          console.log("onload===\u7ea2\u5305==" + res);
        });
        this.videoAd.show().catch(function(err) {
          _this.videoAd.load().then(function() {
            console.log("\u7ea2\u5305\u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
            _this.videoAd.show().then(function() {
              console.log("\u7ea2\u5305\u5e7f\u544a\u663e\u793a\u6210\u529f");
            }).catch(function(err) {
              console.log("\u7ea2\u5305\u5e7f\u544a\u663e\u793a\u5931\u8d25");
            });
          }).catch(function(err) {
            console.log("\u7ea2\u5305\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25");
          });
        });
        this.videoAd.onClose(function(statue) {
          if (statue && statue.isEnded || void 0 === statue) {
            self.videoAd.offClose();
            self.opensecond();
            console.log("\u7ea2\u5305\u5e7f\u544a\u5173\u95ed\u6210\u529f==============");
          } else self.videoAd.offClose();
        });
      };
      redpackSecondCheckWin.prototype.opensecond = function() {
        RedUtil_1.RedUtil.extportData(4091, 0);
        this._seeVideo = true;
        this._callBack && this._callBack.redpackVideoClose && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.redpackVideoClose);
        this._callBack && this._callBack.redPackGetSuccess && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.redPackGetSuccess);
        var monstr = cc.sys.localStorage.getItem("MoneyNum");
        if (monstr) {
          var currmoney = Number(monstr) / 100;
          RedCenter_1.default.getInstance().changeWithdrawBtnMoney(currmoney);
        }
        this.destroySelf();
        RedUtil_1.RedUtil.opeTips("\u5df2\u5b58\u5165\u4f59\u989d\uff0c\u8bf7\u5230\u4f59\u989d\u67e5\u770b");
      };
      redpackSecondCheckWin.prototype.getParams = function(parmp) {
        console.log("pppppppppppppppppppp");
        if (parmp) {
          parmp.callBack && (this._callBack = parmp.callBack);
          parmp.openEventPotnum && (this._eventDotnum = parmp.openEventPotnum);
        }
      };
      __decorate([ property(cc.Button) ], redpackSecondCheckWin.prototype, "closeBtn", void 0);
      __decorate([ property(cc.Label) ], redpackSecondCheckWin.prototype, "v_money", void 0);
      __decorate([ property(cc.Node) ], redpackSecondCheckWin.prototype, "v_yuan", void 0);
      __decorate([ property(cc.Node) ], redpackSecondCheckWin.prototype, "redbg", void 0);
      __decorate([ property(cc.Node) ], redpackSecondCheckWin.prototype, "bgPar", void 0);
      __decorate([ property(cc.Node) ], redpackSecondCheckWin.prototype, "background", void 0);
      __decorate([ property(cc.Label) ], redpackSecondCheckWin.prototype, "allmoney", void 0);
      __decorate([ property ], redpackSecondCheckWin.prototype, "money", void 0);
      __decorate([ property ], redpackSecondCheckWin.prototype, "_callBack", void 0);
      __decorate([ property(cc.Node) ], redpackSecondCheckWin.prototype, "seeBtn", void 0);
      __decorate([ property ], redpackSecondCheckWin.prototype, "videoAd", void 0);
      __decorate([ property ], redpackSecondCheckWin.prototype, "_seeVideo", void 0);
      __decorate([ property ], redpackSecondCheckWin.prototype, "_eventDotnum", void 0);
      redpackSecondCheckWin = __decorate([ ccclass ], redpackSecondCheckWin);
      return redpackSecondCheckWin;
    }(cc.Component);
    exports.default = redpackSecondCheckWin;
    cc._RF.pop();
  }, {
    "../RedCenter": "RedCenter",
    "../RedUtil": "RedUtil"
  } ],
  redpackSecondWin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c505CebiNG7rcGTqeWQZwM", "redpackSecondWin");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedUtil_1 = require("../RedUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var redpackSecondWin = function(_super) {
      __extends(redpackSecondWin, _super);
      function redpackSecondWin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.v_money = null;
        _this.v_yuan = null;
        _this.redbg = null;
        _this.bgPar = null;
        _this.background_down = null;
        _this.moveTo = null;
        _this.goWithdrawBtn = null;
        _this.money = 0;
        _this._callBack = null;
        _this._isOpenWithdraw = false;
        return _this;
      }
      redpackSecondWin.prototype.onLoad = function() {
        this.bgPar = this.node.getChildByName("bgPar");
        this.redbg = this.bgPar.getChildByName("redbg");
        this.closeBtn = this.redbg.getChildByName("closeBtn").getComponent(cc.Button);
        this.v_money = this.redbg.getChildByName("v_money").getComponent(cc.Label);
        this.v_yuan = this.redbg.getChildByName("v_yuan");
        this.money = RedUtil_1.RedUtil._currentMoney;
        this.v_money.string = (this.money / 100).toString();
        this.background_down = this.node.getChildByName("background_down");
        this.moveTo = this.background_down.getChildByName("moveTo");
        this.goWithdrawBtn = this.background_down.getChildByName("goWithdrawBtn");
      };
      redpackSecondWin.prototype.start = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        var mwidth = this.v_money.node.width;
        var nwidth = this.v_yuan.width;
        var allw = mwidth + nwidth + 8;
        var leftOff = (this.redbg.width - allw) / 2;
        this.v_money.node.x = leftOff + mwidth / 2;
        this.v_yuan.x = leftOff + mwidth + nwidth / 2 + 8;
        var ctime = this.getDateString();
        var moneyData = cc.sys.localStorage.getItem("MoneyRecord");
        if (moneyData) {
          var record = JSON.parse(moneyData);
          var recordName = record.recordName;
          var MoneyTime = record.MoneyTime;
          var MoneyValue = record.MoneyValue;
          recordName.push(RedUtil_1.RedUtil._activeName);
          MoneyTime.push(ctime);
          MoneyValue.push(RedUtil_1.RedUtil._currentMoney.toString());
          record = {
            recordName: recordName,
            MoneyTime: MoneyTime,
            MoneyValue: MoneyValue
          };
          cc.sys.localStorage.setItem("MoneyRecord", JSON.stringify(record));
        } else {
          var recordName = [];
          var MoneyTime = [];
          var MoneyValue = [];
          recordName.push(RedUtil_1.RedUtil._activeName);
          MoneyTime.push(ctime);
          MoneyValue.push(RedUtil_1.RedUtil._currentMoney.toString());
          var record = {
            recordName: recordName,
            MoneyTime: MoneyTime,
            MoneyValue: MoneyValue
          };
          cc.sys.localStorage.setItem("MoneyRecord", JSON.stringify(record));
        }
        RedUtil_1.RedUtil.setAction(this.bgPar, true, null);
      };
      redpackSecondWin.prototype.onEnable = function() {
        var clickHandler = new cc.Component.EventHandler();
        clickHandler.target = this.node;
        clickHandler.component = "redpackSecondWin";
        clickHandler.handler = "destroySelf";
        clickHandler.customEventData = "clieck";
        this.closeBtn.clickEvents.push(clickHandler);
        this.goWithdrawBtn.on("click", this.openWithdraw, this);
      };
      redpackSecondWin.prototype.onDisable = function() {
        RedUtil_1.RedUtil._isOpenSecondPage = false;
        RedUtil_1.RedUtil._currentMoney = 0;
      };
      redpackSecondWin.prototype.destroySelf = function(event, customEventData) {
        var self = this;
        RedUtil_1.RedUtil.setAction(this.bgPar, false, function() {
          self.setCall();
        });
      };
      redpackSecondWin.prototype.setCall = function() {
        RedUtil_1.RedUtil._isOpenSecondPage && (RedUtil_1.RedUtil._isOpenSecondPage = false);
        this._callBack && this._callBack.onClosed && this._callBack.onClosed();
        this.node.destroy();
      };
      redpackSecondWin.prototype.startMove = function() {
        this.schedule(function() {
          cc.tween(this.moveTo).to(.2, {
            x: 167.152,
            y: -227
          }).to(.2, {
            x: 184.356,
            y: -209.8
          }).start();
        }, .4);
      };
      redpackSecondWin.prototype.openWithdraw = function() {
        this.node.destroy();
        RedUtil_1.RedUtil.requestCount({
          nextClose: this._callBack.onClosed
        });
      };
      redpackSecondWin.prototype.getParams = function(parmp) {
        console.log("pppppppppppppppppppp");
        if (parmp) {
          if (parmp.callBack) {
            this._callBack = parmp.callBack;
            RedUtil_1.RedUtil._isOpenSecondPage && (RedUtil_1.RedUtil._isredPackRainOpen || this._callBack && this._callBack.onOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.onOpened));
            this._callBack && this._callBack.redPackGetSuccess && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.redPackGetSuccess);
          }
          if (parmp.isOpenWithdraw) {
            this._isOpenWithdraw = parmp.isOpenWithdraw;
            cc.sys.localStorage.setItem("FirstOpenRedPack", "true");
            this.background_down.active = true;
            this.startMove();
          }
        }
      };
      redpackSecondWin.prototype.getDateString = function() {
        var nowDate = new Date();
        var year = String(nowDate.getFullYear());
        var month = String(nowDate.getMonth() + 1);
        var day = String(nowDate.getDate());
        month = month.length < 2 ? "0" + month : month;
        day = day.length < 2 ? "0" + day : day;
        var hour = nowDate.getHours();
        var hourstr = hour < 10 ? "0" + hour : hour.toString();
        var min = nowDate.getMinutes();
        var minstr = min < 10 ? "0" + min : min.toString();
        var sec = nowDate.getSeconds();
        var secstr = sec < 10 ? "0" + sec : sec.toString();
        return year + "-" + month + "-" + day + " " + hourstr + ":" + minstr + ":" + secstr;
      };
      __decorate([ property(cc.Button) ], redpackSecondWin.prototype, "closeBtn", void 0);
      __decorate([ property(cc.Label) ], redpackSecondWin.prototype, "v_money", void 0);
      __decorate([ property(cc.Node) ], redpackSecondWin.prototype, "v_yuan", void 0);
      __decorate([ property(cc.Node) ], redpackSecondWin.prototype, "redbg", void 0);
      __decorate([ property(cc.Node) ], redpackSecondWin.prototype, "bgPar", void 0);
      __decorate([ property(cc.Node) ], redpackSecondWin.prototype, "background_down", void 0);
      __decorate([ property(cc.Node) ], redpackSecondWin.prototype, "moveTo", void 0);
      __decorate([ property(cc.Node) ], redpackSecondWin.prototype, "goWithdrawBtn", void 0);
      __decorate([ property ], redpackSecondWin.prototype, "money", void 0);
      __decorate([ property ], redpackSecondWin.prototype, "_callBack", void 0);
      __decorate([ property ], redpackSecondWin.prototype, "_isOpenWithdraw", void 0);
      redpackSecondWin = __decorate([ ccclass ], redpackSecondWin);
      return redpackSecondWin;
    }(cc.Component);
    exports.default = redpackSecondWin;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil"
  } ],
  signRedWin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e765eNh42FDNqqwUVvKq7Xy", "signRedWin");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var BaseView_1 = require("../../core/View/BaseView");
    var FightManger_1 = require("../../game/fight/FightManger");
    var GameJSB_1 = require("../GameJSB");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var signRedWin = function(_super) {
      __extends(signRedWin, _super);
      function signRedWin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.closeLabel = null;
        _this.hongbaoLabel = null;
        return _this;
      }
      signRedWin.prototype.onLoad = function() {
        this.closeBtn.active = false;
        this.initLabel();
        "\u65b0\u624b\u7ea2\u5305" !== FightManger_1.default.getInstance().ViewFight.hongbaoType && this.signRedWinInit();
      };
      signRedWin.prototype.start = function() {};
      signRedWin.prototype.update = function(dt) {};
      signRedWin.prototype.initLabel = function() {
        switch (FightManger_1.default.getInstance().ViewFight.hongbaoType) {
         case "\u5e78\u8fd0\u7ea2\u5305":
          this.hongbaoLabel.string = "\u9650\u65f6\u7ea2\u5305";
          1 == FightManger_1.default.getInstance().Status && (FightManger_1.default.getInstance().Status = 2);
          break;

         case "\u5012\u8ba1\u65f6\u7ea2\u5305":
          this.hongbaoLabel.string = "\u6d88\u9664\u8f9b\u82e6\u4e86\uff01\n\u6211\u4eec\u7ed9\u60a8\u9001\u4e86\u4e00\u4e2a\u7ea2\u5305\uff0c\u795d\u60a8\u4e8b\u4e8b\u5982\u610f~";
          1 == FightManger_1.default.getInstance().Status && (FightManger_1.default.getInstance().Status = 2);
          break;

         case "\u65b0\u624b\u7ea2\u5305":
          this.hongbaoLabel.string = "\u65b0\u624b\u7ea2\u5305";
          1 == FightManger_1.default.getInstance().Status && (FightManger_1.default.getInstance().Status = 2);
        }
      };
      signRedWin.prototype.signRedWinInit = function() {
        var _this = this;
        var i = 3;
        this.schedule(function() {
          if (0 === i) {
            _this.closeLabel.enabled = false;
            _this.closeBtn.active = true;
          }
          _this.closeLabel.string = i-- + "";
        }, 1, 3, 0);
      };
      signRedWin.prototype.clickCloseBtn = function() {
        console.log("\u70b9\u51fb\u524d\u6e38\u620f\u72b6\u6001", FightManger_1.default.getInstance().Status);
        if (3 == FightManger_1.default.getInstance().Status) {
          FightManger_1.default.getInstance().nextLevel();
          ViewManager_1.default.getInstance().CloseView("signRedWin");
        } else if (2 == FightManger_1.default.getInstance().Status) {
          FightManger_1.default.getInstance().Status = 1;
          ViewManager_1.default.getInstance().CloseView("signRedWin");
        } else 5 != FightManger_1.default.getInstance().Status && ViewManager_1.default.getInstance().CloseView("signRedWin");
        console.log("\u70b9\u51fb\u540e\u6e38\u620f\u72b6\u6001", FightManger_1.default.getInstance().Status);
      };
      signRedWin.prototype.openRedBag = function() {
        switch (FightManger_1.default.getInstance().ViewFight.hongbaoType) {
         case "\u5e78\u8fd0\u7ea2\u5305":
          2 == FightManger_1.default.getInstance().Status && (FightManger_1.default.getInstance().Status = 1);
          GameJSB_1.GameJSB.getAndroidShowRv("\u5e78\u8fd0\u7ea2\u5305");
          break;

         case "\u5012\u8ba1\u65f6\u7ea2\u5305":
          2 == FightManger_1.default.getInstance().Status && (FightManger_1.default.getInstance().Status = 1);
          GameJSB_1.GameJSB.getAndroidShowRv("\u5012\u8ba1\u65f6\u7ea2\u5305");
          break;

         case "\u8fc7\u5173\u7ea2\u5305":
          GameJSB_1.GameJSB.getAndroidShowRv("\u8fc7\u5173\u7ea2\u5305");
          break;

         case "\u65b0\u624b\u7ea2\u5305":
          var param = {
            type: 7
          };
          GameJSB_1.GameJSB.getAndroidData("/userReward/rewards", JSON.stringify(param), "rewards");
          ViewManager_1.default.getInstance().CloseView("signRedWin");
        }
      };
      __decorate([ property(cc.Node) ], signRedWin.prototype, "closeBtn", void 0);
      __decorate([ property(cc.Label) ], signRedWin.prototype, "closeLabel", void 0);
      __decorate([ property(cc.Label) ], signRedWin.prototype, "hongbaoLabel", void 0);
      signRedWin = __decorate([ ccclass ], signRedWin);
      return signRedWin;
    }(BaseView_1.default);
    exports.default = signRedWin;
    cc._RF.pop();
  }, {
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/View/BaseView": "BaseView",
    "../../game/fight/FightManger": "FightManger",
    "../GameJSB": "GameJSB"
  } ],
  test: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2aeba90pdtCY6gAvA2wZn2H", "test");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RedCenter_1 = require("./RedCenter");
    var RedUtil_1 = require("./RedUtil");
    var test = function(_super) {
      __extends(test, _super);
      function test() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.redpack = null;
        _this.withdraw = null;
        _this.turnBtn = null;
        _this.mainprofit = null;
        return _this;
      }
      test.prototype.onLoad = function() {
        var background = this.node.getChildByName("background");
        this.redpack = background.getChildByName("redpack").getComponent(cc.Button);
        this.withdraw = background.getChildByName("withdraw").getComponent(cc.Button);
        this.turnBtn = background.getChildByName("turnBtn").getComponent(cc.Button);
        this.mainprofit = background.getChildByName("mainprofit").getComponent(cc.Button);
      };
      test.prototype.start = function() {
        RedCenter_1.default.getInstance().init(true, 720, 1280, "https://h5game.99aly.com/5agamewx/alywx/gameConfig/group3/data/qq/2048test.json");
        var money = RedCenter_1.default.getInstance().getcurrentMoney();
        console.log("moneystr=====================" + money);
        this.redpack.node.on("click", this.openRedpackFirst, this);
        this.withdraw.node.on("click", this.openRedpackFirst2, this);
        this.turnBtn.node.on("click", this.openAwardtip, this);
        this.mainprofit.node.on("click", this.openWithdrawSuccess, this);
        RedCenter_1.default.getInstance().showEveryRedBtn({
          parentNode: cc.director.getScene(),
          x: 9.524,
          y: 1181,
          callBack: {
            onOpened: function() {
              console.log("showEveryRedBtn======onOpened====");
            },
            onClosed: function() {
              console.log("showEveryRedBtn=======onClosed===");
            },
            nextOpened: function() {
              console.log("showEveryRedBtn=======nextOpened===");
            },
            nextClose: function() {
              console.log("showEveryRedBtn=======nextClose===");
            }
          },
          propTitle: "alySDK/alyUI/5-wenzi03",
          propIcon: "alySDK/alyUI/6-xing"
        });
        RedCenter_1.default.getInstance().showRedStarBtn({
          parentNode: cc.director.getScene(),
          x: 29.193,
          y: 1017.264,
          callBack: {
            onOpened: function() {
              console.log("showRedStarBtn======onOpened====");
            },
            onClosed: function() {
              console.log("showRedStarBtn=======onClosed===");
            },
            nextOpened: function() {
              console.log("showRedStarBtn=======nextOpened===");
            },
            nextClose: function() {
              console.log("showRedStarBtn=======nextClose===");
            }
          },
          propTitle: "alySDK/alyUI/5-wenzi03",
          propIcon: "alySDK/alyUI/6-xing"
        });
        RedCenter_1.default.getInstance().showwithdrawBtn({
          parentNode: cc.director.getScene(),
          x: 450.903,
          y: 600,
          callBack: {
            onOpened: function() {
              console.log("showwithdrawBtn======onOpened====");
            },
            onClosed: function() {
              console.log("showwithdrawBtn=======onClosed===");
            },
            nextOpened: function() {
              console.log("showwithdrawBtn=======nextOpened===");
            },
            nextClose: function() {
              console.log("showwithdrawBtn=======nextClose===");
            }
          }
        });
        RedCenter_1.default.getInstance().showEveryWithdrawBtn({
          parentNode: cc.director.getScene(),
          x: 104,
          y: 807,
          callBack: {
            onOpened: function() {
              console.log("showEveryWithdrawBtn======onOpened====");
            },
            onClosed: function() {
              console.log("showEveryWithdrawBtn=======onClosed===");
            },
            nextOpened: function() {
              console.log("showEveryWithdrawBtn=======nextOpened===");
            },
            nextClose: function() {
              console.log("showEveryWithdrawBtn=======nextClose===");
            }
          }
        });
        RedCenter_1.default.getInstance().showvideoWithdrawBtn({
          parentNode: cc.director.getScene(),
          x: 389,
          y: 387,
          callBack: {
            onOpened: function() {
              console.log("showvideoWithdrawBtn======onOpened====");
            },
            onClosed: function() {
              console.log("showvideoWithdrawBtn=======onClosed===");
            },
            nextOpened: function() {
              console.log("showvideoWithdrawBtn=======nextOpened===");
            },
            nextClose: function() {
              console.log("showvideoWithdrawBtn=======nextClose===");
            }
          }
        });
        RedCenter_1.default.getInstance().showRedRainBtn({
          parentNode: cc.director.getScene(),
          x: 100,
          y: 508,
          callBack: {
            onOpened: function() {
              console.log("showRedRainBtn======onOpened====");
            },
            onClosed: function() {
              console.log("showRedRainBtn=======onClosed===");
            },
            nextOpened: function() {
              console.log("showRedRainBtn=======nextOpened===");
            },
            nextClose: function() {
              console.log("showRedRainBtn=======nextClose===");
            },
            showBoxFun: function() {
              console.log("showBoxFun==============");
            }
          }
        });
        RedCenter_1.default.getInstance().checkOpenLoginSignWin({
          callBack: {
            nextOpened: function() {
              console.log("showLoginSignBtn=======nextOpened===");
            },
            nextClose: function() {
              console.log("showLoginSignBtn=======nextClose===");
            }
          }
        });
        RedCenter_1.default.getInstance().showLoginSignBtn({
          parentNode: cc.director.getScene(),
          x: 171.307,
          y: 337.672,
          callBack: {
            onOpened: function() {
              console.log("showLoginSignBtn======onOpened====");
            },
            onClosed: function() {
              console.log("showLoginSignBtn=======onClosed===");
            },
            nextOpened: function() {
              console.log("showLoginSignBtn=======nextOpened===");
            },
            nextClose: function() {
              console.log("showLoginSignBtn=======nextClose===");
            }
          }
        });
        RedCenter_1.default.getInstance().openRedpackFirst({
          callBack: {
            onOpened: function() {
              console.log("openFirstRd==========");
            },
            onClosed: function() {
              console.log("closefirst==========");
            }
          },
          ishaveVideo: false,
          redpackType: "1",
          activeName: "\u65b0\u624b\u7ea2\u5305",
          isOpenSecondPage: false
        });
      };
      test.prototype.openWithdrawSuccess = function() {
        RedUtil_1.RedUtil.openWithdrawSuccess(.2);
      };
      test.prototype.openRedpackFirst = function() {
        RedCenter_1.default.getInstance().openRedpackFirst({
          callBack: {
            onOpened: function() {
              console.log("openFirstRd==========");
            },
            onClosed: function() {
              console.log("closefirst==========");
            },
            redpackVideoClose: function() {
              console.log("redpackVideoClose=====1=========");
            },
            redPackGetSuccess: function() {
              console.log("closefirst=====redPackGetSuccess=====");
            }
          },
          ishaveVideo: true,
          redpackType: "3",
          activeName: "ijnijiguiug",
          isOpenSecondPage: false,
          openEventPotnum: 4,
          passNum: 1
        });
      };
      test.prototype.openRedpackFirst2 = function() {
        RedCenter_1.default.getInstance().openRedpackFirst({
          callBack: {
            onOpened: function() {
              console.log("openFirstRd=====2=====");
            },
            onClosed: function() {
              console.log("closefirst===2=======");
            },
            redPackGetSuccess: function() {
              console.log("openFirstRd==2===redPackGetSuccess=====");
            }
          },
          ishaveVideo: true,
          redpackType: "4",
          activeName: "ijnijiguiug",
          isOpenSecondPage: true,
          openEventPotnum: 0
        });
      };
      test.prototype.openwithdraw = function() {
        console.log("openreddddddddddddddddddddd");
        RedCenter_1.default.getInstance().openwithdrawPage(cc.director.getScene(), {
          callBack: {
            onOpened: function() {
              console.log("openwithdraw==========");
            },
            onClosed: function() {
              console.log("openwithdraw====close======");
            }
          }
        });
      };
      test.prototype.openTurnPage = function() {
        RedCenter_1.default.getInstance().openturnPage(cc.director.getScene(), {
          callBack: {
            onOpened: function() {
              console.log("openTurnPage==========");
            },
            onClosed: function() {
              console.log("openTurnPage====close======");
            }
          }
        });
      };
      test.prototype.openmainProfit = function() {
        RedCenter_1.default.getInstance().openmainProfit(cc.director.getScene(), {
          callBack: {
            onOpened: function() {
              console.log("openTurnPage==========");
            },
            onClosed: function() {
              console.log("openTurnPage====close======");
            }
          }
        });
      };
      test.prototype.openAwardtip = function() {
        RedCenter_1.default.getInstance().openAwardTip({
          Icon: "alySDK/alyUI/fenhong",
          Text: "\u83b7\u5f97\u91d1\u5e01X3"
        });
      };
      __decorate([ property(cc.Button) ], test.prototype, "redpack", void 0);
      __decorate([ property(cc.Button) ], test.prototype, "withdraw", void 0);
      __decorate([ property(cc.Button) ], test.prototype, "turnBtn", void 0);
      __decorate([ property(cc.Button) ], test.prototype, "mainprofit", void 0);
      test = __decorate([ ccclass ], test);
      return test;
    }(cc.Component);
    exports.default = test;
    cc._RF.pop();
  }, {
    "./RedCenter": "RedCenter",
    "./RedUtil": "RedUtil"
  } ],
  tipsShow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "240930/J3BOy54e3TyjdeJu", "tipsShow");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var tips = function(_super) {
      __extends(tips, _super);
      function tips() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.text = null;
        return _this;
      }
      tips.prototype.onLoad = function() {
        this.text || (this.text = this.node.getChildByName("text").getComponent(cc.Label));
      };
      tips.prototype.start = function() {};
      tips.prototype.runMove = function() {
        var _this = this;
        cc.tween(this.node).to(.5, {
          y: 680
        }).to(.5, {
          y: 795
        }).call(function() {
          _this.destroySelf();
        }).start();
      };
      tips.prototype.destroySelf = function() {
        this.node.destroy();
      };
      tips.prototype.getParams = function(tipStr) {
        if ("" != tipStr) {
          this.text && (this.text.string = tipStr);
          this.runMove();
        }
      };
      __decorate([ property(cc.Label) ], tips.prototype, "text", void 0);
      tips = __decorate([ ccclass ], tips);
      return tips;
    }(cc.Component);
    exports.default = tips;
    cc._RF.pop();
  }, {} ],
  turnPage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ecd2bvEtTtPYJgvjZ+Q13kk", "turnPage");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedUtil_1 = require("../RedUtil");
    var awardtip_1 = require("./awardtip");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.v_shengyu = null;
        _this.v_running = null;
        _this.v_start = null;
        _this.v_closeBtn = null;
        _this.content = null;
        _this.v_propTitle = null;
        _this.v_propIcon = null;
        _this._callBack = null;
        _this.freeNum = 1;
        _this.stateIndex = 1;
        _this.videoAd = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        console.log("onLoad===============");
        this.content = this.node.getChildByName("content");
        if (!this.v_shengyu) {
          var topborder = this.content.getChildByName("topborder");
          this.v_shengyu = topborder.getChildByName("v_shengyu").getComponent(cc.Label);
        }
        this.v_running || (this.v_running = this.content.getChildByName("v_running"));
        this.v_propIcon || (this.v_propIcon = this.v_running.getChildByName("v_propIcon").getComponent(cc.Sprite));
        this.v_propTitle || (this.v_propTitle = this.v_running.getChildByName("v_propTitle").getComponent(cc.Sprite));
        this.v_start || (this.v_start = this.content.getChildByName("v_start"));
        this.v_closeBtn || (this.v_closeBtn = this.content.getChildByName("v_closeBtn"));
      };
      NewClass.prototype.start = function() {
        console.log("start===============");
        RedUtil_1.RedUtil.setScale(this.node);
        this.content.setPosition(0, 0);
        this.v_closeBtn.on("click", this.destroySelf, this);
        this.v_start.on("click", this.luckBtnClieck, this);
        var freenum = cc.sys.localStorage.getItem("todayFreeNum");
        var date = new Date();
        var dateStr = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        if (freenum) {
          var yesArr = freenum.split(";");
          yesArr instanceof Array && yesArr.length > 1 ? yesArr[0] == dateStr ? this.freeNum = Number(yesArr[1]) : cc.sys.localStorage.setItem("todayFreeNum", dateStr + ";" + this.freeNum) : console.log("freenum--error");
        } else cc.sys.localStorage.setItem("todayFreeNum", dateStr + ";" + this.freeNum);
        this.changeBtn(this.freeNum > 0 ? 1 : 2);
        RedUtil_1.RedUtil.eventDispatcher.on("videoClieck", this.getLuckyClick, this);
        this._callBack && this._callBack.luckyComplete && RedUtil_1.RedUtil.eventDispatcher.on(RedUtil_1.RedUtil.callBackName.luckyComplete, this._callBack.luckyComplete, this);
        RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(3e3, 0);
      };
      NewClass.prototype.onDisable = function() {
        RedUtil_1.RedUtil.eventDispatcher.off("videoClieck");
        RedUtil_1.RedUtil.eventDispatcher.off(RedUtil_1.RedUtil.callBackName.luckyComplete);
        RedUtil_1.RedUtil._turnPage = null;
      };
      NewClass.prototype.destroySelf = function() {
        RedUtil_1.RedUtil._mainprofit || this._callBack && this._callBack.nextClose && this._callBack.nextClose();
        this.node.destroy();
      };
      NewClass.prototype.getParams = function(parmp) {
        if (parmp) {
          if (parmp.callBack) {
            this._callBack = parmp.callBack;
            RedUtil_1.RedUtil._mainprofit || this._callBack && this._callBack.nextOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.nextOpened);
          }
          parmp.starNum && (this.v_shengyu.string = "\u4eca\u65e5\u5269\u4f59\u5206\u7ea2\u661f" + parmp.starNum + "\u9897");
          if (parmp.propTitle && "" != parmp.propTitle) {
            var v_propTitle_1 = this.v_propTitle;
            cc.loader.loadRes(parmp.propTitle, cc.SpriteFrame, function(err, spriteframe) {
              v_propTitle_1.spriteFrame = spriteframe;
            });
          }
          if (parmp.propIcon && "" != parmp.propIcon) {
            var v_propIcon_1 = this.v_propIcon;
            cc.loader.loadRes(parmp.propIcon, cc.SpriteFrame, function(err, spriteframe) {
              v_propIcon_1.spriteFrame = spriteframe;
            });
          }
        }
      };
      NewClass.prototype.luckBtnClieck = function() {
        if (1 == this.stateIndex) this.getLuckyClick(); else {
          RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(3001, 0);
          this.openVideo();
        }
      };
      NewClass.prototype.getLuckyClick = function() {
        console.log("getLuckyClick===========");
        RedUtil_1.RedUtil._RedquestState = 2;
        RedUtil_1.RedUtil.openQuestRedPack("", "2", false, null, 0);
      };
      NewClass.prototype.changeBtn = function(index) {
        var skinsrc = "alySDK/alyUI/xin-2";
        2 == index && (skinsrc = "alySDK/alyUI/xin-1");
        this.stateIndex = index;
        var v_start = this.v_start;
        cc.loader.loadRes(skinsrc, cc.SpriteFrame, function(err, spriteframe) {
          v_start.getComponent(cc.Sprite).spriteFrame = spriteframe;
        });
      };
      NewClass.prototype.startRun = function(index) {
        var _this = this;
        console.log("start--------");
        if (this.freeNum > 0) {
          this.freeNum -= 1;
          var date = new Date();
          var dateStr = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
          cc.sys.localStorage.setItem("todayFreeNum", dateStr + ";" + this.freeNum);
          this.changeBtn(2);
        }
        var angel = 120;
        if (1 == index) angel = 60; else if (0 == index) {
          var date = new Date();
          var dateStr = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
          var todayStar = cc.sys.localStorage.getItem("todayRedNum");
          var xianshinum = 0;
          if (todayStar) {
            var todayArr = todayStar.split(";");
            todayArr instanceof Array && todayArr.length > 1 && todayArr[0] == dateStr && (xianshinum = Number(todayArr[1]));
          }
          xianshinum += 1;
          cc.sys.localStorage.setItem("todayRedNum", dateStr + ";" + xianshinum.toString());
        }
        this.v_running.rotation = 0;
        cc.tween(this.v_running).to(3.2, {
          angle: -(1440 + angel)
        }).call(function() {
          console.log("rotatioon");
          0 == index && _this.openAwardTip();
          RedUtil_1.RedUtil.eventgetAward(index);
        }).start();
      };
      NewClass.prototype.openVideo = function() {
        var _this = this;
        console.log("openVideo============");
        var aunId = "";
        var qq = window["qq"];
        if (!qq) return;
        if (qq.aly.aUnID) {
          aunId = qq.aly.aUnID;
          console.log("qq.aly.aUnID--------" + qq.aly.aUnID);
        }
        this.videoAd = qq.createRewardedVideoAd({
          adUnitId: aunId
        });
        this.videoAd.onError(function(errm) {
          console.log("emerrrrrrr==\u8f6c\u76d8===" + JSON.stringify(errm));
        });
        this.videoAd.onLoad(function(res) {
          console.log("onload=====" + res);
        });
        this.videoAd.show().catch(function(err) {
          _this.videoAd.load().then(function() {
            console.log("\u8f6c\u76d8\u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
            _this.videoAd.show().then(function() {
              console.log("\u8f6c\u76d8\u5e7f\u544a\u663e\u793a\u6210\u529f");
            }).catch(function(err) {
              console.log("\u8f6c\u76d8\u5e7f\u544a\u663e\u793a\u5931\u8d25");
            });
          }).catch(function(err) {
            console.log("\u8f6c\u76d8\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25");
          });
        });
        this.videoAd.onClose(function(statue) {
          if (statue && statue.isEnded || void 0 === statue) {
            _this.videoAd.offClose();
            console.log("\u8f6c\u76d8\u5e7f\u544a\u5173\u95ed\u6210\u529f");
            RedUtil_1.RedUtil.eventDispatcher.emit("videoClieck");
            RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(3002, 0);
          } else {
            console.log("elseoffffffcelseccc22222ccc");
            RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(3003, 0);
            _this.videoAd.offClose();
          }
        });
      };
      NewClass.prototype.openAwardTip = function() {
        var parentNode = cc.director.getScene();
        var parmp = {
          Icon: "",
          Text: ""
        };
        cc.loader.loadRes("alySDK/alyprofabs/awardtip", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            parentNode.addChild(newNode);
            newNode.setPosition(parentNode.width / 2, parentNode.height / 2);
            if (parmp) {
              var cla = newNode.getComponent(awardtip_1.default);
              cla.getParams(parmp);
            }
          }
        });
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "v_shengyu", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "v_running", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "v_start", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "v_closeBtn", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "content", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "v_propTitle", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "v_propIcon", void 0);
      __decorate([ property ], NewClass.prototype, "_callBack", void 0);
      __decorate([ property ], NewClass.prototype, "freeNum", void 0);
      __decorate([ property ], NewClass.prototype, "stateIndex", void 0);
      __decorate([ property ], NewClass.prototype, "videoAd", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil",
    "./awardtip": "awardtip"
  } ],
  videoRedPack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f56c1/1WRA16vlvdwvzYyC", "videoRedPack");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RedUtil_1 = require("../RedUtil");
    var videoRedPack = function(_super) {
      __extends(videoRedPack, _super);
      function videoRedPack() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._callBack = null;
        _this.clieckBtn = null;
        _this.closeBtn = null;
        _this.redBg = null;
        _this.videoNum = null;
        _this.videoProgro = null;
        _this.videoAd = null;
        _this._isVideoFinshState = 0;
        _this._currentlength = 0;
        _this._alllength = 10;
        _this._messageCode = null;
        _this._goCom = 0;
        _this._canget = 1;
        _this._isfinsh = 2;
        _this._isSend = false;
        _this._coolTime = 0;
        return _this;
      }
      videoRedPack.prototype.onLoad = function() {
        this.redBg = this.node.getChildByName("redBg");
        this.clieckBtn = this.redBg.getChildByName("clieckBtn").getComponent(cc.Button);
        this.closeBtn = this.redBg.getChildByName("closeBtn").getComponent(cc.Button);
        this.videoNum = this.redBg.getChildByName("videoNum").getComponent(cc.Label);
        this.videoProgro = this.redBg.getChildByName("videoProgro").getComponent(cc.ProgressBar);
      };
      videoRedPack.prototype.start = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        this.redBg.setPosition(0, 0);
        RedUtil_1.RedUtil.setAction(this.redBg, true, null);
        this.closeBtn.node.on("click", this.clickClose, this);
        this.clieckBtn.node.on("click", this.clickBtnClick, this);
        this.videoProgro.progress = 0;
        RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(5005, 555);
      };
      videoRedPack.prototype.clickClose = function() {
        var self = this;
        RedUtil_1.RedUtil.setAction(this.redBg, false, function() {
          self.setCall();
        });
      };
      videoRedPack.prototype.setCall = function() {
        this._callBack && this._callBack.nextClose && this._callBack.nextClose();
        RedUtil_1.RedUtil._videoRedPack = null;
        this.node.destroy();
      };
      videoRedPack.prototype.init = function() {
        if (this._messageCode && this._messageCode.Count > 0) {
          this.videoProgro.progress = this._messageCode.Count / this._alllength;
          this._isVideoFinshState = this._messageCode.State;
          this._currentlength = this._messageCode.Count;
          this.videoNum.string = "\u518d\u89c2\u770b" + (this._alllength - this._messageCode.Count) + "\u6b21\u5e7f\u544a\u5373\u53ef\u63d0\u73b0";
        }
      };
      videoRedPack.prototype.clickBtnClick = function() {
        if (this._isVideoFinshState == this._isfinsh) RedUtil_1.RedUtil.opeTips("\u6bcf\u65e5\u53ea\u80fd\u63d0\u73b0\u4e00\u6b21\uff01"); else if (this._isVideoFinshState == this._canget) {
          if (this._coolTime > 0) {
            RedUtil_1.RedUtil.opeTips("\u64cd\u4f5c\u592a\u9891\u7e41\u4e86");
            return;
          }
          this._coolTime = 2;
          this.requestWithdraw();
        } else this.openVidio();
      };
      videoRedPack.prototype.requestWithdraw = function() {
        var _this = this;
        RedUtil_1.RedUtil.requestVideoRedWithdraw();
        this.clieckBtn.node.angle = 0;
        cc.tween(this.clieckBtn.node).to(.6, {
          angle: -360
        }).call(function() {
          console.log("rotatioon");
          if (RedUtil_1.RedUtil._videoWithdrawMoney > -1) {
            RedUtil_1.RedUtil.openWithdrawSuccess(RedUtil_1.RedUtil._videoWithdrawMoney / 100);
            RedUtil_1.RedUtil._videoWithdrawMoney = -1;
            _this._isSend = false;
            RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(5006, 555);
          } else _this._isSend = true;
        }).start();
      };
      videoRedPack.prototype.setChange = function() {
        if (RedUtil_1.RedUtil._videoWithdrawMoney > -1) {
          RedUtil_1.RedUtil.openWithdrawSuccess(RedUtil_1.RedUtil._videoWithdrawMoney / 100);
          RedUtil_1.RedUtil._videoWithdrawMoney = -1;
          this._isSend = false;
          RedUtil_1.RedUtil._iseventDot && RedUtil_1.RedUtil.extportData(5006, 555);
        }
      };
      videoRedPack.prototype.openVidio = function() {
        var _this = this;
        console.log("openVideo=============");
        var self = this;
        var aunId = "";
        var qq = window["qq"];
        if (!qq) {
          console.log("openVideo====qq======null===");
          return;
        }
        if (qq.aly.aUnID) {
          aunId = qq.aly.aUnID;
          console.log("qq.aly.aUnID--\u7ea2\u5305------" + qq.aly.aUnID);
        }
        this.videoAd = qq.createRewardedVideoAd({
          adUnitId: aunId
        });
        this.videoAd.onError(function(errm) {
          console.log("emerrrrrrr==\u63d0\u73b0\u7ea2\u5305===" + JSON.stringify(errm));
          RedUtil_1.RedUtil.opeTips("\u5e7f\u544a\u6ca1\u6709\u51c6\u5907\u597d\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5");
        });
        this.videoAd.onLoad(function(res) {
          console.log("onload===\u7ea2\u5305==" + res);
        });
        this.videoAd.show().catch(function(err) {
          _this.videoAd.load().then(function() {
            console.log("\u63d0\u73b0\u7ea2\u5305\u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
            _this.videoAd.show().then(function() {
              console.log("\u63d0\u73b0\u7ea2\u5305\u5e7f\u544a\u663e\u793a\u6210\u529f");
            }).catch(function(err) {
              console.log("\u63d0\u73b0\u7ea2\u5305\u5e7f\u544a\u663e\u793a\u5931\u8d25");
            });
          }).catch(function(err) {
            console.log("\u63d0\u73b0\u7ea2\u5305\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25");
          });
        });
        this.videoAd.onClose(function(statue) {
          if (statue && statue.isEnded || void 0 === statue) {
            self.videoAd.offClose();
            console.log("\u63d0\u73b0\u7ea2\u5305\u5e7f\u544a\u5173\u95ed\u6210\u529f==============");
            RedUtil_1.RedUtil.changeEveryTaskMessage(1e4, 1);
            if (self._currentlength < self._alllength) {
              self._currentlength += 1;
              self.videoProgro.progress = self._currentlength / self._alllength;
              self.videoNum.string = "\u518d\u89c2\u770b" + (self._alllength - self._currentlength) + "\u6b21\u5e7f\u544a\u5373\u53ef\u63d0\u73b0";
              self._currentlength >= self._alllength && (self._isVideoFinshState = self._canget);
            }
          } else self.videoAd.offClose();
        });
      };
      videoRedPack.prototype.withdrawFinsh = function() {
        this._isVideoFinshState = this._isfinsh;
      };
      videoRedPack.prototype.getParams = function(parmp) {
        var _this = this;
        if (parmp) {
          if (parmp.callBack) {
            this._callBack = parmp.callBack;
            this._callBack && this._callBack.nextOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.nextOpened);
          }
          parmp.messageCode && (this._messageCode = parmp.messageCode);
          setTimeout(function() {
            _this.init();
          }, 300);
        }
      };
      videoRedPack.prototype.update = function(dt) {
        this._isSend && this.setChange();
        this._coolTime > 0 && (this._coolTime -= dt);
      };
      __decorate([ property ], videoRedPack.prototype, "_callBack", void 0);
      __decorate([ property(cc.Button) ], videoRedPack.prototype, "clieckBtn", void 0);
      __decorate([ property(cc.Button) ], videoRedPack.prototype, "closeBtn", void 0);
      __decorate([ property(cc.Node) ], videoRedPack.prototype, "redBg", void 0);
      __decorate([ property(cc.Label) ], videoRedPack.prototype, "videoNum", void 0);
      __decorate([ property(cc.ProgressBar) ], videoRedPack.prototype, "videoProgro", void 0);
      __decorate([ property ], videoRedPack.prototype, "videoAd", void 0);
      __decorate([ property ], videoRedPack.prototype, "_isVideoFinshState", void 0);
      __decorate([ property ], videoRedPack.prototype, "_currentlength", void 0);
      __decorate([ property ], videoRedPack.prototype, "_alllength", void 0);
      __decorate([ property ], videoRedPack.prototype, "_messageCode", void 0);
      __decorate([ property ], videoRedPack.prototype, "_goCom", void 0);
      __decorate([ property ], videoRedPack.prototype, "_canget", void 0);
      __decorate([ property ], videoRedPack.prototype, "_isfinsh", void 0);
      __decorate([ property ], videoRedPack.prototype, "_isSend", void 0);
      __decorate([ property ], videoRedPack.prototype, "_coolTime", void 0);
      videoRedPack = __decorate([ ccclass ], videoRedPack);
      return videoRedPack;
    }(cc.Component);
    exports.default = videoRedPack;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil"
  } ],
  videoWithdrawBtn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a896ybitRNnrY/DSnpjJCq", "videoWithdrawBtn");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RedUtil_1 = require("../RedUtil");
    var videoRedPack_1 = require("./videoRedPack");
    var videoWithdrawBtn = function(_super) {
      __extends(videoWithdrawBtn, _super);
      function videoWithdrawBtn() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this._callBack = null;
        _this._isColdTime = 0;
        return _this;
      }
      videoWithdrawBtn.prototype.start = function() {
        this.node.on("click", this.selfClick, this);
      };
      videoWithdrawBtn.prototype.destroySelf = function() {
        this._callBack && this._callBack.onClosed && this._callBack.onClosed();
        this.node.destroy();
      };
      videoWithdrawBtn.prototype.selfClick = function() {
        if (this._isColdTime <= 0) {
          RedUtil_1.RedUtil.requestVideoRedCount();
          this._isColdTime = 2;
        }
      };
      videoWithdrawBtn.prototype.openVideoRedPack = function(mess) {
        var parmp = {
          callBack: this._callBack,
          messageCode: mess
        };
        RedUtil_1.RedUtil.LoadResource("alySDK/alyprofabs/videoRedPack", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          var parentNode = cc.director.getScene();
          console.log("openEveryTask===============");
          if (newNode) {
            RedUtil_1.RedUtil._videoRedPack = newNode;
            parentNode.addChild(newNode);
            if (parmp) {
              var cla = newNode.getComponent(videoRedPack_1.default);
              cla.getParams(parmp);
            }
          }
        });
      };
      videoWithdrawBtn.prototype.getParams = function(parmp) {
        if (parmp && parmp.callBack) {
          this._callBack = parmp.callBack;
          this._callBack && this._callBack.onOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.onOpened);
        }
      };
      videoWithdrawBtn.prototype.update = function(dt) {
        this._isColdTime > 0 && (this._isColdTime -= dt);
      };
      __decorate([ property(cc.Label) ], videoWithdrawBtn.prototype, "label", void 0);
      __decorate([ property ], videoWithdrawBtn.prototype, "_callBack", void 0);
      __decorate([ property ], videoWithdrawBtn.prototype, "_isColdTime", void 0);
      videoWithdrawBtn = __decorate([ ccclass ], videoWithdrawBtn);
      return videoWithdrawBtn;
    }(cc.Component);
    exports.default = videoWithdrawBtn;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil",
    "./videoRedPack": "videoRedPack"
  } ],
  withdrawBtn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5031euDJ+JGL4LzLZbasSyN", "withdrawBtn");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var withdrawalPage_1 = require("./withdrawalPage");
    var RedUtil_1 = require("../RedUtil");
    var withdrawBtn = function(_super) {
      __extends(withdrawBtn, _super);
      function withdrawBtn() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.v_money = null;
        _this.clickBtn = null;
        _this._callBack = null;
        return _this;
      }
      withdrawBtn.prototype.onLoad = function() {
        this.v_money = this.node.getChildByName("v_money").getComponent(cc.Label);
      };
      withdrawBtn.prototype.onEnable = function() {
        RedUtil_1.RedUtil.eventDispatcher.on("openWithdrawPage", this.openWithdrawPage, this.node);
      };
      withdrawBtn.prototype.start = function() {
        this.node.on("click", this.requestCount, this);
        var moneySrc = "0";
        var money = cc.sys.localStorage.getItem("MoneyNum");
        if (money) {
          moneySrc = (Number(money) / 100).toString();
          console.log("read current money is==========================" + money);
        }
        this.v_money.string = moneySrc + "\u5143";
        setTimeout(function() {
          RedUtil_1.RedUtil.requestMoney();
        }, 500);
      };
      withdrawBtn.prototype.onDisable = function() {
        RedUtil_1.RedUtil._withdrawBtn = null;
      };
      withdrawBtn.prototype.btnactionRun = function() {
        cc.tween(this.clickBtn.node).to(.6, {
          scaleX: 1.3,
          scaleY: 1.3
        }).to(.6, {
          scaleX: 1,
          scaleY: 1
        }).start();
      };
      withdrawBtn.prototype.requestCount = function() {
        RedUtil_1.RedUtil.requestCount(this._callBack);
      };
      withdrawBtn.prototype.openWithdrawPage = function(cash_out, callBack) {
        var parentNode = cc.director.getScene();
        var parmp = {
          callBack: callBack,
          cash_out: cash_out
        };
        RedUtil_1.RedUtil.LoadResource("alySDK/alyprofabs/withdraw", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          if (newNode) {
            RedUtil_1.RedUtil.withdrawPage = newNode;
            parentNode.addChild(newNode);
            newNode.setPosition(parentNode.width / 2, parentNode.height / 2);
            if (parmp) {
              var cla = newNode.getComponent(withdrawalPage_1.default);
              cla.getParams(parmp);
            }
          }
        });
      };
      withdrawBtn.prototype.destroySelf = function() {
        this._callBack && this._callBack.onClosed && this._callBack.onClosed();
        this.node.destroy();
      };
      withdrawBtn.prototype.getParams = function(parmp) {
        if (parmp && parmp.callBack) {
          this._callBack = parmp.callBack;
          this._callBack && this._callBack.onOpened && RedUtil_1.RedUtil.callBackRun(this.node, this._callBack.onOpened);
        }
      };
      withdrawBtn.prototype.changeMoney = function(money) {
        this.v_money.string = money.toString() + "\u5143";
      };
      __decorate([ property(cc.Label) ], withdrawBtn.prototype, "v_money", void 0);
      __decorate([ property(cc.Button) ], withdrawBtn.prototype, "clickBtn", void 0);
      __decorate([ property ], withdrawBtn.prototype, "_callBack", void 0);
      withdrawBtn = __decorate([ ccclass ], withdrawBtn);
      return withdrawBtn;
    }(cc.Component);
    exports.default = withdrawBtn;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil",
    "./withdrawalPage": "withdrawalPage"
  } ],
  withdrawIn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b698Mz4StJ0qtbH93PFmEz", "withdrawIn");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedUtil_1 = require("../RedUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var withdrawIn = function(_super) {
      __extends(withdrawIn, _super);
      function withdrawIn() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        return _this;
      }
      withdrawIn.prototype.onLoad = function() {
        if (!this.closeBtn) {
          var background = this.node.getChildByName("background");
          this.closeBtn = background.getChildByName("closeBtn");
        }
      };
      withdrawIn.prototype.start = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        var background = this.node.getChildByName("background");
        background.width = this.node.width;
        background.height = this.node.height;
        background.setPosition(.5 * -this.node.width, .5 * this.node.height);
        console.log("this.node.width*0.5============" + .5 * this.node.width);
        console.log("this.node.height*0.5============" + .5 * this.node.height);
        this.closeBtn && this.closeBtn.on("click", this.destroySelf, this);
      };
      withdrawIn.prototype.destroySelf = function() {
        this.node.destroy();
      };
      __decorate([ property(cc.Node) ], withdrawIn.prototype, "closeBtn", void 0);
      withdrawIn = __decorate([ ccclass ], withdrawIn);
      return withdrawIn;
    }(cc.Component);
    exports.default = withdrawIn;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil"
  } ],
  withdrawSuccess: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "799d2dI0FpI35UHTFyrRVz4", "withdrawSuccess");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RedUtil_1 = require("../RedUtil");
    var withdrawSuccess = function(_super) {
      __extends(withdrawSuccess, _super);
      function withdrawSuccess() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ensureBtn = null;
        _this.getMoney = null;
        _this.redBg = null;
        return _this;
      }
      withdrawSuccess.prototype.onLoad = function() {
        this.redBg = this.node.getChildByName("redBg");
        this.ensureBtn = this.redBg.getChildByName("ensureBtn").getComponent(cc.Button);
        this.getMoney = this.redBg.getChildByName("getMoney").getComponent(cc.Label);
      };
      withdrawSuccess.prototype.start = function() {
        RedUtil_1.RedUtil.setScale(this.node);
        this.redBg.setPosition(0, 0);
        this.ensureBtn.node.on("click", this.clickClose, this);
        RedUtil_1.RedUtil.setAction(this.redBg, true, null);
      };
      withdrawSuccess.prototype.clickClose = function() {
        var node = this.node;
        RedUtil_1.RedUtil.setAction(this.redBg, false, function() {
          node.destroy();
        });
      };
      withdrawSuccess.prototype.init = function(money) {
        this.getMoney.string = money + "\u5143";
      };
      withdrawSuccess.prototype.getParams = function(parmp) {
        parmp && parmp.Money && this.init(parmp.Money);
      };
      __decorate([ property(cc.Button) ], withdrawSuccess.prototype, "ensureBtn", void 0);
      __decorate([ property(cc.Label) ], withdrawSuccess.prototype, "getMoney", void 0);
      __decorate([ property(cc.Node) ], withdrawSuccess.prototype, "redBg", void 0);
      withdrawSuccess = __decorate([ ccclass ], withdrawSuccess);
      return withdrawSuccess;
    }(cc.Component);
    exports.default = withdrawSuccess;
    cc._RF.pop();
  }, {
    "../RedUtil": "RedUtil"
  } ],
  withdrawalPage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd6aeCJsedEV6utfHL4CRxk", "withdrawalPage");
    cc._RF.pop();
  }, {} ],
  wxApiJs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df0291yERBHoLMQfTpckwf0", "wxApiJs");
    "use strict";
    var wxApiJs = {
      bannerAd: null,
      showBannerTime: 0,
      getWx: function getWx() {
        if (cc.sys.platform != cc.sys.WECHAT_GAME) return null;
        return wx;
      },
      postMessage: function postMessage(_type) {
        console.log("==pai=hb2");
        var openDataContext = wx.getOpenDataContext();
        openDataContext.postMessage({
          type: _type
        });
      },
      updataScore: function updataScore(name, score) {
        wx.setUserCloudStorage({
          KVDataList: [ {
            key: name,
            value: "" + score
          } ],
          success: function success(res) {
            console.log("setUserCloudStorage", "success", res);
          },
          fail: function fail(res) {
            console.log("setUserCloudStorage", "fail");
          },
          complete: function complete(res) {
            console.log("setUserCloudStorage", "ok");
          }
        });
      },
      shareAppMessage: function shareAppMessage(_title, _image, _queryData) {
        wx.shareAppMessage({
          title: _title,
          imageUrl: _image,
          query: _queryData,
          success: function success(res) {},
          fail: function fail() {}
        });
      },
      onShow: function onShow(callBack) {
        wx.onShow(function(res) {
          console.log("\u5c0f\u6e38\u620f\u56de\u5230\u524d\u53f0");
          callBack(res);
        });
      },
      onHide: function onHide(callBack) {
        wx.onHide(function(res) {
          console.log("\u5c0f\u6e38\u620f\u56de\u5230\u540e\u53f0");
          callBack(res);
        });
      },
      createVideo: function createVideo(videoId) {
        var videoAdv = wx.createRewardedVideoAd({
          adUnitId: videoId
        });
        return videoAdv;
      },
      createBannerAd: function createBannerAd(_adUnitId, _left, _top, _width, _height) {
        var bannerAd = wx.createBannerAd({
          adUnitId: _adUnitId,
          style: {
            left: _left,
            top: _top,
            width: _width,
            height: _height
          }
        });
        return bannerAd;
      },
      wxShowBanner: function wxShowBanner(isShow, _adUnitId) {
        if (!this.bannerAd) {
          var screenWidth = wx.getSystemInfoSync().screenWidth;
          this.showBannerTime = Date.now();
          var bannerAd = wx.createBannerAd({
            adUnitId: _adUnitId,
            style: {
              left: 0,
              top: 0,
              width: screenWidth,
              height: 200
            }
          });
          bannerAd.onError(function(err) {
            console.log(err);
          });
          bannerAd.onResize(function(res) {
            console.log(res.width, res.height);
            console.log(bannerAd.style.realWidth, bannerAd.style.realHeight);
            var screenHeight = wx.getSystemInfoSync().screenHeight;
            bannerAd.style.top = screenHeight - bannerAd.style.realHeight;
          });
          this.bannerAd = bannerAd;
          console.log("create banner");
        }
        isShow ? this.bannerAd.show() : this.bannerAd.hide();
      },
      navigateToMiniProgram: function navigateToMiniProgram(_appid, name, _path, _type) {}
    };
    module.exports = wxApiJs;
    cc._RF.pop();
  }, {} ],
  zhuanpan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "962a0b6XxpLCowsbX81Thfp", "zhuanpan");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../../core/Manager/ViewManager");
    var BaseView_1 = require("../../core/View/BaseView");
    var FightManger_1 = require("../fight/FightManger");
    var GameJSB_1 = require("../GameJSB");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var zhuanpan = function(_super) {
      __extends(zhuanpan, _super);
      function zhuanpan() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.luckDrawNum = null;
        _this.flashLamp = null;
        _this.ViewFight = FightManger_1.default.getInstance().ViewFight;
        _this.socrk = true;
        _this.angleStr = "";
        _this.luckRewardType = null;
        _this.gettablenum = null;
        _this.num = null;
        return _this;
      }
      zhuanpan.prototype.onLoad = function() {
        this.num = this.ViewFight.zhuanpanNum || 30;
        this.gettablenum = window["killStar"]["configs"].userfirst;
        FightManger_1.default.getInstance().Status = 1;
        window["initAngle"] = this.initAngle.bind(this);
        this.luckDrawNum.string = this.ViewFight.zhuanpanNum + "";
      };
      zhuanpan.prototype.start = function() {
        this.luckRoutleLight();
      };
      zhuanpan.prototype.update = function(dt) {};
      zhuanpan.prototype.luckRoutleLight = function() {
        var light = cc.find("bg/\u5149\u675f", this.node);
        cc.tween(light).repeatForever(cc.tween().to(3.6, {
          angle: 360
        }).call(function() {
          return light.angle = 0;
        })).start();
        this.lightLamp();
      };
      zhuanpan.prototype.initAngle = function(angle) {
        this.node.getChildByName("roulette").angle = 0;
        this.targetAngle = angle;
      };
      zhuanpan.prototype.buildAngle = function(str) {
        switch (str) {
         case "\u5c11\u91cf\u7ea2\u5305":
          return -30 + Math.round(60 * Math.random());

         case "1\u5143\u63d0\u73b0":
          return 30 + Math.round(60 * Math.random());

         case "\u4e2d\u91cf\u7ea2\u5305":
          return 90 + Math.round(60 * Math.random());

         case "3\u5143\u63d0\u73b0":
          return 150 + Math.round(60 * Math.random());

         case "\u5927\u91cf\u7ea2\u5305":
          return 210 + Math.round(60 * Math.random());

         case "0.3\u5143\u63d0\u73b0":
          return 270 + Math.round(60 * Math.random());
        }
      };
      zhuanpan.prototype.clickBtn = function() {
        1 === this.gettablenum && this.clickEvents();
        this.num > 0 && GameJSB_1.GameJSB.getAndroidShowRv("\u5e78\u8fd0\u8f6c\u76d8\u62bd\u5956");
      };
      zhuanpan.prototype.clickEvents = function() {
        cc.find("btn", this.node).active = false;
        this.num = this.num - 1;
        this.luckDrawNum.string = this.num + "";
        this.getLuckRoulette();
      };
      zhuanpan.prototype.doing1 = function(node, time, angle) {
        var _this = this;
        console.log(this.targetAngle);
        cc.tween(node).to(time, {
          angle: angle
        }, {
          easing: function(t) {
            return 8 * t * t;
          }
        }).call(function() {
          node.angle = node.angle % 360;
          _this.doning3(node, 360 * time / angle / 16);
        }).start();
      };
      zhuanpan.prototype.doning3 = function(node, t) {
        var _this = this;
        var a = 1, b = 2 * a;
        var i = 4;
        var angle = 360 * i + this.targetAngle;
        var time = t * b * angle / 360;
        cc.tween(node).to(time / a, {
          angle: angle / a
        }, {
          easing: function(t) {
            return -a * t * t + b * t;
          }
        }).call(function() {
          cc.find("btn", _this.node).active = true;
          if (1 == _this.luckRewardType || 1 == _this.ViewFight.luckRewardType) {
            FightManger_1.default.getInstance().ViewFight.hongbaoType = "\u5e78\u8fd0\u8f6c\u76d8";
            ViewManager_1.default.getInstance().ShowView("HongBaoPopup");
          } else 2 != _this.luckRewardType && 2 != _this.ViewFight.luckRewardType || ViewManager_1.default.getInstance().ShowView("TextPopUp");
        }).start();
      };
      zhuanpan.prototype.lightLamp = function() {
        var _this = this;
        this.schedule(function() {
          _this.flashLamp.getChildByName("2").active = !_this.flashLamp.getChildByName("2").active;
        }, .2);
      };
      zhuanpan.prototype.getLuckRoulette = function() {
        var param = {
          type: 3
        };
        GameJSB_1.GameJSB.getAndroidData("/userReward/rewards", JSON.stringify(param), "rewards");
        var param2 = {
          code: 0,
          cctype: "rewards",
          message: "\u6210\u529f\uff01",
          data: {
            saveintegral: 0,
            rewardname: "\u5e78\u8fd0\u8f6c\u76d8",
            yesdaysave: "474",
            todaysave: 81,
            plusintegral: 500,
            type: 3,
            prizetype: 1,
            lasetablenum: 25,
            userinteger: 19999,
            prizenum: "0.30"
          }
        };
      };
      zhuanpan.prototype.clickClose = function() {
        GameJSB_1.GameJSB.getAndroidData("/config/configs", "", "configs");
        ViewManager_1.default.getInstance().CloseView("zhuanpan");
      };
      __decorate([ property(cc.Label) ], zhuanpan.prototype, "luckDrawNum", void 0);
      __decorate([ property(cc.Node) ], zhuanpan.prototype, "flashLamp", void 0);
      zhuanpan = __decorate([ ccclass ], zhuanpan);
      return zhuanpan;
    }(BaseView_1.default);
    exports.default = zhuanpan;
    cc._RF.pop();
  }, {
    "../../core/Manager/ViewManager": "ViewManager",
    "../../core/View/BaseView": "BaseView",
    "../GameJSB": "GameJSB",
    "../fight/FightManger": "FightManger"
  } ]
}, {}, [ "RedCenter", "RedUtil", "moneyRecordPage", "redpackFirstWin", "redpackSecondCheckWin", "redpackSecondWin", "tipsShow", "withdrawBtn", "withdrawIn", "withdrawalPage", "everyTask", "everyWithdrawBtn", "litterRedPack", "loginSignBtn", "loginSignWin", "redRainBtn", "redpackRain", "videoRedPack", "videoWithdrawBtn", "withdrawSuccess", "test", "awardtip", "everyRedBtn", "intrducePage", "mainProfitPage", "myStarPage", "redStarBtn", "turnPage", "UserData", "UserLocalData", "ConfigAllGuanKa", "ConfigLevel", "AdaptarManager", "AudioManager", "ConfigManager", "EventManager", "GameDataManager", "ListenerManager", "LoaderManager", "ViewManager", "HttpCallBack", "Https", "SendDataHttp", "ViewScrollviewPool", "FunUtils", "JsFunc", "Md5Api", "BaseView", "ConstView", "coreInit", "NativeToJs", "PlatformManger", "QQPlaform", "ShareAdvType", "WXUtils", "wxApiJs", "ProtocolManger", "protobuf_all", "Const", "DebugHT", "GameJSB", "Guide", "GuideLabel", "HttpLoading", "ViewHttpDelay", "CheckBlock", "FightConst", "FightManger", "FightPoolManger", "HongBao", "InColor", "InColorEffect", "ItemBlock", "ParticleBlock", "ParticleFireworks", "ParticleRandom", "PassEffect", "Score", "ScoreEffect", "TargetCompleteEffect", "TextEffect", "VideoBox", "MainScene", "MainSceneManager", "EveryDayReward", "GoldPig", "HongBaoPopup", "KuaiSuHongBao", "LevelUpReward", "TextPopUp", "ViewFail", "ViewFight", "ViewGetProp", "ViewLogin", "ViewRegain", "gift", "hongBaoCunQianGuan", "hongbaoAni", "hongbaoIcon", "proppop", "signRedWin", "zhuanpan" ]);