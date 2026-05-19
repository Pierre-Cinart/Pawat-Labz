const ASSET_BASE = "assets/web-games/JetBot";

const CFG = {
  WIDTH: 480,
  HEIGHT: 640,
  GRAVITY: 580,
  JUMP_VELOCITY: -270,
  TOP_CLAMP_Y: -64,
  GAP: 180,
  OBSTACLE_SPEED: -220,
  SPAWN_DELAY: 1400,
  DIFFICULTY_STEP: 10,
  SPEED_INCREMENT: 45,
  SPAWN_DECREMENT: 100,
  MIN_SPAWN_DELAY: 600,
  STARS_COUNT_FAR: 35,
  STARS_COUNT_NEAR: 20,
  LS_BEST: "jetbot_best",
  LS_VOL_MUSIC: "jetbot_vol_music",
  LS_VOL_SFX: "jetbot_vol_sfx"
};

const getCopy = (language = "fr") =>
  language === "fr"
    ? {
        scoreLabel: "Score",
        title: "JET BOT",
        subtitle: "Espace, clic ou tactile pour voler",
        newGame: "NOUVELLE PARTIE",
        creditsLabel: "CREDITS",
        settings: "REGLAGES",
        music: "Musique",
        sounds: "Sons",
        closeLabel: "FERMER",
        creditsTitle: "CREDITS",
        creditsLines: [
          "Jeu, code, visuels et autres sons : Pawat_Gaming (Pawat Labz)",
          "Musique gameplay : Next to You - Joth - OpenGameArt.org - CC0",
          "Son game over : KL Peach Game Over III - KLY - OpenGameArt.org - CC0"
        ],
        gameOver: "GAME OVER",
        bestScore: "Meilleur score",
        newRecord: "Nouveau record !",
        replay: "REJOUER",
        pause: "PAUSE",
        continueLabel: "CONTINUER",
        quitLabel: "QUITTER",
        quitHint: "Quitter renvoie a la section mini-jeux.",
        pending: "Appuie sur Start pour lancer le flux."
      }
    : {
        scoreLabel: "Score",
        title: "JET BOT",
        subtitle: "Space, click or touch to fly",
        newGame: "NEW GAME",
        creditsLabel: "CREDITS",
        settings: "SETTINGS",
        music: "Music",
        sounds: "Sounds",
        closeLabel: "CLOSE",
        creditsTitle: "CREDITS",
        creditsLines: [
          "Game, code, visuals and other sounds: Pawat_Gaming (Pawat Labz)",
          "Gameplay music: Next to You - Joth - OpenGameArt.org - CC0",
          "Game over sound: KL Peach Game Over III - KLY - OpenGameArt.org - CC0"
        ],
        gameOver: "GAME OVER",
        bestScore: "Best score",
        newRecord: "New best!",
        replay: "PLAY AGAIN",
        pause: "PAUSE",
        continueLabel: "CONTINUE",
        quitLabel: "QUIT",
        quitHint: "Quit returns to the mini-games page.",
        pending: "Press Start to launch the flow."
      };

