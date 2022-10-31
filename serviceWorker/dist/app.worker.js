/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.appController = void 0;
const controller_decorator_1 = __webpack_require__(/*! ./decorator/controller.decorator */ "./src/decorator/controller.decorator.ts");
const handler_decorator_1 = __webpack_require__(/*! ./decorator/handler.decorator */ "./src/decorator/handler.decorator.ts");
let appController = class appController {
    constructor(appService) {
        this.appService = appService;
        this.getQuality = () => __webpack_require__.g.postMessage({ type: "getQuality" });
        this.getSettings = () => __webpack_require__.g.postMessage({ type: "getSettings" });
        this.pause = () => __webpack_require__.g.postMessage({ type: "pause" });
        this.play = () => __webpack_require__.g.postMessage({ type: "play" });
        this.pauseAndPlay = () => {
            this.pause();
            this.play();
        };
        this.getSettings();
        __webpack_require__.g.onEventMessage = (e) => {
            // var myMessage = new MessageEvent('worker', { data: 'hello' });
            // if (global.onmessage) global.onmessage(this, myMessage);
            switch (e.data.funcName) {
                case "Buffering": {
                    break;
                }
                case "onClientSinkPlaying": {
                    break;
                }
                case "onClientSinkUpdate": {
                    break;
                }
                case "pause": {
                    break;
                }
                case "play": {
                    break;
                }
                case "Ready": {
                    break;
                }
                case "Playing": {
                    break;
                }
                case "setQuality": {
                    break;
                }
                case "setSetting": {
                    break;
                }
                default: {
                    break;
                }
            }
        };
    }
    onChannel(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __webpack_require__.g.realFetch(url, options);
            if (!response.ok)
                return response;
            return yield response.text().then((text) => __awaiter(this, void 0, void 0, function* () {
                yield this.appService.onStartChannel(url, text);
                return new Response(text);
            }));
        });
    }
    onFetch(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield realFetch(url, options)
                .then((response) => __awaiter(this, void 0, void 0, function* () { return response.text(); }))
                .then((text) => __awaiter(this, void 0, void 0, function* () {
                yield this.appService.onfetch(url, text);
                const playlist = this.appService.currentStream().hls.getPlaylist();
                return new Response(playlist);
            }));
        });
    }
    onChannelPicture(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Response();
        });
    }
    setSettings(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.appService.settings = data.value;
        });
    }
    setQuality(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.appService.quality = data.value;
        });
    }
};
__decorate([
    (0, handler_decorator_1.Fetch)("usher.ttvnw.net/api/channel/hls/", "picture-by-picture")
], appController.prototype, "onChannel", null);
__decorate([
    (0, handler_decorator_1.Fetch)("hls.ttvnw.net/v1/playlist/")
], appController.prototype, "onFetch", null);
__decorate([
    (0, handler_decorator_1.Fetch)("picture-by-picture")
], appController.prototype, "onChannelPicture", null);
__decorate([
    (0, handler_decorator_1.Message)("setSettings")
], appController.prototype, "setSettings", null);
__decorate([
    (0, handler_decorator_1.Message)("setQuality")
], appController.prototype, "setQuality", null);
appController = __decorate([
    (0, controller_decorator_1.Controller)()
], appController);
exports.appController = appController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXBwLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQThEO0FBQzlELHFFQUErRDtBQUsvRCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBVXhCLFlBQTZCLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFUL0MsZUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUM5RCxnQkFBVyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNoRSxVQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELFNBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbEQsaUJBQVksR0FBRyxHQUFHLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBR0EsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUNqQyxpRUFBaUU7WUFFakUsMkRBQTJEO1lBRTNELFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLEtBQUssV0FBVyxDQUFDLENBQUM7b0JBQ2hCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxxQkFBcUIsQ0FBQyxDQUFD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

/***/ }),

/***/ "./src/app.worker.ts":
/*!***************************!*\
  !*** ./src/app.worker.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const player_1 = __webpack_require__(/*! ./player/player */ "./src/player/player.ts");
function app() {
    __webpack_require__.g.LogPrint = (x) => console.log("[Purple]: ", x);
    __webpack_require__.g.appController = new app_controller_1.appController(new player_1.Player());
    __webpack_require__.g.LogPrint("Script running");
}
exports["default"] = app;
__webpack_require__.g.realFetch = __webpack_require__.g.fetch;
__webpack_require__.g.fetch = (url, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof url === "string") {
        routerList.forEach((x) => {
            if (url.includes(x.match)) {
                if (!url.includes(x.ignore)) {
                    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () { return resolve(yield __webpack_require__.g.appController[x.propertyKey](url, options)); }));
                }
            }
        });
    }
    return __webpack_require__.g.realFetch.apply(this, [url, options]);
});
__webpack_require__.g.addEventListener("message", (e) => {
    __webpack_require__.g.messageList.forEach((x) => {
        if (e.data.funcName == x.match)
            __webpack_require__.g.appController[x.propertyKey](e.data);
    });
});
app();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLndvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAud29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQWlEO0FBQ2pELDRDQUF5QztBQVd6QyxTQUF3QixHQUFHO0lBQ3pCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNELE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSw4QkFBYSxDQUFDLElBQUksZUFBTSxFQUFFLENBQUMsQ0FBQztJQUV2RCxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUxELHNCQUtDO0FBRUQsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2hDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBTyxHQUFRLEVBQUUsT0FBWSxFQUFFLEVBQUU7SUFDOUMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDM0IsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDM0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFPLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxrREFBQyxPQUFBLE9BQU8sQ0FBQyxNQUFNLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBLEdBQUEsQ0FBQyxDQUFDO2lCQUNqSDthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDdEQsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUU7SUFDNUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUMvQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxLQUFLO1lBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLEVBQUUsQ0FBQyJ9

/***/ }),

/***/ "./src/decorator/controller.decorator.ts":
/*!***********************************************!*\
  !*** ./src/decorator/controller.decorator.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Controller = void 0;
const Controller = () => {
    return (target) => { };
};
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGVjb3JhdG9yL2NvbnRyb2xsZXIuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLE1BQU0sVUFBVSxHQUFHLEdBQW1CLEVBQUU7SUFDN0MsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUZXLFFBQUEsVUFBVSxjQUVyQiJ9

/***/ }),

/***/ "./src/decorator/handler.decorator.ts":
/*!********************************************!*\
  !*** ./src/decorator/handler.decorator.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Message = exports.Fetch = void 0;
const Fetch = (match, ignore = "") => {
    return (target, propertyKey) => {
        if (!__webpack_require__.g.routerList)
            __webpack_require__.g.routerList = [];
        __webpack_require__.g.routerList.push({ propertyKey: propertyKey, match: match, ignore: ignore });
    };
};
exports.Fetch = Fetch;
const Message = (match) => {
    return (target, propertyKey) => {
        if (!__webpack_require__.g.messageList)
            __webpack_require__.g.messageList = [];
        __webpack_require__.g.messageList.push({ propertyKey: propertyKey, match: match });
    };
};
exports.Message = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlci5kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGVjb3JhdG9yL2hhbmRsZXIuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBYSxFQUFFLFNBQWlCLEVBQUUsRUFBbUIsRUFBRTtJQUMzRSxPQUFPLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxFQUFFO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUFFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQXFCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMvRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFMVyxRQUFBLEtBQUssU0FLaEI7QUFFSyxNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQWEsRUFBbUIsRUFBRTtJQUN4RCxPQUFPLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxFQUFFO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztZQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQXFCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEYsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBTFcsUUFBQSxPQUFPLFdBS2xCIn0=

/***/ }),

/***/ "./src/hls/HLS.ts":
/*!************************!*\
  !*** ./src/hls/HLS.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HLS = void 0;
class HLS {
    constructor() {
        this._header = ["#EXTM3U", "#EXT-X-VERSION:3", "#EXT-X-TARGETDURATION:6", "#EXT-X-MEDIA-SEQUENCE:"];
        this._playlist = [];
        this._sequence = 0;
    }
    addPlaylistTest(playlist) { }
    addPlaylist(playlist, allowAds = false) {
        if (playlist === null) {
            return false;
        }
        let changed = false;
        const lines = playlist.toString().split(/[\r\n]/);
        this._header[4] = lines[4];
        this._header[5] = lines[5];
        //take all m3u9 content to the playlist and build a varible
        for (const i in lines) {
            if (lines[i].includes("#EXTINF")) {
                if (!allowAds) {
                    if (!lines[i].includes(",live")) {
                        continue;
                    }
                }
                //timestamp sequence
                const sequenceTimestamp = Math.floor(new Date(lines[parseInt(i) - 1].slice(lines[parseInt(i) - 1].length - 24, lines[parseInt(i) - 1].length)).getTime() / 1000);
                //select all sequence that no exist
                const r = this._playlist.filter((x) => {
                    return x.timestamp >= sequenceTimestamp;
                });
                //add the sequence on playlist variable if it no exist
                if (!r.length) {
                    this._sequence = this._sequence + 1;
                    this._playlist.push({
                        time: lines[parseInt(i) - 1],
                        timestamp: sequenceTimestamp,
                        info: lines[parseInt(i)],
                        url: lines[parseInt(i) + 1],
                    });
                    changed = true;
                }
                while (this._playlist.length > 15) {
                    this._playlist.shift();
                }
            }
        }
        return changed;
    }
    getPlaylist() {
        let playlist = "";
        this._playlist.forEach((x) => (playlist = playlist + x.time + "\n" + x.info + "\n" + x.url + "\n"));
        return (this._header[0] +
            "\n" +
            this._header[1] +
            "\n" +
            this._header[2] +
            "\n" +
            this._header[3] +
            this._sequence +
            "\n" +
            this._header[4] +
            "\n" +
            this._header[5] +
            "\n" +
            playlist);
    }
}
exports.HLS = HLS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSExTLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hscy9ITFMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxHQUFHO0lBQWhCO1FBQ1UsWUFBTyxHQUFrQixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQzlHLGNBQVMsR0FBbUIsRUFBRSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxDQUFDLENBQUM7SUF3RXhCLENBQUM7SUF0RUMsZUFBZSxDQUFDLFFBQWdCLElBQUcsQ0FBQztJQUVwQyxXQUFXLENBQUMsUUFBZ0IsRUFBRSxXQUFvQixLQUFLO1FBQ3JELElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUNyQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXBCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0IsMkRBQTJEO1FBQzNELEtBQUssTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFO1lBQ3JCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTt3QkFDL0IsU0FBUztxQkFDVjtpQkFDRjtnQkFDRCxvQkFBb0I7Z0JBQ3BCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDbEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQzNILENBQUM7Z0JBRUYsbUNBQW1DO2dCQUNuQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUNwQyxPQUFPLENBQUMsQ0FBQyxTQUFTLElBQUksaUJBQWlCLENBQUM7Z0JBQzFDLENBQUMsQ0FBQyxDQUFDO2dCQUNILHNEQUFzRDtnQkFDdEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7d0JBQ2xCLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDNUIsU0FBUyxFQUFFLGlCQUFpQjt3QkFDNUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDNUIsQ0FBQyxDQUFDO29CQUNILE9BQU8sR0FBRyxJQUFJLENBQUM7aUJBQ2hCO2dCQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO29CQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUN4QjthQUNGO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksUUFBUSxHQUFXLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRyxPQUFPLENBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJO1lBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJO1lBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJO1lBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsU0FBUztZQUNkLElBQUk7WUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUk7WUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUk7WUFDSixRQUFRLENBQ1QsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQTNFRCxrQkEyRUMifQ==

/***/ }),

/***/ "./src/player/player.ts":
/*!******************************!*\
  !*** ./src/player/player.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const stream_1 = __webpack_require__(/*! ../stream/stream */ "./src/stream/stream.ts");
