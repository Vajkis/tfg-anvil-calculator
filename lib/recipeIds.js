import { MATERIALS } from '../data/materials.js';

// Every real tfc:anvil/... recipe ID follows this exact pattern in the modpack's
// kubejs scripts (addAnvilRecipe -> `tfc:anvil/${material.getName()}_${suffix}`).
// material.getName() is the GTCEU material's snake_case id, which is our kebab-case
// materials.js `id` with dashes swapped for underscores.
function toMaterialName(materialId) {
  return materialId.replace(/-/g, '_');
}

export function getRecipeId(materialId, suffix) {
  return `tfc:anvil/${toMaterialName(materialId)}_${suffix}`;
}

// Only materials with TFGPropertyKey.TFC_PROPERTY set (material_modification.tfc.js)
// get ANY anvil recipes at all. Materials in data/materials.js that are missing from
// this list (graphite, amethyst, titanium, etc.) are color-reference-only and never
// appear on an anvil.
export const TFC_WORKABLE_MATERIALS = [
  'copper', 'bismuth-bronze', 'bronze', 'black-bronze', 'wrought-iron',
  'steel', 'black-steel', 'blue-steel', 'red-steel',
  'gold', 'bismuth', 'brass', 'nickel', 'rose-gold', 'silver', 'tin', 'zinc',
  'sterling-silver', 'iron', 'red-alloy', 'tin-alloy', 'lead',
  'invar', 'potin', 'cobalt', 'cobalt-brass'
];

// Only these 9 classic TFC tool metals get tool heads/armor/weapons
// (recipes.material_tfc.js). Every other TFC-workable material above only gets
// the UNIVERSAL_ITEM_TYPES below (rod, plate, bolt, screw, ring, ...).
export const TOOL_TIER_MATERIALS = [
  'copper', 'bronze', 'bismuth-bronze', 'black-bronze',
  'wrought-iron', 'steel', 'black-steel', 'blue-steel', 'red-steel'
];

// img: flat tinted template shared by every material (same file, recolored).
// imgFolder: no shared template exists - real per-material art lives at
// `${imgFolder}/${materialName}.png` (extracted from TFC's own jar).
// img: '' means no asset has been located for this item yet.
export const UNIVERSAL_ITEM_TYPES = [
  { suffix: 'rod', name: 'Rod', img: '/img/rod.png' },
  { suffix: 'sheet', name: 'Plate', img: '/img/plate.png' },
  { suffix: 'bolt', name: 'Bolt', img: '/img/bolt.png' },
  { suffix: 'screw', name: 'Screw', img: '/img/screw.png' },
  { suffix: 'ring', name: 'Ring', img: '/img/ring.png' },
  { suffix: 'nugget', name: 'Nugget', img: '/img/nugget.png' },
  { suffix: 'small_gear', name: 'Small Gear', img: '/img/gear_small.png' },
  // TFC's own vanilla bars (tfc:metal/bars/<material>) - real per-material art, one
  // of 4 DIFFERENT "Bars" items this modpack has (see CREATE_BARS_MATERIALS and
  // CREATEDECO_BARS_MATERIALS below for the other 3, each with their own recipes).
  { suffix: 'bars', name: 'TFC Bars', imgFolder: '/img/bars' },
  { suffix: 'bars_double', name: 'TFC Bars', imgFolder: '/img/bars' },
  { suffix: 'trapdoor', name: 'Trapdoor', imgFolder: '/img/trapdoor' },
  { suffix: 'spring', name: 'Spring', img: '/img/spring.png' },
  { suffix: 'small_spring', name: 'Small Spring', img: '/img/spring_small.png' },
  { suffix: 'buzzsaw_blade', name: 'Buzzsaw Blade', img: '/img/tool_head_buzz_saw.png' }
];

