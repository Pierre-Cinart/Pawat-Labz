export const musicContent = {
  fr: {
    musique: {
            kicker: "SECTION 01",
            title: "Musique",
            text: "Catalogue audio, instrus, clips, actualités musique et projets à venir.",
            badge: "AUDIO"
          },
    pageHighlights: {
      musique: [
            "Catalogue audio et instrus",
            "Sections clips, projets, feats/cyphers, instrus et réseaux"
          ]
    },
    musicHub: {
          introLabel: "Exploration musique",
          introTitle: "Choisis une rubrique pour faire apparaitre son point d'entree sonore.",
          introText:
            "La section musique va se structurer autour des memes portes d'entree que celles deja visibles dans le site : projets, clips, feat/cypher, instrus et reseaux.",
          categoryKicker: "SIGNAL AUDIO",
          entryKicker: "CLIP MUSICAL",
          imageLabel: "Image",
          entryButtons: {
            external: "Écouter"
          },
          emptyState: "Cette rubrique pourra accueillir plusieurs clips plus tard.",
          categories: [
            {
              id: "projets",
              label: "Projets",
              title: "Projets",
              description: "Espace dedie aux morceaux construits, a l'ecriture sonore globale et aux projets qui prennent une vraie forme finale.",
              highlights: [
                "Tracks finalises ou en evolution",
                "Assemblage entre voix, instrumental et univers",
                "Sorties du labo et projets pilotes"
              ]
            },
            {
              id: "clips",
              label: "Clips",
              title: "Clips",
              displayMode: "showcase",
              description: "La musique ne reste pas seule : elle dialogue avec l'image, le montage et les formats video lies au labo.",
              highlights: [
                "Pont direct entre son et image",
                "Clips musicaux et formats hybrides",
                "Passerelle naturelle vers la section Animation"
              ],
              entries: [
                {
                  title: "MALABARZ",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/_RjHrjYH0bs/maxresdefault.jpg",
                  imageAlt: "Miniature MALABARZ",
                  typeLabel: "CLIP RAP",
                  context: "Artiste : Wampawat feat Nino — Instru : Tysha — Clip : Pawat_TV",
                  youtubeId: "_RjHrjYH0bs",
                  externalUrl: "https://www.youtube.com/watch?v=_RjHrjYH0bs"
                },
                {
                  title: "SANDERS TOUS ENSEMBLE",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/H9kXElI4U24/maxresdefault.jpg",
                  imageAlt: "Miniature SANDERS TOUS ENSEMBLE",
                  typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
                  context: "Artiste : SANDERS — Instru : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
                  youtubeId: "H9kXElI4U24",
                  externalUrl: "https://www.youtube.com/watch?v=H9kXElI4U24"
                },
                {
                  title: "SHEIN B TOUS ENSEMBLE",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/SXhbD9AEaGY/maxresdefault.jpg",
                  imageAlt: "Miniature SHEIN B TOUS ENSEMBLE",
                  typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
                  context: "Artiste : Shein B — Instru : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
                  youtubeId: "SXhbD9AEaGY",
                  externalUrl: "https://www.youtube.com/watch?v=SXhbD9AEaGY"
                },
                {
                  title: "KAMEO TOUS ENSEMBLE",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/JrTGw8cbWj8/maxresdefault.jpg",
                  imageAlt: "Miniature KAMEO TOUS ENSEMBLE",
                  typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
                  context: "Artiste : KAMEO — Instru : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
                  youtubeId: "JrTGw8cbWj8",
                  externalUrl: "https://www.youtube.com/watch?v=JrTGw8cbWj8"
                },
                {
                  title: "WAMPAWAT TOUS ENSEMBLE",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/-Gq8e5jIKWk/maxresdefault.jpg",
                  imageAlt: "Miniature WAMPAWAT TOUS ENSEMBLE",
                  typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
                  context: "Artiste : Wampawat — Instru : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
                  youtubeId: "-Gq8e5jIKWk",
                  externalUrl: "https://www.youtube.com/watch?v=-Gq8e5jIKWk"
                },
                {
                  title: "BGE TOUS ENSEMBLE",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/4yc6VFMwRME/maxresdefault.jpg",
                  imageAlt: "Miniature BGE TOUS ENSEMBLE",
                  typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
                  context: "Artiste : BGE — Instru : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
                  youtubeId: "4yc6VFMwRME",
                  externalUrl: "https://www.youtube.com/watch?v=4yc6VFMwRME"
                },
                {
                  title: "OLD SCHOOL CYPHER",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/fNPp0caMptc/maxresdefault.jpg",
                  imageAlt: "Miniature OLD SCHOOL CYPHER",
                  typeLabel: "EXPERIMENTAL ANIMATED MUSIC CLIP",
                  context: "Artistes : Process lvx, BGE, Malro, Kameo, Inconiko, Pawat — Instru : Pawat_Music — Clip : Pawat_TV",
                  youtubeId: "fNPp0caMptc",
                  externalUrl: "https://www.youtube.com/watch?v=fNPp0caMptc"
                }
              ]
            },
            {
              id: "feat-cypher",
              label: "Feat/Cypher",
              title: "Feat/Cypher",
              description: "Collaborations, cyphers, croisements d'energie et moments collectifs qui etendent le terrain du labo.",
              displayMode: "library",
              library: {
                introLabel: "ARCHIVES COLLECTIVES",
                introTitle: "Cyphers, feats et dossiers ouverts",
                introText:
                  "Cette zone regroupe les rencontres rap du labo : formats collectifs, collaborations vocales et dossiers en construction comme La RE-7.",
                statusLabel: "AUDIO ONLINE",
                subsectionLabel: "Canaux",
                sectionKicker: "Signal collectif",
                dossierKicker: "Dossier cypher",
                trackKicker: "Signal audio",
                trackButtonMore: "Lire plus",
                trackButtonLess: "Refermer",
                audioLabel: "Lecture",
                artistsLabel: "Artistes",
                beatmakerLabel: "Beatmaker",
                folders: [
                  {
                    id: "la-re-7",
                    label: "La RE-7",
                    title: "La RE-7",
                    text: "Compile de cyphers en cours de mix, pensee comme une archive a part dans le laboratoire. Volume I deja en place, d'autres signaux pourront suivre.",
                    entries: [
                      {
                        title: "La RE-7 Cypher I",
                        description:
                          "Premier signal de la compile La RE-7, pense comme une capsule cypher a part, plus archivee et plus frontale dans son energie.",
                        artists: "K7_Z'onde, Wampawat, Inconiko, Sanders, Arco",
                        beatmaker: "TBS",
                        audioSrc: "assets/audio/music/cyphers/La RE-7 Volume 1/La RE-7 Cypher I.m4a"
                      }
                    ]
                  }
                ],
                subsections: [
                  {
                    id: "cyphers",
                    label: "Cyphers",
                    title: "Cyphers",
                    description: "Formats collectifs, energie brute, grosses reunions de voix et archives rap construites autour du labo.",
                    entries: [
                      {
                        title: "HipHop is not dead",
                        description:
                          "Cypher rap organise par Caractere Prod reunissant 14 MCs autour d'une energie rap brute, collective et sans filtre.",
                        artists:
                          "Pilot en Flamme, Pawat_Music, Inconiko, IWH, Saika, Lezo Miska, Nino, Sanders, Osah, Thanos, Lorenben, Thysha, Arco, Kmax l'alchimiste",
                        beatmaker: "Caractere Prod",
                        audioSrc: "assets/audio/music/cyphers/HipHop is not dead.m4a"
                      },
                      {
                        title: "OLD SCHOOL CYPHER",
                        description:
                          "Cypher rap organise par Pawat_Music dans une couleur old school, avec une distribution resserree et une energie de session brute.",
                        artists: "Process Lvx, BGE (Grosse equipe), Malro, Kameo, Inconiko, Wampawat",
                        beatmaker: "Pawat_Music",
                        audioSrc: "assets/audio/music/cyphers/OLD SCHOOL CYPHER.m4a"
                      },
                      {
                        title: "Tous_ensemble",
                        description:
                          "Enorme cypher rap organise par Pawat_Music reunissant 31 artistes, pense comme un grand rassemblement de voix, d'ambiances et de connexions.",
                        artists:
                          "BGE (Grosse equipe), Inconiko, Thanos, Process Lvx, Jiji, Sanders, Malro, La Chapka, El Tchicko, Arco, Wampawat, K7_Z'onde, Music4800, Vega de la Suite, Ejay, Shein B, Youss le Prolifik, HSN, Una Sola, Nessa Nyams, Kameo, Nozey, Nino, Thysha, Soso La Hyene, Adil Serafin, Zanatik, Soulalys, S2G, La Galeci, Pilot en Flamme, Spy Cam, Oktay",
                        beatmaker: "Pawat_Music x Fanatik 12000",
                        audioSrc: "assets/audio/music/cyphers/Tous_ensemble.m4a"
                      }
                    ]
                  },
                  {
                    id: "feats",
                    label: "Feats",
                    title: "Feats",
                    description: "Croisements de voix, invites et morceaux rap plus cibles, entre ego-trip, old school et signaux plus directs.",
                    entries: [
                      {
                        title: "Indesirables",
                        description:
                          "Titre old school rap porte par Arco, Wampawat et Malro dans une approche brute, directe et tres rap.",
                        artists: "Arco, Wampawat, Malro",
                        beatmaker: "Pawat_Music",
                        audioSrc: "assets/audio/music/feats/Indésirables feat Arco et Malro.m4a"
                      },
                      {
                        title: "Malabarz",
                        description:
                          "Morceau rap ego axe sur l'attitude et l'impact, avec Nino et Wampawat sur une production de Thysha.",
                        artists: "Nino, Wampawat",
                        beatmaker: "Thysha",
                        audioSrc: "assets/audio/music/feats/Malabarz feat Nino.m4a"
                      },
                      {
                        title: "N'oublie jamais",
                        description:
                          "Morceau boom bap conscient autour de toutes les choses importantes qu'on oublie, avec Wampawat, Soso La Hyene et Inconiko sur une prod de Darkness Prod.",
                        artists: "Wampawat, Soso La Hyene, Inconiko",
                        beatmaker: "Darkness Prod",
                        audioSrc: "assets/audio/music/feats/N'oublie Jamais Feat inconiko et Soso la hyène.m4a"
                      }
                    ]
                  }
                ]
              }
            },
            {
              id: "instrus",
              label: "Instrus",
              title: "Instrus",
              description: "Base sonore du laboratoire : beats, textures, directions d'ambiance et terrains de jeu pour les futures voix.",
              displayMode: "library",
              library: {
                introLabel: "BANQUE INSTRU",
                introTitle: "Beats, ambiances et terrains de jeu",
                introText:
                  "Cette zone rassemble les instrus du labo : boom bap, directions d'ambiance, textures atypiques et supports pensés pour les voix futures.",
                statusLabel: "BEATS ONLINE",
                subsectionLabel: "Familles",
                sectionKicker: "Signal instrumental",
                trackKicker: "Instru",
                trackButtonMore: "Lire plus",
                trackButtonLess: "Refermer",
                audioLabel: "Lecture",
                artistsLabel: "Type",
                beatmakerLabel: "Beatmaker",
                folders: [],
                subsections: [
                  {
                    id: "boombap",
                    label: "Boom bap",
                    title: "Boom bap",
                    description: "Textures boom bap maison, pensées pour le freestyle, le rap et les ambiances plus marquées.",
                    entries: [
                      {
                        title: "Gotham City",
                        description:
                          "Instru boom bap 93 BPM pensée comme un freestyle beat sombre, urbain et direct, avec une énergie de session brute.",
                        artists: "Freestyle beat / boom bap 93 BPM",
                        beatmaker: "Pawat_Music",
                        audioSrc: "assets/audio/music/instrus/boombap/gotham city (93BPM).m4a"
                      },
                      {
                        title: "Yakuza V2",
                        description:
                          "Instru boom bap 98.8 BPM au parfum de harpe orientale atypique, construite pour un format 3 x 16 plus narratif et singulier.",
                        artists: "Harp oriental atypique / boom bap 98.8 BPM / 3 x 16",
                        beatmaker: "Pawat_Music",
                        audioSrc: "assets/audio/music/instrus/boombap/yakuza v2 (98.8 BPM).m4a"
                      }
                    ]
                  }
                ]
              }
            },
            {
              id: "reseaux",
              label: "Réseaux",
              title: "Réseaux",
              description: "Canal de diffusion, mise en avant des sorties et connexions publiques autour de l'univers musical Pawat-Labz.",
              highlights: [
                "Visibilite des contenus musicaux du labo",
                "Pont vers clips, annonces et formats courts",
                "Presence publique evolutive autour des projets"
              ],
              featuredLink: {
                platform: "YouTube",
                handle: "@Pawat_Music",
                url: "https://www.youtube.com/@Pawat_Music?sub_confirmation=1",
                summary: "Chaine principale pour retrouver les morceaux, clips, sorties et futurs signaux musicaux du labo.",
                buttonLabel: "Découvrir"
              }
            }
          ]
        }
  },
  en: {
    musique: {
            kicker: "SECTION 01",
            title: "Music",
            text: "Audio catalog, beats, clips, music news and upcoming projects.",
            badge: "AUDIO"
          },
    pageHighlights: {
      musique: [
            "Audio catalog and beats",
            "Custom player and persistent mini-player",
            "Clips, Lab projects and releases"
          ]
    },
    musicHub: {
          introLabel: "Music exploration",
          introTitle: "Choose a section to reveal its sonic entry point.",
          introText:
            "The music section is now structured around the same visible gateways: projects, clips, feat/cypher, beats and socials.",
          categoryKicker: "AUDIO SIGNAL",
          entryKicker: "MUSIC CLIP",
          imageLabel: "Image",
          entryButtons: {
            external: "Listen"
          },
          emptyState: "This section can host several clips later on.",
          categories: [
            {
              id: "projets",
              label: "Projects",
              title: "Projects",
              description: "A space dedicated to finished tracks, full sonic construction and projects taking a stronger final shape.",
              highlights: [
                "Finished or evolving tracks",
                "Assembly between voice, instrumental and worldbuilding",
                "Personal releases and pilot projects"
              ]
            },
            {
              id: "clips",
              label: "Clips",
              title: "Clips",
              displayMode: "showcase",
              description: "Music does not stay isolated here: it connects with image, editing and video formats tied to the Lab.",
              highlights: [
                "Direct bridge between sound and image",
                "Music clips and hybrid formats",
                "Natural gateway toward the Animation section"
              ],
              entries: [
                {
                  title: "MALABARZ",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/_RjHrjYH0bs/maxresdefault.jpg",
                  imageAlt: "MALABARZ thumbnail",
                  typeLabel: "RAP CLIP",
                  context: "Artist : Wampawat feat Nino — Prod. : Tysha — Clip : Pawat_TV",
                  youtubeId: "_RjHrjYH0bs",
                  externalUrl: "https://www.youtube.com/watch?v=_RjHrjYH0bs"
                },
                {
                  title: "SANDERS TOUS ENSEMBLE",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/H9kXElI4U24/maxresdefault.jpg",
                  imageAlt: "SANDERS TOUS ENSEMBLE thumbnail",
                  typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
                  context: "Artist : SANDERS — Prod. : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
                  youtubeId: "H9kXElI4U24",
                  externalUrl: "https://www.youtube.com/watch?v=H9kXElI4U24"
                },
                {
                  title: "SHEIN B TOUS ENSEMBLE",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/SXhbD9AEaGY/maxresdefault.jpg",
                  imageAlt: "SHEIN B TOUS ENSEMBLE thumbnail",
                  typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
                  context: "Artist : Shein B — Prod. : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
                  youtubeId: "SXhbD9AEaGY",
                  externalUrl: "https://www.youtube.com/watch?v=SXhbD9AEaGY"
                },
                {
                  title: "KAMEO TOUS ENSEMBLE",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/JrTGw8cbWj8/maxresdefault.jpg",
                  imageAlt: "KAMEO TOUS ENSEMBLE thumbnail",
                  typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
                  context: "Artist : KAMEO — Prod. : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
                  youtubeId: "JrTGw8cbWj8",
                  externalUrl: "https://www.youtube.com/watch?v=JrTGw8cbWj8"
                },
                {
                  title: "WAMPAWAT TOUS ENSEMBLE",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/-Gq8e5jIKWk/maxresdefault.jpg",
                  imageAlt: "WAMPAWAT TOUS ENSEMBLE thumbnail",
                  typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
                  context: "Artist : Wampawat — Prod. : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
                  youtubeId: "-Gq8e5jIKWk",
                  externalUrl: "https://www.youtube.com/watch?v=-Gq8e5jIKWk"
                },
                {
                  title: "BGE TOUS ENSEMBLE",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/4yc6VFMwRME/maxresdefault.jpg",
                  imageAlt: "BGE TOUS ENSEMBLE thumbnail",
                  typeLabel: "SHORT CLIP — \"TOUS ENSEMBLE\"",
                  context: "Artist : BGE — Prod. : Pawat_Music x Fanatik1200 — Clip : Pawat_TV",
                  youtubeId: "4yc6VFMwRME",
                  externalUrl: "https://www.youtube.com/watch?v=4yc6VFMwRME"
                },
                {
                  title: "OLD SCHOOL CYPHER",
                  subtitle: "",
                  image: "https://img.youtube.com/vi/fNPp0caMptc/maxresdefault.jpg",
                  imageAlt: "OLD SCHOOL CYPHER thumbnail",
                  typeLabel: "EXPERIMENTAL ANIMATED MUSIC CLIP",
                  context: "Artists : Process lvx, BGE, Malro, Kameo, Inconiko, Pawat — Prod. : Pawat_Music — Clip : Pawat_TV",
                  youtubeId: "fNPp0caMptc",
                  externalUrl: "https://www.youtube.com/watch?v=fNPp0caMptc"
                }
              ]
            },
            {
              id: "feat-cypher",
              label: "Feat/Cypher",
              title: "Feat/Cypher",
              description: "Collaborations, cyphers, shared energy and collective moments that expand the Lab's field.",
              displayMode: "library",
              library: {
                introLabel: "COLLECTIVE ARCHIVES",
                introTitle: "Cyphers, feats and open folders",
                introText:
                  "This zone gathers the Lab's rap encounters: collective formats, vocal collaborations and evolving folders such as La RE-7.",
                statusLabel: "AUDIO ONLINE",
                subsectionLabel: "Channels",
                sectionKicker: "Collective signal",
                dossierKicker: "Cypher folder",
                trackKicker: "Audio signal",
                trackButtonMore: "Read more",
                trackButtonLess: "Close",
                audioLabel: "Playback",
                artistsLabel: "Artists",
                beatmakerLabel: "Beatmaker",
                folders: [
                  {
                    id: "la-re-7",
                    label: "La RE-7",
                    title: "La RE-7",
                    text: "A cypher compilation currently being mixed, imagined as a separate archive inside the Lab. Volume I is already in place and more signals can follow.",
                    entries: [
                      {
                        title: "La RE-7 Cypher I",
                        description:
                          "First signal from the La RE-7 compilation, built like a sharper, more archival cypher capsule.",
                        artists: "K7_Z'onde, Wampawat, Inconiko, Sanders, Arco",
                        beatmaker: "TBS",
                        audioSrc: "assets/audio/music/cyphers/La RE-7 Volume 1/La RE-7 Cypher I.m4a"
                      }
                    ]
                  }
                ],
                subsections: [
                  {
                    id: "cyphers",
                    label: "Cyphers",
                    title: "Cyphers",
                    description: "Collective formats, raw energy, large voice gatherings and rap archives built around the Lab.",
                    entries: [
                      {
                        title: "HipHop is not dead",
                        description:
                          "A rap cypher organised by Caractere Prod bringing together 14 MCs around a raw, collective hip-hop energy.",
                        artists:
                          "Pilot en Flamme, Pawat_Music, Inconiko, IWH, Saika, Lezo Miska, Nino, Sanders, Osah, Thanos, Lorenben, Thysha, Arco, Kmax l'alchimiste",
                        beatmaker: "Caractere Prod",
                        audioSrc: "assets/audio/music/cyphers/HipHop is not dead.m4a"
                      },
                      {
                        title: "OLD SCHOOL CYPHER",
                        description:
                          "A rap cypher organised by Pawat_Music with an old school color, a tighter cast and a raw session feel.",
                        artists: "Process Lvx, BGE (Grosse equipe), Malro, Kameo, Inconiko, Wampawat",
                        beatmaker: "Pawat_Music",
                        audioSrc: "assets/audio/music/cyphers/OLD SCHOOL CYPHER.m4a"
                      },
                      {
                        title: "Tous_ensemble",
                        description:
                          "A huge rap cypher organised by Pawat_Music gathering 31 artists as a large meeting point for voices, moods and connections.",
                        artists:
                          "BGE (Grosse equipe), Inconiko, Thanos, Process Lvx, Jiji, Sanders, Malro, La Chapka, El Tchicko, Arco, Wampawat, K7_Z'onde, Music4800, Vega de la Suite, Ejay, Shein B, Youss le Prolifik, HSN, Una Sola, Nessa Nyams, Kameo, Nozey, Nino, Thysha, Soso La Hyene, Adil Serafin, Zanatik, Soulalys, S2G, La Galeci, Pilot en Flamme, Spy Cam, Oktay",
                        beatmaker: "Pawat_Music x Fanatik 12000",
                        audioSrc: "assets/audio/music/cyphers/Tous_ensemble.m4a"
                      }
                    ]
                  },
                  {
                    id: "feats",
                    label: "Feats",
                    title: "Feats",
                    description: "Voice crossovers, invited artists and more targeted rap tracks ranging from ego-trip to old school tones.",
                    entries: [
                      {
                        title: "Indesirables",
                        description:
                          "An old school rap track carried by Arco, Wampawat and Malro in a direct, no-frills approach.",
                        artists: "Arco, Wampawat, Malro",
                        beatmaker: "Pawat_Music",
                        audioSrc: "assets/audio/music/feats/Indésirables feat Arco et Malro.m4a"
                      },
                      {
                        title: "Malabarz",
                        description:
                          "An ego-driven rap cut built on attitude and impact, with Nino and Wampawat over a Thysha beat.",
                        artists: "Nino, Wampawat",
                        beatmaker: "Thysha",
                        audioSrc: "assets/audio/music/feats/Malabarz feat Nino.m4a"
                      },
                      {
                        title: "N'oublie jamais",
                        description:
                          "A conscious boom bap track about all the important things we forget, with Wampawat, Soso La Hyene and Inconiko over a Darkness Prod beat.",
                        artists: "Wampawat, Soso La Hyene, Inconiko",
                        beatmaker: "Darkness Prod",
                        audioSrc: "assets/audio/music/feats/N'oublie Jamais Feat inconiko et Soso la hyène.m4a"
                      }
                    ]
                  }
                ]
              }
            },
            {
              id: "instrus",
              label: "Beats",
              title: "Beats",
              description: "The sonic base of the laboratory: beats, textures, atmospheres and playgrounds for future voices.",
              displayMode: "library",
              library: {
                introLabel: "INSTRUMENTAL BANK",
                introTitle: "Beats, moods and creative playgrounds",
                introText:
                  "This zone gathers the Lab's instrumentals: boom bap foundations, stronger atmospheres, atypical textures and supports built for future voices.",
                statusLabel: "BEATS ONLINE",
                subsectionLabel: "Families",
                sectionKicker: "Instrumental signal",
                trackKicker: "Beat",
                trackButtonMore: "Read more",
                trackButtonLess: "Close",
                audioLabel: "Playback",
                artistsLabel: "Type",
                beatmakerLabel: "Beatmaker",
                folders: [],
                subsections: [
                  {
                    id: "boombap",
                    label: "Boom bap",
                    title: "Boom bap",
                    description: "In-house boom bap textures designed for freestyle, rap writing and stronger atmosphere work.",
                    entries: [
                      {
                        title: "Gotham City",
                        description:
                          "A 93 BPM boom bap instrumental built like a dark, urban freestyle beat with a raw session energy.",
                        artists: "Freestyle beat / 93 BPM boom bap",
                        beatmaker: "Pawat_Music",
                        audioSrc: "assets/audio/music/instrus/boombap/gotham city (93BPM).m4a"
                      },
                      {
                        title: "Yakuza V2",
                        description:
                          "A 98.8 BPM boom bap instrumental shaped around an atypical oriental harp mood, built for a more narrative 3 x 16 format.",
                        artists: "Atypical oriental harp / 98.8 BPM boom bap / 3 x 16",
                        beatmaker: "Pawat_Music",
                        audioSrc: "assets/audio/music/instrus/boombap/yakuza v2 (98.8 BPM).m4a"
                      }
                    ]
                  }
                ]
              }
            },
            {
              id: "reseaux",
              label: "Socials",
              title: "Socials",
              description: "A distribution channel for releases, public presence and visible connections around the musical side of Pawat-Labz.",
              highlights: [
                "Visibility for the lab's music content",
                "Bridge toward clips, announcements and short formats",
                "An evolving public layer around the projects"
              ],
              featuredLink: {
                platform: "YouTube",
                handle: "@Pawat_Music",
                url: "https://www.youtube.com/@Pawat_Music?sub_confirmation=1",
                summary: "Main channel for tracks, clips, releases and future musical signals coming from the Lab.",
                buttonLabel: "Discover"
              }
            }
          ]
        }
  }
};