const stream_type_1 = __webpack_require__(/*! ../stream/interface/stream.type */ "./src/stream/interface/stream.type.ts");
class Player {
    constructor() {
        this.streamList = [];
        this.actualChannel = "";
        this.playingAds = false;
        this.settings = { whitelist: [], toggleProxy: true, proxyUrl: "" };
        this.quality = "";
        this.onStartAds = () => { };
        this.onEndAds = () => { };
        this.isAds = (x, allowChange = false) => {
            // const ads = x.toString().includes("stitched-ad") || x.toString().includes("twitch-client-ad") || x.toString().includes("twitch-ad-quartile");
            const ads = x.toString().includes("stitched");
            if (!allowChange)
                return ads;
            if (this.playingAds != ads && ads)
                this.onStartAds();
            if (this.playingAds != ads && !ads)
                this.onEndAds();
            this.playingAds = ads;
            return this.playingAds;
        };
        this.currentStream = (channel = this.actualChannel) => {
            return this.streamList.find((x) => x.channelName === channel);
        };
    }
    isWhitelist() {
        if (!this.settings.whitelist)
            return false;
        return this.settings.whitelist.includes(this.actualChannel) && this.currentStream() == undefined ? true : false;
    }
    onfetch(url, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentStream = yield this.currentStream();
            currentStream.hls.addPlaylist(response);
            if (!this.isAds(response, true))
                return true;
            try {
                const local = yield this.fetchm3u8ByStreamType(stream_type_1.streams.local);
                if (local)
                    currentStream.hls.addPlaylist(local);
                if (!local)
                    currentStream.streamAccess(stream_type_1.streams.local);
                if (local)
                    return true;
                const external = yield this.fetchm3u8ByStreamType(stream_type_1.streams.external);
                if (external)
                    currentStream.hls.addPlaylist(external);
                if (external)
                    return true;
                console.log("fail");
                // currentStream.hls.addPlaylist(response, true);
                return false;
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }
    fetchm3u8ByStreamType(accessType) {
        return __awaiter(this, void 0, void 0, function* () {
            LogPrint("Stream Type: " + accessType.name);
            const streamUrlList = this.currentStream().getStreamServersByStreamType(accessType, this.quality);
            //by the array order, try get m3u8 content and return if don't have ads.
            for (const streamUrl of streamUrlList) {
                const text = yield (yield __webpack_require__.g.realFetch(streamUrl === null || streamUrl === void 0 ? void 0 : streamUrl.url)).text();
                if (this.isAds(text))
                    continue;
                return text;
            }
            return "";
        });
    }
    onStartChannel(url, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const channelName = /hls\/(.*).m3u8/gm.exec(url) || [];
            let existent = false;
            LogPrint("Channel " + channelName[1]);
            this.actualChannel = channelName[1];
            if (this.isWhitelist())
                return false;
            if (!this.streamList.find((c) => c.channelName === this.actualChannel)) {
                let proxyUrl = "";
                if (this.settings)
                    proxyUrl = this.settings.proxyUrl ? this.settings.proxyUrl : "";
                this.streamList.push(new stream_1.Stream(this.actualChannel, proxyUrl));
            }
            else {
                LogPrint("Exist: " + this.actualChannel);
                this.currentStream().serverList = [];
                existent = true;
            }
            const stream = this.currentStream();
            //--------------------------------------------//
            //--------------------------------------------//
            LogPrint("Local Server: Loading");
            yield stream.addStreamLink(text, "local");
            LogPrint("Local Server: OK");
            stream.streamAccess(stream_type_1.streams.local);
            if (existent)
                return;
            //if the proxy option on popup is disabled, it is never called.
            if (this.settings) {
                if (this.settings.toggleProxy)
                    stream.tryExternalPlayer();
            }
            return;
        });
    }
}
exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BsYXllci9wbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTBDO0FBQzFDLGlFQUFzRTtBQUl0RSxNQUFhLE1BQU07SUFBbkI7UUFDRSxlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFZLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2RSxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLGVBQVUsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDdEIsYUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUVwQixVQUFLLEdBQUcsQ0FBQyxDQUFTLEVBQUUsY0FBdUIsS0FBSyxFQUFFLEVBQUU7WUFDbEQsZ0pBQWdKO1lBQ2hKLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFdBQVc7Z0JBQUUsT0FBTyxHQUFHLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEdBQUcsSUFBSSxHQUFHO2dCQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFFdEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztRQUVGLGtCQUFhLEdBQUcsQ0FBQyxVQUFrQixJQUFJLENBQUMs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

/***/ }),

/***/ "./src/stream/interface/stream.type.ts":
/*!*********************************************!*\
  !*** ./src/stream/interface/stream.type.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.streams = void 0;
exports.streams = {
    picture: { playerType: "thunderdome", name: "lower" },
    local: { playerType: "embed", name: "normal" },
    external: { name: "external" },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLnR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RyZWFtL2ludGVyZmFjZS9zdHJlYW0udHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLE9BQU8sR0FBRztJQUNyQixPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDckQsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQzlDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Q0FDL0IsQ0FBQyJ9

/***/ }),

/***/ "./src/stream/interface/streamServer.types.ts":
/*!****************************************************!*\
  !*** ./src/stream/interface/streamServer.types.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.streamServer = exports.qualityUrl = void 0;
class qualityUrl {
    constructor() {
        this.url = "";
        this.quality = "";
    }
}
exports.qualityUrl = qualityUrl;
class streamServer {
    constructor(partial) {
        this.bestQuality = () => {
            return this.urlList[0];
        };
        this.findByQuality = (quality) => this.urlList.find((x) => x.quality == quality);
        Object.assign(this, partial);
    }
}
exports.streamServer = streamServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtU2VydmVyLnR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0cmVhbS9pbnRlcmZhY2Uvc3RyZWFtU2VydmVyLnR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQWEsVUFBVTtJQUF2QjtRQUNFLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQUE7QUFIRCxnQ0FHQztBQUNELE1BQWEsWUFBWTtJQVV2QixZQUFZLE9BQThCO1FBTDFDLGdCQUFXLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7UUFDRixrQkFBYSxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQztRQUdsRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFiRCxvQ0FhQyJ9

/***/ }),

