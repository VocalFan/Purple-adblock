import { Controller } from "./decorator/controller.decorator";
import { Fetch, Message } from "./decorator/handler.decorator";
import { setting } from "./player/interface/setting.interface";
import { Player } from "./player/player";

@Controller()
export class appController {
  getQuality = () => global.postMessage({ type: "getQuality" });
  getSettings = () => global.postMessage({ type: "getSettings" });
  pause = () => global.postMessage({ type: "pause" });
  play = () => global.postMessage({ type: "play" });
  pauseAndPlay = () => {
    this.pause();
    this.play();
  };

  constructor(private readonly appService: Player) {
    this.getSettings();
    global.onEventMessage = (e: any) => {
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

  @Fetch("usher.ttvnw.net/api/channel/hls/", "picture-by-picture")
  async onChannel(url: string, options: any): Promise<Response> {
    const response: Response = await global.realFetch(url, options);
    if (!response.ok) return response;

    return await response.text().then(async (text: string) => {
      await this.appService.onStartChannel(url, text);
      return new Response(text);
    });
  }

  @Fetch("hls.ttvnw.net/v1/playlist/")
  async onFetch(url: string, options: any): Promise<Response> {
    return await realFetch(url, options)
      .then(async (response: Response) => response.text())
      .then(async (text: string) => {
        await this.appService.onfetch(url, text);
        const playlist = this.appService.currentStream().hls.getPlaylist();
        return new Response(playlist as any);
      });
  }

  @Fetch("picture-by-picture")
  async onChannelPicture(url: string, options: any): Promise<Response> {
    return new Response();
  }

  @Message("setSettings")
  async setSettings(data: any) {
    this.appService.settings = data.value;
  }

  @Message("setQuality")
  async setQuality(data: any) {
    this.appService.quality = data.value;
  }
}