export const TOOL_ITEM_TYPES = [
  { suffix: 'pickaxe_head', name: 'Pickaxe Head', img: '/img/tool_head_pickaxe.png' },
  { suffix: 'axe_head', name: 'Axe Head', img: '/img/tool_head_axe.png' },
  { suffix: 'shovel_head', name: 'Shovel Head', img: '/img/tool_head_shovel.png' },
  { suffix: 'hoe_head', name: 'Hoe Head', img: '/img/tool_head_hoe.png' },
  { suffix: 'hammer_head', name: 'Hammer Head', img: '/img/tool_head_hammer.png' },
  { suffix: 'saw_blade', name: 'Saw Blade', img: '/img/tool_head_saw.png' },
  { suffix: 'scythe_blade', name: 'Scythe Blade', img: '/img/tool_head_scythe.png' },
  { suffix: 'file_head', name: 'File Head', img: '/img/tool_head_file.png' },
  { suffix: 'knife_blade', name: 'Knife Blade', img: '/img/tool_head_knife.png' },
  { suffix: 'screwdriver_tip', name: 'Screwdriver Tip', img: '/img/tool_head_screwdriver.png' },
  { suffix: 'wrench_tip', name: 'Wrench Tip', img: '/img/tool_head_wrench.png' },
  { suffix: 'spade_head', name: 'Spade Head', img: '/img/tool_head_spade.png' },
  { suffix: 'mining_hammer_head', name: 'Mining Hammer Head', img: '/img/tool_head_mining_hammer.png' },
  { suffix: 'sword_blade', name: 'Sword Blade', img: '/img/tool_head_sword.png' },
  { suffix: 'knife_butchery_head', name: 'Butchery Knife Head', img: '/img/tool_head_butchery_knife.png' },
  { suffix: 'scraping_knife_blade', name: 'Scraping Knife Blade', imgFolder: '/img/scraping_knife_blade' },
  { suffix: 'wire_cutter_head', name: 'Wire Cutter Head', img: '/img/tool_head_wire_cutter.png' },
  { suffix: 'fish_hook', name: 'Fish Hook', imgFolder: '/img/fish_hook' },
  { suffix: 'tuyere', name: 'Tuyere', imgFolder: '/img/tuyere' },
  // No flat icon asset exists (real art is a UV-packed atlas for a full 3D model) -
  // this is a 16x16 crop of the actual in-game inventory render (isometric icon),
  // taken from a player screenshot, not extracted from the mod jar.
  { suffix: 'shield', name: 'Shield', imgFolder: '/img/shield' },
  { suffix: 'unfinished_helmet', name: 'Unfinished Helmet', imgFolder: '/img/unfinished_helmet' },
  { suffix: 'unfinished_chestplate', name: 'Unfinished Chestplate', imgFolder: '/img/unfinished_chestplate' },
  { suffix: 'unfinished_greaves', name: 'Unfinished Greaves', imgFolder: '/img/unfinished_greaves' },
  { suffix: 'unfinished_boots', name: 'Unfinished Boots', imgFolder: '/img/unfinished_boots' },
  // Vanilla TFC recipes, unmodified by TFG's kubejs (not found in any addAnvilRecipe
  // call - confirmed against the TFC jar's own data/tfc/recipes/anvil/*.json).
  { suffix: 'mace_head', name: 'Mace Head', imgFolder: '/img/mace_head' },
  { suffix: 'chain', name: 'Chain', imgFolder: '/img/chain' },
  { suffix: 'chisel_head', name: 'Chisel Head', imgFolder: '/img/chisel_head' },
  { suffix: 'javelin_head', name: 'Javelin Head', imgFolder: '/img/javelin_head' },
  { suffix: 'lamp', name: 'Unfinished Lamp', imgFolder: '/img/unfinished_lamp' },
  { suffix: 'propick_head', name: 'Prospector’s Pick Head', imgFolder: '/img/propick_head' }
];

