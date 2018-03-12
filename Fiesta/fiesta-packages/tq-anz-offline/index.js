var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
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
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { smartstore, smartsync } from "react-native-force";
export default class TqanzOffline {
  constructor() {}
  init(soupName, indexSpecs, successCallback, errorCallback) {
    return __awaiter(this, void 0, void 0, function*() {
      return smartstore.registerSoup(
        soupName,
        indexSpecs,
        successCallback,
        errorCallback
      );
    });
  }
  soupExists(soupName, successCallback, errorCallback) {
    return __awaiter(this, void 0, void 0, function*() {
      smartstore.soupExists(soupName, successCallback, errorCallback);
    });
  }
  syncDown(callback) {
    return __awaiter(this, void 0, void 0, function*() {
      smartsync.syncDown(callback);
      return [];
    });
  }
  reSync(callback) {
    return __awaiter(this, void 0, void 0, function*() {
      smartsync.reSync(callback);
      return [];
    });
  }
  syncUp(callback) {
    return __awaiter(this, void 0, void 0, function*() {
      smartsync.syncUp(callback);
      return [];
    });
  }
  syncData(callback) {
    return __awaiter(this, void 0, void 0, function*() {
      smartsync.syncData(callback);
      return [];
    });
  }
}
//# sourceMappingURL=index.js.map