/***/ "./src/stream/stream.ts":
/*!******************************!*\
  !*** ./src/stream/stream.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stream = void 0;
const HLS_1 = __webpack_require__(/*! ../hls/HLS */ "./src/hls/HLS.ts");
const stream_type_1 = __webpack_require__(/*! ./interface/stream.type */ "./src/stream/interface/stream.type.ts");
const streamServer_types_1 = __webpack_require__(/*! ./interface/streamServer.types */ "./src/stream/interface/streamServer.types.ts");
class Stream {
    constructor(channelName, tunnel = "") {
        this.serverList = [];
        this.hls = new HLS_1.HLS();
        this.channelName = "";
        this.tunnel = ["https://eu1.jupter.ga/channel/{channelname}", "https://eu2.jupter.ga/channel/{channelname}"];
        this.currentTunnel = this.tunnel[0];
        this.tryExternalPlayer = () => __awaiter(this, void 0, void 0, function* () {
            if (!(yield this.streamAccess(stream_type_1.streams.external))) {
                this.externalPlayer(true);
            }
        });
        this.channelName = channelName;
        if (tunnel)
            this.currentTunnel = tunnel;
    }
    //add m3u8 links with quality to the list of servers
    addStreamLink(text, type = "local", sig = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const qualityUrlSplit = [];
            let captureArray;
            const REGEX = /NAME="((?:\S+\s+\S+|\S+))",AUTO(?:^|\S+\s+)(?:^|\S+\s+)(https:\/\/video(\S+).m3u8)/g;
            while ((captureArray = REGEX.exec(text)) !== null) {
                qualityUrlSplit.push({ quality: captureArray[1], url: captureArray[2] });
            }
            const streamList = new streamServer_types_1.streamServer({ type: type, urlList: qualityUrlSplit, sig: sig });
            this.serverList.push(streamList);
            if (!sig) {
                yield this.signature();
            }
            return true;
        });
    }
    signature() {
        return __awaiter(this, void 0, void 0, function* () {
            const REGEX = /video-weaver.(.*).hls.ttvnw.net\/v1\/playlist\/(.*).m3u8$/gm;
            yield new Promise((resolve) => {
                this.serverList
                    .filter((x) => x.sig == false)
                    .forEach((x) => __awaiter(this, void 0, void 0, function* () {
                    const match = REGEX.exec(x.urlList[0].url);
                    if (match) {
                        try {
                            yield fetch("https://jupter.ga/hls/v2/sig/" + match[2] + "/" + match[1]);
                            x.sig = true;
                            resolve(true);
                        }
                        catch (_a) {
                            resolve(false);
                        }
                    }
                    else {
                        resolve(false);
                    }
                })),
                    resolve(false);
            });
        });
    }
    //add a new player stream external
    externalPlayer(customIgnore = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (customIgnore)
                this.currentTunnel = this.tunnel[0];
            try {
                __webpack_require__.g.LogPrint("External Server: Loading");
                const response = yield __webpack_require__.g.realFetch(this.currentTunnel.replace("{channelname}", this.channelName));
                if (!response.ok) {
                    throw new Error("server proxy return error or not found");
                }
                const text = yield response.text();
                __webpack_require__.g.LogPrint("External Server: OK");
                this.addStreamLink(text, stream_type_1.streams.external.name);
                return true;
            }
            catch (e) {
                __webpack_require__.g.LogPrint("server proxy return error or not found " + this.currentTunnel);
                __webpack_require__.g.LogPrint(e);
                return false;
            }
        });
    }
    //create a new stream access
    streamAccess(stream) {
        return __awaiter(this, void 0, void 0, function* () {
            if (stream.name == stream_type_1.streams.external.name)
                return yield this.externalPlayer();
            try {
                const query = 'query PlaybackAccessToken_Template($login: String!, $isLive: Boolean!, $vodID: ID!, $isVod: Boolean!, $playerType: String!) {  streamPlaybackAccessToken(channelName: $login, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isLive) {    value    signature    __typename  }  videoPlaybackAccessToken(id: $vodID, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isVod) {    value    signature    __typename  }}';
                const body = {
                    operationName: "PlaybackAccessToken_Template",
                    query: query,
                    variables: {
                        isLive: true,
                        login: this.channelName,
                        isVod: false,
                        vodID: "",
                        playerType: stream.playerType,
                    },
                };
                const gql = yield __webpack_require__.g.realFetch("https://gql.twitch.tv/gql", {
                    method: "POST",
                    headers: { "Client-ID": "kimne78kx3ncx6brgo4mv6wki5h1ko" },
                    body: JSON.stringify(body),
                });
                const streamDataAccess = yield gql.json();
                const url = "https://usher.ttvnw.net/api/channel/hls/" +
                    this.channelName +
                    ".m3u8?allow_source=true&fast_bread=true&p=" +
                    Math.floor(Math.random() * 1e7) +
                    "&player_backend=mediaplayer&playlist_include_framerate=true&reassignments_supported=false&sig=" +
                    streamDataAccess.data.streamPlaybackAccessToken.signature +
                    "&supported_codecs=avc1&token=" +
                    streamDataAccess.data.streamPlaybackAccessToken.value;
                const text = yield (yield __webpack_require__.g.realFetch(url)).text();
                __webpack_require__.g.LogPrint("Server loaded " + stream.name);
                this.addStreamLink(text, stream.name);
                return true;
            }
            catch (e) {
                console.log(e);
                return false;
            }
        });
    }
    getStreamServersByStreamType(accessType, quality) {
        //filter all server by type
        const servers = this.serverList.filter((x) => x.type == accessType.name);
        if (!servers)
            return [];
        //filter all server url by quality or bestquality
        const streamUrlList = servers.map((x) => x.findByQuality(quality)).filter((x) => x !== undefined);
        return !streamUrlList.length ? servers.map((x) => x.bestQuality()) : streamUrlList;
    }
}
exports.Stream = Stream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0cmVhbS9zdHJlYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQWlDO0FBQ2pDLHlEQUE4RDtBQUM5RCx1RUFBMEU7QUFFMUUsTUFBYSxNQUFNO0lBUWpCLFlBQVksV0FBbUIsRUFBRSxTQUFpQixFQUFFO1FBUHBELGVBQVUsR0FBbUIsRUFBRSxDQUFDO1FBQ2hDLFFBQUcsR0FBUSxJQUFJLFNBQUcsRUFBRSxDQUFDO1FBQ3JCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFdBQU0sR0FBRyxDQUFDLDZDQUE2QyxFQUFFLDZDQUE2QyxDQUFDLENBQUM7UUFDeEcsa0JBQWEsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBNEV2QyxzQkFBaUIsR0FBRyxHQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtRQUNILENBQUMsQ0FBQSxDQUFDO1FBN0VBLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksTUFBTTtZQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFRCxvREFBb0Q7SUFDOUMsYUFBYSxDQUFDLElBQVksRUFBRSxJQUFJLEdBQUcsT0FBTyxFQUFFLEdBQUcsR0FBRyxJQUFJOztZQUMxRCxNQUFNLGVBQWUsR0FBaUIsRUFBRSxDQUFDO1lBQ3pDLElBQUksWUFBb0MsQ0FBQztZQUV6QyxNQUFNLEtBQUssR0FBRyxxRkFBcUYsQ0FBQztZQUVwRyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FB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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.worker.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE0QixvQ0FBb0M7QUFDcGhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGtDQUFrQyxxQkFBTTtBQUN4QztBQUNBLCtCQUErQiwrQ0FBK0M7QUFDOUU7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHFCQUFNO0FBQ2hELGdCQUFnQixxQkFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLDJDQUEyQzs7Ozs7O1VDdkozQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7VUVQRDtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLndvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9yL2NvbnRyb2xsZXIuZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWNvcmF0b3IvaGFuZGxlci5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hscy9ITFMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmVhbS9pbnRlcmZhY2Uvc3RyZWFtLnR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmVhbS9pbnRlcmZhY2Uvc3RyZWFtU2VydmVyLnR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHJlYW0vc3RyZWFtLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmFwcENvbnRyb2xsZXIgPSB2b2lkIDA7XHJcbmNvbnN0IGNvbnRyb2xsZXJfZGVjb3JhdG9yXzEgPSByZXF1aXJlKFwiLi9kZWNvcmF0b3IvY29udHJvbGxlci5kZWNvcmF0b3JcIik7XHJcbmNvbnN0IGhhbmRsZXJfZGVjb3JhdG9yXzEgPSByZXF1aXJlKFwiLi9kZWNvcmF0b3IvaGFuZGxlci5kZWNvcmF0b3JcIik7XHJcbmxldCBhcHBDb250cm9sbGVyID0gY2xhc3MgYXBwQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5hcHBTZXJ2aWNlID0gYXBwU2VydmljZTtcclxuICAgICAgICB0aGlzLmdldFF1YWxpdHkgPSAoKSA9PiBnbG9iYWwucG9zdE1lc3NhZ2UoeyB0eXBlOiBcImdldFF1YWxpdHlcIiB9KTtcclxuICAgICAgICB0aGlzLmdldFNldHRpbmdzID0gKCkgPT4gZ2xvYmFsLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJnZXRTZXR0aW5nc1wiIH0pO1xyXG4gICAgICAgIHRoaXMucGF1c2UgPSAoKSA9PiBnbG9iYWwucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInBhdXNlXCIgfSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ID0gKCkgPT4gZ2xvYmFsLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJwbGF5XCIgfSk7XHJcbiAgICAgICAgdGhpcy5wYXVzZUFuZFBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFNldHRpbmdzKCk7XHJcbiAgICAgICAgZ2xvYmFsLm9uRXZlbnRNZXNzYWdlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgLy8gdmFyIG15TWVzc2FnZSA9IG5ldyBNZXNzYWdlRXZlbnQoJ3dvcmtlcicsIHsgZGF0YTogJ2hlbGxvJyB9KTtcclxuICAgICAgICAgICAgLy8gaWYgKGdsb2JhbC5vbm1lc3NhZ2UpIGdsb2JhbC5vbm1lc3NhZ2UodGhpcywgbXlNZXNzYWdlKTtcclxuICAgICAgICAgICAgc3dpdGNoIChlLmRhdGEuZnVuY05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJCdWZmZXJpbmdcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9uQ2xpZW50U2lua1BsYXlpbmdcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9uQ2xpZW50U2lua1VwZGF0ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicGF1c2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBcInBsYXlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlJlYWR5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQbGF5aW5nXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzZXRRdWFsaXR5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzZXRTZXR0aW5nXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNoYW5uZWwodXJsLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBnbG9iYWwucmVhbEZldGNoKHVybCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCByZXNwb25zZS50ZXh0KCkudGhlbigodGV4dCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5hcHBTZXJ2aWNlLm9uU3RhcnRDaGFubmVsKHVybCwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRleHQpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkZldGNoKHVybCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCByZWFsRmV0Y2godXJsLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiByZXNwb25zZS50ZXh0KCk7IH0pKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHRleHQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuYXBwU2VydmljZS5vbmZldGNoKHVybCwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5bGlzdCA9IHRoaXMuYXBwU2VydmljZS5jdXJyZW50U3RyZWFtKCkuaGxzLmdldFBsYXlsaXN0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHBsYXlsaXN0KTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25DaGFubmVsUGljdHVyZSh1cmwsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRTZXR0aW5ncyhkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHBTZXJ2aWNlLnNldHRpbmdzID0gZGF0YS52YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNldFF1YWxpdHkoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwU2VydmljZS5xdWFsaXR5ID0gZGF0YS52YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICAoMCwgaGFuZGxlcl9kZWNvcmF0b3JfMS5GZXRjaCkoXCJ1c2hlci50dHZudy5uZXQvYXBpL2NoYW5uZWwvaGxzL1wiLCBcInBpY3R1cmUtYnktcGljdHVyZVwiKVxyXG5dLCBhcHBDb250cm9sbGVyLnByb3RvdHlwZSwgXCJvbkNoYW5uZWxcIiwgbnVsbCk7XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgKDAsIGhhbmRsZXJfZGVjb3JhdG9yXzEuRmV0Y2gpKFwiaGxzLnR0dm53Lm5ldC92MS9wbGF5bGlzdC9cIilcclxuXSwgYXBwQ29udHJvbGxlci5wcm90b3R5cGUsIFwib25GZXRjaFwiLCBudWxsKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICAoMCwgaGFuZGxlcl9kZWNvcmF0b3JfMS5GZXRjaCkoXCJwaWN0dXJlLWJ5LXBpY3R1cmVcIilcclxuXSwgYXBwQ29udHJvbGxlci5wcm90b3R5cGUsIFwib25DaGFubmVsUGljdHVyZVwiLCBudWxsKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICAoMCwgaGFuZGxlcl9kZWNvcmF0b3JfMS5NZXNzYWdlKShcInNldFNldHRpbmdzXCIpXHJcbl0sIGFwcENvbnRyb2xsZXIucHJvdG90eXBlLCBcInNldFNldHRpbmdzXCIsIG51bGwpO1xyXG5fX2RlY29yYXRlKFtcclxuICAgICgwLCBoYW5kbGVyX2RlY29yYXRvcl8xLk1lc3NhZ2UpKFwic2V0UXVhbGl0eVwiKVxyXG5dLCBhcHBDb250cm9sbGVyLnByb3RvdHlwZSwgXCJzZXRRdWFsaXR5XCIsIG51bGwpO1xyXG5hcHBDb250cm9sbGVyID0gX19kZWNvcmF0ZShbXHJcbiAgICAoMCwgY29udHJvbGxlcl9kZWNvcmF0b3JfMS5Db250cm9sbGVyKSgpXHJcbl0sIGFwcENvbnRyb2xsZXIpO1xyXG5leHBvcnRzLmFwcENvbnRyb2xsZXIgPSBhcHBDb250cm9sbGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEJ3TG1OdmJuUnliMnhzWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZZWEJ3TG1OdmJuUnliMnhzWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUVzTWtWQlFUaEVPMEZCUXpsRUxIRkZRVUVyUkR0QlFVc3ZSQ3hKUVVGaExHRkJRV0VzUjBGQk1VSXNUVUZCWVN4aFFVRmhPMGxCVlhoQ0xGbEJRVFpDTEZWQlFXdENPMUZCUVd4Q0xHVkJRVlVzUjBGQlZpeFZRVUZWTEVOQlFWRTdVVUZVTDBNc1pVRkJWU3hIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzV1VGQldTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTVSQ3huUWtGQlZ5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNZVUZCWVN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOb1JTeFZRVUZMTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM0JFTEZOQlFVa3NSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGJFUXNhVUpCUVZrc1IwRkJSeXhIUVVGSExFVkJRVVU3V1VGRGJFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xbEJRMklzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTJRc1EwRkJReXhEUVVGRE8xRkJSMEVzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTI1Q0xFMUJRVTBzUTBGQlF5eGpRVUZqTEVkQlFVY3NRMEZCUXl4RFFVRk5MRVZCUVVVc1JVRkJSVHRaUVVOcVF5eHBSVUZCYVVVN1dVRkZha1VzTWtSQlFUSkVPMWxCUlRORUxGRkJRVkVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVN1owSkJRM1pDTEV0QlFVc3NWMEZCVnl4RFFVRkRMRU5CUVVNN2IwSkJRMmhDTEUxQlFVMDdhVUpCUTFBN1owSkJRMFFzUzBGQlN5eHhRa0ZCY1VJc1EwRkJReXhEUVVGRE8yOUNRVU14UWl4TlFVRk5PMmxDUVVOUU8yZENRVU5FTEV0QlFVc3NiMEpCUVc5Q0xFTkJRVU1zUTBGQlF6dHZRa0ZEZWtJc1RVRkJUVHRwUWtGRFVEdG5Ra0ZEUkN4TFFVRkxMRTlCUVU4c1EwRkJReXhEUVVGRE8yOUNRVU5hTEUxQlFVMDdhVUpCUTFBN1owSkJRMFFzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXp0dlFrRkRXQ3hOUVVGTk8ybENRVU5RTzJkQ1FVTkVMRXRCUVVzc1QwRkJUeXhEUVVGRExFTkJRVU03YjBKQlExb3NUVUZCVFR0cFFrRkRVRHRuUWtGRFJDeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRPMjlDUVVOa0xFMUJRVTA3YVVKQlExQTdaMEpCUTBRc1MwRkJTeXhaUVVGWkxFTkJRVU1zUTBGQlF6dHZRa0ZEYWtJc1RVRkJUVHRwUWtGRFVEdG5Ra0ZEUkN4TFFVRkxMRmxCUVZrc1EwRkJReXhEUVVGRE8yOUNRVU5xUWl4TlFVRk5PMmxDUVVOUU8yZENRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPMjlDUVVOUUxFMUJRVTA3YVVKQlExQTdZVUZEUmp0UlFVTklMRU5CUVVNc1EwRkJRenRKUVVOS0xFTkJRVU03U1VGSFN5eFRRVUZUTEVOQlFVTXNSMEZCVnl4RlFVRkZMRTlCUVZrN08xbEJRM1pETEUxQlFVMHNVVUZCVVN4SFFVRmhMRTFCUVUwc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1dVRkRhRVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMmRDUVVGRkxFOUJRVThzVVVGQlVTeERRVUZETzFsQlJXeERMRTlCUVU4c1RVRkJUU3hSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVU4c1NVRkJXU3hGUVVGRkxFVkJRVVU3WjBKQlEzWkVMRTFCUVUwc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU5vUkN4UFFVRlBMRWxCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6VkNMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU03VVVGRFRDeERRVUZETzB0QlFVRTdTVUZIU3l4UFFVRlBMRU5CUVVNc1IwRkJWeXhGUVVGRkxFOUJRVms3TzFsQlEzSkRMRTlCUVU4c1RVRkJUU3hUUVVGVExFTkJRVU1zUjBGQlJ5eEZRVUZGTEU5QlFVOHNRMEZCUXp0cFFrRkRha01zU1VGQlNTeERRVUZETEVOQlFVOHNVVUZCYTBJc1JVRkJSU3hGUVVGRkxHZEVRVUZETEU5QlFVRXNVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGQkxFZEJRVUVzUTBGQlF6dHBRa0ZEYmtRc1NVRkJTU3hEUVVGRExFTkJRVThzU1VGQldTeEZRVUZGTEVWQlFVVTdaMEpCUXpOQ0xFMUJRVTBzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTjZReXhOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMR0ZCUVdFc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0blFrRkRia1VzVDBGQlR5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRmxMRU5CUVVNc1EwRkJRenRaUVVOMlF5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRPMUZCUTFBc1EwRkJRenRMUVVGQk8wbEJSMHNzWjBKQlFXZENMRU5CUVVNc1IwRkJWeXhGUVVGRkxFOUJRVms3TzFsQlF6bERMRTlCUVU4c1NVRkJTU3hSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU40UWl4RFFVRkRPMHRCUVVFN1NVRkhTeXhYUVVGWExFTkJRVU1zU1VGQlV6czdXVUZEZWtJc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVONFF5eERRVUZETzB0QlFVRTdTVUZIU3l4VlFVRlZMRU5CUVVNc1NVRkJVenM3V1VGRGVFSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTjJReXhEUVVGRE8wdEJRVUU3UTBGRFJpeERRVUZCTzBGQmJrTkRPMGxCUkVNc1NVRkJRU3g1UWtGQlN5eEZRVUZETEd0RFFVRnJReXhGUVVGRkxHOUNRVUZ2UWl4RFFVRkRPemhEUVZNdlJEdEJRVWRFTzBsQlJFTXNTVUZCUVN4NVFrRkJTeXhGUVVGRExEUkNRVUUwUWl4RFFVRkRPelJEUVZOdVF6dEJRVWRFTzBsQlJFTXNTVUZCUVN4NVFrRkJTeXhGUVVGRExHOUNRVUZ2UWl4RFFVRkRPM0ZFUVVjelFqdEJRVWRFTzBsQlJFTXNTVUZCUVN3eVFrRkJUeXhGUVVGRExHRkJRV0VzUTBGQlF6dG5SRUZIZEVJN1FVRkhSRHRKUVVSRExFbEJRVUVzTWtKQlFVOHNSVUZCUXl4WlFVRlpMRU5CUVVNN0swTkJSM0pDTzBGQmRrWlZMR0ZCUVdFN1NVRkVla0lzU1VGQlFTeHBRMEZCVlN4SFFVRkZPMGRCUTBFc1lVRkJZU3hEUVhkR2VrSTdRVUY0Umxrc2MwTkJRV0VpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYXBwX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuL2FwcC5jb250cm9sbGVyXCIpO1xyXG5jb25zdCBwbGF5ZXJfMSA9IHJlcXVpcmUoXCIuL3BsYXllci9wbGF5ZXJcIik7XHJcbmZ1bmN0aW9uIGFwcCgpIHtcclxuICAgIGdsb2JhbC5Mb2dQcmludCA9ICh4KSA9PiBjb25zb2xlLmxvZyhcIltQdXJwbGVdOiBcIiwgeCk7XHJcbiAgICBnbG9iYWwuYXBwQ29udHJvbGxlciA9IG5ldyBhcHBfY29udHJvbGxlcl8xLmFwcENvbnRyb2xsZXIobmV3IHBsYXllcl8xLlBsYXllcigpKTtcclxuICAgIGdsb2JhbC5Mb2dQcmludChcIlNjcmlwdCBydW5uaW5nXCIpO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGFwcDtcclxuZ2xvYmFsLnJlYWxGZXRjaCA9IGdsb2JhbC5mZXRjaDtcclxuZ2xvYmFsLmZldGNoID0gKHVybCwgb3B0aW9ucykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJvdXRlckxpc3QuZm9yRWFjaCgoeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXJsLmluY2x1ZGVzKHgubWF0Y2gpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXVybC5pbmNsdWRlcyh4Lmlnbm9yZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiByZXNvbHZlKHlpZWxkIGdsb2JhbC5hcHBDb250cm9sbGVyW3gucHJvcGVydHlLZXldKHVybCwgb3B0aW9ucykpOyB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBnbG9iYWwucmVhbEZldGNoLmFwcGx5KHRoaXMsIFt1cmwsIG9wdGlvbnNdKTtcclxufSk7XHJcbmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xyXG4gICAgZ2xvYmFsLm1lc3NhZ2VMaXN0LmZvckVhY2goKHgpID0+IHtcclxuICAgICAgICBpZiAoZS5kYXRhLmZ1bmNOYW1lID09IHgubWF0Y2gpXHJcbiAgICAgICAgICAgIGdsb2JhbC5hcHBDb250cm9sbGVyW3gucHJvcGVydHlLZXldKGUuZGF0YSk7XHJcbiAgICB9KTtcclxufSk7XHJcbmFwcCgpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEJ3TG5kdmNtdGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5aGNIQXVkMjl5YTJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPMEZCUVVFc2NVUkJRV2xFTzBGQlEycEVMRFJEUVVGNVF6dEJRVmQ2UXl4VFFVRjNRaXhIUVVGSE8wbEJRM3BDTEUxQlFVMHNRMEZCUXl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6TkVMRTFCUVUwc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTdzRRa0ZCWVN4RFFVRkRMRWxCUVVrc1pVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVVYyUkN4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1FVRkRjRU1zUTBGQlF6dEJRVXhFTEhOQ1FVdERPMEZCUlVRc1RVRkJUU3hEUVVGRExGTkJRVk1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRPMEZCUTJoRExFMUJRVTBzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCVHl4SFFVRlJMRVZCUVVVc1QwRkJXU3hGUVVGRkxFVkJRVVU3U1VGRE9VTXNTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFVkJRVVU3VVVGRE0wSXNWVUZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzWkNMRWxCUVVrc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRM3BDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0dlFrRkRNMElzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRlBMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeHJSRUZCUXl4UFFVRkJMRTlCUVU4c1EwRkJReXhOUVVGTkxFMUJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkJMRWRCUVVFc1EwRkJReXhEUVVGRE8ybENRVU5xU0R0aFFVTkdPMUZCUTBnc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRFNqdEpRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGRFUXNRMEZCUXl4RFFVRkJMRU5CUVVNN1FVRkZSaXhOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlRTeEZRVUZGTEVWQlFVVTdTVUZETlVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSVHRSUVVNdlFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTzFsQlFVVXNUVUZCVFN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRemxGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTB3c1EwRkJReXhEUVVGRExFTkJRVU03UVVGRlNDeEhRVUZITEVWQlFVVXNRMEZCUXlKOSIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ29udHJvbGxlciA9IHZvaWQgMDtcclxuY29uc3QgQ29udHJvbGxlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAodGFyZ2V0KSA9PiB7IH07XHJcbn07XHJcbmV4cG9ydHMuQ29udHJvbGxlciA9IENvbnRyb2xsZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXVkSEp2Ykd4bGNpNWtaV052Y21GMGIzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHVmpiM0poZEc5eUwyTnZiblJ5YjJ4c1pYSXVaR1ZqYjNKaGRHOXlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRlBMRTFCUVUwc1ZVRkJWU3hIUVVGSExFZEJRVzFDTEVWQlFVVTdTVUZETjBNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVkQlFVVXNRMEZCUXl4RFFVRkRPMEZCUTNoQ0xFTkJRVU1zUTBGQlF6dEJRVVpYTEZGQlFVRXNWVUZCVlN4alFVVnlRaUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5NZXNzYWdlID0gZXhwb3J0cy5GZXRjaCA9IHZvaWQgMDtcclxuY29uc3QgRmV0Y2ggPSAobWF0Y2gsIGlnbm9yZSA9IFwiXCIpID0+IHtcclxuICAgIHJldHVybiAodGFyZ2V0LCBwcm9wZXJ0eUtleSkgPT4ge1xyXG4gICAgICAgIGlmICghZ2xvYmFsLnJvdXRlckxpc3QpXHJcbiAgICAgICAgICAgIGdsb2JhbC5yb3V0ZXJMaXN0ID0gW107XHJcbiAgICAgICAgZ2xvYmFsLnJvdXRlckxpc3QucHVzaCh7IHByb3BlcnR5S2V5OiBwcm9wZXJ0eUtleSwgbWF0Y2g6IG1hdGNoLCBpZ25vcmU6IGlnbm9yZSB9KTtcclxuICAgIH07XHJcbn07XHJcbmV4cG9ydHMuRmV0Y2ggPSBGZXRjaDtcclxuY29uc3QgTWVzc2FnZSA9IChtYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuICh0YXJnZXQsIHByb3BlcnR5S2V5KSA9PiB7XHJcbiAgICAgICAgaWYgKCFnbG9iYWwubWVzc2FnZUxpc3QpXHJcbiAgICAgICAgICAgIGdsb2JhbC5tZXNzYWdlTGlzdCA9IFtdO1xyXG4gICAgICAgIGdsb2JhbC5tZXNzYWdlTGlzdC5wdXNoKHsgcHJvcGVydHlLZXk6IHByb3BlcnR5S2V5LCBtYXRjaDogbWF0Y2ggfSk7XHJcbiAgICB9O1xyXG59O1xyXG5leHBvcnRzLk1lc3NhZ2UgPSBNZXNzYWdlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhR0Z1Wkd4bGNpNWtaV052Y21GMGIzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHVmpiM0poZEc5eUwyaGhibVJzWlhJdVpHVmpiM0poZEc5eUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGUExFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNTMEZCWVN4RlFVRkZMRk5CUVdsQ0xFVkJRVVVzUlVGQmJVSXNSVUZCUlR0SlFVTXpSU3hQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEZkQlFWY3NSVUZCUlN4RlFVRkZPMUZCUXpkQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlR0WlFVRkZMRTFCUVUwc1EwRkJReXhWUVVGVkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlF5OURMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNWMEZCVnl4RlFVRkZMRmRCUVhGQ0xFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NSVUZCUlN4TlFVRk5MRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU12Uml4RFFVRkRMRU5CUVVNN1FVRkRTaXhEUVVGRExFTkJRVU03UVVGTVZ5eFJRVUZCTEV0QlFVc3NVMEZMYUVJN1FVRkZTeXhOUVVGTkxFOUJRVThzUjBGQlJ5eERRVUZETEV0QlFXRXNSVUZCYlVJc1JVRkJSVHRKUVVONFJDeFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRmRCUVZjc1JVRkJSU3hGUVVGRk8xRkJRemRDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWenRaUVVGRkxFMUJRVTBzUTBGQlF5eFhRVUZYTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJwRUxFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1YwRkJWeXhGUVVGRkxGZEJRWEZDTEVWQlFVVXNTMEZCU3l4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGFFWXNRMEZCUXl4RFFVRkRPMEZCUTBvc1EwRkJReXhEUVVGRE8wRkJURmNzVVVGQlFTeFBRVUZQTEZkQlMyeENJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5ITFMgPSB2b2lkIDA7XHJcbmNsYXNzIEhMUyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9oZWFkZXIgPSBbXCIjRVhUTTNVXCIsIFwiI0VYVC1YLVZFUlNJT046M1wiLCBcIiNFWFQtWC1UQVJHRVREVVJBVElPTjo2XCIsIFwiI0VYVC1YLU1FRElBLVNFUVVFTkNFOlwiXTtcclxuICAgICAgICB0aGlzLl9wbGF5bGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3NlcXVlbmNlID0gMDtcclxuICAgIH1cclxuICAgIGFkZFBsYXlsaXN0VGVzdChwbGF5bGlzdCkgeyB9XHJcbiAgICBhZGRQbGF5bGlzdChwbGF5bGlzdCwgYWxsb3dBZHMgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChwbGF5bGlzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBwbGF5bGlzdC50b1N0cmluZygpLnNwbGl0KC9bXFxyXFxuXS8pO1xyXG4gICAgICAgIHRoaXMuX2hlYWRlcls0XSA9IGxpbmVzWzRdO1xyXG4gICAgICAgIHRoaXMuX2hlYWRlcls1XSA9IGxpbmVzWzVdO1xyXG4gICAgICAgIC8vdGFrZSBhbGwgbTN1OSBjb250ZW50IHRvIHRoZSBwbGF5bGlzdCBhbmQgYnVpbGQgYSB2YXJpYmxlXHJcbiAgICAgICAgZm9yIChjb25zdCBpIGluIGxpbmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChsaW5lc1tpXS5pbmNsdWRlcyhcIiNFWFRJTkZcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYWxsb3dBZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxpbmVzW2ldLmluY2x1ZGVzKFwiLGxpdmVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy90aW1lc3RhbXAgc2VxdWVuY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlVGltZXN0YW1wID0gTWF0aC5mbG9vcihuZXcgRGF0ZShsaW5lc1twYXJzZUludChpKSAtIDFdLnNsaWNlKGxpbmVzW3BhcnNlSW50KGkpIC0gMV0ubGVuZ3RoIC0gMjQsIGxpbmVzW3BhcnNlSW50KGkpIC0gMV0ubGVuZ3RoKSkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAvL3NlbGVjdCBhbGwgc2VxdWVuY2UgdGhhdCBubyBleGlzdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuX3BsYXlsaXN0LmZpbHRlcigoeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnRpbWVzdGFtcCA+PSBzZXF1ZW5jZVRpbWVzdGFtcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy9hZGQgdGhlIHNlcXVlbmNlIG9uIHBsYXlsaXN0IHZhcmlhYmxlIGlmIGl0IG5vIGV4aXN0XHJcbiAgICAgICAgICAgICAgICBpZiAoIXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VxdWVuY2UgPSB0aGlzLl9zZXF1ZW5jZSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGxpbmVzW3BhcnNlSW50KGkpIC0gMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogc2VxdWVuY2VUaW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm86IGxpbmVzW3BhcnNlSW50KGkpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBsaW5lc1twYXJzZUludChpKSArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3BsYXlsaXN0Lmxlbmd0aCA+IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWxpc3Quc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcclxuICAgIH1cclxuICAgIGdldFBsYXlsaXN0KCkge1xyXG4gICAgICAgIGxldCBwbGF5bGlzdCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fcGxheWxpc3QuZm9yRWFjaCgoeCkgPT4gKHBsYXlsaXN0ID0gcGxheWxpc3QgKyB4LnRpbWUgKyBcIlxcblwiICsgeC5pbmZvICsgXCJcXG5cIiArIHgudXJsICsgXCJcXG5cIikpO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5faGVhZGVyWzBdICtcclxuICAgICAgICAgICAgXCJcXG5cIiArXHJcbiAgICAgICAgICAgIHRoaXMuX2hlYWRlclsxXSArXHJcbiAgICAgICAgICAgIFwiXFxuXCIgK1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFkZXJbMl0gK1xyXG4gICAgICAgICAgICBcIlxcblwiICtcclxuICAgICAgICAgICAgdGhpcy5faGVhZGVyWzNdICtcclxuICAgICAgICAgICAgdGhpcy5fc2VxdWVuY2UgK1xyXG4gICAgICAgICAgICBcIlxcblwiICtcclxuICAgICAgICAgICAgdGhpcy5faGVhZGVyWzRdICtcclxuICAgICAgICAgICAgXCJcXG5cIiArXHJcbiAgICAgICAgICAgIHRoaXMuX2hlYWRlcls1XSArXHJcbiAgICAgICAgICAgIFwiXFxuXCIgK1xyXG4gICAgICAgICAgICBwbGF5bGlzdCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5ITFMgPSBITFM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVNFeFRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaHNjeTlJVEZNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1RVRkJZU3hIUVVGSE8wbEJRV2hDTzFGQlExVXNXVUZCVHl4SFFVRnJRaXhEUVVGRExGTkJRVk1zUlVGQlJTeHJRa0ZCYTBJc1JVRkJSU3g1UWtGQmVVSXNSVUZCUlN4M1FrRkJkMElzUTBGQlF5eERRVUZETzFGQlF6bEhMR05CUVZNc1IwRkJiVUlzUlVGQlJTeERRVUZETzFGQlF5OUNMR05CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGM1JYaENMRU5CUVVNN1NVRjBSVU1zWlVGQlpTeERRVUZETEZGQlFXZENMRWxCUVVjc1EwRkJRenRKUVVWd1F5eFhRVUZYTEVOQlFVTXNVVUZCWjBJc1JVRkJSU3hYUVVGdlFpeExRVUZMTzFGQlEzSkVMRWxCUVVrc1VVRkJVU3hMUVVGTExFbEJRVWtzUlVGQlJUdFpRVU55UWl4UFFVRlBMRXRCUVVzc1EwRkJRenRUUVVOa08xRkJSVVFzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUlhCQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZEYkVRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE0wSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkZNMElzTWtSQlFUSkVPMUZCUXpORUxFdEJRVXNzVFVGQlRTeERRVUZETEVsQlFVa3NTMEZCU3l4RlFVRkZPMWxCUTNKQ0xFbEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdG5Ra0ZEYUVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJUdHZRa0ZEWWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSVHQzUWtGREwwSXNVMEZCVXp0eFFrRkRWanRwUWtGRFJqdG5Ra0ZEUkN4dlFrRkJiMEk3WjBKQlEzQkNMRTFCUVUwc2FVSkJRV2xDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkRiRU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlF6TklMRU5CUVVNN1owSkJSVVlzYlVOQlFXMURPMmRDUVVOdVF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVOd1F5eFBRVUZQTEVOQlFVTXNRMEZCUXl4VFFVRlRMRWxCUVVrc2FVSkJRV2xDTEVOQlFVTTdaMEpCUXpGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTklMSE5FUVVGelJEdG5Ra0ZEZEVRc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdiMEpCUTJJc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJRenR2UWtGRGNFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU03ZDBKQlEyeENMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenQzUWtGRE5VSXNVMEZCVXl4RlFVRkZMR2xDUVVGcFFqdDNRa0ZETlVJc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2QwSkJRM2hDTEVkQlFVY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0eFFrRkROVUlzUTBGQlF5eERRVUZETzI5Q1FVTklMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03YVVKQlEyaENPMmRDUVVORUxFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1JVRkJSU3hGUVVGRk8yOUNRVU5xUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzJsQ1FVTjRRanRoUVVOR08xTkJRMFk3VVVGRFJDeFBRVUZQTEU5QlFVOHNRMEZCUXp0SlFVTnFRaXhEUVVGRE8wbEJSVVFzVjBGQlZ6dFJRVU5VTEVsQlFVa3NVVUZCVVN4SFFVRlhMRVZCUVVVc1EwRkJRenRSUVVVeFFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU53Unl4UFFVRlBMRU5CUTB3c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWml4SlFVRkpPMWxCUTBvc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWml4SlFVRkpPMWxCUTBvc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWml4SlFVRkpPMWxCUTBvc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEWml4SlFVRkpMRU5CUVVNc1UwRkJVenRaUVVOa0xFbEJRVWs3V1VGRFNpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVObUxFbEJRVWs3V1VGRFNpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVObUxFbEJRVWs3V1VGRFNpeFJRVUZSTEVOQlExUXNRMEZCUXp0SlFVTktMRU5CUVVNN1EwRkRSanRCUVRORlJDeHJRa0V5UlVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUGxheWVyID0gdm9pZCAwO1xyXG5jb25zdCBzdHJlYW1fMSA9IHJlcXVpcmUoXCIuLi9zdHJlYW0vc3RyZWFtXCIpO1xyXG5jb25zdCBzdHJlYW1fdHlwZV8xID0gcmVxdWlyZShcIi4uL3N0cmVhbS9pbnRlcmZhY2Uvc3RyZWFtLnR5cGVcIik7XHJcbmNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0cmVhbUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmFjdHVhbENoYW5uZWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucGxheWluZ0FkcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7IHdoaXRlbGlzdDogW10sIHRvZ2dsZVByb3h5OiB0cnVlLCBwcm94eVVybDogXCJcIiB9O1xyXG4gICAgICAgIHRoaXMucXVhbGl0eSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0QWRzID0gKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMub25FbmRBZHMgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5pc0FkcyA9ICh4LCBhbGxvd0NoYW5nZSA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGFkcyA9IHgudG9TdHJpbmcoKS5pbmNsdWRlcyhcInN0aXRjaGVkLWFkXCIpIHx8IHgudG9TdHJpbmcoKS5pbmNsdWRlcyhcInR3aXRjaC1jbGllbnQtYWRcIikgfHwgeC50b1N0cmluZygpLmluY2x1ZGVzKFwidHdpdGNoLWFkLXF1YXJ0aWxlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBhZHMgPSB4LnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJzdGl0Y2hlZFwiKTtcclxuICAgICAgICAgICAgaWYgKCFhbGxvd0NoYW5nZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBhZHM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXlpbmdBZHMgIT0gYWRzICYmIGFkcylcclxuICAgICAgICAgICAgICAgIHRoaXMub25TdGFydEFkcygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5aW5nQWRzICE9IGFkcyAmJiAhYWRzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVuZEFkcygpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlpbmdBZHMgPSBhZHM7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXlpbmdBZHM7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdHJlYW0gPSAoY2hhbm5lbCA9IHRoaXMuYWN0dWFsQ2hhbm5lbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJlYW1MaXN0LmZpbmQoKHgpID0+IHguY2hhbm5lbE5hbWUgPT09IGNoYW5uZWwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpc1doaXRlbGlzdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3Mud2hpdGVsaXN0KVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3Mud2hpdGVsaXN0LmluY2x1ZGVzKHRoaXMuYWN0dWFsQ2hhbm5lbCkgJiYgdGhpcy5jdXJyZW50U3RyZWFtKCkgPT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgb25mZXRjaCh1cmwsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFN0cmVhbSA9IHlpZWxkIHRoaXMuY3VycmVudFN0cmVhbSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50U3RyZWFtLmhscy5hZGRQbGF5bGlzdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0FkcyhyZXNwb25zZSwgdHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsID0geWllbGQgdGhpcy5mZXRjaG0zdThCeVN0cmVhbVR5cGUoc3RyZWFtX3R5cGVfMS5zdHJlYW1zLmxvY2FsKTtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbClcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyZWFtLmhscy5hZGRQbGF5bGlzdChsb2NhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxvY2FsKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJlYW0uc3RyZWFtQWNjZXNzKHN0cmVhbV90eXBlXzEuc3RyZWFtcy5sb2NhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbCA9IHlpZWxkIHRoaXMuZmV0Y2htM3U4QnlTdHJlYW1UeXBlKHN0cmVhbV90eXBlXzEuc3RyZWFtcy5leHRlcm5hbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmVhbS5obHMuYWRkUGxheWxpc3QoZXh0ZXJuYWwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gY3VycmVudFN0cmVhbS5obHMuYWRkUGxheWxpc3QocmVzcG9uc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmZXRjaG0zdThCeVN0cmVhbVR5cGUoYWNjZXNzVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIExvZ1ByaW50KFwiU3RyZWFtIFR5cGU6IFwiICsgYWNjZXNzVHlwZS5uYW1lKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RyZWFtVXJsTGlzdCA9IHRoaXMuY3VycmVudFN0cmVhbSgpLmdldFN0cmVhbVNlcnZlcnNCeVN0cmVhbVR5cGUoYWNjZXNzVHlwZSwgdGhpcy5xdWFsaXR5KTtcclxuICAgICAgICAgICAgLy9ieSB0aGUgYXJyYXkgb3JkZXIsIHRyeSBnZXQgbTN1OCBjb250ZW50IGFuZCByZXR1cm4gaWYgZG9uJ3QgaGF2ZSBhZHMuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3RyZWFtVXJsIG9mIHN0cmVhbVVybExpc3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSB5aWVsZCAoeWllbGQgZ2xvYmFsLnJlYWxGZXRjaChzdHJlYW1VcmwgPT09IG51bGwgfHwgc3RyZWFtVXJsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHJlYW1VcmwudXJsKSkudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBZHModGV4dCkpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uU3RhcnRDaGFubmVsKHVybCwgdGV4dCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYW5uZWxOYW1lID0gL2hsc1xcLyguKikubTN1OC9nbS5leGVjKHVybCkgfHwgW107XHJcbiAgICAgICAgICAgIGxldCBleGlzdGVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBMb2dQcmludChcIkNoYW5uZWwgXCIgKyBjaGFubmVsTmFtZVsxXSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0dWFsQ2hhbm5lbCA9IGNoYW5uZWxOYW1lWzFdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1doaXRlbGlzdCgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RyZWFtTGlzdC5maW5kKChjKSA9PiBjLmNoYW5uZWxOYW1lID09PSB0aGlzLmFjdHVhbENoYW5uZWwpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJveHlVcmwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJveHlVcmwgPSB0aGlzLnNldHRpbmdzLnByb3h5VXJsID8gdGhpcy5zZXR0aW5ncy5wcm94eVVybCA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmVhbUxpc3QucHVzaChuZXcgc3RyZWFtXzEuU3RyZWFtKHRoaXMuYWN0dWFsQ2hhbm5lbCwgcHJveHlVcmwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZ1ByaW50KFwiRXhpc3Q6IFwiICsgdGhpcy5hY3R1YWxDaGFubmVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN0cmVhbSgpLnNlcnZlckxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGV4aXN0ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLmN1cnJlbnRTdHJlYW0oKTtcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgICAgICBMb2dQcmludChcIkxvY2FsIFNlcnZlcjogTG9hZGluZ1wiKTtcclxuICAgICAgICAgICAgeWllbGQgc3RyZWFtLmFkZFN0cmVhbUxpbmsodGV4dCwgXCJsb2NhbFwiKTtcclxuICAgICAgICAgICAgTG9nUHJpbnQoXCJMb2NhbCBTZXJ2ZXI6IE9LXCIpO1xyXG4gICAgICAgICAgICBzdHJlYW0uc3RyZWFtQWNjZXNzKHN0cmVhbV90eXBlXzEuc3RyZWFtcy5sb2NhbCk7XHJcbiAgICAgICAgICAgIGlmIChleGlzdGVudClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy9pZiB0aGUgcHJveHkgb3B0aW9uIG9uIHBvcHVwIGlzIGRpc2FibGVkLCBpdCBpcyBuZXZlciBjYWxsZWQuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy50b2dnbGVQcm94eSlcclxuICAgICAgICAgICAgICAgICAgICBzdHJlYW0udHJ5RXh0ZXJuYWxQbGF5ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QbGF5ZXIgPSBQbGF5ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHeGhlV1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM0JzWVhsbGNpOXdiR0Y1WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPMEZCUVVFc05rTkJRVEJETzBGQlF6RkRMR2xGUVVGelJUdEJRVWwwUlN4TlFVRmhMRTFCUVUwN1NVRkJia0k3VVVGRFJTeGxRVUZWTEVkQlFXRXNSVUZCUlN4RFFVRkRPMUZCUXpGQ0xHdENRVUZoTEVkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUXpOQ0xHVkJRVlVzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEYmtJc1lVRkJVU3hIUVVGWkxFVkJRVVVzVTBGQlV5eEZRVUZGTEVWQlFVVXNSVUZCUlN4WFFVRlhMRVZCUVVVc1NVRkJTU3hGUVVGRkxGRkJRVkVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0UlFVTjJSU3haUVVGUExFZEJRVmNzUlVGQlJTeERRVUZETzFGQlJYSkNMR1ZCUVZVc1IwRkJSeXhIUVVGSExFVkJRVVVzUjBGQlJTeERRVUZETEVOQlFVTTdVVUZEZEVJc1lVRkJVU3hIUVVGSExFZEJRVWNzUlVGQlJTeEhRVUZGTEVOQlFVTXNRMEZCUXp0UlFVVndRaXhWUVVGTExFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNZMEZCZFVJc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGRGJFUXNaMHBCUVdkS08xbEJRMmhLTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkRPVU1zU1VGQlNTeERRVUZETEZkQlFWYzdaMEpCUVVVc1QwRkJUeXhIUVVGSExFTkJRVU03V1VGRE4wSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hKUVVGSkxFZEJRVWNzU1VGQlNTeEhRVUZITzJkQ1FVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dFpRVU55UkN4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnp0blFrRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdXVUZEY0VRc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eEhRVUZITEVOQlFVTTdXVUZGZEVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETzFGQlEzcENMRU5CUVVNc1EwRkJRenRSUVVWR0xHdENRVUZoTEVkQlFVY3NRMEZCUXl4VlFVRnJRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZWTEVWQlFVVTdXVUZETDBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NTMEZCU3l4UFFVRlBMRU5CUVVVc1EwRkJRenRSUVVONlJTeERRVUZETEVOQlFVTTdTVUZ2Umtvc1EwRkJRenRKUVd4R1F5eFhRVUZYTzFGQlExUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV6dFpRVUZGTEU5QlFVOHNTMEZCU3l4RFFVRkRPMUZCUXpORExFOUJRVThzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU5zU0N4RFFVRkRPMGxCUlVzc1QwRkJUeXhEUVVGRExFZEJRVmNzUlVGQlJTeFJRVUZuUWpzN1dVRkRla01zVFVGQlRTeGhRVUZoTEVkQlFWY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFTkJRVU03V1VGRGVrUXNZVUZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdXVUZGZUVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJRenRuUWtGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXp0WlFVVTNReXhKUVVGSk8yZENRVU5HTEUxQlFVMHNTMEZCU3l4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMSEZDUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdaMEpCUXpsRUxFbEJRVWtzUzBGQlN6dHZRa0ZCUlN4aFFVRmhMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkRhRVFzU1VGQlNTeERRVUZETEV0QlFVczdiMEpCUVVVc1lVRkJZU3hEUVVGRExGbEJRVmtzUTBGQlF5eHhRa0ZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yZENRVU4wUkN4SlFVRkpMRXRCUVVzN2IwSkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdaMEpCUlhaQ0xFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeERRVUZETEhGQ1FVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03WjBKQlEzQkZMRWxCUVVrc1VVRkJVVHR2UWtGQlJTeGhRVUZoTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZEVRc1NVRkJTU3hSUVVGUk8yOUNRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMmRDUVVVeFFpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVVZ3UWl4cFJFRkJhVVE3WjBKQlEycEVMRTlCUVU4c1MwRkJTeXhEUVVGRE8yRkJRMlE3V1VGQlF5eFBRVUZQTEVOQlFVMHNSVUZCUlR0blFrRkRaaXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRoUVVONFFqdFJRVU5JTEVOQlFVTTdTMEZCUVR0SlFVVkxMSEZDUVVGeFFpeERRVUZETEZWQlFYTkNPenRaUVVOb1JDeFJRVUZSTEVOQlFVTXNaVUZCWlN4SFFVRkhMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVVUxUXl4TlFVRk5MR0ZCUVdFc1IwRkJhVUlzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlN4RFFVRkRMRFJDUVVFMFFpeERRVUZETEZWQlFWVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRmFFZ3NkMFZCUVhkRk8xbEJRM2hGTEV0QlFVc3NUVUZCVFN4VFFVRlRMRWxCUVVrc1lVRkJZU3hGUVVGRk8yZENRVU55UXl4TlFVRk5MRWxCUVVrc1IwRkJWeXhOUVVGTkxFTkJRVU1zVFVGQlRTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNc1lVRkJWQ3hUUVVGVExIVkNRVUZVTEZOQlFWTXNRMEZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzJkQ1FVTXpSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRPMjlDUVVGRkxGTkJRVk03WjBKQlF5OUNMRTlCUVU4c1NVRkJTU3hEUVVGRE8yRkJRMkk3V1VGRlJDeFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTmFMRU5CUVVNN1MwRkJRVHRKUVVOTExHTkJRV01zUTBGQlF5eEhRVUZYTEVWQlFVVXNTVUZCV1RzN1dVRkROVU1zVFVGQlRTeFhRVUZYTEVkQlFYbENMR3RDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRE4wVXNTVUZCU1N4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRE8xbEJSWEpDTEZGQlFWRXNRMEZCUXl4VlFVRlZMRWRCUVVjc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZjRU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMmRDUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzFsQlJYSkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NTMEZCU3l4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFVkJRVVU3WjBKQlF6bEZMRWxCUVVrc1VVRkJVU3hIUVVGSExFVkJRVVVzUTBGQlF6dG5Ra0ZEYkVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVUdHZRa0ZCUlN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1owSkJRMjVHTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzWlVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5vUlR0cFFrRkJUVHRuUWtGRFRDeFJRVUZSTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dG5Ra0ZEZWtNc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZETEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRM0pETEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1lVRkRha0k3V1VGRlJDeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFTkJRVU03V1VGRGNFTXNaMFJCUVdkRU8xbEJSV2hFTEdkRVFVRm5SRHRaUVVOb1JDeFJRVUZSTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zUTBGQlF6dFpRVU5zUXl4TlFVRk5MRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUXpGRExGRkJRVkVzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8xbEJSVGRDTEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc2NVSkJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVVnVReXhKUVVGSkxGRkJRVkU3WjBKQlFVVXNUMEZCVHp0WlFVVnlRaXdyUkVGQkswUTdXVUZETDBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJkQ1FVTnFRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnp0dlFrRkJSU3hOUVVGTkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1EwRkJRenRoUVVNelJEdFpRVVZFTEU5QlFVODdVVUZEVkN4RFFVRkRPMHRCUVVFN1EwRkRSanRCUVROSFJDeDNRa0V5UjBNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnN0cmVhbXMgPSB2b2lkIDA7XHJcbmV4cG9ydHMuc3RyZWFtcyA9IHtcclxuICAgIHBpY3R1cmU6IHsgcGxheWVyVHlwZTogXCJ0aHVuZGVyZG9tZVwiLCBuYW1lOiBcImxvd2VyXCIgfSxcclxuICAgIGxvY2FsOiB7IHBsYXllclR5cGU6IFwiZW1iZWRcIiwgbmFtZTogXCJub3JtYWxcIiB9LFxyXG4gICAgZXh0ZXJuYWw6IHsgbmFtZTogXCJleHRlcm5hbFwiIH0sXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUnlaV0Z0TG5SNWNHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTh1TGk5emNtTXZjM1J5WldGdEwybHVkR1Z5Wm1GalpTOXpkSEpsWVcwdWRIbHdaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJZU3hSUVVGQkxFOUJRVThzUjBGQlJ6dEpRVU55UWl4UFFVRlBMRVZCUVVVc1JVRkJSU3hWUVVGVkxFVkJRVVVzWVVGQllTeEZRVUZGTEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVN1NVRkRja1FzUzBGQlN5eEZRVUZGTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hKUVVGSkxFVkJRVVVzVVVGQlVTeEZRVUZGTzBsQlF6bERMRkZCUVZFc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFZRVUZWTEVWQlFVVTdRMEZETDBJc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zdHJlYW1TZXJ2ZXIgPSBleHBvcnRzLnF1YWxpdHlVcmwgPSB2b2lkIDA7XHJcbmNsYXNzIHF1YWxpdHlVcmwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucXVhbGl0eSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5xdWFsaXR5VXJsID0gcXVhbGl0eVVybDtcclxuY2xhc3Mgc3RyZWFtU2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcnRpYWwpIHtcclxuICAgICAgICB0aGlzLmJlc3RRdWFsaXR5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cmxMaXN0WzBdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5maW5kQnlRdWFsaXR5ID0gKHF1YWxpdHkpID0+IHRoaXMudXJsTGlzdC5maW5kKCh4KSA9PiB4LnF1YWxpdHkgPT0gcXVhbGl0eSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXJ0aWFsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnN0cmVhbVNlcnZlciA9IHN0cmVhbVNlcnZlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSeVpXRnRVMlZ5ZG1WeUxuUjVjR1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dkxpNHZjM0pqTDNOMGNtVmhiUzlwYm5SbGNtWmhZMlV2YzNSeVpXRnRVMlZ5ZG1WeUxuUjVjR1Z6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEUxQlFXRXNWVUZCVlR0SlFVRjJRanRSUVVORkxGRkJRVWNzUjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZEYWtJc1dVRkJUeXhIUVVGWExFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRPME5CUVVFN1FVRklSQ3huUTBGSFF6dEJRVU5FTEUxQlFXRXNXVUZCV1R0SlFWVjJRaXhaUVVGWkxFOUJRVGhDTzFGQlRERkRMR2RDUVVGWExFZEJRVWNzUjBGQlJ5eEZRVUZGTzFsQlEycENMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjZRaXhEUVVGRExFTkJRVU03VVVGRFJpeHJRa0ZCWVN4SFFVRkhMRU5CUVVNc1QwRkJaU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF6dFJRVWRzUml4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTXZRaXhEUVVGRE8wTkJRMFk3UVVGaVJDeHZRMEZoUXlKOSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5TdHJlYW0gPSB2b2lkIDA7XHJcbmNvbnN0IEhMU18xID0gcmVxdWlyZShcIi4uL2hscy9ITFNcIik7XHJcbmNvbnN0IHN0cmVhbV90eXBlXzEgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2Uvc3RyZWFtLnR5cGVcIik7XHJcbmNvbnN0IHN0cmVhbVNlcnZlcl90eXBlc18xID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlL3N0cmVhbVNlcnZlci50eXBlc1wiKTtcclxuY2xhc3MgU3RyZWFtIHtcclxuICAgIGNvbnN0cnVjdG9yKGNoYW5uZWxOYW1lLCB0dW5uZWwgPSBcIlwiKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5obHMgPSBuZXcgSExTXzEuSExTKCk7XHJcbiAgICAgICAgdGhpcy5jaGFubmVsTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy50dW5uZWwgPSBbXCJodHRwczovL2V1MS5qdXB0ZXIuZ2EvY2hhbm5lbC97Y2hhbm5lbG5hbWV9XCIsIFwiaHR0cHM6Ly9ldTIuanVwdGVyLmdhL2NoYW5uZWwve2NoYW5uZWxuYW1lfVwiXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUdW5uZWwgPSB0aGlzLnR1bm5lbFswXTtcclxuICAgICAgICB0aGlzLnRyeUV4dGVybmFsUGxheWVyID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoISh5aWVsZCB0aGlzLnN0cmVhbUFjY2VzcyhzdHJlYW1fdHlwZV8xLnN0cmVhbXMuZXh0ZXJuYWwpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHRlcm5hbFBsYXllcih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbE5hbWUgPSBjaGFubmVsTmFtZTtcclxuICAgICAgICBpZiAodHVubmVsKVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUdW5uZWwgPSB0dW5uZWw7XHJcbiAgICB9XHJcbiAgICAvL2FkZCBtM3U4IGxpbmtzIHdpdGggcXVhbGl0eSB0byB0aGUgbGlzdCBvZiBzZXJ2ZXJzXHJcbiAgICBhZGRTdHJlYW1MaW5rKHRleHQsIHR5cGUgPSBcImxvY2FsXCIsIHNpZyA9IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCBxdWFsaXR5VXJsU3BsaXQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNhcHR1cmVBcnJheTtcclxuICAgICAgICAgICAgY29uc3QgUkVHRVggPSAvTkFNRT1cIigoPzpcXFMrXFxzK1xcUyt8XFxTKykpXCIsQVVUTyg/Ol58XFxTK1xccyspKD86XnxcXFMrXFxzKykoaHR0cHM6XFwvXFwvdmlkZW8oXFxTKykubTN1OCkvZztcclxuICAgICAgICAgICAgd2hpbGUgKChjYXB0dXJlQXJyYXkgPSBSRUdFWC5leGVjKHRleHQpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcXVhbGl0eVVybFNwbGl0LnB1c2goeyBxdWFsaXR5OiBjYXB0dXJlQXJyYXlbMV0sIHVybDogY2FwdHVyZUFycmF5WzJdIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbUxpc3QgPSBuZXcgc3RyZWFtU2VydmVyX3R5cGVzXzEuc3RyZWFtU2VydmVyKHsgdHlwZTogdHlwZSwgdXJsTGlzdDogcXVhbGl0eVVybFNwbGl0LCBzaWc6IHNpZyB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJMaXN0LnB1c2goc3RyZWFtTGlzdCk7XHJcbiAgICAgICAgICAgIGlmICghc2lnKSB7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnNpZ25hdHVyZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFJFR0VYID0gL3ZpZGVvLXdlYXZlci4oLiopLmhscy50dHZudy5uZXRcXC92MVxcL3BsYXlsaXN0XFwvKC4qKS5tM3U4JC9nbTtcclxuICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+IHguc2lnID09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKCh4KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBSRUdFWC5leGVjKHgudXJsTGlzdFswXS51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgZmV0Y2goXCJodHRwczovL2p1cHRlci5nYS9obHMvdjIvc2lnL1wiICsgbWF0Y2hbMl0gKyBcIi9cIiArIG1hdGNoWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguc2lnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vYWRkIGEgbmV3IHBsYXllciBzdHJlYW0gZXh0ZXJuYWxcclxuICAgIGV4dGVybmFsUGxheWVyKGN1c3RvbUlnbm9yZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKGN1c3RvbUlnbm9yZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFR1bm5lbCA9IHRoaXMudHVubmVsWzBdO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLkxvZ1ByaW50KFwiRXh0ZXJuYWwgU2VydmVyOiBMb2FkaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBnbG9iYWwucmVhbEZldGNoKHRoaXMuY3VycmVudFR1bm5lbC5yZXBsYWNlKFwie2NoYW5uZWxuYW1lfVwiLCB0aGlzLmNoYW5uZWxOYW1lKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2VydmVyIHByb3h5IHJldHVybiBlcnJvciBvciBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0geWllbGQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLkxvZ1ByaW50KFwiRXh0ZXJuYWwgU2VydmVyOiBPS1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3RyZWFtTGluayh0ZXh0LCBzdHJlYW1fdHlwZV8xLnN0cmVhbXMuZXh0ZXJuYWwubmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLkxvZ1ByaW50KFwic2VydmVyIHByb3h5IHJldHVybiBlcnJvciBvciBub3QgZm91bmQgXCIgKyB0aGlzLmN1cnJlbnRUdW5uZWwpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLkxvZ1ByaW50KGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL2NyZWF0ZSBhIG5ldyBzdHJlYW0gYWNjZXNzXHJcbiAgICBzdHJlYW1BY2Nlc3Moc3RyZWFtKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKHN0cmVhbS5uYW1lID09IHN0cmVhbV90eXBlXzEuc3RyZWFtcy5leHRlcm5hbC5uYW1lKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHRoaXMuZXh0ZXJuYWxQbGF5ZXIoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gJ3F1ZXJ5IFBsYXliYWNrQWNjZXNzVG9rZW5fVGVtcGxhdGUoJGxvZ2luOiBTdHJpbmchLCAkaXNMaXZlOiBCb29sZWFuISwgJHZvZElEOiBJRCEsICRpc1ZvZDogQm9vbGVhbiEsICRwbGF5ZXJUeXBlOiBTdHJpbmchKSB7ICBzdHJlYW1QbGF5YmFja0FjY2Vzc1Rva2VuKGNoYW5uZWxOYW1lOiAkbG9naW4sIHBhcmFtczoge3BsYXRmb3JtOiBcIndlYlwiLCBwbGF5ZXJCYWNrZW5kOiBcIm1lZGlhcGxheWVyXCIsIHBsYXllclR5cGU6ICRwbGF5ZXJUeXBlfSkgQGluY2x1ZGUoaWY6ICRpc0xpdmUpIHsgICAgdmFsdWUgICAgc2lnbmF0dXJlICAgIF9fdHlwZW5hbWUgIH0gIHZpZGVvUGxheWJhY2tBY2Nlc3NUb2tlbihpZDogJHZvZElELCBwYXJhbXM6IHtwbGF0Zm9ybTogXCJ3ZWJcIiwgcGxheWVyQmFja2VuZDogXCJtZWRpYXBsYXllclwiLCBwbGF5ZXJUeXBlOiAkcGxheWVyVHlwZX0pIEBpbmNsdWRlKGlmOiAkaXNWb2QpIHsgICAgdmFsdWUgICAgc2lnbmF0dXJlICAgIF9fdHlwZW5hbWUgIH19JztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uTmFtZTogXCJQbGF5YmFja0FjY2Vzc1Rva2VuX1RlbXBsYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luOiB0aGlzLmNoYW5uZWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZvZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvZElEOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJUeXBlOiBzdHJlYW0ucGxheWVyVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdxbCA9IHlpZWxkIGdsb2JhbC5yZWFsRmV0Y2goXCJodHRwczovL2dxbC50d2l0Y2gudHYvZ3FsXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDbGllbnQtSURcIjogXCJraW1uZTc4a3gzbmN4NmJyZ280bXY2d2tpNWgxa29cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJlYW1EYXRhQWNjZXNzID0geWllbGQgZ3FsLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly91c2hlci50dHZudy5uZXQvYXBpL2NoYW5uZWwvaGxzL1wiICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxOYW1lICtcclxuICAgICAgICAgICAgICAgICAgICBcIi5tM3U4P2FsbG93X3NvdXJjZT10cnVlJmZhc3RfYnJlYWQ9dHJ1ZSZwPVwiICtcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpICtcclxuICAgICAgICAgICAgICAgICAgICBcIiZwbGF5ZXJfYmFja2VuZD1tZWRpYXBsYXllciZwbGF5bGlzdF9pbmNsdWRlX2ZyYW1lcmF0ZT10cnVlJnJlYXNzaWdubWVudHNfc3VwcG9ydGVkPWZhbHNlJnNpZz1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtRGF0YUFjY2Vzcy5kYXRhLnN0cmVhbVBsYXliYWNrQWNjZXNzVG9rZW4uc2lnbmF0dXJlICtcclxuICAgICAgICAgICAgICAgICAgICBcIiZzdXBwb3J0ZWRfY29kZWNzPWF2YzEmdG9rZW49XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbURhdGFBY2Nlc3MuZGF0YS5zdHJlYW1QbGF5YmFja0FjY2Vzc1Rva2VuLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IHlpZWxkICh5aWVsZCBnbG9iYWwucmVhbEZldGNoKHVybCkpLnRleHQoKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5Mb2dQcmludChcIlNlcnZlciBsb2FkZWQgXCIgKyBzdHJlYW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFN0cmVhbUxpbmsodGV4dCwgc3RyZWFtLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRTdHJlYW1TZXJ2ZXJzQnlTdHJlYW1UeXBlKGFjY2Vzc1R5cGUsIHF1YWxpdHkpIHtcclxuICAgICAgICAvL2ZpbHRlciBhbGwgc2VydmVyIGJ5IHR5cGVcclxuICAgICAgICBjb25zdCBzZXJ2ZXJzID0gdGhpcy5zZXJ2ZXJMaXN0LmZpbHRlcigoeCkgPT4geC50eXBlID09IGFjY2Vzc1R5cGUubmFtZSk7XHJcbiAgICAgICAgaWYgKCFzZXJ2ZXJzKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgLy9maWx0ZXIgYWxsIHNlcnZlciB1cmwgYnkgcXVhbGl0eSBvciBiZXN0cXVhbGl0eVxyXG4gICAgICAgIGNvbnN0IHN0cmVhbVVybExpc3QgPSBzZXJ2ZXJzLm1hcCgoeCkgPT4geC5maW5kQnlRdWFsaXR5KHF1YWxpdHkpKS5maWx0ZXIoKHgpID0+IHggIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgcmV0dXJuICFzdHJlYW1VcmxMaXN0Lmxlbmd0aCA/IHNlcnZlcnMubWFwKCh4KSA9PiB4LmJlc3RRdWFsaXR5KCkpIDogc3RyZWFtVXJsTGlzdDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0cmVhbSA9IFN0cmVhbTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSeVpXRnRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzTjBjbVZoYlM5emRISmxZVzB1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN08wRkJRVUVzYjBOQlFXbERPMEZCUTJwRExIbEVRVUU0UkR0QlFVTTVSQ3gxUlVGQk1FVTdRVUZGTVVVc1RVRkJZU3hOUVVGTk8wbEJVV3BDTEZsQlFWa3NWMEZCYlVJc1JVRkJSU3hUUVVGcFFpeEZRVUZGTzFGQlVIQkVMR1ZCUVZVc1IwRkJiVUlzUlVGQlJTeERRVUZETzFGQlEyaERMRkZCUVVjc1IwRkJVU3hKUVVGSkxGTkJRVWNzUlVGQlJTeERRVUZETzFGQlEzSkNMR2RDUVVGWExFZEJRVmNzUlVGQlJTeERRVUZETzFGQlJYcENMRmRCUVUwc1IwRkJSeXhEUVVGRExEWkRRVUUyUXl4RlFVRkZMRFpEUVVFMlF5eERRVUZETEVOQlFVTTdVVUZEZUVjc2EwSkJRV0VzUjBGQlZ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJORVYyUXl4elFrRkJhVUlzUjBGQlJ5eEhRVUZUTEVWQlFVVTdXVUZETjBJc1NVRkJTU3hEUVVGRExFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMSEZDUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlR0blFrRkRhRVFzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRoUVVNelFqdFJRVU5JTEVOQlFVTXNRMEZCUVN4RFFVRkRPMUZCTjBWQkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUXk5Q0xFbEJRVWtzVFVGQlRUdFpRVUZGTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1RVRkJUU3hEUVVGRE8wbEJRekZETEVOQlFVTTdTVUZGUkN4dlJFRkJiMFE3U1VGRE9VTXNZVUZCWVN4RFFVRkRMRWxCUVZrc1JVRkJSU3hKUVVGSkxFZEJRVWNzVDBGQlR5eEZRVUZGTEVkQlFVY3NSMEZCUnl4SlFVRkpPenRaUVVNeFJDeE5RVUZOTEdWQlFXVXNSMEZCYVVJc1JVRkJSU3hEUVVGRE8xbEJRM3BETEVsQlFVa3NXVUZCYjBNc1EwRkJRenRaUVVWNlF5eE5RVUZOTEV0QlFVc3NSMEZCUnl4eFJrRkJjVVlzUTBGQlF6dFpRVVZ3Unl4UFFVRlBMRU5CUVVNc1dVRkJXU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1MwRkJTeXhKUVVGSkxFVkJRVVU3WjBKQlEycEVMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeFBRVUZQTEVWQlFVVXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRekZGTzFsQlJVUXNUVUZCVFN4VlFVRlZMRWRCUVdsQ0xFbEJRVWtzYVVOQlFWa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZGTEdWQlFXVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4wUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0WlFVVnFReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTzJkQ1FVTlNMRTFCUVUwc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzJGQlEzaENPMWxCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU03VVVGRFpDeERRVUZETzB0QlFVRTdTVUZGU3l4VFFVRlRPenRaUVVOaUxFMUJRVTBzUzBGQlN5eEhRVUZITERaRVFVRTJSQ3hEUVVGRE8xbEJSVFZGTEUxQlFVMHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJUdG5Ra0ZETlVJc1NVRkJTU3hEUVVGRExGVkJRVlU3Y1VKQlExb3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJRenR4UWtGRGJFTXNUMEZCVHl4RFFVRkRMRU5CUVU4c1EwRkJUU3hGUVVGRkxFVkJRVVU3YjBKQlEzaENMRTFCUVUwc1MwRkJTeXhIUVVFeVFpeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2IwSkJRMjVGTEVsQlFVa3NTMEZCU3l4RlFVRkZPM2RDUVVOVUxFbEJRVWs3TkVKQlEwWXNUVUZCVFN4TFFVRkxMRU5CUVVNc0swSkJRU3RDTEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenMwUWtGRGVrVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU03TkVKQlEySXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8zbENRVU5tTzNkQ1FVRkRMRmRCUVUwN05FSkJRMDRzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPM2xDUVVOb1FqdHhRa0ZEUmp0NVFrRkJUVHQzUWtGRFRDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN2NVSkJRMmhDTzJkQ1FVTklMRU5CUVVNc1EwRkJRU3hEUVVGRE8yOUNRVU5HTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOdVFpeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTk1MRU5CUVVNN1MwRkJRVHRKUVVWRUxHdERRVUZyUXp0SlFVTTFRaXhqUVVGakxFTkJRVU1zWlVGQmQwSXNTMEZCU3pzN1dVRkRhRVFzU1VGQlNTeFpRVUZaTzJkQ1FVRkZMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFJDeEpRVUZKTzJkQ1FVTkdMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zTUVKQlFUQkNMRU5CUVVNc1EwRkJRenRuUWtGRE5VTXNUVUZCVFN4UlFVRlJMRWRCUVdFc1RVRkJUU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1QwRkJUeXhEUVVGRExHVkJRV1VzUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRmFrZ3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFVkJRVVU3YjBKQlEyaENMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zZDBOQlFYZERMRU5CUVVNc1EwRkJRenRwUWtGRE0wUTdaMEpCUlVRc1RVRkJUU3hKUVVGSkxFZEJRVmNzVFVGQlRTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1owSkJSVE5ETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXp0blFrRkZka01zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRVZCUVVVc2NVSkJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJSV2hFTEU5QlFVOHNTVUZCU1N4RFFVRkRPMkZCUTJJN1dVRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdG5Ra0ZEVml4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExIbERRVUY1UXl4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dG5Ra0ZEYUVZc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRia0lzVDBGQlR5eExRVUZMTEVOQlFVTTdZVUZEWkR0UlFVTklMRU5CUVVNN1MwRkJRVHRKUVZGRUxEUkNRVUUwUWp0SlFVTjBRaXhaUVVGWkxFTkJRVU1zVFVGQmEwSTdPMWxCUTI1RExFbEJRVWtzVFVGQlRTeERRVUZETEVsQlFVa3NTVUZCU1N4eFFrRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTzJkQ1FVRkZMRTlCUVU4c1RVRkJUU3hKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdXVUZGTjBVc1NVRkJTVHRuUWtGRFJpeE5RVUZOTEV0QlFVc3NSMEZEVkN4MVprRkJkV1lzUTBGQlF6dG5Ra0ZETVdZc1RVRkJUU3hKUVVGSkxFZEJRVWM3YjBKQlExZ3NZVUZCWVN4RlFVRkZMRGhDUVVFNFFqdHZRa0ZETjBNc1MwRkJTeXhGUVVGRkxFdEJRVXM3YjBKQlExb3NVMEZCVXl4RlFVRkZPM2RDUVVOVUxFMUJRVTBzUlVGQlJTeEpRVUZKTzNkQ1FVTmFMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ6dDNRa0ZEZGtJc1MwRkJTeXhGUVVGRkxFdEJRVXM3ZDBKQlExb3NTMEZCU3l4RlFVRkZMRVZCUVVVN2QwSkJRMVFzVlVGQlZTeEZRVUZGTEUxQlFVMHNRMEZCUXl4VlFVRlZPM0ZDUVVNNVFqdHBRa0ZEUml4RFFVRkRPMmRDUVVWR0xFMUJRVTBzUjBGQlJ5eEhRVUZITEUxQlFVMHNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXd5UWtGQk1rSXNSVUZCUlR0dlFrRkRPVVFzVFVGQlRTeEZRVUZGTEUxQlFVMDdiMEpCUTJRc1QwRkJUeXhGUVVGRkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEdkRFFVRm5ReXhGUVVGRk8yOUNRVU14UkN4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTTdhVUpCUXpOQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZEU0N4TlFVRk5MR2RDUVVGblFpeEhRVUZSTEUxQlFVMHNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8yZENRVVV2UXl4TlFVRk5MRWRCUVVjc1IwRkRVQ3d3UTBGQk1FTTdiMEpCUXpGRExFbEJRVWtzUTBGQlF5eFhRVUZYTzI5Q1FVTm9RaXcwUTBGQk5FTTdiMEpCUXpWRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF6dHZRa0ZETDBJc1owZEJRV2RITzI5Q1FVTm9SeXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNVMEZCVXp0dlFrRkRla1FzSzBKQlFTdENPMjlDUVVNdlFpeG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1MwRkJTeXhEUVVGRE8yZENRVU40UkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdaMEpCUlhoRUxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVWb1JDeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUlhSRExFOUJRVThzU1VGQlNTeERRVUZETzJGQlEySTdXVUZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSVHRuUWtGRFZpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5tTEU5QlFVOHNTMEZCU3l4RFFVRkRPMkZCUTJRN1VVRkRTQ3hEUVVGRE8wdEJRVUU3U1VGRlJDdzBRa0ZCTkVJc1EwRkJReXhWUVVGelFpeEZRVUZGTEU5QlFXVTdVVUZEYkVVc01rSkJRVEpDTzFGQlF6TkNMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU42UlN4SlFVRkpMRU5CUVVNc1QwRkJUenRaUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETzFGQlJYaENMR2xFUVVGcFJEdFJRVU5xUkN4TlFVRk5MR0ZCUVdFc1IwRkJSeXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCWlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zWVVGQllTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGcFFpeERRVUZETzFGQlEyaEpMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNZVUZCWVN4RFFVRkRPMGxCUTNKR0xFTkJRVU03UTBGRFJqdEJRV3BLUkN4M1FrRnBTa01pZlE9PSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC53b3JrZXIudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=