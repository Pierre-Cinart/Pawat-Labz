export const animationContent = {
  fr: {
    animation: {
            kicker: "SECTION 02",
            title: "Animation",
            text: "Cette zone rassemble créations animées, dessins animés, concepts de séries, clips animés, publicités courtes et expérimentations visuelles.",
            badge: "VIDEO"
          },
    pageHighlights: {
      animation: [
            "Séries animées",
            "Clips musicaux",
            "Clips animés / univers visuels",
            "Promos",
            "Tests de potions visuelles",
            "funny fails"
          ]
    },
    animationHub: {
          introLabel: "Exploration animation",
          introTitle: "Choisis une rubrique pour faire apparaître son focus créatif.",
          introText:
            "Chaque sous-menu peut devenir une porte d'entrée vers une série, une collection de clips, des pubs ou un mini-univers visuel plus détaillé.",
          entryKicker: "SÉRIE ANIMÉE",
          imageLabel: "Image",
          entryButtons: {
            internal: "Découvrir",
            external: "Voir",
            related: "Voir le lien"
          },
          categories: [
            {
              id: "series-animees",
              label: "Séries animées",
              title: "Séries animées",
              description:
                "Univers épisodiques, personnages récurrents, narration cartoon et détournements maison.",
              entries: [
                {
                  path: "/animation/sagaz-zzz",
                  title: "SagaZ zzz",
                  subtitle:
                    "Une parodie hilarante de DBZ qui revisite le fabuleux manga d'Akira Toriyama façon humour Pawat Labz.",
                  image: "assets/images/animation/sagaz-zzz-cover.webp",
                  imageAlt: "Illustration de SagaZ zzz"
                }
              ]
            },
            {
              id: "clips-animes",
              label: "Clips animés",
              title: "Clips animés",
              description:
                "Clips visuels, énergie musicale, montage cartoon et idées hybrides entre son et image.",
              entries: []
            },
            {
              id: "publicites-courtes",
              label: "Publicités courtes",
              title: "Publicités courtes",
              displayMode: "showcase",
              description:
                "Formats promo courts, idées visuelles rapides, humour, gimmicks et messages percutants.",
              entries: [
                {
                  title: "Kameomago live magie",
                  subtitle:
                    "Spot promo  pour mettre en avant un spectacle de magie organisé par Kaméo.",
                  image: "assets/images/animation/pubs/kameomago-live-magie.webp",
                  imageAlt: "Illustration pub Kameomago live magie",
                  typeLabel: "PUB / SPECTACLE",
                  context:
                    "Publicité pensée pour présenter l'univers du spectacle, attirer l'œil rapidement et créer une ambiance drôle autour de la magie.",
                  youtubeId: "QLsLNYFr8cQ",
                  externalUrl: "https://www.youtube.com/shorts/QLsLNYFr8cQ",
                  externalLabel: "Voir la pub",
                  relatedLinks: [
                    {
                      label: "Lien artiste / contact",
                      href: "#"
                    }
                  ]
                },
                {
                  title: "Thysha balance Pawat",
                  subtitle:
                    "Promo humour façon Père Noël pour annoncer une sortie du titre 'malabarz' avec un ton décalé.",
                  image: "assets/images/animation/pubs/thysha-balance-pawat.webp",
                  imageAlt: "Illustration pub Thysha balance Pawat",
                  typeLabel: "PUB / SORTIE MUSICALE",
                  context:
                    "Cette pub joue la carte de l humour promo pour annoncer une sortie musicale du titre 'malabarz' en collaboration avec Thysha et Nino",
                  youtubeId: "XFR2i_YtrjI",
                  externalUrl: "https://www.youtube.com/shorts/XFR2i_YtrjI",
                  externalLabel: "Voir la pub",
                  relatedLinks: [
                    {
                      label: "Lien artiste / projet",
                      href: "#"
                    }
                  ]
                },
                {
                  title: "Nino veut son cadeau",
                  subtitle:
                    "Pub humoristique  pour  un clip manga rap avec une pincée d'humour.",
                  image: "assets/images/animation/pubs/malabarz-promo.webp",
                  imageAlt: "Illustration pub Malabarz",
                  typeLabel: "PUB / CLIP RAP",
                  context:
                    "Format très court imaginé comme une pub-annonce pour préparer le terrain avant la sortie et la mise en avant du clip 'malabarz'.",
                  youtubeId: "LIRF834MB_Q",
                  externalUrl: "https://www.youtube.com/shorts/LIRF834MB_Q",
                  externalLabel: "Voir la pub",
                  relatedLinks: [
                    {
                      label: "Lien artiste / projet",
                      href: "#"
                    }
                  ]
                },
                {
                  title: "Pub Pawat TV",
                  subtitle:
                    "Spot d'auto-promo pour présenter l'identité de Pawat TV et l'univers animation / vidéo du labo.",
                  image: "assets/images/animation/pubs/pawat-tv-promo.webp",
                  imageAlt: "Illustration pub Pawat TV",
                  typeLabel: "AUTO-PROMO",
                  context:
                    "Auto promo pensée pour affirmer une identité visuelle, poser un ton et annoncer l'univers de création vidéo .",
                  youtubeId: "f4qpAZ0iLZQ",
                  externalUrl: "https://www.youtube.com/shorts/f4qpAZ0iLZQ",
                  externalLabel: "Voir la pub",
                  relatedLinks: []
                }   
              ]
            },
            {
              id: "reseaux",
              label: "Réseaux",
              title: "Réseaux",
              description:
                "Canal de diffusion pour les clips, shorts, playlists et signaux publics qui prolongent l'univers animation du labo.",
              featuredLink: {
                platform: "YouTube",
                handle: "@Pawat_TV",
                url: "https://www.youtube.com/@Pawat_TV?sub_confirmation=1",
                summary: "Chaîne principale pour retrouver les clips, contenus vidéo et sorties visuelles signées Pawat_TV.",
                buttonLabel: "Voir"
              }
            },
    
          ],
          emptyState: "Cette rubrique pourra accueillir plusieurs projets plus tard."
        },
    animationSeries: {
          sagaz: {
            path: "/animation/sagaz-zzz",
            kicker: "SÉRIE ANIMÉE",
            title: "SagaZ zzz",
            subtitle:
              "Une parodie hilarante de DBZ qui revisite le fabuleux manga d'Akira Toriyama façon humour Pawat Labz.",
            description:
              "SagaZ zzz revisite avec humour le fabuleux manga d'Akira Toriyama dans une version cartoon maison pensée comme un hommage autant qu'un terrain de jeu Pawat Labz. Cette page est construite comme un mini espace de visionnage : on choisit une saison, puis un épisode, comme dans une petite plateforme de streaming.",
            coverImage: "assets/images/animation/sagaz-zzz-cover.webp",
            coverAlt: "Illustration de SagaZ zzz",
            coverHint: "Ajoute ton image ici : assets/images/animation/sagaz-zzz-cover.webp",
            backLabel: "Retour animation",
            seasonLabel: "Saison",
            episodeLabel: "Épisodes",
            episodeThumbnailLabel: "Vignette épisode",
            playerLabel: "Lecteur YouTube",
            watchOnYoutubeLabel: "Voir",
            playlistLabel: "Playlist officielle",
            playlistUrl: "https://www.youtube.com/@Pawat_TV/playlists",
            playlistButtonLabel: "Voir",
            placeholderTitle: "Épisode en attente de lecture",
            placeholderText:
              "Le lecteur YouTube intégré apparaîtra ici. En attendant, tu peux retrouver la playlist SagaZ zzz sur la chaîne Pawat_TV.",
            seasons: [
              {
                id: "season-1",
                label: "Saison 1",
                episodes: [
                  {
                    id: "s1-e1",
                    number: "01",
                    title: "L'Aventure commence !",
                    summary: "SagaZ zzz - Saison 1 - épisode 1. Le départ de la parodie et l'entrée dans l'univers cartoon revisité.",
                    thumbnail: "assets/images/animation/sagaz-zzz/s1-e1.webp",
                    thumbnailAlt: "Vignette de l'épisode 1 de SagaZ zzz",
                    youtubeId: "qGw72pOeaKE"
                  },
                  {
                    id: "s1-e2",
                    number: "02",
                    title: "Kakamou se fait démonter !!!",
                    summary: "SagaZ zzz - Saison 1 - épisode 2. L'humour monte d'un cran et la baston prend une tournure bien plus absurde.",
                    thumbnail: "assets/images/animation/sagaz-zzz/s1-e2.webp",
                    thumbnailAlt: "Vignette de l'épisode 2 de SagaZ zzz",
                    youtubeId: "J9B1E55-wNE"
                  },
                  {
                    id: "s1-e3",
                    number: "03",
                    title: "Une union inattendue",
                    summary: "SagaZ zzz - Saison 1 - épisode 3. Un nouveau tournant dans l'aventure avec une alliance improbable.",
                    thumbnail: "assets/images/animation/sagaz-zzz/s1-e3.webp",
                    thumbnailAlt: "Vignette de l'épisode 3 de SagaZ zzz",
                    youtubeId: "yVYHZy_uVKs"
                  },
                  {
                    id: "s1-e4",
                    number: "04",
                    title: "La baston commence",
                    summary: "SagaZ zzz - Saison 1 - épisode 4. Le face-à-face démarre vraiment et l'énergie cartoon prend toute la place.",
                    thumbnail: "assets/images/animation/sagaz-zzz/s1-e4.webp",
                    thumbnailAlt: "Vignette de l'épisode 4 de SagaZ zzz",
                    youtubeId: "aSoCIprpkHo"
                  },
                  {
                    id: "s1-e5",
                    number: "05",
                    title: "Une fin tragique...",
                    summary: "SagaZ zzz - Saison 1 - épisode 5. Une conclusion plus dramatique qui détourne encore les codes de DBZ.",
                    thumbnail: "assets/images/animation/sagaz-zzz/s1-e5.webp",
                    thumbnailAlt: "Vignette de l'épisode 5 de SagaZ zzz",
                    youtubeId: "VxjibwYvybc"
                  }
                ]
              }
            ]
          }
        }
  },
  en: {
    animation: {
            kicker: "SECTION 02",
            title: "Animation",
            text: "This zone gathers animated creations, cartoons, series concepts, animated clips, short ads and visual experiments.",
            badge: "VIDEO"
          },
    pageHighlights: {
      animation: [
            "Animated series",
            "Animated clips and visual worlds",
            "Short ads and promo formats",
            "Graphic and narrative experiments"
          ]
    },
    animationHub: {
          introLabel: "Animation focus",
          introTitle: "Choose a sub-section to reveal its creative focus.",
          introText:
            "Each submenu can become a doorway toward a series, a clip collection, short ads or a more detailed visual universe.",
          entryKicker: "ANIMATED SERIES",
          imageLabel: "Image",
          entryButtons: {
            internal: "Discover",
            external: "Watch",
            related: "Open link"
          },
          categories: [
            {
              id: "series-animees",
              label: "Animated series",
              title: "Animated series",
              description:
                "Episodic worlds, recurring characters, cartoon storytelling and custom parody energy.",
              entries: [
                {
                  path: "/animation/sagaz-zzz",
                  title: "SagaZ zzz",
                  subtitle:
                    "A hilarious DBZ parody that revisits Akira Toriyama's legendary manga through Pawat Labz humor.",
                  image: "assets/images/animation/sagaz-zzz-cover.webp",
                  imageAlt: "SagaZ zzz illustration"
                }
              ]
            },
            {
              id: "clips-animes",
              label: "Animated clips",
              title: "Animated clips",
              description:
                "Visual clips, musical energy, cartoon editing and hybrid ideas between sound and motion.",
              entries: []
            },
            {
              id: "publicites-courtes",
              label: "Short ads",
              title: "Short ads",
              displayMode: "showcase",
              description:
                "Short promo formats, quick visual ideas, humor, gimmicks and punchy messages.",
              entries: [
                {
                  title: "Kameomago live magie",
                  subtitle:
                    "Promo spot created to highlight a magic show organized by Kaméo.",
                  image: "assets/images/animation/pubs/kameomago-live-magie.webp",
                  imageAlt: "Kameomago live magic ad illustration",
                  typeLabel: "AD / LIVE SHOW",
                  context:
                    "An ad designed to present the spirit of the show, catch the eye quickly and build a playful atmosphere around the magic performance.",
                  youtubeId: "QLsLNYFr8cQ",
                  externalUrl: "https://www.youtube.com/shorts/QLsLNYFr8cQ",
                  externalLabel: "Watch the ad",
                  relatedLinks: [
                    {
                      label: "Artist / contact link",
                      href: "#"
                    }
                  ]
                },
                {
                  title: "Thysha balance Pawat",
                  subtitle:
                    "A Santa-style comedy promo used to announce the release of the track 'Malabarz' with an offbeat tone.",
                  image: "assets/images/animation/pubs/thysha-balance-pawat.webp",
                  imageAlt: "Thysha drops Pawat ad illustration",
                  typeLabel: "AD / MUSIC RELEASE",
                  context:
                    "This ad leans into promo humor to announce the musical release of the track 'Malabarz' in collaboration with Thysha and Nino.",
                  youtubeId: "XFR2i_YtrjI",
                  externalUrl: "https://www.youtube.com/shorts/XFR2i_YtrjI",
                  externalLabel: "Watch the ad",
                  relatedLinks: [
                    {
                      label: "Artist / project link",
                      href: "#"
                    }
                  ]
                },
                {
                  title: "Nino veut son cadeau",
                  subtitle:
                    "A humorous promo for a manga rap clip with a playful touch of comedy.",
                  image: "assets/images/animation/pubs/malabarz-promo.webp",
                  imageAlt: "Malabarz ad illustration",
                  typeLabel: "AD / RAP CLIP",
                  context:
                    "A very short format imagined like a promo trailer to prepare the ground before the release and spotlight of the clip 'Malabarz'.",
                  youtubeId: "LIRF834MB_Q",
                  externalUrl: "https://www.youtube.com/shorts/LIRF834MB_Q",
                  externalLabel: "Watch the ad",
                  relatedLinks: [
                    {
                      label: "Artist / project link",
                      href: "#"
                    }
                  ]
                },
                {
                  title: "Pawat TV promo",
                  subtitle:
                    "A self-promo spot presenting the identity of Pawat TV and the animation / video side of the Lab.",
                  image: "assets/images/animation/pubs/pawat-tv-promo.webp",
                  imageAlt: "Pawat TV promo illustration",
                  typeLabel: "SELF PROMO",
                  context:
                    "A self-promo piece built to assert a visual identity, set a tone and introduce the video creation universe.",
                  youtubeId: "f4qpAZ0iLZQ",
                  externalUrl: "https://www.youtube.com/shorts/f4qpAZ0iLZQ",
                  externalLabel: "Watch the ad",
                  relatedLinks: []
                }
              ]
            },
            {
              id: "reseaux",
              label: "Socials",
              title: "Socials",
              description:
                "Broadcast channel for clips, shorts, playlists and public signals extending the Lab's animation universe.",
              featuredLink: {
                platform: "YouTube",
                handle: "@Pawat_TV",
                url: "https://www.youtube.com/@Pawat_TV?sub_confirmation=1",
                summary: "Main channel to find clips, video content and visual releases published through Pawat_TV.",
                buttonLabel: "Watch"
              }
            }
          ],
          emptyState: "This section can host several projects later on."
        },
    animationSeries: {
          sagaz: {
            path: "/animation/sagaz-zzz",
            kicker: "ANIMATED SERIES",
            title: "SagaZ zzz",
            subtitle:
              "A hilarious DBZ parody that revisits Akira Toriyama's legendary manga through Pawat Labz humor.",
            description:
              "SagaZ zzz revisits Akira Toriyama's legendary manga with humor in a custom cartoon version designed as both a tribute and a Pawat Labz playground. This page works like a mini streaming space: pick a season, then pick an episode.",
            coverImage: "assets/images/animation/sagaz-zzz-cover.webp",
            coverAlt: "SagaZ zzz illustration",
            coverHint: "Add your image here: assets/images/animation/sagaz-zzz-cover.webp",
            backLabel: "Back to animation",
            seasonLabel: "Season",
            episodeLabel: "Episodes",
            episodeThumbnailLabel: "Episode thumbnail",
            playerLabel: "YouTube player",
            watchOnYoutubeLabel: "Watch this episode on YouTube",
            playlistLabel: "Official playlist",
            playlistUrl: "https://www.youtube.com/@Pawat_TV/playlists",
            playlistButtonLabel: "Watch",
            placeholderTitle: "Episode waiting for playback",
            placeholderText:
              "The embedded YouTube player will appear here. In the meantime, you can find the SagaZ zzz playlist on the Pawat_TV channel.",
            seasons: [
              {
                id: "season-1",
                label: "Season 1",
                episodes: [
                  {
                    id: "s1-e1",
                    number: "01",
                    title: "The adventure begins!",
                    summary: "SagaZ zzz - Season 1 - Episode 1. The parody starts and the cartoon-flavored world begins to take shape.",
                    thumbnail: "assets/images/animation/sagaz-zzz/s1-e1.webp",
                    thumbnailAlt: "Thumbnail for SagaZ zzz episode 1",
                    youtubeId: "qGw72pOeaKE"
                  },
                  {
                    id: "s1-e2",
                    number: "02",
                    title: "Kakamou gets wrecked!!!",
                    summary: "SagaZ zzz - Season 1 - Episode 2. The humor gets louder and the fight becomes way more absurd.",
                    thumbnail: "assets/images/animation/sagaz-zzz/s1-e2.webp",
                    thumbnailAlt: "Thumbnail for SagaZ zzz episode 2",
                    youtubeId: "J9B1E55-wNE"
                  },
                  {
                    id: "s1-e3",
                    number: "03",
                    title: "An unexpected union",
                    summary: "SagaZ zzz - Season 1 - Episode 3. A new turn in the story with an unlikely alliance.",
                    thumbnail: "assets/images/animation/sagaz-zzz/s1-e3.webp",
                    thumbnailAlt: "Thumbnail for SagaZ zzz episode 3",
                    youtubeId: "yVYHZy_uVKs"
                  },
                  {
                    id: "s1-e4",
                    number: "04",
                    title: "The fight begins",
                    summary: "SagaZ zzz - Season 1 - Episode 4. The showdown really starts and the cartoon energy takes over.",
                    thumbnail: "assets/images/animation/sagaz-zzz/s1-e4.webp",
                    thumbnailAlt: "Thumbnail for SagaZ zzz episode 4",
                    youtubeId: "aSoCIprpkHo"
                  },
                  {
                    id: "s1-e5",
                    number: "05",
                    title: "A tragic ending...",
                    summary: "SagaZ zzz - Season 1 - Episode 5. A more dramatic finale that still twists DBZ codes with humor.",
                    thumbnail: "assets/images/animation/sagaz-zzz/s1-e5.webp",
                    thumbnailAlt: "Thumbnail for SagaZ zzz episode 5",
                    youtubeId: "VxjibwYvybc"
                  }
                ]
              }
            ]
          }
        }
  }
};