// "Bars" is NOT a TFC recipe at all - it's createdeco's own decorative bars/trellis
// item (server_scripts/createdeco/recipes.js), registered under the "tfg:anvil/..."
// namespace (not "tfc:anvil/...") with its own metal-name mapping distinct from the
// GTCEU material id, and only for these 6 materials. "iron" (wrought_iron) skips the
// plain bars recipe entirely - only its overlay variant exists.
export const CREATEDECO_BARS_MATERIALS = [
  { materialId: 'tin-alloy', metal: 'andesite', hasPlainBars: true },
  { materialId: 'brass', metal: 'brass', hasPlainBars: true },
  { materialId: 'wrought-iron', metal: 'iron', hasPlainBars: false },
  { materialId: 'copper', metal: 'copper', hasPlainBars: true },
  { materialId: 'steel', metal: 'industrial_iron', hasPlainBars: true },
  { materialId: 'zinc', metal: 'zinc', hasPlainBars: true }
];

export function getCreatedecoBarsId(metal, suffix) {
  return `tfg:anvil/createdeco_${metal}_${suffix}`;
}

// The base Create mod's own bars (create:<metal>_bars) - a 3rd distinct "Bars" item,
// only for these 3 materials (server_scripts/create/recipes.js, `create_metals`).
export const CREATE_BARS_MATERIALS = [
  { materialId: 'tin-alloy', metal: 'andesite' },
  { materialId: 'brass', metal: 'brass' },
  { materialId: 'copper', metal: 'copper' }
];

export function getCreateBarsId(metal, suffix) {
  return `tfg:anvil/create_${metal}_${suffix}`;
}

// tfchotornot's own "Tong Part" (tfchotornot:anvil/tong_part/<material>) - a real,
// unmodified addon recipe (single ingot input, tier varies by material). TFG only
// removes the cast_iron one (server_scripts/tfchotornot/recipes.js), so every other
// TFC_WORKABLE_MATERIAL that this mod ships a recipe for keeps working as-is.
export const TONG_PART_MATERIALS = [
  'copper', 'bismuth-bronze', 'black-bronze', 'bronze', 'wrought-iron', 'steel',
  'black-steel', 'blue-steel', 'red-steel', 'gold', 'silver', 'rose-gold',
  'sterling-silver', 'brass', 'nickel', 'tin', 'zinc', 'bismuth'
];

// rnr's own "Mattock Head" (rnr:anvil/<material>_mattock_head) - a real, unmodified
// addon recipe, only for the 9 classic TFC tool-tier metals (single ingot input).
export const MATTOCK_HEAD_MATERIALS = [
  'copper', 'bismuth-bronze', 'black-bronze', 'bronze', 'wrought-iron',
  'steel', 'black-steel', 'blue-steel', 'red-steel'
];

export function getMattockHeadId(materialId) {
  return `rnr:anvil/${toMaterialName(materialId)}_mattock_head`;
}

export function getTongPartId(materialId) {
  return `tfchotornot:anvil/tong_part/${toMaterialName(materialId)}`;
}

// afc's own "Tree Tap" (afc:anvil/tree_tap) - copper only, hardcoded in the addon's
// own script (not per-material - there is no tree_tap for any other metal).
export const TREE_TAP_ID = 'afc:anvil/tree_tap';

// firmalife's own "Sprinkler" (firmalife:anvil/sprinkler) - copper only, made from
// a Plate (forge:sheets/copper), not an ingot - hardcoded, no other metal variant.
export const SPRINKLER_ID = 'firmalife:anvil/sprinkler';

// "Door" is 2 different, unrelated recipes, each material-exclusive:
// - createdeco's own copper door (tfg:anvil/createdeco_copper_door), from a DOUBLE
//   plate (server_scripts/createdeco/recipes.js) - copper only among the createdeco
//   metals, since that recipe is skipped for "iron" there.
// - TFC vanilla's iron door (tfc:anvil/iron_door, reuses minecraft:iron_door as the
//   result item), from a SINGLE plate/sheet (not double!) - wrought_iron only.
export const COPPER_DOOR_ID = 'tfg:anvil/createdeco_copper_door';
export const WROUGHT_IRON_DOOR_ID = 'tfc:anvil/iron_door';

function resolveImg(itemType, materialId) {
  if (itemType.imgFolder) {
    return `${itemType.imgFolder}/${toMaterialName(materialId)}.png`;
  }
  return itemType.img;
}

