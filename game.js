let r = Math.round(1137.7777777777778);
let h = r / 0x2 - 0x96;
function l(_0x2b5712) {
  r = _0x2b5712;
  h = _0x2b5712 / 0x2 - 0x96;
}
const y = "solid";
const x = "hazard";
const _ = "portal_fly";
const w = "portal_cube";
const Bn = "portal_gravity_flip";
const kn = "portal_gravity_normal";
const Tn = "speed_portal";
function b(_0x3ed2c6) {
  return 0x1cc - _0x3ed2c6;
}
let S = Phaser.BlendModes.ADD;
let E = Phaser.BlendModes.NORMAL;
const LEVEL_META = {
  0x1: {
    id: 0x1,
    name: "Stereo Madness",
    songFile: "StereoMadness.mp3",
    songKey: "stereo_madness"
  },
  0x2: {
    id: 0x2,
    name: "Back on Track",
    songFile: "BackOnTrack.mp3",
    songKey: "song_2"
  },
  0x3: {
    id: 0x3,
    name: "Polargeist",
    songFile: "Polargeist.mp3",
    songKey: "song_3"
  },
  0x4: {
    id: 0x4,
    name: "Dry Out",
    songFile: "DryOut.mp3",
    songKey: "song_4"
  },
  0x5: {
    id: 0x5,
    name: "Base After Base",
    songFile: "BaseAfterBase.mp3",
    songKey: "song_5"
  },
  0x6: {
    id: 0x6,
    name: "Can't Let Go",
    songFile: "CantLetGo.mp3",
    songKey: "song_6"
  },
  0x7: {
    id: 0x7,
    name: "Jumper",
    songFile: "Jumper.mp3",
    songKey: "song_7"
  },
  0x8: {
    id: 0x8,
    name: "Time Machine",
    songFile: "TimeMachine.mp3",
    songKey: "song_8"
  },
  0x9: {
    id: 0x9,
    name: "Cycles",
    songFile: "Cycles.mp3",
    songKey: "song_9"
  },
  0xa: {
    id: 0xa,
    name: "xStep",
    songFile: "xStep.mp3",
    songKey: "song_10"
  },
  0xb: {
    id: 0xb,
    name: "Clutterfunk",
    songFile: "Clutterfunk.mp3",
    songKey: "song_11"
  },
  0xc: {
    id: 0xc,
    name: "Theory of Everything",
    songFile: "TheoryOfEverything.mp3",
    songKey: "song_12"
  },
  0xd: {
    id: 0xd,
    name: "Electroman Adventures",
    songFile: "Electroman.mp3",
    songKey: "song_13"
  },
  0xe: {
    id: 0xe,
    name: "Clubstep",
    songFile: "Clubstep.mp3",
    songKey: "song_14"
  },
  0xf: {
    id: 0xf,
    name: "Electrodynamix",
    songFile: "Electrodynamix.mp3",
    songKey: "song_15"
  },
  0x10: {
    id: 0x10,
    name: "Hexagon Force",
    songFile: "HexagonForce.mp3",
    songKey: "song_16"
  },
  0x11: {
    id: 0x11,
    name: "Blast Processing",
    songFile: "BlastProcessing.mp3",
    songKey: "song_17"
  },
  0x12: {
    id: 0x12,
    name: "Theory of Everything 2",
    songFile: "TheoryOfEverything2.mp3",
    songKey: "song_18"
  },
  0x13: {
    id: 0x13,
    name: "Geometrical Dominator",
    songFile: "GeometricalDominator.mp3",
    songKey: "song_19"
  },
  0x14: {
    id: 0x14,
    name: "Deadlocked",
    songFile: "Deadlocked.mp3",
    songKey: "song_20"
  },
  0x15: {
    id: 0x15,
    name: "Fingerdash",
    songFile: "Fingerdash.mp3",
    songKey: "song_21"
  },
  0x16: {
    id: 0x16,
    name: "Dash",
    songFile: "Dash.mp3",
    songKey: "song_22"
  }
};
function Nn(_0x4f03fd) {
  if (!_0x4f03fd) {
    return 0x1;
  }
  let _0x7e3e8f = /assets\/levels\/(\d+)\.txt$/i.exec(_0x4f03fd) || /assets\/(\d+)\.txt$/i.exec(_0x4f03fd) || /levels\/(\d+)\.txt$/i.exec(_0x4f03fd) || /(^|\D)(\d+)(?:\.txt)?$/i.exec(_0x4f03fd);
  if (!_0x7e3e8f) {
    return 0x1;
  }
  const _0x5f31f2 = parseInt(_0x7e3e8f[_0x7e3e8f.length - 0x1], 0xa);
  if (!Number.isFinite(_0x5f31f2)) {
    return 0x1;
  }
  return _0x5f31f2;
}
function Dn(_0x43031d) {
  const _0x5ac7d0 = Nn(_0x43031d);
  return LEVEL_META[_0x5ac7d0] || LEVEL_META[0x1];
}
function Gn(_0x3078fc) {
  const _0x4aa312 = Math.max(0x1, Math.min(0x3b, parseInt(_0x3078fc || '1', 0xa) || 0x1));
  return "game_bg_" + String(_0x4aa312).padStart(0x2, '0');
}
function Pn() {
  const _0x413273 = "assets/1.txt";
  try {
    const _0x4a5094 = new URLSearchParams(window.location.search).get("level");
    if (!_0x4a5094) {
      return _0x413273;
    }
    const _0x1f0f1f = _0x4a5094.trim();
    if (/^\d+$/.test(_0x1f0f1f)) {
      return "assets/levels/" + _0x1f0f1f + ".txt";
    }
    if (/^[A-Za-z0-9_-]+$/.test(_0x1f0f1f)) {
      return "assets/levels/" + _0x1f0f1f + ".txt";
    }
    if (/^[A-Za-z0-9_-]+\.txt$/.test(_0x1f0f1f)) {
      return "assets/levels/" + _0x1f0f1f;
    }
    if (/^levels\/[A-Za-z0-9_-]+\.txt$/.test(_0x1f0f1f)) {
      return "assets/" + _0x1f0f1f;
    }
    if (/^assets\/levels\/[A-Za-z0-9_-]+\.txt$/.test(_0x1f0f1f)) {
      return _0x1f0f1f;
    }
  } catch (_0x4955da) {}
  return _0x413273;
}
class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: "BootScene"
    });
  }
  ["preload"]() {
    !function (_0x3b96aa) {
      if (_0x3b96aa.renderer.type === Phaser.WEBGL) {
        let _0x47cabb = _0x3b96aa.renderer.gl;
        S = _0x3b96aa.renderer.addBlendMode([_0x47cabb.SRC_ALPHA, _0x47cabb.ONE], _0x47cabb.FUNC_ADD);
        E = _0x3b96aa.renderer.addBlendMode([_0x47cabb.DST_COLOR, _0x47cabb.ONE_MINUS_SRC_ALPHA], _0x47cabb.FUNC_ADD);
      }
    }(this.game);
    let _0x236029 = this.cameras.main.width;
    let _0x2a5a43 = this.cameras.main.height;
    let _0xa68e08 = 0.6 * _0x236029;
    let _0x1840c0 = this.add.rectangle(_0x236029 / 0x2, _0x2a5a43 / 0x2, _0xa68e08, 0x8, 0xff00).setOrigin(0.5, 0.5);
    _0x1840c0.scaleX = 0x0;
    this.load.on("progress", _0x374839 => {
      _0x1840c0.scaleX = _0x374839;
    });
    this.load.on("loaderror", _0x550fba => {});
    this.load.atlas("GJ_WebSheet", 'assets/GJ_WebSheet.png', 'assets/GJ_WebSheet.json');
    this.load.atlas("GJ_GameSheet", "assets/GJ_GameSheet.png", "assets/GJ_GameSheet.json");
    this.load.atlas("GJ_GameSheet02", "assets/GJ_GameSheet02.png", "assets/GJ_GameSheet02.json");
    this.load.atlas("GJ_GameSheet03", "assets/GJ_GameSheet03.png", "assets/GJ_GameSheet03.json");
    this.load.atlas("GJ_GameSheet04", "assets/GJ_GameSheet04.png", "assets/GJ_GameSheet04.json");
    this.load.atlas("GJ_GameSheetGlow", "assets/GJ_GameSheetGlow.png", "assets/GJ_GameSheetGlow.json");
    this.load.atlas("GJ_GameSheetEditor", "assets/GJ_GameSheetEditor.png", "assets/GJ_GameSheetEditor.json");
    this.load.image('bigFont', 'assets/bigFont.png');
    this.load.text("bigFontFnt", "assets/bigFont.fnt");
    this.load.image("goldFont", 'assets/goldFont.png');
    this.load.text('goldFontFnt', "assets/goldFont.fnt");
    for (let _0x2a9be3 = 0x1; _0x2a9be3 <= 0x16; _0x2a9be3++) {
      const _0x20ed8b = Gn(_0x2a9be3);
      const _0x4bca28 = "assets/game_bg_" + String(_0x2a9be3).padStart(0x2, '0') + "_001.png";
      this.load.image(_0x20ed8b, _0x4bca28);
    }
    this.load.image("sliderBar", 'assets/sliderBar.png');
    this.load.image('square04_001', "assets/square04_001.png");
    this.load.image("GJ_square02", "assets/GJ_square02.png");
    this.load.json("object_overrides", "assets/levels/object_overrides.json");
    const _0x4d7bd3 = Pn();
    const _0x57faeb = Dn(_0x4d7bd3);
    this.game.registry.set("selectedLevelMeta", _0x57faeb);
    this.game.registry.set("selectedLevelId", _0x57faeb.id);
    this.game.registry.set("selectedSongKey", _0x57faeb.songKey);
    this.game.registry.set("selectedBgKey", Gn(_0x57faeb.id));
    document.title = "Geometry Dash - " + _0x57faeb.name;
    this.game.registry.set("requestedLevelPath", _0x4d7bd3);
    this.load.text("level_selected", _0x4d7bd3);
    this.load.text("level_1", "assets/1.txt");
    for (const _0x52f8cc of Object.values(LEVEL_META)) {
      this.load.audio(_0x52f8cc.songKey, "assets/" + _0x52f8cc.songFile);
    }
    this.load.audio('explode_11', "assets/explode_11.ogg");
    this.load.audio('endStart_02', 'assets/endStart_02.ogg');
    this.load.audio("playSound_01", 'assets/playSound_01.ogg');
    this.load.audio("quitSound_01", "assets/quitSound_01.ogg");
    this.load.audio("highscoreGet02", "assets/highscoreGet02.ogg");
  }
  ["create"]() {
    this.cache.text.get("level_1");
    const _0x1362a5 = this.cache.text.get("bigFontFnt");
    if (_0x1362a5) {
      C(this, "bigFont", _0x1362a5);
    }
    const _0x9a7483 = this.cache.text.get("goldFontFnt");
    if (_0x9a7483) {
      C(this, "goldFont", _0x9a7483);
    }
    this.scene.start("GameScene");
  }
}
function C(_0x4e6e71, _0x5059cd, _0x3a0583) {
  const _0x4adbf2 = _0x4e6e71.textures.get(_0x5059cd);
  const _0x39d5fe = _0x4adbf2.source[0x0];
  const _0x177755 = _0x39d5fe.width;
  const _0x69dcd6 = _0x39d5fe.height;
  const _0x4bb3ff = {
    font: _0x5059cd,
    size: 0x0,
    lineHeight: 0x0,
    chars: {}
  };
  const _0x42b370 = [];
  for (const _0x4e81a8 of _0x3a0583.split("\n")) {
    const _0x4234e6 = _0x4e81a8.trim().split(/\s+/);
    if (!_0x4234e6.length) {
      continue;
    }
    const _0x485488 = _0x4234e6[0x0];
    const _0x2e29f1 = {};
    for (let _0x47b3a1 = 0x1; _0x47b3a1 < _0x4234e6.length; _0x47b3a1++) {
      const _0x4f1697 = _0x4234e6[_0x47b3a1].indexOf('=');
      if (_0x4f1697 >= 0x0) {
        _0x2e29f1[_0x4234e6[_0x47b3a1].slice(0x0, _0x4f1697)] = _0x4234e6[_0x47b3a1].slice(_0x4f1697 + 0x1).replace(/^"|"$/g, '');
      }
    }
    if ("info" === _0x485488) {
      _0x4bb3ff.size = parseInt(_0x2e29f1.size, 0xa);
    } else {
      if ("common" === _0x485488) {
        _0x4bb3ff.lineHeight = parseInt(_0x2e29f1.lineHeight, 0xa);
      } else {
        if ("char" === _0x485488) {
          const _0x1e73d6 = parseInt(_0x2e29f1.id, 0xa);
          const _0xa9d8ad = parseInt(_0x2e29f1.x, 0xa);
          const _0x38c0bc = parseInt(_0x2e29f1.y, 0xa);
          const _0x33bab4 = parseInt(_0x2e29f1.width, 0xa);
          const _0x5ab709 = parseInt(_0x2e29f1.height, 0xa);
          const _0xd0e50c = _0xa9d8ad / _0x177755;
          const _0x581858 = _0x38c0bc / _0x69dcd6;
          const _0x40168d = (_0xa9d8ad + _0x33bab4) / _0x177755;
          const _0x467b92 = (_0x38c0bc + _0x5ab709) / _0x69dcd6;
          _0x4bb3ff.chars[_0x1e73d6] = {
            x: _0xa9d8ad,
            y: _0x38c0bc,
            width: _0x33bab4,
            height: _0x5ab709,
            centerX: Math.floor(_0x33bab4 / 0x2),
            centerY: Math.floor(_0x5ab709 / 0x2),
            xOffset: parseInt(_0x2e29f1.xoffset, 0xa),
            yOffset: parseInt(_0x2e29f1.yoffset, 0xa),
            xAdvance: parseInt(_0x2e29f1.xadvance, 0xa),
            data: {},
            kerning: {},
            u0: _0xd0e50c,
            v0: _0x581858,
            u1: _0x40168d,
            v1: _0x467b92
          };
          if (0x0 !== _0x33bab4 && 0x0 !== _0x5ab709) {
            const _0x30b963 = String.fromCharCode(_0x1e73d6);
            const _0xe070ca = _0x4adbf2.add(_0x30b963, 0x0, _0xa9d8ad, _0x38c0bc, _0x33bab4, _0x5ab709);
            if (_0xe070ca) {
              _0xe070ca.setUVs(_0x33bab4, _0x5ab709, _0xd0e50c, _0x581858, _0x40168d, _0x467b92);
            }
          }
        } else if ("kerning" === _0x485488) {
          _0x42b370.push({
            first: parseInt(_0x2e29f1.first, 0xa),
            second: parseInt(_0x2e29f1.second, 0xa),
            amount: parseInt(_0x2e29f1.amount, 0xa)
          });
        }
      }
    }
  }
  for (const _0x48e531 of _0x42b370) if (_0x4bb3ff.chars[_0x48e531.second]) {
    _0x4bb3ff.chars[_0x48e531.second].kerning[_0x48e531.first] = _0x48e531.amount;
  }
  _0x4e6e71.cache.bitmapFont.add(_0x5059cd, {
    data: _0x4bb3ff,
    texture: _0x5059cd,
    frame: null
  });
}
class M {
  constructor() {
    this.reset();
  }
  ['reset']() {
    this.y = 0x1e;
    this.lastY = 0x1e;
    this.lastGroundPosY = 0x1e;
    this.yVelocity = 0x0;
    this.onGround = true;
    this.canJump = true;
    this.isJumping = false;
    this.gravityFlipped = false;
    this.isFlying = false;
    this.wasBoosted = false;
    this.collideTop = 0x0;
    this.collideBottom = 0x0;
    this.onCeiling = false;
    this.upKeyDown = false;
    this.upKeyPressed = false;
    this.isDead = false;
  }
}
const P = ["GJ_WebSheet", "GJ_GameSheet", "GJ_GameSheet02", "GJ_GameSheet03", "GJ_GameSheet04", "GJ_GameSheetGlow", "GJ_GameSheetEditor"];
function R(_0xfe584, _0x2da093) {
  for (let _0x15819b of P) if (_0xfe584.textures.exists(_0x15819b)) {
    if (_0xfe584.textures.get(_0x15819b).has(_0x2da093)) {
      return {
        atlas: _0x15819b,
        frame: _0x2da093
      };
    }
  }
  return null;
}
function L(_0x56b804, _0x310a42, _0x71aad, _0x4272eb) {
  let _0x4a4e1f = R(_0x56b804, _0x4272eb);
  return _0x4a4e1f ? _0x56b804.add.image(_0x310a42, _0x71aad, _0x4a4e1f.atlas, _0x4a4e1f.frame) : _0x56b804.textures.exists(_0x4272eb) ? _0x56b804.add.image(_0x310a42, _0x71aad, _0x4272eb) : null;
}
class O {
  constructor(_0x237587, _0x2693e7, _0x3e6e3c, _0x4adabc, _0x36363d) {
    this.type = _0x237587;
    this.x = _0x2693e7;
    this.y = _0x3e6e3c;
    this.w = _0x4adabc;
    this.h = _0x36363d;
    this.activated = false;
  }
}
function F(_0x549766) {
  let _0x251608 = _0x549766.length;
  for (; --_0x251608 >= 0x0;) {
    _0x549766[_0x251608] = 0x0;
  }
}
const N = new Uint8Array([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x2, 0x3, 0x3, 0x3, 0x3, 0x4, 0x4, 0x4, 0x4, 0x5, 0x5, 0x5, 0x5, 0x0]);
const X = new Uint8Array([0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x7, 0x8, 0x8, 0x9, 0x9, 0xa, 0xa, 0xb, 0xb, 0xc, 0xc, 0xd, 0xd]);
const Y = new Uint8Array([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x2, 0x3, 0x7]);
const U = new Uint8Array([0x10, 0x11, 0x12, 0x0, 0x8, 0x7, 0x9, 0x6, 0xa, 0x5, 0xb, 0x4, 0xc, 0x3, 0xd, 0x2, 0xe, 0x1, 0xf]);
const z = new Array(0x240);
F(z);
const G = new Array(0x3c);
F(G);
const W = new Array(0x200);
F(W);
const V = new Array(0x100);
F(V);
const H = new Array(0x1d);
F(H);
const j = new Array(0x1e);
function q(_0x307b47, _0x789fa6, _0x3f395e, _0x21c0e4, _0x5b8f62) {
  this.static_tree = _0x307b47;
  this.extra_bits = _0x789fa6;
  this.extra_base = _0x3f395e;
  this.elems = _0x21c0e4;
  this.max_length = _0x5b8f62;
  this.has_stree = _0x307b47 && _0x307b47.length;
}
let K;
let Z;
let J;
function Q(_0x4fd045, _0x2b9fbb) {
  this.dyn_tree = _0x4fd045;
  this.max_code = 0x0;
  this.stat_desc = _0x2b9fbb;
}
F(j);
const $ = _0xb9568e => _0xb9568e < 0x100 ? W[_0xb9568e] : W[0x100 + (_0xb9568e >>> 0x7)];
const tt = (_0x5c19b7, _0x54daf2) => {
  _0x5c19b7.pending_buf[_0x5c19b7.pending++] = 0xff & _0x54daf2;
  _0x5c19b7.pending_buf[_0x5c19b7.pending++] = _0x54daf2 >>> 0x8 & 0xff;
};
const et = (_0x5ead20, _0x3da7df, _0x2234f0) => {
  if (_0x5ead20.bi_valid > 0x10 - _0x2234f0) {
    _0x5ead20.bi_buf |= _0x3da7df << _0x5ead20.bi_valid & 0xffff;
    tt(_0x5ead20, _0x5ead20.bi_buf);
    _0x5ead20.bi_buf = _0x3da7df >> 0x10 - _0x5ead20.bi_valid;
    _0x5ead20.bi_valid += _0x2234f0 - 0x10;
  } else {
    _0x5ead20.bi_buf |= _0x3da7df << _0x5ead20.bi_valid & 0xffff;
    _0x5ead20.bi_valid += _0x2234f0;
  }
};
const it = (_0x642173, _0x1f3fba, _0x394021) => {
  et(_0x642173, _0x394021[0x2 * _0x1f3fba], _0x394021[0x2 * _0x1f3fba + 0x1]);
};
const st = (_0x1e4d1b, _0x3ef2a4) => {
  let _0x306312 = 0x0;
  do {
    _0x306312 |= 0x1 & _0x1e4d1b;
    _0x1e4d1b >>>= 0x1;
    _0x306312 <<= 0x1;
  } while (--_0x3ef2a4 > 0x0);
  return _0x306312 >>> 0x1;
};
const rt = (_0x399b03, _0x258fad, _0xe57e01) => {
  const _0x8d102b = new Array(0x10);
  let _0x34ed87;
  let _0x53fb08;
  let _0x5cbc9e = 0x0;
  for (_0x34ed87 = 0x1; _0x34ed87 <= 0xf; _0x34ed87++) {
    _0x5cbc9e = _0x5cbc9e + _0xe57e01[_0x34ed87 - 0x1] << 0x1;
    _0x8d102b[_0x34ed87] = _0x5cbc9e;
  }
  for (_0x53fb08 = 0x0; _0x53fb08 <= _0x258fad; _0x53fb08++) {
    let _0xe7b8e5 = _0x399b03[0x2 * _0x53fb08 + 0x1];
    if (0x0 !== _0xe7b8e5) {
      _0x399b03[0x2 * _0x53fb08] = st(_0x8d102b[_0xe7b8e5]++, _0xe7b8e5);
    }
  }
};
const nt = _0x560369 => {
  let _0x45f934;
  for (_0x45f934 = 0x0; _0x45f934 < 0x11e; _0x45f934++) {
    _0x560369.dyn_ltree[0x2 * _0x45f934] = 0x0;
  }
  for (_0x45f934 = 0x0; _0x45f934 < 0x1e; _0x45f934++) {
    _0x560369.dyn_dtree[0x2 * _0x45f934] = 0x0;
  }
  for (_0x45f934 = 0x0; _0x45f934 < 0x13; _0x45f934++) {
    _0x560369.bl_tree[0x2 * _0x45f934] = 0x0;
  }
  _0x560369.dyn_ltree[0x200] = 0x1;
  _0x560369.opt_len = _0x560369.static_len = 0x0;
  _0x560369.sym_next = _0x560369.matches = 0x0;
};
const at = _0x50db6a => {
  if (_0x50db6a.bi_valid > 0x8) {
    tt(_0x50db6a, _0x50db6a.bi_buf);
  } else if (_0x50db6a.bi_valid > 0x0) {
    _0x50db6a.pending_buf[_0x50db6a.pending++] = _0x50db6a.bi_buf;
  }
  _0x50db6a.bi_buf = 0x0;
  _0x50db6a.bi_valid = 0x0;
};
const ot = (_0x7e392f, _0x431876, _0x48d103, _0x594dcb) => {
  const _0x24abca = 0x2 * _0x431876;
  const _0x1c279c = 0x2 * _0x48d103;
  return _0x7e392f[_0x24abca] < _0x7e392f[_0x1c279c] || _0x7e392f[_0x24abca] === _0x7e392f[_0x1c279c] && _0x594dcb[_0x431876] <= _0x594dcb[_0x48d103];
};
const ht = (_0x21e1f0, _0x4e2457, _0x2d6a8a) => {
  const _0xce8185 = _0x21e1f0.heap[_0x2d6a8a];
  let _0x5b5dcb = _0x2d6a8a << 0x1;
  for (; _0x5b5dcb <= _0x21e1f0.heap_len && (_0x5b5dcb < _0x21e1f0.heap_len && ot(_0x4e2457, _0x21e1f0.heap[_0x5b5dcb + 0x1], _0x21e1f0.heap[_0x5b5dcb], _0x21e1f0.depth) && _0x5b5dcb++, !ot(_0x4e2457, _0xce8185, _0x21e1f0.heap[_0x5b5dcb], _0x21e1f0.depth));) {
    _0x21e1f0.heap[_0x2d6a8a] = _0x21e1f0.heap[_0x5b5dcb];
    _0x2d6a8a = _0x5b5dcb;
    _0x5b5dcb <<= 0x1;
  }
  _0x21e1f0.heap[_0x2d6a8a] = _0xce8185;
};
const lt = (_0x2038d5, _0x187e44, _0x460004) => {
  let _0x31fc75;
  let _0x3e485f;
  let _0x11937f;
  let _0x449c1c;
  let _0x4a1179 = 0x0;
  if (0x0 !== _0x2038d5.sym_next) {
    do {
      _0x31fc75 = 0xff & _0x2038d5.pending_buf[_0x2038d5.sym_buf + _0x4a1179++];
      _0x31fc75 += (0xff & _0x2038d5.pending_buf[_0x2038d5.sym_buf + _0x4a1179++]) << 0x8;
      _0x3e485f = _0x2038d5.pending_buf[_0x2038d5.sym_buf + _0x4a1179++];
      if (0x0 === _0x31fc75) {
        it(_0x2038d5, _0x3e485f, _0x187e44);
      } else {
        _0x11937f = V[_0x3e485f];
        it(_0x2038d5, _0x11937f + 0x100 + 0x1, _0x187e44);
        _0x449c1c = N[_0x11937f];
        if (0x0 !== _0x449c1c) {
          _0x3e485f -= H[_0x11937f];
          et(_0x2038d5, _0x3e485f, _0x449c1c);
        }
        _0x31fc75--;
        _0x11937f = _0x31fc75 < 0x100 ? W[_0xb9568e] : W[0x100 + (_0x31fc75 >>> 0x7)];
        it(_0x2038d5, _0x11937f, _0x460004);
        _0x449c1c = X[_0x11937f];
        if (0x0 !== _0x449c1c) {
          _0x31fc75 -= j[_0x11937f];
          et(_0x2038d5, _0x31fc75, _0x449c1c);
        }
      }
    } while (_0x4a1179 < _0x2038d5.sym_next);
  }
  it(_0x2038d5, 0x100, _0x187e44);
};
const ut = (_0x5c110d, _0x3d897a) => {
  const _0x762677 = _0x3d897a.dyn_tree;
  const _0x431ea5 = _0x3d897a.stat_desc.static_tree;
  const _0x1016de = _0x3d897a.stat_desc.has_stree;
  const _0x5fd031 = _0x3d897a.stat_desc.elems;
  let _0x4b5127;
  let _0x3e59c3;
  let _0xf4d267;
  let _0x3e0513 = -0x1;
  _0x5c110d.heap_len = 0x0;
  _0x5c110d.heap_max = 0x23d;
  for (_0x4b5127 = 0x0; _0x4b5127 < _0x5fd031; _0x4b5127++) {
    if (0x0 !== _0x762677[0x2 * _0x4b5127]) {
      _0x5c110d.heap[++_0x5c110d.heap_len] = _0x3e0513 = _0x4b5127;
      _0x5c110d.depth[_0x4b5127] = 0x0;
    } else {
      _0x762677[0x2 * _0x4b5127 + 0x1] = 0x0;
    }
  }
  for (; _0x5c110d.heap_len < 0x2;) {
    _0xf4d267 = _0x5c110d.heap[++_0x5c110d.heap_len] = _0x3e0513 < 0x2 ? ++_0x3e0513 : 0x0;
    _0x762677[0x2 * _0xf4d267] = 0x1;
    _0x5c110d.depth[_0xf4d267] = 0x0;
    _0x5c110d.opt_len--;
    if (_0x1016de) {
      _0x5c110d.static_len -= _0x431ea5[0x2 * _0xf4d267 + 0x1];
    }
  }
  _0x3d897a.max_code = _0x3e0513;
  for (_0x4b5127 = _0x5c110d.heap_len >> 0x1; _0x4b5127 >= 0x1; _0x4b5127--) {
    ht(_0x5c110d, _0x762677, _0x4b5127);
  }
  _0xf4d267 = _0x5fd031;
  do {
    _0x4b5127 = _0x5c110d.heap[0x1];
    _0x5c110d.heap[0x1] = _0x5c110d.heap[_0x5c110d.heap_len--];
    ht(_0x5c110d, _0x762677, 0x1);
    _0x3e59c3 = _0x5c110d.heap[0x1];
    _0x5c110d.heap[--_0x5c110d.heap_max] = _0x4b5127;
    _0x5c110d.heap[--_0x5c110d.heap_max] = _0x3e59c3;
    _0x762677[0x2 * _0xf4d267] = _0x762677[0x2 * _0x4b5127] + _0x762677[0x2 * _0x3e59c3];
    _0x5c110d.depth[_0xf4d267] = (_0x5c110d.depth[_0x4b5127] >= _0x5c110d.depth[_0x3e59c3] ? _0x5c110d.depth[_0x4b5127] : _0x5c110d.depth[_0x3e59c3]) + 0x1;
    _0x762677[0x2 * _0x4b5127 + 0x1] = _0x762677[0x2 * _0x3e59c3 + 0x1] = _0xf4d267;
    _0x5c110d.heap[0x1] = _0xf4d267++;
    ht(_0x5c110d, _0x762677, 0x1);
  } while (_0x5c110d.heap_len >= 0x2);
  _0x5c110d.heap[--_0x5c110d.heap_max] = _0x5c110d.heap[0x1];
  ((_0x31655e, _0x4d4911) => {
    const _0x2da825 = _0x4d4911.dyn_tree;
    const _0x4b7f8b = _0x4d4911.max_code;
    const _0x1dd98f = _0x4d4911.stat_desc.static_tree;
    const _0x39b160 = _0x4d4911.stat_desc.has_stree;
    const _0x3e9c5c = _0x4d4911.stat_desc.extra_bits;
    const _0x9cd488 = _0x4d4911.stat_desc.extra_base;
    const _0x59cb82 = _0x4d4911.stat_desc.max_length;
    let _0x3f5cf5;
    let _0x4272fe;
    let _0x551772;
    let _0x18f457;
    let _0x3de4e1;
    let _0x2fc376;
    let _0x37dbce = 0x0;
    for (_0x18f457 = 0x0; _0x18f457 <= 0xf; _0x18f457++) {
      _0x31655e.bl_count[_0x18f457] = 0x0;
    }
    _0x2da825[0x2 * _0x31655e.heap[_0x31655e.heap_max] + 0x1] = 0x0;
    for (_0x3f5cf5 = _0x31655e.heap_max + 0x1; _0x3f5cf5 < 0x23d; _0x3f5cf5++) {
      _0x4272fe = _0x31655e.heap[_0x3f5cf5];
      _0x18f457 = _0x2da825[0x2 * _0x2da825[0x2 * _0x4272fe + 0x1] + 0x1] + 0x1;
      if (_0x18f457 > _0x59cb82) {
        _0x18f457 = _0x59cb82;
        _0x37dbce++;
      }
      _0x2da825[0x2 * _0x4272fe + 0x1] = _0x18f457;
      if (!(_0x4272fe > _0x4b7f8b)) {
        _0x31655e.bl_count[_0x18f457]++;
        _0x3de4e1 = 0x0;
        if (_0x4272fe >= _0x9cd488) {
          _0x3de4e1 = _0x3e9c5c[_0x4272fe - _0x9cd488];
        }
        _0x2fc376 = _0x2da825[0x2 * _0x4272fe];
        _0x31655e.opt_len += _0x2fc376 * (_0x18f457 + _0x3de4e1);
        if (_0x39b160) {
          _0x31655e.static_len += _0x2fc376 * (_0x1dd98f[0x2 * _0x4272fe + 0x1] + _0x3de4e1);
        }
      }
    }
    if (0x0 !== _0x37dbce) {
      do {
        for (_0x18f457 = _0x59cb82 - 0x1; 0x0 === _0x31655e.bl_count[_0x18f457];) {
          _0x18f457--;
        }
        _0x31655e.bl_count[_0x18f457]--;
        _0x31655e.bl_count[_0x18f457 + 0x1] += 0x2;
        _0x31655e.bl_count[_0x59cb82]--;
        _0x37dbce -= 0x2;
      } while (_0x37dbce > 0x0);
      for (_0x18f457 = _0x59cb82; 0x0 !== _0x18f457; _0x18f457--) {
        for (_0x4272fe = _0x31655e.bl_count[_0x18f457]; 0x0 !== _0x4272fe;) {
          _0x551772 = _0x31655e.heap[--_0x3f5cf5];
          if (!(_0x551772 > _0x4b7f8b)) {
            if (_0x2da825[0x2 * _0x551772 + 0x1] !== _0x18f457) {
              _0x31655e.opt_len += (_0x18f457 - _0x2da825[0x2 * _0x551772 + 0x1]) * _0x2da825[0x2 * _0x551772];
              _0x2da825[0x2 * _0x551772 + 0x1] = _0x18f457;
            }
            _0x4272fe--;
          }
        }
      }
    }
  })(_0x5c110d, _0x3d897a);
  rt(_0x762677, _0x3e0513, _0x5c110d.bl_count);
};
const ct = (_0xcced6e, _0x4e56fd, _0x2549d0) => {
  let _0x38b6cf;
  let _0x276b9a;
  let _0x46f3af = -0x1;
  let _0x404623 = _0x4e56fd[0x1];
  let _0x2100d8 = 0x0;
  let _0x2571ea = 0x7;
  let _0x38d08f = 0x4;
  if (0x0 === _0x404623) {
    _0x2571ea = 0x8a;
    _0x38d08f = 0x3;
  }
  _0x4e56fd[0x2 * (_0x2549d0 + 0x1) + 0x1] = 0xffff;
  for (_0x38b6cf = 0x0; _0x38b6cf <= _0x2549d0; _0x38b6cf++) {
    _0x276b9a = _0x404623;
    _0x404623 = _0x4e56fd[0x2 * (_0x38b6cf + 0x1) + 0x1];
    if (!(++_0x2100d8 < _0x2571ea && _0x276b9a === _0x404623)) {
      if (_0x2100d8 < _0x38d08f) {
        _0xcced6e.bl_tree[0x2 * _0x276b9a] += _0x2100d8;
      } else if (0x0 !== _0x276b9a) {
        if (_0x276b9a !== _0x46f3af) {
          _0xcced6e.bl_tree[0x2 * _0x276b9a]++;
        }
        _0xcced6e.bl_tree[0x20]++;
      } else if (_0x2100d8 <= 0xa) {
        _0xcced6e.bl_tree[0x22]++;
      } else {
        _0xcced6e.bl_tree[0x24]++;
      }
      _0x2100d8 = 0x0;
      _0x46f3af = _0x276b9a;
      if (0x0 === _0x404623) {
        _0x2571ea = 0x8a;
        _0x38d08f = 0x3;
      } else if (_0x276b9a === _0x404623) {
        _0x2571ea = 0x6;
        _0x38d08f = 0x3;
      } else {
        _0x2571ea = 0x7;
        _0x38d08f = 0x4;
      }
    }
  }
};
const dt = (_0x4a4435, _0x2949fe, _0x2e9545) => {
  let _0x35d0a7;
  let _0x4d8fe3;
  let _0x2d40e2 = -0x1;
  let _0x1a6ddb = _0x2949fe[0x1];
  let _0x5e2bdb = 0x0;
  let _0x3f9916 = 0x7;
  let _0x6598c9 = 0x4;
  if (0x0 === _0x1a6ddb) {
    _0x3f9916 = 0x8a;
    _0x6598c9 = 0x3;
  }
  for (_0x35d0a7 = 0x0; _0x35d0a7 <= _0x2e9545; _0x35d0a7++) {
    _0x4d8fe3 = _0x1a6ddb;
    _0x1a6ddb = _0x2949fe[0x2 * (_0x35d0a7 + 0x1) + 0x1];
    if (!(++_0x5e2bdb < _0x3f9916 && _0x4d8fe3 === _0x1a6ddb)) {
      if (_0x5e2bdb < _0x6598c9) {
        do {
          it(_0x4a4435, _0x4d8fe3, _0x4a4435.bl_tree);
        } while (0x0 !== --_0x5e2bdb);
      } else if (0x0 !== _0x4d8fe3) {
        if (_0x4d8fe3 !== _0x2d40e2) {
          it(_0x4a4435, _0x4d8fe3, _0x4a4435.bl_tree);
          _0x5e2bdb--;
        }
        it(_0x4a4435, 0x10, _0x4a4435.bl_tree);
        et(_0x4a4435, _0x5e2bdb - 0x3, 0x2);
      } else if (_0x5e2bdb <= 0xa) {
        it(_0x4a4435, 0x11, _0x4a4435.bl_tree);
        et(_0x4a4435, _0x5e2bdb - 0x3, 0x3);
      } else {
        it(_0x4a4435, 0x12, _0x4a4435.bl_tree);
        et(_0x4a4435, _0x5e2bdb - 0xb, 0x7);
      }
      _0x5e2bdb = 0x0;
      _0x2d40e2 = _0x4d8fe3;
      if (0x0 === _0x1a6ddb) {
        _0x3f9916 = 0x8a;
        _0x6598c9 = 0x3;
      } else if (_0x4d8fe3 === _0x1a6ddb) {
        _0x3f9916 = 0x6;
        _0x6598c9 = 0x3;
      } else {
        _0x3f9916 = 0x7;
        _0x6598c9 = 0x4;
      }
    }
  }
};
let pt = false;
const ft = (_0x51b25f, _0x792722, _0x519f92, _0x72a16e) => {
  et(_0x51b25f, 0x0 + (_0x72a16e ? 0x1 : 0x0), 0x3);
  at(_0x51b25f);
  tt(_0x51b25f, _0x519f92);
  tt(_0x51b25f, ~_0x519f92);
  if (_0x519f92) {
    _0x51b25f.pending_buf.set(_0x51b25f.window.subarray(_0x792722, _0x792722 + _0x519f92), _0x51b25f.pending);
  }
  _0x51b25f.pending += _0x519f92;
};
var gt = {
  _tr_init: _0xbf3b7b => {
    if (!pt) {
      (() => {
        let _0x19eebe;
        let _0x1afb72;
        let _0x254bd1;
        let _0x26ed46;
        let _0x248a1b;
        const _0x340a28 = new Array(0x10);
        _0x254bd1 = 0x0;
        for (_0x26ed46 = 0x0; _0x26ed46 < 0x1c; _0x26ed46++) {
          H[_0x26ed46] = _0x254bd1;
          for (_0x19eebe = 0x0; _0x19eebe < 0x1 << N[_0x26ed46]; _0x19eebe++) {
            V[_0x254bd1++] = _0x26ed46;
          }
        }
        V[_0x254bd1 - 0x1] = _0x26ed46;
        _0x248a1b = 0x0;
        for (_0x26ed46 = 0x0; _0x26ed46 < 0x10; _0x26ed46++) {
          j[_0x26ed46] = _0x248a1b;
          for (_0x19eebe = 0x0; _0x19eebe < 0x1 << X[_0x26ed46]; _0x19eebe++) {
            W[_0x248a1b++] = _0x26ed46;
          }
        }
        for (_0x248a1b >>= 0x7; _0x26ed46 < 0x1e; _0x26ed46++) {
          j[_0x26ed46] = _0x248a1b << 0x7;
          for (_0x19eebe = 0x0; _0x19eebe < 0x1 << X[_0x26ed46] - 0x7; _0x19eebe++) {
            W[0x100 + _0x248a1b++] = _0x26ed46;
          }
        }
        for (_0x1afb72 = 0x0; _0x1afb72 <= 0xf; _0x1afb72++) {
          _0x340a28[_0x1afb72] = 0x0;
        }
        for (_0x19eebe = 0x0; _0x19eebe <= 0x8f;) {
          z[0x2 * _0x19eebe + 0x1] = 0x8;
          _0x19eebe++;
          _0x340a28[0x8]++;
        }
        for (; _0x19eebe <= 0xff;) {
          z[0x2 * _0x19eebe + 0x1] = 0x9;
          _0x19eebe++;
          _0x340a28[0x9]++;
        }
        for (; _0x19eebe <= 0x117;) {
          z[0x2 * _0x19eebe + 0x1] = 0x7;
          _0x19eebe++;
          _0x340a28[0x7]++;
        }
        for (; _0x19eebe <= 0x11f;) {
          z[0x2 * _0x19eebe + 0x1] = 0x8;
          _0x19eebe++;
          _0x340a28[0x8]++;
        }
        rt(z, 0x11f, _0x340a28);
        for (_0x19eebe = 0x0; _0x19eebe < 0x1e; _0x19eebe++) {
          G[0x2 * _0x19eebe + 0x1] = 0x5;
          G[0x2 * _0x19eebe] = st(_0x19eebe, 0x5);
        }
        K = new q(z, N, 0x101, 0x11e, 0xf);
        Z = new q(G, X, 0x0, 0x1e, 0xf);
        J = new q(new Array(0x0), Y, 0x0, 0x13, 0x7);
      })();
      pt = true;
    }
    _0xbf3b7b.l_desc = new Q(_0xbf3b7b.dyn_ltree, K);
    _0xbf3b7b.d_desc = new Q(_0xbf3b7b.dyn_dtree, Z);
    _0xbf3b7b.bl_desc = new Q(_0xbf3b7b.bl_tree, J);
    _0xbf3b7b.bi_buf = 0x0;
    _0xbf3b7b.bi_valid = 0x0;
    nt(_0xbf3b7b);
  },
  _tr_stored_block: ft,
  _tr_flush_block: (_0x2e0936, _0x1fa4a1, _0x403c4c, _0x4ce195) => {
    let _0x19763e;
    let _0x51f825;
    let _0xbef4ac = 0x0;
    if (_0x2e0936.level > 0x0) {
      if (0x2 === _0x2e0936.strm.data_type) {
        _0x2e0936.strm.data_type = (_0x1d7788 => {
          let _0x33996d;
          let _0x2a2bba = 0xf3ffc07f;
          for (_0x33996d = 0x0; _0x33996d <= 0x1f; _0x33996d++, _0x2a2bba >>>= 0x1) {
            if (0x1 & _0x2a2bba && 0x0 !== _0x1d7788.dyn_ltree[0x2 * _0x33996d]) {
              return 0x0;
            }
          }
          if (0x0 !== _0x1d7788.dyn_ltree[0x12] || 0x0 !== _0x1d7788.dyn_ltree[0x14] || 0x0 !== _0x1d7788.dyn_ltree[0x1a]) {
            return 0x1;
          }
          for (_0x33996d = 0x20; _0x33996d < 0x100; _0x33996d++) {
            if (0x0 !== _0x1d7788.dyn_ltree[0x2 * _0x33996d]) {
              return 0x1;
            }
          }
          return 0x0;
        })(_0x2e0936);
      }
      ut(_0x2e0936, _0x2e0936.l_desc);
      ut(_0x2e0936, _0x2e0936.d_desc);
      _0xbef4ac = (_0x1076d5 => {
        let _0x578903;
        ct(_0x1076d5, _0x1076d5.dyn_ltree, _0x1076d5.l_desc.max_code);
        ct(_0x1076d5, _0x1076d5.dyn_dtree, _0x1076d5.d_desc.max_code);
        ut(_0x1076d5, _0x1076d5.bl_desc);
        for (_0x578903 = 0x12; _0x578903 >= 0x3 && 0x0 === _0x1076d5.bl_tree[0x2 * U[_0x578903] + 0x1]; _0x578903--) {
          ;
        }
        _0x1076d5.opt_len += 0x3 * (_0x578903 + 0x1) + 0x5 + 0x5 + 0x4;
        return _0x578903;
      })(_0x2e0936);
      _0x19763e = _0x2e0936.opt_len + 0x3 + 0x7 >>> 0x3;
      _0x51f825 = _0x2e0936.static_len + 0x3 + 0x7 >>> 0x3;
      if (_0x51f825 <= _0x19763e) {
        _0x19763e = _0x51f825;
      }
    } else {
      _0x19763e = _0x51f825 = _0x403c4c + 0x5;
    }
    if (_0x403c4c + 0x4 <= _0x19763e && -0x1 !== _0x1fa4a1) {
      ft(_0x2e0936, _0x1fa4a1, _0x403c4c, _0x4ce195);
    } else if (0x4 === _0x2e0936.strategy || _0x51f825 === _0x19763e) {
      et(_0x2e0936, 0x2 + (_0x4ce195 ? 0x1 : 0x0), 0x3);
      lt(_0x2e0936, z, G);
    } else {
      et(_0x2e0936, 0x4 + (_0x4ce195 ? 0x1 : 0x0), 0x3);
      ((_0x45c95c, _0x21bdca, _0xb4d63e, _0x487d4d) => {
        let _0x8077d5;
        et(_0x45c95c, _0x21bdca - 0x101, 0x5);
        et(_0x45c95c, _0xb4d63e - 0x1, 0x5);
        et(_0x45c95c, _0x487d4d - 0x4, 0x4);
        for (_0x8077d5 = 0x0; _0x8077d5 < _0x487d4d; _0x8077d5++) {
          et(_0x45c95c, _0x45c95c.bl_tree[0x2 * U[_0x8077d5] + 0x1], 0x3);
        }
        dt(_0x45c95c, _0x45c95c.dyn_ltree, _0x21bdca - 0x1);
        dt(_0x45c95c, _0x45c95c.dyn_dtree, _0xb4d63e - 0x1);
      })(_0x2e0936, _0x2e0936.l_desc.max_code + 0x1, _0x2e0936.d_desc.max_code + 0x1, _0xbef4ac + 0x1);
      lt(_0x2e0936, _0x2e0936.dyn_ltree, _0x2e0936.dyn_dtree);
    }
    nt(_0x2e0936);
    if (_0x4ce195) {
      at(_0x2e0936);
    }
  },
  _tr_tally: (_0x3d8ed0, _0x5f38b0, _0x2c3da1) => (_0x3d8ed0.pending_buf[_0x3d8ed0.sym_buf + _0x3d8ed0.sym_next++] = _0x5f38b0, _0x3d8ed0.pending_buf[_0x3d8ed0.sym_buf + _0x3d8ed0.sym_next++] = _0x5f38b0 >> 0x8, _0x3d8ed0.pending_buf[_0x3d8ed0.sym_buf + _0x3d8ed0.sym_next++] = _0x2c3da1, 0x0 === _0x5f38b0 ? _0x3d8ed0.dyn_ltree[0x2 * _0x2c3da1]++ : (_0x3d8ed0.matches++, _0x5f38b0--, _0x3d8ed0.dyn_ltree[0x2 * (V[_0x2c3da1] + 0x100 + 0x1)]++, _0x3d8ed0.dyn_dtree[0x2 * (_0x5f38b0 < 0x100 ? W[_0xb9568e] : W[0x100 + (_0x5f38b0 >>> 0x7)])]++), _0x3d8ed0.sym_next === _0x3d8ed0.sym_end),
  _tr_align: _0x52158b => {
    et(_0x52158b, 0x2, 0x3);
    it(_0x52158b, 0x100, z);
    (_0x75f48a => {
      if (0x10 === _0x75f48a.bi_valid) {
        tt(_0x75f48a, _0x75f48a.bi_buf);
        _0x75f48a.bi_buf = 0x0;
        _0x75f48a.bi_valid = 0x0;
      } else if (_0x75f48a.bi_valid >= 0x8) {
        _0x75f48a.pending_buf[_0x75f48a.pending++] = 0xff & _0x75f48a.bi_buf;
        _0x75f48a.bi_buf >>= 0x8;
        _0x75f48a.bi_valid -= 0x8;
      }
    })(_0x52158b);
  }
};
var vt = (_0xcff41c, _0x50783d, _0xdd7416, _0x2acb12) => {
  let _0x254bf9 = 0xffff & _0xcff41c;
  let _0x1d4601 = _0xcff41c >>> 0x10 & 0xffff;
  let _0x4835f8 = 0x0;
  for (; 0x0 !== _0xdd7416;) {
    _0x4835f8 = _0xdd7416 > 0x7d0 ? 0x7d0 : _0xdd7416;
    _0xdd7416 -= _0x4835f8;
    do {
      _0x254bf9 = _0x254bf9 + _0x50783d[_0x2acb12++] | 0x0;
      _0x1d4601 = _0x1d4601 + _0x254bf9 | 0x0;
    } while (--_0x4835f8);
    _0x254bf9 %= 0xfff1;
    _0x1d4601 %= 0xfff1;
  }
  return _0x254bf9 | _0x1d4601 << 0x10;
};
const mt = new Uint32Array((() => {
  let _0x10ccd7;
  let _0x550f33 = [];
  for (var _0x1158ab = 0x0; _0x1158ab < 0x100; _0x1158ab++) {
    _0x10ccd7 = _0x1158ab;
    for (var _0x1fca31 = 0x0; _0x1fca31 < 0x8; _0x1fca31++) {
      _0x10ccd7 = 0x1 & _0x10ccd7 ? 0xedb88320 ^ _0x10ccd7 >>> 0x1 : _0x10ccd7 >>> 0x1;
    }
    _0x550f33[_0x1158ab] = _0x10ccd7;
  }
  return _0x550f33;
})());
var yt = (_0x3cce70, _0x32502b, _0x23cd60, _0x58748e) => {
  const _0x4f6ae7 = _0x58748e + _0x23cd60;
  _0x3cce70 ^= -0x1;
  for (let _0x211065 = _0x58748e; _0x211065 < _0x4f6ae7; _0x211065++) {
    _0x3cce70 = _0x3cce70 >>> 0x8 ^ mt[0xff & (_0x3cce70 ^ _0x32502b[_0x211065])];
  }
  return -0x1 ^ _0x3cce70;
};
var xt = {
  0x2: "need dictionary",
  0x1: "stream end",
  0x0: '',
  '-1': "file error",
  '-2': "stream error",
  '-3': "data error",
  '-4': "insufficient memory",
  '-5': "buffer error",
  '-6': "incompatible version"
};
var _t = {
  Z_NO_FLUSH: 0x0,
  Z_PARTIAL_FLUSH: 0x1,
  Z_SYNC_FLUSH: 0x2,
  Z_FULL_FLUSH: 0x3,
  Z_FINISH: 0x4,
  Z_BLOCK: 0x5,
  Z_TREES: 0x6,
  Z_OK: 0x0,
  Z_STREAM_END: 0x1,
  Z_NEED_DICT: 0x2,
  Z_ERRNO: -0x1,
  Z_STREAM_ERROR: -0x2,
  Z_DATA_ERROR: -0x3,
  Z_MEM_ERROR: -0x4,
  Z_BUF_ERROR: -0x5,
  Z_NO_COMPRESSION: 0x0,
  Z_BEST_SPEED: 0x1,
  Z_BEST_COMPRESSION: 0x9,
  Z_DEFAULT_COMPRESSION: -0x1,
  Z_FILTERED: 0x1,
  Z_HUFFMAN_ONLY: 0x2,
  Z_RLE: 0x3,
  Z_FIXED: 0x4,
  Z_DEFAULT_STRATEGY: 0x0,
  Z_BINARY: 0x0,
  Z_TEXT: 0x1,
  Z_UNKNOWN: 0x2,
  Z_DEFLATED: 0x8
};
const {
  _tr_init: wt,
  _tr_stored_block: Tt,
  _tr_flush_block: bt,
  _tr_tally: St,
  _tr_align: Et
} = gt;
const {
  Z_NO_FLUSH: At,
  Z_PARTIAL_FLUSH: Ct,
  Z_FULL_FLUSH: Mt,
  Z_FINISH: Pt,
  Z_BLOCK: Rt,
  Z_OK: Lt,
  Z_STREAM_END: Ot,
  Z_STREAM_ERROR: Ft,
  Z_DATA_ERROR: Dt,
  Z_BUF_ERROR: kt,
  Z_DEFAULT_COMPRESSION: It,
  Z_FILTERED: Bt,
  Z_HUFFMAN_ONLY: Nt,
  Z_RLE: Xt,
  Z_FIXED: Yt,
  Z_DEFAULT_STRATEGY: Ut,
  Z_UNKNOWN: zt,
  Z_DEFLATED: Gt
} = _t;
const Kt = (_0x26416b, _0x125eeb) => (_0x26416b.msg = xt[_0x125eeb], _0x125eeb);
const Zt = _0x5f0c86 => 0x2 * _0x5f0c86 - (_0x5f0c86 > 0x4 ? 0x9 : 0x0);
const Jt = _0x377f38 => {
  let _0x4ee300 = _0x377f38.length;
  for (; --_0x4ee300 >= 0x0;) {
    _0x377f38[_0x4ee300] = 0x0;
  }
};
const Qt = _0xe1070c => {
  let _0x51869b;
  let _0x3b5592;
  let _0x5084f9;
  let _0x2be071 = _0xe1070c.w_size;
  _0x51869b = _0xe1070c.hash_size;
  _0x5084f9 = _0x51869b;
  do {
    _0x3b5592 = _0xe1070c.head[--_0x5084f9];
    _0xe1070c.head[_0x5084f9] = _0x3b5592 >= _0x2be071 ? _0x3b5592 - _0x2be071 : 0x0;
  } while (--_0x51869b);
  _0x51869b = _0x2be071;
  _0x5084f9 = _0x51869b;
  do {
    _0x3b5592 = _0xe1070c.prev[--_0x5084f9];
    _0xe1070c.prev[_0x5084f9] = _0x3b5592 >= _0x2be071 ? _0x3b5592 - _0x2be071 : 0x0;
  } while (--_0x51869b);
};
let $t = (_0x4dbf14, _0x393369, _0x36b45b) => (_0x393369 << _0x4dbf14.hash_shift ^ _0x36b45b) & _0x4dbf14.hash_mask;
const te = _0x2eaf83 => {
  const _0x2a4a6b = _0x2eaf83.state;
  let _0x43b539 = _0x2a4a6b.pending;
  if (_0x43b539 > _0x2eaf83.avail_out) {
    _0x43b539 = _0x2eaf83.avail_out;
  }
  if (0x0 !== _0x43b539) {
    _0x2eaf83.output.set(_0x2a4a6b.pending_buf.subarray(_0x2a4a6b.pending_out, _0x2a4a6b.pending_out + _0x43b539), _0x2eaf83.next_out);
    _0x2eaf83.next_out += _0x43b539;
    _0x2a4a6b.pending_out += _0x43b539;
    _0x2eaf83.total_out += _0x43b539;
    _0x2eaf83.avail_out -= _0x43b539;
    _0x2a4a6b.pending -= _0x43b539;
    if (0x0 === _0x2a4a6b.pending) {
      _0x2a4a6b.pending_out = 0x0;
    }
  }
};
const ee = (_0x1243dc, _0x5edb64) => {
  bt(_0x1243dc, _0x1243dc.block_start >= 0x0 ? _0x1243dc.block_start : -0x1, _0x1243dc.strstart - _0x1243dc.block_start, _0x5edb64);
  _0x1243dc.block_start = _0x1243dc.strstart;
  te(_0x1243dc.strm);
};
const ie = (_0x5d837e, _0xe99cf0) => {
  _0x5d837e.pending_buf[_0x5d837e.pending++] = _0xe99cf0;
};
const se = (_0x18bb52, _0x20d2ea) => {
  _0x18bb52.pending_buf[_0x18bb52.pending++] = _0x20d2ea >>> 0x8 & 0xff;
  _0x18bb52.pending_buf[_0x18bb52.pending++] = 0xff & _0x20d2ea;
};
const re = (_0x98b509, _0x5ffb0b, _0x54713d, _0x550bae) => {
  let _0x262ddc = _0x98b509.avail_in;
  if (_0x262ddc > _0x550bae) {
    _0x262ddc = _0x550bae;
  }
  return 0x0 === _0x262ddc ? 0x0 : (_0x98b509.avail_in -= _0x262ddc, _0x5ffb0b.set(_0x98b509.input.subarray(_0x98b509.next_in, _0x98b509.next_in + _0x262ddc), _0x54713d), 0x1 === _0x98b509.state.wrap ? _0x98b509.adler = vt(_0x98b509.adler, _0x5ffb0b, _0x262ddc, _0x54713d) : 0x2 === _0x98b509.state.wrap && (_0x98b509.adler = yt(_0x98b509.adler, _0x5ffb0b, _0x262ddc, _0x54713d)), _0x98b509.next_in += _0x262ddc, _0x98b509.total_in += _0x262ddc, _0x262ddc);
};
const ne = (_0x5dedb4, _0x1b3f9d) => {
  let _0x482f8d;
  let _0x5bc91d;
  let _0x3a72d2 = _0x5dedb4.max_chain_length;
  let _0x3e2775 = _0x5dedb4.strstart;
  let _0x3fe9d9 = _0x5dedb4.prev_length;
  let _0x20ac27 = _0x5dedb4.nice_match;
  const _0x2ab550 = _0x5dedb4.strstart > _0x5dedb4.w_size - 0x106 ? _0x5dedb4.strstart - (_0x5dedb4.w_size - 0x106) : 0x0;
  const _0xb863e3 = _0x5dedb4.window;
  const _0x126d8c = _0x5dedb4.w_mask;
  const _0x5d51d0 = _0x5dedb4.prev;
  const _0x2e7562 = _0x5dedb4.strstart + 0x102;
  let _0x1bc1c7 = _0xb863e3[_0x3e2775 + _0x3fe9d9 - 0x1];
  let _0xe0c102 = _0xb863e3[_0x3e2775 + _0x3fe9d9];
  if (_0x5dedb4.prev_length >= _0x5dedb4.good_match) {
    _0x3a72d2 >>= 0x2;
  }
  if (_0x20ac27 > _0x5dedb4.lookahead) {
    _0x20ac27 = _0x5dedb4.lookahead;
  }
  do {
    _0x482f8d = _0x1b3f9d;
    if (_0xb863e3[_0x482f8d + _0x3fe9d9] === _0xe0c102 && _0xb863e3[_0x482f8d + _0x3fe9d9 - 0x1] === _0x1bc1c7 && _0xb863e3[_0x482f8d] === _0xb863e3[_0x3e2775] && _0xb863e3[++_0x482f8d] === _0xb863e3[_0x3e2775 + 0x1]) {
      _0x3e2775 += 0x2;
      _0x482f8d++;
      do {} while (_0xb863e3[++_0x3e2775] === _0xb863e3[++_0x482f8d] && _0xb863e3[++_0x3e2775] === _0xb863e3[++_0x482f8d] && _0xb863e3[++_0x3e2775] === _0xb863e3[++_0x482f8d] && _0xb863e3[++_0x3e2775] === _0xb863e3[++_0x482f8d] && _0xb863e3[++_0x3e2775] === _0xb863e3[++_0x482f8d] && _0xb863e3[++_0x3e2775] === _0xb863e3[++_0x482f8d] && _0xb863e3[++_0x3e2775] === _0xb863e3[++_0x482f8d] && _0xb863e3[++_0x3e2775] === _0xb863e3[++_0x482f8d] && _0x3e2775 < _0x2e7562);
      _0x5bc91d = 0x102 - (_0x2e7562 - _0x3e2775);
      _0x3e2775 = _0x2e7562 - 0x102;
      if (_0x5bc91d > _0x3fe9d9) {
        _0x5dedb4.match_start = _0x1b3f9d;
        _0x3fe9d9 = _0x5bc91d;
        if (_0x5bc91d >= _0x20ac27) {
          break;
        }
        _0x1bc1c7 = _0xb863e3[_0x3e2775 + _0x3fe9d9 - 0x1];
        _0xe0c102 = _0xb863e3[_0x3e2775 + _0x3fe9d9];
      }
    }
  } while ((_0x1b3f9d = _0x5d51d0[_0x1b3f9d & _0x126d8c]) > _0x2ab550 && 0x0 !== --_0x3a72d2);
  return _0x3fe9d9 <= _0x5dedb4.lookahead ? _0x3fe9d9 : _0x5dedb4.lookahead;
};
const ae = _0x40b228 => {
  const _0x3491e6 = _0x40b228.w_size;
  let _0x4c8847;
  let _0x8b5c86;
  let _0x133499;
  do {
    _0x8b5c86 = _0x40b228.window_size - _0x40b228.lookahead - _0x40b228.strstart;
    if (_0x40b228.strstart >= _0x3491e6 + (_0x3491e6 - 0x106)) {
      _0x40b228.window.set(_0x40b228.window.subarray(_0x3491e6, _0x3491e6 + _0x3491e6 - _0x8b5c86), 0x0);
      _0x40b228.match_start -= _0x3491e6;
      _0x40b228.strstart -= _0x3491e6;
      _0x40b228.block_start -= _0x3491e6;
      if (_0x40b228.insert > _0x40b228.strstart) {
        _0x40b228.insert = _0x40b228.strstart;
      }
      Qt(_0x40b228);
      _0x8b5c86 += _0x3491e6;
    }
    if (0x0 === _0x40b228.strm.avail_in) {
      break;
    }
    _0x4c8847 = re(_0x40b228.strm, _0x40b228.window, _0x40b228.strstart + _0x40b228.lookahead, _0x8b5c86);
    _0x40b228.lookahead += _0x4c8847;
    if (_0x40b228.lookahead + _0x40b228.insert >= 0x3) {
      _0x133499 = _0x40b228.strstart - _0x40b228.insert;
      _0x40b228.ins_h = _0x40b228.window[_0x133499];
      for (_0x40b228.ins_h = (_0x40b228.ins_h << _0x40b228.hash_shift ^ _0x40b228.window[_0x133499 + 0x1]) & _0x40b228.hash_mask; _0x40b228.insert && (_0x40b228.ins_h = (_0x40b228.ins_h << _0x40b228.hash_shift ^ _0x40b228.window[_0x133499 + 0x3 - 0x1]) & _0x40b228.hash_mask, _0x40b228.prev[_0x133499 & _0x40b228.w_mask] = _0x40b228.head[_0x40b228.ins_h], _0x40b228.head[_0x40b228.ins_h] = _0x133499, _0x133499++, _0x40b228.insert--, !(_0x40b228.lookahead + _0x40b228.insert < 0x3));) {
        ;
      }
    }
  } while (_0x40b228.lookahead < 0x106 && 0x0 !== _0x40b228.strm.avail_in);
};
const oe = (_0x320021, _0x40fdc8) => {
  let _0x594792;
  let _0x1e6706;
  let _0x52bd27;
  let _0x42799f = _0x320021.pending_buf_size - 0x5 > _0x320021.w_size ? _0x320021.w_size : _0x320021.pending_buf_size - 0x5;
  let _0x492c4d = 0x0;
  let _0x130b5c = _0x320021.strm.avail_in;
  do {
    _0x594792 = 0xffff;
    _0x52bd27 = _0x320021.bi_valid + 0x2a >> 0x3;
    if (_0x320021.strm.avail_out < _0x52bd27) {
      break;
    }
    _0x52bd27 = _0x320021.strm.avail_out - _0x52bd27;
    _0x1e6706 = _0x320021.strstart - _0x320021.block_start;
    if (_0x594792 > _0x1e6706 + _0x320021.strm.avail_in) {
      _0x594792 = _0x1e6706 + _0x320021.strm.avail_in;
    }
    if (_0x594792 > _0x52bd27) {
      _0x594792 = _0x52bd27;
    }
    if (_0x594792 < _0x42799f && (0x0 === _0x594792 && _0x40fdc8 !== Pt || _0x40fdc8 === At || _0x594792 !== _0x1e6706 + _0x320021.strm.avail_in)) {
      break;
    }
    _0x492c4d = _0x40fdc8 === Pt && _0x594792 === _0x1e6706 + _0x320021.strm.avail_in ? 0x1 : 0x0;
    Tt(_0x320021, 0x0, 0x0, _0x492c4d);
    _0x320021.pending_buf[_0x320021.pending - 0x4] = _0x594792;
    _0x320021.pending_buf[_0x320021.pending - 0x3] = _0x594792 >> 0x8;
    _0x320021.pending_buf[_0x320021.pending - 0x2] = ~_0x594792;
    _0x320021.pending_buf[_0x320021.pending - 0x1] = ~_0x594792 >> 0x8;
    te(_0x320021.strm);
    if (_0x1e6706) {
      if (_0x1e6706 > _0x594792) {
        _0x1e6706 = _0x594792;
      }
      _0x320021.strm.output.set(_0x320021.window.subarray(_0x320021.block_start, _0x320021.block_start + _0x1e6706), _0x320021.strm.next_out);
      _0x320021.strm.next_out += _0x1e6706;
      _0x320021.strm.avail_out -= _0x1e6706;
      _0x320021.strm.total_out += _0x1e6706;
      _0x320021.block_start += _0x1e6706;
      _0x594792 -= _0x1e6706;
    }
    if (_0x594792) {
      re(_0x320021.strm, _0x320021.strm.output, _0x320021.strm.next_out, _0x594792);
      _0x320021.strm.next_out += _0x594792;
      _0x320021.strm.avail_out -= _0x594792;
      _0x320021.strm.total_out += _0x594792;
    }
  } while (0x0 === _0x492c4d);
  _0x130b5c -= _0x320021.strm.avail_in;
  if (_0x130b5c) {
    if (_0x130b5c >= _0x320021.w_size) {
      _0x320021.matches = 0x2;
      _0x320021.window.set(_0x320021.strm.input.subarray(_0x320021.strm.next_in - _0x320021.w_size, _0x320021.strm.next_in), 0x0);
      _0x320021.strstart = _0x320021.w_size;
      _0x320021.insert = _0x320021.strstart;
    } else {
      if (_0x320021.window_size - _0x320021.strstart <= _0x130b5c) {
        _0x320021.strstart -= _0x320021.w_size;
        _0x320021.window.set(_0x320021.window.subarray(_0x320021.w_size, _0x320021.w_size + _0x320021.strstart), 0x0);
        if (_0x320021.matches < 0x2) {
          _0x320021.matches++;
        }
        if (_0x320021.insert > _0x320021.strstart) {
          _0x320021.insert = _0x320021.strstart;
        }
      }
      _0x320021.window.set(_0x320021.strm.input.subarray(_0x320021.strm.next_in - _0x130b5c, _0x320021.strm.next_in), _0x320021.strstart);
      _0x320021.strstart += _0x130b5c;
      _0x320021.insert += _0x130b5c > _0x320021.w_size - _0x320021.insert ? _0x320021.w_size - _0x320021.insert : _0x130b5c;
    }
    _0x320021.block_start = _0x320021.strstart;
  }
  if (_0x320021.high_water < _0x320021.strstart) {
    _0x320021.high_water = _0x320021.strstart;
  }
  return _0x492c4d ? 0x4 : _0x40fdc8 !== At && _0x40fdc8 !== Pt && 0x0 === _0x320021.strm.avail_in && _0x320021.strstart === _0x320021.block_start ? 0x2 : (_0x52bd27 = _0x320021.window_size - _0x320021.strstart, _0x320021.strm.avail_in > _0x52bd27 && _0x320021.block_start >= _0x320021.w_size && (_0x320021.block_start -= _0x320021.w_size, _0x320021.strstart -= _0x320021.w_size, _0x320021.window.set(_0x320021.window.subarray(_0x320021.w_size, _0x320021.w_size + _0x320021.strstart), 0x0), _0x320021.matches < 0x2 && _0x320021.matches++, _0x52bd27 += _0x320021.w_size, _0x320021.insert > _0x320021.strstart && (_0x320021.insert = _0x320021.strstart)), _0x52bd27 > _0x320021.strm.avail_in && (_0x52bd27 = _0x320021.strm.avail_in), _0x52bd27 && (re(_0x320021.strm, _0x320021.window, _0x320021.strstart, _0x52bd27), _0x320021.strstart += _0x52bd27, _0x320021.insert += _0x52bd27 > _0x320021.w_size - _0x320021.insert ? _0x320021.w_size - _0x320021.insert : _0x52bd27), _0x320021.high_water < _0x320021.strstart && (_0x320021.high_water = _0x320021.strstart), _0x52bd27 = _0x320021.bi_valid + 0x2a >> 0x3, _0x52bd27 = _0x320021.pending_buf_size - _0x52bd27 > 0xffff ? 0xffff : _0x320021.pending_buf_size - _0x52bd27, _0x42799f = _0x52bd27 > _0x320021.w_size ? _0x320021.w_size : _0x52bd27, _0x1e6706 = _0x320021.strstart - _0x320021.block_start, (_0x1e6706 >= _0x42799f || (_0x1e6706 || _0x40fdc8 === Pt) && _0x40fdc8 !== At && 0x0 === _0x320021.strm.avail_in && _0x1e6706 <= _0x52bd27) && (_0x594792 = _0x1e6706 > _0x52bd27 ? _0x52bd27 : _0x1e6706, _0x492c4d = _0x40fdc8 === Pt && 0x0 === _0x320021.strm.avail_in && _0x594792 === _0x1e6706 ? 0x1 : 0x0, Tt(_0x320021, _0x320021.block_start, _0x594792, _0x492c4d), _0x320021.block_start += _0x594792, te(_0x320021.strm)), _0x492c4d ? 0x3 : 0x1);
};
const he = (_0x367e33, _0x5ee4fb) => {
  let _0x3fbb45;
  let _0x51593b;
  for (;;) {
    if (_0x367e33.lookahead < 0x106) {
      ae(_0x367e33);
      if (_0x367e33.lookahead < 0x106 && _0x5ee4fb === At) {
        return 0x1;
      }
      if (0x0 === _0x367e33.lookahead) {
        break;
      }
    }
    _0x3fbb45 = 0x0;
    if (_0x367e33.lookahead >= 0x3) {
      _0x367e33.ins_h = (_0x367e33.ins_h << _0x367e33.hash_shift ^ _0x367e33.window[_0x367e33.strstart + 0x3 - 0x1]) & _0x367e33.hash_mask;
      _0x3fbb45 = _0x367e33.prev[_0x367e33.strstart & _0x367e33.w_mask] = _0x367e33.head[_0x367e33.ins_h];
      _0x367e33.head[_0x367e33.ins_h] = _0x367e33.strstart;
    }
    if (0x0 !== _0x3fbb45 && _0x367e33.strstart - _0x3fbb45 <= _0x367e33.w_size - 0x106) {
      _0x367e33.match_length = ne(_0x367e33, _0x3fbb45);
    }
    if (_0x367e33.match_length >= 0x3) {
      _0x51593b = St(_0x367e33, _0x367e33.strstart - _0x367e33.match_start, _0x367e33.match_length - 0x3);
      _0x367e33.lookahead -= _0x367e33.match_length;
      if (_0x367e33.match_length <= _0x367e33.max_lazy_match && _0x367e33.lookahead >= 0x3) {
        _0x367e33.match_length--;
        do {
          _0x367e33.strstart++;
          _0x367e33.ins_h = (_0x367e33.ins_h << _0x367e33.hash_shift ^ _0x367e33.window[_0x367e33.strstart + 0x3 - 0x1]) & _0x367e33.hash_mask;
          _0x3fbb45 = _0x367e33.prev[_0x367e33.strstart & _0x367e33.w_mask] = _0x367e33.head[_0x367e33.ins_h];
          _0x367e33.head[_0x367e33.ins_h] = _0x367e33.strstart;
        } while (0x0 !== --_0x367e33.match_length);
        _0x367e33.strstart++;
      } else {
        _0x367e33.strstart += _0x367e33.match_length;
        _0x367e33.match_length = 0x0;
        _0x367e33.ins_h = _0x367e33.window[_0x367e33.strstart];
        _0x367e33.ins_h = (_0x367e33.ins_h << _0x367e33.hash_shift ^ _0x367e33.window[_0x367e33.strstart + 0x1]) & _0x367e33.hash_mask;
      }
    } else {
      _0x51593b = St(_0x367e33, 0x0, _0x367e33.window[_0x367e33.strstart]);
      _0x367e33.lookahead--;
      _0x367e33.strstart++;
    }
    if (_0x51593b && (ee(_0x367e33, false), 0x0 === _0x367e33.strm.avail_out)) {
      return 0x1;
    }
  }
  _0x367e33.insert = _0x367e33.strstart < 0x2 ? _0x367e33.strstart : 0x2;
  return _0x5ee4fb === Pt ? (ee(_0x367e33, true), 0x0 === _0x367e33.strm.avail_out ? 0x3 : 0x4) : _0x367e33.sym_next && (ee(_0x367e33, false), 0x0 === _0x367e33.strm.avail_out) ? 0x1 : 0x2;
};
const le = (_0x42e44b, _0x212e18) => {
  let _0x4b20bd;
  let _0x442f6f;
  let _0x55e4a6;
  for (;;) {
    if (_0x42e44b.lookahead < 0x106) {
      ae(_0x42e44b);
      if (_0x42e44b.lookahead < 0x106 && _0x212e18 === At) {
        return 0x1;
      }
      if (0x0 === _0x42e44b.lookahead) {
        break;
      }
    }
    _0x4b20bd = 0x0;
    if (_0x42e44b.lookahead >= 0x3) {
      _0x42e44b.ins_h = (_0x42e44b.ins_h << _0x42e44b.hash_shift ^ _0x42e44b.window[_0x42e44b.strstart + 0x3 - 0x1]) & _0x42e44b.hash_mask;
      _0x4b20bd = _0x42e44b.prev[_0x42e44b.strstart & _0x42e44b.w_mask] = _0x42e44b.head[_0x42e44b.ins_h];
      _0x42e44b.head[_0x42e44b.ins_h] = _0x42e44b.strstart;
    }
    _0x42e44b.prev_length = _0x42e44b.match_length;
    _0x42e44b.prev_match = _0x42e44b.match_start;
    _0x42e44b.match_length = 0x2;
    if (0x0 !== _0x4b20bd && _0x42e44b.prev_length < _0x42e44b.max_lazy_match && _0x42e44b.strstart - _0x4b20bd <= _0x42e44b.w_size - 0x106) {
      _0x42e44b.match_length = ne(_0x42e44b, _0x4b20bd);
      if (_0x42e44b.match_length <= 0x5 && (_0x42e44b.strategy === Bt || 0x3 === _0x42e44b.match_length && _0x42e44b.strstart - _0x42e44b.match_start > 0x1000)) {
        _0x42e44b.match_length = 0x2;
      }
    }
    if (_0x42e44b.prev_length >= 0x3 && _0x42e44b.match_length <= _0x42e44b.prev_length) {
      _0x55e4a6 = _0x42e44b.strstart + _0x42e44b.lookahead - 0x3;
      _0x442f6f = St(_0x42e44b, _0x42e44b.strstart - 0x1 - _0x42e44b.prev_match, _0x42e44b.prev_length - 0x3);
      _0x42e44b.lookahead -= _0x42e44b.prev_length - 0x1;
      _0x42e44b.prev_length -= 0x2;
      do {
        if (++_0x42e44b.strstart <= _0x55e4a6) {
          _0x42e44b.ins_h = (_0x42e44b.ins_h << _0x42e44b.hash_shift ^ _0x42e44b.window[_0x42e44b.strstart + 0x3 - 0x1]) & _0x42e44b.hash_mask;
          _0x4b20bd = _0x42e44b.prev[_0x42e44b.strstart & _0x42e44b.w_mask] = _0x42e44b.head[_0x42e44b.ins_h];
          _0x42e44b.head[_0x42e44b.ins_h] = _0x42e44b.strstart;
        }
      } while (0x0 !== --_0x42e44b.prev_length);
      _0x42e44b.match_available = 0x0;
      _0x42e44b.match_length = 0x2;
      _0x42e44b.strstart++;
      if (_0x442f6f && (ee(_0x42e44b, false), 0x0 === _0x42e44b.strm.avail_out)) {
        return 0x1;
      }
    } else {
      if (_0x42e44b.match_available) {
        _0x442f6f = St(_0x42e44b, 0x0, _0x42e44b.window[_0x42e44b.strstart - 0x1]);
        if (_0x442f6f) {
          ee(_0x42e44b, false);
        }
        _0x42e44b.strstart++;
        _0x42e44b.lookahead--;
        if (0x0 === _0x42e44b.strm.avail_out) {
          return 0x1;
        }
      } else {
        _0x42e44b.match_available = 0x1;
        _0x42e44b.strstart++;
        _0x42e44b.lookahead--;
      }
    }
  }
  if (_0x42e44b.match_available) {
    _0x442f6f = St(_0x42e44b, 0x0, _0x42e44b.window[_0x42e44b.strstart - 0x1]);
    _0x42e44b.match_available = 0x0;
  }
  _0x42e44b.insert = _0x42e44b.strstart < 0x2 ? _0x42e44b.strstart : 0x2;
  return _0x212e18 === Pt ? (ee(_0x42e44b, true), 0x0 === _0x42e44b.strm.avail_out ? 0x3 : 0x4) : _0x42e44b.sym_next && (ee(_0x42e44b, false), 0x0 === _0x42e44b.strm.avail_out) ? 0x1 : 0x2;
};
function ue(_0x869caf, _0x4654b9, _0x521ed8, _0x18b877, _0x28e79c) {
  this.good_length = _0x869caf;
  this.max_lazy = _0x4654b9;
  this.nice_length = _0x521ed8;
  this.max_chain = _0x18b877;
  this.func = _0x28e79c;
}
const ce = [new ue(0x0, 0x0, 0x0, 0x0, oe), new ue(0x4, 0x4, 0x8, 0x4, he), new ue(0x4, 0x5, 0x10, 0x8, he), new ue(0x4, 0x6, 0x20, 0x20, he), new ue(0x4, 0x4, 0x10, 0x10, le), new ue(0x8, 0x10, 0x20, 0x20, le), new ue(0x8, 0x10, 0x80, 0x80, le), new ue(0x8, 0x20, 0x80, 0x100, le), new ue(0x20, 0x80, 0x102, 0x400, le), new ue(0x20, 0x102, 0x102, 0x1000, le)];
function de() {
  this.strm = null;
  this.status = 0x0;
  this.pending_buf = null;
  this.pending_buf_size = 0x0;
  this.pending_out = 0x0;
  this.pending = 0x0;
  this.wrap = 0x0;
  this.gzhead = null;
  this.gzindex = 0x0;
  this.method = Gt;
  this.last_flush = -0x1;
  this.w_size = 0x0;
  this.w_bits = 0x0;
  this.w_mask = 0x0;
  this.window = null;
  this.window_size = 0x0;
  this.prev = null;
  this.head = null;
  this.ins_h = 0x0;
  this.hash_size = 0x0;
  this.hash_bits = 0x0;
  this.hash_mask = 0x0;
  this.hash_shift = 0x0;
  this.block_start = 0x0;
  this.match_length = 0x0;
  this.prev_match = 0x0;
  this.match_available = 0x0;
  this.strstart = 0x0;
  this.match_start = 0x0;
  this.lookahead = 0x0;
  this.prev_length = 0x0;
  this.max_chain_length = 0x0;
  this.max_lazy_match = 0x0;
  this.level = 0x0;
  this.strategy = 0x0;
  this.good_match = 0x0;
  this.nice_match = 0x0;
  this.dyn_ltree = new Uint16Array(0x47a);
  this.dyn_dtree = new Uint16Array(0x7a);
  this.bl_tree = new Uint16Array(0x4e);
  Jt(this.dyn_ltree);
  Jt(this.dyn_dtree);
  Jt(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = new Uint16Array(0x10);
  this.heap = new Uint16Array(0x23d);
  Jt(this.heap);
  this.heap_len = 0x0;
  this.heap_max = 0x0;
  this.depth = new Uint16Array(0x23d);
  Jt(this.depth);
  this.sym_buf = 0x0;
  this.lit_bufsize = 0x0;
  this.sym_next = 0x0;
  this.sym_end = 0x0;
  this.opt_len = 0x0;
  this.static_len = 0x0;
  this.matches = 0x0;
  this.insert = 0x0;
  this.bi_buf = 0x0;
  this.bi_valid = 0x0;
}
const pe = _0x55cca5 => {
  if (!_0x55cca5) {
    return 0x1;
  }
  const _0x2e842f = _0x55cca5.state;
  return !_0x2e842f || _0x2e842f.strm !== _0x55cca5 || _0x2e842f.status !== 0x2a && 0x39 !== _0x2e842f.status && 0x45 !== _0x2e842f.status && 0x49 !== _0x2e842f.status && 0x5b !== _0x2e842f.status && 0x67 !== _0x2e842f.status && _0x2e842f.status !== 0x71 && _0x2e842f.status !== 0x29a ? 0x1 : 0x0;
};
const fe = _0x4b1bc7 => {
  if (pe(_0x4b1bc7)) {
    return Kt(_0x4b1bc7, Ft);
  }
  _0x4b1bc7.total_in = _0x4b1bc7.total_out = 0x0;
  _0x4b1bc7.data_type = zt;
  const _0x192397 = _0x4b1bc7.state;
  _0x192397.pending = 0x0;
  _0x192397.pending_out = 0x0;
  if (_0x192397.wrap < 0x0) {
    _0x192397.wrap = -_0x192397.wrap;
  }
  _0x192397.status = 0x2 === _0x192397.wrap ? 0x39 : _0x192397.wrap ? 0x2a : 0x71;
  _0x4b1bc7.adler = 0x2 === _0x192397.wrap ? 0x0 : 0x1;
  _0x192397.last_flush = -0x2;
  wt(_0x192397);
  return Lt;
};
const ge = _0xa214e5 => {
  const _0x4ec3a5 = fe(_0xa214e5);
  var _0x2b2299;
  if (_0x4ec3a5 === Lt) {
    (_0x2b2299 = _0xa214e5.state).window_size = 0x2 * _0x2b2299.w_size;
    Jt(_0x2b2299.head);
    _0x2b2299.max_lazy_match = ce[_0x2b2299.level].max_lazy;
    _0x2b2299.good_match = ce[_0x2b2299.level].good_length;
    _0x2b2299.nice_match = ce[_0x2b2299.level].nice_length;
    _0x2b2299.max_chain_length = ce[_0x2b2299.level].max_chain;
    _0x2b2299.strstart = 0x0;
    _0x2b2299.block_start = 0x0;
    _0x2b2299.lookahead = 0x0;
    _0x2b2299.insert = 0x0;
    _0x2b2299.match_length = _0x2b2299.prev_length = 0x2;
    _0x2b2299.match_available = 0x0;
    _0x2b2299.ins_h = 0x0;
  }
  return _0x4ec3a5;
};
const ve = (_0x2d6d7e, _0x3e8eb4, _0x2251e1, _0x265966, _0x1d7538, _0x1a07f4) => {
  if (!_0x2d6d7e) {
    return Ft;
  }
  let _0x12f442 = 0x1;
  if (_0x3e8eb4 === It) {
    _0x3e8eb4 = 0x6;
  }
  if (_0x265966 < 0x0) {
    _0x12f442 = 0x0;
    _0x265966 = -_0x265966;
  } else if (_0x265966 > 0xf) {
    _0x12f442 = 0x2;
    _0x265966 -= 0x10;
  }
  if (_0x1d7538 < 0x1 || _0x1d7538 > 0x9 || _0x2251e1 !== Gt || _0x265966 < 0x8 || _0x265966 > 0xf || _0x3e8eb4 < 0x0 || _0x3e8eb4 > 0x9 || _0x1a07f4 < 0x0 || _0x1a07f4 > Yt || 0x8 === _0x265966 && 0x1 !== _0x12f442) {
    return Kt(_0x2d6d7e, Ft);
  }
  if (0x8 === _0x265966) {
    _0x265966 = 0x9;
  }
  const _0x11043e = new de();
  _0x2d6d7e.state = _0x11043e;
  _0x11043e.strm = _0x2d6d7e;
  _0x11043e.status = 0x2a;
  _0x11043e.wrap = _0x12f442;
  _0x11043e.gzhead = null;
  _0x11043e.w_bits = _0x265966;
  _0x11043e.w_size = 0x1 << _0x11043e.w_bits;
  _0x11043e.w_mask = _0x11043e.w_size - 0x1;
  _0x11043e.hash_bits = _0x1d7538 + 0x7;
  _0x11043e.hash_size = 0x1 << _0x11043e.hash_bits;
  _0x11043e.hash_mask = _0x11043e.hash_size - 0x1;
  _0x11043e.hash_shift = ~~((_0x11043e.hash_bits + 0x3 - 0x1) / 0x3);
  _0x11043e.window = new Uint8Array(0x2 * _0x11043e.w_size);
  _0x11043e.head = new Uint16Array(_0x11043e.hash_size);
  _0x11043e.prev = new Uint16Array(_0x11043e.w_size);
  _0x11043e.lit_bufsize = 0x1 << _0x1d7538 + 0x6;
  _0x11043e.pending_buf_size = 0x4 * _0x11043e.lit_bufsize;
  _0x11043e.pending_buf = new Uint8Array(_0x11043e.pending_buf_size);
  _0x11043e.sym_buf = _0x11043e.lit_bufsize;
  _0x11043e.sym_end = 0x3 * (_0x11043e.lit_bufsize - 0x1);
  _0x11043e.level = _0x3e8eb4;
  _0x11043e.strategy = _0x1a07f4;
  _0x11043e.method = _0x2251e1;
  return ge(_0x2d6d7e);
};
var me = {
  deflateInit: (_0x4aad8a, _0xb85926) => ve(_0x4aad8a, _0xb85926, Gt, 0xf, 0x8, Ut),
  deflateInit2: ve,
  deflateReset: ge,
  deflateResetKeep: fe,
  deflateSetHeader: (_0x4f38a2, _0x1fe8df) => pe(_0x4f38a2) || 0x2 !== _0x4f38a2.state.wrap ? Ft : (_0x4f38a2.state.gzhead = _0x1fe8df, Lt),
  deflate: (_0x5498ba, _0x2c08cb) => {
    if (pe(_0x5498ba) || _0x2c08cb > Rt || _0x2c08cb < 0x0) {
      return _0x5498ba ? Kt(_0x5498ba, Ft) : Ft;
    }
    const _0x60f997 = _0x5498ba.state;
    if (!_0x5498ba.output || 0x0 !== _0x5498ba.avail_in && !_0x5498ba.input || _0x60f997.status === 0x29a && _0x2c08cb !== Pt) {
      return Kt(_0x5498ba, 0x0 === _0x5498ba.avail_out ? kt : Ft);
    }
    const _0x2d5d34 = _0x60f997.last_flush;
    _0x60f997.last_flush = _0x2c08cb;
    if (0x0 !== _0x60f997.pending) {
      te(_0x5498ba);
      if (0x0 === _0x5498ba.avail_out) {
        _0x60f997.last_flush = -0x1;
        return Lt;
      }
    } else {
      if (0x0 === _0x5498ba.avail_in && 0x2 * _0x2c08cb - (_0x2c08cb > 0x4 ? 0x9 : 0x0) <= 0x2 * _0x2d5d34 - (_0x2d5d34 > 0x4 ? 0x9 : 0x0) && _0x2c08cb !== Pt) {
        return Kt(_0x5498ba, kt);
      }
    }
    if (_0x60f997.status === 0x29a && 0x0 !== _0x5498ba.avail_in) {
      return Kt(_0x5498ba, kt);
    }
    if (_0x60f997.status === 0x2a && 0x0 === _0x60f997.wrap) {
      _0x60f997.status = 0x71;
    }
    if (_0x60f997.status === 0x2a) {
      let _0x1d203a = Gt + (_0x60f997.w_bits - 0x8 << 0x4) << 0x8;
      let _0x3bece7 = -0x1;
      _0x3bece7 = _0x60f997.strategy >= Nt || _0x60f997.level < 0x2 ? 0x0 : _0x60f997.level < 0x6 ? 0x1 : 0x6 === _0x60f997.level ? 0x2 : 0x3;
      _0x1d203a |= _0x3bece7 << 0x6;
      if (0x0 !== _0x60f997.strstart) {
        _0x1d203a |= 0x20;
      }
      _0x1d203a += 0x1f - _0x1d203a % 0x1f;
      se(_0x60f997, _0x1d203a);
      if (0x0 !== _0x60f997.strstart) {
        se(_0x60f997, _0x5498ba.adler >>> 0x10);
        se(_0x60f997, 0xffff & _0x5498ba.adler);
      }
      _0x5498ba.adler = 0x1;
      _0x60f997.status = 0x71;
      te(_0x5498ba);
      if (0x0 !== _0x60f997.pending) {
        _0x60f997.last_flush = -0x1;
        return Lt;
      }
    }
    if (0x39 === _0x60f997.status) {
      _0x5498ba.adler = 0x0;
      ie(_0x60f997, 0x1f);
      ie(_0x60f997, 0x8b);
      ie(_0x60f997, 0x8);
      if (_0x60f997.gzhead) {
        ie(_0x60f997, (_0x60f997.gzhead.text ? 0x1 : 0x0) + (_0x60f997.gzhead.hcrc ? 0x2 : 0x0) + (_0x60f997.gzhead.extra ? 0x4 : 0x0) + (_0x60f997.gzhead.name ? 0x8 : 0x0) + (_0x60f997.gzhead.comment ? 0x10 : 0x0));
        ie(_0x60f997, 0xff & _0x60f997.gzhead.time);
        ie(_0x60f997, _0x60f997.gzhead.time >> 0x8 & 0xff);
        ie(_0x60f997, _0x60f997.gzhead.time >> 0x10 & 0xff);
        ie(_0x60f997, _0x60f997.gzhead.time >> 0x18 & 0xff);
        ie(_0x60f997, 0x9 === _0x60f997.level ? 0x2 : _0x60f997.strategy >= Nt || _0x60f997.level < 0x2 ? 0x4 : 0x0);
        ie(_0x60f997, 0xff & _0x60f997.gzhead.os);
        if (_0x60f997.gzhead.extra && _0x60f997.gzhead.extra.length) {
          ie(_0x60f997, 0xff & _0x60f997.gzhead.extra.length);
          ie(_0x60f997, _0x60f997.gzhead.extra.length >> 0x8 & 0xff);
        }
        if (_0x60f997.gzhead.hcrc) {
          _0x5498ba.adler = yt(_0x5498ba.adler, _0x60f997.pending_buf, _0x60f997.pending, 0x0);
        }
        _0x60f997.gzindex = 0x0;
        _0x60f997.status = 0x45;
      } else {
        ie(_0x60f997, 0x0);
        ie(_0x60f997, 0x0);
        ie(_0x60f997, 0x0);
        ie(_0x60f997, 0x0);
        ie(_0x60f997, 0x0);
        ie(_0x60f997, 0x9 === _0x60f997.level ? 0x2 : _0x60f997.strategy >= Nt || _0x60f997.level < 0x2 ? 0x4 : 0x0);
        ie(_0x60f997, 0x3);
        _0x60f997.status = 0x71;
        te(_0x5498ba);
        if (0x0 !== _0x60f997.pending) {
          _0x60f997.last_flush = -0x1;
          return Lt;
        }
      }
    }
    if (0x45 === _0x60f997.status) {
      if (_0x60f997.gzhead.extra) {
        let _0x16105f = _0x60f997.pending;
        let _0x50d261 = (0xffff & _0x60f997.gzhead.extra.length) - _0x60f997.gzindex;
        for (; _0x60f997.pending + _0x50d261 > _0x60f997.pending_buf_size;) {
          let _0x430d65 = _0x60f997.pending_buf_size - _0x60f997.pending;
          _0x60f997.pending_buf.set(_0x60f997.gzhead.extra.subarray(_0x60f997.gzindex, _0x60f997.gzindex + _0x430d65), _0x60f997.pending);
          _0x60f997.pending = _0x60f997.pending_buf_size;
          if (_0x60f997.gzhead.hcrc && _0x60f997.pending > _0x16105f) {
            _0x5498ba.adler = yt(_0x5498ba.adler, _0x60f997.pending_buf, _0x60f997.pending - _0x16105f, _0x16105f);
          }
          _0x60f997.gzindex += _0x430d65;
          te(_0x5498ba);
          if (0x0 !== _0x60f997.pending) {
            _0x60f997.last_flush = -0x1;
            return Lt;
          }
          _0x16105f = 0x0;
          _0x50d261 -= _0x430d65;
        }
        let _0x50620b = new Uint8Array(_0x60f997.gzhead.extra);
        _0x60f997.pending_buf.set(_0x50620b.subarray(_0x60f997.gzindex, _0x60f997.gzindex + _0x50d261), _0x60f997.pending);
        _0x60f997.pending += _0x50d261;
        if (_0x60f997.gzhead.hcrc && _0x60f997.pending > _0x16105f) {
          _0x5498ba.adler = yt(_0x5498ba.adler, _0x60f997.pending_buf, _0x60f997.pending - _0x16105f, _0x16105f);
        }
        _0x60f997.gzindex = 0x0;
      }
      _0x60f997.status = 0x49;
    }
    if (0x49 === _0x60f997.status) {
      if (_0x60f997.gzhead.name) {
        let _0x2dce73;
        let _0x2c28eb = _0x60f997.pending;
        do {
          if (_0x60f997.pending === _0x60f997.pending_buf_size) {
            if (_0x60f997.gzhead.hcrc && _0x60f997.pending > _0x2c28eb) {
              _0x5498ba.adler = yt(_0x5498ba.adler, _0x60f997.pending_buf, _0x60f997.pending - _0x2c28eb, _0x2c28eb);
            }
            te(_0x5498ba);
            if (0x0 !== _0x60f997.pending) {
              _0x60f997.last_flush = -0x1;
              return Lt;
            }
            _0x2c28eb = 0x0;
          }
          _0x2dce73 = _0x60f997.gzindex < _0x60f997.gzhead.name.length ? 0xff & _0x60f997.gzhead.name.charCodeAt(_0x60f997.gzindex++) : 0x0;
          ie(_0x60f997, _0x2dce73);
        } while (0x0 !== _0x2dce73);
        if (_0x60f997.gzhead.hcrc && _0x60f997.pending > _0x2c28eb) {
          _0x5498ba.adler = yt(_0x5498ba.adler, _0x60f997.pending_buf, _0x60f997.pending - _0x2c28eb, _0x2c28eb);
        }
        _0x60f997.gzindex = 0x0;
      }
      _0x60f997.status = 0x5b;
    }
    if (0x5b === _0x60f997.status) {
      if (_0x60f997.gzhead.comment) {
        let _0x16e4c4;
        let _0x249007 = _0x60f997.pending;
        do {
          if (_0x60f997.pending === _0x60f997.pending_buf_size) {
            if (_0x60f997.gzhead.hcrc && _0x60f997.pending > _0x249007) {
              _0x5498ba.adler = yt(_0x5498ba.adler, _0x60f997.pending_buf, _0x60f997.pending - _0x249007, _0x249007);
            }
            te(_0x5498ba);
            if (0x0 !== _0x60f997.pending) {
              _0x60f997.last_flush = -0x1;
              return Lt;
            }
            _0x249007 = 0x0;
          }
          _0x16e4c4 = _0x60f997.gzindex < _0x60f997.gzhead.comment.length ? 0xff & _0x60f997.gzhead.comment.charCodeAt(_0x60f997.gzindex++) : 0x0;
          ie(_0x60f997, _0x16e4c4);
        } while (0x0 !== _0x16e4c4);
        if (_0x60f997.gzhead.hcrc && _0x60f997.pending > _0x249007) {
          _0x5498ba.adler = yt(_0x5498ba.adler, _0x60f997.pending_buf, _0x60f997.pending - _0x249007, _0x249007);
        }
      }
      _0x60f997.status = 0x67;
    }
    if (0x67 === _0x60f997.status) {
      if (_0x60f997.gzhead.hcrc) {
        if (_0x60f997.pending + 0x2 > _0x60f997.pending_buf_size && (te(_0x5498ba), 0x0 !== _0x60f997.pending)) {
          _0x60f997.last_flush = -0x1;
          return Lt;
        }
        ie(_0x60f997, 0xff & _0x5498ba.adler);
        ie(_0x60f997, _0x5498ba.adler >> 0x8 & 0xff);
        _0x5498ba.adler = 0x0;
      }
      _0x60f997.status = 0x71;
      te(_0x5498ba);
      if (0x0 !== _0x60f997.pending) {
        _0x60f997.last_flush = -0x1;
        return Lt;
      }
    }
    if (0x0 !== _0x5498ba.avail_in || 0x0 !== _0x60f997.lookahead || _0x2c08cb !== At && _0x60f997.status !== 0x29a) {
      let _0x2de18d = 0x0 === _0x60f997.level ? oe(_0x60f997, _0x2c08cb) : _0x60f997.strategy === Nt ? ((_0xda88bd, _0x5e08fd) => {
        let _0x421946;
        for (;;) {
          if (0x0 === _0xda88bd.lookahead && (ae(_0xda88bd), 0x0 === _0xda88bd.lookahead)) {
            if (_0x5e08fd === At) {
              return 0x1;
            }
            break;
          }
          _0xda88bd.match_length = 0x0;
          _0x421946 = St(_0xda88bd, 0x0, _0xda88bd.window[_0xda88bd.strstart]);
          _0xda88bd.lookahead--;
          _0xda88bd.strstart++;
          if (_0x421946 && (ee(_0xda88bd, false), 0x0 === _0xda88bd.strm.avail_out)) {
            return 0x1;
          }
        }
        _0xda88bd.insert = 0x0;
        return _0x5e08fd === Pt ? (ee(_0xda88bd, true), 0x0 === _0xda88bd.strm.avail_out ? 0x3 : 0x4) : _0xda88bd.sym_next && (ee(_0xda88bd, false), 0x0 === _0xda88bd.strm.avail_out) ? 0x1 : 0x2;
      })(_0x60f997, _0x2c08cb) : _0x60f997.strategy === Xt ? ((_0x2bf36f, _0x20c0c1) => {
        let _0x20bbc1;
        let _0x3a19df;
        let _0x59609b;
        let _0x3d3b31;
        const _0x906ba = _0x2bf36f.window;
        for (;;) {
          if (_0x2bf36f.lookahead <= 0x102) {
            ae(_0x2bf36f);
            if (_0x2bf36f.lookahead <= 0x102 && _0x20c0c1 === At) {
              return 0x1;
            }
            if (0x0 === _0x2bf36f.lookahead) {
              break;
            }
          }
          _0x2bf36f.match_length = 0x0;
          if (_0x2bf36f.lookahead >= 0x3 && _0x2bf36f.strstart > 0x0 && (_0x59609b = _0x2bf36f.strstart - 0x1, _0x3a19df = _0x906ba[_0x59609b], _0x3a19df === _0x906ba[++_0x59609b] && _0x3a19df === _0x906ba[++_0x59609b] && _0x3a19df === _0x906ba[++_0x59609b])) {
            _0x3d3b31 = _0x2bf36f.strstart + 0x102;
            do {} while (_0x3a19df === _0x906ba[++_0x59609b] && _0x3a19df === _0x906ba[++_0x59609b] && _0x3a19df === _0x906ba[++_0x59609b] && _0x3a19df === _0x906ba[++_0x59609b] && _0x3a19df === _0x906ba[++_0x59609b] && _0x3a19df === _0x906ba[++_0x59609b] && _0x3a19df === _0x906ba[++_0x59609b] && _0x3a19df === _0x906ba[++_0x59609b] && _0x59609b < _0x3d3b31);
            _0x2bf36f.match_length = 0x102 - (_0x3d3b31 - _0x59609b);
            if (_0x2bf36f.match_length > _0x2bf36f.lookahead) {
              _0x2bf36f.match_length = _0x2bf36f.lookahead;
            }
          }
          if (_0x2bf36f.match_length >= 0x3) {
            _0x20bbc1 = St(_0x2bf36f, 0x1, _0x2bf36f.match_length - 0x3);
            _0x2bf36f.lookahead -= _0x2bf36f.match_length;
            _0x2bf36f.strstart += _0x2bf36f.match_length;
            _0x2bf36f.match_length = 0x0;
          } else {
            _0x20bbc1 = St(_0x2bf36f, 0x0, _0x2bf36f.window[_0x2bf36f.strstart]);
            _0x2bf36f.lookahead--;
            _0x2bf36f.strstart++;
          }
          if (_0x20bbc1 && (ee(_0x2bf36f, false), 0x0 === _0x2bf36f.strm.avail_out)) {
            return 0x1;
          }
        }
        _0x2bf36f.insert = 0x0;
        return _0x20c0c1 === Pt ? (ee(_0x2bf36f, true), 0x0 === _0x2bf36f.strm.avail_out ? 0x3 : 0x4) : _0x2bf36f.sym_next && (ee(_0x2bf36f, false), 0x0 === _0x2bf36f.strm.avail_out) ? 0x1 : 0x2;
      })(_0x60f997, _0x2c08cb) : ce[_0x60f997.level].func(_0x60f997, _0x2c08cb);
      if (!(0x3 !== _0x2de18d && 0x4 !== _0x2de18d)) {
        _0x60f997.status = 0x29a;
      }
      if (0x1 === _0x2de18d || 0x3 === _0x2de18d) {
        if (0x0 === _0x5498ba.avail_out) {
          _0x60f997.last_flush = -0x1;
        }
        return Lt;
      }
      if (0x2 === _0x2de18d && (_0x2c08cb === Ct ? Et(_0x60f997) : _0x2c08cb !== Rt && (Tt(_0x60f997, 0x0, 0x0, false), _0x2c08cb === Mt && (Jt(_0x60f997.head), 0x0 === _0x60f997.lookahead && (_0x60f997.strstart = 0x0, _0x60f997.block_start = 0x0, _0x60f997.insert = 0x0))), te(_0x5498ba), 0x0 === _0x5498ba.avail_out)) {
        _0x60f997.last_flush = -0x1;
        return Lt;
      }
    }
    return _0x2c08cb !== Pt ? Lt : _0x60f997.wrap <= 0x0 ? Ot : (0x2 === _0x60f997.wrap ? (ie(_0x60f997, 0xff & _0x5498ba.adler), ie(_0x60f997, _0x5498ba.adler >> 0x8 & 0xff), ie(_0x60f997, _0x5498ba.adler >> 0x10 & 0xff), ie(_0x60f997, _0x5498ba.adler >> 0x18 & 0xff), ie(_0x60f997, 0xff & _0x5498ba.total_in), ie(_0x60f997, _0x5498ba.total_in >> 0x8 & 0xff), ie(_0x60f997, _0x5498ba.total_in >> 0x10 & 0xff), ie(_0x60f997, _0x5498ba.total_in >> 0x18 & 0xff)) : (se(_0x60f997, _0x5498ba.adler >>> 0x10), se(_0x60f997, 0xffff & _0x5498ba.adler)), te(_0x5498ba), _0x60f997.wrap > 0x0 && (_0x60f997.wrap = -_0x60f997.wrap), 0x0 !== _0x60f997.pending ? Lt : Ot);
  },
  deflateEnd: _0x1210d1 => {
    if (pe(_0x1210d1)) {
      return Ft;
    }
    const _0x2341d6 = _0x1210d1.state.status;
    _0x1210d1.state = null;
    return _0x2341d6 === 0x71 ? Kt(_0x1210d1, Dt) : Lt;
  },
  deflateSetDictionary: (_0x4311f2, _0x586aa4) => {
    let _0x14fcf3 = _0x586aa4.length;
    if (pe(_0x4311f2)) {
      return Ft;
    }
    const _0x57e60b = _0x4311f2.state;
    const _0x360732 = _0x57e60b.wrap;
    if (0x2 === _0x360732 || 0x1 === _0x360732 && _0x57e60b.status !== 0x2a || _0x57e60b.lookahead) {
      return Ft;
    }
    if (0x1 === _0x360732) {
      _0x4311f2.adler = vt(_0x4311f2.adler, _0x586aa4, _0x14fcf3, 0x0);
    }
    _0x57e60b.wrap = 0x0;
    if (_0x14fcf3 >= _0x57e60b.w_size) {
      if (0x0 === _0x360732) {
        Jt(_0x57e60b.head);
        _0x57e60b.strstart = 0x0;
        _0x57e60b.block_start = 0x0;
        _0x57e60b.insert = 0x0;
      }
      let _0x2640fc = new Uint8Array(_0x57e60b.w_size);
      _0x2640fc.set(_0x586aa4.subarray(_0x14fcf3 - _0x57e60b.w_size, _0x14fcf3), 0x0);
      _0x586aa4 = _0x2640fc;
      _0x14fcf3 = _0x57e60b.w_size;
    }
    const _0x3d0b5a = _0x4311f2.avail_in;
    const _0x3e2d88 = _0x4311f2.next_in;
    const _0x5ba922 = _0x4311f2.input;
    _0x4311f2.avail_in = _0x14fcf3;
    _0x4311f2.next_in = 0x0;
    _0x4311f2.input = _0x586aa4;
    for (ae(_0x57e60b); _0x57e60b.lookahead >= 0x3;) {
      let _0x35c354 = _0x57e60b.strstart;
      let _0x44b297 = _0x57e60b.lookahead - 0x2;
      do {
        _0x57e60b.ins_h = (_0x57e60b.ins_h << _0x57e60b.hash_shift ^ _0x57e60b.window[_0x35c354 + 0x3 - 0x1]) & _0x57e60b.hash_mask;
        _0x57e60b.prev[_0x35c354 & _0x57e60b.w_mask] = _0x57e60b.head[_0x57e60b.ins_h];
        _0x57e60b.head[_0x57e60b.ins_h] = _0x35c354;
        _0x35c354++;
      } while (--_0x44b297);
      _0x57e60b.strstart = _0x35c354;
      _0x57e60b.lookahead = 0x2;
      ae(_0x57e60b);
    }
    _0x57e60b.strstart += _0x57e60b.lookahead;
    _0x57e60b.block_start = _0x57e60b.strstart;
    _0x57e60b.insert = _0x57e60b.lookahead;
    _0x57e60b.lookahead = 0x0;
    _0x57e60b.match_length = _0x57e60b.prev_length = 0x2;
    _0x57e60b.match_available = 0x0;
    _0x4311f2.next_in = _0x3e2d88;
    _0x4311f2.input = _0x5ba922;
    _0x4311f2.avail_in = _0x3d0b5a;
    _0x57e60b.wrap = _0x360732;
    return Lt;
  },
  deflateInfo: "pako deflate (from Nodeca project)"
};
const ye = (_0x539975, _0x298c96) => Object.prototype.hasOwnProperty.call(_0x539975, _0x298c96);
var xe = function (_0x205ad8) {
  const _0x5f4b6e = Array.prototype.slice.call(arguments, 0x1);
  for (; _0x5f4b6e.length;) {
    const _0x152f6a = _0x5f4b6e.shift();
    if (_0x152f6a) {
      if ("object" != typeof _0x152f6a) {
        throw new TypeError(_0x152f6a + "must be non-object");
      }
      for (const _0x10c7b0 in _0x152f6a) if (Object.prototype.hasOwnProperty.call(_0x152f6a, _0x10c7b0)) {
        _0x205ad8[_0x10c7b0] = _0x152f6a[_0x10c7b0];
      }
    }
  }
  return _0x205ad8;
};
var _e = _0x4694d5 => {
  let _0x4dc3d5 = 0x0;
  let _0x354e82 = 0x0;
  for (let _0x2503e2 = _0x4694d5.length; _0x354e82 < _0x2503e2; _0x354e82++) {
    _0x4dc3d5 += _0x4694d5[_0x354e82].length;
  }
  const _0x111248 = new Uint8Array(_0x4dc3d5);
  let _0x4ccd76 = 0x0;
  let _0x3f40a6 = 0x0;
  for (let _0x33eef9 = _0x4694d5.length; _0x4ccd76 < _0x33eef9; _0x4ccd76++) {
    let _0x98f1b = _0x4694d5[_0x4ccd76];
    _0x111248.set(_0x98f1b, _0x3f40a6);
    _0x3f40a6 += _0x98f1b.length;
  }
  return _0x111248;
};
let we = true;
try {
  String.fromCharCode.apply(null, new Uint8Array(0x1));
} catch (_0x46ee61) {
  we = false;
}
const Te = new Uint8Array(0x100);
for (let As = 0x0; As < 0x100; As++) {
  Te[As] = As >= 0xfc ? 0x6 : As >= 0xf8 ? 0x5 : As >= 0xf0 ? 0x4 : As >= 0xe0 ? 0x3 : As >= 0xc0 ? 0x2 : 0x1;
}
Te[0xfe] = Te[0xfe] = 0x1;
var be = _0x170acd => {
  if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(_0x170acd);
  }
  let _0x179079;
  let _0x48b49e;
  let _0x1174a7;
  let _0x3a1db0;
  let _0x3079af;
  let _0x34088b = _0x170acd.length;
  let _0x29d351 = 0x0;
  for (_0x3a1db0 = 0x0; _0x3a1db0 < _0x34088b; _0x3a1db0++) {
    _0x48b49e = _0x170acd.charCodeAt(_0x3a1db0);
    if (0xd800 == (0xfc00 & _0x48b49e) && _0x3a1db0 + 0x1 < _0x34088b) {
      _0x1174a7 = _0x170acd.charCodeAt(_0x3a1db0 + 0x1);
      if (0xdc00 == (0xfc00 & _0x1174a7)) {
        _0x48b49e = 0x10000 + (_0x48b49e - 0xd800 << 0xa) + (_0x1174a7 - 0xdc00);
        _0x3a1db0++;
      }
    }
    _0x29d351 += _0x48b49e < 0x80 ? 0x1 : _0x48b49e < 0x800 ? 0x2 : _0x48b49e < 0x10000 ? 0x3 : 0x4;
  }
  _0x179079 = new Uint8Array(_0x29d351);
  _0x3079af = 0x0;
  for (_0x3a1db0 = 0x0; _0x3079af < _0x29d351; _0x3a1db0++) {
    _0x48b49e = _0x170acd.charCodeAt(_0x3a1db0);
    if (0xd800 == (0xfc00 & _0x48b49e) && _0x3a1db0 + 0x1 < _0x34088b) {
      _0x1174a7 = _0x170acd.charCodeAt(_0x3a1db0 + 0x1);
      if (0xdc00 == (0xfc00 & _0x1174a7)) {
        _0x48b49e = 0x10000 + (_0x48b49e - 0xd800 << 0xa) + (_0x1174a7 - 0xdc00);
        _0x3a1db0++;
      }
    }
    if (_0x48b49e < 0x80) {
      _0x179079[_0x3079af++] = _0x48b49e;
    } else if (_0x48b49e < 0x800) {
      _0x179079[_0x3079af++] = 0xc0 | _0x48b49e >>> 0x6;
      _0x179079[_0x3079af++] = 0x80 | 0x3f & _0x48b49e;
    } else if (_0x48b49e < 0x10000) {
      _0x179079[_0x3079af++] = 0xe0 | _0x48b49e >>> 0xc;
      _0x179079[_0x3079af++] = 0x80 | _0x48b49e >>> 0x6 & 0x3f;
      _0x179079[_0x3079af++] = 0x80 | 0x3f & _0x48b49e;
    } else {
      _0x179079[_0x3079af++] = 0xf0 | _0x48b49e >>> 0x12;
      _0x179079[_0x3079af++] = 0x80 | _0x48b49e >>> 0xc & 0x3f;
      _0x179079[_0x3079af++] = 0x80 | _0x48b49e >>> 0x6 & 0x3f;
      _0x179079[_0x3079af++] = 0x80 | 0x3f & _0x48b49e;
    }
  }
  return _0x179079;
};
var Se = (_0x38f45a, _0x2a84f9) => {
  const _0x3c7e7c = _0x2a84f9 || _0x38f45a.length;
  if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(_0x38f45a.subarray(0x0, _0x2a84f9));
  }
  let _0x83737a;
  let _0x57746e;
  const _0x52f588 = new Array(0x2 * _0x3c7e7c);
  _0x57746e = 0x0;
  for (_0x83737a = 0x0; _0x83737a < _0x3c7e7c;) {
    let _0x316b4b = _0x38f45a[_0x83737a++];
    if (_0x316b4b < 0x80) {
      _0x52f588[_0x57746e++] = _0x316b4b;
      continue;
    }
    let _0x131a26 = Te[_0x316b4b];
    if (_0x131a26 > 0x4) {
      _0x52f588[_0x57746e++] = 0xfffd;
      _0x83737a += _0x131a26 - 0x1;
    } else {
      for (_0x316b4b &= 0x2 === _0x131a26 ? 0x1f : 0x3 === _0x131a26 ? 0xf : 0x7; _0x131a26 > 0x1 && _0x83737a < _0x3c7e7c;) {
        _0x316b4b = _0x316b4b << 0x6 | 0x3f & _0x38f45a[_0x83737a++];
        _0x131a26--;
      }
      if (_0x131a26 > 0x1) {
        _0x52f588[_0x57746e++] = 0xfffd;
      } else if (_0x316b4b < 0x10000) {
        _0x52f588[_0x57746e++] = _0x316b4b;
      } else {
        _0x316b4b -= 0x10000;
        _0x52f588[_0x57746e++] = 0xd800 | _0x316b4b >> 0xa & 0x3ff;
        _0x52f588[_0x57746e++] = 0xdc00 | 0x3ff & _0x316b4b;
      }
    }
  }
  return ((_0x516148, _0x1d2212) => {
    if (_0x1d2212 < 0xfffe && _0x516148.subarray && we) {
      return String.fromCharCode.apply(null, _0x516148.length === _0x1d2212 ? _0x516148 : _0x516148.subarray(0x0, _0x1d2212));
    }
    let _0x1f4d70 = '';
    for (let _0xf8174c = 0x0; _0xf8174c < _0x1d2212; _0xf8174c++) {
      _0x1f4d70 += String.fromCharCode(_0x516148[_0xf8174c]);
    }
    return _0x1f4d70;
  })(_0x52f588, _0x57746e);
};
var Ee = (_0x32e74a, _0x318db4) => {
  if ((_0x318db4 = _0x318db4 || _0x32e74a.length) > _0x32e74a.length) {
    _0x318db4 = _0x32e74a.length;
  }
  let _0x2607d8 = _0x318db4 - 0x1;
  for (; _0x2607d8 >= 0x0 && 0x80 == (0xc0 & _0x32e74a[_0x2607d8]);) {
    _0x2607d8--;
  }
  return _0x2607d8 < 0x0 || 0x0 === _0x2607d8 ? _0x318db4 : _0x2607d8 + Te[_0x32e74a[_0x2607d8]] > _0x318db4 ? _0x2607d8 : _0x318db4;
};
var Ae = function () {
  this.input = null;
  this.next_in = 0x0;
  this.avail_in = 0x0;
  this.total_in = 0x0;
  this.output = null;
  this.next_out = 0x0;
  this.avail_out = 0x0;
  this.total_out = 0x0;
  this.msg = '';
  this.state = null;
  this.data_type = 0x2;
  this.adler = 0x0;
};
const Ce = Object.prototype.toString;
const {
  Z_NO_FLUSH: Me,
  Z_SYNC_FLUSH: Pe,
  Z_FULL_FLUSH: Re,
  Z_FINISH: Le,
  Z_OK: Oe,
  Z_STREAM_END: Fe,
  Z_DEFAULT_COMPRESSION: De,
  Z_DEFAULT_STRATEGY: ke,
  Z_DEFLATED: Ie
} = _t;
function Be(_0x11757c) {
  this.options = xe({
    level: De,
    method: Ie,
    chunkSize: 0x4000,
    windowBits: 0xf,
    memLevel: 0x8,
    strategy: ke
  }, _0x11757c || {});
  let _0x41f98e = this.options;
  if (_0x41f98e.raw && _0x41f98e.windowBits > 0x0) {
    _0x41f98e.windowBits = -_0x41f98e.windowBits;
  } else if (_0x41f98e.gzip && _0x41f98e.windowBits > 0x0 && _0x41f98e.windowBits < 0x10) {
    _0x41f98e.windowBits += 0x10;
  }
  this.err = 0x0;
  this.msg = '';
  this.ended = false;
  this.chunks = [];
  this.strm = new Ae();
  this.strm.avail_out = 0x0;
  let _0x2a1200 = me.deflateInit2(this.strm, _0x41f98e.level, _0x41f98e.method, _0x41f98e.windowBits, _0x41f98e.memLevel, _0x41f98e.strategy);
  if (_0x2a1200 !== Oe) {
    throw new Error(xt[_0x2a1200]);
  }
  if (_0x41f98e.header) {
    me.deflateSetHeader(this.strm, _0x41f98e.header);
  }
  if (_0x41f98e.dictionary) {
    let _0x114914;
    _0x114914 = 'string' == typeof _0x41f98e.dictionary ? be(_0x41f98e.dictionary) : "[object ArrayBuffer]" === Ce.call(_0x41f98e.dictionary) ? new Uint8Array(_0x41f98e.dictionary) : _0x41f98e.dictionary;
    _0x2a1200 = me.deflateSetDictionary(this.strm, _0x114914);
    if (_0x2a1200 !== Oe) {
      throw new Error(xt[_0x2a1200]);
    }
    this._dict_set = true;
  }
}
function Ne(_0x5f3fe2, _0x47e52d) {
  const _0x47e02b = new Be(_0x47e52d);
  _0x47e02b.push(_0x5f3fe2, true);
  if (_0x47e02b.err) {
    throw _0x47e02b.msg || xt[_0x47e02b.err];
  }
  return _0x47e02b.result;
}
Be.prototype.push = function (_0x20f510, _0x5cf40d) {
  const _0x35f71e = this.strm;
  const _0x203b88 = this.options.chunkSize;
  let _0x4815c6;
  let _0x816f24;
  if (this.ended) {
    return false;
  }
  _0x816f24 = _0x5cf40d === ~~_0x5cf40d ? _0x5cf40d : true === _0x5cf40d ? Le : Me;
  if ('string' == typeof _0x20f510) {
    _0x35f71e.input = be(_0x20f510);
  } else if ("[object ArrayBuffer]" === Ce.call(_0x20f510)) {
    _0x35f71e.input = new Uint8Array(_0x20f510);
  } else {
    _0x35f71e.input = _0x20f510;
  }
  _0x35f71e.next_in = 0x0;
  for (_0x35f71e.avail_in = _0x35f71e.input.length;;) {
    if (0x0 === _0x35f71e.avail_out) {
      _0x35f71e.output = new Uint8Array(_0x203b88);
      _0x35f71e.next_out = 0x0;
      _0x35f71e.avail_out = _0x203b88;
    }
    if ((_0x816f24 === Pe || _0x816f24 === Re) && _0x35f71e.avail_out <= 0x6) {
      this.onData(_0x35f71e.output.subarray(0x0, _0x35f71e.next_out));
      _0x35f71e.avail_out = 0x0;
    } else {
      _0x4815c6 = me.deflate(_0x35f71e, _0x816f24);
      if (_0x4815c6 === Fe) {
        if (_0x35f71e.next_out > 0x0) {
          this.onData(_0x35f71e.output.subarray(0x0, _0x35f71e.next_out));
        }
        _0x4815c6 = me.deflateEnd(this.strm);
        this.onEnd(_0x4815c6);
        this.ended = true;
        return _0x4815c6 === Oe;
      }
      if (0x0 !== _0x35f71e.avail_out) {
        if (_0x816f24 > 0x0 && _0x35f71e.next_out > 0x0) {
          this.onData(_0x35f71e.output.subarray(0x0, _0x35f71e.next_out));
          _0x35f71e.avail_out = 0x0;
        } else {
          if (0x0 === _0x35f71e.avail_in) {
            break;
          }
        }
      } else {
        this.onData(_0x35f71e.output);
      }
    }
  }
  return true;
};
Be.prototype.onData = function (_0x36f0e0) {
  this.chunks.push(_0x36f0e0);
};
Be.prototype.onEnd = function (_0x2a8d2a) {
  if (_0x2a8d2a === Oe) {
    this.result = _e(this.chunks);
  }
  this.chunks = [];
  this.err = _0x2a8d2a;
  this.msg = this.strm.msg;
};
var Xe = {
  Deflate: Be,
  deflate: Ne,
  deflateRaw: function (_0x1611f1, _0x1ec7e2) {
    (_0x1ec7e2 = _0x1ec7e2 || {}).raw = true;
    return Ne(_0x1611f1, _0x1ec7e2);
  },
  gzip: function (_0x253f05, _0x481773) {
    (_0x481773 = _0x481773 || {}).gzip = true;
    return Ne(_0x253f05, _0x481773);
  }
};
var Ue = function (_0x5c08f5, _0x252fee) {
  let _0x38f8ae;
  let _0x368f0e;
  let _0x496a40;
  let _0x3e8dd8;
  let _0x5b563e;
  let _0x835c92;
  let _0x4b8dd8;
  let _0xf5774;
  let _0x52b41f;
  let _0x46d945;
  let _0x12e66e;
  let _0x517050;
  let _0x3d2701;
  let _0x5035d6;
  let _0x837158;
  let _0x5a5a7e;
  let _0x620268;
  let _0x5484dd;
  let _0x289b60;
  let _0x24ae74;
  let _0x2493bc;
  let _0xc1679;
  let _0x4fb24f;
  let _0xfc5cea;
  const _0x3afb7e = _0x5c08f5.state;
  _0x38f8ae = _0x5c08f5.next_in;
  _0x4fb24f = _0x5c08f5.input;
  _0x368f0e = _0x38f8ae + (_0x5c08f5.avail_in - 0x5);
  _0x496a40 = _0x5c08f5.next_out;
  _0xfc5cea = _0x5c08f5.output;
  _0x3e8dd8 = _0x496a40 - (_0x252fee - _0x5c08f5.avail_out);
  _0x5b563e = _0x496a40 + (_0x5c08f5.avail_out - 0x101);
  _0x835c92 = _0x3afb7e.dmax;
  _0x4b8dd8 = _0x3afb7e.wsize;
  _0xf5774 = _0x3afb7e.whave;
  _0x52b41f = _0x3afb7e.wnext;
  _0x46d945 = _0x3afb7e.window;
  _0x12e66e = _0x3afb7e.hold;
  _0x517050 = _0x3afb7e.bits;
  _0x3d2701 = _0x3afb7e.lencode;
  _0x5035d6 = _0x3afb7e.distcode;
  _0x837158 = (0x1 << _0x3afb7e.lenbits) - 0x1;
  _0x5a5a7e = (0x1 << _0x3afb7e.distbits) - 0x1;
  _0x3e9370: do {
    if (_0x517050 < 0xf) {
      _0x12e66e += _0x4fb24f[_0x38f8ae++] << _0x517050;
      _0x517050 += 0x8;
      _0x12e66e += _0x4fb24f[_0x38f8ae++] << _0x517050;
      _0x517050 += 0x8;
    }
    _0x620268 = _0x3d2701[_0x12e66e & _0x837158];
    _0x68b98: for (;;) {
      _0x5484dd = _0x620268 >>> 0x18;
      _0x12e66e >>>= _0x5484dd;
      _0x517050 -= _0x5484dd;
      _0x5484dd = _0x620268 >>> 0x10 & 0xff;
      if (0x0 === _0x5484dd) {
        _0xfc5cea[_0x496a40++] = 0xffff & _0x620268;
      } else {
        if (!(0x10 & _0x5484dd)) {
          if (0x40 & _0x5484dd) {
            if (0x20 & _0x5484dd) {
              _0x3afb7e.mode = 0x3f3f;
              break _0x3e9370;
            }
            _0x5c08f5.msg = "invalid literal/length code";
            _0x3afb7e.mode = 0x3f51;
            break _0x3e9370;
          }
          _0x620268 = _0x3d2701[(0xffff & _0x620268) + (_0x12e66e & (0x1 << _0x5484dd) - 0x1)];
          continue _0x68b98;
        }
        _0x289b60 = 0xffff & _0x620268;
        _0x5484dd &= 0xf;
        if (_0x5484dd) {
          if (_0x517050 < _0x5484dd) {
            _0x12e66e += _0x4fb24f[_0x38f8ae++] << _0x517050;
            _0x517050 += 0x8;
          }
          _0x289b60 += _0x12e66e & (0x1 << _0x5484dd) - 0x1;
          _0x12e66e >>>= _0x5484dd;
          _0x517050 -= _0x5484dd;
        }
        if (_0x517050 < 0xf) {
          _0x12e66e += _0x4fb24f[_0x38f8ae++] << _0x517050;
          _0x517050 += 0x8;
          _0x12e66e += _0x4fb24f[_0x38f8ae++] << _0x517050;
          _0x517050 += 0x8;
        }
        for (_0x620268 = _0x5035d6[_0x12e66e & _0x5a5a7e];;) {
          _0x5484dd = _0x620268 >>> 0x18;
          _0x12e66e >>>= _0x5484dd;
          _0x517050 -= _0x5484dd;
          _0x5484dd = _0x620268 >>> 0x10 & 0xff;
          if (0x10 & _0x5484dd) {
            _0x24ae74 = 0xffff & _0x620268;
            _0x5484dd &= 0xf;
            if (_0x517050 < _0x5484dd) {
              _0x12e66e += _0x4fb24f[_0x38f8ae++] << _0x517050;
              _0x517050 += 0x8;
              if (_0x517050 < _0x5484dd) {
                _0x12e66e += _0x4fb24f[_0x38f8ae++] << _0x517050;
                _0x517050 += 0x8;
              }
            }
            _0x24ae74 += _0x12e66e & (0x1 << _0x5484dd) - 0x1;
            if (_0x24ae74 > _0x835c92) {
              _0x5c08f5.msg = "invalid distance too far back";
              _0x3afb7e.mode = 0x3f51;
              break _0x3e9370;
            }
            _0x12e66e >>>= _0x5484dd;
            _0x517050 -= _0x5484dd;
            _0x5484dd = _0x496a40 - _0x3e8dd8;
            if (_0x24ae74 > _0x5484dd) {
              _0x5484dd = _0x24ae74 - _0x5484dd;
              if (_0x5484dd > _0xf5774 && _0x3afb7e.sane) {
                _0x5c08f5.msg = "invalid distance too far back";
                _0x3afb7e.mode = 0x3f51;
                break _0x3e9370;
              }
              _0x2493bc = 0x0;
              _0xc1679 = _0x46d945;
              if (0x0 === _0x52b41f) {
                _0x2493bc += _0x4b8dd8 - _0x5484dd;
                if (_0x5484dd < _0x289b60) {
                  _0x289b60 -= _0x5484dd;
                  do {
                    _0xfc5cea[_0x496a40++] = _0x46d945[_0x2493bc++];
                  } while (--_0x5484dd);
                  _0x2493bc = _0x496a40 - _0x24ae74;
                  _0xc1679 = _0xfc5cea;
                }
              } else {
                if (_0x52b41f < _0x5484dd) {
                  _0x2493bc += _0x4b8dd8 + _0x52b41f - _0x5484dd;
                  _0x5484dd -= _0x52b41f;
                  if (_0x5484dd < _0x289b60) {
                    _0x289b60 -= _0x5484dd;
                    do {
                      _0xfc5cea[_0x496a40++] = _0x46d945[_0x2493bc++];
                    } while (--_0x5484dd);
                    _0x2493bc = 0x0;
                    if (_0x52b41f < _0x289b60) {
                      _0x5484dd = _0x52b41f;
                      _0x289b60 -= _0x5484dd;
                      do {
                        _0xfc5cea[_0x496a40++] = _0x46d945[_0x2493bc++];
                      } while (--_0x5484dd);
                      _0x2493bc = _0x496a40 - _0x24ae74;
                      _0xc1679 = _0xfc5cea;
                    }
                  }
                } else {
                  _0x2493bc += _0x52b41f - _0x5484dd;
                  if (_0x5484dd < _0x289b60) {
                    _0x289b60 -= _0x5484dd;
                    do {
                      _0xfc5cea[_0x496a40++] = _0x46d945[_0x2493bc++];
                    } while (--_0x5484dd);
                    _0x2493bc = _0x496a40 - _0x24ae74;
                    _0xc1679 = _0xfc5cea;
                  }
                }
              }
              for (; _0x289b60 > 0x2;) {
                _0xfc5cea[_0x496a40++] = _0xc1679[_0x2493bc++];
                _0xfc5cea[_0x496a40++] = _0xc1679[_0x2493bc++];
                _0xfc5cea[_0x496a40++] = _0xc1679[_0x2493bc++];
                _0x289b60 -= 0x3;
              }
              if (_0x289b60) {
                _0xfc5cea[_0x496a40++] = _0xc1679[_0x2493bc++];
                if (_0x289b60 > 0x1) {
                  _0xfc5cea[_0x496a40++] = _0xc1679[_0x2493bc++];
                }
              }
            } else {
              _0x2493bc = _0x496a40 - _0x24ae74;
              do {
                _0xfc5cea[_0x496a40++] = _0xfc5cea[_0x2493bc++];
                _0xfc5cea[_0x496a40++] = _0xfc5cea[_0x2493bc++];
                _0xfc5cea[_0x496a40++] = _0xfc5cea[_0x2493bc++];
                _0x289b60 -= 0x3;
              } while (_0x289b60 > 0x2);
              if (_0x289b60) {
                _0xfc5cea[_0x496a40++] = _0xfc5cea[_0x2493bc++];
                if (_0x289b60 > 0x1) {
                  _0xfc5cea[_0x496a40++] = _0xfc5cea[_0x2493bc++];
                }
              }
            }
            break;
          }
          if (0x40 & _0x5484dd) {
            _0x5c08f5.msg = "invalid distance code";
            _0x3afb7e.mode = 0x3f51;
            break _0x3e9370;
          }
          _0x620268 = _0x5035d6[(0xffff & _0x620268) + (_0x12e66e & (0x1 << _0x5484dd) - 0x1)];
        }
      }
      break;
    }
  } while (_0x38f8ae < _0x368f0e && _0x496a40 < _0x5b563e);
  _0x289b60 = _0x517050 >> 0x3;
  _0x38f8ae -= _0x289b60;
  _0x517050 -= _0x289b60 << 0x3;
  _0x12e66e &= (0x1 << _0x517050) - 0x1;
  _0x5c08f5.next_in = _0x38f8ae;
  _0x5c08f5.next_out = _0x496a40;
  _0x5c08f5.avail_in = _0x38f8ae < _0x368f0e ? _0x368f0e - _0x38f8ae + 0x5 : 0x5 - (_0x38f8ae - _0x368f0e);
  _0x5c08f5.avail_out = _0x496a40 < _0x5b563e ? _0x5b563e - _0x496a40 + 0x101 : 0x101 - (_0x496a40 - _0x5b563e);
  _0x3afb7e.hold = _0x12e66e;
  _0x3afb7e.bits = _0x517050;
};
const Ge = new Uint16Array([0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xd, 0xf, 0x11, 0x13, 0x17, 0x1b, 0x1f, 0x23, 0x2b, 0x33, 0x3b, 0x43, 0x53, 0x63, 0x73, 0x83, 0xa3, 0xc3, 0xe3, 0x102, 0x0, 0x0]);
const We = new Uint8Array([0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x11, 0x11, 0x11, 0x11, 0x12, 0x12, 0x12, 0x12, 0x13, 0x13, 0x13, 0x13, 0x14, 0x14, 0x14, 0x14, 0x15, 0x15, 0x15, 0x15, 0x10, 0x48, 0x4e]);
const Ve = new Uint16Array([0x1, 0x2, 0x3, 0x4, 0x5, 0x7, 0x9, 0xd, 0x11, 0x19, 0x21, 0x31, 0x41, 0x61, 0x81, 0xc1, 0x101, 0x181, 0x201, 0x301, 0x401, 0x601, 0x801, 0xc01, 0x1001, 0x1801, 0x2001, 0x3001, 0x4001, 0x6001, 0x0, 0x0]);
const He = new Uint8Array([0x10, 0x10, 0x10, 0x10, 0x11, 0x11, 0x12, 0x12, 0x13, 0x13, 0x14, 0x14, 0x15, 0x15, 0x16, 0x16, 0x17, 0x17, 0x18, 0x18, 0x19, 0x19, 0x1a, 0x1a, 0x1b, 0x1b, 0x1c, 0x1c, 0x1d, 0x1d, 0x40, 0x40]);
var je = (_0x101381, _0x444fd3, _0x3e1ff6, _0x4f2aa7, _0x3541e5, _0x5d781f, _0x289ffe, _0x5dbb98) => {
  const _0x5c1b15 = _0x5dbb98.bits;
  let _0x47360b;
  let _0x1298e5;
  let _0x2975a5;
  let _0x45214d;
  let _0x5e697b;
  let _0x3dda06;
  let _0x416622 = 0x0;
  let _0x245222 = 0x0;
  let _0x53ed6e = 0x0;
  let _0x6b7074 = 0x0;
  let _0x3abd2c = 0x0;
  let _0x2fa983 = 0x0;
  let _0x3a5b85 = 0x0;
  let _0x12b7b2 = 0x0;
  let _0x10c5de = 0x0;
  let _0x3e29f7 = 0x0;
  let _0x5f4368 = null;
  const _0x59f909 = new Uint16Array(0x10);
  const _0x264ada = new Uint16Array(0x10);
  let _0x378cc7;
  let _0x4d90ca;
  let _0x49bf64;
  let _0x4a7ff0 = null;
  for (_0x416622 = 0x0; _0x416622 <= 0xf; _0x416622++) {
    _0x59f909[_0x416622] = 0x0;
  }
  for (_0x245222 = 0x0; _0x245222 < _0x4f2aa7; _0x245222++) {
    _0x59f909[_0x444fd3[_0x3e1ff6 + _0x245222]]++;
  }
  _0x3abd2c = _0x5c1b15;
  for (_0x6b7074 = 0xf; _0x6b7074 >= 0x1 && 0x0 === _0x59f909[_0x6b7074]; _0x6b7074--) {
    ;
  }
  if (_0x3abd2c > _0x6b7074) {
    _0x3abd2c = _0x6b7074;
  }
  if (0x0 === _0x6b7074) {
    _0x3541e5[_0x5d781f++] = 0x1400000;
    _0x3541e5[_0x5d781f++] = 0x1400000;
    _0x5dbb98.bits = 0x1;
    return 0x0;
  }
  for (_0x53ed6e = 0x1; _0x53ed6e < _0x6b7074 && 0x0 === _0x59f909[_0x53ed6e]; _0x53ed6e++) {
    ;
  }
  if (_0x3abd2c < _0x53ed6e) {
    _0x3abd2c = _0x53ed6e;
  }
  _0x12b7b2 = 0x1;
  for (_0x416622 = 0x1; _0x416622 <= 0xf; _0x416622++) {
    _0x12b7b2 <<= 0x1;
    _0x12b7b2 -= _0x59f909[_0x416622];
    if (_0x12b7b2 < 0x0) {
      return -0x1;
    }
  }
  if (_0x12b7b2 > 0x0 && (0x0 === _0x101381 || 0x1 !== _0x6b7074)) {
    return -0x1;
  }
  _0x264ada[0x1] = 0x0;
  for (_0x416622 = 0x1; _0x416622 < 0xf; _0x416622++) {
    _0x264ada[_0x416622 + 0x1] = _0x264ada[_0x416622] + _0x59f909[_0x416622];
  }
  for (_0x245222 = 0x0; _0x245222 < _0x4f2aa7; _0x245222++) {
    if (0x0 !== _0x444fd3[_0x3e1ff6 + _0x245222]) {
      _0x289ffe[_0x264ada[_0x444fd3[_0x3e1ff6 + _0x245222]]++] = _0x245222;
    }
  }
  if (0x0 === _0x101381) {
    _0x5f4368 = _0x4a7ff0 = _0x289ffe;
    _0x3dda06 = 0x14;
  } else if (0x1 === _0x101381) {
    _0x5f4368 = Ge;
    _0x4a7ff0 = We;
    _0x3dda06 = 0x101;
  } else {
    _0x5f4368 = Ve;
    _0x4a7ff0 = He;
    _0x3dda06 = 0x0;
  }
  _0x3e29f7 = 0x0;
  _0x245222 = 0x0;
  _0x416622 = _0x53ed6e;
  _0x5e697b = _0x5d781f;
  _0x2fa983 = _0x3abd2c;
  _0x3a5b85 = 0x0;
  _0x2975a5 = -0x1;
  _0x10c5de = 0x1 << _0x3abd2c;
  _0x45214d = _0x10c5de - 0x1;
  if (0x1 === _0x101381 && _0x10c5de > 0x354 || 0x2 === _0x101381 && _0x10c5de > 0x250) {
    return 0x1;
  }
  for (;;) {
    _0x378cc7 = _0x416622 - _0x3a5b85;
    if (_0x289ffe[_0x245222] + 0x1 < _0x3dda06) {
      _0x4d90ca = 0x0;
      _0x49bf64 = _0x289ffe[_0x245222];
    } else if (_0x289ffe[_0x245222] >= _0x3dda06) {
      _0x4d90ca = _0x4a7ff0[_0x289ffe[_0x245222] - _0x3dda06];
      _0x49bf64 = _0x5f4368[_0x289ffe[_0x245222] - _0x3dda06];
    } else {
      _0x4d90ca = 0x60;
      _0x49bf64 = 0x0;
    }
    _0x47360b = 0x1 << _0x416622 - _0x3a5b85;
    _0x1298e5 = 0x1 << _0x2fa983;
    _0x53ed6e = _0x1298e5;
    do {
      _0x1298e5 -= _0x47360b;
      _0x3541e5[_0x5e697b + (_0x3e29f7 >> _0x3a5b85) + _0x1298e5] = _0x378cc7 << 0x18 | _0x4d90ca << 0x10 | _0x49bf64;
    } while (0x0 !== _0x1298e5);
    for (_0x47360b = 0x1 << _0x416622 - 0x1; _0x3e29f7 & _0x47360b;) {
      _0x47360b >>= 0x1;
    }
    if (0x0 !== _0x47360b) {
      _0x3e29f7 &= _0x47360b - 0x1;
      _0x3e29f7 += _0x47360b;
    } else {
      _0x3e29f7 = 0x0;
    }
    _0x245222++;
    if (0x0 === --_0x59f909[_0x416622]) {
      if (_0x416622 === _0x6b7074) {
        break;
      }
      _0x416622 = _0x444fd3[_0x3e1ff6 + _0x289ffe[_0x245222]];
    }
    if (_0x416622 > _0x3abd2c && (_0x3e29f7 & _0x45214d) !== _0x2975a5) {
      if (0x0 === _0x3a5b85) {
        _0x3a5b85 = _0x3abd2c;
      }
      _0x5e697b += _0x53ed6e;
      _0x2fa983 = _0x416622 - _0x3a5b85;
      for (_0x12b7b2 = 0x1 << _0x2fa983; _0x2fa983 + _0x3a5b85 < _0x6b7074 && (_0x12b7b2 -= _0x59f909[_0x2fa983 + _0x3a5b85], !(_0x12b7b2 <= 0x0));) {
        _0x2fa983++;
        _0x12b7b2 <<= 0x1;
      }
      _0x10c5de += 0x1 << _0x2fa983;
      if (0x1 === _0x101381 && _0x10c5de > 0x354 || 0x2 === _0x101381 && _0x10c5de > 0x250) {
        return 0x1;
      }
      _0x2975a5 = _0x3e29f7 & _0x45214d;
      _0x3541e5[_0x2975a5] = _0x3abd2c << 0x18 | _0x2fa983 << 0x10 | _0x5e697b - _0x5d781f;
    }
  }
  if (0x0 !== _0x3e29f7) {
    _0x3541e5[_0x5e697b + _0x3e29f7] = _0x416622 - _0x3a5b85 << 0x18 | 4194304;
  }
  _0x5dbb98.bits = _0x3abd2c;
  return 0x0;
};
const {
  Z_FINISH: qe,
  Z_BLOCK: Ke,
  Z_TREES: Ze,
  Z_OK: Je,
  Z_STREAM_END: Qe,
  Z_NEED_DICT: $e,
  Z_STREAM_ERROR: ti,
  Z_DATA_ERROR: ei,
  Z_MEM_ERROR: ii,
  Z_BUF_ERROR: si,
  Z_DEFLATED: ri
} = _t;
const fi = _0x318951 => (_0x318951 >>> 0x18 & 0xff) + (_0x318951 >>> 0x8 & 0xff00) + ((0xff00 & _0x318951) << 0x8) + ((0xff & _0x318951) << 0x18);
function gi() {
  this.strm = null;
  this.mode = 0x0;
  this.last = false;
  this.wrap = 0x0;
  this.havedict = false;
  this.flags = 0x0;
  this.dmax = 0x0;
  this.check = 0x0;
  this.total = 0x0;
  this.head = null;
  this.wbits = 0x0;
  this.wsize = 0x0;
  this.whave = 0x0;
  this.wnext = 0x0;
  this.window = null;
  this.hold = 0x0;
  this.bits = 0x0;
  this.length = 0x0;
  this.offset = 0x0;
  this.extra = 0x0;
  this.lencode = null;
  this.distcode = null;
  this.lenbits = 0x0;
  this.distbits = 0x0;
  this.ncode = 0x0;
  this.nlen = 0x0;
  this.ndist = 0x0;
  this.have = 0x0;
  this.next = null;
  this.lens = new Uint16Array(0x140);
  this.work = new Uint16Array(0x120);
  this.lendyn = null;
  this.distdyn = null;
  this.sane = 0x0;
  this.back = 0x0;
  this.was = 0x0;
}
const vi = _0x328b88 => {
  if (!_0x328b88) {
    return 0x1;
  }
  const _0x3309ac = _0x328b88.state;
  return !_0x3309ac || _0x3309ac.strm !== _0x328b88 || _0x3309ac.mode < 0x3f34 || _0x3309ac.mode > 0x3f53 ? 0x1 : 0x0;
};
const mi = _0x13d39d => {
  if (vi(_0x13d39d)) {
    return ti;
  }
  const _0x1ff9ce = _0x13d39d.state;
  _0x13d39d.total_in = _0x13d39d.total_out = _0x1ff9ce.total = 0x0;
  _0x13d39d.msg = '';
  if (_0x1ff9ce.wrap) {
    _0x13d39d.adler = 0x1 & _0x1ff9ce.wrap;
  }
  _0x1ff9ce.mode = 0x3f34;
  _0x1ff9ce.last = 0x0;
  _0x1ff9ce.havedict = 0x0;
  _0x1ff9ce.flags = -0x1;
  _0x1ff9ce.dmax = 0x8000;
  _0x1ff9ce.head = null;
  _0x1ff9ce.hold = 0x0;
  _0x1ff9ce.bits = 0x0;
  _0x1ff9ce.lencode = _0x1ff9ce.lendyn = new Int32Array(0x354);
  _0x1ff9ce.distcode = _0x1ff9ce.distdyn = new Int32Array(0x250);
  _0x1ff9ce.sane = 0x1;
  _0x1ff9ce.back = -0x1;
  return Je;
};
const yi = _0x1314bf => {
  if (vi(_0x1314bf)) {
    return ti;
  }
  const _0x2de3aa = _0x1314bf.state;
  _0x2de3aa.wsize = 0x0;
  _0x2de3aa.whave = 0x0;
  _0x2de3aa.wnext = 0x0;
  return mi(_0x1314bf);
};
const xi = (_0x518cf1, _0x5d00e4) => {
  let _0x3629de;
  if (vi(_0x518cf1)) {
    return ti;
  }
  const _0x5bffdc = _0x518cf1.state;
  if (_0x5d00e4 < 0x0) {
    _0x3629de = 0x0;
    _0x5d00e4 = -_0x5d00e4;
  } else {
    _0x3629de = 0x5 + (_0x5d00e4 >> 0x4);
    if (_0x5d00e4 < 0x30) {
      _0x5d00e4 &= 0xf;
    }
  }
  return _0x5d00e4 && (_0x5d00e4 < 0x8 || _0x5d00e4 > 0xf) ? ti : (null !== _0x5bffdc.window && _0x5bffdc.wbits !== _0x5d00e4 && (_0x5bffdc.window = null), _0x5bffdc.wrap = _0x3629de, _0x5bffdc.wbits = _0x5d00e4, yi(_0x518cf1));
};
const _i = (_0x27f480, _0x1249ac) => {
  if (!_0x27f480) {
    return ti;
  }
  const _0x5817ea = new gi();
  _0x27f480.state = _0x5817ea;
  _0x5817ea.strm = _0x27f480;
  _0x5817ea.window = null;
  _0x5817ea.mode = 0x3f34;
  const _0x4c3c6a = xi(_0x27f480, _0x1249ac);
  if (_0x4c3c6a !== Je) {
    _0x27f480.state = null;
  }
  return _0x4c3c6a;
};
let wi;
let Ti;
let bi = true;
const Si = _0x308686 => {
  if (bi) {
    wi = new Int32Array(0x200);
    Ti = new Int32Array(0x20);
    let _0x19510b = 0x0;
    for (; _0x19510b < 0x90;) {
      _0x308686.lens[_0x19510b++] = 0x8;
    }
    for (; _0x19510b < 0x100;) {
      _0x308686.lens[_0x19510b++] = 0x9;
    }
    for (; _0x19510b < 0x118;) {
      _0x308686.lens[_0x19510b++] = 0x7;
    }
    for (; _0x19510b < 0x120;) {
      _0x308686.lens[_0x19510b++] = 0x8;
    }
    je(0x1, _0x308686.lens, 0x0, 0x120, wi, 0x0, _0x308686.work, {
      bits: 0x9
    });
    for (_0x19510b = 0x0; _0x19510b < 0x20;) {
      _0x308686.lens[_0x19510b++] = 0x5;
    }
    je(0x2, _0x308686.lens, 0x0, 0x20, Ti, 0x0, _0x308686.work, {
      bits: 0x5
    });
    bi = false;
  }
  _0x308686.lencode = wi;
  _0x308686.lenbits = 0x9;
  _0x308686.distcode = Ti;
  _0x308686.distbits = 0x5;
};
const Ei = (_0x1a5f54, _0x2c280f, _0x551dfc, _0x17a102) => {
  let _0x275548;
  const _0x5551fd = _0x1a5f54.state;
  if (null === _0x5551fd.window) {
    _0x5551fd.wsize = 0x1 << _0x5551fd.wbits;
    _0x5551fd.wnext = 0x0;
    _0x5551fd.whave = 0x0;
    _0x5551fd.window = new Uint8Array(_0x5551fd.wsize);
  }
  if (_0x17a102 >= _0x5551fd.wsize) {
    _0x5551fd.window.set(_0x2c280f.subarray(_0x551dfc - _0x5551fd.wsize, _0x551dfc), 0x0);
    _0x5551fd.wnext = 0x0;
    _0x5551fd.whave = _0x5551fd.wsize;
  } else {
    _0x275548 = _0x5551fd.wsize - _0x5551fd.wnext;
    if (_0x275548 > _0x17a102) {
      _0x275548 = _0x17a102;
    }
    _0x5551fd.window.set(_0x2c280f.subarray(_0x551dfc - _0x17a102, _0x551dfc - _0x17a102 + _0x275548), _0x5551fd.wnext);
    if (_0x17a102 -= _0x275548) {
      _0x5551fd.window.set(_0x2c280f.subarray(_0x551dfc - _0x17a102, _0x551dfc), 0x0);
      _0x5551fd.wnext = _0x17a102;
      _0x5551fd.whave = _0x5551fd.wsize;
    } else {
      _0x5551fd.wnext += _0x275548;
      if (_0x5551fd.wnext === _0x5551fd.wsize) {
        _0x5551fd.wnext = 0x0;
      }
      if (_0x5551fd.whave < _0x5551fd.wsize) {
        _0x5551fd.whave += _0x275548;
      }
    }
  }
  return 0x0;
};
var Ai = {
  inflateReset: yi,
  inflateReset2: xi,
  inflateResetKeep: mi,
  inflateInit: _0x5c253f => _i(_0x5c253f, 0xf),
  inflateInit2: _i,
  inflate: (_0x12f947, _0xf6053a) => {
    let _0x597533;
    let _0x4b4adb;
    let _0x591b57;
    let _0x1c5dab;
    let _0xcee82d;
    let _0x4f8ed1;
    let _0x4e0649;
    let _0x42ed7d;
    let _0x450757;
    let _0x478e59;
    let _0x24fd84;
    let _0x3b6af0;
    let _0x5c145a;
    let _0x1a8080;
    let _0x5cb7d7;
    let _0x328eb1;
    let _0x288ad8;
    let _0x564a43;
    let _0xc61fb;
    let _0x4c2aad;
    let _0x483843;
    let _0x3788bf;
    let _0x34b861 = 0x0;
    const _0x173b16 = new Uint8Array(0x4);
    let _0x4e0416;
    let _0x185670;
    const _0x40fe8f = new Uint8Array([0x10, 0x11, 0x12, 0x0, 0x8, 0x7, 0x9, 0x6, 0xa, 0x5, 0xb, 0x4, 0xc, 0x3, 0xd, 0x2, 0xe, 0x1, 0xf]);
    if (vi(_0x12f947) || !_0x12f947.output || !_0x12f947.input && 0x0 !== _0x12f947.avail_in) {
      return ti;
    }
    _0x597533 = _0x12f947.state;
    if (_0x597533.mode === 0x3f3f) {
      _0x597533.mode = 0x3f40;
    }
    _0xcee82d = _0x12f947.next_out;
    _0x591b57 = _0x12f947.output;
    _0x4e0649 = _0x12f947.avail_out;
    _0x1c5dab = _0x12f947.next_in;
    _0x4b4adb = _0x12f947.input;
    _0x4f8ed1 = _0x12f947.avail_in;
    _0x42ed7d = _0x597533.hold;
    _0x450757 = _0x597533.bits;
    _0x478e59 = _0x4f8ed1;
    _0x24fd84 = _0x4e0649;
    _0x3788bf = Je;
    _0x1f988c: for (;;) {
      switch (_0x597533.mode) {
        case 0x3f34:
          if (0x0 === _0x597533.wrap) {
            _0x597533.mode = 0x3f40;
            break;
          }
          for (; _0x450757 < 0x10;) {
            if (0x0 === _0x4f8ed1) {
              break _0x1f988c;
            }
            _0x4f8ed1--;
            _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
            _0x450757 += 0x8;
          }
          if (0x2 & _0x597533.wrap && 0x8b1f === _0x42ed7d) {
            if (0x0 === _0x597533.wbits) {
              _0x597533.wbits = 0xf;
            }
            _0x597533.check = 0x0;
            _0x173b16[0x0] = 0xff & _0x42ed7d;
            _0x173b16[0x1] = _0x42ed7d >>> 0x8 & 0xff;
            _0x597533.check = yt(_0x597533.check, _0x173b16, 0x2, 0x0);
            _0x42ed7d = 0x0;
            _0x450757 = 0x0;
            _0x597533.mode = 0x3f35;
            break;
          }
          if (_0x597533.head) {
            _0x597533.head.done = false;
          }
          if (!(0x1 & _0x597533.wrap) || (((0xff & _0x42ed7d) << 0x8) + (_0x42ed7d >> 0x8)) % 0x1f) {
            _0x12f947.msg = "incorrect header check";
            _0x597533.mode = 0x3f51;
            break;
          }
          if ((0xf & _0x42ed7d) !== ri) {
            _0x12f947.msg = "unknown compression method";
            _0x597533.mode = 0x3f51;
            break;
          }
          _0x42ed7d >>>= 0x4;
          _0x450757 -= 0x4;
          _0x483843 = 0x8 + (0xf & _0x42ed7d);
          if (0x0 === _0x597533.wbits) {
            _0x597533.wbits = _0x483843;
          }
          if (_0x483843 > 0xf || _0x483843 > _0x597533.wbits) {
            _0x12f947.msg = "invalid window size";
            _0x597533.mode = 0x3f51;
            break;
          }
          _0x597533.dmax = 0x1 << _0x597533.wbits;
          _0x597533.flags = 0x0;
          _0x12f947.adler = _0x597533.check = 0x1;
          _0x597533.mode = 0x200 & _0x42ed7d ? 0x3f3d : 0x3f3f;
          _0x42ed7d = 0x0;
          _0x450757 = 0x0;
          break;
        case 0x3f35:
          for (; _0x450757 < 0x10;) {
            if (0x0 === _0x4f8ed1) {
              break _0x1f988c;
            }
            _0x4f8ed1--;
            _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
            _0x450757 += 0x8;
          }
          _0x597533.flags = _0x42ed7d;
          if ((0xff & _0x597533.flags) !== ri) {
            _0x12f947.msg = "unknown compression method";
            _0x597533.mode = 0x3f51;
            break;
          }
          if (0xe000 & _0x597533.flags) {
            _0x12f947.msg = "unknown header flags set";
            _0x597533.mode = 0x3f51;
            break;
          }
          if (_0x597533.head) {
            _0x597533.head.text = _0x42ed7d >> 0x8 & 0x1;
          }
          if (0x200 & _0x597533.flags && 0x4 & _0x597533.wrap) {
            _0x173b16[0x0] = 0xff & _0x42ed7d;
            _0x173b16[0x1] = _0x42ed7d >>> 0x8 & 0xff;
            _0x597533.check = yt(_0x597533.check, _0x173b16, 0x2, 0x0);
          }
          _0x42ed7d = 0x0;
          _0x450757 = 0x0;
          _0x597533.mode = 0x3f36;
        case 0x3f36:
          for (; _0x450757 < 0x20;) {
            if (0x0 === _0x4f8ed1) {
              break _0x1f988c;
            }
            _0x4f8ed1--;
            _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
            _0x450757 += 0x8;
          }
          if (_0x597533.head) {
            _0x597533.head.time = _0x42ed7d;
          }
          if (0x200 & _0x597533.flags && 0x4 & _0x597533.wrap) {
            _0x173b16[0x0] = 0xff & _0x42ed7d;
            _0x173b16[0x1] = _0x42ed7d >>> 0x8 & 0xff;
            _0x173b16[0x2] = _0x42ed7d >>> 0x10 & 0xff;
            _0x173b16[0x3] = _0x42ed7d >>> 0x18 & 0xff;
            _0x597533.check = yt(_0x597533.check, _0x173b16, 0x4, 0x0);
          }
          _0x42ed7d = 0x0;
          _0x450757 = 0x0;
          _0x597533.mode = 0x3f37;
        case 0x3f37:
          for (; _0x450757 < 0x10;) {
            if (0x0 === _0x4f8ed1) {
              break _0x1f988c;
            }
            _0x4f8ed1--;
            _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
            _0x450757 += 0x8;
          }
          if (_0x597533.head) {
            _0x597533.head.xflags = 0xff & _0x42ed7d;
            _0x597533.head.os = _0x42ed7d >> 0x8;
          }
          if (0x200 & _0x597533.flags && 0x4 & _0x597533.wrap) {
            _0x173b16[0x0] = 0xff & _0x42ed7d;
            _0x173b16[0x1] = _0x42ed7d >>> 0x8 & 0xff;
            _0x597533.check = yt(_0x597533.check, _0x173b16, 0x2, 0x0);
          }
          _0x42ed7d = 0x0;
          _0x450757 = 0x0;
          _0x597533.mode = 0x3f38;
        case 0x3f38:
          if (0x400 & _0x597533.flags) {
            for (; _0x450757 < 0x10;) {
              if (0x0 === _0x4f8ed1) {
                break _0x1f988c;
              }
              _0x4f8ed1--;
              _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
              _0x450757 += 0x8;
            }
            _0x597533.length = _0x42ed7d;
            if (_0x597533.head) {
              _0x597533.head.extra_len = _0x42ed7d;
            }
            if (0x200 & _0x597533.flags && 0x4 & _0x597533.wrap) {
              _0x173b16[0x0] = 0xff & _0x42ed7d;
              _0x173b16[0x1] = _0x42ed7d >>> 0x8 & 0xff;
              _0x597533.check = yt(_0x597533.check, _0x173b16, 0x2, 0x0);
            }
            _0x42ed7d = 0x0;
            _0x450757 = 0x0;
          } else if (_0x597533.head) {
            _0x597533.head.extra = null;
          }
          _0x597533.mode = 0x3f39;
        case 0x3f39:
          if (0x400 & _0x597533.flags && (_0x3b6af0 = _0x597533.length, _0x3b6af0 > _0x4f8ed1 && (_0x3b6af0 = _0x4f8ed1), _0x3b6af0 && (_0x597533.head && (_0x483843 = _0x597533.head.extra_len - _0x597533.length, _0x597533.head.extra || (_0x597533.head.extra = new Uint8Array(_0x597533.head.extra_len)), _0x597533.head.extra.set(_0x4b4adb.subarray(_0x1c5dab, _0x1c5dab + _0x3b6af0), _0x483843)), 0x200 & _0x597533.flags && 0x4 & _0x597533.wrap && (_0x597533.check = yt(_0x597533.check, _0x4b4adb, _0x3b6af0, _0x1c5dab)), _0x4f8ed1 -= _0x3b6af0, _0x1c5dab += _0x3b6af0, _0x597533.length -= _0x3b6af0), _0x597533.length)) {
            break _0x1f988c;
          }
          _0x597533.length = 0x0;
          _0x597533.mode = 0x3f3a;
        case 0x3f3a:
          if (0x800 & _0x597533.flags) {
            if (0x0 === _0x4f8ed1) {
              break _0x1f988c;
            }
            _0x3b6af0 = 0x0;
            do {
              _0x483843 = _0x4b4adb[_0x1c5dab + _0x3b6af0++];
              if (_0x597533.head && _0x483843 && _0x597533.length < 0x10000) {
                _0x597533.head.name += String.fromCharCode(_0x483843);
              }
            } while (_0x483843 && _0x3b6af0 < _0x4f8ed1);
            if (0x200 & _0x597533.flags && 0x4 & _0x597533.wrap) {
              _0x597533.check = yt(_0x597533.check, _0x4b4adb, _0x3b6af0, _0x1c5dab);
            }
            _0x4f8ed1 -= _0x3b6af0;
            _0x1c5dab += _0x3b6af0;
            if (_0x483843) {
              break _0x1f988c;
            }
          } else if (_0x597533.head) {
            _0x597533.head.name = null;
          }
          _0x597533.length = 0x0;
          _0x597533.mode = 0x3f3b;
        case 0x3f3b:
          if (0x1000 & _0x597533.flags) {
            if (0x0 === _0x4f8ed1) {
              break _0x1f988c;
            }
            _0x3b6af0 = 0x0;
            do {
              _0x483843 = _0x4b4adb[_0x1c5dab + _0x3b6af0++];
              if (_0x597533.head && _0x483843 && _0x597533.length < 0x10000) {
                _0x597533.head.comment += String.fromCharCode(_0x483843);
              }
            } while (_0x483843 && _0x3b6af0 < _0x4f8ed1);
            if (0x200 & _0x597533.flags && 0x4 & _0x597533.wrap) {
              _0x597533.check = yt(_0x597533.check, _0x4b4adb, _0x3b6af0, _0x1c5dab);
            }
            _0x4f8ed1 -= _0x3b6af0;
            _0x1c5dab += _0x3b6af0;
            if (_0x483843) {
              break _0x1f988c;
            }
          } else if (_0x597533.head) {
            _0x597533.head.comment = null;
          }
          _0x597533.mode = 0x3f3c;
        case 0x3f3c:
          if (0x200 & _0x597533.flags) {
            for (; _0x450757 < 0x10;) {
              if (0x0 === _0x4f8ed1) {
                break _0x1f988c;
              }
              _0x4f8ed1--;
              _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
              _0x450757 += 0x8;
            }
            if (0x4 & _0x597533.wrap && _0x42ed7d !== (0xffff & _0x597533.check)) {
              _0x12f947.msg = "header crc mismatch";
              _0x597533.mode = 0x3f51;
              break;
            }
            _0x42ed7d = 0x0;
            _0x450757 = 0x0;
          }
          if (_0x597533.head) {
            _0x597533.head.hcrc = _0x597533.flags >> 0x9 & 0x1;
            _0x597533.head.done = true;
          }
          _0x12f947.adler = _0x597533.check = 0x0;
          _0x597533.mode = 0x3f3f;
          break;
        case 0x3f3d:
          for (; _0x450757 < 0x20;) {
            if (0x0 === _0x4f8ed1) {
              break _0x1f988c;
            }
            _0x4f8ed1--;
            _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
            _0x450757 += 0x8;
          }
          _0x12f947.adler = _0x597533.check = (_0x42ed7d >>> 0x18 & 0xff) + (_0x42ed7d >>> 0x8 & 0xff00) + ((0xff00 & _0x42ed7d) << 0x8) + ((0xff & _0x42ed7d) << 0x18);
          _0x42ed7d = 0x0;
          _0x450757 = 0x0;
          _0x597533.mode = 0x3f3e;
        case 0x3f3e:
          if (0x0 === _0x597533.havedict) {
            _0x12f947.next_out = _0xcee82d;
            _0x12f947.avail_out = _0x4e0649;
            _0x12f947.next_in = _0x1c5dab;
            _0x12f947.avail_in = _0x4f8ed1;
            _0x597533.hold = _0x42ed7d;
            _0x597533.bits = _0x450757;
            return $e;
          }
          _0x12f947.adler = _0x597533.check = 0x1;
          _0x597533.mode = 0x3f3f;
        case 0x3f3f:
          if (_0xf6053a === Ke || _0xf6053a === Ze) {
            break _0x1f988c;
          }
        case 0x3f40:
          if (_0x597533.last) {
            _0x42ed7d >>>= 0x7 & _0x450757;
            _0x450757 -= 0x7 & _0x450757;
            _0x597533.mode = 0x3f4e;
            break;
          }
          for (; _0x450757 < 0x3;) {
            if (0x0 === _0x4f8ed1) {
              break _0x1f988c;
            }
            _0x4f8ed1--;
            _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
            _0x450757 += 0x8;
          }
          _0x597533.last = 0x1 & _0x42ed7d;
          _0x42ed7d >>>= 0x1;
          _0x450757 -= 0x1;
          switch (0x3 & _0x42ed7d) {
            case 0x0:
              _0x597533.mode = 0x3f41;
              break;
            case 0x1:
              Si(_0x597533);
              _0x597533.mode = 0x3f47;
              if (_0xf6053a === Ze) {
                _0x42ed7d >>>= 0x2;
                _0x450757 -= 0x2;
                break _0x1f988c;
              }
              break;
            case 0x2:
              _0x597533.mode = 0x3f44;
              break;
            case 0x3:
              _0x12f947.msg = "invalid block type";
              _0x597533.mode = 0x3f51;
          }
          _0x42ed7d >>>= 0x2;
          _0x450757 -= 0x2;
          break;
        case 0x3f41:
          _0x42ed7d >>>= 0x7 & _0x450757;
          for (_0x450757 -= 0x7 & _0x450757; _0x450757 < 0x20;) {
            if (0x0 === _0x4f8ed1) {
              break _0x1f988c;
            }
            _0x4f8ed1--;
            _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
            _0x450757 += 0x8;
          }
          if ((0xffff & _0x42ed7d) != (_0x42ed7d >>> 0x10 ^ 0xffff)) {
            _0x12f947.msg = "invalid stored block lengths";
            _0x597533.mode = 0x3f51;
            break;
          }
          _0x597533.length = 0xffff & _0x42ed7d;
          _0x42ed7d = 0x0;
          _0x450757 = 0x0;
          _0x597533.mode = 0x3f42;
          if (_0xf6053a === Ze) {
            break _0x1f988c;
          }
        case 0x3f42:
          _0x597533.mode = 0x3f43;
        case 0x3f43:
          _0x3b6af0 = _0x597533.length;
          if (_0x3b6af0) {
            if (_0x3b6af0 > _0x4f8ed1) {
              _0x3b6af0 = _0x4f8ed1;
            }
            if (_0x3b6af0 > _0x4e0649) {
              _0x3b6af0 = _0x4e0649;
            }
            if (0x0 === _0x3b6af0) {
              break _0x1f988c;
            }
            _0x591b57.set(_0x4b4adb.subarray(_0x1c5dab, _0x1c5dab + _0x3b6af0), _0xcee82d);
            _0x4f8ed1 -= _0x3b6af0;
            _0x1c5dab += _0x3b6af0;
            _0x4e0649 -= _0x3b6af0;
            _0xcee82d += _0x3b6af0;
            _0x597533.length -= _0x3b6af0;
            break;
          }
          _0x597533.mode = 0x3f3f;
          break;
        case 0x3f44:
          for (; _0x450757 < 0xe;) {
            if (0x0 === _0x4f8ed1) {
              break _0x1f988c;
            }
            _0x4f8ed1--;
            _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
            _0x450757 += 0x8;
          }
          _0x597533.nlen = 0x101 + (0x1f & _0x42ed7d);
          _0x42ed7d >>>= 0x5;
          _0x450757 -= 0x5;
          _0x597533.ndist = 0x1 + (0x1f & _0x42ed7d);
          _0x42ed7d >>>= 0x5;
          _0x450757 -= 0x5;
          _0x597533.ncode = 0x4 + (0xf & _0x42ed7d);
          _0x42ed7d >>>= 0x4;
          _0x450757 -= 0x4;
          if (_0x597533.nlen > 0x11e || _0x597533.ndist > 0x1e) {
            _0x12f947.msg = "too many length or distance symbols";
            _0x597533.mode = 0x3f51;
            break;
          }
          _0x597533.have = 0x0;
          _0x597533.mode = 0x3f45;
        case 0x3f45:
          for (; _0x597533.have < _0x597533.ncode;) {
            for (; _0x450757 < 0x3;) {
              if (0x0 === _0x4f8ed1) {
                break _0x1f988c;
              }
              _0x4f8ed1--;
              _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
              _0x450757 += 0x8;
            }
            _0x597533.lens[_0x40fe8f[_0x597533.have++]] = 0x7 & _0x42ed7d;
            _0x42ed7d >>>= 0x3;
            _0x450757 -= 0x3;
          }
          for (; _0x597533.have < 0x13;) {
            _0x597533.lens[_0x40fe8f[_0x597533.have++]] = 0x0;
          }
          _0x597533.lencode = _0x597533.lendyn;
          _0x597533.lenbits = 0x7;
          _0x4e0416 = {
            bits: _0x597533.lenbits
          };
          _0x3788bf = je(0x0, _0x597533.lens, 0x0, 0x13, _0x597533.lencode, 0x0, _0x597533.work, _0x4e0416);
          _0x597533.lenbits = _0x4e0416.bits;
          if (_0x3788bf) {
            _0x12f947.msg = "invalid code lengths set";
            _0x597533.mode = 0x3f51;
            break;
          }
          _0x597533.have = 0x0;
          _0x597533.mode = 0x3f46;
        case 0x3f46:
          for (; _0x597533.have < _0x597533.nlen + _0x597533.ndist;) {
            for (; _0x34b861 = _0x597533.lencode[_0x42ed7d & (0x1 << _0x597533.lenbits) - 0x1], _0x5cb7d7 = _0x34b861 >>> 0x18, _0x328eb1 = _0x34b861 >>> 0x10 & 0xff, _0x288ad8 = 0xffff & _0x34b861, !(_0x5cb7d7 <= _0x450757);) {
              if (0x0 === _0x4f8ed1) {
                break _0x1f988c;
              }
              _0x4f8ed1--;
              _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
              _0x450757 += 0x8;
            }
            if (_0x288ad8 < 0x10) {
              _0x42ed7d >>>= _0x5cb7d7;
              _0x450757 -= _0x5cb7d7;
              _0x597533.lens[_0x597533.have++] = _0x288ad8;
            } else {
              if (0x10 === _0x288ad8) {
                for (_0x185670 = _0x5cb7d7 + 0x2; _0x450757 < _0x185670;) {
                  if (0x0 === _0x4f8ed1) {
                    break _0x1f988c;
                  }
                  _0x4f8ed1--;
                  _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
                  _0x450757 += 0x8;
                }
                _0x42ed7d >>>= _0x5cb7d7;
                _0x450757 -= _0x5cb7d7;
                if (0x0 === _0x597533.have) {
                  _0x12f947.msg = "invalid bit length repeat";
                  _0x597533.mode = 0x3f51;
                  break;
                }
                _0x483843 = _0x597533.lens[_0x597533.have - 0x1];
                _0x3b6af0 = 0x3 + (0x3 & _0x42ed7d);
                _0x42ed7d >>>= 0x2;
                _0x450757 -= 0x2;
              } else {
                if (0x11 === _0x288ad8) {
                  for (_0x185670 = _0x5cb7d7 + 0x3; _0x450757 < _0x185670;) {
                    if (0x0 === _0x4f8ed1) {
                      break _0x1f988c;
                    }
                    _0x4f8ed1--;
                    _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
                    _0x450757 += 0x8;
                  }
                  _0x42ed7d >>>= _0x5cb7d7;
                  _0x450757 -= _0x5cb7d7;
                  _0x483843 = 0x0;
                  _0x3b6af0 = 0x3 + (0x7 & _0x42ed7d);
                  _0x42ed7d >>>= 0x3;
                  _0x450757 -= 0x3;
                } else {
                  for (_0x185670 = _0x5cb7d7 + 0x7; _0x450757 < _0x185670;) {
                    if (0x0 === _0x4f8ed1) {
                      break _0x1f988c;
                    }
                    _0x4f8ed1--;
                    _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
                    _0x450757 += 0x8;
                  }
                  _0x42ed7d >>>= _0x5cb7d7;
                  _0x450757 -= _0x5cb7d7;
                  _0x483843 = 0x0;
                  _0x3b6af0 = 0xb + (0x7f & _0x42ed7d);
                  _0x42ed7d >>>= 0x7;
                  _0x450757 -= 0x7;
                }
              }
              if (_0x597533.have + _0x3b6af0 > _0x597533.nlen + _0x597533.ndist) {
                _0x12f947.msg = "invalid bit length repeat";
                _0x597533.mode = 0x3f51;
                break;
              }
              for (; _0x3b6af0--;) {
                _0x597533.lens[_0x597533.have++] = _0x483843;
              }
            }
          }
          if (_0x597533.mode === 0x3f51) {
            break;
          }
          if (0x0 === _0x597533.lens[0x100]) {
            _0x12f947.msg = "invalid code -- missing end-of-block";
            _0x597533.mode = 0x3f51;
            break;
          }
          _0x597533.lenbits = 0x9;
          _0x4e0416 = {
            bits: _0x597533.lenbits
          };
          _0x3788bf = je(0x1, _0x597533.lens, 0x0, _0x597533.nlen, _0x597533.lencode, 0x0, _0x597533.work, _0x4e0416);
          _0x597533.lenbits = _0x4e0416.bits;
          if (_0x3788bf) {
            _0x12f947.msg = "invalid literal/lengths set";
            _0x597533.mode = 0x3f51;
            break;
          }
          _0x597533.distbits = 0x6;
          _0x597533.distcode = _0x597533.distdyn;
          _0x4e0416 = {
            bits: _0x597533.distbits
          };
          _0x3788bf = je(0x2, _0x597533.lens, _0x597533.nlen, _0x597533.ndist, _0x597533.distcode, 0x0, _0x597533.work, _0x4e0416);
          _0x597533.distbits = _0x4e0416.bits;
          if (_0x3788bf) {
            _0x12f947.msg = "invalid distances set";
            _0x597533.mode = 0x3f51;
            break;
          }
          _0x597533.mode = 0x3f47;
          if (_0xf6053a === Ze) {
            break _0x1f988c;
          }
        case 0x3f47:
          _0x597533.mode = 0x3f48;
        case 0x3f48:
          if (_0x4f8ed1 >= 0x6 && _0x4e0649 >= 0x102) {
            _0x12f947.next_out = _0xcee82d;
            _0x12f947.avail_out = _0x4e0649;
            _0x12f947.next_in = _0x1c5dab;
            _0x12f947.avail_in = _0x4f8ed1;
            _0x597533.hold = _0x42ed7d;
            _0x597533.bits = _0x450757;
            Ue(_0x12f947, _0x24fd84);
            _0xcee82d = _0x12f947.next_out;
            _0x591b57 = _0x12f947.output;
            _0x4e0649 = _0x12f947.avail_out;
            _0x1c5dab = _0x12f947.next_in;
            _0x4b4adb = _0x12f947.input;
            _0x4f8ed1 = _0x12f947.avail_in;
            _0x42ed7d = _0x597533.hold;
            _0x450757 = _0x597533.bits;
            if (_0x597533.mode === 0x3f3f) {
              _0x597533.back = -0x1;
            }
            break;
          }
          for (_0x597533.back = 0x0; _0x34b861 = _0x597533.lencode[_0x42ed7d & (0x1 << _0x597533.lenbits) - 0x1], _0x5cb7d7 = _0x34b861 >>> 0x18, _0x328eb1 = _0x34b861 >>> 0x10 & 0xff, _0x288ad8 = 0xffff & _0x34b861, !(_0x5cb7d7 <= _0x450757);) {
            if (0x0 === _0x4f8ed1) {
              break _0x1f988c;
            }
            _0x4f8ed1--;
            _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
            _0x450757 += 0x8;
          }
          if (_0x328eb1 && !(0xf0 & _0x328eb1)) {
            _0x564a43 = _0x5cb7d7;
            _0xc61fb = _0x328eb1;
            for (_0x4c2aad = _0x288ad8; _0x34b861 = _0x597533.lencode[_0x4c2aad + ((_0x42ed7d & (0x1 << _0x564a43 + _0xc61fb) - 0x1) >> _0x564a43)], _0x5cb7d7 = _0x34b861 >>> 0x18, _0x328eb1 = _0x34b861 >>> 0x10 & 0xff, _0x288ad8 = 0xffff & _0x34b861, !(_0x564a43 + _0x5cb7d7 <= _0x450757);) {
              if (0x0 === _0x4f8ed1) {
                break _0x1f988c;
              }
              _0x4f8ed1--;
              _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
              _0x450757 += 0x8;
            }
            _0x42ed7d >>>= _0x564a43;
            _0x450757 -= _0x564a43;
            _0x597533.back += _0x564a43;
          }
          _0x42ed7d >>>= _0x5cb7d7;
          _0x450757 -= _0x5cb7d7;
          _0x597533.back += _0x5cb7d7;
          _0x597533.length = _0x288ad8;
          if (0x0 === _0x328eb1) {
            _0x597533.mode = 0x3f4d;
            break;
          }
          if (0x20 & _0x328eb1) {
            _0x597533.back = -0x1;
            _0x597533.mode = 0x3f3f;
            break;
          }
          if (0x40 & _0x328eb1) {
            _0x12f947.msg = "invalid literal/length code";
            _0x597533.mode = 0x3f51;
            break;
          }
          _0x597533.extra = 0xf & _0x328eb1;
          _0x597533.mode = 0x3f49;
        case 0x3f49:
          if (_0x597533.extra) {
            for (_0x185670 = _0x597533.extra; _0x450757 < _0x185670;) {
              if (0x0 === _0x4f8ed1) {
                break _0x1f988c;
              }
              _0x4f8ed1--;
              _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
              _0x450757 += 0x8;
            }
            _0x597533.length += _0x42ed7d & (0x1 << _0x597533.extra) - 0x1;
            _0x42ed7d >>>= _0x597533.extra;
            _0x450757 -= _0x597533.extra;
            _0x597533.back += _0x597533.extra;
          }
          _0x597533.was = _0x597533.length;
          _0x597533.mode = 0x3f4a;
        case 0x3f4a:
          for (; _0x34b861 = _0x597533.distcode[_0x42ed7d & (0x1 << _0x597533.distbits) - 0x1], _0x5cb7d7 = _0x34b861 >>> 0x18, _0x328eb1 = _0x34b861 >>> 0x10 & 0xff, _0x288ad8 = 0xffff & _0x34b861, !(_0x5cb7d7 <= _0x450757);) {
            if (0x0 === _0x4f8ed1) {
              break _0x1f988c;
            }
            _0x4f8ed1--;
            _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
            _0x450757 += 0x8;
          }
          if (!(0xf0 & _0x328eb1)) {
            _0x564a43 = _0x5cb7d7;
            _0xc61fb = _0x328eb1;
            for (_0x4c2aad = _0x288ad8; _0x34b861 = _0x597533.distcode[_0x4c2aad + ((_0x42ed7d & (0x1 << _0x564a43 + _0xc61fb) - 0x1) >> _0x564a43)], _0x5cb7d7 = _0x34b861 >>> 0x18, _0x328eb1 = _0x34b861 >>> 0x10 & 0xff, _0x288ad8 = 0xffff & _0x34b861, !(_0x564a43 + _0x5cb7d7 <= _0x450757);) {
              if (0x0 === _0x4f8ed1) {
                break _0x1f988c;
              }
              _0x4f8ed1--;
              _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
              _0x450757 += 0x8;
            }
            _0x42ed7d >>>= _0x564a43;
            _0x450757 -= _0x564a43;
            _0x597533.back += _0x564a43;
          }
          _0x42ed7d >>>= _0x5cb7d7;
          _0x450757 -= _0x5cb7d7;
          _0x597533.back += _0x5cb7d7;
          if (0x40 & _0x328eb1) {
            _0x12f947.msg = "invalid distance code";
            _0x597533.mode = 0x3f51;
            break;
          }
          _0x597533.offset = _0x288ad8;
          _0x597533.extra = 0xf & _0x328eb1;
          _0x597533.mode = 0x3f4b;
        case 0x3f4b:
          if (_0x597533.extra) {
            for (_0x185670 = _0x597533.extra; _0x450757 < _0x185670;) {
              if (0x0 === _0x4f8ed1) {
                break _0x1f988c;
              }
              _0x4f8ed1--;
              _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
              _0x450757 += 0x8;
            }
            _0x597533.offset += _0x42ed7d & (0x1 << _0x597533.extra) - 0x1;
            _0x42ed7d >>>= _0x597533.extra;
            _0x450757 -= _0x597533.extra;
            _0x597533.back += _0x597533.extra;
          }
          if (_0x597533.offset > _0x597533.dmax) {
            _0x12f947.msg = "invalid distance too far back";
            _0x597533.mode = 0x3f51;
            break;
          }
          _0x597533.mode = 0x3f4c;
        case 0x3f4c:
          if (0x0 === _0x4e0649) {
            break _0x1f988c;
          }
          _0x3b6af0 = _0x24fd84 - _0x4e0649;
          if (_0x597533.offset > _0x3b6af0) {
            _0x3b6af0 = _0x597533.offset - _0x3b6af0;
            if (_0x3b6af0 > _0x597533.whave && _0x597533.sane) {
              _0x12f947.msg = "invalid distance too far back";
              _0x597533.mode = 0x3f51;
              break;
            }
            if (_0x3b6af0 > _0x597533.wnext) {
              _0x3b6af0 -= _0x597533.wnext;
              _0x5c145a = _0x597533.wsize - _0x3b6af0;
            } else {
              _0x5c145a = _0x597533.wnext - _0x3b6af0;
            }
            if (_0x3b6af0 > _0x597533.length) {
              _0x3b6af0 = _0x597533.length;
            }
            _0x1a8080 = _0x597533.window;
          } else {
            _0x1a8080 = _0x591b57;
            _0x5c145a = _0xcee82d - _0x597533.offset;
            _0x3b6af0 = _0x597533.length;
          }
          if (_0x3b6af0 > _0x4e0649) {
            _0x3b6af0 = _0x4e0649;
          }
          _0x4e0649 -= _0x3b6af0;
          _0x597533.length -= _0x3b6af0;
          do {
            _0x591b57[_0xcee82d++] = _0x1a8080[_0x5c145a++];
          } while (--_0x3b6af0);
          if (0x0 === _0x597533.length) {
            _0x597533.mode = 0x3f48;
          }
          break;
        case 0x3f4d:
          if (0x0 === _0x4e0649) {
            break _0x1f988c;
          }
          _0x591b57[_0xcee82d++] = _0x597533.length;
          _0x4e0649--;
          _0x597533.mode = 0x3f48;
          break;
        case 0x3f4e:
          if (_0x597533.wrap) {
            for (; _0x450757 < 0x20;) {
              if (0x0 === _0x4f8ed1) {
                break _0x1f988c;
              }
              _0x4f8ed1--;
              _0x42ed7d |= _0x4b4adb[_0x1c5dab++] << _0x450757;
              _0x450757 += 0x8;
            }
            _0x24fd84 -= _0x4e0649;
            _0x12f947.total_out += _0x24fd84;
            _0x597533.total += _0x24fd84;
            if (0x4 & _0x597533.wrap && _0x24fd84) {
              _0x12f947.adler = _0x597533.check = _0x597533.flags ? yt(_0x597533.check, _0x591b57, _0x24fd84, _0xcee82d - _0x24fd84) : vt(_0x597533.check, _0x591b57, _0x24fd84, _0xcee82d - _0x24fd84);
            }
            _0x24fd84 = _0x4e0649;
            if (0x4 & _0x597533.wrap && (_0x597533.flags ? _0x42ed7d : (_0x42ed7d >>> 0x18 & 0xff) + (_0x42ed7d >>> 0x8 & 0xff00) + ((0xff00 & _0x42ed7d) << 0x8) + ((0xff & _0x42ed7d) << 0x18)) !== _0x597533.check) {
              _0x12f947.msg = "incorrect data check";
              _0x597533.mode = 0x3f51;
              break;
            }
            _0x42ed7d = 0x0;
            _0x450757 = 0x0;
          }
          _0x597533.mode = 0x3f4f;
        case 0x3f4f:
          if (_0x597533.wrap && _0x597533.flags) {
            for (; _0x450757 < 0x20;) {
              if (0x0 === _0x4f8ed1) {
                break _0x1f988c;
              }
              _0x4f8ed1--;
              _0x42ed7d += _0x4b4adb[_0x1c5dab++] << _0x450757;
              _0x450757 += 0x8;
            }
            if (0x4 & _0x597533.wrap && _0x42ed7d !== (0xffffffff & _0x597533.total)) {
              _0x12f947.msg = "incorrect length check";
              _0x597533.mode = 0x3f51;
              break;
            }
            _0x42ed7d = 0x0;
            _0x450757 = 0x0;
          }
          _0x597533.mode = 0x3f50;
        case 0x3f50:
          _0x3788bf = Qe;
          break _0x1f988c;
        case 0x3f51:
          _0x3788bf = ei;
          break _0x1f988c;
        case 0x3f52:
          return ii;
        default:
          return ti;
      }
    }
    _0x12f947.next_out = _0xcee82d;
    _0x12f947.avail_out = _0x4e0649;
    _0x12f947.next_in = _0x1c5dab;
    _0x12f947.avail_in = _0x4f8ed1;
    _0x597533.hold = _0x42ed7d;
    _0x597533.bits = _0x450757;
    if (_0x597533.wsize || _0x24fd84 !== _0x12f947.avail_out && _0x597533.mode < 0x3f51 && (_0x597533.mode < 0x3f4e || _0xf6053a !== qe)) {
      Ei(_0x12f947, _0x12f947.output, _0x12f947.next_out, _0x24fd84 - _0x12f947.avail_out);
    }
    _0x478e59 -= _0x12f947.avail_in;
    _0x24fd84 -= _0x12f947.avail_out;
    _0x12f947.total_in += _0x478e59;
    _0x12f947.total_out += _0x24fd84;
    _0x597533.total += _0x24fd84;
    if (0x4 & _0x597533.wrap && _0x24fd84) {
      _0x12f947.adler = _0x597533.check = _0x597533.flags ? yt(_0x597533.check, _0x591b57, _0x24fd84, _0x12f947.next_out - _0x24fd84) : vt(_0x597533.check, _0x591b57, _0x24fd84, _0x12f947.next_out - _0x24fd84);
    }
    _0x12f947.data_type = _0x597533.bits + (_0x597533.last ? 0x40 : 0x0) + (_0x597533.mode === 0x3f3f ? 0x80 : 0x0) + (_0x597533.mode === 0x3f47 || _0x597533.mode === 0x3f42 ? 0x100 : 0x0);
    if ((0x0 === _0x478e59 && 0x0 === _0x24fd84 || _0xf6053a === qe) && _0x3788bf === Je) {
      _0x3788bf = si;
    }
    return _0x3788bf;
  },
  inflateEnd: _0x8afbcd => {
    if (vi(_0x8afbcd)) {
      return ti;
    }
    let _0x2328c6 = _0x8afbcd.state;
    if (_0x2328c6.window) {
      _0x2328c6.window = null;
    }
    _0x8afbcd.state = null;
    return Je;
  },
  inflateGetHeader: (_0x180186, _0x7b396d) => {
    if (vi(_0x180186)) {
      return ti;
    }
    const _0x18d0f6 = _0x180186.state;
    return 0x2 & _0x18d0f6.wrap ? (_0x18d0f6.head = _0x7b396d, _0x7b396d.done = false, Je) : ti;
  },
  inflateSetDictionary: (_0x4d9e99, _0x4ef9e4) => {
    const _0x29f822 = _0x4ef9e4.length;
    let _0x3f689d;
    let _0x23a9b8;
    let _0x3d0b85;
    return vi(_0x4d9e99) ? ti : (_0x3f689d = _0x4d9e99.state, 0x0 !== _0x3f689d.wrap && _0x3f689d.mode !== 0x3f3e ? ti : _0x3f689d.mode === 0x3f3e && (_0x23a9b8 = 0x1, _0x23a9b8 = vt(_0x23a9b8, _0x4ef9e4, _0x29f822, 0x0), _0x23a9b8 !== _0x3f689d.check) ? ei : (_0x3d0b85 = Ei(_0x4d9e99, _0x4ef9e4, _0x29f822, _0x29f822), _0x3d0b85 ? (_0x3f689d.mode = 0x3f52, ii) : (_0x3f689d.havedict = 0x1, Je)));
  },
  inflateInfo: "pako inflate (from Nodeca project)"
};
var Ci = function () {
  this.text = 0x0;
  this.time = 0x0;
  this.xflags = 0x0;
  this.os = 0x0;
  this.extra = null;
  this.extra_len = 0x0;
  this.name = '';
  this.comment = '';
  this.hcrc = 0x0;
  this.done = false;
};
const Mi = Object.prototype.toString;
const {
  Z_NO_FLUSH: Pi,
  Z_FINISH: Ri,
  Z_OK: Li,
  Z_STREAM_END: Oi,
  Z_NEED_DICT: Fi,
  Z_STREAM_ERROR: Di,
  Z_DATA_ERROR: ki,
  Z_MEM_ERROR: Ii
} = _t;
function Bi(_0x42b15c) {
  this.options = xe({
    chunkSize: 0x10000,
    windowBits: 0xf,
    to: ''
  }, _0x42b15c || {});
  const _0x13d473 = this.options;
  if (_0x13d473.raw && _0x13d473.windowBits >= 0x0 && _0x13d473.windowBits < 0x10) {
    _0x13d473.windowBits = -_0x13d473.windowBits;
    if (0x0 === _0x13d473.windowBits) {
      _0x13d473.windowBits = -0xf;
    }
  }
  if (!(!(_0x13d473.windowBits >= 0x0 && _0x13d473.windowBits < 0x10) || _0x42b15c && _0x42b15c.windowBits)) {
    _0x13d473.windowBits += 0x20;
  }
  if (_0x13d473.windowBits > 0xf && _0x13d473.windowBits < 0x30) {
    if (!(0xf & _0x13d473.windowBits)) {
      _0x13d473.windowBits |= 0xf;
    }
  }
  this.err = 0x0;
  this.msg = '';
  this.ended = false;
  this.chunks = [];
  this.strm = new Ae();
  this.strm.avail_out = 0x0;
  let _0x50aa99 = Ai.inflateInit2(this.strm, _0x13d473.windowBits);
  if (_0x50aa99 !== Li) {
    throw new Error(xt[_0x50aa99]);
  }
  this.header = new Ci();
  Ai.inflateGetHeader(this.strm, this.header);
  if (_0x13d473.dictionary && ("string" == typeof _0x13d473.dictionary ? _0x13d473.dictionary = be(_0x13d473.dictionary) : "[object ArrayBuffer]" === Mi.call(_0x13d473.dictionary) && (_0x13d473.dictionary = new Uint8Array(_0x13d473.dictionary)), _0x13d473.raw && (_0x50aa99 = Ai.inflateSetDictionary(this.strm, _0x13d473.dictionary), _0x50aa99 !== Li))) {
    throw new Error(xt[_0x50aa99]);
  }
}
function Ni(_0x36f659, _0x316ed2) {
  const _0x4e4cd3 = new Bi(_0x316ed2);
  _0x4e4cd3.push(_0x36f659);
  if (_0x4e4cd3.err) {
    throw _0x4e4cd3.msg || xt[_0x4e4cd3.err];
  }
  return _0x4e4cd3.result;
}
Bi.prototype.push = function (_0x279d05, _0x2b618a) {
  const _0x36ad24 = this.strm;
  const _0x1d00f1 = this.options.chunkSize;
  const _0x18cf8b = this.options.dictionary;
  let _0x1bd294;
  let _0x528bb2;
  let _0x17fd12;
  if (this.ended) {
    return false;
  }
  _0x528bb2 = _0x2b618a === ~~_0x2b618a ? _0x2b618a : true === _0x2b618a ? Ri : Pi;
  if ("[object ArrayBuffer]" === Mi.call(_0x279d05)) {
    _0x36ad24.input = new Uint8Array(_0x279d05);
  } else {
    _0x36ad24.input = _0x279d05;
  }
  _0x36ad24.next_in = 0x0;
  for (_0x36ad24.avail_in = _0x36ad24.input.length;;) {
    if (0x0 === _0x36ad24.avail_out) {
      _0x36ad24.output = new Uint8Array(_0x1d00f1);
      _0x36ad24.next_out = 0x0;
      _0x36ad24.avail_out = _0x1d00f1;
    }
    _0x1bd294 = Ai.inflate(_0x36ad24, _0x528bb2);
    for (_0x1bd294 === Fi && _0x18cf8b && (_0x1bd294 = Ai.inflateSetDictionary(_0x36ad24, _0x18cf8b), _0x1bd294 === Li ? _0x1bd294 = Ai.inflate(_0x36ad24, _0x528bb2) : _0x1bd294 === ki && (_0x1bd294 = Fi)); _0x36ad24.avail_in > 0x0 && _0x1bd294 === Oi && _0x36ad24.state.wrap > 0x0 && 0x0 !== _0x279d05[_0x36ad24.next_in];) {
      Ai.inflateReset(_0x36ad24);
      _0x1bd294 = Ai.inflate(_0x36ad24, _0x528bb2);
    }
    switch (_0x1bd294) {
      case Di:
      case ki:
      case Fi:
      case Ii:
        this.onEnd(_0x1bd294);
        this.ended = true;
        return false;
    }
    _0x17fd12 = _0x36ad24.avail_out;
    if (_0x36ad24.next_out && (0x0 === _0x36ad24.avail_out || _0x1bd294 === Oi)) {
      if ("string" === this.options.to) {
        let _0x3b781b = Ee(_0x36ad24.output, _0x36ad24.next_out);
        let _0x30fcd3 = _0x36ad24.next_out - _0x3b781b;
        let _0x1c3682 = Se(_0x36ad24.output, _0x3b781b);
        _0x36ad24.next_out = _0x30fcd3;
        _0x36ad24.avail_out = _0x1d00f1 - _0x30fcd3;
        if (_0x30fcd3) {
          _0x36ad24.output.set(_0x36ad24.output.subarray(_0x3b781b, _0x3b781b + _0x30fcd3), 0x0);
        }
        this.onData(_0x1c3682);
      } else {
        this.onData(_0x36ad24.output.length === _0x36ad24.next_out ? _0x36ad24.output : _0x36ad24.output.subarray(0x0, _0x36ad24.next_out));
      }
    }
    if (_0x1bd294 !== Li || 0x0 !== _0x17fd12) {
      if (_0x1bd294 === Oi) {
        _0x1bd294 = Ai.inflateEnd(this.strm);
        this.onEnd(_0x1bd294);
        this.ended = true;
        return true;
      }
      if (0x0 === _0x36ad24.avail_in) {
        break;
      }
    }
  }
  return true;
};
Bi.prototype.onData = function (_0x25d43d) {
  this.chunks.push(_0x25d43d);
};
Bi.prototype.onEnd = function (_0x3be7df) {
  if (_0x3be7df === Li) {
    if ('string' === this.options.to) {
      this.result = this.chunks.join('');
    } else {
      this.result = _e(this.chunks);
    }
  }
  this.chunks = [];
  this.err = _0x3be7df;
  this.msg = this.strm.msg;
};
var Xi = {
  Inflate: Bi,
  inflate: Ni,
  inflateRaw: function (_0x3d3399, _0x29bff6) {
    (_0x29bff6 = _0x29bff6 || {}).raw = true;
    return Ni(_0x3d3399, _0x29bff6);
  },
  ungzip: Ni
};
const {
  Deflate: Yi,
  deflate: Ui,
  deflateRaw: zi,
  gzip: Gi
} = Xe;
const {
  Inflate: Wi,
  inflate: Vi,
  inflateRaw: Hi,
  ungzip: ji
} = Xi;
var qi = {
  Deflate: Yi,
  deflate: Ui,
  deflateRaw: zi,
  gzip: Gi,
  Inflate: Wi,
  inflate: Vi,
  inflateRaw: Hi,
  ungzip: ji,
  constants: _t
};
function Ki(_0x493296) {
  let _0x8d0014 = _0x493296.split(',');
  let _0x20f60e = {};
  for (let _0x4ea5b3 = 0x0; _0x4ea5b3 + 0x1 < _0x8d0014.length; _0x4ea5b3 += 0x2) {
    let _0x323e77 = parseInt(_0x8d0014[_0x4ea5b3], 0xa);
    let _0x557e5c = _0x8d0014[_0x4ea5b3 + 0x1];
    _0x20f60e[_0x323e77] = _0x557e5c;
  }
  let _0x382b1e = parseInt(_0x20f60e[0x1] || '0', 0xa);
  return 0x0 === _0x382b1e ? null : {
    id: _0x382b1e,
    x: parseFloat(_0x20f60e[0x2] || '0'),
    y: parseFloat(_0x20f60e[0x3] || '0'),
    flipX: '1' === _0x20f60e[0x4],
    flipY: '1' === _0x20f60e[0x5],
    rot: parseFloat(_0x20f60e[0x6] || '0'),
    scale: parseFloat(_0x20f60e[0x20] || '1'),
    zLayer: parseInt(_0x20f60e[0x18] || '0', 0xa),
    zOrder: parseInt(_0x20f60e[0x19] || '0', 0xa),
    groups: _0x20f60e[0x39] || '',
    color1: parseInt(_0x20f60e[0x15] || '0', 0xa),
    color2: parseInt(_0x20f60e[0x16] || '0', 0xa),
    _raw: _0x20f60e
  };
}
function Zi(_0x38fc47) {
  let _0x103676 = function (_0x510333) {
    let _0x48af37 = function (_0x597b77) {
      let _0x4e5b39 = _0x597b77.replace(/-/g, '+').replace(/_/g, '/');
      for (; _0x4e5b39.length % 0x4 != 0x0;) {
        _0x4e5b39 += '=';
      }
      return _0x4e5b39;
    }(_0x510333.trim());
    let _0x2250c1 = atob(_0x48af37);
    let _0xf8b0b1 = new Uint8Array(_0x2250c1.length);
    for (let _0x2490cf = 0x0; _0x2490cf < _0x2250c1.length; _0x2490cf++) {
      _0xf8b0b1[_0x2490cf] = _0x2250c1.charCodeAt(_0x2490cf);
    }
    let _0xf5265c = qi.inflate(_0xf8b0b1);
    return new TextDecoder().decode(_0xf5265c);
  }(_0x38fc47);
  let _0x474b4a = _0x103676.split(';');
  let _0x1e582e = _0x474b4a.length > 0x0 ? _0x474b4a[0x0] : '';
  let _0x2db146 = [];
  for (let _0x398bdc = 0x1; _0x398bdc < _0x474b4a.length; _0x398bdc++) {
    if (0x0 === _0x474b4a[_0x398bdc].length) {
      continue;
    }
    let _0x3f3897 = Ki(_0x474b4a[_0x398bdc]);
    if (_0x3f3897) {
      _0x2db146.push(_0x3f3897);
    }
  }
  return {
    settings: _0x1e582e,
    objects: _0x2db146
  };
}
const OBJ_SOLID = "solid";
const OBJ_HAZARD = "hazard";
const OBJ_DECO = "deco";
const OBJ_PORTAL = "portal";
const OBJ_PAD = "pad";
const OBJ_RING = "ring";
const OBJ_TRIGGER = "trigger";
const OBJ_SPEED = "speed";
const MODE_FLY = "fly";
const MODE_CUBE = "cube";
const OBJECT_DEFS = {
  0x1: {
    type: OBJ_SOLID,
    frame: "square_01_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x2: {
    type: OBJ_SOLID,
    frame: "square_02_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x3: {
    type: OBJ_SOLID,
    frame: "square_03_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x4: {
    type: OBJ_SOLID,
    frame: "square_04_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x5: {
    type: OBJ_DECO,
    frame: 'square_05_001.png',
    gridW: 0x1,
    gridH: 0x1
  },
  0x6: {
    type: OBJ_SOLID,
    frame: "square_06_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x7: {
    type: OBJ_SOLID,
    frame: "square_07_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x53: {
    type: OBJ_SOLID,
    frame: "square_08_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x28: {
    type: OBJ_SOLID,
    frame: "plank_01_001.png",
    gridW: 0x1,
    gridH: 0.5,
    children: [{
      frame: "plank_01_color_001.png",
      tint: 0x0
    }]
  },
  0x8: {
    type: OBJ_HAZARD,
    frame: 'spike_01_001.png',
    gridW: 0x1,
    gridH: 0x1,
    spriteW: 0x1e,
    spriteH: 0x1e,
    hitboxScaleX: 0.2,
    hitboxScaleY: 0.4
  },
  0x27: {
    type: OBJ_HAZARD,
    frame: "spike_02_001.png",
    gridW: 0x1,
    gridH: 0x1,
    spriteW: 0x1e,
    spriteH: 0xe,
    hitboxScaleX: 0.2,
    hitboxScaleY: 0.4
  },
  0x67: {
    type: OBJ_HAZARD,
    frame: 'spike_03_001.png',
    gridW: 0.5,
    gridH: 0.5,
    spriteW: 0x14,
    spriteH: 0x13,
    hitboxScaleX: 0.2,
    hitboxScaleY: 0.4
  },
  0x188: {
    type: OBJ_HAZARD,
    frame: "spike_04_001.png",
    gridW: 0.5,
    gridH: 0.5,
    spriteW: 0xd,
    spriteH: 0xc,
    hitboxScaleX: 0.2,
    hitboxScaleY: 0.4
  },
  0x9: {
    type: OBJ_HAZARD,
    frame: "pit_01_001.png",
    gridW: 0x0,
    gridH: 0x0,
    black: true,
    spriteW: 0x1e,
    spriteH: 0x1b,
    hitboxScaleX: 0.3,
    hitboxScaleY: 0.4,
    randomFrames: ["pit_01_001.png", 'pit_02_001.png', "pit_03_001.png"]
  },
  0x3d: {
    type: OBJ_HAZARD,
    frame: 'pit_04_001.png',
    gridW: 0x0,
    gridH: 0x0,
    black: true,
    spriteW: 0x1e,
    spriteH: 0x12,
    hitboxScaleX: 0.3,
    hitboxScaleY: 0.4
  },
  0xa: {
    type: OBJ_PORTAL,
    frame: "portal_01_front_001.png",
    gridW: 0x1,
    gridH: 0x3,
    sub: "gravity_normal"
  },
  0xb: {
    type: OBJ_PORTAL,
    frame: 'portal_02_front_001.png',
    gridW: 0x1,
    gridH: 0x3,
    sub: "gravity_flip"
  },
  0xc: {
    type: OBJ_PORTAL,
    frame: "portal_03_front_001.png",
    gridW: 0x1,
    gridH: 0x3,
    sub: MODE_CUBE,
    portalParticle: true,
    portalParticleColor: 0x4dff00
  },
  0xd: {
    type: OBJ_PORTAL,
    frame: "portal_04_front_001.png",
    gridW: 0x1,
    gridH: 0x3,
    sub: MODE_FLY,
    portalParticle: true,
    portalParticleColor: 0xff00ff
  },
  0x2d: {
    type: OBJ_PORTAL,
    frame: "portal_05_front_001.png",
    gridW: 0x1,
    gridH: 0x3,
    sub: MODE_FLY
  },
  0x2e: {
    type: OBJ_PORTAL,
    frame: "portal_06_front_001.png",
    gridW: 0x1,
    gridH: 0x3,
    sub: MODE_CUBE
  },
  0x2f: {
    type: OBJ_PORTAL,
    frame: 'portal_07_front_001.png',
    gridW: 0x1,
    gridH: 0x3,
    sub: MODE_FLY
  },
  0xc8: {
    type: OBJ_SPEED,
    frame: "portal_09_front_001.png",
    gridW: 0x1,
    gridH: 0x3,
    sub: "slow"
  },
  0xc9: {
    type: OBJ_SPEED,
    frame: "portal_10_front_001.png",
    gridW: 0x1,
    gridH: 0x3,
    sub: "normal"
  },
  0xca: {
    type: OBJ_SPEED,
    frame: "portal_08_front_001.png",
    gridW: 0x1,
    gridH: 0x3,
    sub: "fast"
  },
  0xcb: {
    type: OBJ_SPEED,
    frame: "portal_11_front_001.png",
    gridW: 0x1,
    gridH: 0x3,
    sub: "very_fast"
  },
  0x23: {
    type: OBJ_PAD,
    frame: "bump_01_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x43: {
    type: OBJ_PAD,
    frame: "bump_02_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x8c: {
    type: OBJ_PAD,
    frame: "bump_03_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x24: {
    type: OBJ_RING,
    frame: 'ring_01_001.png',
    gridW: 0x1,
    gridH: 0x1
  },
  0x54: {
    type: OBJ_RING,
    frame: 'ring_02_001.png',
    gridW: 0x1,
    gridH: 0x1
  },
  0x8d: {
    type: OBJ_RING,
    frame: "ring_03_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x3e: {
    type: OBJ_SOLID,
    frame: "square_b_01_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x3f: {
    type: OBJ_SOLID,
    frame: "square_b_02_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x40: {
    type: OBJ_SOLID,
    frame: "square_b_03_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x41: {
    type: OBJ_SOLID,
    frame: "square_b_04_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x42: {
    type: OBJ_SOLID,
    frame: "square_b_05_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x44: {
    type: OBJ_SOLID,
    frame: 'square_b_06_001.png',
    gridW: 0x1,
    gridH: 0x1
  },
  0xc3: {
    type: OBJ_SOLID,
    frame: "square_01_001.png",
    gridW: 0.5,
    gridH: 0.5
  },
  0xc4: {
    type: OBJ_SOLID,
    frame: "plank_01_001.png",
    gridW: 0.5,
    gridH: 0.25
  },
  0x30: {
    type: OBJ_DECO,
    frame: 'd_cloud_01_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x31: {
    type: OBJ_DECO,
    frame: 'd_cloud_02_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x81: {
    type: OBJ_DECO,
    frame: "d_cloud_03_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x82: {
    type: OBJ_DECO,
    frame: 'd_cloud_04_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x83: {
    type: OBJ_DECO,
    frame: "d_cloud_05_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x32: {
    type: OBJ_DECO,
    frame: "d_ball_01_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x33: {
    type: OBJ_DECO,
    frame: "d_ball_02_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x34: {
    type: OBJ_DECO,
    frame: 'd_ball_03_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x35: {
    type: OBJ_DECO,
    frame: "d_ball_04_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x36: {
    type: OBJ_DECO,
    frame: 'd_ball_05_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x37: {
    type: OBJ_DECO,
    frame: 'd_ball_06_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x38: {
    type: OBJ_DECO,
    frame: "d_ball_07_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x39: {
    type: OBJ_DECO,
    frame: 'd_ball_08_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x3a: {
    type: OBJ_DECO,
    frame: 'd_ball_09_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x3c: {
    type: OBJ_DECO,
    frame: "d_ball_06_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x7d: {
    type: OBJ_DECO,
    frame: "d_smallBall_01_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x7e: {
    type: OBJ_DECO,
    frame: "d_smallBall_02_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x7f: {
    type: OBJ_DECO,
    frame: 'd_smallBall_03_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x80: {
    type: OBJ_DECO,
    frame: "d_smallBall_04_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x91: {
    type: OBJ_DECO,
    frame: 'd_smallBall_05_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x29: {
    type: OBJ_DECO,
    frame: "chain_01_001.png",
    gridW: 0x0,
    gridH: 0x0,
    blend: "additive",
    tint: 0xff00
  },
  0x7b: {
    type: OBJ_DECO,
    frame: "d_thorn_01_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x7c: {
    type: OBJ_DECO,
    frame: "d_thorn_02_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0xf: {
    type: OBJ_DECO,
    frame: "rod_01_001.png",
    gridW: 0x0,
    gridH: 0x0,
    z: -0x6,
    children: [{
      frame: 'rod_ball_01_001.png',
      localDy: -0x3e,
      blend: "additive",
      tint: 0xff00,
      z: 0x1,
      audioScale: true
    }]
  },
  0x10: {
    type: OBJ_DECO,
    frame: 'rod_02_001.png',
    gridW: 0x0,
    gridH: 0x0,
    z: -0x6,
    children: [{
      frame: "rod_ball_01_001.png",
      localDy: -46.5,
      blend: "additive",
      tint: 0xff00,
      z: 0x1,
      audioScale: true
    }]
  },
  0x11: {
    type: OBJ_DECO,
    frame: 'rod_03_001.png',
    gridW: 0x0,
    gridH: 0x0,
    z: -0x6,
    children: [{
      frame: "rod_ball_01_001.png",
      localDy: -32.5,
      blend: "additive",
      tint: 0xff00,
      z: 0x1,
      audioScale: true
    }]
  },
  0x84: {
    type: OBJ_DECO,
    frame: "d_arrow_01_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x85: {
    type: OBJ_DECO,
    frame: "d_exmark_01_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x88: {
    type: OBJ_DECO,
    frame: "d_qmark_01_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x97: {
    type: OBJ_DECO,
    frame: "d_spikeart_01_001.png",
    gridW: 0x0,
    gridH: 0x0,
    blend: "additive",
    tint: 0xff00
  },
  0x98: {
    type: OBJ_DECO,
    frame: 'd_spikeart_02_001.png',
    gridW: 0x0,
    gridH: 0x0,
    blend: "additive",
    tint: 0xff00
  },
  0x99: {
    type: OBJ_DECO,
    frame: "d_spikeart_03_001.png",
    gridW: 0x0,
    gridH: 0x0,
    blend: "additive",
    tint: 0xff00
  },
  0x58: {
    type: OBJ_HAZARD,
    frame: 'sawblade_01_001.png',
    gridW: 0x1,
    gridH: 0x1
  },
  0x59: {
    type: OBJ_HAZARD,
    frame: "sawblade_02_001.png",
    gridW: 0x2,
    gridH: 0x2
  },
  0x62: {
    type: OBJ_HAZARD,
    frame: "sawblade_03_001.png",
    gridW: 0x3,
    gridH: 0x3
  },
  0x12: {
    type: OBJ_DECO,
    frame: "d_spikes_01_001.png",
    gridW: 0x0,
    gridH: 0x0,
    blend: "additive",
    tint: 0xff00
  },
  0x13: {
    type: OBJ_DECO,
    frame: "d_spikes_02_001.png",
    gridW: 0x0,
    gridH: 0x0,
    blend: "additive",
    tint: 0xff00
  },
  0x14: {
    type: OBJ_DECO,
    frame: "d_spikes_03_001.png",
    gridW: 0x0,
    gridH: 0x0,
    blend: "additive",
    tint: 0xff00
  },
  0x15: {
    type: OBJ_DECO,
    frame: 'd_spikes_04_001.png',
    gridW: 0x0,
    gridH: 0x0,
    blend: 'additive',
    tint: 0xff00
  },
  0x87: {
    type: OBJ_DECO,
    frame: "fakeSpike_01_001.png",
    gridW: 0x0,
    gridH: 0x0,
    black: true
  },
  0x761: {
    type: OBJ_DECO,
    frame: "fakeSpike_01_001.png",
    gridW: 0x0,
    gridH: 0x0,
    black: true
  },
  0x762: {
    type: OBJ_DECO,
    frame: "fakeSpike_02_001.png",
    gridW: 0x0,
    gridH: 0x0,
    black: true
  },
  0x763: {
    type: OBJ_DECO,
    frame: "fakeSpike_03_001.png",
    gridW: 0x0,
    gridH: 0x0,
    black: true
  },
  0x764: {
    type: OBJ_DECO,
    frame: "fakeSpike_04_001.png",
    gridW: 0x0,
    gridH: 0x0,
    black: true
  },
  0x96: {
    type: OBJ_DECO,
    frame: 'd_cross_01_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x86: {
    type: OBJ_DECO,
    frame: "d_largeSquare_01_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x92: {
    type: OBJ_DECO,
    frame: "d_largeSquare_02_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x8a: {
    type: OBJ_DECO,
    frame: "d_art_01_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x89: {
    type: OBJ_DECO,
    frame: "brick_02_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x8b: {
    type: OBJ_DECO,
    frame: "d_brick_01_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x9d: {
    type: OBJ_DECO,
    frame: "d_wave_01_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x9e: {
    type: OBJ_DECO,
    frame: 'd_wave_02_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x9f: {
    type: OBJ_DECO,
    frame: "d_wave_03_001.png",
    gridW: 0x0,
    gridH: 0x0
  },
  0x8f: {
    type: OBJ_DECO,
    frame: 'd_circle_01_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x90: {
    type: OBJ_DECO,
    frame: 'd_circle_02_001.png',
    gridW: 0x0,
    gridH: 0x0
  },
  0x16: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0,
    enterEffect: 0x0
  },
  0x17: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0,
    enterEffect: 0x1
  },
  0x18: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0,
    enterEffect: 0x2
  },
  0x19: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0,
    enterEffect: 0x3
  },
  0x1a: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0,
    enterEffect: 0x4
  },
  0x1b: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0,
    enterEffect: 0x5
  },
  0x1c: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0,
    enterEffect: 0x6
  },
  0x1d: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0,
    colorIdx: 0x3e8
  },
  0x1e: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0,
    colorIdx: 0x3e9
  },
  0x68: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0
  },
  0x69: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0
  },
  0xdd: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0
  },
  0x383: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0
  },
  0x385: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0
  },
  0x3ee: {
    type: OBJ_TRIGGER,
    frame: null,
    gridW: 0x0,
    gridH: 0x0
  },
  0x2c: {
    type: OBJ_DECO,
    frame: null,
    gridW: 0x0,
    gridH: 0x0
  },
  0x8e: {
    type: OBJ_DECO,
    frame: "secretCoin_01_001.png",
    gridW: 0x1,
    gridH: 0x1
  },
  0x531: {
    type: OBJ_DECO,
    frame: "secretCoin_2_01_001.png",
    gridW: 0x1,
    gridH: 0x1
  }
};
const DEFAULT_OBJECT_IDS = [0x1, 0x2, 0x3, 0x4, 0x6, 0x7, 0x53, 0x8, 0x27, 0x67, 0x188, 0x23, 0x24, 0x28, 0x8c, 0x8d, 0x3e, 0x41, 0x42, 0x44, 0xc3, 0xc4];
for (let As of DEFAULT_OBJECT_IDS) if (OBJECT_DEFS[As]) {
  OBJECT_DEFS[As].glow = true;
}
function ls(_0x4339a6) {
  return OBJECT_DEFS[_0x4339a6] || null;
}
class us {
  constructor(_0x46dab3, _0x35fa95) {
    this._scene = _0x46dab3;
    this._cameraXRef = _0x35fa95;
    this.additiveContainer = _0x46dab3.add.container(0x0, 0x0).setDepth(-0x1);
    this.container = _0x46dab3.add.container(0x0, 0x0);
    this.topContainer = _0x46dab3.add.container(0x0, 0x0).setDepth(0xd);
    this.objects = [];
    this.endXPos = 0x0;
    this._groundY = 0x0;
    this._ceilingY = null;
    this._flyGroundActive = false;
    this._groundAnimFrom = 0x0;
    this._groundAnimTo = 0x0;
    this._groundAnimTime = 0x0;
    this._groundAnimDuration = 0x0;
    this._groundAnimating = false;
    this._groundTargetValue = 0x0;
    this._flyFloorY = 0x0;
    this._flyCeilingY = 0x0;
    this.flyCameraTarget = null;
    this._colorTriggers = [];
    this._colorTriggerIdx = 0x0;
    this._audioScaleSprites = [];
    this._enterEffectTriggers = [];
    this._enterEffectTriggerIdx = 0x0;
    this._activeEnterEffect = 0x0;
    this._activeExitEffect = 0x0;
    this._moveTriggers = [];
    this._moveTriggerIdx = 0x0;
    this._activeMoves = [];
    this._groupVisuals = new Map();
    this._groupColliders = new Map();
    this._groupVisualResetList = [];
    this._groupColliderResetList = [];
    this._sections = [];
    this._sectionContainers = [];
    this._collisionSections = [];
    this._nearbyBuffer = [];
    this._visMinSec = -0x1;
    this._visMaxSec = -0x1;
    this._groundStartScreenY = 460;
    this._ceilingStartScreenY = 0x0;
    this._buildGround();
  }
  ["loadLevel"](_0x335f1b) {
    let {
      settings: _0x59f513,
      objects: _0x1b4349
    } = Zi(_0x335f1b);
    this._spawnLevelObjects(_0x1b4349);
    return this._extractBaseColors(_0x59f513);
  }
  ["_parseSettingsMap"](_0x422dc1) {
    const _0x1a6ff4 = {};
    if (!_0x422dc1) {
      return _0x1a6ff4;
    }
    const _0x33ddd6 = String(_0x422dc1).split(',');
    for (let _0x5db5f7 = 0x0; _0x5db5f7 + 0x1 < _0x33ddd6.length; _0x5db5f7 += 0x2) {
      const _0x255a52 = _0x33ddd6[_0x5db5f7];
      const _0x5ea6ca = _0x33ddd6[_0x5db5f7 + 0x1];
      if (_0x255a52) {
        _0x1a6ff4[_0x255a52] = _0x5ea6ca;
      }
    }
    return _0x1a6ff4;
  }
  ["_parseLevelColor"](_0x4c5c14) {
    if (!_0x4c5c14) {
      return null;
    }
    const _0x2f9e63 = String(_0x4c5c14).split('_');
    const _0x3259b8 = {};
    for (let _0x35ecac = 0x0; _0x35ecac + 0x1 < _0x2f9e63.length; _0x35ecac += 0x2) {
      _0x3259b8[_0x2f9e63[_0x35ecac]] = _0x2f9e63[_0x35ecac + 0x1];
    }
    const _0x21544c = parseInt(_0x3259b8[0x1] ?? _0x3259b8['1'] ?? 'NaN', 0xa);
    const _0x5d89bd = parseInt(_0x3259b8[0x2] ?? _0x3259b8['2'] ?? 'NaN', 0xa);
    const _0x51f04a = parseInt(_0x3259b8[0x3] ?? _0x3259b8['3'] ?? 'NaN', 0xa);
    if (!Number.isFinite(_0x21544c) || !Number.isFinite(_0x5d89bd) || !Number.isFinite(_0x51f04a)) {
      return null;
    }
    return {
      r: Math.max(0x0, Math.min(0xff, _0x21544c)),
      g: Math.max(0x0, Math.min(0xff, _0x5d89bd)),
      b: Math.max(0x0, Math.min(0xff, _0x51f04a))
    };
  }
  ["_extractBaseColors"](_0x3b2f64) {
    const _0x185c8f = this._parseSettingsMap(_0x3b2f64);
    const _0x102cf4 = {};
    for (let _0x22cea9 = 0x1f; _0x22cea9 <= 0x25; _0x22cea9++) {
      const _0x3874f4 = this._parseLevelColor(_0x185c8f['kS' + _0x22cea9]);
      if (_0x3874f4) {
        _0x102cf4[0x3e8 + (_0x22cea9 - 0x1d)] = _0x3874f4;
      }
    }
    return {
      bgColor: this._parseLevelColor(_0x185c8f.kS29),
      groundColor: this._parseLevelColor(_0x185c8f.kS30),
      channelColors: _0x102cf4
    };
  }
  ["_buildGround"]() {
    const _0x73ae12 = this._scene;
    const _0x3bff90 = _0x73ae12.textures.getFrame('GJ_WebSheet', 'groundSquare_01_001.png');
    this._tileW = _0x3bff90 ? _0x3bff90.width : 0x3f4;
    this._groundTiles = [];
    this._ceilingTiles = [];
    let _0x5bf5f8 = Math.ceil(r / this._tileW) + 0x2;
    const _0x239f13 = -h;
    for (let _0x3a0baf = 0x0; _0x3a0baf < _0x5bf5f8; _0x3a0baf++) {
      let _0x4cea14 = _0x239f13 + _0x3a0baf * this._tileW;
      let _0x929a9b = _0x73ae12.add.image(0x0, 460, "GJ_WebSheet", 'groundSquare_01_001.png');
      _0x929a9b.setOrigin(0x0, 0x0);
      _0x929a9b.setTint(0x44aa);
      _0x929a9b.setDepth(0x14);
      _0x929a9b._worldX = _0x4cea14;
      this._groundTiles.push(_0x929a9b);
      let _0x1b177f = _0x73ae12.add.image(0x0, 460, "GJ_WebSheet", "groundSquare_01_001.png");
      _0x1b177f.setOrigin(0x0, 0x1);
      _0x1b177f.setFlipY(true);
      _0x1b177f.setTint(0x44aa);
      _0x1b177f.setDepth(0x14);
      _0x1b177f.setVisible(false);
      _0x1b177f._worldX = _0x4cea14;
      this._ceilingTiles.push(_0x1b177f);
    }
    this._maxGroundWorldX = _0x239f13 + (_0x5bf5f8 - 0x1) * this._tileW;
    const _0x42704c = _0x73ae12.textures.getFrame('GJ_WebSheet', "floorLine_01_001.png");
    const _0x37a2ff = _0x42704c ? _0x42704c.width : 0x378;
    const _0x578262 = r / _0x37a2ff;
    this._groundLine = _0x73ae12.add.image(r / 0x2, 459, 'GJ_WebSheet', 'floorLine_01_001.png').setOrigin(0.5, 0x0).setScale(_0x578262, 0x1).setBlendMode(S).setDepth(0x15).setScrollFactor(0x0);
    this._ceilingLine = _0x73ae12.add.image(r / 0x2, 461, "GJ_WebSheet", 'floorLine_01_001.png').setOrigin(0.5, 0x1).setScale(_0x578262, 0x1).setFlipY(true).setBlendMode(S).setDepth(0x15).setScrollFactor(0x0).setVisible(false);
    this._groundShadowL = _0x73ae12.add.image(-0x1, 460, "GJ_WebSheet", "groundSquareShadow_001.png").setOrigin(0x0, 0x0).setScrollFactor(0x0).setDepth(0x16).setAlpha(0.39215686274509803).setScale(0.7, 0x1).setBlendMode(E);
    this._groundShadowR = _0x73ae12.add.image(r + 0x1, 460, 'GJ_WebSheet', "groundSquareShadow_001.png").setOrigin(0x1, 0x0).setScrollFactor(0x0).setDepth(0x16).setAlpha(0.39215686274509803).setScale(0.7, 0x1).setFlipX(true).setBlendMode(E);
    this._ceilingShadowL = _0x73ae12.add.image(-0x1, 460, "GJ_WebSheet", 'groundSquareShadow_001.png').setOrigin(0x0, 0x1).setScrollFactor(0x0).setDepth(0x16).setAlpha(0.39215686274509803).setScale(0.7, 0x1).setFlipY(true).setBlendMode(E).setVisible(false);
    this._ceilingShadowR = _0x73ae12.add.image(r + 0x1, 460, "GJ_WebSheet", 'groundSquareShadow_001.png').setOrigin(0x1, 0x1).setScrollFactor(0x0).setDepth(0x16).setAlpha(0.39215686274509803).setScale(0.7, 0x1).setFlipX(true).setFlipY(true).setBlendMode(E).setVisible(false);
  }
  ["resizeScreen"]() {
    var _0xdc60af;
    var _0x493047;
    const _0x1f0ac2 = this._scene;
    const _0x495be2 = this._tileW;
    const _0x546bad = Math.ceil(r / _0x495be2) + 0x2;
    for (; this._groundTiles.length < _0x546bad;) {
      const _0x596be1 = this._maxGroundWorldX + _0x495be2;
      let _0x32bd97 = _0x1f0ac2.add.image(0x0, 460, 'GJ_WebSheet', "groundSquare_01_001.png");
      _0x32bd97.setOrigin(0x0, 0x0).setTint((null == (_0xdc60af = this._groundTiles[0x0]) ? undefined : _0xdc60af.tintTopLeft) || 0x44aa).setDepth(0x14);
      _0x32bd97._worldX = _0x596be1;
      this._groundTiles.push(_0x32bd97);
      let _0x6e7d76 = _0x1f0ac2.add.image(0x0, 460, 'GJ_WebSheet', "groundSquare_01_001.png");
      _0x6e7d76.setOrigin(0x0, 0x1).setFlipY(true).setTint((null == (_0x493047 = this._groundTiles[0x0]) ? undefined : _0x493047.tintTopLeft) || 0x44aa).setDepth(0x14).setVisible(false);
      _0x6e7d76._worldX = _0x596be1;
      this._ceilingTiles.push(_0x6e7d76);
      this._maxGroundWorldX = _0x596be1;
    }
    const _0x51125e = this._scene.textures.getFrame("GJ_WebSheet", "floorLine_01_001.png");
    const _0x1c38c3 = r / (_0x51125e ? _0x51125e.width : 0x378);
    this._groundLine.x = r / 0x2;
    this._groundLine.setScale(_0x1c38c3, 0x1);
    this._ceilingLine.x = r / 0x2;
    this._ceilingLine.setScale(_0x1c38c3, 0x1);
    this._groundShadowR.x = r + 0x1;
    this._ceilingShadowR.x = r + 0x1;
  }
  ["updateGroundTiles"](_0x14aed2 = 0x0) {
    const _0x3d0974 = this._cameraXRef.value;
    const _0x40fc27 = this._tileW;
    let _0x12b0b9;
    let _0x3453a2;
    let _0x5bf36e = this._maxGroundWorldX || -Infinity;
    if (this._flyGroundActive && this._groundTargetValue > 0.001) {
      let _0x3ce536 = this._groundTargetValue;
      _0x12b0b9 = this._groundStartScreenY + (0x26c - this._groundStartScreenY) * _0x3ce536;
      _0x3453a2 = this._ceilingStartScreenY + (0x14 - this._ceilingStartScreenY) * _0x3ce536;
      let _0x518952 = 460 + _0x14aed2;
      if (_0x12b0b9 > _0x518952) {
        _0x12b0b9 = _0x518952;
      }
    } else {
      _0x12b0b9 = 460 + _0x14aed2;
      _0x3453a2 = 0x0;
    }
    for (let _0x2c7b79 = 0x0; _0x2c7b79 < this._groundTiles.length; _0x2c7b79++) {
      let _0x2d1a71 = this._groundTiles[_0x2c7b79];
      let _0x20a50b = this._ceilingTiles[_0x2c7b79];
      if (_0x2d1a71._worldX + _0x40fc27 <= _0x3d0974) {
        _0x2d1a71._worldX = _0x5bf36e + _0x40fc27;
        _0x20a50b._worldX = _0x2d1a71._worldX;
        _0x5bf36e = _0x2d1a71._worldX;
        this._maxGroundWorldX = _0x5bf36e;
      }
      let _0x1ff1b3 = _0x2d1a71._worldX - _0x3d0974;
      _0x2d1a71.x = _0x1ff1b3;
      _0x2d1a71.y = _0x12b0b9;
      _0x20a50b.x = _0x1ff1b3;
      _0x20a50b.y = _0x3453a2;
      _0x20a50b.setVisible(this._flyGroundActive && this._groundTargetValue > 0x0);
    }
    this._groundLine.y = _0x12b0b9;
    if (this._flyGroundActive && this._groundTargetValue > 0x0) {
      this._ceilingLine.y = _0x3453a2;
      this._ceilingLine.setVisible(true);
    } else {
      this._ceilingLine.setVisible(false);
    }
    this._groundShadowL.y = _0x12b0b9;
    this._groundShadowR.y = _0x12b0b9;
    let _0x539bc2 = this._flyGroundActive && this._groundTargetValue > 0x0;
    this._ceilingShadowL.y = _0x3453a2;
    this._ceilingShadowR.y = _0x3453a2;
    this._ceilingShadowL.setVisible(_0x539bc2);
    this._ceilingShadowR.setVisible(_0x539bc2);
  }
  ["shiftGroundTiles"](_0x47a8b8) {
    for (let _0x33fd12 = 0x0; _0x33fd12 < this._groundTiles.length; _0x33fd12++) {
      this._groundTiles[_0x33fd12]._worldX += _0x47a8b8;
      this._ceilingTiles[_0x33fd12]._worldX += _0x47a8b8;
    }
    this._maxGroundWorldX += _0x47a8b8;
  }
  ['resetGroundTiles'](_0x460241) {
    const _0x4e210f = this._tileW;
    for (let _0x33c028 = 0x0; _0x33c028 < this._groundTiles.length; _0x33c028++) {
      this._groundTiles[_0x33c028]._worldX = _0x460241 + _0x33c028 * _0x4e210f;
      this._ceilingTiles[_0x33c028]._worldX = _0x460241 + _0x33c028 * _0x4e210f;
    }
    this._maxGroundWorldX = _0x460241 + (this._groundTiles.length - 0x1) * _0x4e210f;
    this.resetGroundState();
  }
  ["resetGroundState"]() {
    this._flyGroundActive = false;
    this._groundTargetValue = 0x0;
    this._groundAnimating = false;
    this._groundY = 0x0;
    this._ceilingY = null;
    this.flyCameraTarget = null;
  }
  ["_computeFlyBounds"](_0x804885) {
    let _0x4dd75a = _0x804885 - 0x12c;
    _0x4dd75a = Math.floor(_0x4dd75a / 0x3c) * 0x3c;
    _0x4dd75a = Math.max(0x0, _0x4dd75a);
    return {
      floorY: _0x4dd75a,
      ceilingY: _0x4dd75a + 0x258
    };
  }
  ["setFlyMode"](_0x4a6d9a, _0x3a58e7) {
    if (_0x4a6d9a) {
      let _0x5b3ec5 = this._computeFlyBounds(_0x3a58e7);
      this._flyFloorY = _0x5b3ec5.floorY;
      this._flyCeilingY = _0x5b3ec5.ceilingY;
      this._flyGroundActive = true;
      let _0x15ff58 = this._flyFloorY + 0x12c;
      this.flyCameraTarget = _0x15ff58 - 0x140 + 0xb4;
      if (this.flyCameraTarget < 0x0) {
        this.flyCameraTarget = 0x0;
      }
      let _0x3be4f1 = this._scene && this._scene._cameraY || 0x0;
      this._groundStartScreenY = 460 + _0x3be4f1;
      this._ceilingStartScreenY = 0x0;
      this._groundAnimFrom = this._groundTargetValue;
      this._groundAnimTo = 0x1;
      this._groundAnimTime = 0x0;
      this._groundAnimDuration = 0.5;
      this._groundAnimating = true;
    } else {
      this.flyCameraTarget = null;
      this._groundAnimFrom = this._groundTargetValue;
      this._groundAnimTo = 0x0;
      this._groundAnimTime = 0x0;
      this._groundAnimDuration = 0.5;
      this._groundAnimating = true;
    }
  }
  ["stepGroundAnimation"](_0x4a003d) {
    if (!this._groundAnimating) {
      return;
    }
    this._groundAnimTime += _0x4a003d;
    let _0x4c9adc = this._groundAnimDuration > 0x0 ? Math.min(this._groundAnimTime / this._groundAnimDuration, 0x1) : 0x1;
    this._groundTargetValue = this._groundAnimFrom + (this._groundAnimTo - this._groundAnimFrom) * _0x4c9adc;
    if (_0x4c9adc >= 0x1) {
      this._groundAnimating = false;
      this._groundTargetValue = this._groundAnimTo;
      if (0x0 === this._groundAnimTo) {
        this._flyGroundActive = false;
      }
    }
  }
  ['getFloorY']() {
    return this._flyGroundActive ? this._flyFloorY : 0x0;
  }
  ['getCeilingY']() {
    return this._flyGroundActive ? this._flyCeilingY : null;
  }
  ["_applyVisualProps"](_0x4feeca, _0x2d433c, _0x590e4f, _0x5eb2df, _0x450956 = null) {
    if (!_0x2d433c) {
      return;
    }
    let {
      dx: _0x4aea8a,
      dy: _0x545b71
    } = function (_0x221968, _0xce6477) {
      let _0x3a4f77 = R(_0x221968, _0xce6477);
      if (!_0x3a4f77) {
        return {
          dx: 0x0,
          dy: 0x0
        };
      }
      let _0x225d39 = _0x221968.textures.get(_0x3a4f77.atlas).get(_0x3a4f77.frame);
      if (!_0x225d39) {
        return {
          dx: 0x0,
          dy: 0x0
        };
      }
      let _0x30be73 = _0x225d39.customData || {};
      if (_0x30be73.gjSpriteOffset) {
        return {
          dx: _0x30be73.gjSpriteOffset.x || 0x0,
          dy: -(_0x30be73.gjSpriteOffset.y || 0x0)
        };
      }
      let _0x535a10 = _0x225d39.realWidth;
      let _0x796c4 = _0x225d39.realHeight;
      let _0x62367d = _0x225d39.width;
      let _0x244756 = _0x225d39.height;
      let _0x58bd9c = 0x0;
      let _0xedc3c7 = 0x0;
      if (_0x30be73.spriteSourceSize) {
        _0x58bd9c = _0x30be73.spriteSourceSize.x || 0x0;
        _0xedc3c7 = _0x30be73.spriteSourceSize.y || 0x0;
      }
      return {
        dx: _0x535a10 / 0x2 - (_0x58bd9c + _0x62367d / 0x2),
        dy: _0x796c4 / 0x2 - (_0xedc3c7 + _0x244756 / 0x2)
      };
    }(_0x4feeca, _0x590e4f);
    if (_0x5eb2df.flipX) {
      _0x2d433c.setFlipX(true);
    }
    if (_0x5eb2df.flipY) {
      _0x2d433c.setFlipY(true);
    }
    let _0x249260 = (_0x2d433c.getData("gjBaseRotationDeg") || 0x0) + _0x5eb2df.rot;
    if (0x0 !== _0x249260) {
      _0x2d433c.setAngle(_0x249260);
    }
    if (0x1 !== _0x5eb2df.scale) {
      _0x2d433c.setScale(_0x5eb2df.scale);
    }
    if (_0x450956) {
      if (undefined !== _0x450956.tint) {
        _0x2d433c.setTint(_0x450956.tint);
      } else if (_0x450956.black) {
        _0x2d433c.setTint(0x0);
      }
    }
  }
  ["_addVisualSprite"](_0x2edd38, _0x55b8b6 = null) {
    if (_0x2edd38) {
      if (_0x55b8b6 && "additive" === _0x55b8b6.blend) {
        _0x2edd38.setBlendMode(S);
        _0x2edd38._eeLayer = 0x0;
      } else if (_0x55b8b6 && _0x55b8b6._portalFront) {
        _0x2edd38._eeLayer = 0x2;
      } else if (_0x55b8b6 && undefined !== _0x55b8b6.z && _0x55b8b6.z < 0x0) {
        _0x2edd38._eeLayer = 0x0;
      } else {
        _0x2edd38._eeLayer = 0x1;
      }
    }
  }
  ['_getGlowFrameName'](_0x40f97f) {
    return _0x40f97f && _0x40f97f.endsWith("_001.png") ? _0x40f97f.replace('_001.png', '_glow_001.png') : null;
  }
  ["_addGlowSprite"](_0x2fb4ca, _0xad3348, _0x5d6f6f, _0x3d09ed, _0x330e58, _0x3f8eef) {
    let _0xa6570d = this._getGlowFrameName(_0x3d09ed);
    if (!_0xa6570d) {
      return;
    }
    if (!R(_0x2fb4ca, _0xa6570d) && !_0x2fb4ca.textures.exists(_0xa6570d)) {
      return;
    }
    let _0x3a5f29 = L(_0x2fb4ca, _0xad3348, _0x5d6f6f, _0xa6570d);
    if (_0x3a5f29) {
      this._applyVisualProps(_0x2fb4ca, _0x3a5f29, _0xa6570d, _0x330e58);
      _0x3a5f29.setBlendMode(S);
      _0x3a5f29._eeLayer = 0x0;
      if (undefined !== _0x3f8eef) {
        _0x3a5f29._eeWorldX = _0x3f8eef;
        _0x3a5f29._eeBaseY = _0x5d6f6f;
        this._addToSection(_0x3a5f29);
      }
    }
  }
  ["_parseGroupIds"](_0x2f5c48) {
    if (!_0x2f5c48) {
      return [];
    }
    const _0x2e2a9f = String(_0x2f5c48).split('.').map(_0x43e0ca => parseInt(_0x43e0ca, 0xa)).filter(_0x5a7cb7 => Number.isFinite(_0x5a7cb7) && _0x5a7cb7 > 0x0);
    return [...new Set(_0x2e2a9f)];
  }
  ["_registerGroupVisual"](_0x5e0f5a, _0x2dedb6) {
    if (!_0x5e0f5a || !_0x2dedb6 || 0x0 === _0x2dedb6.length) {
      return;
    }
    if (undefined === _0x5e0f5a._moveBaseX) {
      _0x5e0f5a._moveBaseX = _0x5e0f5a.x;
      _0x5e0f5a._moveBaseY = _0x5e0f5a.y;
      _0x5e0f5a._moveBaseWorldX = _0x5e0f5a._eeWorldX;
      _0x5e0f5a._moveBaseBaseY = _0x5e0f5a._eeBaseY;
      this._groupVisualResetList.push(_0x5e0f5a);
    }
    for (const _0x3f3fe1 of _0x2dedb6) {
      if (!this._groupVisuals.has(_0x3f3fe1)) {
        this._groupVisuals.set(_0x3f3fe1, []);
      }
      this._groupVisuals.get(_0x3f3fe1).push(_0x5e0f5a);
    }
  }
  ["_registerGroupCollider"](_0x2c5fb5, _0x1b5fe1) {
    if (!_0x2c5fb5 || !_0x1b5fe1 || 0x0 === _0x1b5fe1.length) {
      return;
    }
    if (undefined === _0x2c5fb5._moveBaseX) {
      _0x2c5fb5._moveBaseX = _0x2c5fb5.x;
      _0x2c5fb5._moveBaseY = _0x2c5fb5.y;
      this._groupColliderResetList.push(_0x2c5fb5);
    }
    for (const _0x4c3133 of _0x1b5fe1) {
      if (!this._groupColliders.has(_0x4c3133)) {
        this._groupColliders.set(_0x4c3133, []);
      }
      this._groupColliders.get(_0x4c3133).push(_0x2c5fb5);
    }
  }
  ["_applyMoveDelta"](_0x380ecd, _0x221e36, _0x57b1eb, _0x2f3d48) {
    if (_0x380ecd) {
      for (const _0x4f7b0d of _0x380ecd) {
        if (undefined !== _0x4f7b0d._eeWorldX) {
          _0x4f7b0d._eeWorldX += _0x57b1eb;
        }
        if (undefined !== _0x4f7b0d._eeBaseY) {
          _0x4f7b0d._eeBaseY -= _0x2f3d48;
        }
        if (undefined !== _0x4f7b0d.x) {
          _0x4f7b0d.x += _0x57b1eb;
        }
        if (undefined !== _0x4f7b0d.y) {
          _0x4f7b0d.y -= _0x2f3d48;
        }
      }
    }
    if (_0x221e36) {
      for (const _0x11e046 of _0x221e36) {
        _0x11e046.x += _0x57b1eb;
        _0x11e046.y += _0x2f3d48;
      }
    }
  }
  ["checkMoveTriggers"](_0x57858e) {
    for (; this._moveTriggerIdx < this._moveTriggers.length;) {
      const _0x11f79d = this._moveTriggers[this._moveTriggerIdx];
      if (!(_0x11f79d.x <= _0x57858e)) {
        break;
      }
      this._moveTriggerIdx++;
      const _0x3f6ecb = this._groupVisuals.get(_0x11f79d.groupId) || [];
      const _0x20a954 = this._groupColliders.get(_0x11f79d.groupId) || [];
      if (0x0 === _0x3f6ecb.length && 0x0 === _0x20a954.length) {
        continue;
      }
      if (_0x11f79d.duration <= 0x0) {
        this._applyMoveDelta(_0x3f6ecb, _0x20a954, _0x11f79d.dx, _0x11f79d.dy);
      } else {
        this._activeMoves.push({
          visuals: _0x3f6ecb,
          colliders: _0x20a954,
          dx: _0x11f79d.dx,
          dy: _0x11f79d.dy,
          duration: _0x11f79d.duration,
          elapsed: 0x0,
          appliedX: 0x0,
          appliedY: 0x0
        });
      }
    }
  }
  ["stepMoveTriggers"](_0x5842e3) {
    if (0x0 === this._activeMoves.length) {
      return;
    }
    for (let _0x39eac6 = this._activeMoves.length - 0x1; _0x39eac6 >= 0x0; _0x39eac6--) {
      const _0x35f6eb = this._activeMoves[_0x39eac6];
      _0x35f6eb.elapsed += _0x5842e3;
      const _0x2e0996 = Math.min(_0x35f6eb.elapsed / _0x35f6eb.duration, 0x1);
      const _0x57a29f = _0x35f6eb.dx * _0x2e0996;
      const _0x5d1c5d = _0x35f6eb.dy * _0x2e0996;
      const _0x57e5cf = _0x57a29f - _0x35f6eb.appliedX;
      const _0x372251 = _0x5d1c5d - _0x35f6eb.appliedY;
      _0x35f6eb.appliedX = _0x57a29f;
      _0x35f6eb.appliedY = _0x5d1c5d;
      if (0x0 !== _0x57e5cf || 0x0 !== _0x372251) {
        this._applyMoveDelta(_0x35f6eb.visuals, _0x35f6eb.colliders, _0x57e5cf, _0x372251);
      }
      if (_0x2e0996 >= 0x1) {
        this._activeMoves.splice(_0x39eac6, 0x1);
      }
    }
  }
  ["_spawnLevelObjects"](_0x35f1ae) {
    const _0xd15974 = this._scene;
    let _0x443c50 = new Set();
    this._lastObjectX = 0x0;
    for (let _0x1b937f of _0x35f1ae) {
      const _0x5920d7 = this._parseGroupIds(_0x1b937f.groups);
      let _0x24471f = OBJECT_DEFS[_0x1b937f.id] || null;
      if (_0x24471f && _0x24471f.type === OBJ_TRIGGER) {
        if (!(0x1d !== _0x1b937f.id && 0x1e !== _0x1b937f.id)) {
          this._colorTriggers.push({
            x: 0x2 * _0x1b937f.x,
            index: 0x1d === _0x1b937f.id ? 0x3e8 : 0x3e9,
            color: {
              r: parseInt(_0x1b937f._raw[0x7] ?? 0xff, 0xa),
              g: parseInt(_0x1b937f._raw[0x8] ?? 0xff, 0xa),
              b: parseInt(_0x1b937f._raw[0x9] ?? 0xff, 0xa)
            },
            duration: parseFloat(_0x1b937f._raw[0xa] ?? 0x0),
            tintGround: '1' === _0x1b937f._raw[0xe]
          });
        } else {
          const _0x421d4b = _0x1b937f._raw || {};
          const _0x4e9216 = undefined !== _0x421d4b[0x7] || undefined !== _0x421d4b[0x8] || undefined !== _0x421d4b[0x9];
          const _0x36c196 = parseInt(_0x421d4b[0x17] ?? _0x421d4b[0x33] ?? _0x24471f.colorIdx ?? 0x3e8, 0xa);
          if (_0x4e9216 || Number.isFinite(_0x24471f.colorIdx)) {
            this._colorTriggers.push({
              x: 0x2 * _0x1b937f.x,
              index: Number.isFinite(_0x36c196) ? _0x36c196 : 0x3e8,
              color: {
                r: parseInt(_0x421d4b[0x7] ?? 0xff, 0xa),
                g: parseInt(_0x421d4b[0x8] ?? 0xff, 0xa),
                b: parseInt(_0x421d4b[0x9] ?? 0xff, 0xa)
              },
              duration: parseFloat(_0x421d4b[0xa] ?? 0x0),
              tintGround: '1' === _0x421d4b[0x11]
            });
          }
        }
        if (Number.isFinite(_0x24471f.enterEffect)) {
          this._enterEffectTriggers.push({
            x: 0x2 * _0x1b937f.x,
            effect: _0x24471f.enterEffect
          });
        }
        if (0x385 === _0x1b937f.id) {
          const _0x1f247e = parseInt(_0x1b937f._raw[0x33] || '0', 0xa);
          if (Number.isFinite(_0x1f247e) && _0x1f247e > 0x0) {
            this._moveTriggers.push({
              x: 0x2 * _0x1b937f.x,
              groupId: _0x1f247e,
              dx: 0x2 * parseFloat(_0x1b937f._raw[0x1c] || '0'),
              dy: 0x2 * parseFloat(_0x1b937f._raw[0x1d] || '0'),
              duration: Math.max(0x0, parseFloat(_0x1b937f._raw[0xa] || '0'))
            });
          }
        }
        continue;
      }
      let _0x173c58 = 0x2 * _0x1b937f.x;
      let _0x7ab528 = 0x2 * _0x1b937f.y;
      if (_0x173c58 > this._lastObjectX) {
        this._lastObjectX = _0x173c58;
      }
      let _0x4c7589 = _0x24471f ? _0x24471f.frame : null;
      if (_0x24471f && _0x24471f.randomFrames) {
        _0x4c7589 = _0x24471f.randomFrames[Math.floor(Math.random() * _0x24471f.randomFrames.length)];
      }
      if (_0x4c7589) {
        let _0x1b10a0 = 0x1cc - _0x7ab528;
        const _0x501fde = (_0x24471f.type === OBJ_PORTAL || _0x24471f.type === OBJ_SPEED) && _0x4c7589.includes("_front_");
        if (_0x501fde) {
          const _0x32e8a1 = _0x4c7589.replace('_front_', "_back_");
          let _0x517b49 = L(_0xd15974, _0x173c58, _0x1b10a0, _0x32e8a1);
          if (_0x517b49) {
            this._applyVisualProps(_0xd15974, _0x517b49, _0x32e8a1, _0x1b937f);
            _0x517b49._eeLayer = 0x1;
            _0x517b49._eeWorldX = _0x173c58;
            _0x517b49._eeBaseY = _0x1b10a0;
            this._addToSection(_0x517b49);
          }
        }
        if (_0x24471f.glow) {
          this._addGlowSprite(_0xd15974, _0x173c58, _0x1b10a0, _0x4c7589, _0x1b937f, _0x173c58);
        }
        const _0x36f679 = _0x501fde ? {
          ..._0x24471f,
          _portalFront: true
        } : _0x24471f;
        let _0x554e0e = L(_0xd15974, _0x173c58, _0x1b10a0, _0x4c7589);
        if (_0x554e0e) {
          this._applyVisualProps(_0xd15974, _0x554e0e, _0x4c7589, _0x1b937f, _0x24471f);
          this._addVisualSprite(_0x554e0e, _0x36f679);
          _0x554e0e._eeWorldX = _0x173c58;
          _0x554e0e._eeBaseY = _0x1b10a0;
          this._addToSection(_0x554e0e);
          this._registerGroupVisual(_0x554e0e, _0x5920d7);
        }
        if (_0x24471f && (_0x24471f.type === OBJ_SOLID || _0x24471f.type === OBJ_HAZARD)) {
          let _0x47077e = _0x4c7589.replace("_001.png", "_2_001.png");
          let _0xe3eaec = R(_0xd15974, _0x47077e) ? L(_0xd15974, _0x173c58, _0x1b10a0, _0x47077e) : null;
          if (_0xe3eaec) {
            this._applyVisualProps(_0xd15974, _0xe3eaec, _0x47077e, _0x1b937f);
            this._addVisualSprite(_0xe3eaec);
            _0xe3eaec._eeWorldX = _0x173c58;
            _0xe3eaec._eeBaseY = _0x1b10a0;
            this._addToSection(_0xe3eaec);
            this._registerGroupVisual(_0xe3eaec, _0x5920d7);
          }
        }
        if (_0x24471f.children) {
          for (let _0x2ca803 of _0x24471f.children) {
            let _0x3b4e8c = _0x2ca803.dx || 0x0;
            let _0x172131 = _0x2ca803.dy || 0x0;
            if (undefined !== _0x2ca803.localDx || undefined !== _0x2ca803.localDy) {
              let _0x38902b = _0x2ca803.localDx || 0x0;
              let _0x256a8e = _0x2ca803.localDy || 0x0;
              if (_0x1b937f.flipX) {
                _0x38902b = -_0x38902b;
              }
              if (_0x1b937f.flipY) {
                _0x256a8e = -_0x256a8e;
              }
              let _0x3e62f2 = (_0x1b937f.rot || 0x0) * Math.PI / 0xb4;
              _0x3b4e8c = _0x38902b * Math.cos(_0x3e62f2) - _0x256a8e * Math.sin(_0x3e62f2);
              _0x172131 = _0x38902b * Math.sin(_0x3e62f2) + _0x256a8e * Math.cos(_0x3e62f2);
            }
            let _0x42173e = L(_0xd15974, _0x173c58 + _0x3b4e8c, _0x1b10a0 + _0x172131, _0x2ca803.frame);
            if (_0x42173e) {
              this._applyVisualProps(_0xd15974, _0x42173e, _0x2ca803.frame, _0x1b937f, _0x2ca803);
              if (_0x2ca803.audioScale) {
                _0x42173e.setScale(0.1);
                _0x42173e.setAlpha(0.9);
                _0x42173e._eeAudioScale = true;
                this._audioScaleSprites.push(_0x42173e);
              }
              if ((undefined !== _0x2ca803.z ? _0x2ca803.z : -0x1) < 0x0) {
                _0x42173e._eeLayer = 0x1;
                _0x42173e._eeBehindParent = true;
              } else {
                this._addVisualSprite(_0x42173e, _0x2ca803);
              }
              _0x42173e._eeWorldX = _0x173c58 + _0x3b4e8c;
              _0x42173e._eeBaseY = _0x1b10a0 + _0x172131;
              this._addToSection(_0x42173e);
              this._registerGroupVisual(_0x42173e, _0x5920d7);
            }
          }
        }
      } else if (!_0x24471f) {
        _0x443c50.add(_0x1b937f.id);
      }
      if (_0x24471f && _0x24471f.portalParticle && _0x4c7589) {
        let _0x2e9079 = 0x1cc - _0x7ab528;
        let _0x5926ad = _0x173c58 - 10;
        const _0x388526 = {
          getRandomPoint: _0x4ad804 => {
            let _0x5b7fb4 = (0xbe * Math.random() + 0x55) * Math.PI / 0xb4;
            let _0x2bc56f = 40 + 0x28 * Math.random() * 0x2;
            _0x4ad804.x = Math.cos(_0x5b7fb4) * _0x2bc56f;
            _0x4ad804.y = Math.sin(_0x5b7fb4) * _0x2bc56f;
            return _0x4ad804;
          }
        };
        let _0x1bed6b = _0xd15974.add.particles(_0x5926ad, _0x2e9079, "GJ_WebSheet", {
          frame: "square.png",
          lifespan: {
            min: 0xc8,
            max: 0x3e8
          },
          speed: 0x0,
          scale: {
            start: 0.75,
            end: 0.125
          },
          alpha: {
            start: 0.5,
            end: 0x0
          },
          tint: _0x24471f.portalParticleColor,
          blendMode: Phaser.BlendModes.ADD,
          frequency: 0x14,
          maxParticles: 0x0,
          emitting: true,
          emitZone: {
            type: "random",
            source: _0x388526
          },
          emitCallback: _0x157c59 => {
            let _0x30a90b = -_0x157c59.x;
            let _0x3e98bf = -_0x157c59.y;
            let _0x42124a = Math.sqrt(_0x30a90b * _0x30a90b + _0x3e98bf * _0x3e98bf) || 0x1;
            let _0x1d5ab8 = _0x157c59.life / 0x3e8;
            let _0x1e162a = (_0x42124a - 0x14) / (_0x1d5ab8 || 0.3);
            _0x157c59.velocityX = _0x30a90b / _0x42124a * _0x1e162a;
            _0x157c59.velocityY = _0x3e98bf / _0x42124a * _0x1e162a;
          }
        });
        _0x1bed6b.setDepth(0xe);
        _0x1bed6b._eeLayer = 0x2;
        _0x1bed6b._eeWorldX = _0x173c58;
        _0x1bed6b._eeBaseY = _0x2e9079;
        this._addToSection(_0x1bed6b);
        this._registerGroupVisual(_0x1bed6b, _0x5920d7);
      }
      if (_0x24471f) {
        if (_0x24471f.type === OBJ_SOLID && _0x24471f.gridW > 0x0 && _0x24471f.gridH > 0x0) {
          let _0x10e5ae = _0x24471f.gridW * 0x3c;
          let _0x11e08d = _0x24471f.gridH * 0x3c;
          let _0x4628ff = new O(y, _0x173c58, _0x7ab528, _0x10e5ae, _0x11e08d);
          this.objects.push(_0x4628ff);
          this._addCollisionToSection(_0x4628ff);
          this._registerGroupCollider(_0x4628ff, _0x5920d7);
        } else {
          if (_0x24471f.type === OBJ_HAZARD) {
            let _0x3f8c4f = 0x0;
            let _0x2a123d = 0x0;
            if (_0x24471f.spriteW > 0x0 && _0x24471f.spriteH > 0x0 && undefined !== _0x24471f.hitboxScaleX && undefined !== _0x24471f.hitboxScaleY) {
              _0x3f8c4f = _0x24471f.spriteW * _0x24471f.hitboxScaleX * 0x2;
              _0x2a123d = _0x24471f.spriteH * _0x24471f.hitboxScaleY * 0x2;
            } else if (_0x24471f.gridW > 0x0 && _0x24471f.gridH > 0x0) {
              _0x3f8c4f = 0xc * _0x24471f.gridW;
              _0x2a123d = 0x18 * _0x24471f.gridH;
            }
            if (_0x3f8c4f > 0x0 && _0x2a123d > 0x0) {
              let _0x3c84ad = new O(x, _0x173c58, _0x7ab528, _0x3f8c4f, _0x2a123d);
              this.objects.push(_0x3c84ad);
              this._addCollisionToSection(_0x3c84ad);
              this._registerGroupCollider(_0x3c84ad, _0x5920d7);
            }
          } else {
            if (_0x24471f.type === OBJ_PORTAL) {
              let _0x2c2226 = _0x24471f.gridH * 0x3c;
              let _0x25452a = null;
              if ("fly" === _0x24471f.sub) {
                _0x25452a = _;
              } else if ('cube' === _0x24471f.sub) {
                _0x25452a = w;
              } else if ("gravity_flip" === _0x24471f.sub) {
                _0x25452a = Bn;
              } else if ("gravity_normal" === _0x24471f.sub) {
                _0x25452a = kn;
              }
              if (_0x25452a) {
                let _0x4bd7bc = new O(_0x25452a, _0x173c58, _0x7ab528, 0x5a, _0x2c2226);
                _0x4bd7bc.portalY = _0x7ab528;
                this.objects.push(_0x4bd7bc);
                this._addCollisionToSection(_0x4bd7bc);
                this._registerGroupCollider(_0x4bd7bc, _0x5920d7);
              }
            } else if (_0x24471f.type === OBJ_SPEED) {
              let _0x3a9d85 = new O(Tn, _0x173c58, _0x7ab528, 0x5a, _0x24471f.gridH * 0x3c);
              _0x3a9d85.speedSub = _0x24471f.sub || "normal";
              this.objects.push(_0x3a9d85);
              this._addCollisionToSection(_0x3a9d85);
              this._registerGroupCollider(_0x3a9d85, _0x5920d7);
            } else if (_0x24471f.type === OBJ_PAD) {
              let _0x173f32 = new O(OBJ_PAD, _0x173c58, _0x7ab528, 0x30, 0x18);
              _0x173f32.id = _0x1b937f.id;
              _0x173f32.boost = _0x24471f.padBoost;
              _0x173f32.flipGravity = !!_0x24471f.flipGravity;
              this.objects.push(_0x173f32);
              this._addCollisionToSection(_0x173f32);
              this._registerGroupCollider(_0x173f32, _0x5920d7);
            } else if (_0x24471f.type === OBJ_RING) {
              let _0x4a58bf = new O(OBJ_RING, _0x173c58, _0x7ab528, 0x30, 0x30);
              _0x4a58bf.id = _0x1b937f.id;
              _0x4a58bf.boost = _0x24471f.ringBoost;
              _0x4a58bf.flipGravity = !!_0x24471f.flipGravity;
              this.objects.push(_0x4a58bf);
              this._addCollisionToSection(_0x4a58bf);
              this._registerGroupCollider(_0x4a58bf, _0x5920d7);
            }
          }
        }
      }
    }
    _0x443c50.size;
    this._colorTriggers.sort((_0x359c7f, _0x28dd8b) => _0x359c7f.x - _0x28dd8b.x);
    this._enterEffectTriggers.sort((_0x3e43f2, _0x5e3d9a) => _0x3e43f2.x - _0x5e3d9a.x);
    this._moveTriggers.sort((_0x2ff8ca, _0x31068a) => _0x2ff8ca.x - _0x31068a.x);
    this.endXPos = Math.max(r + 0x4b0, this._lastObjectX + 0x2a8);
  }
  ['createEndPortal'](_0x41fbdb) {
    var _0x400605;
    if (this.endXPos <= 0x0) {
      return;
    }
    const _0x3b56d4 = this.endXPos;
    const _0x46064b = Math.round(0x10);
    this._endPortalContainer = _0x41fbdb.add.container(_0x3b56d4, 220);
    for (let _0x2a327c = 0x0; _0x2a327c < _0x46064b; _0x2a327c++) {
      const _0xacf7ef = _0x41fbdb.add.image(0x0, (_0x2a327c - Math.floor(_0x46064b / 0x2)) * 0x3c, "GJ_WebSheet", "square_02_001.png").setAngle(-0x5a);
      this._endPortalContainer.add(_0xacf7ef);
    }
    this.container.add(this._endPortalContainer);
    this._endPortalShine = _0x41fbdb.add.image(_0x3b56d4 - 0x3a, 220, 'GJ_WebSheet', 'gradientBar.png');
    const _0x3e25a9 = (null == (_0x400605 = _0x41fbdb.textures.getFrame("GJ_WebSheet", "gradientBar.png")) ? undefined : _0x400605.height) || 0x40;
    this._endPortalShine.setBlendMode(S);
    this._endPortalShine.setTint(0xff00);
    this._endPortalShine.setScale(0x1, 0x3c0 / _0x3e25a9);
    this.additiveContainer.add(this._endPortalShine);
    const _0x58cedb = _0x3b56d4 - 0x1e;
    const _0x4f52b7 = {
      getRandomPoint: _0x4f04dd => {
        const _0x53ec71 = (0x55 + 0xbe * Math.random()) * Math.PI / 0xb4;
        const _0x42e60c = 0x140 + 0x50 * (0x2 * Math.random() - 0x1);
        _0x4f04dd.x = Math.cos(_0x53ec71) * _0x42e60c;
        _0x4f04dd.y = Math.sin(_0x53ec71) * _0x42e60c;
        return _0x4f04dd;
      }
    };
    this._endPortalEmitter = _0x41fbdb.add.particles(_0x58cedb, 220, "GJ_WebSheet", {
      frame: "square.png",
      lifespan: {
        min: 0xc8,
        max: 0x3e8
      },
      speed: 0x0,
      scale: {
        start: 0.75,
        end: 0.125
      },
      alpha: {
        start: 0x1,
        end: 0x0
      },
      tint: 0xff00,
      blendMode: Phaser.BlendModes.ADD,
      frequency: 0xa,
      maxParticles: 0x64,
      emitting: true,
      emitZone: {
        type: "random",
        source: _0x4f52b7
      },
      emitCallback: _0x2daff4 => {
        const _0x5e30d8 = -_0x2daff4.x;
        const _0x17ba71 = -_0x2daff4.y;
        const _0x3c5c52 = Math.sqrt(_0x5e30d8 * _0x5e30d8 + _0x17ba71 * _0x17ba71) || 0x1;
        const _0x279521 = (_0x3c5c52 - 0x14) / (_0x2daff4.life / 0x3e8 || 0.3);
        _0x2daff4.velocityX = _0x5e30d8 / _0x3c5c52 * _0x279521;
        _0x2daff4.velocityY = _0x17ba71 / _0x3c5c52 * _0x279521;
      }
    });
    this._endPortalEmitter.setDepth(0xe);
    this.topContainer.add(this._endPortalEmitter);
    this._endPortalGameY = 0xf0;
  }
  ["updateEndPortalY"](_0x26f0ab, _0x43c4d1) {
    if (!this._endPortalContainer) {
      return;
    }
    const _0x50aa7d = 0x8c + _0x26f0ab;
    let _0x1be4c3;
    _0x1be4c3 = _0x43c4d1 ? _0x50aa7d : Math.max(0xf0, _0x50aa7d);
    const _0x32e645 = 0x1cc - _0x1be4c3;
    this._endPortalContainer.y = _0x32e645;
    this._endPortalShine.y = _0x32e645;
    this._endPortalEmitter.y = _0x32e645;
    this._endPortalGameY = _0x1be4c3;
  }
  ["checkColorTriggers"](_0x2b00ce) {
    let _0x24b030 = [];
    for (; this._colorTriggerIdx < this._colorTriggers.length;) {
      let _0x39c924 = this._colorTriggers[this._colorTriggerIdx];
      if (!(_0x39c924.x <= _0x2b00ce)) {
        break;
      }
      _0x24b030.push(_0x39c924);
      this._colorTriggerIdx++;
    }
    return _0x24b030;
  }
  ["resetColorTriggers"]() {
    this._colorTriggerIdx = 0x0;
  }
  ["_addToSection"](_0x4413d3) {
    const _0x4ac40a = Math.max(0x0, Math.floor(_0x4413d3._eeWorldX / 0x190));
    if (!this._sections[_0x4ac40a]) {
      this._sections[_0x4ac40a] = [];
    }
    this._sections[_0x4ac40a].push(_0x4413d3);
    const _0x14d5f7 = undefined !== _0x4413d3._eeLayer ? _0x4413d3._eeLayer : 0x1;
    if (0x2 === _0x14d5f7) {
      return void this.topContainer.add(_0x4413d3);
    }
    if (!this._sectionContainers[_0x4ac40a]) {
      const _0xc1a93d = {
        additive: this._scene.add.container(0x0, 0x0),
        normal: this._scene.add.container(0x0, 0x0)
      };
      this.additiveContainer.add(_0xc1a93d.additive);
      this.container.add(_0xc1a93d.normal);
      this._sectionContainers[_0x4ac40a] = _0xc1a93d;
    }
    const _0x2157d3 = this._sectionContainers[_0x4ac40a];
    if (0x0 === _0x14d5f7) {
      _0x2157d3.additive.add(_0x4413d3);
    } else if (_0x4413d3._eeBehindParent) {
      _0x2157d3.normal.addAt(_0x4413d3, 0x0);
    } else {
      _0x2157d3.normal.add(_0x4413d3);
    }
  }
  ["_addCollisionToSection"](_0x3dce4b) {
    const _0x5cad3c = Math.max(0x0, Math.floor(_0x3dce4b.x / 0x190));
    if (!this._collisionSections[_0x5cad3c]) {
      this._collisionSections[_0x5cad3c] = [];
    }
    this._collisionSections[_0x5cad3c].push(_0x3dce4b);
  }
  ["_setSectionVisible"](_0x2b0fa1, _0x488507) {
    const _0x141e9c = this._sectionContainers[_0x2b0fa1];
    if (_0x141e9c) {
      _0x141e9c.additive.visible = _0x488507;
      _0x141e9c.normal.visible = _0x488507;
    }
  }
  ["updateVisibility"](_0xa5f1e1) {
    const _0x1dce22 = this._sectionContainers.length - 0x1;
    if (_0x1dce22 < 0x0) {
      return;
    }
    const _0x5b29dd = Math.max(0x0, Math.floor((_0xa5f1e1 - 0x8c) / 0x190));
    const _0x3b33db = Math.min(_0x1dce22, Math.floor((_0xa5f1e1 + r + 0x8c) / 0x190));
    const _0x1800fc = this._visMinSec;
    const _0xc31046 = this._visMaxSec;
    if (_0x1800fc < 0x0) {
      for (let _0x47dbe1 = 0x0; _0x47dbe1 <= _0x1dce22; _0x47dbe1++) {
        this._setSectionVisible(_0x47dbe1, _0x47dbe1 >= _0x5b29dd && _0x47dbe1 <= _0x3b33db);
      }
      this._visMinSec = _0x5b29dd;
      return void (this._visMaxSec = _0x3b33db);
    }
    if (_0x5b29dd !== _0x1800fc || _0x3b33db !== _0xc31046) {
      if (_0x5b29dd > _0x1800fc) {
        for (let _0x7da5df = _0x1800fc; _0x7da5df <= Math.min(_0x5b29dd - 0x1, _0xc31046); _0x7da5df++) {
          this._setSectionVisible(_0x7da5df, false);
        }
      }
      if (_0x3b33db < _0xc31046) {
        for (let _0x5b2d47 = Math.max(_0x3b33db + 0x1, _0x1800fc); _0x5b2d47 <= _0xc31046; _0x5b2d47++) {
          this._setSectionVisible(_0x5b2d47, false);
        }
      }
      if (_0x5b29dd < _0x1800fc) {
        for (let _0x3caab6 = _0x5b29dd; _0x3caab6 <= Math.min(_0x1800fc - 0x1, _0x3b33db); _0x3caab6++) {
          this._setSectionVisible(_0x3caab6, true);
        }
      }
      if (_0x3b33db > _0xc31046) {
        for (let _0x347412 = Math.max(_0xc31046 + 0x1, _0x5b29dd); _0x347412 <= _0x3b33db; _0x347412++) {
          this._setSectionVisible(_0x347412, true);
        }
      }
      this._visMinSec = _0x5b29dd;
      this._visMaxSec = _0x3b33db;
    }
  }
  ["getNearbySectionObjects"](_0x2e85c7) {
    const _0x55d1b7 = Math.max(0x0, Math.floor(_0x2e85c7 / 0x190));
    const _0x31c345 = Math.max(0x0, _0x55d1b7 - 0x1);
    const _0x5f1907 = Math.min(this._collisionSections.length - 0x1, _0x55d1b7 + 0x1);
    const _0x28a7c0 = this._nearbyBuffer;
    _0x28a7c0.length = 0x0;
    for (let _0xe2cbfa = _0x31c345; _0xe2cbfa <= _0x5f1907; _0xe2cbfa++) {
      const _0x2171db = this._collisionSections[_0xe2cbfa];
      if (_0x2171db) {
        for (let _0x5cdca9 = 0x0; _0x5cdca9 < _0x2171db.length; _0x5cdca9++) {
          _0x28a7c0.push(_0x2171db[_0x5cdca9]);
        }
      }
    }
    return _0x28a7c0;
  }
  ["checkEnterEffectTriggers"](_0x5d0838) {
    for (; this._enterEffectTriggerIdx < this._enterEffectTriggers.length;) {
      let _0x937c72 = this._enterEffectTriggers[this._enterEffectTriggerIdx];
      if (!(_0x937c72.x <= _0x5d0838)) {
        break;
      }
      this._activeEnterEffect = _0x937c72.effect;
      this._activeExitEffect = _0x937c72.effect;
      this._enterEffectTriggerIdx++;
    }
  }
  ["resetEnterEffectTriggers"]() {
    this._enterEffectTriggerIdx = 0x0;
    this._activeEnterEffect = 0x0;
    this._activeExitEffect = 0x0;
    for (let _0x17a21d = 0x0; _0x17a21d < this._sections.length; _0x17a21d++) {
      this._setSectionVisible(_0x17a21d, true);
      const _0x14a035 = this._sections[_0x17a21d];
      if (_0x14a035) {
        for (let _0x13e116 = 0x0; _0x13e116 < _0x14a035.length; _0x13e116++) {
          const _0x1e8f9f = _0x14a035[_0x13e116];
          _0x1e8f9f._eeActive = false;
          _0x1e8f9f.visible = true;
          _0x1e8f9f.x = _0x1e8f9f._eeWorldX;
          _0x1e8f9f.y = _0x1e8f9f._eeBaseY;
          if (!_0x1e8f9f._eeAudioScale) {
            _0x1e8f9f.setScale(0x1);
          }
          _0x1e8f9f.setAlpha(0x1);
        }
      }
    }
  }
  ["resetMoveTriggers"]() {
    this._moveTriggerIdx = 0x0;
    this._activeMoves.length = 0x0;
    for (const _0x3e4b09 of this._groupVisualResetList) {
      if (undefined !== _0x3e4b09._moveBaseWorldX) {
        _0x3e4b09._eeWorldX = _0x3e4b09._moveBaseWorldX;
      }
      if (undefined !== _0x3e4b09._moveBaseBaseY) {
        _0x3e4b09._eeBaseY = _0x3e4b09._moveBaseBaseY;
      }
      if (undefined !== _0x3e4b09._moveBaseX) {
        _0x3e4b09.x = _0x3e4b09._moveBaseX;
      }
      if (undefined !== _0x3e4b09._moveBaseY) {
        _0x3e4b09.y = _0x3e4b09._moveBaseY;
      }
    }
    for (const _0x47cf35 of this._groupColliderResetList) {
      _0x47cf35.x = _0x47cf35._moveBaseX;
      _0x47cf35.y = _0x47cf35._moveBaseY;
    }
  }
  ["applyEnterEffects"](_0x2f36ed) {
    const _0x548004 = _0x2f36ed + r;
    const _0x49c6d8 = _0x2f36ed + r / 0x2;
    const _0x2d8f53 = Math.max(0x0, Math.floor((_0x2f36ed - 0x8c) / 0x190));
    const _0x2b19db = Math.min(this._sections.length - 0x1, Math.floor((_0x548004 + 0x8c) / 0x190));
    for (let _0x1bd44f = _0x2d8f53; _0x1bd44f <= _0x2b19db; _0x1bd44f++) {
      const _0x2cff29 = this._sections[_0x1bd44f];
      if (!_0x2cff29) {
        continue;
      }
      const _0x20a3bb = _0x1bd44f * 0x190;
      const _0x8f9d56 = _0x20a3bb >= _0x2f36ed + 0x8c && _0x20a3bb + 0x190 <= _0x548004 - 0x8c;
      for (let _0x54aba7 = 0x0; _0x54aba7 < _0x2cff29.length; _0x54aba7++) {
        const _0x2ae6ed = _0x2cff29[_0x54aba7];
        if (_0x8f9d56) {
          if (_0x2ae6ed._eeActive) {
            _0x2ae6ed._eeActive = false;
            _0x2ae6ed.y = _0x2ae6ed._eeBaseY;
            _0x2ae6ed.x = _0x2ae6ed._eeWorldX;
            if (!_0x2ae6ed._eeAudioScale) {
              _0x2ae6ed.setScale(0x1);
            }
            _0x2ae6ed.setAlpha(0x1);
          }
          continue;
        }
        const _0xeded99 = _0x2ae6ed._eeWorldX;
        const _0x1b2883 = _0xeded99 > _0x49c6d8;
        let _0x289aa2;
        _0x289aa2 = _0x1b2883 ? Math.max(0x0, Math.min(0x1, (_0x548004 - _0xeded99) / 0x8c)) : Math.max(0x0, Math.min(0x1, (_0xeded99 - _0x2f36ed) / 0x8c));
        if (_0x289aa2 >= 0x1) {
          if (_0x2ae6ed._eeActive) {
            _0x2ae6ed._eeActive = false;
            _0x2ae6ed.y = _0x2ae6ed._eeBaseY;
            _0x2ae6ed.x = _0x2ae6ed._eeWorldX;
            if (!_0x2ae6ed._eeAudioScale) {
              _0x2ae6ed.setScale(0x1);
            }
            _0x2ae6ed.setAlpha(0x1);
          }
          continue;
        }
        _0x2ae6ed._eeActive = true;
        const _0x453353 = _0x1b2883 ? this._activeEnterEffect : this._activeExitEffect;
        const _0x20804e = 0x1 - _0x289aa2;
        let _0x50e6d9 = _0x2ae6ed._eeBaseY;
        let _0x17437c = _0x2ae6ed._eeWorldX;
        let _0x127ace = 0x1;
        switch (_0x453353) {
          case 0x0:
            break;
          case 0x1:
            _0x50e6d9 = _0x2ae6ed._eeBaseY + 0xc8 * _0x20804e;
            break;
          case 0x2:
            _0x50e6d9 = _0x2ae6ed._eeBaseY - 0xc8 * _0x20804e;
            break;
          case 0x3:
            _0x17437c = _0x2ae6ed._eeWorldX - 0xc8 * _0x20804e;
            break;
          case 0x4:
            _0x17437c = _0x2ae6ed._eeWorldX + 0xc8 * _0x20804e;
            break;
          case 0x5:
            if (!_0x2ae6ed._eeAudioScale) {
              _0x127ace = _0x289aa2;
            }
            break;
          case 0x6:
            if (!_0x2ae6ed._eeAudioScale) {
              _0x127ace = 0x1 + 0.75 * _0x20804e;
            }
        }
        if (_0x2ae6ed.x !== _0x17437c) {
          _0x2ae6ed.x = _0x17437c;
        }
        if (_0x2ae6ed.y !== _0x50e6d9) {
          _0x2ae6ed.y = _0x50e6d9;
        }
        if (_0x2ae6ed.alpha !== _0x289aa2) {
          _0x2ae6ed.alpha = _0x289aa2;
        }
        if (!(_0x2ae6ed._eeAudioScale || _0x2ae6ed.scaleX === _0x127ace)) {
          _0x2ae6ed.setScale(_0x127ace);
        }
      }
    }
  }
  ['setGroundColor'](_0x3958eb) {
    for (let _0x46c21a of this._groundTiles) _0x46c21a.setTint(_0x3958eb);
    for (let _0x251562 of this._ceilingTiles) _0x251562.setTint(_0x3958eb);
  }
  ["updateAudioScale"](_0x337bf7) {
    for (let _0x24afdb of this._audioScaleSprites) _0x24afdb.setScale(_0x337bf7);
  }
  ["resetVisibility"]() {
    this._visMinSec = -0x1;
    this._visMaxSec = -0x1;
  }
  ["resetObjects"]() {
    for (let _0x3d473e of this.objects) _0x3d473e.activated = false;
    for (let _0x5c5d9a of this._audioScaleSprites) _0x5c5d9a.setScale(0.1);
  }
}
class cs {
  constructor(_0x9c2356, _0x171c7f, _0x49d49a, _0xb01616, _0x5aac4b, _0x293ce3, _0x5c7bc5 = 0xffffff, _0x5a3e29 = 0x1) {
    this._color = _0x5c7bc5;
    this._opacity = _0x5a3e29;
    this._fadeDelta = 0x1 / _0x49d49a;
    this._minSegSq = _0xb01616 * _0xb01616;
    this._maxSeg = _0x293ce3;
    this._maxPoints = 0x5 * Math.floor(0x3c * _0x49d49a + 0x2);
    this._stroke = _0x5aac4b;
    this._pts = [];
    this._posR = {
      x: 0x0,
      y: 0x0
    };
    this._posInit = false;
    this._active = false;
    this._gfx = _0x9c2356.add.graphics();
    this._gfx.setBlendMode(Phaser.BlendModes.ADD);
  }
  ["addToContainer"](_0xa23240, _0x4b05db) {
    _0xa23240.add(this._gfx);
    this._gfx.setDepth(_0x4b05db);
  }
  ["setPosition"](_0x388397, _0x292e79) {
    this._posR.x = _0x388397;
    this._posR.y = _0x292e79;
    this._posInit = true;
  }
  ["start"]() {
    this._active = true;
  }
  ["stop"]() {
    this._active = false;
  }
  ["reset"]() {
    this._pts = [];
    this._posInit = false;
    this._gfx.clear();
  }
  ['update'](_0x2acf4c) {
    if (!this._posInit) {
      return void this._gfx.clear();
    }
    const _0x1817b7 = _0x2acf4c * this._fadeDelta;
    let _0x56ab0b = 0x0;
    for (let _0x3ca060 = 0x0; _0x3ca060 < this._pts.length; _0x3ca060++) {
      this._pts[_0x3ca060].state -= _0x1817b7;
      if (this._pts[_0x3ca060].state > 0x0) {
        if (_0x56ab0b !== _0x3ca060) {
          this._pts[_0x56ab0b] = this._pts[_0x3ca060];
        }
        _0x56ab0b++;
      }
    }
    this._pts.length = _0x56ab0b;
    if (this._active && this._pts.length < this._maxPoints) {
      const _0x89a79d = this._pts.length;
      let _0x3d12ca = true;
      if (_0x89a79d > 0x0) {
        const _0x2748e4 = this._pts[_0x89a79d - 0x1];
        const _0x3a1a00 = this._posR.x - _0x2748e4.x;
        const _0x4c247a = this._posR.y - _0x2748e4.y;
        const _0x1f9fea = _0x3a1a00 * _0x3a1a00 + _0x4c247a * _0x4c247a;
        if (this._maxSeg > 0x0 && Math.sqrt(_0x1f9fea) > this._maxSeg) {
          this._pts.length = 0x0;
        } else {
          if (_0x1f9fea < this._minSegSq) {
            _0x3d12ca = false;
          } else {
            if (_0x89a79d > 0x1) {
              const _0x375c40 = this._pts[_0x89a79d - 0x2];
              const _0x14c0c1 = this._posR.x - _0x375c40.x;
              const _0x2d01f0 = this._posR.y - _0x375c40.y;
              if (_0x14c0c1 * _0x14c0c1 + _0x2d01f0 * _0x2d01f0 < 0x2 * this._minSegSq) {
                _0x3d12ca = false;
              }
            }
          }
        }
      }
      if (_0x3d12ca) {
        this._pts.push({
          x: this._posR.x,
          y: this._posR.y,
          state: 0x1
        });
      }
    }
    this._gfx.clear();
    const _0x49dac5 = this._pts.length;
    if (!(_0x49dac5 < 0x2)) {
      for (let _0x27c164 = 0x0; _0x27c164 < _0x49dac5 - 0x1; _0x27c164++) {
        const _0x398b7b = this._pts[_0x27c164];
        const _0x3b4326 = this._pts[_0x27c164 + 0x1];
        const _0x1c4c9d = 0.5 * (_0x398b7b.state + _0x3b4326.state) * this._opacity;
        this._gfx.lineStyle(this._stroke, this._color, _0x1c4c9d);
        this._gfx.lineBetween(_0x398b7b.x, _0x398b7b.y, _0x3b4326.x, _0x3b4326.y);
      }
    }
  }
}
function ds(_0x415536, _0x592bc1, _0x4d69dc, _0xfb965c, _0x43d3fd, _0x5bbdf1) {
  let _0x221d10 = R(_0x415536, _0xfb965c);
  if (!_0x221d10) {
    return null;
  }
  let _0x38da45 = _0x415536.add.image(_0x592bc1, _0x4d69dc, _0x221d10.atlas, _0x221d10.frame);
  _0x38da45.setDepth(_0x43d3fd);
  _0x38da45.setVisible(_0x5bbdf1);
  return {
    sprite: _0x38da45
  };
}
class ps {
  constructor(_0x5b73d2, _0x3f50cc, _0x2811e1) {
    this._scene = _0x5b73d2;
    this.p = _0x3f50cc;
    this._gameLayer = _0x2811e1;
    this._rotation = 0x0;
    this.rotateActionActive = false;
    this.rotateActionTime = 0x0;
    this.rotateActionDuration = 0x0;
    this.rotateActionStart = 0x0;
    this.rotateActionTotal = 0x0;
    this._showHitboxes = false;
    this._lastLandObject = null;
    this._lastXOffset = 0x0;
    this._lastCameraX = 0x0;
    this._lastCameraY = 0x0;
    this._createSprites();
    this._initParticles(_0x5b73d2);
    _0x5b73d2.events.on("shutdown", () => this._cleanupExplosion());
  }
  ['_createSprites']() {
    const _0x1872a7 = this._scene;
    const _0x28689a = 0x1cc - this.p.y;
    const _0xf42f36 = h;
    this._playerGlowLayer = ds(_0x1872a7, _0xf42f36, _0x28689a, "player_01_glow_001.png", 0x9, false);
    this._playerSpriteLayer = ds(_0x1872a7, _0xf42f36, _0x28689a, 'player_01_001.png', 0xa, true);
    this._playerOverlayLayer = ds(_0x1872a7, _0xf42f36, _0x28689a, "player_01_2_001.png", 0x8, true);
    this._playerExtraLayer = ds(_0x1872a7, _0xf42f36, _0x28689a, "player_01_extra_001.png", 0xc, true);
    if (this._playerGlowLayer) {
      this._playerGlowLayer.sprite.setTint(0xffff);
      this._playerGlowLayer.sprite._glowEnabled = false;
    }
    if (this._playerSpriteLayer) {
      this._playerSpriteLayer.sprite.setTint(0xff00);
    } else {
      let _0x3aecd9 = _0x1872a7.add.rectangle(_0xf42f36, _0x28689a, 0x3c, 0x3c, 0xff00);
      _0x3aecd9.setDepth(0xa);
      this._playerSpriteLayer = {
        sprite: _0x3aecd9
      };
    }
    if (this._playerOverlayLayer) {
      this._playerOverlayLayer.sprite.setTint(0xffff);
    }
    this._shipGlowLayer = ds(_0x1872a7, _0xf42f36, _0x28689a, "ship_01_glow_001.png", 0x9, false);
    this._shipSpriteLayer = ds(_0x1872a7, _0xf42f36, _0x28689a, "ship_01_001.png", 0xa, false);
    this._shipOverlayLayer = ds(_0x1872a7, _0xf42f36, _0x28689a, 'ship_01_2_001.png', 0x8, false);
    this._shipExtraLayer = ds(_0x1872a7, _0xf42f36, _0x28689a, "ship_01_extra_001.png", 0xc, false);
    if (this._shipGlowLayer) {
      this._shipGlowLayer.sprite.setTint(0xffff);
      this._shipGlowLayer.sprite._glowEnabled = false;
    }
    if (this._shipSpriteLayer) {
      this._shipSpriteLayer.sprite.setTint(0xff00);
    } else {
      let _0x100643 = _0x1872a7.add.polygon(_0xf42f36, _0x28689a, [{
        x: -0x48,
        y: 0x28
      }, {
        x: 0x48,
        y: 0x0
      }, {
        x: -0x48,
        y: -0x28
      }, {
        x: -0x28,
        y: 0x0
      }], 0xff00);
      _0x100643.setDepth(0xa).setVisible(false);
      this._shipSpriteLayer = {
        sprite: _0x100643
      };
    }
    if (this._shipOverlayLayer) {
      this._shipOverlayLayer.sprite.setTint(0xffff);
    }
    this.playerSprite = this._playerSpriteLayer.sprite;
    this.shipSprite = this._shipSpriteLayer.sprite;
    this._playerLayers = [this._playerSpriteLayer, this._playerGlowLayer, this._playerOverlayLayer, this._playerExtraLayer];
    this._shipLayers = [this._shipSpriteLayer, this._shipGlowLayer, this._shipOverlayLayer, this._shipExtraLayer];
    this._allLayers = [...this._playerLayers, ...this._shipLayers];
  }
  ['_initParticles'](_0x538533) {
    this._particleEmitter = _0x538533.add.particles(0x0, 0x0, "GJ_WebSheet", {
      frame: "square.png",
      speed: {
        min: 0x6e,
        max: 0xbe
      },
      angle: {
        min: 0xe1,
        max: 0x13b
      },
      lifespan: {
        min: 0x96,
        max: 0x1c2
      },
      scale: {
        start: 0.5,
        end: 0x0
      },
      gravityY: 0x258,
      frequency: 33.333333333333336,
      blendMode: "ADD",
      alpha: {
        start: 0x1,
        end: 0x0
      },
      tint: 0xff00
    });
    this._particleEmitter.stop();
    this._particleEmitter.setDepth(0x9);
    this._gameLayer.container.add(this._particleEmitter);
    this._flyParticleEmitter = _0x538533.add.particles(0x0, 0x0, "GJ_WebSheet", {
      frame: 'square.png',
      speed: {
        min: 0x16,
        max: 0x26
      },
      angle: {
        min: 0xe1,
        max: 0x13b
      },
      lifespan: {
        min: 0x96,
        max: 0x1c2
      },
      scale: {
        start: 0.5,
        end: 0x0
      },
      gravityY: 0x258,
      frequency: 33.333333333333336,
      blendMode: "ADD",
      tint: {
        start: 0xff6400,
        end: 0xff0000
      },
      alpha: {
        start: 0x1,
        end: 0x0
      }
    });
    this._flyParticleEmitter.stop();
    this._flyParticleEmitter.setDepth(0x9);
    this._gameLayer.container.add(this._flyParticleEmitter);
    this._flyParticle2Emitter = _0x538533.add.particles(0x0, 0x0, "GJ_WebSheet", {
      frame: "square.png",
      speed: {
        min: 0xdc,
        max: 0x17c
      },
      angle: {
        min: 0xb4,
        max: 0x168
      },
      lifespan: {
        min: 0x96,
        max: 0x1c2
      },
      scale: {
        start: 0.75,
        end: 0x0
      },
      gravityY: 0x258,
      frequency: 33.333333333333336,
      blendMode: "ADD",
      tint: {
        start: 0xffbe00,
        end: 0xff0000
      },
      alpha: {
        start: 0x1,
        end: 0x0
      }
    });
    this._flyParticle2Emitter.stop();
    this._flyParticle2Emitter.setDepth(0x9);
    this._gameLayer.container.add(this._flyParticle2Emitter);
    this._shipDragEmitter = _0x538533.add.particles(0x0, 0x0, 'GJ_WebSheet', {
      frame: "square.png",
      x: {
        min: -0x12,
        max: 0x12
      },
      speed: {
        min: 223.79999999999998,
        max: 343.79999999999995
      },
      angle: {
        min: 0xcd,
        max: 0x127
      },
      lifespan: {
        min: 0x50,
        max: 0xdc
      },
      scale: {
        start: 0.375,
        end: 0x0
      },
      gravityX: -0x2bc,
      gravityY: 0x258,
      frequency: 0x19,
      blendMode: "ADD",
      alpha: {
        start: 0x1,
        end: 0x0
      }
    });
    this._shipDragEmitter.stop();
    this._shipDragEmitter.setDepth(0x16);
    this._shipDragActive = false;
    this._particleActive = false;
    this._flyParticle2Active = false;
    this._flyParticleActive = false;
    const _0x57911a = {
      frame: "square.png",
      speed: {
        min: 0xfa,
        max: 0x15e
      },
      angle: {
        min: 0xd2,
        max: 0x14a
      },
      lifespan: {
        min: 0x32,
        max: 0x258
      },
      scale: {
        start: 0.625,
        end: 0x0
      },
      gravityY: 0x3e8,
      blendMode: "ADD",
      alpha: {
        start: 0x1,
        end: 0x0
      },
      tint: 0xff00,
      emitting: false
    };
    this._landEmitter1 = _0x538533.add.particles(0x0, 0x0, 'GJ_WebSheet', {
      ..._0x57911a
    });
    this._landEmitter2 = _0x538533.add.particles(0x0, 0x0, "GJ_WebSheet", {
      ..._0x57911a
    });
    this._aboveContainer = _0x538533.add.container(0x0, 0x0);
    this._aboveContainer.setDepth(0xd);
    this._aboveContainer.add(this._landEmitter1);
    this._aboveContainer.add(this._landEmitter2);
    this._landIdx = false;
    this._streak = new cs(this._scene, "streak_01", 0.231, 0xa, 0x8, 0x64, 0xffff, 0.7);
    this._streak.addToContainer(this._gameLayer.container, 0x8);
  }
  ["_updateParticles"](_0xc43238, _0x52b718, _0x5af874) {
    if (this.p.isDead) {
      return;
    }
    const _0x119eb7 = this._scene._playerWorldX;
    const _0x519d38 = 0x1cc - this.p.y;
    this._particleEmitter.particleX = _0x119eb7 - 0x14;
    this._particleEmitter.particleY = _0x519d38 + 0x1a;
    const _0x4436ac = this.p.onGround && !this.p.isFlying;
    if (_0x4436ac && !this._particleActive) {
      this._particleEmitter.start();
      this._particleActive = true;
    } else if (!_0x4436ac && this._particleActive) {
      this._particleEmitter.stop();
      this._particleActive = false;
    }
    {
      const _0xe76a85 = Math.cos(this._rotation);
      const _0x26ec65 = Math.sin(this._rotation);
      const _0x216018 = -0x18;
      const _0x75c380 = _0x119eb7 + _0x216018 * _0xe76a85 - 0x12 * _0x26ec65;
      const _0x2b31d7 = _0x519d38 + _0x216018 * _0x26ec65 + 0x12 * _0xe76a85;
      const _0x5d66f4 = 0x2 * (0x2 * Math.random() - 0x1) * 0x2;
      this._flyParticleEmitter.particleX = _0x75c380;
      this._flyParticleEmitter.particleY = _0x2b31d7 + _0x5d66f4;
      this._flyParticle2Emitter.particleX = _0x75c380;
      this._flyParticle2Emitter.particleY = _0x2b31d7 + _0x5d66f4;
      this._streak.setPosition(_0x75c380 + 0x8, _0x2b31d7);
    }
    this._streak.update(_0x5af874);
    const _0x3d69d2 = this.p.isFlying;
    if (_0x3d69d2 && !this._flyParticleActive) {
      this._flyParticleEmitter.start();
      this._flyParticleActive = true;
    } else if (!_0x3d69d2 && this._flyParticleActive) {
      this._flyParticleEmitter.stop();
      this._flyParticleActive = false;
    }
    const _0x169e30 = this.p.isFlying && this.p.upKeyDown;
    if (_0x169e30 && !this._flyParticle2Active) {
      this._flyParticle2Emitter.start();
      this._flyParticle2Active = true;
    } else if (!_0x169e30 && this._flyParticle2Active) {
      this._flyParticle2Emitter.stop();
      this._flyParticle2Active = false;
    }
    this._shipDragEmitter.x = h;
    this._shipDragEmitter.particleY = 0x1cc - this.p.y + _0x52b718 + 0x1e;
    const _0x2ac9d0 = this.p.isFlying && this.p.onGround && !this.p.onCeiling;
    if (_0x2ac9d0 && !this._shipDragActive) {
      this._shipDragEmitter.start();
      this._shipDragActive = true;
    } else if (!_0x2ac9d0 && this._shipDragActive) {
      this._shipDragEmitter.stop();
      this._shipDragActive = false;
    }
  }
  ['setCubeVisible'](_0x411813) {
    this._playerSpriteLayer.sprite.setVisible(_0x411813);
    if (this._playerGlowLayer) {
      this._playerGlowLayer.sprite.setVisible(_0x411813 && this._playerGlowLayer.sprite._glowEnabled);
    }
    if (this._playerOverlayLayer) {
      this._playerOverlayLayer.sprite.setVisible(_0x411813);
    }
    if (this._playerExtraLayer) {
      this._playerExtraLayer.sprite.setVisible(_0x411813);
    }
  }
  ["setShipVisible"](_0x1c5620) {
    this._shipSpriteLayer.sprite.setVisible(_0x1c5620);
    if (this._shipGlowLayer) {
      this._shipGlowLayer.sprite.setVisible(_0x1c5620 && this._shipGlowLayer.sprite._glowEnabled);
    }
    if (this._shipOverlayLayer) {
      this._shipOverlayLayer.sprite.setVisible(_0x1c5620);
    }
    if (this._shipExtraLayer) {
      this._shipExtraLayer.sprite.setVisible(_0x1c5620);
    }
  }
  ["syncSprites"](_0x30c325, _0x3f0607, _0x3afedf, _0xbf2e45) {
    if (this._endAnimating) {
      return;
    }
    const _0x7f0705 = undefined !== _0xbf2e45 ? _0xbf2e45 : h;
    const _0x1a433c = 0x1cc - this.p.y + _0x3f0607;
    const _0x2907d3 = this._rotation;
    this._lastCameraX = _0x30c325;
    this._lastCameraY = _0x3f0607;
    this._aboveContainer.x = -_0x30c325;
    this._aboveContainer.y = _0x3f0607;
    if (this.p.isFlying) {
      const _0x285611 = Math.cos(_0x2907d3);
      const _0x501bf9 = Math.sin(_0x2907d3);
      const _0x1b1d28 = -0xa * _0x501bf9;
      const _0x185f91 = 0xa * _0x285611;
      const _0x562424 = 0xa * _0x501bf9;
      const _0x3011c9 = -0xa * _0x285611;
      for (const _0x5dc75c of this._shipLayers) if (_0x5dc75c) {
        _0x5dc75c.sprite.x = _0x7f0705 + _0x1b1d28;
        _0x5dc75c.sprite.y = _0x1a433c + _0x185f91;
        _0x5dc75c.sprite.rotation = _0x2907d3;
      }
      for (const _0x536f40 of this._playerLayers) if (_0x536f40) {
        _0x536f40.sprite.x = _0x7f0705 + _0x562424;
        _0x536f40.sprite.y = _0x1a433c + _0x3011c9;
        _0x536f40.sprite.rotation = _0x2907d3;
        _0x536f40.sprite.setFlipY(false);
      }
    } else {
      for (const _0x2c61a1 of this._allLayers) if (_0x2c61a1) {
        _0x2c61a1.sprite.x = _0x7f0705;
        _0x2c61a1.sprite.y = _0x1a433c;
        _0x2c61a1.sprite.rotation = _0x2907d3;
      }
      for (const _0x4fdf2f of this._playerLayers) if (_0x4fdf2f) {
        _0x4fdf2f.sprite.setFlipY(this.p.gravityFlipped);
      }
    }
    this._updateParticles(_0x30c325, _0x3f0607, _0x3afedf);
  }
  ["enterShipMode"](_0xeb37c6 = null) {
    if (this.p.isFlying) {
      return;
    }
    this.p.isFlying = true;
    this._scene.toggleGlitter(true);
    this.p.yVelocity *= 0.5;
    this.p.onGround = false;
    this.p.canJump = false;
    this.p.isJumping = false;
    this.stopRotation();
    this._rotation = 0x0;
    this._particleEmitter.stop();
    this._flyParticle2Active = false;
    this._streak.reset();
    this._streak.start();
    this.setShipVisible(true);
    for (const _0xc1f7c3 of this._playerLayers) if (_0xc1f7c3) {
      _0xc1f7c3.sprite.setScale(0.55);
    }
    let _0x17d728 = this.p.y;
    if (_0xeb37c6) {
      _0x17d728 = undefined !== _0xeb37c6.portalY ? _0xeb37c6.portalY : _0xeb37c6.y;
    }
    this._gameLayer.setFlyMode(true, _0x17d728);
  }
  ['exitShipMode']() {
    if (this.p.isFlying) {
      this.p.isFlying = false;
      this._scene.toggleGlitter(false);
      this.p.yVelocity *= 0.5;
      this.p.onGround = false;
      this.p.canJump = false;
      this.p.isJumping = false;
      this.stopRotation();
      this._rotation = 0x0;
      this._flyParticleEmitter.stop();
      this._flyParticleActive = false;
      this._flyParticle2Emitter.stop();
      this._flyParticle2Active = false;
      this._shipDragEmitter.stop();
      this._shipDragActive = false;
      this._particleActive = false;
      this._streak.stop();
      this._streak.reset();
      this.setShipVisible(false);
      this.setCubeVisible(true);
      for (const _0xe1b715 of this._playerLayers) if (_0xe1b715) {
        _0xe1b715.sprite.setScale(0x1);
      }
      this._gameLayer.setFlyMode(false, 0x0);
    }
  }
  ["hitGround"]() {
    const _0x4a38a5 = !this.p.onGround;
    if (!this.p.isFlying) {
      this.p.lastGroundY = this.p.y;
    }
    this.p.yVelocity = 0x0;
    this.p.onGround = true;
    this.p.canJump = true;
    this.p.isJumping = false;
    this.stopRotation();
    if (_0x4a38a5 && !this.p.isFlying) {
      this._landIdx = !this._landIdx;
      const _0x31584b = this._landIdx ? this._landEmitter1 : this._landEmitter2;
      const _0x2248d5 = this._lastCameraX + h;
      const _0x17e0bb = 0x1cc - this.p.y + 0x1e;
      _0x31584b.explode(0xa, _0x2248d5, _0x17e0bb);
    }
  }
  ["killPlayer"]() {
    if (this.p.isDead) {
      return;
    }
    this.p.isDead = true;
    this._scene.toggleGlitter(false);
    this._particleEmitter.stop();
    this._particleActive = false;
    this._flyParticleEmitter.stop();
    this._flyParticleActive = false;
    this._flyParticle2Emitter.stop();
    this._flyParticle2Active = false;
    this._shipDragEmitter.stop();
    this._shipDragActive = false;
    this._streak.stop();
    this._streak.reset();
    const _0x3f4b84 = this._scene;
    const _0x3f0446 = _0x3f4b84._playerWorldX - _0x3f4b84._cameraX;
    const _0x53ac5b = 0x1cc - this.p.y + this._lastCameraY;
    _0x3f4b84.add.particles(_0x3f0446, _0x53ac5b, 'GJ_WebSheet', {
      frame: "square.png",
      speed: {
        min: 0xc8,
        max: 0x320
      },
      angle: {
        min: 0x0,
        max: 0x168
      },
      scale: {
        start: 0.5625,
        end: 0x0
      },
      alpha: {
        start: 0x1,
        end: 0x0
      },
      lifespan: {
        min: 0x32,
        max: 0x320
      },
      quantity: 0x64,
      stopAfter: 0x64,
      blendMode: S,
      tint: 0xff00,
      x: {
        min: -0x14,
        max: 0x14
      },
      y: {
        min: -0x14,
        max: 0x14
      }
    }).setScrollFactor(0x0).setDepth(0xf);
    const _0x438d80 = _0x3f4b84.add.graphics().setScrollFactor(0x0).setDepth(0xf).setBlendMode(S);
    const _0x4683eb = {
      t: 0x0
    };
    _0x3f4b84.tweens.add({
      targets: _0x4683eb,
      t: 0x1,
      duration: 0x1f4,
      ease: 'Quad.Out',
      onUpdate: () => {
        _0x438d80.clear();
        _0x438d80.fillStyle(0xff00, 1);
        _0x438d80.fillCircle(_0x3f0446, _0x53ac5b, 18);
      },
      onComplete: () => _0x438d80.destroy()
    });
    this._createExplosionPieces(_0x3f0446, _0x53ac5b, 0.9);
    this.setCubeVisible(false);
    this.setShipVisible(false);
  }
  ["_createExplosionPieces"](_0x49be85, _0x13b56e, _0x349a09) {
    const _0x44acaf = this._scene;
    const _0x4a9f23 = 0x28 * _0x349a09;
    const _0x24dcea = Math.round(0x2 * _0x4a9f23);
    const _0x26dcbd = _0x44acaf.make.renderTexture({
      x: 0x0,
      y: 0x0,
      width: _0x24dcea,
      height: _0x24dcea,
      add: false
    });
    const _0x5c571a = [this._playerGlowLayer, this._playerOverlayLayer, this._shipGlowLayer, this._shipOverlayLayer, this._playerSpriteLayer, this._playerExtraLayer, this._shipSpriteLayer, this._shipExtraLayer];
    for (const _0x1f09e3 of _0x5c571a) {
      if (!_0x1f09e3 || !_0x1f09e3.sprite.visible) {
        continue;
      }
      const _0x53102a = _0x1f09e3.sprite;
      _0x26dcbd.draw(_0x53102a, _0x24dcea / 0x2 + (_0x53102a.x - _0x49be85), _0x24dcea / 0x2 + (_0x53102a.y - _0x13b56e));
    }
    const _0xd0201e = "__deathRT_" + Date.now();
    _0x26dcbd.saveTexture(_0xd0201e);
    const _0x5a2621 = _0x44acaf.textures.get(_0xd0201e);
    let _0x28c600 = 0x2 + Math.round(0x2 * Math.random());
    let _0x247253 = 0x2 + Math.round(0x2 * Math.random());
    const _0x5b9267 = Math.random();
    if (_0x5b9267 > 0.95) {
      _0x28c600 = 0x1;
    } else if (_0x5b9267 > 0.9) {
      _0x247253 = 0x1;
    }
    const _0x5e8097 = _0x24dcea / _0x28c600;
    const _0x5af9d3 = _0x24dcea / _0x247253;
    const _0xe9c860 = [];
    const _0x3215fa = [];
    const _0x416e63 = [0x0];
    const _0x57d0dc = [0x0];
    let _0x44e1e1 = 0x0;
    let _0x38011e = 0x0;
    for (let _0x3f4d44 = 0x0; _0x3f4d44 < _0x28c600 - 0x1; _0x3f4d44++) {
      const _0x5b2c12 = Math.round(_0x5e8097 * (0.55 + Math.random() * 0.45 * 0x2));
      _0xe9c860.push(_0x5b2c12);
      _0x44e1e1 += _0x5b2c12;
      _0x416e63.push(_0x44e1e1);
    }
    _0xe9c860.push(_0x24dcea - _0x44e1e1);
    for (let _0x325ce1 = 0x0; _0x325ce1 < _0x247253 - 0x1; _0x325ce1++) {
      const _0x37f0ad = Math.round(_0x5af9d3 * (0.55 + Math.random() * 0.45 * 0x2));
      _0x3215fa.push(_0x37f0ad);
      _0x38011e += _0x37f0ad;
      _0x57d0dc.push(_0x38011e);
    }
    _0x3215fa.push(_0x24dcea - _0x38011e);
    this._explosionPieces = [];
    this._explosionContainer = _0x44acaf.add.container(_0x49be85, _0x13b56e).setDepth(0x10);
    let _0x156c8b = 0x0;
    for (let _0x4cd06e = 0x0; _0x4cd06e < _0x28c600; _0x4cd06e++) {
      const _0x5c6aa9 = _0xe9c860[_0x4cd06e];
      const _0x43a4e9 = _0x416e63[_0x4cd06e];
      for (let _0x5b14cf = 0x0; _0x5b14cf < _0x247253; _0x5b14cf++) {
        const _0x20847a = _0x3215fa[_0x5b14cf];
        const _0x20396e = _0x57d0dc[_0x5b14cf];
        if (_0x5c6aa9 <= 0x0 || _0x20847a <= 0x0) {
          continue;
        }
        _0x156c8b++;
        const _0x526d03 = 'piece_' + _0x4cd06e + '_' + _0x5b14cf;
        _0x5a2621.add(_0x526d03, 0x0, _0x43a4e9, _0x20396e, _0x5c6aa9, _0x20847a);
        const _0xba83f5 = _0x44acaf.add.image(0x0, 0x0, _0xd0201e, _0x526d03);
        _0xba83f5.x = _0x43a4e9 + _0x5c6aa9 / 0x2 - _0x24dcea / 0x2;
        _0xba83f5.y = -(_0x20396e + _0x20847a / 0x2 - _0x24dcea / 0x2);
        this._explosionContainer.add(_0xba83f5);
        let _0x298d34 = null;
        if (_0x156c8b % 0x2 == 0x0) {
          const _0x367bdb = 0xc8 + 0xc8 * Math.random();
          _0x298d34 = _0x44acaf.add.particles(0x0, 0x0, "GJ_WebSheet", {
            frame: 'square.png',
            speed: 0x0,
            scale: {
              start: 0.5,
              end: 0x0
            },
            alpha: {
              start: 0x1,
              end: 0x0
            },
            lifespan: _0x367bdb,
            frequency: 0x19,
            quantity: 0x1,
            emitting: true,
            blendMode: S,
            tint: 0xff00,
            emitCallback: _0x2f7fc7 => {
              _0x2f7fc7.x = _0xba83f5.x + 0x3 * (0x2 * Math.random() - 0x1) * 0x2;
              _0x2f7fc7.y = _0xba83f5.y + 0x3 * (0x2 * Math.random() - 0x1) * 0x2;
            }
          });
          this._explosionContainer.addAt(_0x298d34, 0x0);
        }
        const _0x159cfa = {
          spr: _0xba83f5,
          particle: _0x298d34,
          xVel: 3.7389612960000003 + (0x2 * Math.random() - 0x1) * 7.4779225920000005,
          yVel: -(0xc + 0x6 * (0x2 * Math.random() - 0x1)),
          timer: 1.4,
          fadeTime: 0.5,
          rotDelta: 0x168 * (0x2 * Math.random() - 0x1) / 0x3c,
          halfSize: Math.min(_0x5c6aa9, _0x20847a) / 0x2
        };
        this._explosionPieces.push(_0x159cfa);
      }
    }
    this._explosionGroundSY = 460 + this._lastCameraY;
    this._explosionRT = _0x26dcbd;
    this._explosionTexKey = _0xd0201e;
  }
  ["updateExplosionPieces"](_0x1c8c6d) {
    if (!this._explosionPieces || 0x0 === this._explosionPieces.length) {
      return;
    }
    const _0x1ed0a8 = _0x1c8c6d / 0x3e8;
    const _0x3e389c = Math.min(0x3c * _0x1ed0a8 * 0.9, 0x2);
    const _0x59eafe = 0.5 * _0x3e389c * 0x2;
    const _0x5a7549 = this._explosionGroundSY - this._explosionContainer.y;
    let _0x4284b0 = 0x0;
    for (; _0x4284b0 < this._explosionPieces.length;) {
      const _0x3fac01 = this._explosionPieces[_0x4284b0];
      _0x3fac01.timer -= _0x1ed0a8;
      if (_0x3fac01.timer > 0x0) {
        {
          _0x3fac01.yVel += _0x59eafe;
          _0x3fac01.xVel *= 0.98 + 0.02 * (0x1 - _0x3e389c);
          let _0x57034b = _0x3fac01.spr.x + _0x3fac01.xVel * _0x3e389c;
          let _0x4c0481 = _0x3fac01.spr.y + _0x3fac01.yVel * _0x3e389c;
          const _0x3f6377 = _0x5a7549 - _0x3fac01.halfSize;
          if (_0x4c0481 > _0x3f6377 && _0x3fac01.yVel > 0x0) {
            _0x4c0481 = _0x3f6377;
            _0x3fac01.yVel *= -0.8;
            if (Math.abs(_0x3fac01.yVel) < 0x3) {
              _0x3fac01.yVel = -0x3;
            }
          }
          _0x3fac01.spr.x = _0x57034b;
          _0x3fac01.spr.y = _0x4c0481;
          _0x3fac01.spr.angle += _0x3fac01.rotDelta * _0x3e389c;
          if (_0x3fac01.timer < _0x3fac01.fadeTime) {
            const _0x2d8b5f = _0x3fac01.timer / _0x3fac01.fadeTime;
            _0x3fac01.spr.setAlpha(_0x2d8b5f);
            if (_0x3fac01.particle) {
              _0x3fac01.particle.setAlpha(_0x2d8b5f);
            }
          }
        }
        _0x4284b0++;
      } else {
        if (_0x3fac01.particle) {
          _0x3fac01.particle.stop();
          _0x3fac01.particle.destroy();
        }
        _0x3fac01.spr.destroy();
        this._explosionPieces.splice(_0x4284b0, 0x1);
      }
    }
    if (0x0 === this._explosionPieces.length) {
      this._cleanupExplosion();
    }
  }
  ["_cleanupExplosion"]() {
    if (this._explosionPieces) {
      for (const _0x59172d of this._explosionPieces) {
        if (_0x59172d.particle) {
          _0x59172d.particle.stop();
          _0x59172d.particle.destroy();
        }
        if (_0x59172d.spr) {
          _0x59172d.spr.destroy();
        }
      }
    }
    if (this._explosionContainer) {
      this._explosionContainer.destroy();
      this._explosionContainer = null;
    }
    if (this._explosionTexKey) {
      this._scene.textures.remove(this._explosionTexKey);
      this._explosionTexKey = null;
    }
    if (this._explosionRT) {
      this._explosionRT.destroy();
      this._explosionRT = null;
    }
    this._explosionPieces = null;
  }
  ["_playPortalShine"](_0x49e81f) {
    const _0x4ed8ff = this._scene;
    const _0xf31b0d = _0x49e81f.x;
    const _0x3824c0 = 0x1cc - _0x49e81f.portalY;
    const _0x19c6b0 = ["portalshine_02_front_001.png", "portalshine_02_back_001.png"];
    const _0x5d636a = [this._gameLayer.topContainer, this._gameLayer.container];
    for (let _0x34fd8c = 0x0; _0x34fd8c < 0x2; _0x34fd8c++) {
      const _0x4bfe30 = R(_0x4ed8ff, _0x19c6b0[_0x34fd8c]);
      if (!_0x4bfe30) {
        continue;
      }
      const _0x34645e = _0x4ed8ff.add.image(_0xf31b0d, _0x3824c0, _0x4bfe30.atlas, _0x4bfe30.frame);
      _0x34645e.setBlendMode(S);
      _0x34645e.setAlpha(0x0);
      _0x5d636a[_0x34fd8c].add(_0x34645e);
      _0x4ed8ff.tweens.add({
        targets: _0x34645e,
        alpha: {
          from: 0x0,
          to: 0x1
        },
        duration: 0x32,
        onComplete: () => {
          _0x4ed8ff.tweens.add({
            targets: _0x34645e,
            alpha: 0x0,
            duration: 0x190,
            onComplete: () => _0x34645e.destroy()
          });
        }
      });
    }
  }
  ["_getPadBoost"](_0x4a2eb0, _0x1453f2) {
    if (Number.isFinite(_0x1453f2)) {
      return _0x1453f2;
    }
    if (0x43 === _0x4a2eb0) {
      return 28;
    }
    if (0x8c === _0x4a2eb0) {
      return 42;
    }
    return 34;
  }
  ["_getRingBoost"](_0x2ea630, _0x46f586) {
    if (Number.isFinite(_0x46f586)) {
      return _0x46f586;
    }
    if (0x54 === _0x2ea630) {
      return 17.5;
    }
    if (0x8d === _0x2ea630) {
      return 27;
    }
    return 22;
  }
  ["_applyVerticalBoost"](_0x59cc11) {
    this.p.yVelocity = _0x59cc11 * this.flipMod();
    this.p.onGround = false;
    this.p.canJump = false;
    this.p.isJumping = true;
    this.runRotateAction();
  }
  ["_applyGravityPortal"](_0x53ab9f) {
    if (this.p.gravityFlipped === _0x53ab9f) {
      return;
    }
    this.p.gravityFlipped = _0x53ab9f;
    const _0x4144f4 = -this.p.yVelocity;
    const _0x157248 = 8 * this.flipMod();
    this.p.yVelocity = Math.abs(_0x4144f4) > Math.abs(_0x157248) ? _0x4144f4 : _0x157248;
    this.p.onGround = false;
    this.p.onCeiling = false;
    this.p.canJump = false;
    this.p.isJumping = false;
    this.runRotateAction();
  }
  ["_applySpeedPortal"](_0x4c6ec0) {
    this._scene.setSpeedMode(_0x4c6ec0 || "normal");
  }
  ['_checkSnapJump'](_0x1f801b) {
    const _0x483058 = [{
      dx: 0xf0,
      dy: 0x3c
    }, {
      dx: 0x12c,
      dy: -0x3c
    }, {
      dx: 0xb4,
      dy: 0x78
    }];
    const _0x2b806a = this._lastLandObject;
    if (_0x2b806a && _0x2b806a !== _0x1f801b && _0x2b806a.type === y) {
      const _0x34ef27 = _0x2b806a.x;
      const _0x4652bb = _0x2b806a.y;
      const _0x5de781 = _0x1f801b.x;
      const _0x21ad88 = _0x1f801b.y;
      const _0x1b1831 = this.p.gravityFlipped ? -0x1 : 0x1;
      let _0x372d4e = false;
      for (const _0x31d5e4 of _0x483058) if (Math.abs(_0x5de781 - (_0x34ef27 + _0x31d5e4.dx)) <= 0x2 && Math.abs(_0x21ad88 - (_0x4652bb + _0x31d5e4.dy * _0x1b1831)) <= 0x2) {
        _0x372d4e = true;
        break;
      }
      if (_0x372d4e) {
        const _0x4ca454 = _0x1f801b.x + this._lastXOffset;
        const _0x48aba3 = this._scene._playerWorldX;
        let _0x5f2847;
        _0x5f2847 = Math.abs(_0x4ca454 - _0x48aba3) <= 0x2 ? _0x4ca454 : _0x4ca454 > _0x48aba3 ? _0x48aba3 + 0x2 : _0x48aba3 - 0x2;
        this._scene._playerWorldX = _0x5f2847;
      }
    }
    this._lastLandObject = _0x1f801b;
    this._lastXOffset = this._scene._playerWorldX - _0x1f801b.x;
  }
  ["_isFallingPastThreshold"]() {
    return this.p.gravityFlipped ? this.p.yVelocity > 0.25 : this.p.yVelocity < -0.25;
  }
  ["flipMod"]() {
    return this.p.gravityFlipped ? -0x1 : 0x1;
  }
  ["runRotateAction"]() {
    this.rotateActionActive = true;
    this.rotateActionTime = 0x0;
    this.rotateActionDuration = 0.43333333333333335;
    this.rotateActionStart = this._rotation;
    this.rotateActionTotal = Math.PI * this.flipMod();
  }
  ["stopRotation"]() {
    this.rotateActionActive = false;
  }
  ['updateRotateAction'](_0x98044d) {
    if (!this.rotateActionActive) {
      return;
    }
    this.rotateActionTime += _0x98044d;
    if (this.rotateActionTime >= this.rotateActionDuration) {
      this.rotateActionActive = false;
    }
    let _0xb1cb91 = Math.min(this.rotateActionTime / this.rotateActionDuration, 0x1);
    this._rotation = this.rotateActionStart + this.rotateActionTotal * _0xb1cb91;
  }
  ["convertToClosestRotation"]() {
    let _0x5f531c = Math.PI / 0x2;
    return Math.round(this._rotation / _0x5f531c) * _0x5f531c;
  }
  ["slerp2D"](_0x11f190, _0xf2c7b9, _0x8b3942) {
    let _0x4ee783 = _0xf2c7b9 - _0x11f190;
    for (; _0x4ee783 > Math.PI;) {
      _0x4ee783 -= 0x2 * Math.PI;
    }
    for (; _0x4ee783 < -Math.PI;) {
      _0x4ee783 += 0x2 * Math.PI;
    }
    return _0x11f190 + _0x4ee783 * _0x8b3942;
  }
  ["updateGroundRotation"](_0x5c24f7) {
    let _0x183c2a = this.convertToClosestRotation();
    let _0x17a9a6 = Math.min(0x1 * _0x5c24f7, 0.47250000000000003 * _0x5c24f7);
    this._rotation = this.slerp2D(this._rotation, _0x183c2a, _0x17a9a6);
  }
  ["updateShipRotation"](_0x217ad3) {
    let _0x48f422 = -(this.p.y - this.p.lastY);
    let _0x58cb3a = 10.3860036 * _0x217ad3;
    if (_0x58cb3a * _0x58cb3a + _0x48f422 * _0x48f422 >= 0.6 * _0x217ad3) {
      let _0x5e6a2b = Math.atan2(_0x48f422, _0x58cb3a);
      let _0x1857d4 = Math.min(0x1 * _0x217ad3, 0.15 * _0x217ad3);
      this._rotation = this.slerp2D(this._rotation, _0x5e6a2b, _0x1857d4);
    }
  }
  ["playerIsFalling"]() {
    return this.p.gravityFlipped ? this.p.yVelocity > 3.832796 : this.p.yVelocity < 3.832796;
  }
  ['updateJump'](_0x3d1c6f) {
    if (this.p.isFlying) {
      this._updateFlyJump(_0x3d1c6f);
    } else {
      if (this.p.upKeyDown && this.p.canJump) {
        this.p.isJumping = true;
        this.p.onGround = false;
        this.p.canJump = false;
        this.p.upKeyPressed = false;
        this.p.yVelocity = 22.360064 * this.flipMod();
        this.runRotateAction();
      } else {
        if (this.p.isJumping) {
          this.p.yVelocity -= 1.916398 * _0x3d1c6f * this.flipMod();
          if (this.playerIsFalling()) {
            this.p.isJumping = false;
            this.p.onGround = false;
          }
        } else {
          if (this.playerIsFalling()) {
            this.p.canJump = false;
          }
          this.p.yVelocity -= 1.916398 * _0x3d1c6f * this.flipMod();
          if (this.p.gravityFlipped) {
            this.p.yVelocity = Math.min(this.p.yVelocity, 0x1e);
          } else {
            this.p.yVelocity = Math.max(this.p.yVelocity, -0x1e);
          }
          if (this._isFallingPastThreshold() && !this.rotateActionActive) {
            this.runRotateAction();
          }
          if (this.playerIsFalling()) {
            let _0x47ed2a;
            _0x47ed2a = this.p.gravityFlipped ? this.p.yVelocity > 0x4 : this.p.yVelocity < -0x4;
            if (_0x47ed2a) {
              this.p.onGround = false;
            }
          }
        }
      }
    }
  }
  ['_updateFlyJump'](_0x130c46) {
    let _0x203040 = 0.8;
    if (this.p.upKeyDown && !this.p.wasBoosted) {
      _0x203040 = -0x1;
    }
    if (!(this.p.upKeyDown || this.playerIsFalling())) {
      _0x203040 = 1.2;
    }
    let _0x2d237f = 0.4;
    if (this.p.upKeyDown && this.playerIsFalling()) {
      _0x2d237f = 0.5;
    }
    this.p.yVelocity -= 1.916398 * _0x130c46 * this.flipMod() * _0x203040 * _0x2d237f;
    if (this.p.upKeyDown) {
      this.p.onGround = false;
    }
    if (!this.p.wasBoosted) {
      if (this.p.gravityFlipped) {
        this.p.yVelocity = Math.max(this.p.yVelocity, -0x10);
        this.p.yVelocity = Math.min(this.p.yVelocity, 12.8);
      } else {
        this.p.yVelocity = Math.max(this.p.yVelocity, -12.8);
        this.p.yVelocity = Math.min(this.p.yVelocity, 0x10);
      }
    }
  }
  ['checkCollisions'](_0x2f5078) {
    const _0x3c691e = _0x2f5078 + h;
    const _0x8e0d28 = this.p.y;
    const _0x37040a = this.p.lastY;
    const _0x11ee2f = this.p.isFlying ? 0xc : 0x14;
    this.p.collideTop = 0x0;
    this.p.collideBottom = 0x0;
    this.p.onCeiling = false;
    let _0x30410f = false;
    const _0x198534 = this._gameLayer.getNearbySectionObjects(_0x3c691e);
    for (let _0x1b13b8 of _0x198534) {
      let _0xf3791a = _0x1b13b8.x - _0x1b13b8.w / 0x2;
      let _0x17dbc8 = _0x1b13b8.x + _0x1b13b8.w / 0x2;
      let _0x2d2fa7 = _0x1b13b8.y - _0x1b13b8.h / 0x2;
      let _0x8a8d9a = _0x1b13b8.y + _0x1b13b8.h / 0x2;
      if (!(_0x3c691e + 0x1e <= _0xf3791a || _0x3c691e - 0x1e >= _0x17dbc8 || _0x8e0d28 + 0x1e <= _0x2d2fa7 || _0x8e0d28 - 0x1e >= _0x8a8d9a)) {
        if (_0x1b13b8.type === Bn && !_0x1b13b8.activated) {
          _0x1b13b8.activated = true;
          this._playPortalShine(_0x1b13b8);
          this._applyGravityPortal(true);
          continue;
        }
        if (_0x1b13b8.type === kn && !_0x1b13b8.activated) {
          _0x1b13b8.activated = true;
          this._playPortalShine(_0x1b13b8);
          this._applyGravityPortal(false);
          continue;
        }
        if (_0x1b13b8.type === Tn && !_0x1b13b8.activated) {
          _0x1b13b8.activated = true;
          this._playPortalShine(_0x1b13b8);
          this._applySpeedPortal(_0x1b13b8.speedSub);
          continue;
        }
        if (_0x1b13b8.type !== _) {
          if (_0x1b13b8.type !== w) {
            if (_0x1b13b8.type === x) {
              return void this.killPlayer();
            }
            if (_0x1b13b8.type === OBJ_PAD && !_0x1b13b8.activated && !this.p.isFlying) {
              _0x1b13b8.activated = true;
              if (_0x1b13b8.flipGravity) {
                this._applyGravityPortal(!this.p.gravityFlipped);
              }
              this._applyVerticalBoost(this._getPadBoost(_0x1b13b8.id, _0x1b13b8.boost));
              return;
            }
            if (_0x1b13b8.type === OBJ_RING && !_0x1b13b8.activated && !this.p.isFlying && this.p.upKeyPressed) {
              _0x1b13b8.activated = true;
              this.p.upKeyPressed = false;
              if (_0x1b13b8.flipGravity) {
                this._applyGravityPortal(!this.p.gravityFlipped);
              }
              this._applyVerticalBoost(this._getRingBoost(_0x1b13b8.id, _0x1b13b8.boost));
              return;
            }
            if (_0x1b13b8.type === y) {
              let _0x146a97 = _0x8e0d28 - 0x1e + _0x11ee2f;
              let _0x869e42 = _0x37040a - 0x1e + _0x11ee2f;
              let _0x3e7199 = _0x8e0d28 + 0x1e - _0x11ee2f;
              let _0x135a9d = _0x37040a + 0x1e - _0x11ee2f;
              const _0x3c1654 = _0x3c691e + 0x9 > _0xf3791a && _0x3c691e - 0x9 < _0x17dbc8 && _0x8e0d28 + 0x9 > _0x2d2fa7 && _0x8e0d28 - 0x9 < _0x8a8d9a;
              const _0x4cf6c2 = (this.p.yVelocity <= 0x0 || this.p.onGround) && (_0x146a97 >= _0x8a8d9a || _0x869e42 >= _0x8a8d9a);
              const _0x53244b = (this.p.yVelocity >= 0x0 || this.p.onGround) && (_0x3e7199 <= _0x2d2fa7 || _0x135a9d <= _0x2d2fa7);
              const _0x2841ea = this.p.gravityFlipped ? _0x53244b : _0x4cf6c2;
              if (_0x3c1654 && !_0x2841ea) {
                return void this.killPlayer();
              }
              if (_0x3c691e + 0x1e - 0x5 > _0xf3791a && _0x3c691e - 0x1e + 0x5 < _0x17dbc8) {
                if (!this.p.gravityFlipped && _0x4cf6c2) {
                  this.p.y = _0x8a8d9a + 0x1e;
                  this.hitGround();
                  _0x30410f = true;
                  this.p.collideBottom = _0x8a8d9a;
                  if (!this.p.isFlying) {
                    this._checkSnapJump(_0x1b13b8);
                  }
                  continue;
                }
                if (this.p.gravityFlipped && _0x53244b) {
                  this.p.y = _0x2d2fa7 - 0x1e;
                  this.hitGround();
                  this.p.onCeiling = true;
                  this.p.collideTop = _0x2d2fa7;
                  continue;
                }
                if ((_0x3e7199 <= _0x2d2fa7 || _0x135a9d <= _0x2d2fa7) && (this.p.yVelocity >= 0x0 || this.p.onGround) && this.p.isFlying) {
                  this.p.y = _0x2d2fa7 - 0x1e;
                  this.hitGround();
                  this.p.onCeiling = true;
                  this.p.collideTop = _0x2d2fa7;
                  continue;
                }
              }
            }
          } else if (!_0x1b13b8.activated) {
            _0x1b13b8.activated = true;
            this._playPortalShine(_0x1b13b8);
            this.exitShipMode();
          }
        } else if (!_0x1b13b8.activated) {
          _0x1b13b8.activated = true;
          this._playPortalShine(_0x1b13b8);
          this.enterShipMode(_0x1b13b8);
        }
      }
    }
    if (0x0 !== this.p.collideTop && 0x0 !== this.p.collideBottom) {
      if (Math.abs(this.p.collideTop - this.p.collideBottom) < 0x30) {
        return void this.killPlayer();
      }
    }
    let _0x3020c8 = this._gameLayer.getFloorY();
    if (!_0x30410f) {
      if (!this.p.gravityFlipped && this.p.y <= _0x3020c8 + 0x1e) {
        this.p.y = _0x3020c8 + 0x1e;
        this.hitGround();
      }
    }
    let _0x496456 = this._gameLayer.getCeilingY();
    if ((!this.p.gravityFlipped || this.p.isFlying) && null !== _0x496456 && this.p.y >= _0x496456 - 0x1e) {
      this.p.y = _0x496456 - 0x1e;
      this.hitGround();
      this.p.onCeiling = true;
    } else if (this.p.gravityFlipped && null !== _0x496456 && this.p.y >= _0x496456 - 0x1e) {
      this.p.y = _0x496456 - 0x1e;
      this.hitGround();
      this.p.onCeiling = true;
    }
    if (this.p.isFlying) {
      const _0x354b7c = this.p.y <= _0x3020c8 + 0x1e;
      const _0xdc296 = null !== _0x496456 && this.p.y >= _0x496456 - 0x1e;
      if (!(_0x30410f || _0x354b7c || 0x0 !== this.p.collideTop || _0xdc296)) {
        this.p.onGround = false;
      }
    }
  }
  ["drawHitboxes"](_0x691b2a, _0x52bd8a, _0x5aece4) {
    _0x691b2a.clear();
    if (!this._showHitboxes) {
      return;
    }
    const _0x2cf1c7 = _0x52bd8a + h;
    const _0x5e3ebe = this.p.y;
    const _0x51832d = this.p.isFlying ? 0xc : 0x14;
    const _0x286071 = this._gameLayer.getNearbySectionObjects(_0x2cf1c7);
    for (let _0x42ccb8 of _0x286071) {
      let _0x52deab = _0x42ccb8.x - _0x52bd8a;
      let _0x3e179d = 0x1cc - _0x42ccb8.y + _0x5aece4;
      let _0x17cd1a = 0xff00;
      if (_0x42ccb8.type === x) {
        _0x17cd1a = 0xff4444;
      } else if (!(_0x42ccb8.type !== _ && _0x42ccb8.type !== w)) {
        _0x17cd1a = 0x4488ff;
      }
      _0x691b2a.lineStyle(0x2, _0x17cd1a, 0.7);
      _0x691b2a.strokeRect(_0x52deab - _0x42ccb8.w / 0x2, _0x3e179d - _0x42ccb8.h / 0x2, _0x42ccb8.w, _0x42ccb8.h);
    }
    const _0x7a132d = h;
    const _0x1e788a = 0x1cc - _0x5e3ebe + _0x5aece4;
    _0x691b2a.lineStyle(0x2, 0xffff, 0.8);
    _0x691b2a.strokeRect(_0x7a132d - 0x1e, _0x1e788a - 0x1e, 0x3c, 0x3c);
    _0x691b2a.lineStyle(0x2, 0xffff00, 0.8);
    _0x691b2a.strokeRect(_0x7a132d - 0x1e + 0x5, _0x1e788a - 0x1e, 0x32, 0x3c);
    _0x691b2a.lineStyle(0x2, 0xff0000, 0.8);
    _0x691b2a.strokeRect(_0x7a132d - 0x1e, _0x1e788a - 0x1e + 0x5, 0x3c, 0x32);
    let _0x1eec42 = 0x1cc - (_0x5e3ebe - 0x1e + _0x51832d) + _0x5aece4;
    let _0xf6f69b = 0x1cc - (_0x5e3ebe + 0x1e - _0x51832d) + _0x5aece4;
    _0x691b2a.lineStyle(0x2, 0xff8800, 0.9);
    _0x691b2a.lineBetween(_0x7a132d - 0x1e - 0x8, _0x1eec42, _0x7a132d + 0x1e + 0x8, _0x1eec42);
    _0x691b2a.lineBetween(_0x7a132d - 0x1e - 0x8, _0xf6f69b, _0x7a132d + 0x1e + 0x8, _0xf6f69b);
    _0x691b2a.lineStyle(0x2, 0xffffff, 0x1);
    _0x691b2a.strokeRect(_0x7a132d - 0x9, _0x1e788a - 0x9, 0x24, 0x12);
  }
  ['setShowHitboxes'](_0x2133d2) {
    this._showHitboxes = _0x2133d2;
  }
  ['playEndAnimation'](_0x24408e, _0x281588, _0x54bbf4) {
    this._endAnimating = true;
    const _0x3729ef = this._scene;
    const _0x568b25 = _0x54bbf4 || 0xf0;
    const _0x4a45d7 = _0x3729ef._playerWorldX;
    const _0x501b73 = this.p.y;
    const _0x457676 = _0x24408e + 0x64;
    const _0x3ade39 = _0x568b25 - 0x28;
    const _0x1f2e19 = _0x4a45d7 + 0x50;
    const _0x8bc9f4 = _0x568b25 + 0x12c;
    const _0x11b580 = [this._playerSpriteLayer, this._playerGlowLayer, this._playerOverlayLayer, this._playerExtraLayer, this._shipSpriteLayer, this._shipGlowLayer, this._shipOverlayLayer, this._shipExtraLayer].filter(_0x3e9c62 => _0x3e9c62 && _0x3e9c62.sprite.visible).map(_0x5cedeb => _0x5cedeb.sprite);
    this._particleEmitter.stop();
    this._flyParticleEmitter.stop();
    this._flyParticle2Emitter.stop();
    this._shipDragEmitter.stop();
    const _0x154798 = this.p.isFlying;
    const _0x3793a4 = [this._shipSpriteLayer, this._shipGlowLayer, this._shipOverlayLayer, this._shipExtraLayer];
    const _0xbd676f = [this._playerSpriteLayer, this._playerGlowLayer, this._playerOverlayLayer, this._playerExtraLayer];
    const _0x3fc5a5 = _0x11b580.map(_0x5c0e81 => {
      let _0x5cbb0a = 0x0;
      if (_0x154798) {
        const _0xff16eb = _0x3793a4.some(_0x40ef1e => _0x40ef1e && _0x40ef1e.sprite === _0x5c0e81);
        const _0x4fdb53 = _0xbd676f.some(_0x4ef5b5 => _0x4ef5b5 && _0x4ef5b5.sprite === _0x5c0e81);
        if (_0xff16eb) {
          _0x5cbb0a = 0xa;
        } else if (_0x4fdb53) {
          _0x5cbb0a = -0xa;
        }
      }
      return {
        spr: _0x5c0e81,
        localY: _0x5cbb0a
      };
    });
    const _0x3e35e7 = this._streak;
    const _0x51c4a8 = {
      val: 0x0
    };
    _0x3729ef.tweens.add({
      targets: _0x51c4a8,
      val: 0x1,
      duration: 0x3e8,
      ease: _0x23df59 => Math.pow(_0x23df59, 1.2),
      onUpdate: () => {
        const _0x3eda1c = _0x51c4a8.val;
        const _0x2478d6 = (0x1 - _0x3eda1c) ** 0x3 * _0x4a45d7 + 0x3 * (0x1 - _0x3eda1c) ** 0x2 * _0x3eda1c * _0x4a45d7 + 0x3 * (0x1 - _0x3eda1c) * _0x3eda1c ** 0x2 * _0x1f2e19 + _0x3eda1c ** 0x3 * _0x457676;
        const _0x148e69 = (0x1 - _0x3eda1c) ** 0x3 * _0x501b73 + 0x3 * (0x1 - _0x3eda1c) ** 0x2 * _0x3eda1c * _0x501b73 + 0x3 * (0x1 - _0x3eda1c) * _0x3eda1c ** 0x2 * _0x8bc9f4 + _0x3eda1c ** 0x3 * _0x3ade39;
        const _0x3d0365 = _0x2478d6 - _0x3729ef._cameraX;
        const _0x3790a9 = 0x1cc - _0x148e69 + _0x3729ef._cameraY;
        const _0x1cb4d3 = 0x1 - _0x3eda1c * _0x3eda1c;
        const _0x1d2e2f = _0x3fc5a5[0x0].spr.rotation;
        const _0xd3cb2a = Math.cos(_0x1d2e2f);
        const _0x2f86c2 = Math.sin(_0x1d2e2f);
        for (const _0x2b394a of _0x3fc5a5) {
          const _0xbd4f26 = -_0x2b394a.localY * _0x2f86c2;
          const _0x5b67fe = _0x2b394a.localY * _0xd3cb2a;
          _0x2b394a.spr.setPosition(_0x3d0365 + _0xbd4f26, _0x3790a9 + _0x5b67fe);
          _0x2b394a.spr.setAlpha(_0x1cb4d3);
        }
        _0x3e35e7.setPosition(_0x2478d6, 0x1cc - _0x148e69);
        _0x3e35e7.update(_0x3729ef.game.loop.delta / 0x3e8);
      },
      onComplete: () => {
        for (const _0x4fce42 of _0x3fc5a5) _0x4fce42.spr.setVisible(false);
        _0x3e35e7.stop();
        _0x3e35e7.reset();
        _0x281588();
      }
    });
    for (const _0x25f8c5 of _0x11b580) _0x3729ef.tweens.add({
      targets: _0x25f8c5,
      angle: _0x25f8c5.angle + 0x168,
      duration: 0x3e8,
      ease: _0x228c03 => Math.pow(_0x228c03, 1.5)
    });
  }
  ["reset"]() {
    this._cleanupExplosion();
    this._endAnimating = false;
    this._lastLandObject = null;
    this._lastXOffset = 0x0;
    this.stopRotation();
    this.rotateActionTime = 0x0;
    this._rotation = 0x0;
    this._lastCameraX = 0x0;
    this._lastCameraY = 0x0;
    this.setCubeVisible(true);
    this.setShipVisible(false);
    for (const _0x5a0fa9 of this._allLayers) if (_0x5a0fa9) {
      _0x5a0fa9.sprite.setAlpha(0x1);
    }
    for (const _0x1e656c of this._playerLayers) if (_0x1e656c) {
      _0x1e656c.sprite.setScale(0x1);
    }
    this._particleEmitter.stop();
    this._particleActive = false;
    this._flyParticleEmitter.stop();
    this._flyParticleActive = false;
    this._flyParticle2Emitter.stop();
    this._flyParticle2Active = false;
    this._shipDragEmitter.stop();
    this._shipDragActive = false;
    this._streak.stop();
    this._streak.reset();
  }
}
class vs {
  constructor(_0x268d66, _0x3664f8, _0x4b756c) {
    this.from = {
      ..._0x268d66
    };
    this.to = {
      ..._0x3664f8
    };
    this.duration = _0x4b756c;
    this.elapsed = 0x0;
    this.done = _0x4b756c <= 0x0;
    this.current = _0x4b756c <= 0x0 ? {
      ..._0x3664f8
    } : {
      ..._0x268d66
    };
  }
  ['step'](_0x4559d6) {
    if (this.done) {
      return;
    }
    this.elapsed += _0x4559d6;
    let _0xe145bf = this.duration > 0x0 ? Math.min(this.elapsed / this.duration, 0x1) : 0x1;
    if (_0xe145bf >= 0x1) {
      this.current = {
        ...this.to
      };
      this.done = true;
    } else {
      this.current = {
        r: Math.round(this.from.r + (this.to.r - this.from.r) * _0xe145bf),
        g: Math.round(this.from.g + (this.to.g - this.from.g) * _0xe145bf),
        b: Math.round(this.from.b + (this.to.b - this.from.b) * _0xe145bf)
      };
    }
  }
}
class ms {
  constructor() {
    this.reset();
  }
  ["reset"]() {
    this._colors = {
      0x3e8: {
        r: 0x0,
        g: 0x66,
        b: 0xff
      },
      0x3e9: {
        r: 0x0,
        g: 0x44,
        b: 0xaa
      }
    };
    this._actions = {};
  }
  ['triggerColor'](_0x917b29, _0x2cdda0, _0x10a755) {
    let _0x16f9f0 = {
      ...this.getColor(_0x917b29)
    };
    this._actions[_0x917b29] = new vs(_0x16f9f0, _0x2cdda0, _0x10a755);
    if (_0x10a755 <= 0x0) {
      this._colors[_0x917b29] = {
        ..._0x2cdda0
      };
    }
  }
  ["step"](_0x15fa55) {
    for (let _0x2d0367 in this._actions) {
      let _0x26a8a0 = this._actions[_0x2d0367];
      _0x26a8a0.step(_0x15fa55);
      this._colors[_0x2d0367] = {
        ..._0x26a8a0.current
      };
      if (_0x26a8a0.done) {
        delete this._actions[_0x2d0367];
      }
    }
  }
  ["getColor"](_0xb3f1d9) {
    return this._colors[_0xb3f1d9] || {
      r: 0xff,
      g: 0xff,
      b: 0xff
    };
  }
  ["getHex"](_0x32378c) {
    let _0x25f448 = this.getColor(_0x32378c);
    return _0x25f448.r << 0x10 | _0x25f448.g << 0x8 | _0x25f448.b;
  }
}
class ys {
  constructor(_0x3627e5) {
    this._scene = _0x3627e5;
    this._music = null;
    this._userMusicVol = _0x3627e5.game.registry.get("userMusicVol") ?? 0x1;
    this._meteringEnabled = false;
    this._analyser = null;
    this._meterBuffer = null;
    this._meterValue = 0.1;
    this._lastAudio = 0.1;
    this._lastPeak = 0x0;
    this._silenceCounter = 0x0;
  }
  ['_effectiveVolume']() {
    return 0.8 * this._userMusicVol;
  }
  ["_resolveSongKey"]() {
    const _0x4b0c12 = this._scene.game.registry.get("selectedSongKey") || "stereo_madness";
    if (this._scene.cache.audio.exists(_0x4b0c12)) {
      return _0x4b0c12;
    }
    return "stereo_madness";
  }
  ["startMusic"]() {
    if (this._music) {
      this._music.stop();
      this._music.destroy();
    }
    this._music = this._scene.sound.add(this._resolveSongKey(), {
      loop: true,
      volume: this._effectiveVolume()
    });
    this._music.play();
    this._setupAnalyser();
  }
  ["stopMusic"]() {
    if (this._music) {
      this._music.stop();
    }
  }
  ["pauseMusic"]() {
    if (this._music && this._music.isPlaying) {
      this._music.pause();
    }
  }
  ["resumeMusic"]() {
    if (this._music && this._music.isPaused) {
      this._music.resume();
    }
  }
  ["getUserMusicVolume"]() {
    return this._userMusicVol;
  }
  ["setUserMusicVolume"](_0x1fad3d) {
    this._userMusicVol = _0x1fad3d;
    this._scene.game.registry.set("userMusicVol", _0x1fad3d);
    if (this._music) {
      this._music.volume = this._effectiveVolume();
    }
  }
  ['getMusicVolume']() {
    return this._effectiveVolume();
  }
  ["setMusicVolume"](_0x2ddbf6) {
    this.setUserMusicVolume(_0x2ddbf6 / 0.8);
  }
  ["fadeInMusic"](_0x3eff28 = 0x3e8) {
    if (this._music) {
      this._music.stop();
      this._music.destroy();
    }
    this._music = this._scene.sound.add(this._resolveSongKey(), {
      loop: true,
      volume: 0x0
    });
    this._music.play();
    this._setupAnalyser();
    this._scene.tweens.add({
      targets: this._music,
      volume: this._effectiveVolume(),
      duration: _0x3eff28
    });
  }
  ['fadeOutMusic'](_0x43835d = 0x5dc) {
    if (this._music && this._music.isPlaying) {
      this._music.setLoop(false);
      this._scene.tweens.add({
        targets: this._music,
        volume: 0x0,
        duration: _0x43835d,
        onComplete: () => {
          if (this._music) {
            this._music.stop();
          }
        }
      });
    }
  }
  ["playEffect"](_0x344122, _0x20f8e7 = {}) {
    const _0x3b9c6b = undefined !== this._scene._sfxVolume ? this._scene._sfxVolume : 0x1;
    _0x20f8e7.volume = (_0x20f8e7.volume || 0x1) * _0x3b9c6b;
    this._scene.sound.play(_0x344122, _0x20f8e7);
  }
  ["_setupAnalyser"]() {
    const _0xc0d316 = this._scene.sound.context;
    if (_0xc0d316) {
      this._analyser = _0xc0d316.createAnalyser();
      this._analyser.fftSize = 0x800;
      this._meterBuffer = new Float32Array(this._analyser.fftSize);
      this._scene.sound.masterVolumeNode.connect(this._analyser);
      this._meteringEnabled = true;
    }
  }
  ["update"](_0x34aeef) {
    if (!this._meteringEnabled || !this._analyser) {
      return;
    }
    this._analyser.getFloatTimeDomainData(this._meterBuffer);
    let _0x3059f5 = 0x0;
    for (let _0x462ecd = 0x0; _0x462ecd < this._meterBuffer.length; _0x462ecd++) {
      let _0x129c51 = Math.abs(this._meterBuffer[_0x462ecd]);
      if (_0x129c51 > _0x3059f5) {
        _0x3059f5 = _0x129c51;
      }
    }
    const _0x35ec51 = this._effectiveVolume();
    if (_0x35ec51 > 0x0) {
      _0x3059f5 /= _0x35ec51;
    }
    this._meterValue = 0.1 + _0x3059f5;
    const _0x1fbcd4 = 0x3c * _0x34aeef;
    if (this._silenceCounter < 0x3 || this._meterValue < 1.1 * this._lastAudio || this._meterValue < 0.95 * this._lastPeak && this._lastAudio > 0.2 * this._lastPeak) {
      this._meterValue = this._lastAudio * Math.pow(0.92, _0x1fbcd4);
    } else {
      this._silenceCounter = 0x0;
      this._lastPeak = this._meterValue;
      this._meterValue *= Math.pow(1.46, _0x1fbcd4);
    }
    if (this._meterValue <= 0.1) {
      this._lastPeak = 0x0;
    }
    this._lastAudio = this._meterValue;
    this._silenceCounter++;
  }
  ['getMeteringValue']() {
    return this._meterValue;
  }
  ["reset"]() {
    this._meterValue = 0.1;
    this._lastAudio = 0.1;
    this._lastPeak = 0x0;
    this._silenceCounter = 0x0;
    this.stopMusic();
  }
}
class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: "GameScene"
    });
  }
  ["create"]() {
    this._bgSpeedX = 0.1;
    this._bgSpeedY = 0.1;
    this._menuCameraX = -h;
    this._prevCameraX = -h;
    const _0x1ee40a = this.game.registry.get("selectedBgKey") || "game_bg_01";
    const _0x4e47a8 = this.textures.exists(_0x1ee40a) ? _0x1ee40a : "game_bg_01";
    this._bg = this.add.tileSprite(0x0, 0x0, r, 0x280, _0x4e47a8).setOrigin(0x0, 0x0).setScrollFactor(0x0).setDepth(-0xa);
    this._bgShade = this.add.graphics().setScrollFactor(0x0).setDepth(-0x9);
    this._drawBgShade();
    const _0x15d27a = this.textures.get(_0x4e47a8).source[0x0].height;
    this._bgInitY = Math.max(0x0, _0x15d27a - 0x280 - 0xb4);
    this._cameraX = -h;
    this._cameraY = 0x0;
    this._cameraXRef = {
      get 'value'() {
        return this._v;
      },
      _v: -h
    };
    this._state = new M();
    this._level = new us(this, this._cameraXRef);
    this._player = new ps(this, this._state, this._level);
    this._colorManager = new ms();
    this._baseBgColor = null;
    this._baseGroundColor = null;
    this._baseChannelColors = {};
    this._audio = new ys(this);
    const _0x313e5a = this.cache.json.get("object_overrides");
    if (_0x313e5a && "object" == typeof _0x313e5a) {
      for (const [_0x3e2b80, _0x24ca7c] of Object.entries(_0x313e5a)) {
        if (_0x24ca7c && "object" == typeof _0x24ca7c) {
          OBJECT_DEFS[_0x3e2b80] = _0x24ca7c;
        }
      }
    }
    let _0x591888 = this.cache.text.get("level_selected") || this.cache.text.get("level_1");
    if (_0x591888) {
      const _0x41f190 = this._level.loadLevel(_0x591888);
      this._baseBgColor = _0x41f190?.bgColor || null;
      this._baseGroundColor = _0x41f190?.groundColor || null;
      this._baseChannelColors = _0x41f190?.channelColors || {};
      this._applyBaseLevelColors();
    }
    this._level.createEndPortal(this);
    this._glitterCenterX = 0x0;
    this._glitterCenterY = 0x1cc;
    this._glitterEmitter = this.add.particles(0x0, 0x0, 'GJ_WebSheet', {
      frame: 'square.png',
      speed: 0x0,
      scale: {
        start: 0.375,
        end: 0x0
      },
      alpha: {
        start: 0x1,
        end: 0x0
      },
      lifespan: {
        min: 0xc8,
        max: 0x708
      },
      frequency: 0x3c,
      blendMode: S,
      tint: 0xff00,
      emitting: false,
      emitCallback: _0x3c2a3e => {
        _0x3c2a3e.x = this._glitterCenterX + (0x2 * Math.random() - 0x1) * (r / 1.8);
        _0x3c2a3e.y = this._glitterCenterY + 0x140 * (0x2 * Math.random() - 0x1);
      }
    });
    this._level.additiveContainer.add(this._glitterEmitter);
    this._bg.setTint(this._colorManager.getHex(0x3e8));
    this._level.setGroundColor(this._colorManager.getHex(0x3e9));
    this._level.additiveContainer.setVisible(false);
    this._level.container.setVisible(false);
    this._level.topContainer.setVisible(false);
    this._attempts = 0x1;
    this._bestPercent = 0x0;
    this._lastPercent = 0x0;
    this._endPortalGameY = 0xf0;
    this._resetGameplayState();
    this._totalJumps = 0x0;
    this._playTime = 0x0;
    this._menuActive = true;
    this._slideIn = false;
    this._slideGroundX = null;
    this._firstPlay = true;
    this._player.setCubeVisible(false);
    this._player.setShipVisible(false);
    this._logo = this.add.image(0x0, 0x64, "GJ_WebSheet", "GJ_logo_001.png").setScrollFactor(0x0).setDepth(0x1e);
    this._robLogo = this.add.image(0xa0, 0x22b, "GJ_WebSheet", 'RobTopLogoBig_001.png').setScrollFactor(0x0).setDepth(0x1e).setScale(0.9);
    this._copyrightText = this.add.text(0x0, 0x271, "© 2026 RobTop Games · geometrydash.com", {
      fontSize: "14px",
      color: "#ffffff",
      fontFamily: "Arial"
    }).setOrigin(0x1, 0x1).setScrollFactor(0x0).setDepth(0x1e).setAlpha(0.3);
    this._tryMeImg = this.add.image(0x0, 182.5, "GJ_WebSheet", "tryMe_001.png").setScrollFactor(0x0).setDepth(0x1e);
    this._downloadBtns = [];
    const _0x4fc67f = [{
      key: 'downloadSteam_001',
      url: "https://store.steampowered.com/app/322170/Geometry_Dash"
    }, {
      key: 'downloadGoogle_001',
      url: "https://play.google.com/store/apps/details?id=com.robtopx.geometryjump&hl=en"
    }, {
      key: "downloadApple_001",
      url: 'https://apps.apple.com/us/app/geometry-dash/id625334537'
    }];
    for (let _0xfeaf5c = 0x0; _0xfeaf5c < _0x4fc67f.length; _0xfeaf5c++) {
      const _0x1ce2a6 = _0x4fc67f[_0xfeaf5c];
      const _0x1d293f = this.add.image(0x0, 0x0, "GJ_WebSheet", _0x1ce2a6.key + '.png').setScrollFactor(0x0).setDepth(0x1e).setScale(0.6666666666666666).setInteractive();
      this._makeBouncyButton(_0x1d293f, 0.6666666666666666, () => window.open(_0x1ce2a6.url, "_blank"), () => this._menuActive);
      this._downloadBtns.push(_0x1d293f);
    }
    const _0x28fa5b = this.scale.isFullscreen;
    this._menuFsBtn = this.add.image(0x21, 0x21, "GJ_WebSheet", _0x28fa5b ? 'toggleFullscreenOff_001.png' : "toggleFullscreenOn_001.png").setScrollFactor(0x0).setDepth(0x1e).setScale(0.64).setAlpha(0.8).setTint(Phaser.Display.Color.GetColor(0x0, Math.round(0x66), 0xff)).setInteractive();
    this._expandHitArea(this._menuFsBtn, 1.5);
    this._makeBouncyButton(this._menuFsBtn, 0.64, () => {
      const _0x26b7c = !this.scale.isFullscreen;
      this._menuFsBtn.setTexture("GJ_WebSheet", _0x26b7c ? "toggleFullscreenOff_001.png" : 'toggleFullscreenOn_001.png');
      this._expandHitArea(this._menuFsBtn, 1.5);
      this._toggleFullscreen();
    }, () => this._menuActive);
    this._menuInfoBtn = this.add.image(r - 0x1e - 0x3, 0x21, "GJ_WebSheet", "GJ_infoIcon_001.png").setScrollFactor(0x0).setDepth(0x1e).setScale(0.64).setAlpha(0.8).setTint(Phaser.Display.Color.GetColor(0x0, Math.round(0x66), 0xff)).setInteractive();
    this._expandHitArea(this._menuInfoBtn, 1.5);
    this._makeBouncyButton(this._menuInfoBtn, 0.64, () => {
      this._buildInfoPopup();
    }, () => this._menuActive && !this._infoPopup);
    this._menuGlitter = this.add.particles(0x0, 0x0, "GJ_WebSheet", {
      frame: "square.png",
      speed: 0x0,
      scale: {
        start: 0.5,
        end: 0x0
      },
      alpha: {
        start: 0.6,
        end: 0.2
      },
      lifespan: {
        min: 0x3e8,
        max: 0x7d0
      },
      frequency: 0x23,
      blendMode: S,
      tint: 0x50be,
      x: {
        min: -0x82,
        max: 0x82
      },
      y: {
        min: -0x64,
        max: 0x64
      }
    }).setScrollFactor(0x0).setDepth(0x1d);
    this._playBtn = this.add.image(0x0, 0x0, "GJ_WebSheet", "GJ_playBtn_001.png").setScrollFactor(0x0).setDepth(0x1e).setInteractive();
    this._playBtnPressed = false;
    this._makeBouncyButton(this._playBtn, 0x1, () => {
      this._audio.playEffect("playSound_01", {
        volume: 0x1
      });
      this._startGame();
    }, () => this._menuActive && !this._playBtnPressed);
    this._positionMenuItems();
    this._spaceWasDown = false;
    this._spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this._upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this._pauseBtn = this.add.image(r - 0x1e, 0x1e, "GJ_WebSheet", "GJ_pauseBtn_clean_001.png").setScrollFactor(0x0).setDepth(0x1e).setAlpha(0.29411764705882354).setVisible(false);
    this._pauseBtn.setInteractive();
    this._expandHitArea(this._pauseBtn, 0x2);
    this._pauseBtn.on("pointerdown", _0x2fe445 => {
      if (_0x2fe445.x >= r - 0x60 && _0x2fe445.y <= 0x60) {
        this._pauseGame();
      }
    });
    this._escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    this._escKey.on("down", () => {
      if (this._paused) {
        this._resumeGame();
      } else if (!(this._menuActive || this._slideIn || this._state.isDead || this._levelWon)) {
        this._pauseGame();
      }
    });
    this._paused = false;
    this._pauseContainer = null;
    this._sfxVolume = this.game.registry.get("userSfxVol") ?? 0x1;
    this.input.on("pointerdown", () => {
      if (!(this._menuActive || this._paused)) {
        this._pushButton();
      }
    });
    this.input.on("pointerup", () => {
      if (!(this._menuActive || this._paused)) {
        this._releaseButton();
      }
    });
    window.addEventListener("pointerup", () => this._releaseButton());
    window.addEventListener("touchend", () => this._releaseButton());
    this.scale.on("enterfullscreen", () => this._onFullscreenChange(true));
    this.scale.on("leavefullscreen", () => this._onFullscreenChange(false));
    this._buildHUD();
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this._audio.pauseMusic();
      } else if (!(this._menuActive || this._paused || this._state.isDead || this._levelWon)) {
        this._audio.resumeMusic();
      }
    });
    window.addEventListener("orientationchange", () => {
      this.time.delayedCall(0x64, () => this.scale.refresh());
    });
    window.addEventListener("resize", () => {
      this.scale.refresh();
    });
    if (this.game.registry.get("fadeInFromBlack")) {
      this.game.registry.remove("fadeInFromBlack");
      this.cameras.main.fadeIn(0x190, 0x0, 0x0, 0x0);
    }
  }
  ['_buildHUD']() {
    this._attemptsLabel = this.add.bitmapText(0x0, 0x0, "bigFont", "Attempt 1", 0x41).setOrigin(0.5, 0.5).setVisible(false);
    this._level.topContainer.add(this._attemptsLabel);
    this._positionAttemptsLabel();
    this._fpsText = this.add.text(r - 0x14, 0xa, '', {
      fontSize: "28px",
      fill: "#ff0000",
      fontFamily: "Arial"
    }).setOrigin(0x1, 0x0).setScrollFactor(0x0).setDepth(0x3e7).setVisible(false);
    this._fpsAccum = 0x0;
    this._fpsFrames = 0x0;
    this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H).on("down", () => {
      this._fpsText.setVisible(!this._fpsText.visible);
    });
  }
  ["toggleGlitter"](_0x34c21a) {
    if (_0x34c21a) {
      this._glitterEmitter.start();
    } else {
      this._glitterEmitter.stop();
    }
  }
  ['_setParticleTimeScale'](_0x41fa6a) {
    const _0x2a8756 = _0x3d71c7 => {
      if (_0x3d71c7 && "ParticleEmitter" === _0x3d71c7.type) {
        _0x3d71c7.timeScale = _0x41fa6a;
      }
      if (_0x3d71c7 && _0x3d71c7.list) {
        _0x3d71c7.list.forEach(_0x2a8756);
      }
    };
    _0x2a8756(this._level.container);
    _0x2a8756(this._level.topContainer);
    if (this._glitterEmitter) {
      this._glitterEmitter.timeScale = _0x41fa6a;
    }
  }
  ['_pauseGame']() {
    if (!(this._paused || this._menuActive || this._slideIn || this._state.isDead || this._levelWon)) {
      this._paused = true;
      this._pauseBtn.setVisible(false);
      this._audio.pauseMusic();
      this._setParticleTimeScale(0x0);
      this._buildPauseOverlay();
    }
  }
  ["_resumeGame"]() {
    if (this._paused) {
      this._setParticleTimeScale(0x1);
      this._paused = false;
      this._pauseBtn.setVisible(true).setAlpha(0.29411764705882354);
      this._audio.resumeMusic();
      if (this._pauseContainer) {
        this._pauseContainer.destroy();
        this._pauseContainer = null;
      }
    }
  }
  ['_buildPauseOverlay']() {
    const _0x13af33 = r / 0x2;
    const _0x4eb71b = r - 0x28;
    const _0x2f5fc6 = [];
    const _0x57a0f8 = (_0x5b2257, _0x58c2ec, _0x1b66f8) => {
      _0x2f5fc6.push({
        spr: _0x5b2257,
        baseScale: _0x58c2ec,
        action: _0x1b66f8
      });
    };
    this._pauseContainer = this.add.container(0x0, 0x0).setScrollFactor(0x0).setDepth(0x64);
    const _0x505665 = this.add.rectangle(_0x13af33, 0x140, r, 0x280, 0x0, 0.29411764705882354);
    this._pauseContainer.add(_0x505665);
    const _0x103191 = 0.325 * this.textures.get("square04_001").source[0x0].width;
    const _0x954813 = this._drawScale9(_0x13af33, 0x140, _0x4eb71b, 0x258, 'square04_001', _0x103191, 0x0, 0.5882352941176471);
    this._pauseContainer.add(_0x954813);
    const _0x3874ed = this.scale.isFullscreen;
    const _0x426993 = this.add.image(_0x13af33 - _0x4eb71b / 0x2 + 0x28, 0x3c, 'GJ_WebSheet', _0x3874ed ? "toggleFullscreenOff_001.png" : 'toggleFullscreenOn_001.png').setScale(0.64).setInteractive(new Phaser.Geom.Rectangle(-0x18, -0x18, 0x30, 0x30), Phaser.Geom.Rectangle.Contains);
    this._pauseContainer.add(_0x426993);
    _0x57a0f8(_0x426993, 0.64, () => {
      const _0x23c9e5 = !this.scale.isFullscreen;
      _0x426993.setTexture("GJ_WebSheet", _0x23c9e5 ? 'toggleFullscreenOff_001.png' : "toggleFullscreenOn_001.png");
      this._toggleFullscreen();
    });
    this._pauseContainer.add(this.add.bitmapText(_0x13af33, 0x41, 'bigFont', "Stereo Madness", 0x28).setOrigin(0.5, 0.5));
    const _0x46bab2 = this._bestPercent || 0x0;
    const _0x38b8d1 = this.add.image(_0x13af33, 0xaa, 'GJ_WebSheet', "GJ_progressBar_001.png").setTint(0x0).setAlpha(0.49019607843137253);
    this._pauseContainer.add(_0x38b8d1);
    const _0x1d49a9 = this.textures.getFrame("GJ_WebSheet", "GJ_progressBar_001.png");
    const _0xb5ab6f = _0x1d49a9 ? _0x1d49a9.width : 0x2a8;
    const _0x1e6502 = _0x1d49a9 ? _0x1d49a9.height : 0x28;
    const _0x3782ca = Math.max(0x1, Math.floor(_0xb5ab6f * (_0x46bab2 / 0x64)));
    const _0x3d0987 = this.add.image(0x0, 0x0, 'GJ_WebSheet', "GJ_progressBar_001.png").setTint(0xff00).setScale(0.992, 0.86).setOrigin(0x0, 0.5).setCrop(0x0, 0x0, _0x3782ca, _0x1e6502);
    _0x3d0987.setPosition(_0x13af33 - 0.992 * _0xb5ab6f / 0x2, 0xaa);
    this._pauseContainer.add(_0x3d0987);
    this._pauseContainer.add(this.add.bitmapText(_0x13af33, 0xaa, "bigFont", _0x46bab2 + '%', 0x1e).setOrigin(0.5, 0.5).setScale(0.7));
    this._pauseContainer.add(this.add.bitmapText(_0x13af33, 0x82, "bigFont", "Normal Mode", 0x1e).setOrigin(0.5, 0.5).setScale(0.78));
    const _0x4791ac = [{
      frame: "GJ_replayBtn_001.png",
      action: () => {
        this._resumeGame();
        this._restartLevel();
      }
    }, {
      frame: "GJ_playBtn2_001.png",
      action: () => this._resumeGame()
    }, {
      frame: "GJ_menuBtn_001.png",
      action: () => {
        this._audio.playEffect("quitSound_01");
        this._audio.stopMusic();
        this._resumeGame();
        this.scene.restart();
      }
    }];
    const _0x25aa59 = _0x4791ac.map(_0x120c08 => {
      const _0x44c01c = this.textures.getFrame("GJ_WebSheet", _0x120c08.frame);
      return _0x44c01c ? _0x44c01c.width : 0xf6;
    });
    const _0x539ec7 = _0x4791ac.map(_0x7a72b5 => {
      const _0x257853 = this.textures.getFrame("GJ_WebSheet", _0x7a72b5.frame);
      return _0x257853 ? _0x257853.height : 0xf6;
    });
    let _0x599a9b = _0x13af33 - (_0x25aa59.reduce((_0x53adf8, _0x10ae31) => _0x53adf8 + _0x10ae31, 0x0) + 0x28 * (_0x4791ac.length - 0x1)) / 0x2;
    for (let _0x18feee = 0x0; _0x18feee < _0x4791ac.length; _0x18feee++) {
      const _0x17809c = _0x4791ac[_0x18feee];
      const _0x228482 = _0x25aa59[_0x18feee];
      const _0x4dd465 = _0x539ec7[_0x18feee];
      const _0x7f0786 = this.add.image(_0x599a9b + _0x228482 / 0x2, 0x14a, "GJ_WebSheet", _0x17809c.frame).setInteractive(new Phaser.Geom.Rectangle(-_0x228482 / 0x2, -_0x4dd465 / 0x2, _0x228482, _0x4dd465), Phaser.Geom.Rectangle.Contains);
      this._pauseContainer.add(_0x7f0786);
      _0x57a0f8(_0x7f0786, 0x1, _0x17809c.action);
      _0x599a9b += _0x228482 + 0x28;
    }
    const _0x41925a = this.textures.getFrame("GJ_WebSheet", "slidergroove.png");
    const _0x372782 = _0x41925a ? _0x41925a.width : 0x1a4;
    const _0xe34699 = (_0x422be3, _0x4b32e0, _0xaaab25, _0x169b87) => {
      this._pauseContainer.add(this.add.image(_0x422be3 - 0xb4 - 0x5, 0x1f4, "GJ_WebSheet", _0x4b32e0).setScale(1.2));
      const _0x51c57b = (_0x372782 - 0x8) * 0.7;
      const _0x34d1c1 = _0x422be3 - _0x372782 * 0.7 / 0x2 + 2.8;
      const _0xe86505 = _0xaaab25 * _0x51c57b;
      const _0x43dbf4 = this.add.tileSprite(_0x34d1c1, 0x1f4, _0xe86505 > 0x0 ? _0xe86505 : 0x1, 11.2, "sliderBar").setOrigin(0x0, 0.5).setVisible(_0xe86505 > 0x0);
      this._pauseContainer.add(_0x43dbf4);
      const _0x4de88c = this.add.image(_0x422be3, 0x1f4, 'GJ_WebSheet', "slidergroove.png").setScale(0.7);
      this._pauseContainer.add(_0x4de88c);
      const _0x106f98 = _0x34d1c1 + _0xaaab25 * _0x51c57b;
      const _0x441360 = this.add.image(_0x106f98, 0x1f4, 'GJ_WebSheet', "sliderthumb.png").setScale(0.7);
      this._pauseContainer.add(_0x441360);
      const _0x180ec0 = _0x56f12e => {
        _0x441360.x = Math.max(_0x34d1c1, Math.min(_0x34d1c1 + _0x51c57b, _0x56f12e));
        const _0x4a1663 = (_0x441360.x - _0x34d1c1) / _0x51c57b;
        const _0x2bc46f = _0x4a1663 < 0.03 ? 0x0 : _0x4a1663;
        _0x43dbf4.width = Math.max(0x1, _0x2bc46f * _0x51c57b);
        _0x43dbf4.setVisible(_0x2bc46f > 0x0);
        _0x169b87(_0x2bc46f);
      };
      let _0x594254 = false;
      const _0x2d64fc = _0x5c9059 => {
        if (_0x594254) {
          _0x180ec0(_0x5c9059.x);
        }
      };
      const _0x4c0319 = () => {
        _0x594254 = false;
        _0x441360.setTexture("GJ_WebSheet", "sliderthumb.png");
      };
      const _0x314696 = _0x5ac484 => {
        const _0x489f2f = _0x5ac484.x;
        const _0x2d90a9 = _0x5ac484.y;
        const _0x1b1652 = _0x489f2f >= _0x34d1c1 - 0xa && _0x489f2f <= _0x34d1c1 + _0x51c57b + 0xa;
        const _0x3b6052 = _0x2d90a9 >= 0x1f4 - 0x1c && _0x2d90a9 <= 0x1f4 + 0x1c;
        if (_0x1b1652 && _0x3b6052) {
          _0x594254 = true;
          _0x441360.setTexture("GJ_WebSheet", "sliderthumbsel.png");
          _0x180ec0(_0x489f2f);
        }
      };
      this.input.on("pointerdown", _0x314696);
      this.input.on("pointermove", _0x2d64fc);
      this.input.on("pointerup", _0x4c0319);
      window.addEventListener("pointerup", _0x4c0319);
      window.addEventListener("touchend", _0x4c0319);
      _0x4de88c.once("destroy", () => {
        this.input.off("pointerdown", _0x314696);
        this.input.off("pointermove", _0x2d64fc);
        this.input.off("pointerup", _0x4c0319);
        window.removeEventListener("pointerup", _0x4c0319);
        window.removeEventListener("touchend", _0x4c0319);
      });
    };
    _0xe34699(_0x13af33 - 0xc8, "gj_songIcon_001.png", this._audio.getUserMusicVolume(), _0x3ebce2 => this._audio.setUserMusicVolume(_0x3ebce2));
    _0xe34699(_0x13af33 + 0xc8, "GJ_sfxIcon_001.png", this._sfxVolume, _0x3224fb => {
      this._sfxVolume = _0x3224fb;
      this.game.registry.set("userSfxVol", _0x3224fb);
    });
    const _0x5dc368 = _0x4fb42d => {
      if (!(this._paused && this._pauseContainer)) {
        return;
      }
      for (let _0x25271e = _0x2f5fc6.length - 0x1; _0x25271e >= 0x0; _0x25271e--) {
        const _0x58866e = _0x2f5fc6[_0x25271e];
        const _0x8f35ce = _0x58866e.spr;
        const _0x2f44f6 = (_0x8f35ce.displayWidth || _0x8f35ce.width || 0x0) / 0x2;
        const _0x5c67e6 = (_0x8f35ce.displayHeight || _0x8f35ce.height || 0x0) / 0x2;
        if (Math.abs(_0x4fb42d.x - _0x8f35ce.x) <= _0x2f44f6 && Math.abs(_0x4fb42d.y - _0x8f35ce.y) <= _0x5c67e6) {
          this.tweens.killTweensOf(_0x8f35ce, "scale");
          _0x8f35ce.setScale(1.18 * _0x58866e.baseScale);
          this.tweens.add({
            targets: _0x8f35ce,
            scale: _0x58866e.baseScale,
            duration: 0xb4,
            ease: "Quad.Out"
          });
          _0x58866e.action();
          break;
        }
      }
    };
    this.input.on("pointerdown", _0x5dc368);
    this._pauseContainer.once("destroy", () => {
      this.input.off("pointerdown", _0x5dc368);
    });
  }
  ["_buildInfoPopup"]() {
    if (this._infoPopup) {
      return;
    }
    const _0xd1c6c2 = r / 0x2;
    this._infoPopup = this.add.container(0x0, 0x0).setScrollFactor(0x0).setDepth(0xc8);
    const _0x249eb7 = this.add.rectangle(_0xd1c6c2, 0x140, r, 0x280, 0x0, 0.39215686274509803);
    _0x249eb7.setInteractive();
    this._infoPopup.add(_0x249eb7);
    const _0x14e46f = 0.325 * this.textures.get("GJ_square02").source[0x0].width;
    const _0x2c64c2 = this._drawScale9(_0xd1c6c2, 0x140, 0x1e0, 0x150, 'GJ_square02', _0x14e46f, 0xffffff, 0x1);
    this._infoPopup.add(_0x2c64c2);
    const _0x5a0f88 = this.add.image(_0xd1c6c2 - 0xf0 + 0x14, 0xac, 'GJ_WebSheet', "GJ_closeBtn_001.png").setScale(0.8).setInteractive();
    this._infoPopup.add(_0x5a0f88);
    this._expandHitArea(_0x5a0f88, 0x2);
    this._makeBouncyButton(_0x5a0f88, 0.8, () => this._closeInfoPopup());
    let _0x32bf66 = 0xce;
    const _0x302fca = this.add.bitmapText(_0xd1c6c2, _0x32bf66, "bigFont", "Credits", 0x28).setOrigin(0.5, 0.5);
    this._infoPopup.add(_0x302fca);
    _0x32bf66 += 0x46;
    const _0x22e4c7 = this.add.bitmapText(_0xd1c6c2, _0x32bf66, 'goldFont', "Made by RobTop Games", 0x28).setOrigin(0.5, 0.5).setScale(0.6);
    this._infoPopup.add(_0x22e4c7);
    _0x32bf66 += 0x3c;
    const _0x534a78 = this.add.bitmapText(_0xd1c6c2, _0x32bf66, "goldFont", "Song: Stereo Madness", 0x28).setOrigin(0.5, 0.5).setScale(0.6);
    this._infoPopup.add(_0x534a78);
    _0x32bf66 += 0x1e;
    const _0x3cdf70 = this.add.bitmapText(_0xd1c6c2 - 0x14, _0x32bf66, "goldFont", "by ForeverBound", 0x28).setOrigin(0.5, 0.5).setScale(0.6);
    this._infoPopup.add(_0x3cdf70);
    const _0x274c3e = _0xd1c6c2 - 0xa + 0.6 * _0x3cdf70.width / 0x2;
    const _0x16b125 = this.add.image(_0x274c3e + 0x14 + 0x32 - 0xa, _0x32bf66 + 0x2, "GJ_WebSheet", 'gj_ytIcon_001.png').setScale(0.5).setInteractive();
    this._infoPopup.add(_0x16b125);
    this._expandHitArea(_0x16b125, 0x2);
    this._makeBouncyButton(_0x16b125, 0.5, () => {
      window.open("https://www.youtube.com/watch?v=JhKyKEDxo8Q", "_blank");
    });
    const _0x8233c2 = this.add.text(_0xd1c6c2, 0x1be, "© 2026 RobTop Games. All rights reserved.", {
      fontSize: '12px',
      color: "#000000",
      fontFamily: "Arial"
    }).setOrigin(0.5, 0.5).setAlpha(0.7).setResolution(0x2);
    this._infoPopup.add(_0x8233c2);
    const _0x97b2a9 = this.add.text(_0xd1c6c2, 0x1cf, "Unauthorized copying, distribution, or hosting of this demo is prohibited.", {
      fontSize: "12px",
      color: '#000000',
      fontFamily: "Arial"
    }).setOrigin(0.5, 0.5).setAlpha(0.7).setResolution(0x2);
    this._infoPopup.add(_0x97b2a9);
  }
  ['_closeInfoPopup']() {
    if (this._infoPopup) {
      this._infoPopup.destroy();
      this._infoPopup = null;
    }
  }
  ["_expandHitArea"](_0x122213, _0x37180a) {
    const _0x46ea45 = _0x122213.width;
    const _0x43b461 = _0x122213.height;
    const _0x960250 = _0x46ea45 * (_0x37180a - 0x1) / 0x2;
    const _0x3f88a1 = _0x43b461 * (_0x37180a - 0x1) / 0x2;
    _0x122213.input.hitArea.setTo(-_0x960250, -_0x3f88a1, _0x46ea45 + 0x2 * _0x960250, _0x43b461 + 0x2 * _0x3f88a1);
  }
  ["_makeBouncyButton"](_0x4b8c6e, _0x57b645, _0x2f13d0, _0xda0c21) {
    const _0x396ca0 = 1.26 * _0x57b645;
    _0x4b8c6e.on("pointerdown", () => {
      if (!(_0xda0c21 && !_0xda0c21())) {
        _0x4b8c6e._pressed = true;
        this.tweens.killTweensOf(_0x4b8c6e, "scale");
        this.tweens.add({
          targets: _0x4b8c6e,
          scale: _0x396ca0,
          duration: 0x12c,
          ease: "Bounce.Out"
        });
      }
    });
    _0x4b8c6e.on("pointerout", () => {
      if (_0x4b8c6e._pressed) {
        _0x4b8c6e._pressed = false;
        this.tweens.killTweensOf(_0x4b8c6e, "scale");
        this.tweens.add({
          targets: _0x4b8c6e,
          scale: _0x57b645,
          duration: 0x190,
          ease: "Bounce.Out"
        });
      }
    });
    _0x4b8c6e.on('pointerup', () => {
      if (_0x4b8c6e._pressed) {
        _0x4b8c6e._pressed = false;
        this.tweens.killTweensOf(_0x4b8c6e, "scale");
        _0x4b8c6e.setScale(_0x57b645);
        _0x2f13d0();
      } else {
        _0x4b8c6e._pressed = false;
        this.tweens.killTweensOf(_0x4b8c6e, "scale");
        _0x4b8c6e.setScale(_0x57b645);
      }
    });
    return _0x4b8c6e;
  }
  ["_toggleFullscreen"]() {
    if (this.scale.isFullscreen) {
      this.scale.stopFullscreen();
    } else {
      this.scale.startFullscreen();
      try {
        screen.orientation.lock("landscape").catch(() => {});
      } catch (_0x22124f) {}
    }
  }
  ["_drawScale9"](_0x147730, _0x4c8cbf, _0x58d136, _0x1ac13a, _0x24a44b, _0x143641, _0x590eba, _0x206735) {
    const _0x4080b2 = this.add.container(_0x147730, _0x4c8cbf);
    const _0x2522df = this.textures.get(_0x24a44b);
    const _0x401ec1 = _0x2522df.source[0x0];
    const _0x3f82ec = _0x401ec1.width;
    const _0x294746 = _0x401ec1.height;
    const _0x2b09f1 = _0x58d136 - 0x2 * _0x143641;
    const _0x990515 = _0x1ac13a - 0x2 * _0x143641;
    const _0x1d065e = [{
      sx: 0x0,
      sy: 0x0,
      sw: _0x143641,
      sh: _0x143641,
      dx: -_0x58d136 / 0x2,
      dy: -_0x1ac13a / 0x2,
      dw: _0x143641,
      dh: _0x143641
    }, {
      sx: _0x143641,
      sy: 0x0,
      sw: _0x3f82ec - 0x2 * _0x143641,
      sh: _0x143641,
      dx: -_0x58d136 / 0x2 + _0x143641,
      dy: -_0x1ac13a / 0x2,
      dw: _0x2b09f1,
      dh: _0x143641
    }, {
      sx: _0x3f82ec - _0x143641,
      sy: 0x0,
      sw: _0x143641,
      sh: _0x143641,
      dx: _0x58d136 / 0x2 - _0x143641,
      dy: -_0x1ac13a / 0x2,
      dw: _0x143641,
      dh: _0x143641
    }, {
      sx: 0x0,
      sy: _0x143641,
      sw: _0x143641,
      sh: _0x294746 - 0x2 * _0x143641,
      dx: -_0x58d136 / 0x2,
      dy: -_0x1ac13a / 0x2 + _0x143641,
      dw: _0x143641,
      dh: _0x990515
    }, {
      sx: _0x143641,
      sy: _0x143641,
      sw: _0x3f82ec - 0x2 * _0x143641,
      sh: _0x294746 - 0x2 * _0x143641,
      dx: -_0x58d136 / 0x2 + _0x143641,
      dy: -_0x1ac13a / 0x2 + _0x143641,
      dw: _0x2b09f1,
      dh: _0x990515
    }, {
      sx: _0x3f82ec - _0x143641,
      sy: _0x143641,
      sw: _0x143641,
      sh: _0x294746 - 0x2 * _0x143641,
      dx: _0x58d136 / 0x2 - _0x143641,
      dy: -_0x1ac13a / 0x2 + _0x143641,
      dw: _0x143641,
      dh: _0x990515
    }, {
      sx: 0x0,
      sy: _0x294746 - _0x143641,
      sw: _0x143641,
      sh: _0x143641,
      dx: -_0x58d136 / 0x2,
      dy: _0x1ac13a / 0x2 - _0x143641,
      dw: _0x143641,
      dh: _0x143641
    }, {
      sx: _0x143641,
      sy: _0x294746 - _0x143641,
      sw: _0x3f82ec - 0x2 * _0x143641,
      sh: _0x143641,
      dx: -_0x58d136 / 0x2 + _0x143641,
      dy: _0x1ac13a / 0x2 - _0x143641,
      dw: _0x2b09f1,
      dh: _0x143641
    }, {
      sx: _0x3f82ec - _0x143641,
      sy: _0x294746 - _0x143641,
      sw: _0x143641,
      sh: _0x143641,
      dx: _0x58d136 / 0x2 - _0x143641,
      dy: _0x1ac13a / 0x2 - _0x143641,
      dw: _0x143641,
      dh: _0x143641
    }];
    for (let _0x24f653 = 0x0; _0x24f653 < _0x1d065e.length; _0x24f653++) {
      const _0x1fa377 = _0x1d065e[_0x24f653];
      const _0xade586 = "_s9_" + _0x24f653;
      if (!_0x2522df.has(_0xade586)) {
        _0x2522df.add(_0xade586, 0x0, _0x1fa377.sx, _0x1fa377.sy, _0x1fa377.sw, _0x1fa377.sh);
      }
      const _0x1145e5 = this.add.image(_0x1fa377.dx, _0x1fa377.dy, _0x24a44b, _0xade586).setOrigin(0x0, 0x0).setDisplaySize(_0x1fa377.dw, _0x1fa377.dh);
      if (undefined !== _0x590eba) {
        _0x1145e5.setTint(_0x590eba);
      }
      if (undefined !== _0x206735) {
        _0x1145e5.setAlpha(_0x206735);
      }
      _0x4080b2.add(_0x1145e5);
    }
    return _0x4080b2;
  }
  ['_startGame']() {
    if (!this._menuActive) {
      return;
    }
    this._menuActive = false;
    this._slideIn = true;
    if (this._menuGlitter) {
      this._menuGlitter.destroy();
      this._menuGlitter = null;
    }
    if (this._playBtn) {
      this.tweens.killTweensOf(this._playBtn);
      this.tweens.add({
        targets: this._playBtn,
        scale: 0.01,
        duration: 0xc8,
        ease: "Quad.In",
        onComplete: () => {
          this._playBtn.destroy();
          this._playBtn = null;
        }
      });
    }
    if (this._robLogo) {
      this.tweens.add({
        targets: this._robLogo,
        y: 0x280 + this._robLogo.height,
        duration: 0x12c,
        ease: "Quad.In",
        onComplete: () => {
          this._robLogo.destroy();
          this._robLogo = null;
        }
      });
    }
    if (this._copyrightText) {
      this.tweens.add({
        targets: this._copyrightText,
        y: 0x2a8,
        duration: 0x12c,
        ease: 'Quad.In',
        onComplete: () => {
          this._copyrightText.destroy();
          this._copyrightText = null;
        }
      });
    }
    if (this._menuFsBtn) {
      this.tweens.add({
        targets: this._menuFsBtn,
        y: -this._menuFsBtn.height,
        duration: 0x12c,
        ease: "Quad.In",
        onComplete: () => {
          this._menuFsBtn.destroy();
          this._menuFsBtn = null;
        }
      });
    }
    if (this._menuInfoBtn) {
      this.tweens.add({
        targets: this._menuInfoBtn,
        y: -this._menuInfoBtn.height,
        duration: 0x12c,
        ease: 'Quad.In',
        onComplete: () => {
          this._menuInfoBtn.destroy();
          this._menuInfoBtn = null;
        }
      });
    }
    this._closeInfoPopup();
    if (this._tryMeImg) {
      this.tweens.add({
        targets: this._tryMeImg,
        y: -this._tryMeImg.height,
        duration: 0x12c,
        ease: "Quad.In",
        onComplete: () => {
          this._tryMeImg.destroy();
          this._tryMeImg = null;
        }
      });
    }
    if (this._downloadBtns) {
      for (const _0xaa3a95 of this._downloadBtns) {
        this.tweens.killTweensOf(_0xaa3a95);
        this.tweens.add({
          targets: _0xaa3a95,
          y: 0x280 + _0xaa3a95.height,
          duration: 0x12c,
          ease: "Quad.In",
          onComplete: () => _0xaa3a95.destroy()
        });
      }
      this._downloadBtns = null;
    }
    if (this._logo) {
      this.tweens.add({
        targets: this._logo,
        y: -this._logo.height,
        duration: 0x12c,
        ease: "Quad.In",
        onComplete: () => {
          this._logo.destroy();
          this._logo = null;
        }
      });
    }
    this._cameraX = -h;
    this._cameraY = 0x0;
    this._cameraXRef._v = this._cameraX;
    this._prevCameraX = this._cameraX;
    const _0x22e36e = this._cameraX - (this._menuCameraX || 0x0);
    this._level.shiftGroundTiles(_0x22e36e);
    this._playerWorldX = this._cameraX;
    this._state.y = 0x1e;
    this._state.onGround = true;
    this._level.additiveContainer.setVisible(true);
    this._level.container.setVisible(true);
    this._level.topContainer.setVisible(true);
    this._player.setCubeVisible(true);
    this._player.reset();
    this._attemptsLabel.setVisible(this._attempts > 0x1);
    this._positionAttemptsLabel();
  }
  ["_pushButton"]() {
    if (this._menuActive) {
      this._audio.playEffect("playSound_01", {
        volume: 0x1
      });
      return void this._startGame();
    }
    if (!(this._slideIn || this._state.isDead)) {
      this._state.upKeyDown = true;
      this._state.upKeyPressed = true;
      if (!this._state.isFlying && this._state.canJump) {
        this._player.updateJump(0x0);
        this._totalJumps++;
      }
    }
  }
  ["_releaseButton"]() {
    this._state.upKeyDown = false;
    this._state.upKeyPressed = false;
  }
  ['_positionMenuItems']() {
    const _0x1e5db8 = r / 0x2;
    if (this._logo) {
      this._logo.x = _0x1e5db8;
    }
    if (this._menuInfoBtn) {
      this._menuInfoBtn.x = r - 0x1e - 0x3;
    }
    if (this._copyrightText) {
      this._copyrightText.x = r - 0x14;
    }
    if (this._tryMeImg) {
      this._tryMeImg.x = _0x1e5db8 + 0xaf;
    }
    if (this._menuGlitter) {
      this._menuGlitter.x = _0x1e5db8;
      this._menuGlitter.y = 0x140;
    }
    if (this._playBtn) {
      this._playBtn.x = _0x1e5db8;
      this.tweens.killTweensOf(this._playBtn, 'y');
      this._playBtn.y = 0x140;
      this.tweens.add({
        targets: this._playBtn,
        y: 0x144,
        duration: 0x2ee,
        ease: 'Quad.InOut',
        yoyo: true,
        repeat: -0x1
      });
    }
    if (this._downloadBtns) {
      const _0x285ef7 = r - 0x82;
      for (let _0x1bdfae = 0x0; _0x1bdfae < this._downloadBtns.length; _0x1bdfae++) {
        this._downloadBtns[_0x1bdfae].setPosition(_0x285ef7 - _0x1bdfae * 0xd2, 0x22b);
      }
    }
  }
  ["_positionAttemptsLabel"]() {
    let _0xdbdd91 = this._cameraX + r / 0x2;
    if (this._attempts > 0x1) {
      _0xdbdd91 += 0x64;
    }
    this._attemptsLabel.setPosition(_0xdbdd91, 0x96);
  }
  ["_resetGameplayState"]() {
    this._cameraX = -h;
    this._cameraY = 0x0;
    this._cameraXRef._v = -h;
    this._prevCameraX = -h;
    this._playerWorldX = 0x0;
    this._deltaBuffer = 0x0;
    this._deathTimer = 0x0;
    this._deathSoundPlayed = false;
    this._newBestShown = false;
    this._hadNewBest = false;
    this._levelWon = false;
    this._endCameraOverride = false;
    this._endCamTween = null;
    this._spaceWasDown = false;
    this._speedMul = 1;
  }
  ["setSpeedMode"](_0x3c9b57) {
    const _0x5a03e9 = {
      slow: 0.75,
      normal: 1,
      fast: 1.35,
      very_fast: 1.7
    };
    this._speedMul = _0x5a03e9[_0x3c9b57] || 1;
  }
  ["_restartLevel"]() {
    this._attempts++;
    const _0x2ba78a = this._cameraX;
    this._resetGameplayState();
    this._state.reset();
    this._player.reset();
    this._glitterEmitter.stop();
    this._level.resetObjects();
    this._level.shiftGroundTiles(this._cameraX - _0x2ba78a);
    this._level.resetGroundState();
    this._level.resetColorTriggers();
    this._level.resetEnterEffectTriggers();
    this._level.resetMoveTriggers();
    this._level.resetVisibility();
    this._colorManager.reset();
    this._applyBaseLevelColors();
    this._audio.reset();
    this._audio.startMusic();
    this._paused = false;
    if (this._pauseContainer) {
      this._pauseContainer.destroy();
      this._pauseContainer = null;
    }
    this._pauseBtn.setVisible(true).setAlpha(0.29411764705882354);
    this._attemptsLabel.setText("Attempt " + this._attempts);
    this._attemptsLabel.setVisible(true);
    this._positionAttemptsLabel();
  }
  ["_applyBaseLevelColors"]() {
    if (this._baseBgColor) {
      this._colorManager.triggerColor(0x3e8, this._baseBgColor, 0x0);
    }
    if (this._baseGroundColor) {
      this._colorManager.triggerColor(0x3e9, this._baseGroundColor, 0x0);
    }
    for (const [_0x2b0563, _0x1a8a85] of Object.entries(this._baseChannelColors || {})) {
      const _0x557fab = parseInt(_0x2b0563, 0xa);
      if (Number.isFinite(_0x557fab) && _0x1a8a85) {
        this._colorManager.triggerColor(_0x557fab, _0x1a8a85, 0x0);
      }
    }
  }
  ["_onFullscreenChange"](_0x310c5b) {
    if (!_0x310c5b) {
      l(0x472);
    }
    this.time.delayedCall(0xc8, () => this._applyScreenResize());
  }
  ["_applyScreenResize"]() {
    if (this.scale.isFullscreen) {
      const _0x5bc34b = window.innerWidth / window.innerHeight;
      l(Math.round(0x280 * _0x5bc34b));
    }
    this.scale.setGameSize(r, 0x280);
    this.scale.refresh();
    this._bg.setSize(r, 0x280);
    this._drawBgShade();
    this._pauseBtn.x = r - 0x1e;
    if (this._menuActive) {
      this._positionMenuItems();
    }
    if (this._paused && this._pauseContainer) {
      this._pauseContainer.destroy();
      this._pauseContainer = null;
      this._buildPauseOverlay();
    }
    this._level.resizeScreen();
    if (!this._menuActive) {
      const _0x56287b = this._cameraX;
      this._cameraX = this._playerWorldX - h;
      this._cameraXRef._v = this._cameraX;
      this._level.additiveContainer.x = -this._cameraX;
      this._level.additiveContainer.y = this._cameraY;
      this._level.container.x = -this._cameraX;
      this._level.container.y = this._cameraY;
      this._level.topContainer.x = -this._cameraX;
      this._level.topContainer.y = this._cameraY;
      this._level.shiftGroundTiles(this._cameraX - _0x56287b);
      this._level.updateGroundTiles(this._cameraY);
      this._level.updateVisibility(this._cameraX);
      this._level.applyEnterEffects(this._cameraX);
      const _0xde8a1a = this._playerWorldX - this._cameraX;
      this._player.syncSprites(this._cameraX, this._cameraY, 0x0, _0xde8a1a);
    }
  }
  ['_updateBackground']() {
    this._bg.tilePositionX += (this._cameraX - this._prevCameraX) * this._bgSpeedX;
    this._prevCameraX = this._cameraX;
    this._bg.tilePositionY = this._bgInitY - this._cameraY * this._bgSpeedY;
  }
  ["_drawBgShade"]() {
    if (!this._bgShade) {
      return;
    }
    this._bgShade.clear();
    this._bgShade.fillGradientStyle(0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0.2, 0.45);
    this._bgShade.fillRect(0x0, 0x0, r, 0x280);
  }
  ["_updateCameraY"](_0xc7c517) {
    let _0x29ed62 = this._cameraY;
    let _0x1a27be = _0x29ed62;
    if (null !== this._level.flyCameraTarget) {
      _0x1a27be = this._level.flyCameraTarget;
    } else {
      let _0x2bc8fb = this._state.y;
      let _0x1f7976 = _0x29ed62 - 0xb4 + 0x140;
      if (_0x2bc8fb > _0x1f7976 + 0x8c) {
        _0x1a27be = _0x2bc8fb - 0x140 - 0x8c + 0xb4;
      } else if (_0x2bc8fb < _0x1f7976 - 0x50) {
        _0x1a27be = _0x2bc8fb - 0x140 + 0x50 + 0xb4;
      }
    }
    if (_0x1a27be < 0x0) {
      _0x1a27be = 0x0;
    }
    if (0x0 !== _0xc7c517) {
      _0x29ed62 += (_0x1a27be - _0x29ed62) / (0xa / _0xc7c517);
      if (_0x29ed62 < 0x0) {
        _0x29ed62 = 0x0;
      }
      this._cameraY = _0x29ed62;
    }
  }
  ['_quantizeDelta'](_0x654f39) {
    let _0x578d1b = _0x654f39 / 0x3e8 + this._deltaBuffer;
    let _0x53e02e = Math.round(_0x578d1b / 0.004166666666666667);
    if (_0x53e02e < 0x0) {
      _0x53e02e = 0x0;
    }
    if (_0x53e02e > 0x3c) {
      _0x53e02e = 0x3c;
    }
    let _0xd8019e = _0x53e02e * 0.004166666666666667;
    this._deltaBuffer = _0x578d1b - _0xd8019e;
    return 0x3c * _0xd8019e;
  }
  ['update'](_0x54fa47, _0xaf2ffd) {
    this._fpsAccum += _0xaf2ffd;
    this._fpsFrames++;
    if (this._fpsAccum >= 0xfa) {
      this._fpsText.setText(Math.round(0x3e8 * this._fpsFrames / this._fpsAccum));
      this._fpsAccum = 0x0;
      this._fpsFrames = 0x0;
    }
    if (this._paused) {
      return void (this._deltaBuffer = 0x0);
    }
    if (this._menuActive) {
      if ((this._spaceKey.isDown || this._upKey.isDown) && !this._spaceWasDown) {
        this._spaceWasDown = true;
        this._audio.playEffect("playSound_01", {
          volume: 0x1
        });
        return void this._startGame();
      }
      this._spaceWasDown = this._spaceKey.isDown || this._upKey.isDown;
      const _0x1e9cf4 = Math.min(_0xaf2ffd / 0x3e8 * 0x3c, 0x2);
      this._menuCameraX = (this._menuCameraX || 0x0) + _0x1e9cf4 * 11.540004 * 0.9 * this._speedMul * 0.25;
      const _0x38afac = this._cameraX;
      this._cameraX = this._menuCameraX;
      this._updateBackground();
      this._cameraX = _0x38afac;
      this._prevCameraX = this._menuCameraX;
      this._cameraXRef._v = this._menuCameraX;
      this._level.stepGroundAnimation(_0xaf2ffd / 0x3e8);
      return void this._level.updateGroundTiles(this._cameraY);
    }
    if (this._slideIn) {
      const _0x3c9318 = this._quantizeDelta(_0xaf2ffd);
      this._playerWorldX += _0x3c9318 * 11.540004 * 0.9 * this._speedMul;
      this._slideGroundX = (this._slideGroundX || this._cameraX) + _0x3c9318 * 11.540004 * 0.9 * this._speedMul * 0.25;
      this._cameraXRef._v = this._slideGroundX;
      const _0x95cc4f = this._playerWorldX - this._cameraX;
      this._player.updateGroundRotation(_0x3c9318 * 0.9);
      this._player.syncSprites(this._cameraX, this._cameraY, _0xaf2ffd / 0x3e8, _0x95cc4f);
      this._level.additiveContainer.x = -this._cameraX;
      this._level.additiveContainer.y = this._cameraY;
      this._level.container.x = -this._cameraX;
      this._level.container.y = this._cameraY;
      this._level.topContainer.x = -this._cameraX;
      this._level.topContainer.y = this._cameraY;
      this._level.updateVisibility(this._cameraX);
      this._updateBackground();
      this._level.stepGroundAnimation(_0xaf2ffd / 0x3e8);
      this._level.updateGroundTiles(this._cameraY);
      if (this._playerWorldX >= 0x0) {
        this._slideIn = false;
        this._deltaBuffer = 0x0;
        this._playerWorldX = 0x0;
        this._cameraX = this._playerWorldX - h;
        this._cameraXRef._v = this._cameraX;
        const _0x490749 = this._cameraX - this._slideGroundX;
        this._level.shiftGroundTiles(_0x490749);
        if (this._firstPlay) {
          this._firstPlay = false;
          this._audio.startMusic();
        }
        this._pauseBtn.setVisible(true).setAlpha(0x0);
        this.tweens.add({
          targets: this._pauseBtn,
          alpha: 0.29411764705882354,
          duration: 0x1f4
        });
      }
      return;
    }
    let _0x368ad9 = this._spaceKey.isDown || this._upKey.isDown;
    if (_0x368ad9 && !this._spaceWasDown) {
      this._pushButton();
    } else if (!_0x368ad9 && this._spaceWasDown) {
      this._releaseButton();
    }
    this._spaceWasDown = _0x368ad9;
    if (!(!this.input.activePointer.isDown || this._state.upKeyDown || this._state.isDead)) {
      this._state.upKeyDown = true;
    }
    this._level.updateEndPortalY(this._cameraY, this._state.isFlying);
    if (!this._levelWon && !this._state.isDead && this._level.endXPos > 0x0) {
      if (this._playerWorldX >= this._level.endXPos - 0x258) {
        this._levelWon = true;
        this._endPortalGameY = this._level._endPortalGameY || 0xf0;
        this._triggerEndPortal();
      }
    }
    if (this._levelWon) {
      this._deltaBuffer = 0x0;
      if (this._endCamTween) {
        const _0x3eb8cf = this._endCamTween;
        this._cameraX = _0x3eb8cf.fromX + (_0x3eb8cf.toX - _0x3eb8cf.fromX) * _0x3eb8cf.p;
        this._cameraY = _0x3eb8cf.fromY + (_0x3eb8cf.toY - _0x3eb8cf.fromY) * _0x3eb8cf.p;
      }
      this._cameraXRef._v = this._cameraX;
      this._level.additiveContainer.x = -this._cameraX;
      this._level.additiveContainer.y = this._cameraY;
      this._level.container.x = -this._cameraX;
      this._level.container.y = this._cameraY;
      this._level.topContainer.x = -this._cameraX;
      this._level.topContainer.y = this._cameraY;
      this._updateBackground();
      this._level.stepGroundAnimation(_0xaf2ffd / 0x3e8);
      return void this._level.updateGroundTiles(this._cameraY);
    }
    if (this._state.isDead) {
      if (!this._deathSoundPlayed) {
        this._audio.stopMusic();
        this._audio.playEffect("explode_11", {
          volume: 0.65
        });
        this._deathSoundPlayed = true;
      }
      if (!this._newBestShown) {
        this._newBestShown = true;
        let _0x435587 = this._level.endXPos || 0x1770;
        let _0x169d53 = this._playerWorldX;
        this._lastPercent = Math.min(0x63, Math.max(0x0, Math.floor(_0x169d53 / _0x435587 * 0x64)));
        if (this._lastPercent > this._bestPercent) {
          this._bestPercent = this._lastPercent;
          this._hadNewBest = true;
          this._showNewBest();
        }
      }
      this._player.updateExplosionPieces(_0xaf2ffd);
      this._deathTimer += _0xaf2ffd;
      let _0x237728 = this._hadNewBest ? 0x578 : 0x3e8;
      return void (this._deathTimer > _0x237728 && this._restartLevel());
    }
    this._playTime += _0xaf2ffd / 0x3e8;
    this._audio.update(_0xaf2ffd / 0x3e8);
    this._level.updateAudioScale(this._audio.getMeteringValue());
    let _0x30fa5d = this._quantizeDelta(_0xaf2ffd);
    let _0x5efc2d = _0x30fa5d > 0x0 ? Math.max(0x1, Math.round(0x4 * _0x30fa5d)) : 0x0;
    if (_0x5efc2d > 0x3c) {
      _0x5efc2d = 0x3c;
    }
    let _0x426602 = _0x5efc2d > 0x0 ? _0x30fa5d / _0x5efc2d : 0x0;
    let _0x5caeb1 = _0x426602 * 0.9;
    const _0x23505e = this._state.y;
    for (let _0x26d5d6 = 0x0; _0x26d5d6 < _0x5efc2d; _0x26d5d6++) {
      this._state.lastY = this._state.y;
      this._player.updateJump(_0x5caeb1);
      this._state.y += this._state.yVelocity * _0x5caeb1;
      this._player.checkCollisions(this._playerWorldX - h);
      this._playerWorldX += _0x426602 * 11.540004 * 0.9 * this._speedMul;
      if (!this._state.isFlying) {
        if (this._state.onGround) {
          this._player.updateGroundRotation(_0x5caeb1);
        } else if (this._player.rotateActionActive) {
          this._player.updateRotateAction(0.004166666666666667);
        }
      }
    }
    this._state.lastY = _0x23505e;
    if (!this._endCameraOverride) {
      const _0xe48698 = this._playerWorldX - h;
      if (this._level.endXPos > 0x0) {
        const _0x24670d = this._level.endXPos - r;
        if (_0xe48698 >= _0x24670d - 0xc8) {
          this._endCameraOverride = true;
          this._cameraX = _0xe48698;
          const _0x2e3f0a = -0x8c + (this._level._endPortalGameY || 0xf0);
          const _0x41f777 = _0x2aca75 => _0x2aca75 < 0.5 ? Math.pow(0x2 * _0x2aca75, 1.8) / 0x2 : 0x1 - Math.pow(0x2 * (0x1 - _0x2aca75), 1.8) / 0x2;
          this._endCamTween = {
            p: 0x0,
            fromX: this._cameraX,
            toX: _0x24670d,
            fromY: this._cameraY,
            toY: _0x2e3f0a
          };
          this.tweens.add({
            targets: this._endCamTween,
            p: 0x1,
            duration: 0x4b0,
            ease: _0x41f777
          });
        } else {
          this._cameraX = _0xe48698;
        }
      } else {
        this._cameraX = _0xe48698;
      }
    }
    if (this._endCameraOverride && this._endCamTween) {
      const _0x490838 = this._endCamTween;
      this._cameraX = _0x490838.fromX + (_0x490838.toX - _0x490838.fromX) * _0x490838.p;
      this._cameraY = _0x490838.fromY + (_0x490838.toY - _0x490838.fromY) * _0x490838.p;
    }
    this._cameraXRef._v = this._cameraX;
    if (!this._endCameraOverride) {
      this._updateCameraY(_0x30fa5d);
    }
    this._level.additiveContainer.x = -this._cameraX;
    this._level.additiveContainer.y = this._cameraY;
    this._level.container.x = -this._cameraX;
    this._level.container.y = this._cameraY;
    this._level.topContainer.x = -this._cameraX;
    this._level.topContainer.y = this._cameraY;
    let _0x5464ab = this._playerWorldX;
    this._level.checkMoveTriggers(_0x5464ab);
    this._level.stepMoveTriggers(_0xaf2ffd / 0x3e8);
    for (let _0x2001f6 of this._level.checkColorTriggers(_0x5464ab)) {
      this._colorManager.triggerColor(_0x2001f6.index, _0x2001f6.color, _0x2001f6.duration);
      if (_0x2001f6.tintGround) {
        this._colorManager.triggerColor(0x3e9, _0x2001f6.color, _0x2001f6.duration);
      }
    }
    this._colorManager.step(_0xaf2ffd / 0x3e8);
    this._bg.setTint(this._colorManager.getHex(0x3e8));
    this._level.setGroundColor(this._colorManager.getHex(0x3e9));
    this._level.updateVisibility(this._cameraX);
    this._level.checkEnterEffectTriggers(_0x5464ab);
    this._level.applyEnterEffects(this._cameraX);
    this._glitterCenterX = this._cameraX + r / 0x2;
    this._glitterCenterY = 0x1cc - this._cameraY;
    this._updateBackground();
    this._level.stepGroundAnimation(_0xaf2ffd / 0x3e8);
    this._level.updateGroundTiles(this._cameraY);
    if (this._state.isFlying) {
      this._player.updateShipRotation(_0x30fa5d);
    }
    const _0x259e68 = this._playerWorldX - this._cameraX;
    this._player.syncSprites(this._cameraX, this._cameraY, _0xaf2ffd / 0x3e8, _0x259e68);
  }
  ["_showNewBest"]() {
    let _0x9f2437 = r / 0x2;
    let _0x12bde3 = this.add.image(0x0, 0x0, "GJ_WebSheet", "GJ_newBest_001.png").setOrigin(0.5, 0x1);
    let _0x544c9c = this.add.bitmapText(0x0, 0x2, "bigFont", this._lastPercent + '%', 0x41).setOrigin(0.5, 0x0).setScale(1.1);
    let _0x326cb9 = this.add.container(_0x9f2437, 0x12c, [_0x12bde3, _0x544c9c]).setScrollFactor(0x0).setDepth(0x3c).setScale(0.01);
    this.tweens.add({
      targets: _0x326cb9,
      scale: 0x1,
      duration: 0x190,
      ease: 'Elastic.Out',
      easeParams: [0x1, 0.6],
      onComplete: () => {
        this.tweens.add({
          targets: _0x326cb9,
          scale: 0.01,
          duration: 0xc8,
          delay: 0x2bc,
          ease: 'Quad.In',
          onComplete: () => {
            _0x326cb9.setVisible(false);
            _0x326cb9.destroy();
          }
        });
      }
    });
  }
  ["_triggerEndPortal"]() {
    this._player.playEndAnimation(this._level.endXPos, () => this._levelComplete(), this._endPortalGameY);
  }
  ['_levelComplete']() {
    const _0x356782 = this._level.endXPos - this._cameraX;
    const _0x2d967b = 0x1cc - this._endPortalGameY + this._cameraY;
    for (let _0x481f7c = 0x0; _0x481f7c < 0x5; _0x481f7c++) {
      this.time.delayedCall(0x32 * _0x481f7c, () => _s(this, _0x356782, _0x2d967b, 0xa, r, 0x1f4, false, true, 0xff00));
    }
    _s(this, _0x356782, _0x2d967b, 0xa, 0x3e8, 0x1f4, true, false, 0xff00);
    this._showCompleteEffect();
  }
  ["_showCompleteEffect"]() {
    this._audio.fadeOutMusic(0x5dc);
    this.sound.play("endStart_02", {
      volume: 0.8
    });
    !function (_0x3f5321, _0x8f5267, _0x2f1e2d, _0x4b5e5b) {
      const _0x232789 = Math.round(Math.sqrt(r ** 0x2 + 0x19000)) + 65;
      const _0x487fb1 = -0x87;
      const _0x44369e = Array.from({
        length: 0x8
      }, (_0x18e51d, _0x59ebd4) => _0x487fb1 + _0x59ebd4 * 11.25);
      for (let _0x59890f = _0x44369e.length - 0x1; _0x59890f > 0x0; _0x59890f--) {
        const _0x2bf73b = Math.floor(Math.random() * (_0x59890f + 0x1));
        [_0x44369e[_0x59890f], _0x44369e[_0x2bf73b]] = [_0x44369e[_0x2bf73b], _0x44369e[_0x59890f]];
      }
      let _0x594d69 = 0x0;
      const _0x116c8c = [];
      for (let _0x104cbb = 0x0; _0x104cbb < 0x8; _0x104cbb++) {
        const _0x1a79fc = _0x104cbb * 0xc3 + 0x28 + 0x28 * (0x2 * Math.random() - 0x1);
        const _0x6eb03a = 60 + 40 * (0x2 * Math.random() - 0x1);
        const _0x2e9531 = 0xb4 + 0x28 * (0x2 * Math.random() - 0x1);
        const _0x28e7b3 = Math.min(0x1, Math.max(0x0, 0.6078431372549019 + 0.39215686274509803 * (0x2 * Math.random() - 0x1)));
        const _0x34147c = _0x44369e[_0x104cbb] + 11.25 * Math.random() + 0xb4;
        const _0xf33b0d = _0x3f5321.add.graphics().setScrollFactor(0x0).setDepth(-0x1).setBlendMode(S).setPosition(_0x8f5267, _0x2f1e2d).setAngle(_0x34147c).setAlpha(_0x28e7b3).setVisible(false);
        const _0x496d96 = {
          h: 0x1,
          w: 2
        };
        _0x3f5321.time.delayedCall(Math.max(0x0, _0x1a79fc), () => {
          _0xf33b0d.setVisible(true);
          _0x3f5321.tweens.add({
            targets: _0x496d96,
            h: _0x232789,
            w: _0x6eb03a,
            duration: _0x2e9531,
            ease: "Quad.Out",
            onUpdate: () => {
              _0xf33b0d.clear();
              _0xf33b0d.fillStyle(_0x4b5e5b, 0x1);
              _0xf33b0d.beginPath();
              _0xf33b0d.moveTo(-1, 0x0);
              _0xf33b0d.lineTo(1, 0x0);
              _0xf33b0d.lineTo(1, 0x1);
              _0xf33b0d.lineTo(-1, 0x1);
              _0xf33b0d.closePath();
              _0xf33b0d.fillPath();
            }
          });
        });
        if (_0x1a79fc > _0x594d69) {
          _0x594d69 = _0x1a79fc;
        }
        _0x116c8c.push(_0xf33b0d);
      }
      _0x3f5321.time.delayedCall(_0x594d69 + 0x190, () => {
        for (const _0x15b95e of _0x116c8c) {
          const _0x51b5fc = 0xc8 * Math.random();
          const _0x3ed1de = 0x190 + 0x64 * (0x2 * Math.random() - 0x1);
          _0x3f5321.tweens.add({
            targets: _0x15b95e,
            alpha: 0x0,
            delay: _0x51b5fc,
            duration: _0x3ed1de,
            onComplete: () => _0x15b95e.destroy()
          });
        }
      });
    }(this, this._level.endXPos - this._cameraX + 0x3c, 0x1cc - this._endPortalGameY + this._cameraY, 0xff00);
    this.cameras.main.shake(0x79e, 0.004);
    this.time.delayedCall(0x79e, () => this._showCompleteText());
  }
  ["_showCompleteText"]() {
    const _0x56628c = r / 0x2;
    const _0x45ab26 = this.add.image(_0x56628c, 0xfa, 'GJ_WebSheet', "GJ_levelComplete_001.png").setScrollFactor(0x0).setDepth(0x3c).setScale(0.01);
    this.tweens.add({
      targets: _0x45ab26,
      scale: 1.1,
      duration: 0x294,
      ease: 'Elastic.Out',
      easeParams: [0x1, 0.6],
      onComplete: () => {
        this.tweens.add({
          targets: _0x45ab26,
          scale: 0.01,
          duration: 0xdc,
          delay: 0x370,
          ease: 'Quad.In',
          onComplete: () => {
            _0x45ab26.setVisible(false);
            _0x45ab26.destroy();
          }
        });
      }
    });
    const _0x2884ff = [0xff00, 0xffffff];
    for (let _0x5f16c8 = 0x0; _0x5f16c8 < 0x2; _0x5f16c8++) {
      this.add.particles(_0x56628c, 0xfa, "GJ_WebSheet", {
        frame: "square.png",
        speed: {
          min: 0x12c,
          max: 0x2bc
        },
        angle: {
          min: 0x0,
          max: 0x168
        },
        scale: {
          start: 0.4,
          end: 0.13
        },
        lifespan: {
          min: 0x0,
          max: 0x3e8
        },
        quantity: 0x32,
        stopAfter: 0xc8,
        blendMode: S,
        tint: _0x2884ff[_0x5f16c8],
        x: {
          min: -0x320,
          max: 0x320
        },
        y: {
          min: -0x50,
          max: 0x50
        }
      }).setScrollFactor(0x0).setDepth(0x3b);
    }
    const _0x2eadf2 = this._level.endXPos - this._cameraX;
    const _0x380b24 = 0x1cc - this._endPortalGameY + this._cameraY;
    _s(this, _0x2eadf2, _0x380b24, 0xa, r, 0x320, true, false, 0xff00);
    _s(this, _0x56628c, 0xfa, 0xa, 0x3e8, 0x320, true, false, 0xff00);
    for (let _0x579e05 = 0x0; _0x579e05 < 0x5; _0x579e05++) {
      this.time.delayedCall(0x32 * _0x579e05, () => _s(this, _0x2eadf2, _0x380b24, 0xa, r, 0x1f4, false, true, 0xff00));
    }
    for (let _0x429722 = 0x0; _0x429722 < 0xa; _0x429722++) {
      const _0xbf7dd0 = 0x96 * _0x429722 + (0xa0 * Math.random() - 0x50);
      this.time.delayedCall(Math.max(0x0, _0xbf7dd0), () => ws(this, 0xff00, 0xffff));
    }
    this.time.delayedCall(0x5dc, () => this._showEndLayer());
  }
  ["_showEndLayer"]() {
    if (this._pauseBtn) {
      this.tweens.add({
        targets: this._pauseBtn,
        alpha: 0x0,
        duration: 0x12c
      });
    }
    const _0x384f9e = r / 0x2;
    this._endLayerOverlay = this.add.rectangle(_0x384f9e, 0x140, r, 0x280, 0x0, 0x0).setScrollFactor(0x0).setDepth(0xc8).setInteractive();
    this._endLayerInternal = this.add.container(0x0, -0x280).setScrollFactor(0x0).setDepth(0xc9);
    this.tweens.add({
      targets: this._endLayerOverlay,
      alpha: 0.39215686274509803,
      duration: 0x3e8
    });
    const _0x59b9ab = {
      p: 0x0
    };
    this.tweens.add({
      targets: _0x59b9ab,
      p: 0x1,
      duration: 0x3e8,
      ease: "Bounce.Out",
      onUpdate: () => {
        this._endLayerInternal.y = -640;
      },
      onComplete: () => this._playStarAward()
    });
    const _0x2a115c = (r - 0x2c8) / 0x2;
    this._endLayerInternal.add(this.add.rectangle(_0x2a115c + 0x164, 0x136, 0x2c8, 0x1cc, 0x0, 0.7058823529411765));
    const _0x43f2e3 = this.textures.getFrame("GJ_WebSheet", "GJ_table_side_001.png");
    const _0x3feccc = _0x43f2e3 ? 0x1cc / _0x43f2e3.height : 0x1;
    this._endLayerInternal.add(this.add.image(_0x2a115c - 0x28, 0x50, "GJ_WebSheet", 'GJ_table_side_001.png').setOrigin(0x0, 0x0).setScale(0x1, _0x3feccc));
    this._endLayerInternal.add(this.add.image(_0x2a115c + 0x2c8 + 0x28, 0x50, "GJ_WebSheet", 'GJ_table_side_001.png').setOrigin(0x1, 0x0).setFlipX(true).setScale(0x1, _0x3feccc));
    const _0x33b564 = this.add.image(_0x2a115c + 0x164, 0x46, "GJ_WebSheet", "GJ_table_top_001.png");
    this._endLayerInternal.add(_0x33b564);
    this._endLayerInternal.add(this.add.image(_0x2a115c + 0x164, 0x230, "GJ_WebSheet", "GJ_table_bottom_001.png"));
    const _0x3e9c79 = _0x33b564.y - 0x41;
    this._endLayerInternal.add(this.add.image(_0x384f9e - 0x138, _0x3e9c79, 'GJ_WebSheet', "chain_01_001.png").setOrigin(0.5, 0x1));
    this._endLayerInternal.add(this.add.image(_0x384f9e + 0x138, _0x3e9c79, 'GJ_WebSheet', 'chain_01_001.png').setOrigin(0.5, 0x1));
    this._endLayerInternal.add(this.add.image(_0x384f9e, 0xaa, "GJ_WebSheet", "GJ_levelComplete_001.png").setScale(0.8));
    let _0xe44f6d = 0xfa;
    const _0x2de55e = this.add.bitmapText(_0x384f9e, _0xe44f6d, 'goldFont', "Attempts: " + this._attempts, 0x28).setOrigin(0.5, 0.5).setScale(0.8);
    this._endLayerInternal.add(_0x2de55e);
    _0xe44f6d += 0x30;
    this._endLayerInternal.add(this.add.bitmapText(_0x384f9e, _0xe44f6d, "goldFont", "Jumps: " + this._totalJumps, 0x28).setOrigin(0.5, 0.5).setScale(0.8));
    _0xe44f6d += 0x30;
    const _0x596450 = Math.floor(this._playTime);
    const _0x30687e = Math.floor(_0x596450 / 0xe10);
    const _0x52f8ee = Math.floor(_0x596450 % 0xe10 / 0x3c);
    const _0x2591d0 = _0x596450 % 0x3c;
    let _0x2be782;
    _0x2be782 = _0x30687e > 0x0 ? String(_0x30687e).padStart(0x2, '0') + ':' + String(_0x52f8ee).padStart(0x2, '0') + ':' + String(_0x2591d0).padStart(0x2, '0') : String(_0x52f8ee).padStart(0x2, '0') + ':' + String(_0x2591d0).padStart(0x2, '0');
    const _0x241209 = _0xe44f6d;
    this._endLayerInternal.add(this.add.bitmapText(_0x384f9e, _0xe44f6d, "goldFont", "Time: " + _0x2be782, 0x28).setOrigin(0.5, 0.5).setScale(0.8));
    const _0x452429 = ["Awesome!", "Good\nJob!", "Well\nDone!", "Impressive!", "Amazing!", 'Incredible!', "Skillful!", 'Brilliant!', "Not\nbad!", "Warp\nSpeed!", "Challenge\nBreaker!", "Reflex\nMaster!", "I am\nspeechless...", "You are...\nThe One!", "How is this\npossible!?", "You beat\nme..."];
    const _0x165c06 = _0x452429[Math.floor(Math.random() * _0x452429.length)];
    this._endLayerInternal.add(this.add.bitmapText(_0x384f9e + 0xe1, _0x241209, 'bigFont', _0x165c06, 0x28).setOrigin(0.5, 0.5).setScale(0.8).setCenterAlign());
    this._endLayerInternal.add(this.add.image(_0x384f9e - 0xe1, 352.5, "GJ_WebSheet", 'getIt_001.png').setScale(0.6666666666666666));
    const _0x34b1bd = [{
      key: "downloadApple_001",
      url: "https://apps.apple.com/us/app/geometry-dash/id625334537"
    }, {
      key: "downloadGoogle_001",
      url: "https://play.google.com/store/apps/details?id=com.robtopx.geometryjump&hl=en"
    }, {
      key: "downloadSteam_001",
      url: "https://store.steampowered.com/app/322170/Geometry_Dash"
    }];
    for (let _0x10f8cc = 0x0; _0x10f8cc < _0x34b1bd.length; _0x10f8cc++) {
      const _0xd7310b = _0x34b1bd[_0x10f8cc];
      const _0x1e3f82 = (_0x10f8cc - 0x1) * 0xe1;
      const _0x4c7fb8 = this.add.image(_0x384f9e + _0x1e3f82, 437.5, "GJ_WebSheet", _0xd7310b.key + ".png").setScale(0.6666666666666666).setInteractive();
      this._endLayerInternal.add(_0x4c7fb8);
      this._makeBouncyButton(_0x4c7fb8, 0.6666666666666666, () => window.open(_0xd7310b.url, "_blank"));
    }
    _0x2de55e.width;
    this._endStarX = _0x384f9e + 0xe1;
    this._endStarY = _0x241209 - 77.5;
    const _0x45fc2b = [{
      frame: 'GJ_replayBtn_001.png',
      dx: -0xc8,
      action: () => this._hideEndLayer(() => this._restartLevel())
    }, {
      frame: 'GJ_menuBtn_001.png',
      dx: 0xc8,
      action: () => {
        this._audio.playEffect("quitSound_01");
        this._audio.stopMusic();
        this.game.registry.set("fadeInFromBlack", true);
        this.cameras.main.fadeOut(0x190, 0x0, 0x0, 0x0, (_0x53bf86, _0x15310d) => {
          if (_0x15310d >= 0x1) {
            this.scene.restart();
          }
        });
      }
    }];
    for (const _0x2d4335 of _0x45fc2b) {
      const _0xdde774 = this.add.image(_0x384f9e + _0x2d4335.dx, 0x22b, "GJ_WebSheet", _0x2d4335.frame).setInteractive();
      this._endLayerInternal.add(_0xdde774);
      this._makeBouncyButton(_0xdde774, 0x1, _0x2d4335.action);
    }
  }
  ["_playStarAward"]() {
    if (!this._endLayerInternal) {
      return;
    }
    const _0x4edc03 = this._endStarX;
    const _0x5a0e9 = this._endStarY;
    const _0x453043 = this.add.image(_0x4edc03, _0x5a0e9, "GJ_WebSheet", "GJ_bigStar_001.png").setScale(0x3).setAlpha(0x0);
    this._endLayerInternal.add(_0x453043);
    this.tweens.add({
      targets: _0x453043,
      scale: 0.8,
      alpha: 0x1,
      duration: 0x12c,
      delay: 0x0,
      ease: "Bounce.Out"
    });
    this.time.delayedCall(0x64, () => {
      this._audio.playEffect("highscoreGet02");
      const _0x96e3b2 = _0x5a0e9 + this._endLayerInternal.y;
      this.add.particles(_0x4edc03, _0x96e3b2, "GJ_WebSheet", {
        frame: "square.png",
        speed: {
          min: 0xc8,
          max: 0x258
        },
        angle: {
          min: 0x0,
          max: 0x168
        },
        scale: {
          start: 0.5,
          end: 0x0
        },
        alpha: {
          start: 0x1,
          end: 0x0
        },
        lifespan: {
          min: 0xc8,
          max: 0x258
        },
        quantity: 0x1e,
        stopAfter: 0x1e,
        blendMode: S,
        tint: 0xffff00
      }).setScrollFactor(0x0).setDepth(0xca);
      const _0x43203f = this.add.graphics().setScrollFactor(0x0).setDepth(0xca).setBlendMode(S);
      const _0x403316 = {
        t: 0x0
      };
      this.tweens.add({
        targets: _0x403316,
        t: 0x1,
        duration: 0x190,
        ease: "Quad.Out",
        onUpdate: () => {
          _0x43203f.clear();
          _0x43203f.fillStyle(0xffff00, 1);
          _0x43203f.fillCircle(_0x4edc03, _0x96e3b2, 20);
        },
        onComplete: () => _0x43203f.destroy()
      });
    });
  }
  ["_hideEndLayer"](_0x272eb1) {
    if (!this._endLayerInternal) {
      return void (_0x272eb1 && _0x272eb1());
    }
    const _0x1215e0 = {
      p: 0x0
    };
    this.tweens.add({
      targets: _0x1215e0,
      p: 0x1,
      duration: 0x1f4,
      ease: _0xc1c75 => _0xc1c75 < 0.5 ? Math.pow(0x2 * _0xc1c75, 0x2) / 0x2 : 0x1 - Math.pow(0x2 * (0x1 - _0xc1c75), 0x2) / 0x2,
      onUpdate: () => {
        this._endLayerInternal.y = 0;
      },
      onComplete: () => {
        this._endLayerInternal.destroy();
        this._endLayerInternal = null;
        if (this._endLayerOverlay) {
          this._endLayerOverlay.destroy();
          this._endLayerOverlay = null;
        }
        if (_0x272eb1) {
          _0x272eb1();
        }
      }
    });
    this.tweens.add({
      targets: this._endLayerOverlay,
      alpha: 0x0,
      duration: 0x1f4
    });
  }
}
function _s(_0xae9c8f, _0xe5190e, _0x399b97, _0x3f3165, _0x1f56bc, _0x560f20, _0xb730d4 = false, _0x550b4a = false, _0x4ee8d6 = 0xffffff) {
  const _0x18a510 = _0xae9c8f.add.graphics().setScrollFactor(0x0).setDepth(0x37).setBlendMode(S);
  const _0x3dff3a = {
    r: _0x3f3165,
    t: 0x0
  };
  _0xae9c8f.tweens.add({
    targets: _0x3dff3a,
    r: _0x1f56bc,
    t: 0x1,
    duration: _0x560f20,
    ease: _0xb730d4 && !_0x550b4a ? 'Quad.Out' : "Linear",
    onUpdate: () => {
      const _0x344671 = _0x550b4a ? 0 : 1;
      _0x18a510.clear();
      if (_0xb730d4) {
        _0x18a510.fillStyle(_0x4ee8d6, Math.max(0x0, _0x344671));
        _0x18a510.fillCircle(_0xe5190e, _0x399b97, _0x3dff3a.r);
      } else {
        _0x18a510.lineStyle(0x4, _0x4ee8d6, Math.max(0x0, _0x344671));
        _0x18a510.strokeCircle(_0xe5190e, _0x399b97, _0x3dff3a.r);
      }
    },
    onComplete: () => _0x18a510.destroy()
  });
}
function ws(_0x13c75c, _0x23c5aa = 0xffffff, _0x52bb5b = 0xffffff) {
  const _0x4eb200 = 0xc8 + (r - 0x190) * Math.random();
  const _0x126811 = 0xc8 + 0xf0 * Math.random();
  _s(_0x13c75c, _0x4eb200, _0x126811, 0x28, 0x8c + 0x3c * Math.random(), 0x1f4, true, true, _0x52bb5b);
  _0x13c75c.add.particles(_0x4eb200, _0x126811, "GJ_WebSheet", {
    frame: "square.png",
    speed: {
      min: 0x208,
      max: 0x398
    },
    angle: {
      min: 0x0,
      max: 0x168
    },
    scale: {
      start: 0.4,
      end: 0.13
    },
    alpha: {
      start: 0x1,
      end: 0x0
    },
    lifespan: {
      min: 0x0,
      max: 0x1f4
    },
    stopAfter: 0x19,
    blendMode: S,
    tint: _0x23c5aa,
    x: {
      min: -0x14,
      max: 0x14
    },
    y: {
      min: -0x14,
      max: 0x14
    }
  }).setScrollFactor(0x0).setDepth(0x39);
}

const GAME_CONFIG = {
  type: Phaser.AUTO,
  width: r,
  height: 0x280,
  resolution: 0x1,
  fps: {
    smoothStep: true
  },
  backgroundColor: "#000000",
  parent: document.body,
  input: {
    windowEvents: false
  },
  render: {
    powerPreference: "high-performance"
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [PreloadScene, GameScene]
};
new Phaser.Game(GAME_CONFIG);





