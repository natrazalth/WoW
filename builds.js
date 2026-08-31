const BUILDS_LAST_UPDATED = "August 31, 2026";

const builds = {
    aof: {
        type: "dungeon",
        name: "Altar of Fangs",
        pres: {
            key: 13,
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAMzMz2yADzMPwsYmZM2GAAAzYGzYMmRMzAAAAMzMywMzMLzMDAAjZswCMwMaohhFYmZGgxA",
            image: "images/aof-pres.png"
        },
        dev: {
            key: 14,
            talentString: "CsbBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8ADmZMzwMw8AzYMTDzMZmxywMzw8AzMzAMzMzYmZZm5BwMwMmB2ALgZYCsFsMMDwMzwA",
            image: "images/aof-dev.png"
        }
    },

    don: {
        type: "dungeon",
        name: "Den of Nalorakk",
        pres: {
            key: 0,
            talentString: "",
            image: "images/don-pres.png"
        },
        dev: {
            key: 11,
            talentString: "CsbBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8ADmZMzwMw8AzYMTDzMZMWGzMzw8AzMzAMzMzYmZZm5BwMwMmB2ALgZYCsFsMMDwMzwA",
            image: "images/don-dev.png"
        }
    },

    mr: {
        type: "dungeon",
        name: "Murder Row",
        pres: {
            key: 12,
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAmZmZ2WGzYYeg5BmFzA2GAAAzYGzgxMTjZmBAAAMzMyYmZmZZmBAMmBWAbgZYCZjxmhBwMzYA",
            image: "images/mr-pres.png"
        },
        dev: {
            key: 12,
            talentString: "CsbBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8ADmZMzwMw8AzYMTDzMZmxywMzw8AzMzAMzMzYmZZm5BwMwMmB2ALgZYCsFsMMDwMzwA",
            image: "images/mr-dev.png"
        }
    },

    bv: {
        type: "dungeon",
        name: "The Blinding Vale",
        pres: {
            key: 11,
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAYmZ2MzMGmHYMbmZmZmNMAAwMmxAjZkZmBAAAYmZmMjZmZWmZeAAMjZgNwCYGmQWgNDDgZmxA",
            image: "images/bv-pres.png"
        },
        dev: {
            key: 12,
            talentString: "CsbBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8ADmZMzwMw8AzYMTDzMZmxywMzw8AzMzAMzMzYmZZm5BwMwMmB2ALgZYCsFsMMDwMzwA",
            image: "images/bv-dev.png"
        }
    },

    va: {
        type: "dungeon",
        name: "Voidscar Arena",
        pres: {
            key: 10,
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAMzMz2yADzMPwsYmZM2GAAAzYGzYMmRMzAAAAMzMywMzMLzMDAAjZswCMwMaohhFYmZGgxA",
            image: "images/va-pres.png"
        },
        dev: {
            key: 12,
            talentString: "CsbBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8ADmZMzwMw8AzYMTDzMZMWGzMzw8AzMzAMzMzYmZZm5BwMwMmB2ALgZYCsFsMMDwMzwA",
            image: "images/va-dev.png"
        }
    },

    kr: {
        type: "dungeon",
        name: "King's Rest",
        pres: {
            key: 12,
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAYmZwDMjh5BGzmZMzMbzYAAgZMjZwYGhZAAAAmZmJGzMzsMzMAYGzAbgFwMMhsYYzwAYmZMA",
            image: "images/kr-pres.png"
        },
        dev: {
            key: 14,
            talentString: "CsbBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8ADmZMzwMw8AzYMTDzMZMWGzMzw8AzMzAMzMzYmZZm5BwMwMmB2ALgZYCsFsMMDwMzwA",
            image: "images/kr-dev.png"
        }
    },

    rlp: {
        type: "dungeon",
        name: "Ruby Life Pools",
        pres: {
            key: 12,
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAmZmZ2WGzYYeg5BmFzA2GAAAzYGzgxMTjZmBAAAMzMyYmZmZZmBAMmBWAbgZYCZjxmhBwMzYA",
            image: "images/rlp-pres.png"
        },
        dev: {
            key: 11,
            talentString: "CsbBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8ADmZMzwMw8AzYMTDzMZMWGzMzw8AzMzAMzMzYmZZm5BwMwMmB2ALgZYCsFsMMDwMzwA",
            image: "images/rlp-dev.png"
        }
    },

    tos: {
        type: "dungeon",
        name: "Temple of Sethraliss",
        pres: {
            key: 11,
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAMzMz2yADzMPwsYmZM2GAAAzYGzYMmRMzAAAAMzMywMzMLzMDAAjZswCMwMaohhFYmZGgxA",
            image: "images/tos-pres.png"
        },
        dev: {
            key: 12,
            talentString: "CsbBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8ADmZMzwMw8AYMTjZmJjxyYmZGmHYmZGgZmZGzMLzMDmBmxMwGYBMDTgtglhZAmZGG",
            image: "images/tos-dev.png"
        }
    },

    va1: {
        type: "raid",
        name: "Nek'zali the Soulcoiler",
        pres: {
            difficulty: "Mythic",
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAYmZwDMjh5BGzmZMzMbzYAAgZMjZwYGhZAAAAmZmJGzMzsMzMAYGzAbgFwMMhsYYzwAYmZMA",
            image: "images/va1-pres.png"
        },
        dev: {
            difficulty: "Mythic",
            talentString: "",
            image: "images/va1-dev.png"
        }
    },

    va2: {
        type: "raid",
        name: "Entombed Sentinels",
        pres: {
            difficulty: "Heroic",
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAYmZwMjh5BGzmhZmZbGDAAMjZMDGzIMDAAAwMzMxYmZmlZmBAzYGYDsAmhJkFDbGGAzMjB",
            image: "images/va2-pres.png"
        },
        dev: {
            difficulty: "Mythic",
            talentString: "",
            image: "images/va2-dev.png"
        }
    },

    va3: {
        type: "raid",
        name: "The Lost Explorers",
        pres: {
            difficulty: "Heroic",
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAYmZwMjh5BGzmhZmZbGDAAMjZMDGzIMDAAAwMzMxYmZmlZmBAzYGYDsAmhJkFDbGGAzMjB",
            image: "images/va3-pres.png"
        },
        dev: {
            difficulty: "Mythic",
            talentString: "",
            image: "images/va3-dev.png"
        }
    },

    va4: {
        type: "raid",
        name: "Vashnik the Malignant",
        pres: {
            difficulty: "Heroic",
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAYmZ2MzMGmHYMbmZmZmNMAAwMmxAjZkZmBAAAYmZmMjZmZWmZeAAMjZgNwCYGmQWgNDDgZmxA",
            image: "images/va4-pres.png"
        },
        dev: {
            difficulty: "Mythic",
            talentString: "",
            image: "images/va4-dev.png"
        }
    },

    va5: {
        type: "raid",
        name: "Sszorak",
        pres: {
            difficulty: "Heroic",
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAYmZwMjh5BGzmhZmZbGDAAMjZMDGzIMDAAAwMzMxYmZmlZmBAzYGYDsAmhJkFDbGGAzMjB",
            image: "images/va5-pres.png"
        },
        dev: {
            difficulty: "Mythic",
            talentString: "",
            image: "images/va5-dev.png"
        }
    },

    va6: {
        type: "raid",
        name: "The Twin Fangs",
        pres: {
            difficulty: "Heroic",
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAYmZwMjh5BGzmhZmZbGDAAMjZMDGzIMDAAAwMzMxYmZmlZmBAzYGYDsAmhJkFDbGGAzMjB",
            image: "images/va6-pres.png"
        },
        dev: {
            difficulty: "Mythic",
            talentString: "",
            image: "images/va6-dev.png"
        }
    },

    va7: {
        type: "raid",
        name: "The Coiled Altar",
        pres: {
            difficulty: "Heroic",
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAYmZwMjh5BGzmhZmZbGDAAMjZMDGzIMDAAAwMzMxYmZmlZmBAzYGYDsAmhJkFDbGGAzMjB",
            image: "images/va7-pres.png"
        },
        dev: {
            difficulty: "Heroic",
            talentString: "CsbBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMDMDzwMDMYMTzMzMNjx2MmZmZmHYmZGwMmxYmZZmZgBGD2glxox2AyMIYDDMzghB",
            image: "images/va7-dev.png"
        }
    },

    va8: {
        type: "raid",
        name: "Ula'tek",
        pres: {
            difficulty: "Heroic",
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAYmZwDMjh5BGzmZMzMbzYAAgZMjZwYGhZAAAAmZmJGzMzsMzMAYGzAbgFwMMhsYYzwAYmZMA",
            image: "images/va8-pres.png"
        },
        dev: {
            difficulty: "Mythic",
            talentString: "",
            image: "images/va8-dev.png"
        }
    },

    lair: {
        type: "raid",
        name: "Nymrissa Wavecaller",
        pres: {
            difficulty: "Heroic",
            talentString: "CwbBAAAAAAAAAAAAAAAAAAAAAAAAAAAYmZ2MzMGmHYMbmZmZmFMAAwMmxAjZkZmBAAAYmZmMjZmZWmZeAAMjZgNwCYGmQWgNDDgZmxA",
            image: "images/lair-pres.png"
        },
        dev: {
            difficulty: "TEST",
            talentString: "TEST",
            image: "images/lair-dev.png"
        }
    }
};