// One row per (material, item type) combination that actually exists in the
// modpack: universal item types for every TFC-workable material, tool/armor
// item types only for the 9 classic TFC tool tiers.
export function getAllRecipeRows() {
  const rows = [];

  for (const materialId of TFC_WORKABLE_MATERIALS) {
    for (const itemType of UNIVERSAL_ITEM_TYPES) {
      rows.push({
        materialId,
        suffix: itemType.suffix,
        name: itemType.name,
        img: resolveImg(itemType, materialId),
        id: getRecipeId(materialId, itemType.suffix)
      });
    }

    if (TOOL_TIER_MATERIALS.includes(materialId)) {
      for (const itemType of TOOL_ITEM_TYPES) {
        rows.push({
          materialId,
          suffix: itemType.suffix,
          name: itemType.name,
          img: resolveImg(itemType, materialId),
          id: getRecipeId(materialId, itemType.suffix)
        });
      }
    }
  }

  for (const { materialId, metal, hasPlainBars } of CREATEDECO_BARS_MATERIALS) {
    const suffixes = hasPlainBars
      ? ['bars', 'bars_double', 'bars_overlay', 'bars_overlay_double']
      : ['bars_overlay', 'bars_overlay_double'];

    for (const suffix of suffixes) {
      const isOverlay = suffix.startsWith('bars_overlay');
      // The "Bars Overlay" item's real icon is base bars + a tinted layer on top
      // (item/generated layer0+layer1). The app's img+overlay two-layer rendering
      // is meant for GTCEU shine highlights, not this - using it here looked wrong,
      // so this is pre-composited into one flat PNG instead (see composite_bars.mjs
      // in conversation history).
      rows.push({
        materialId,
        suffix: `createdeco_${suffix}`,
        name: isOverlay ? 'Createdeco Bars Overlay' : 'Createdeco Bars',
        img: isOverlay
          ? `/img/createdeco_bars/${metal}_bars_overlay_composited.png`
          : `/img/createdeco_bars/${metal}_bars.png`,
        id: getCreatedecoBarsId(metal, suffix)
      });
    }
  }

  for (const { materialId, metal } of CREATE_BARS_MATERIALS) {
    for (const suffix of ['bars', 'bars_double']) {
      rows.push({
        materialId,
        suffix: `create_${suffix}`,
        name: 'Create Bars',
        img: `/img/create_bars/${metal}_bars.png`,
        id: getCreateBarsId(metal, suffix)
      });
    }
  }

  for (const materialId of TONG_PART_MATERIALS) {
    rows.push({
      materialId,
      suffix: 'tong_part',
      name: 'Tong Part',
      img: `/img/tong_part/${toMaterialName(materialId)}.png`,
      id: getTongPartId(materialId)
    });
  }

  rows.push({
    materialId: 'copper',
    suffix: 'tree_tap',
    name: 'Tree Tap',
    img: '/img/tree_tap.png',
    id: TREE_TAP_ID
  });

  for (const materialId of MATTOCK_HEAD_MATERIALS) {
    rows.push({
      materialId,
      suffix: 'mattock_head',
      name: 'Mattock Head',
      img: `/img/mattock_head/${toMaterialName(materialId)}.png`,
      id: getMattockHeadId(materialId)
    });
  }

  rows.push({
    materialId: 'copper',
    suffix: 'sprinkler',
    name: 'Sprinkler',
    img: '/img/sprinkler.png',
    id: SPRINKLER_ID
  });

  rows.push({
    materialId: 'copper',
    suffix: 'door',
    name: 'Door',
    img: '/img/copper_door.png',
    id: COPPER_DOOR_ID
  });

  rows.push({
    materialId: 'wrought-iron',
    suffix: 'door',
    name: 'Door',
    img: '/img/iron_door.png',
    id: WROUGHT_IRON_DOOR_ID
  });

  return rows;
}

export function getRecipeRow(materialId, suffix) {
  return getAllRecipeRows().find((row) => row.materialId === materialId && row.suffix === suffix);
}