export const mountJetBotGame = ({ mountNode, language = "fr", onQuit = () => {} }) => {
  const Phaser = window.Phaser;

  if (!Phaser) {
    throw new Error("Phaser is not loaded.");
  }

  if (!mountNode) {
    throw new Error("Jet Bot mount node is missing.");
  }

  const copy = getCopy(language);
  let player;
  let obstacles;
  let scoreText;
  let gameRef = null;
  let score = 0;
  let gameOver = false;
  let bestScore = 0;

  const config = {
    type: Phaser.AUTO,
    width: CFG.WIDTH,
    height: CFG.HEIGHT,
    parent: mountNode,
    backgroundColor: "#000000",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: CFG.WIDTH,
      height: CFG.HEIGHT
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    },
    scene: {
      preload,
      create,
      update
    }
  };

  function preload() {
    this.load.spritesheet("bot", `${ASSET_BASE}/sprites/bot.png`, {
      frameWidth: 64,
      frameHeight: 64
    });
    this.load.image("obstacle", `${ASSET_BASE}/sprites/obstacle.png`);
    this.load.audio("music", [`${ASSET_BASE}/audio/music/next-to-you.mp3`]);
    this.load.audio("jump", [`${ASSET_BASE}/audio/sfx/jump.mp3`]);
    this.load.audio("gameover", [`${ASSET_BASE}/audio/sfx/game-over.mp3`]);
  }

  function create() {
    score = 0;
    gameOver = false;
    bestScore = parseInt(window.localStorage.getItem(CFG.LS_BEST) || "0", 10);

    createStars.call(this);

    obstacles = this.physics.add.group();

    player = this.physics.add.sprite(120, CFG.HEIGHT / 2, "bot", 0).setDepth(10);
    player.body.setSize(38, 48).setOffset(13, 8);
    player.setGravityY(0);

    this.anims.create({ key: "idle", frames: [{ key: "bot", frame: 0 }], frameRate: 1 });
    this.anims.create({
      key: "fall",
      frames: this.anims.generateFrameNumbers("bot", { start: 1, end: 4 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "jump",
      frames: this.anims.generateFrameNumbers("bot", { start: 4, end: 8 }),
      frameRate: 14,
      repeat: 0
    });
    player.play("idle");

    const baseStyle = {
      fontSize: "28px",
      fill: "#ffffff",
      stroke: "#000000",
      strokeThickness: 4
    };
    const menuObjects = [];
    const trackMenuObject = (object) => {
      menuObjects.push(object);
      return object;
    };
    const makeMenuButton = (y, label, backgroundColor = "#1e90ff") => {
      const button = trackMenuObject(
        this.add
          .text(CFG.WIDTH / 2, y, `  ${label}  `, {
            fontSize: "22px",
            fill: "#ffffff",
            backgroundColor,
            padding: { x: 16, y: 10 }
          })
          .setOrigin(0.5)
          .setInteractive({ useHandCursor: true })
          .setDepth(50)
      );

      button
        .on("pointerover", () => button.setStyle({ backgroundColor: "#4169e1" }))
        .on("pointerout", () => button.setStyle({ backgroundColor }));

      return button;
    };
    this.menuObjects = menuObjects;

    scoreText = this.add.text(20, 20, `${copy.scoreLabel} : 0`, baseStyle).setDepth(50);

    trackMenuObject(
      this.add
        .text(CFG.WIDTH / 2, 190, copy.title, {
          ...baseStyle,
          fontSize: "56px",
          fill: "#00eaff"
        })
        .setOrigin(0.5)
        .setDepth(50)
    );

    trackMenuObject(
      this.add
        .text(CFG.WIDTH / 2, 255, copy.subtitle, {
          fontSize: "16px",
          fill: "#888888"
        })
        .setOrigin(0.5)
        .setDepth(50)
    );

    const newGameBtn = makeMenuButton(320, copy.newGame);
    const creditsBtn = makeMenuButton(378, copy.creditsLabel, "#0a5575");
    const quitBtn = makeMenuButton(436, copy.quitLabel, "#8f243f");

    newGameBtn.on("pointerdown", () => startGame.call(this));
    creditsBtn.on("pointerdown", () => toggleCredits.call(this));
    quitBtn
      .on("pointerover", () => quitBtn.setStyle({ backgroundColor: "#b12d4e" }))
      .on("pointerout", () => quitBtn.setStyle({ backgroundColor: "#8f243f" }))
      .on("pointerdown", () => {
        this.sound.stopAll();
        onQuit();
      });

    if (bestScore > 0) {
      trackMenuObject(
        this.add
          .text(CFG.WIDTH / 2, 500, `${copy.bestScore} : ${bestScore}`, {
            fontSize: "18px",
            fill: "#ffd700"
          })
          .setOrigin(0.5)
          .setDepth(50)
      );
    }

    this.volMusic = parseFloat(window.localStorage.getItem(CFG.LS_VOL_MUSIC) ?? "0.4");
    this.volSfx = parseFloat(window.localStorage.getItem(CFG.LS_VOL_SFX) ?? "0.8");

    this.bgMusic = this.cache.audio.has("music")
      ? this.sound.add("music", { loop: true, volume: this.volMusic })
      : null;
    this.jumpSfx = this.cache.audio.has("jump")
      ? this.sound.add("jump", { volume: this.volSfx })
      : null;
    this.gameoverSfx = this.cache.audio.has("gameover")
      ? this.sound.add("gameover", { volume: this.volSfx })
      : null;

    this.input.keyboard.on("keydown-SPACE", () => flap.call(this));
    this.input.keyboard.on("keydown-ESC", () => togglePause.call(this));
    this.input.on("pointerdown", () => flap.call(this));

    createSettingsButton.call(this);
    createCreditsOverlay.call(this);
    createPauseOverlay.call(this);

    this.events.once("shutdown", () => {
      this.sound.stopAll();
    });
  }

  function createStars() {
    const gSmall = this.add.graphics();
    gSmall.fillStyle(0xffffff, 1).fillCircle(1, 1, 1);
    gSmall.generateTexture("starSmall", 3, 3);
    gSmall.destroy();

    const gBig = this.add.graphics();
    gBig.fillStyle(0xffffff, 1).fillCircle(2, 2, 2);
    gBig.generateTexture("starBig", 5, 5);
    gBig.destroy();

    this.stars = [];

    for (let index = 0; index < CFG.STARS_COUNT_FAR; index += 1) {
      const star = this.add
        .image(
          Phaser.Math.Between(0, CFG.WIDTH),
          Phaser.Math.Between(0, CFG.HEIGHT),
          "starSmall"
        )
        .setAlpha(Phaser.Math.FloatBetween(0.2, 0.55))
        .setDepth(0);
      star.scrollSpeed = Phaser.Math.FloatBetween(0.15, 0.45);
      this.stars.push(star);
    }

    for (let index = 0; index < CFG.STARS_COUNT_NEAR; index += 1) {
      const star = this.add
        .image(
          Phaser.Math.Between(0, CFG.WIDTH),
          Phaser.Math.Between(0, CFG.HEIGHT),
          "starBig"
        )
        .setAlpha(Phaser.Math.FloatBetween(0.5, 1))
        .setDepth(1);
      star.scrollSpeed = Phaser.Math.FloatBetween(0.6, 1.3);
      this.stars.push(star);
    }
  }

  function startGame() {
    score = 0;
    gameOver = false;
    this.pauseOpen = false;
    this.creditsOpen = false;
    this.menuObjects.forEach((object) => object.destroy());
    this.menuObjects = [];
    this.creditsObjects.forEach((object) => object.setVisible(false));
    scoreText.setText(`${copy.scoreLabel} : 0`);
    obstacles.clear(true, true);

    this.obstacleSpeed = CFG.OBSTACLE_SPEED;
    this.spawnInterval = CFG.SPAWN_DELAY;
    this.lastDiffLevel = 0;

    player.setGravityY(CFG.GRAVITY);
    player.setVelocity(0, 0);
    player.setPosition(120, CFG.HEIGHT / 2);
    player.setAlpha(1);
    player.setAngle(0);
    player.play("fall");

    if (this.spawnTimer) {
      this.spawnTimer.remove(false);
    }

    this.spawnTimer = this.time.addEvent({
      delay: this.spawnInterval,
      callback: spawnObstacles,
      callbackScope: this,
      loop: true
    });

    if (this.bgMusic && !this.bgMusic.isPlaying) {
      this.bgMusic.play();
    }
  }

  function flap() {
    if (this.settingsOpen || this.pauseOpen || gameOver || player.body.gravity.y === 0) {
      return;
    }

    player.setVelocityY(CFG.JUMP_VELOCITY);
    player.play("jump", true);

    if (this.jumpSfx && !this.jumpSfx.isPlaying) {
      this.jumpSfx.play();
    }
  }

  function spawnObstacles() {
    const halfGap = CFG.GAP / 2;
    const gapY = Phaser.Math.Between(130, CFG.HEIGHT - 130);

    const top = obstacles
      .create(CFG.WIDTH + 20, gapY - halfGap, "obstacle")
      .setOrigin(0, 1)
      .setFlipY(true)
      .setImmovable(true)
      .setDepth(5);
    top.body.allowGravity = false;
    top.body.setSize(top.width - 8, top.height - 8);
    top.setVelocityX(this.obstacleSpeed);

    const bottom = obstacles
      .create(CFG.WIDTH + 20, gapY + halfGap, "obstacle")
      .setOrigin(0, 0)
      .setImmovable(true)
      .setDepth(5);
    bottom.body.allowGravity = false;
    bottom.body.setSize(bottom.width - 8, bottom.height - 8);
    bottom.setVelocityX(this.obstacleSpeed);

    obstacles.getChildren().forEach((obstacle) => {
      if (obstacle.x + obstacle.width < 0) {
        obstacle.destroy();
      }
    });
  }

  function update() {
    this.stars.forEach((star) => {
      star.x -= star.scrollSpeed;

      if (star.x < -6) {
        star.x = CFG.WIDTH + 6;
      }
    });

    if (gameOver || this.pauseOpen || player.body.gravity.y === 0) {
      return;
    }

    if (player.y > CFG.HEIGHT + 20) {
      endGame.call(this);
      return;
    }

    if (player.y < CFG.TOP_CLAMP_Y) {
      player.setY(CFG.TOP_CLAMP_Y);
      player.setVelocityY(0);
    }

    if (player.body.velocity.y > 80 && player.anims.currentAnim?.key === "jump") {
      player.play("fall", true);
    }

    const targetAngle = Phaser.Math.Clamp(player.body.velocity.y * 0.07, -25, 45);
    player.angle = Phaser.Math.Linear(player.angle, targetAngle, 0.15);

    obstacles.getChildren().forEach((obstacle) => {
      if (!obstacle.scored && obstacle.x + obstacle.width < player.x) {
        obstacle.scored = true;
        score += 0.5;
        scoreText.setText(`${copy.scoreLabel} : ${Math.floor(score)}`);
      }
    });

    const currentLevel = Math.floor(score / CFG.DIFFICULTY_STEP);

    if (currentLevel > this.lastDiffLevel) {
      this.lastDiffLevel = currentLevel;
      this.obstacleSpeed -= CFG.SPEED_INCREMENT;
      this.spawnInterval = Math.max(this.spawnInterval - CFG.SPAWN_DECREMENT, CFG.MIN_SPAWN_DELAY);

      obstacles.getChildren().forEach((obstacle) => obstacle.setVelocityX(this.obstacleSpeed));

      if (this.spawnTimer) {
        this.spawnTimer.remove(false);
      }

      this.spawnTimer = this.time.addEvent({
        delay: this.spawnInterval,
        callback: spawnObstacles,
        callbackScope: this,
        loop: true
      });
    }

    this.physics.overlap(player, obstacles, () => {
      if (!gameOver) {
        endGame.call(this);
      }
    });
  }

  function endGame() {
    gameOver = true;

    if (this.spawnTimer) {
      this.spawnTimer.remove(false);
      this.spawnTimer = null;
    }

    obstacles.setVelocityX(0);
    player.setVelocityY(0);
    player.setGravityY(0);

    const finalScore = Math.floor(score);
    const isNewBest = finalScore > bestScore;

    if (isNewBest) {
      bestScore = finalScore;
      window.localStorage.setItem(CFG.LS_BEST, String(bestScore));
    }

    if (this.bgMusic?.isPlaying) {
      this.bgMusic.stop();
    }

    if (this.gameoverSfx) {
      this.gameoverSfx.play();
    }

    this.add
      .rectangle(CFG.WIDTH / 2, CFG.HEIGHT / 2, CFG.WIDTH, CFG.HEIGHT, 0x000000, 0.6)
      .setDepth(40);

    this.add
      .text(CFG.WIDTH / 2, 190, copy.gameOver, {
        fontSize: "48px",
        fill: "#ff4444",
        stroke: "#000",
        strokeThickness: 5
      })
      .setOrigin(0.5)
      .setDepth(51);

    this.add
      .text(CFG.WIDTH / 2, 270, `${copy.scoreLabel} : ${finalScore}`, {
        fontSize: "32px",
        fill: "#ffffff",
        stroke: "#000",
        strokeThickness: 4
      })
      .setOrigin(0.5)
      .setDepth(51);

    if (isNewBest) {
      this.add
        .text(CFG.WIDTH / 2, 330, copy.newRecord, {
          fontSize: "22px",
          fill: "#ffd700",
          stroke: "#000",
          strokeThickness: 3
        })
        .setOrigin(0.5)
        .setDepth(51);
    }

    this.add
      .text(CFG.WIDTH / 2, 378, `${copy.bestScore} : ${bestScore}`, {
        fontSize: "20px",
        fill: "#aaaaaa",
        stroke: "#000",
        strokeThickness: 3
      })
      .setOrigin(0.5)
      .setDepth(51);

    const replayBtn = this.add
      .text(CFG.WIDTH / 2, 455, `  ${copy.replay}  `, {
        fontSize: "24px",
        fill: "#ffffff",
        backgroundColor: "#1e90ff",
        padding: { x: 18, y: 10 }
      })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .setDepth(51);

    replayBtn
      .on("pointerover", () => replayBtn.setStyle({ backgroundColor: "#4169e1" }))
      .on("pointerout", () => replayBtn.setStyle({ backgroundColor: "#1e90ff" }))
      .on("pointerdown", () => this.scene.restart());

    this.time.delayedCall(5000, () => {
      if (gameOver) {
        this.scene.restart();
      }
    });
  }

  function createSettingsButton() {
    this.settingsOpen = false;
    const button = this.add
      .text(CFG.WIDTH - 14, 14, "⚙", {
        fontSize: "26px",
        fill: "#666666"
      })
      .setOrigin(1, 0)
      .setInteractive({ useHandCursor: true })
      .setDepth(90);

    button.on("pointerover", () => button.setFill("#ffffff"));
    button.on("pointerout", () => button.setFill(this.settingsOpen ? "#ffffff" : "#666666"));
    button.on("pointerdown", () => toggleSettings.call(this, button));

    this.settingsBtn = button;
    buildSettingsPanel.call(this);
  }

  function buildSettingsPanel() {
    const panelWidth = 300;
    const panelHeight = 210;
    const panelX = CFG.WIDTH / 2;
    const panelY = CFG.HEIGHT / 2 - 20;
    this.panelObjects = [];

    const store = (object) => {
      this.panelObjects.push(object);
      return object;
    };

    store(
      this.add
        .rectangle(panelX, panelY, panelWidth, panelHeight, 0x111122, 0.95)
        .setStrokeStyle(2, 0x3355aa)
        .setDepth(95)
    );

    store(
      this.add
        .text(panelX, panelY - panelHeight / 2 + 22, copy.settings, {
          fontSize: "20px",
          fill: "#00eaff"
        })
        .setOrigin(0.5)
        .setDepth(96)
    );

    const closeBtn = store(
      this.add
        .text(panelX + panelWidth / 2 - 14, panelY - panelHeight / 2 + 14, "×", {
          fontSize: "26px",
          fill: "#888888"
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .setDepth(96)
    );

    closeBtn.on("pointerover", () => closeBtn.setFill("#ffffff"));
    closeBtn.on("pointerout", () => closeBtn.setFill("#888888"));
    closeBtn.on("pointerdown", () => toggleSettings.call(this, this.settingsBtn));

    const rowMusicY = panelY - 30;
    const rowSfxY = panelY + 50;

    store(
      this.add
        .text(panelX - panelWidth / 2 + 20, rowMusicY, copy.music, {
          fontSize: "16px",
          fill: "#cccccc"
        })
        .setOrigin(0, 0.5)
        .setDepth(96)
    );

    const musicBar = store(
      this.add.text(panelX - 10, rowMusicY, "", {
        fontSize: "14px",
        fill: "#00eaff"
      })
    )
      .setOrigin(0.5, 0.5)
      .setDepth(96);

    const musicPct = store(
      this.add.text(panelX + panelWidth / 2 - 60, rowMusicY, "", {
        fontSize: "15px",
        fill: "#ffffff"
      })
    )
      .setOrigin(0.5, 0.5)
      .setDepth(96);

    const musicMinus = store(
      this.add
        .text(panelX - panelWidth / 2 + 100, rowMusicY, "[-]", {
          fontSize: "16px",
          fill: "#aaaaaa"
        })
        .setOrigin(0.5, 0.5)
        .setInteractive({ useHandCursor: true })
        .setDepth(96)
    );

    const musicPlus = store(
      this.add
        .text(panelX + panelWidth / 2 - 20, rowMusicY, "[+]", {
          fontSize: "16px",
          fill: "#aaaaaa"
        })
        .setOrigin(0.5, 0.5)
        .setInteractive({ useHandCursor: true })
        .setDepth(96)
    );

    store(
      this.add
        .text(panelX - panelWidth / 2 + 20, rowSfxY, copy.sounds, {
          fontSize: "16px",
          fill: "#cccccc"
        })
        .setOrigin(0, 0.5)
        .setDepth(96)
    );

    const sfxBar = store(
      this.add.text(panelX - 10, rowSfxY, "", {
        fontSize: "14px",
        fill: "#00eaff"
      })
    )
      .setOrigin(0.5, 0.5)
      .setDepth(96);

    const sfxPct = store(
      this.add.text(panelX + panelWidth / 2 - 60, rowSfxY, "", {
        fontSize: "15px",
        fill: "#ffffff"
      })
    )
      .setOrigin(0.5, 0.5)
      .setDepth(96);

    const sfxMinus = store(
      this.add
        .text(panelX - panelWidth / 2 + 100, rowSfxY, "[-]", {
          fontSize: "16px",
          fill: "#aaaaaa"
        })
        .setOrigin(0.5, 0.5)
        .setInteractive({ useHandCursor: true })
        .setDepth(96)
    );

    const sfxPlus = store(
      this.add
        .text(panelX + panelWidth / 2 - 20, rowSfxY, "[+]", {
          fontSize: "16px",
          fill: "#aaaaaa"
        })
        .setOrigin(0.5, 0.5)
        .setInteractive({ useHandCursor: true })
        .setDepth(96)
    );

    const makeBar = (volume) => {
      const filled = Math.round(volume * 10);
      return "█".repeat(filled) + "░".repeat(10 - filled);
    };

    const refreshMusic = () => {
      const percent = Math.round(this.volMusic * 100);
      musicBar.setText(makeBar(this.volMusic));
      musicPct.setText(`${percent}%`);
    };

    const refreshSfx = () => {
      const percent = Math.round(this.volSfx * 100);
      sfxBar.setText(makeBar(this.volSfx));
      sfxPct.setText(`${percent}%`);
    };

    refreshMusic();
    refreshSfx();

    const bindHover = (button) => {
      button.on("pointerover", () => button.setFill("#ffffff"));
      button.on("pointerout", () => button.setFill("#aaaaaa"));
    };

    [musicMinus, musicPlus, sfxMinus, sfxPlus].forEach(bindHover);

    musicMinus.on("pointerdown", () => {
      this.volMusic = Math.max(0, parseFloat((this.volMusic - 0.1).toFixed(1)));
      if (this.bgMusic) {
        this.bgMusic.setVolume(this.volMusic);
      }
      window.localStorage.setItem(CFG.LS_VOL_MUSIC, String(this.volMusic));
      refreshMusic();
    });

    musicPlus.on("pointerdown", () => {
      this.volMusic = Math.min(1, parseFloat((this.volMusic + 0.1).toFixed(1)));
      if (this.bgMusic) {
        this.bgMusic.setVolume(this.volMusic);
      }
      window.localStorage.setItem(CFG.LS_VOL_MUSIC, String(this.volMusic));
      refreshMusic();
    });

    sfxMinus.on("pointerdown", () => {
      this.volSfx = Math.max(0, parseFloat((this.volSfx - 0.1).toFixed(1)));
      if (this.jumpSfx) {
        this.jumpSfx.setVolume(this.volSfx);
      }
      if (this.gameoverSfx) {
        this.gameoverSfx.setVolume(this.volSfx);
      }
      window.localStorage.setItem(CFG.LS_VOL_SFX, String(this.volSfx));
      refreshSfx();
    });

    sfxPlus.on("pointerdown", () => {
      this.volSfx = Math.min(1, parseFloat((this.volSfx + 0.1).toFixed(1)));
      if (this.jumpSfx) {
        this.jumpSfx.setVolume(this.volSfx);
      }
      if (this.gameoverSfx) {
        this.gameoverSfx.setVolume(this.volSfx);
      }
      window.localStorage.setItem(CFG.LS_VOL_SFX, String(this.volSfx));
      refreshSfx();
    });

    this.panelObjects.forEach((object) => object.setVisible(false));
    this.refreshMusicBar = refreshMusic;
    this.refreshSfxBar = refreshSfx;
  }

  function toggleSettings(gearBtn) {
    if (this.pauseOpen || this.creditsOpen) {
      return;
    }

    this.settingsOpen = !this.settingsOpen;
    this.panelObjects.forEach((object) => object.setVisible(this.settingsOpen));
    gearBtn.setFill(this.settingsOpen ? "#ffffff" : "#666666");

    if (this.settingsOpen) {
      this.refreshMusicBar();
      this.refreshSfxBar();
    }
  }

  function createCreditsOverlay() {
    this.creditsOpen = false;
    this.creditsObjects = [];

    const store = (object) => {
      this.creditsObjects.push(object);
      return object;
    };

    store(
      this.add
        .rectangle(CFG.WIDTH / 2, CFG.HEIGHT / 2, CFG.WIDTH, CFG.HEIGHT, 0x000000, 0.68)
        .setInteractive()
        .setDepth(105)
    );

    store(
      this.add
        .rectangle(CFG.WIDTH / 2, CFG.HEIGHT / 2, 400, 330, 0x08111a, 0.96)
        .setStrokeStyle(2, 0x00d4ff)
        .setDepth(106)
    );

    store(
      this.add
        .text(CFG.WIDTH / 2, 205, copy.creditsTitle, {
          fontSize: "28px",
          fill: "#00eaff",
          stroke: "#000000",
          strokeThickness: 3
        })
        .setOrigin(0.5)
        .setDepth(107)
    );

    copy.creditsLines.forEach((line, index) => {
      store(
        this.add
          .text(CFG.WIDTH / 2, 265 + index * 56, line, {
            fontSize: "15px",
            fill: "#d8f7ff",
            align: "center",
            wordWrap: { width: 330 }
          })
          .setOrigin(0.5)
          .setDepth(107)
      );
    });

    const closeBtn = store(
      this.add
        .text(CFG.WIDTH / 2, 485, `  ${copy.closeLabel}  `, {
          fontSize: "20px",
          fill: "#ffffff",
          backgroundColor: "#0a5575",
          padding: { x: 16, y: 9 }
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .setDepth(107)
    );

    closeBtn
      .on("pointerover", () => closeBtn.setStyle({ backgroundColor: "#1382ad" }))
      .on("pointerout", () => closeBtn.setStyle({ backgroundColor: "#0a5575" }))
      .on("pointerdown", () => toggleCredits.call(this, false));

    this.creditsObjects.forEach((object) => object.setVisible(false));
  }

  function toggleCredits(forceOpen = null) {
    if (this.settingsOpen || this.pauseOpen || player.body.gravity.y !== 0) {
      return;
    }

    this.creditsOpen = forceOpen === null ? !this.creditsOpen : forceOpen;
    this.creditsObjects.forEach((object) => object.setVisible(this.creditsOpen));
  }

  function createPauseOverlay() {
    this.pauseOpen = false;
    this.pauseObjects = [];

    const store = (object) => {
      this.pauseObjects.push(object);
      return object;
    };

    store(
      this.add
        .rectangle(CFG.WIDTH / 2, CFG.HEIGHT / 2, CFG.WIDTH, CFG.HEIGHT, 0x000000, 0.68)
        .setDepth(120)
    );

    store(
      this.add
        .rectangle(CFG.WIDTH / 2, CFG.HEIGHT / 2, 320, 250, 0x08111a, 0.94)
        .setStrokeStyle(2, 0x00d4ff)
        .setDepth(121)
    );

    store(
      this.add
        .text(CFG.WIDTH / 2, 225, copy.pause, {
          fontSize: "34px",
          fill: "#ffffff",
          stroke: "#000000",
          strokeThickness: 4
        })
        .setOrigin(0.5)
        .setDepth(122)
    );

    store(
      this.add
        .text(CFG.WIDTH / 2, 270, copy.quitHint, {
          fontSize: "15px",
          fill: "#8ca0b1",
          align: "center",
          wordWrap: { width: 250 }
        })
        .setOrigin(0.5)
        .setDepth(122)
    );

    const continueBtn = store(
      this.add
        .text(CFG.WIDTH / 2, 345, `  ${copy.continueLabel}  `, {
          fontSize: "22px",
          fill: "#ffffff",
          backgroundColor: "#138d5b",
          padding: { x: 18, y: 10 }
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .setDepth(122)
    );

    const quitBtn = store(
      this.add
        .text(CFG.WIDTH / 2, 410, `  ${copy.quitLabel}  `, {
          fontSize: "21px",
          fill: "#ffffff",
          backgroundColor: "#8f243f",
          padding: { x: 18, y: 10 }
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .setDepth(122)
    );

    continueBtn
      .on("pointerover", () => continueBtn.setStyle({ backgroundColor: "#18a76b" }))
      .on("pointerout", () => continueBtn.setStyle({ backgroundColor: "#138d5b" }))
      .on("pointerdown", () => togglePause.call(this, false));

    quitBtn
      .on("pointerover", () => quitBtn.setStyle({ backgroundColor: "#b12d4e" }))
      .on("pointerout", () => quitBtn.setStyle({ backgroundColor: "#8f243f" }))
      .on("pointerdown", () => {
        this.sound.stopAll();
        onQuit();
      });

    this.pauseObjects.forEach((object) => object.setVisible(false));
  }

  function togglePause(forceToggle = true) {
    if (this.settingsOpen || gameOver || player.body.gravity.y === 0) {
      return;
    }

    this.pauseOpen = forceToggle ? !this.pauseOpen : false;
    this.pauseObjects.forEach((object) => object.setVisible(this.pauseOpen));

    if (this.pauseOpen) {
      this.physics.world.pause();
      if (this.spawnTimer) {
        this.spawnTimer.paused = true;
      }
      this.sound.pauseAll();
      return;
    }

    this.physics.world.resume();
    if (this.spawnTimer) {
      this.spawnTimer.paused = false;
    }
    this.sound.resumeAll();
  }

  gameRef = new Phaser.Game(config);

  return () => {
    if (gameRef) {
      gameRef.destroy(true);
      gameRef = null;
    }

    mountNode.innerHTML = "";
  };
};
