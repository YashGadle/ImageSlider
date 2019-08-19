"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
var _a = react_native_1.Dimensions.get('window'), width = _a.width, height = _a.height;
var dividerWidth = 3;
var speed = 0.25;
var FlatList_ = react_native_1.Animated.createAnimatedComponent(react_native_1.FlatList);
var screens = [
    ['#f46b45', '#eea849'],
    ['#CCCCB2', '#757519'],
    ['#2c3e50', '#3498db']
];
var images = [
    'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-12.jpg',
    'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-01.jpg',
    'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-02.jpg',
    'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-11.jpg',
    'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-10.jpg',
    'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-17.jpg',
    'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-24.jpg',
    'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-15.jpg'
];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.scrollX = new react_native_1.Animated.Value(0);
        // this.getPhotos(100);
        _this.state = {
            photos: []
        };
        return _this;
    }
    App.prototype.getPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var granted, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, react_native_1.PermissionsAndroid.request(react_native_1.PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
                                title: 'External Storage Permission',
                                message: 'Need access to your storage. Only read permissions required.'
                            })];
                    case 1:
                        granted = _a.sent();
                        if (granted === react_native_1.PermissionsAndroid.RESULTS.GRANTED) {
                            console.log('granted');
                        }
                        else {
                            console.log('denied');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.warn(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.getPhotos = function (num) {
        var _this = this;
        this.getPermission();
        react_native_1.CameraRoll.getPhotos({ first: num })
            .then(function (res) {
            _this.setState({ photos: res.edges });
        })
            .catch(function (err) {
            console.warn(err);
        });
    };
    App.prototype.renderScreen = function (item, i) {
        var parallax = Math.abs(width * speed - width - dividerWidth);
        var totalWidth = width + dividerWidth;
        return (<react_native_1.View style={{
            flex: 1,
            zIndex: -i,
            flexDirection: 'row',
            overflow: 'hidden'
        }}>
				<react_native_1.Animated.View key={i} style={{
            backgroundColor: 'black',
            transform: [
                {
                    translateX: this.scrollX.interpolate({
                        inputRange: [
                            (i - 1) * totalWidth,
                            i * totalWidth,
                            (i + 1) * totalWidth
                        ],
                        outputRange: [0, 0, parallax],
                        extrapolate: 'clamp'
                    })
                }
            ]
        }}>
					{true ? (<react_native_1.Image source={{ uri: item }} style={{ width: width, height: height }} resizeMode="cover"/>) : (<react_native_linear_gradient_1.default start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={item} style={{
            width: width,
            height: height,
            borderRightColor: 'black',
            borderStyle: 'solid',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
							<react_native_1.Text>Screen {i}</react_native_1.Text>
						</react_native_linear_gradient_1.default>)}
				</react_native_1.Animated.View>
				<react_native_1.View style={{
            width: dividerWidth,
            height: height,
            backgroundColor: 'black'
        }}/>
			</react_native_1.View>);
    };
    App.prototype.render = function () {
        var _this = this;
        return (<react_native_1.View style={styles.container} pointerEvents="box-none">
				<react_native_1.StatusBar hidden/>
				<FlatList_ horizontal pagingEnabled scrollEventThrottle={1} showsHorizontalScrollIndicator={false} style={{ width: width + dividerWidth, height: height }} onScroll={react_native_1.Animated.event([
            {
                nativeEvent: {
                    contentOffset: { x: this.scrollX }
                }
            }
        ], { useNativeDriver: true })} data={images} renderItem={function (_a) {
            var item = _a.item, index = _a.index;
            return _this.renderScreen(item, index);
        }} keyExtractor={function (item, index) { return index.toString(); }}/>
			</react_native_1.View>);
    };
    return App;
}(React.Component));
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
});
