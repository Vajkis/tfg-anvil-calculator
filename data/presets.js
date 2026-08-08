import { getMaterialById } from './materials.js';

export const METALS = [
  {
    id: 'copper',
    name: 'Copper',
    img: 'img/ingot/copper.png',
    color: getMaterialById('copper').color,
    subcategories: [
      {
        id: 'copper-ingot',
        name: 'Copper Ingot',
        img: 'img/ingot/copper.png',
        presets: [
          {
            id: 'copper-nugget',
            name: 'Copper Nugget',
            img: 'img/nugget.png',
            overlay: 'img/nugget_overlay.png',
            last3: ['punch', 'hit', 'punch'],
            recipeId: 'tfc:anvil/copper_nugget'
          },
          {
            id: 'copper-axe-head',
            name: 'Copper Axe Head',
            img: 'img/tool_head_axe.png',
            last3: ['punch', 'hit', 'upset'],
            recipeId: 'tfc:anvil/copper_axe_head'
          },
          {
            id: 'copper-javelin-head',
            name: 'Copper Javelin Head',
            img: 'img/javelin_head/copper.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/copper_javelin_head'
          },
          {
            id: 'copper-chisel-head',
            name: 'Copper Chisel Head',
            img: 'img/chisel_head/copper.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/copper_chisel_head'
          },
          {
            id: 'copper-shovel-head',
            name: 'Copper Shovel Head',
            img: 'img/tool_head_shovel.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/copper_shovel_head'
          },
          {
            id: 'copper-pickaxe-head',
            name: 'Copper Pickaxe Head',
            img: 'img/tool_head_pickaxe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/copper_pickaxe_head'
          },
          {
            id: 'copper-tree-tap',
            name: 'Copper Tree Tap',
            img: 'img/tree_tap.png',
            last3: ['hit', 'upset', 'upset'],
            recipeId: 'afc:anvil/tree_tap'
          },
          {
            id: 'copper-rod',
            name: 'Copper Rod',
            img: 'img/rod.png',
            overlay: 'img/rod_overlay.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/copper_rod'
          },
          {
            id: 'copper-file-head',
            name: 'Copper File Head',
            img: 'img/tool_head_file.png',
            last3: ['upset', 'bend', 'punch'],
            recipeId: 'tfc:anvil/copper_file_head'
          },
          {
            id: 'copper-hammer-head',
            name: 'Copper Hammer Head',
            img: 'img/tool_head_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/copper_hammer_head'
          },
          {
            id: 'copper-knife-blade',
            name: 'Copper Knife Blade',
            img: 'img/tool_head_knife.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/copper_knife_blade'
          },
          {
            id: 'copper-propick-head',
            name: 'Copper Prospector’s Pick Head',
            img: 'img/propick_head/copper.png',
            last3: ['punch', 'draw', 'bend'],
            recipeId: 'tfc:anvil/copper_propick_head'
          },
          {
            id: 'copper-fish-hook',
            name: 'Copper Fish Hook',
            img: 'img/fish_hook/copper.png',
            last3: [],
            recipeId: 'tfc:anvil/copper_fish_hook'
          },
          {
            id: 'copper-scythe-blade',
            name: 'Copper Scythe Blade',
            img: 'img/tool_head_scythe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/copper_scythe_blade'
          },
          {
            id: 'copper-butchery-knife-head',
            name: 'Copper Butchery Knife Head',
            img: 'img/tool_head_butchery_knife.png',
            last3: ['punch', 'bend'],
            recipeId: 'tfc:anvil/copper_knife_butchery_head'
          },
          {
            id: 'copper-unfinished-lamp',
            name: 'Copper Unfinished Lamp',
            img: 'img/unfinished_lamp/copper.png',
            last3: ['bend', 'bend', 'draw'],
            recipeId: 'tfc:anvil/copper_lamp'
          },
          {
            id: 'copper-hoe-head',
            name: 'Copper Hoe Head',
            img: 'img/tool_head_hoe.png',
            last3: ['punch', 'hit', 'bend'],
            recipeId: 'tfc:anvil/copper_hoe_head'
          },
          {
            id: 'copper-tong-part',
            name: 'Copper Tong Part',
            img: 'img/tong_part/copper.png',
            last3: ['hit', 'draw', 'bend'],
            recipeId: 'tfchotornot:anvil/tong_part/copper'
          },
          {
            id: 'copper-chain',
            name: 'Copper Chain',
            img: 'img/chain/copper.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/copper_chain'
          },
          {
            id: 'copper-mattock-head',
            name: 'Copper Mattock Head',
            img: 'img/mattock_head/copper.png',
            last3: ['punch', 'punch', 'bend'],
            recipeId: 'rnr:anvil/copper_mattock_head'
          },
          {
            id: 'copper-saw-blade',
            name: 'Copper Saw Blade',
            img: 'img/tool_head_saw.png',
            last3: ['hit', 'hit'],
            recipeId: 'tfc:anvil/copper_saw_blade'
          },
          {
            id: 'copper-screwdriver-tip',
            name: 'Copper Screwdriver Tip',
            img: 'img/tool_head_screwdriver.png',
            overlay: 'img/tool_head_screwdriver_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/copper_screwdriver_tip'
          },
          {
            id: 'copper-tfc-bars',
            name: 'Copper Bars',
            img: 'img/bars/copper.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/copper_bars'
          },
          {
            id: 'copper-create-bars',
            name: 'Copper Bars',
            img: 'img/create_bars/copper_bars.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/create_copper_bars'
          },
          {
            id: 'copper-createdeco-bars-overlay',
            name: 'Copper Bars Overlay',
            img: 'img/createdeco_bars/copper_bars_overlay_composited.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_copper_bars_overlay'
          },
          {
            id: 'copper-createdeco-bars',
            name: 'Copper Bars',
            img: 'img/createdeco_bars/copper_bars.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_copper_bars'
          }
        ]
      },
      {
        id: 'copper-double-ingot',
        name: 'Copper Double Ingot',
        img: 'img/double_ingot/copper.png',
        presets: [
          {
            id: 'copper-plate',
            name: 'Copper Plate',
            img: 'img/plate/copper.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/copper_sheet'
          },
          {
            id: 'copper-wire-cutter-head',
            name: 'Copper Wire Cutter Head',
            img: 'img/tool_head_wire_cutter.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/copper_wire_cutter_head'
          },
          {
            id: 'copper-mace-head',
            name: 'Copper Mace Head',
            img: 'img/mace_head/copper.png',
            last3: ['hit', 'shrink', 'bend'],
            recipeId: 'tfc:anvil/copper_mace_head'
          },
          {
            id: 'copper-wrench-tip',
            name: 'Copper Wrench Tip',
            img: 'img/tool_head_wrench.png',
            overlay: 'img/tool_head_wrench_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/copper_wrench_tip'
          },
          {
            id: 'copper-sword-blade',
            name: 'Copper Sword Blade',
            img: 'img/tool_head_sword.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/copper_sword_blade'
          },
          {
            id: 'copper-scraping-knife-blade',
            name: 'Copper Scraping Knife Blade',
            img: 'img/scraping_knife_blade/copper.png',
            last3: ['hit', 'draw'],
            recipeId: 'tfc:anvil/copper_scraping_knife_blade'
          },
          {
            id: 'copper-spade-head',
            name: 'Copper Spade Head',
            img: 'img/tool_head_spade.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/copper_spade_head'
          },
          {
            id: 'copper-mining-hammer-head',
            name: 'Copper Mining Hammer Head',
            img: 'img/tool_head_mining_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/copper_mining_hammer_head'
          },
          {
            id: 'copper-tfc-bars-double',
            name: 'Copper Bars - Double Ingot',
            img: 'img/bars/copper.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/copper_bars_double'
          },
          {
            id: 'copper-create-bars-double',
            name: 'Copper Bars - Double Ingot',
            img: 'img/create_bars/copper_bars.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/create_copper_bars_double'
          },
          {
            id: 'copper-createdeco-bars-overlay-double',
            name: 'Copper Bars Overlay - Double Ingot',
            img: 'img/createdeco_bars/copper_bars_overlay_composited.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_copper_bars_overlay_double'
          },
          {
            id: 'copper-createdeco-bars-double',
            name: 'Copper Bars - Double Ingot',
            img: 'img/createdeco_bars/copper_bars.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_copper_bars_double'
          }
        ]
      },
      {
        id: 'copper-plate',
        name: 'Copper Plate',
        img: 'img/plate/copper.png',
        presets: [
          {
            id: 'copper-trapdoor',
            name: 'Copper Trapdoor',
            img: 'img/trapdoor/copper.png',
            last3: ['bend', 'draw', 'draw'],
            recipeId: 'tfc:anvil/copper_trapdoor'
          },
          {
            id: 'copper-sprinkler',
            name: 'Sprinkler',
            img: 'img/_items/sprinkler.png',
            last3: ['hit', 'hit', 'punch'],
            recipeId: 'firmalife:anvil/sprinkler'
          },
          {
            id: 'copper-unfinished-boots',
            name: 'Copper Unfinished Boots',
            img: 'img/unfinished_boots/copper.png',
            last3: ['bend', 'bend', 'shrink'],
            recipeId: 'tfc:anvil/copper_unfinished_boots'
          }
        ]
      },
      {
        id: 'copper-double-plate',
        name: 'Copper Double Plate',
        img: 'img/double_plate/copper.png',
        presets: [
          {
            id: 'copper-tuyere',
            name: 'Copper Tuyere',
            img: 'img/tuyere/copper.png',
            last3: ['bend', 'bend'],
            recipeId: 'tfc:anvil/copper_tuyere'
          },
          {
            id: 'copper-unfinished-helmet',
            name: 'Copper Unfinished Helmet',
            img: 'img/unfinished_helmet/copper.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/copper_unfinished_helmet'
          },
          {
            id: 'copper-unfinished-chestplate',
            name: 'Copper Unfinished Chestplate',
            img: 'img/unfinished_chestplate/copper.png',
            last3: ['hit', 'hit', 'upset'],
            recipeId: 'tfc:anvil/copper_unfinished_chestplate'
          },
          {
            id: 'copper-unfinished-greaves',
            name: 'Copper Unfinished Greaves',
            img: 'img/unfinished_greaves/copper.png',
            last3: [],
            recipeId: 'tfc:anvil/copper_unfinished_greaves'
          },
          {
            id: 'copper-shield',
            name: 'Copper Shield',
            img: 'img/shield/copper.png',
            last3: ['upset', 'bend', 'bend'],
            recipeId: 'tfc:anvil/copper_shield'
          },
          {
            id: 'copper-door',
            name: 'Copper Door',
            img: 'img/door/copper.png',
            last3: ['draw', 'draw', 'punch'],
            recipeId: 'tfg:anvil/createdeco_copper_door'
          }
        ]
      },
      {
        id: 'copper-rod',
        name: 'Copper Rod',
        img: 'img/rod.png',
        overlay: 'img/rod_overlay.png',
        presets: [
          {
            id: 'copper-small-spring',
            name: 'Copper Small Spring',
            img: 'img/spring_small.png',
            overlay: 'img/spring_small_overlay.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/copper_small_spring'
          },
          {
            id: 'copper-ring',
            name: 'Copper Ring',
            img: 'img/ring.png',
            overlay: 'img/ring_overlay.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/copper_ring'
          },
          {
            id: 'copper-screw',
            name: 'Copper Screw',
            img: 'img/screw.png',
            overlay: 'img/screw_overlay.png',
            last3: ['punch', 'punch', 'shrink'],
            recipeId: 'tfc:anvil/copper_screw'
          },
          {
            id: 'copper-bolt',
            name: 'Copper Bolt',
            img: 'img/bolt.png',
            overlay: 'img/bolt_overlay.png',
            last3: ['punch', 'draw', 'draw'],
            recipeId: 'tfc:anvil/copper_bolt'
          },
          {
            id: 'copper-spindle-head',
            name: 'Copper Spindle Head',
            img: 'img/spindle_head/copper.png',
            last3: ['draw', 'upset', 'shrink'],
            recipeId: 'tfg:anvil/copper_spindle_head'
          }
        ]
      },
      {
        id: 'copper-long-rod',
        name: 'Copper Long Rod',
        img: 'img/rod_long.png',
        overlay: 'img/rod_long_overlay.png',
        presets: [
          {
            id: 'copper-spring',
            name: 'Copper Spring',
            img: 'img/spring.png',
            overlay: 'img/spring_overlay.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/copper_spring'
          }
        ]
      }
    ]
  },
  {
    id: 'bronze',
    name: 'Bronze',
    img: 'img/ingot/bronze.png',
    color: getMaterialById('bronze').color,
    subcategories: [
      {
        id: 'bronze-ingot',
        name: 'Bronze Ingot',
        img: 'img/ingot/bronze.png',
        presets: [
          {
            id: 'bronze-nugget',
            name: 'Bronze Nugget',
            img: 'img/nugget.png',
            overlay: 'img/nugget_overlay.png',
            last3: ['punch', 'hit', 'punch'],
            recipeId: 'tfc:anvil/bronze_nugget'
          },
          {
            id: 'bronze-axe-head',
            name: 'Bronze Axe Head',
            img: 'img/tool_head_axe.png',
            last3: ['punch', 'hit', 'upset'],
            recipeId: 'tfc:anvil/bronze_axe_head'
          },
          {
            id: 'bronze-javelin-head',
            name: 'Bronze Javelin Head',
            img: 'img/javelin_head/bronze.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/bronze_javelin_head'
          },
          {
            id: 'bronze-chisel-head',
            name: 'Bronze Chisel Head',
            img: 'img/chisel_head/bronze.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/bronze_chisel_head'
          },
          {
            id: 'bronze-shovel-head',
            name: 'Bronze Shovel Head',
            img: 'img/tool_head_shovel.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/bronze_shovel_head'
          },
          {
            id: 'bronze-pickaxe-head',
            name: 'Bronze Pickaxe Head',
            img: 'img/tool_head_pickaxe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/bronze_pickaxe_head'
          },
          {
            id: 'bronze-rod',
            name: 'Bronze Rod',
            img: 'img/rod.png',
            overlay: 'img/rod_overlay.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/bronze_rod'
          },
          {
            id: 'bronze-file-head',
            name: 'Bronze File Head',
            img: 'img/tool_head_file.png',
            last3: ['upset', 'bend', 'punch'],
            recipeId: 'tfc:anvil/bronze_file_head'
          },
          {
            id: 'bronze-hammer-head',
            name: 'Bronze Hammer Head',
            img: 'img/tool_head_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/bronze_hammer_head'
          },
          {
            id: 'bronze-knife-blade',
            name: 'Bronze Knife Blade',
            img: 'img/tool_head_knife.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/bronze_knife_blade'
          },
          {
            id: 'bronze-propick-head',
            name: 'Bronze Prospector’s Pick Head',
            img: 'img/propick_head/bronze.png',
            last3: ['punch', 'draw', 'bend'],
            recipeId: 'tfc:anvil/bronze_propick_head'
          },
          {
            id: 'bronze-fish-hook',
            name: 'Bronze Fish Hook',
            img: 'img/fish_hook/bronze.png',
            last3: [],
            recipeId: 'tfc:anvil/bronze_fish_hook'
          },
          {
            id: 'bronze-scythe-blade',
            name: 'Bronze Scythe Blade',
            img: 'img/tool_head_scythe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/bronze_scythe_blade'
          },
          {
            id: 'bronze-butchery-knife-head',
            name: 'Bronze Butchery Knife Head',
            img: 'img/tool_head_butchery_knife.png',
            last3: ['punch', 'bend'],
            recipeId: 'tfc:anvil/bronze_knife_butchery_head'
          },
          {
            id: 'bronze-lamp',
            name: 'Bronze Unfinished Lamp',
            img: 'img/unfinished_lamp/bronze.png',
            last3: ['bend', 'bend', 'draw'],
            recipeId: 'tfc:anvil/bronze_lamp'
          },
          {
            id: 'bronze-hoe-head',
            name: 'Bronze Hoe Head',
            img: 'img/tool_head_hoe.png',
            last3: ['punch', 'hit', 'bend'],
            recipeId: 'tfc:anvil/bronze_hoe_head'
          },
          {
            id: 'bronze-tong-part',
            name: 'Bronze Tong Part',
            img: 'img/tong_part/bronze.png',
            last3: ['hit', 'draw', 'bend'],
            recipeId: 'tfchotornot:anvil/tong_part/bronze'
          },
          {
            id: 'bronze-chain',
            name: 'Bronze Chain',
            img: 'img/chain/bronze.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/bronze_chain'
          },
          {
            id: 'bronze-mattock-head',
            name: 'Bronze Mattock Head',
            img: 'img/mattock_head/bronze.png',
            last3: ['punch', 'punch', 'bend'],
            recipeId: 'rnr:anvil/bronze_mattock_head'
          },
          {
            id: 'bronze-saw-blade',
            name: 'Bronze Saw Blade',
            img: 'img/tool_head_saw.png',
            last3: ['hit', 'hit'],
            recipeId: 'tfc:anvil/bronze_saw_blade'
          },
          {
            id: 'bronze-screwdriver-tip',
            name: 'Bronze Screwdriver Tip',
            img: 'img/tool_head_screwdriver.png',
            overlay: 'img/tool_head_screwdriver_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/bronze_screwdriver_tip'
          },
          {
            id: 'bronze-small-gear',
            name: 'Bronze Small Gear',
            img: 'img/gear_small.png',
            overlay: 'img/gear_small_overlay.png',
            last3: ['hit', 'shrink', 'draw'],
            recipeId: 'tfc:anvil/bronze_small_gear'
          },
          {
            id: 'bronze-tfc-bars',
            name: 'Bronze Bars',
            img: 'img/bars/bronze.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/bronze_bars'
          }
        ]
      },
      {
        id: 'bronze-double-ingot',
        name: 'Bronze Double Ingot',
        img: 'img/double_ingot/bronze.png',
        presets: [
          {
            id: 'bronze-plate',
            name: 'Bronze Plate',
            img: 'img/plate/bronze.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/bronze_sheet'
          },
          {
            id: 'bronze-wire-cutter-head',
            name: 'Bronze Wire Cutter Head',
            img: 'img/tool_head_wire_cutter.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/bronze_wire_cutter_head'
          },
          {
            id: 'bronze-mace-head',
            name: 'Bronze Mace Head',
            img: 'img/mace_head/bronze.png',
            last3: ['hit', 'shrink', 'bend'],
            recipeId: 'tfc:anvil/bronze_mace_head'
          },
          {
            id: 'bronze-wrench-tip',
            name: 'Bronze Wrench Tip',
            img: 'img/tool_head_wrench.png',
            overlay: 'img/tool_head_wrench_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/bronze_wrench_tip'
          },
          {
            id: 'bronze-sword-blade',
            name: 'Bronze Sword Blade',
            img: 'img/tool_head_sword.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/bronze_sword_blade'
          },
          {
            id: 'bronze-scraping-knife-blade',
            name: 'Bronze Scraping Knife Blade',
            img: 'img/scraping_knife_blade/bronze.png',
            last3: ['hit', 'draw'],
            recipeId: 'tfc:anvil/bronze_scraping_knife_blade'
          },
          {
            id: 'bronze-spade-head',
            name: 'Bronze Spade Head',
            img: 'img/tool_head_spade.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/bronze_spade_head'
          },
          {
            id: 'bronze-mining-hammer-head',
            name: 'Bronze Mining Hammer Head',
            img: 'img/tool_head_mining_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/bronze_mining_hammer_head'
          },
          {
            id: 'bronze-tfc-bars-double',
            name: 'Bronze Bars - Double Ingot',
            img: 'img/bars/bronze.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/bronze_bars_double'
          },
          {
            id: 'bronze-oar-lock',
            name: 'OarLock',
            img: 'img/_items/oarlock.png',
            last3: ['bend', 'hit', 'hit'],
            recipeId: 'tfg:anvil/alekiships/oarlock/bronze'
          }
        ]
      },
      {
        id: 'bronze-plate',
        name: 'Bronze Plate',
        img: 'img/plate/bronze.png',
        presets: [
          {
            id: 'bronze-trapdoor',
            name: 'Bronze Trapdoor',
            img: 'img/trapdoor/bronze.png',
            last3: ['bend', 'draw', 'draw'],
            recipeId: 'tfc:anvil/bronze_trapdoor'
          },
          {
            id: 'bronze-unfinished-boots',
            name: 'Bronze Unfinished Boots',
            img: 'img/unfinished_boots/bronze.png',
            last3: ['bend', 'bend', 'shrink'],
            recipeId: 'tfc:anvil/bronze_unfinished_boots'
          }
        ]
      },
      {
        id: 'bronze-double-plate',
        name: 'Bronze Double Plate',
        img: 'img/double_plate/bronze.png',
        presets: [
          {
            id: 'bronze-tuyere',
            name: 'Bronze Tuyere',
            img: 'img/tuyere/bronze.png',
            last3: ['bend', 'bend'],
            recipeId: 'tfc:anvil/bronze_tuyere'
          },
          {
            id: 'bronze-unfinished-helmet',
            name: 'Bronze Unfinished Helmet',
            img: 'img/unfinished_helmet/bronze.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/bronze_unfinished_helmet'
          },
          {
            id: 'bronze-unfinished-chestplate',
            name: 'Bronze Unfinished Chestplate',
            img: 'img/unfinished_chestplate/bronze.png',
            last3: ['hit', 'hit', 'upset'],
            recipeId: 'tfc:anvil/bronze_unfinished_chestplate'
          },
          {
            id: 'bronze-unfinished-greaves',
            name: 'Bronze Unfinished Greaves',
            img: 'img/unfinished_greaves/bronze.png',
            last3: [],
            recipeId: 'tfc:anvil/bronze_unfinished_greaves'
          },
          {
            id: 'bronze-shield',
            name: 'Bronze Shield',
            img: 'img/shield/bronze.png',
            last3: ['upset', 'bend', 'bend'],
            recipeId: 'tfc:anvil/bronze_shield'
          }
        ]
      },
      {
        id: 'bronze-rod',
        name: 'Bronze Rod',
        img: 'img/rod.png',
        overlay: 'img/rod_overlay.png',
        presets: [
          {
            id: 'bronze-ring',
            name: 'Bronze Ring',
            img: 'img/ring.png',
            overlay: 'img/ring_overlay.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/bronze_ring'
          },
          {
            id: 'bronze-screw',
            name: 'Bronze Screw',
            img: 'img/screw.png',
            overlay: 'img/screw_overlay.png',
            last3: ['punch', 'punch', 'shrink'],
            recipeId: 'tfc:anvil/bronze_screw'
          },
          {
            id: 'bronze-bolt',
            name: 'Bronze Bolt',
            img: 'img/bolt.png',
            overlay: 'img/bolt_overlay.png',
            last3: ['punch', 'draw', 'draw'],
            recipeId: 'tfc:anvil/bronze_bolt'
          },
          {
            id: 'bronze-spindle-head',
            name: 'Bronze Spindle Head',
            img: 'img/spindle_head/bronze.png',
            last3: ['draw', 'upset', 'shrink'],
            recipeId: 'tfg:anvil/bronze_spindle_head'
          }
        ]
      }
    ]
  },
  {
    id: 'bismuth-bronze',
    name: 'Bismuth Bronze',
    img: 'img/ingot/bismuth_bronze.png',
    color: getMaterialById('bismuth-bronze').color,
    subcategories: [
      {
        id: 'bismuth-bronze-ingot',
        name: 'Bismuth Bronze Ingot',
        img: 'img/ingot/bismuth_bronze.png',
        presets: [
          {
            id: 'bismuth-bronze-nugget',
            name: 'Bismuth Bronze Nugget',
            img: 'img/nugget.png',
            overlay: 'img/nugget_overlay.png',
            last3: ['punch', 'hit', 'punch'],
            recipeId: 'tfc:anvil/bismuth_bronze_nugget'
          },
          {
            id: 'bismuth-bronze-axe-head',
            name: 'Bismuth Bronze Axe Head',
            img: 'img/tool_head_axe.png',
            last3: ['punch', 'hit', 'upset'],
            recipeId: 'tfc:anvil/bismuth_bronze_axe_head'
          },
          {
            id: 'bismuth-bronze-javelin-head',
            name: 'Bismuth Bronze Javelin Head',
            img: 'img/javelin_head/bismuth_bronze.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/bismuth_bronze_javelin_head'
          },
          {
            id: 'bismuth-bronze-chisel-head',
            name: 'Bismuth Bronze Chisel Head',
            img: 'img/chisel_head/bismuth_bronze.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/bismuth_bronze_chisel_head'
          },
          {
            id: 'bismuth-bronze-shovel-head',
            name: 'Bismuth Bronze Shovel Head',
            img: 'img/tool_head_shovel.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/bismuth_bronze_shovel_head'
          },
          {
            id: 'bismuth-bronze-pickaxe-head',
            name: 'Bismuth Bronze Pickaxe Head',
            img: 'img/tool_head_pickaxe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/bismuth_bronze_pickaxe_head'
          },
          {
            id: 'bismuth-bronze-rod',
            name: 'Bismuth Bronze Rod',
            img: 'img/rod.png',
            overlay: 'img/rod_overlay.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/bismuth_bronze_rod'
          },
          {
            id: 'bismuth-bronze-file-head',
            name: 'Bismuth Bronze File Head',
            img: 'img/tool_head_file.png',
            last3: ['upset', 'bend', 'punch'],
            recipeId: 'tfc:anvil/bismuth_bronze_file_head'
          },
          {
            id: 'bismuth-bronze-hammer-head',
            name: 'Bismuth Bronze Hammer Head',
            img: 'img/tool_head_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/bismuth_bronze_hammer_head'
          },
          {
            id: 'bismuth-bronze-knife-blade',
            name: 'Bismuth Bronze Knife Blade',
            img: 'img/tool_head_knife.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/bismuth_bronze_knife_blade'
          },
          {
            id: 'bismuth-bronze-propick-head',
            name: 'Bismuth Bronze Prospector’s Pick Head',
            img: 'img/propick_head/bismuth_bronze.png',
            last3: ['punch', 'draw', 'bend'],
            recipeId: 'tfc:anvil/bismuth_bronze_propick_head'
          },
          {
            id: 'bismuth-bronze-fish-hook',
            name: 'Bismuth Bronze Fish Hook',
            img: 'img/fish_hook/bismuth_bronze.png',
            last3: [],
            recipeId: 'tfc:anvil/bismuth_bronze_fish_hook'
          },
          {
            id: 'bismuth-bronze-scythe-blade',
            name: 'Bismuth Bronze Scythe Blade',
            img: 'img/tool_head_scythe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/bismuth_bronze_scythe_blade'
          },
          {
            id: 'bismuth-bronze-butchery-knife-head',
            name: 'Bismuth Bronze Butchery Knife Head',
            img: 'img/tool_head_butchery_knife.png',
            last3: ['punch', 'bend'],
            recipeId: 'tfc:anvil/bismuth_bronze_knife_butchery_head'
          },
          {
            id: 'bismuth-bronze-lamp',
            name: 'Bismuth Bronze Unfinished Lamp',
            img: 'img/unfinished_lamp/bismuth_bronze.png',
            last3: ['bend', 'bend', 'draw'],
            recipeId: 'tfc:anvil/bismuth_bronze_lamp'
          },
          {
            id: 'bismuth-bronze-hoe-head',
            name: 'Bismuth Bronze Hoe Head',
            img: 'img/tool_head_hoe.png',
            last3: ['punch', 'hit', 'bend'],
            recipeId: 'tfc:anvil/bismuth_bronze_hoe_head'
          },
          {
            id: 'bismuth-bronze-tong-part',
            name: 'Bismuth Bronze Tong Part',
            img: 'img/tong_part/bismuth_bronze.png',
            last3: ['hit', 'draw', 'bend'],
            recipeId: 'tfchotornot:anvil/tong_part/bismuth_bronze'
          },
          {
            id: 'bismuth-bronze-chain',
            name: 'Bismuth Bronze Chain',
            img: 'img/chain/bismuth_bronze.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/bismuth_bronze_chain'
          },
          {
            id: 'bismuth-bronze-mattock-head',
            name: 'Bismuth Bronze Mattock Head',
            img: 'img/mattock_head/bismuth_bronze.png',
            last3: ['punch', 'punch', 'bend'],
            recipeId: 'rnr:anvil/bismuth_bronze_mattock_head'
          },
          {
            id: 'bismuth-bronze-saw-blade',
            name: 'Bismuth Bronze Saw Blade',
            img: 'img/tool_head_saw.png',
            last3: ['hit', 'hit'],
            recipeId: 'tfc:anvil/bismuth_bronze_saw_blade'
          },
          {
            id: 'bismuth-bronze-screwdriver-tip',
            name: 'Bismuth Bronze Screwdriver Tip',
            img: 'img/tool_head_screwdriver.png',
            overlay: 'img/tool_head_screwdriver_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/bismuth_bronze_screwdriver_tip'
          },
          {
            id: 'bismuth-bronze-small-gear',
            name: 'Bismuth Bronze Small Gear',
            img: 'img/gear_small.png',
            overlay: 'img/gear_small_overlay.png',
            last3: ['hit', 'shrink', 'draw'],
            recipeId: 'tfc:anvil/bismuth_bronze_small_gear'
          },
          {
            id: 'bismuth-bronze-tfc-bars',
            name: 'Bismuth Bronze Bars',
            img: 'img/bars/bismuth_bronze.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/bismuth_bronze_bars'
          }
        ]
      },
      {
        id: 'bismuth-bronze-double-ingot',
        name: 'Bismuth Bronze Double Ingot',
        img: 'img/double_ingot/bismuth_bronze.png',
        presets: [
          {
            id: 'bismuth-bronze-plate',
            name: 'Bismuth Bronze Plate',
            img: 'img/plate/bismuth_bronze.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/bismuth_bronze_sheet'
          },
          {
            id: 'bismuth-bronze-wire-cutter-head',
            name: 'Bismuth Bronze Wire Cutter Head',
            img: 'img/tool_head_wire_cutter.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/bismuth_bronze_wire_cutter_head'
          },
          {
            id: 'bismuth-bronze-mace-head',
            name: 'Bismuth Bronze Mace Head',
            img: 'img/mace_head/bismuth_bronze.png',
            last3: ['hit', 'shrink', 'bend'],
            recipeId: 'tfc:anvil/bismuth_bronze_mace_head'
          },
          {
            id: 'bismuth-bronze-wrench-tip',
            name: 'Bismuth Bronze Wrench Tip',
            img: 'img/tool_head_wrench.png',
            overlay: 'img/tool_head_wrench_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/bismuth_bronze_wrench_tip'
          },
          {
            id: 'bismuth-bronze-sword-blade',
            name: 'Bismuth Bronze Sword Blade',
            img: 'img/tool_head_sword.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/bismuth_bronze_sword_blade'
          },
          {
            id: 'bismuth-bronze-scraping-knife-blade',
            name: 'Bismuth Bronze Scraping Knife Blade',
            img: 'img/scraping_knife_blade/bismuth_bronze.png',
            last3: ['hit', 'draw'],
            recipeId: 'tfc:anvil/bismuth_bronze_scraping_knife_blade'
          },
          {
            id: 'bismuth-bronze-spade-head',
            name: 'Bismuth Bronze Spade Head',
            img: 'img/tool_head_spade.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/bismuth_bronze_spade_head'
          },
          {
            id: 'bismuth-bronze-mining-hammer-head',
            name: 'Bismuth Bronze Mining Hammer Head',
            img: 'img/tool_head_mining_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/bismuth_bronze_mining_hammer_head'
          },
          {
            id: 'bismuth-bronze-tfc-bars-double',
            name: 'Bismuth Bronze Bars - Double Ingot',
            img: 'img/bars/bismuth_bronze.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/bismuth_bronze_bars_double'
          },
          {
            id: 'bismuth-bronze-oar-lock',
            name: 'Bismuth Bronze OarLock',
            img: 'img/_items/oarlock.png',
            last3: ['bend', 'hit', 'hit'],
            recipeId: 'tfg:anvil/alekiships/oarlock/bismuth_bronze'
          }
        ]
      },
      {
        id: 'bismuth-bronze-plate',
        name: 'Bismuth Bronze Plate',
        img: 'img/plate/bismuth_bronze.png',
        presets: [
          {
            id: 'bismuth-bronze-trapdoor',
            name: 'Bismuth Bronze Trapdoor',
            img: 'img/trapdoor/bismuth_bronze.png',
            last3: ['bend', 'draw', 'draw'],
            recipeId: 'tfc:anvil/bismuth_bronze_trapdoor'
          },
          {
            id: 'bismuth-bronze-unfinished-boots',
            name: 'Bismuth Bronze Unfinished Boots',
            img: 'img/unfinished_boots/bismuth_bronze.png',
            last3: ['bend', 'bend', 'shrink'],
            recipeId: 'tfc:anvil/bismuth_bronze_unfinished_boots'
          }
        ]
      },
      {
        id: 'bismuth-bronze-double-plate',
        name: 'Bismuth Bronze Double Plate',
        img: 'img/double_plate/bismuth_bronze.png',
        presets: [
          {
            id: 'bismuth-bronze-tuyere',
            name: 'Bismuth Bronze Tuyere',
            img: 'img/tuyere/bismuth_bronze.png',
            last3: ['bend', 'bend'],
            recipeId: 'tfc:anvil/bismuth_bronze_tuyere'
          },
          {
            id: 'bismuth-bronze-unfinished-helmet',
            name: 'Bismuth Bronze Unfinished Helmet',
            img: 'img/unfinished_helmet/bismuth_bronze.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/bismuth_bronze_unfinished_helmet'
          },
          {
            id: 'bismuth-bronze-unfinished-chestplate',
            name: 'Bismuth Bronze Unfinished Chestplate',
            img: 'img/unfinished_chestplate/bismuth_bronze.png',
            last3: ['hit', 'hit', 'upset'],
            recipeId: 'tfc:anvil/bismuth_bronze_unfinished_chestplate'
          },
          {
            id: 'bismuth-bronze-unfinished-greaves',
            name: 'Bismuth Bronze Unfinished Greaves',
            img: 'img/unfinished_greaves/bismuth_bronze.png',
            last3: [],
            recipeId: 'tfc:anvil/bismuth_bronze_unfinished_greaves'
          },
          {
            id: 'bismuth-bronze-shield',
            name: 'Bismuth Bronze Shield',
            img: 'img/shield/bismuth_bronze.png',
            last3: ['upset', 'bend', 'bend'],
            recipeId: 'tfc:anvil/bismuth_bronze_shield'
          }
        ]
      },
      {
        id: 'bismuth-bronze-rod',
        name: 'Bismuth Bronze Rod',
        img: 'img/rod.png',
        overlay: 'img/rod_overlay.png',
        presets: [
          {
            id: 'bismuth-bronze-ring',
            name: 'Bismuth Bronze Ring',
            img: 'img/ring.png',
            overlay: 'img/ring_overlay.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/bismuth_bronze_ring'
          },
          {
            id: 'bismuth-bronze-screw',
            name: 'Bismuth Bronze Screw',
            img: 'img/screw.png',
            overlay: 'img/screw_overlay.png',
            last3: ['punch', 'punch', 'shrink'],
            recipeId: 'tfc:anvil/bismuth_bronze_screw'
          },
          {
            id: 'bismuth-bronze-bolt',
            name: 'Bismuth Bronze Bolt',
            img: 'img/bolt.png',
            overlay: 'img/bolt_overlay.png',
            last3: ['punch', 'draw', 'draw'],
            recipeId: 'tfc:anvil/bismuth_bronze_bolt'
          },
          {
            id: 'bismuth-bronze-spindle-head',
            name: 'Bismuth Bronze Spindle Head',
            img: 'img/spindle_head/bismuth_bronze.png',
            last3: ['draw', 'upset', 'shrink'],
            recipeId: 'tfg:anvil/bismuth_bronze_spindle_head'
          }
        ]
      }
    ]
  },
  {
    id: 'black-bronze',
    name: 'Black Bronze',
    img: 'img/ingot/black_bronze.png',
    color: getMaterialById('black-bronze').color,
    subcategories: [
      {
        id: 'black-bronze-ingot',
        name: 'Black Bronze Ingot',
        img: 'img/ingot/black_bronze.png',
        presets: [
          {
            id: 'black-bronze-nugget',
            name: 'Black Bronze Nugget',
            img: 'img/nugget.png',
            overlay: 'img/nugget_overlay.png',
            last3: ['punch', 'hit', 'punch'],
            recipeId: 'tfc:anvil/black_bronze_nugget'
          },
          {
            id: 'black-bronze-axe-head',
            name: 'Black Bronze Axe Head',
            img: 'img/tool_head_axe.png',
            last3: ['punch', 'hit', 'upset'],
            recipeId: 'tfc:anvil/black_bronze_axe_head'
          },
          {
            id: 'black-bronze-javelin-head',
            name: 'Black Bronze Javelin Head',
            img: 'img/javelin_head/black_bronze.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/black_bronze_javelin_head'
          },
          {
            id: 'black-bronze-chisel-head',
            name: 'Black Bronze Chisel Head',
            img: 'img/chisel_head/black_bronze.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/black_bronze_chisel_head'
          },
          {
            id: 'black-bronze-shovel-head',
            name: 'Black Bronze Shovel Head',
            img: 'img/tool_head_shovel.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/black_bronze_shovel_head'
          },
          {
            id: 'black-bronze-pickaxe-head',
            name: 'Black Bronze Pickaxe Head',
            img: 'img/tool_head_pickaxe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/black_bronze_pickaxe_head'
          },
          {
            id: 'black-bronze-rod',
            name: 'Black Bronze Rod',
            img: 'img/rod.png',
            overlay: 'img/rod_overlay.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/black_bronze_rod'
          },
          {
            id: 'black-bronze-file-head',
            name: 'Black Bronze File Head',
            img: 'img/tool_head_file.png',
            last3: ['upset', 'bend', 'punch'],
            recipeId: 'tfc:anvil/black_bronze_file_head'
          },
          {
            id: 'black-bronze-hammer-head',
            name: 'Black Bronze Hammer Head',
            img: 'img/tool_head_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/black_bronze_hammer_head'
          },
          {
            id: 'black-bronze-knife-blade',
            name: 'Black Bronze Knife Blade',
            img: 'img/tool_head_knife.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/black_bronze_knife_blade'
          },
          {
            id: 'black-bronze-propick-head',
            name: 'Black Bronze Prospector’s Pick Head',
            img: 'img/propick_head/black_bronze.png',
            last3: ['punch', 'draw', 'bend'],
            recipeId: 'tfc:anvil/black_bronze_propick_head'
          },
          {
            id: 'black-bronze-fish-hook',
            name: 'Black Bronze Fish Hook',
            img: 'img/fish_hook/black_bronze.png',
            last3: [],
            recipeId: 'tfc:anvil/black_bronze_fish_hook'
          },
          {
            id: 'black-bronze-scythe-blade',
            name: 'Black Bronze Scythe Blade',
            img: 'img/tool_head_scythe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/black_bronze_scythe_blade'
          },
          {
            id: 'black-bronze-butchery-knife-head',
            name: 'Black Bronze Butchery Knife Head',
            img: 'img/tool_head_butchery_knife.png',
            last3: ['punch', 'bend'],
            recipeId: 'tfc:anvil/black_bronze_knife_butchery_head'
          },
          {
            id: 'black-bronze-lamp',
            name: 'Black Bronze Unfinished Lamp',
            img: 'img/unfinished_lamp/black_bronze.png',
            last3: ['bend', 'bend', 'draw'],
            recipeId: 'tfc:anvil/black_bronze_lamp'
          },
          {
            id: 'black-bronze-hoe-head',
            name: 'Black Bronze Hoe Head',
            img: 'img/tool_head_hoe.png',
            last3: ['punch', 'hit', 'bend'],
            recipeId: 'tfc:anvil/black_bronze_hoe_head'
          },
          {
            id: 'black-bronze-tong-part',
            name: 'Black Bronze Tong Part',
            img: 'img/tong_part/black_bronze.png',
            last3: ['hit', 'draw', 'bend'],
            recipeId: 'tfchotornot:anvil/tong_part/black_bronze'
          },
          {
            id: 'black-bronze-chain',
            name: 'Black Bronze Chain',
            img: 'img/chain/black_bronze.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/black_bronze_chain'
          },
          {
            id: 'black-bronze-mattock-head',
            name: 'Black Bronze Mattock Head',
            img: 'img/mattock_head/black_bronze.png',
            last3: ['punch', 'punch', 'bend'],
            recipeId: 'rnr:anvil/black_bronze_mattock_head'
          },
          {
            id: 'black-bronze-saw-blade',
            name: 'Black Bronze Saw Blade',
            img: 'img/tool_head_saw.png',
            last3: ['hit', 'hit'],
            recipeId: 'tfc:anvil/black_bronze_saw_blade'
          },
          {
            id: 'black-bronze-screwdriver-tip',
            name: 'Black Bronze Screwdriver Tip',
            img: 'img/tool_head_screwdriver.png',
            overlay: 'img/tool_head_screwdriver_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/black_bronze_screwdriver_tip'
          },
          {
            id: 'black-bronze-small-gear',
            name: 'Black Bronze Small Gear',
            img: 'img/gear_small.png',
            overlay: 'img/gear_small_overlay.png',
            last3: ['hit', 'shrink', 'draw'],
            recipeId: 'tfc:anvil/black_bronze_small_gear'
          },
          {
            id: 'black-bronze-tfc-bars',
            name: 'Black Bronze Bars',
            img: 'img/bars/black_bronze.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/black_bronze_bars'
          }
        ]
      },
      {
        id: 'black-bronze-double-ingot',
        name: 'Black Bronze Double Ingot',
        img: 'img/double_ingot/black_bronze.png',
        presets: [
          {
            id: 'black-bronze-plate',
            name: 'Black Bronze Plate',
            img: 'img/plate/black_bronze.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/black_bronze_sheet'
          },
          {
            id: 'black-bronze-wire-cutter-head',
            name: 'Black Bronze Wire Cutter Head',
            img: 'img/tool_head_wire_cutter.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/black_bronze_wire_cutter_head'
          },
          {
            id: 'black-bronze-mace-head',
            name: 'Black Bronze Mace Head',
            img: 'img/mace_head/black_bronze.png',
            last3: ['hit', 'shrink', 'bend'],
            recipeId: 'tfc:anvil/black_bronze_mace_head'
          },
          {
            id: 'black-bronze-wrench-tip',
            name: 'Black Bronze Wrench Tip',
            img: 'img/tool_head_wrench.png',
            overlay: 'img/tool_head_wrench_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/black_bronze_wrench_tip'
          },
          {
            id: 'black-bronze-sword-blade',
            name: 'Black Bronze Sword Blade',
            img: 'img/tool_head_sword.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/black_bronze_sword_blade'
          },
          {
            id: 'black-bronze-scraping-knife-blade',
            name: 'Black Bronze Scraping Knife Blade',
            img: 'img/scraping_knife_blade/black_bronze.png',
            last3: ['hit', 'draw'],
            recipeId: 'tfc:anvil/black_bronze_scraping_knife_blade'
          },
          {
            id: 'black-bronze-spade-head',
            name: 'Black Bronze Spade Head',
            img: 'img/tool_head_spade.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/black_bronze_spade_head'
          },
          {
            id: 'black-bronze-mining-hammer-head',
            name: 'Black Bronze Mining Hammer Head',
            img: 'img/tool_head_mining_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/black_bronze_mining_hammer_head'
          },
          {
            id: 'black-bronze-tfc-bars-double',
            name: 'Black Bronze Bars - Double Ingot',
            img: 'img/bars/black_bronze.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/black_bronze_bars_double'
          },
          {
            id: 'black-bronze-oar-lock',
            name: 'Black Bronze OarLock',
            img: 'img/_items/oarlock.png',
            last3: ['bend', 'hit', 'hit'],
            recipeId: 'tfg:anvil/alekiships/oarlock/black_bronze'
          }
        ]
      },
      {
        id: 'black-bronze-plate',
        name: 'Black Bronze Plate',
        img: 'img/plate/black_bronze.png',
        presets: [
          {
            id: 'black-bronze-trapdoor',
            name: 'Black Bronze Trapdoor',
            img: 'img/trapdoor/black_bronze.png',
            last3: ['bend', 'draw', 'draw'],
            recipeId: 'tfc:anvil/black_bronze_trapdoor'
          },
          {
            id: 'black-bronze-unfinished-boots',
            name: 'Black Bronze Unfinished Boots',
            img: 'img/unfinished_boots/black_bronze.png',
            last3: ['bend', 'bend', 'shrink'],
            recipeId: 'tfc:anvil/black_bronze_unfinished_boots'
          }
        ]
      },
      {
        id: 'black-bronze-double-plate',
        name: 'Black Bronze Double Plate',
        img: 'img/double_plate/black_bronze.png',
        presets: [
          {
            id: 'black-bronze-tuyere',
            name: 'Black Bronze Tuyere',
            img: 'img/tuyere/black_bronze.png',
            last3: ['bend', 'bend'],
            recipeId: 'tfc:anvil/black_bronze_tuyere'
          },
          {
            id: 'black-bronze-unfinished-helmet',
            name: 'Black Bronze Unfinished Helmet',
            img: 'img/unfinished_helmet/black_bronze.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/black_bronze_unfinished_helmet'
          },
          {
            id: 'black-bronze-unfinished-chestplate',
            name: 'Black Bronze Unfinished Chestplate',
            img: 'img/unfinished_chestplate/black_bronze.png',
            last3: ['hit', 'hit', 'upset'],
            recipeId: 'tfc:anvil/black_bronze_unfinished_chestplate'
          },
          {
            id: 'black-bronze-unfinished-greaves',
            name: 'Black Bronze Unfinished Greaves',
            img: 'img/unfinished_greaves/black_bronze.png',
            last3: [],
            recipeId: 'tfc:anvil/black_bronze_unfinished_greaves'
          },
          {
            id: 'black-bronze-shield',
            name: 'Black Bronze Shield',
            img: 'img/shield/black_bronze.png',
            last3: ['upset', 'bend', 'bend'],
            recipeId: 'tfc:anvil/black_bronze_shield'
          }
        ]
      },
      {
        id: 'black-bronze-rod',
        name: 'Black Bronze Rod',
        img: 'img/rod.png',
        overlay: 'img/rod_overlay.png',
        presets: [
          {
            id: 'black-bronze-ring',
            name: 'Black Bronze Ring',
            img: 'img/ring.png',
            overlay: 'img/ring_overlay.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/black_bronze_ring'
          },
          {
            id: 'black-bronze-screw',
            name: 'Black Bronze Screw',
            img: 'img/screw.png',
            overlay: 'img/screw_overlay.png',
            last3: ['punch', 'punch', 'shrink'],
            recipeId: 'tfc:anvil/black_bronze_screw'
          },
          {
            id: 'black-bronze-bolt',
            name: 'Black Bronze Bolt',
            img: 'img/bolt.png',
            overlay: 'img/bolt_overlay.png',
            last3: ['punch', 'draw', 'draw'],
            recipeId: 'tfc:anvil/black_bronze_bolt'
          },
          {
            id: 'black-bronze-spindle-head',
            name: 'Black Bronze Spindle Head',
            img: 'img/spindle_head/black_bronze.png',
            last3: ['draw', 'upset', 'shrink'],
            recipeId: 'tfg:anvil/black_bronze_spindle_head'
          }
        ]
      }
    ]
  },
  {
    id: 'cast-iron',
    name: 'Cast Iron',
    img: 'img/ingot/cast_iron.png',
    color: getMaterialById('cast-iron').color,
    subcategories: [
      {
        id: 'iron-ingot',
        name: 'Cast Iron Ingot',
        img: 'img/ingot/cast_iron.png',
        presets: [
          {
            id: 'cast-iron-nugget',
            name: 'Cast Iron Nugget',
            img: 'img/nugget.png',
            // overlay: 'img/nugget_overlay.png',
            last3: ['punch', 'hit', 'punch'],
            recipeId: 'tfc:anvil/iron_nugget'
          },
          {
            id: 'cast-iron-rod',
            name: 'Cast Iron Rod',
            img: 'img/rod.png',
            // overlay: 'img/rod_overlay.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/iron_rod'
          },
          {
            id: 'cast-iron-small-gear',
            name: 'Cast Iron Small Gear',
            img: 'img/gear_small.png',
            // overlay: 'img/gear_small_overlay.png',
            last3: ['hit', 'shrink', 'draw'],
            recipeId: 'tfc:anvil/iron_small_gear'
          }
        ]
      },
      {
        id: 'iron-double-ingot',
        name: 'Cast Iron Double Ingot',
        img: 'img/double_ingot/cast_iron.png',
        presets: [
          {
            id: 'cast-iron-plate',
            name: 'Cast Iron Plate',
            img: 'img/plate/cast_iron.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/iron_sheet'
          }
        ]
      },
      {
        id: 'cast-iron-rod',
        name: 'Cast Iron Rod',
        img: 'img/rod.png',
        // overlay: 'img/rod_overlay.png',
        presets: [
          {
            id: 'cast-iron-small-spring',
            name: 'Cast Iron Small Spring',
            img: 'img/spring_small.png',
            // overlay: 'img/spring_small_overlay.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/iron_small_spring'
          },
          {
            id: 'cast-iron-ring',
            name: 'Cast Iron Ring',
            img: 'img/ring.png',
            // overlay: 'img/ring_overlay.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/iron_ring'
          },
          {
            id: 'cast-iron-screw',
            name: 'Cast Iron Screw',
            img: 'img/screw.png',
            // overlay: 'img/screw_overlay.png',
            last3: ['punch', 'punch', 'shrink'],
            recipeId: 'tfc:anvil/iron_screw'
          },
          {
            id: 'cast-iron-bolt',
            name: 'Cast Iron Bolt',
            img: 'img/bolt.png',
            // overlay: 'img/bolt_overlay.png',
            last3: ['punch', 'draw', 'draw'],
            recipeId: 'tfc:anvil/iron_bolt'
          }
        ]
      }
    ]
  },
  {
    id: 'wrought-iron',
    name: 'Wrought Iron',
    img: 'img/ingot/wrought_iron.png',
    color: getMaterialById('wrought-iron').color,
    subcategories: [
      {
        id: 'raw-iron-bloom',
        name: 'Raw Iron Bloom',
        img: 'img/_items/raw_iron_bloom.png',
        presets: [
          {
            id: 'refined-iron-bloom',
            name: 'Refined Iron Bloom',
            img: 'img/_items/refined_iron_bloom.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/refined_iron_bloom'
          }
        ]
      },
      {
        id: 'refined-iron-bloom',
        name: 'Refined Iron Bloom',
        img: 'img/_items/refined_iron_bloom.png',
        presets: [
          {
            id: 'wrought-iron-ingot',
            name: 'Wrought Iron Ingot',
            img: 'img/ingot/wrought_iron.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/wrought_iron_from_bloom'
          }
        ]
      },
      {
        id: 'wrought-iron-ingot',
        name: 'Wrought Iron Ingot',
        img: 'img/ingot/wrought_iron.png',
        presets: [
          {
            id: 'wrought-iron-nugget',
            name: 'Wrought Iron Nugget',
            img: 'img/nugget.png',
            overlay: 'img/nugget_overlay.png',
            last3: ['punch', 'hit', 'punch'],
            recipeId: 'tfc:anvil/wrought_iron_nugget'
          },
          {
            id: 'wrought-iron-axe-head',
            name: 'Wrought Iron Axe Head',
            img: 'img/tool_head_axe.png',
            last3: ['punch', 'hit', 'upset'],
            recipeId: 'tfc:anvil/wrought_iron_axe_head'
          },
          {
            id: 'wrought-iron-javelin-head',
            name: 'Wrought Iron Javelin Head',
            img: 'img/javelin_head/wrought_iron.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/wrought_iron_javelin_head'
          },
          {
            id: 'wrought-iron-chisel-head',
            name: 'Wrought Iron Chisel Head',
            img: 'img/chisel_head/wrought_iron.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/wrought_iron_chisel_head'
          },
          {
            id: 'wrought-iron-shovel-head',
            name: 'Wrought Iron Shovel Head',
            img: 'img/tool_head_shovel.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/wrought_iron_shovel_head'
          },
          {
            id: 'wrought-iron-pickaxe-head',
            name: 'Wrought Iron Pickaxe Head',
            img: 'img/tool_head_pickaxe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/wrought_iron_pickaxe_head'
          },
          {
            id: 'wrought-iron-rod',
            name: 'Wrought Iron Rod',
            img: 'img/rod.png',
            overlay: 'img/rod_overlay.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/wrought_iron_rod'
          },
          {
            id: 'wrought-iron-file-head',
            name: 'Wrought Iron File Head',
            img: 'img/tool_head_file.png',
            last3: ['upset', 'bend', 'punch'],
            recipeId: 'tfc:anvil/wrought_iron_file_head'
          },
          {
            id: 'wrought-iron-hammer-head',
            name: 'Wrought Iron Hammer Head',
            img: 'img/tool_head_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/wrought_iron_hammer_head'
          },
          {
            id: 'wrought-iron-knife-blade',
            name: 'Wrought Iron Knife Blade',
            img: 'img/tool_head_knife.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/wrought_iron_knife_blade'
          },
          {
            id: 'wrought-iron-propick-head',
            name: 'Wrought Iron Prospector’s Pick Head',
            img: 'img/propick_head/wrought_iron.png',
            last3: ['punch', 'draw', 'bend'],
            recipeId: 'tfc:anvil/wrought_iron_propick_head'
          },
          {
            id: 'wrought-iron-fish-hook',
            name: 'Wrought Iron Fish Hook',
            img: 'img/fish_hook/wrought_iron.png',
            last3: [],
            recipeId: 'tfc:anvil/wrought_iron_fish_hook'
          },
          {
            id: 'wrought-iron-scythe-blade',
            name: 'Wrought Iron Scythe Blade',
            img: 'img/tool_head_scythe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/wrought_iron_scythe_blade'
          },
          {
            id: 'wrought-iron-butchery-knife-head',
            name: 'Wrought Iron Butchery Knife Head',
            img: 'img/tool_head_butchery_knife.png',
            last3: ['punch', 'bend'],
            recipeId: 'tfc:anvil/wrought_iron_knife_butchery_head'
          },
          {
            id: 'wrought-iron-lamp',
            name: 'Wrought Iron Unfinished Lamp',
            img: 'img/unfinished_lamp/wrought_iron.png',
            last3: ['bend', 'bend', 'draw'],
            recipeId: 'tfc:anvil/wrought_iron_lamp'
          },
          {
            id: 'wrought-iron-hoe-head',
            name: 'Wrought Iron Hoe Head',
            img: 'img/tool_head_hoe.png',
            last3: ['punch', 'hit', 'bend'],
            recipeId: 'tfc:anvil/wrought_iron_hoe_head'
          },
          {
            id: 'wrought-iron-tong-part',
            name: 'Wrought Iron Tong Part',
            img: 'img/tong_part/wrought_iron.png',
            last3: ['hit', 'draw', 'bend'],
            recipeId: 'tfchotornot:anvil/tong_part/wrought_iron'
          },
          {
            id: 'wrought-iron-chain',
            name: 'Wrought Iron Chain',
            img: 'img/chain/wrought_iron.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/wrought_iron_chain'
          },
          {
            id: 'wrought-iron-mattock-head',
            name: 'Wrought Iron Mattock Head',
            img: 'img/mattock_head/wrought_iron.png',
            last3: ['punch', 'punch', 'bend'],
            recipeId: 'rnr:anvil/wrought_iron_mattock_head'
          },
          {
            id: 'wrought-iron-saw-blade',
            name: 'Wrought Iron Saw Blade',
            img: 'img/tool_head_saw.png',
            last3: ['hit', 'hit'],
            recipeId: 'tfc:anvil/wrought_iron_saw_blade'
          },
          {
            id: 'wrought-iron-screwdriver-tip',
            name: 'Wrought Iron Screwdriver Tip',
            img: 'img/tool_head_screwdriver.png',
            overlay: 'img/tool_head_screwdriver_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/wrought_iron_screwdriver_tip'
          },
          {
            id: 'wrought-iron-small-gear',
            name: 'Wrought Iron Small Gear',
            img: 'img/gear_small.png',
            overlay: 'img/gear_small_overlay.png',
            last3: ['hit', 'shrink', 'draw'],
            recipeId: 'tfc:anvil/wrought_iron_small_gear'
          },
          {
            id: 'wrought-iron-tfc-bars',
            name: 'Wrought Iron Bars',
            img: 'img/bars/wrought_iron.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/wrought_iron_bars'
          },
          {
            id: 'wrought-iron-createdeco-bars-overlay',
            name: 'Wrought Iron Createdeco Bars Overlay',
            img: 'img/createdeco_bars/iron_bars_overlay_composited.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_iron_bars_overlay'
          }
        ]
      },
      {
        id: 'wrought-iron-double-ingot',
        name: 'Wrought Iron Double Ingot',
        img: 'img/double_ingot/wrought_iron.png',
        presets: [
          {
            id: 'wrought-iron-plate',
            name: 'Wrought Iron Plate',
            img: 'img/plate/wrought_iron.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/wrought_iron_sheet'
          },
          {
            id: 'wrought-iron-wire-cutter-head',
            name: 'Wrought Iron Wire Cutter Head',
            img: 'img/tool_head_wire_cutter.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/wrought_iron_wire_cutter_head'
          },
          {
            id: 'wrought-iron-mace-head',
            name: 'Wrought Iron Mace Head',
            img: 'img/mace_head/wrought_iron.png',
            last3: ['hit', 'shrink', 'bend'],
            recipeId: 'tfc:anvil/wrought_iron_mace_head'
          },
          {
            id: 'wrought-iron-wrench-tip',
            name: 'Wrought Iron Wrench Tip',
            img: 'img/tool_head_wrench.png',
            overlay: 'img/tool_head_wrench_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/wrought_iron_wrench_tip'
          },
          {
            id: 'wrought-iron-sword-blade',
            name: 'Wrought Iron Sword Blade',
            img: 'img/tool_head_sword.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/wrought_iron_sword_blade'
          },
          {
            id: 'wrought-iron-scraping-knife-blade',
            name: 'Wrought Iron Scraping Knife Blade',
            img: 'img/scraping_knife_blade/wrought_iron.png',
            last3: ['hit', 'draw'],
            recipeId: 'tfc:anvil/wrought_iron_scraping_knife_blade'
          },
          {
            id: 'wrought-iron-spade-head',
            name: 'Wrought Iron Spade Head',
            img: 'img/tool_head_spade.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/wrought_iron_spade_head'
          },
          {
            id: 'wrought-iron-mining-hammer-head',
            name: 'Wrought Iron Mining Hammer Head',
            img: 'img/tool_head_mining_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/wrought_iron_mining_hammer_head'
          },
          {
            id: 'wrought-iron-tfc-bars-double',
            name: 'Wrought Iron Bars',
            img: 'img/bars/wrought_iron.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/wrought_iron_bars_double'
          },
          {
            id: 'wrought-iron-createdeco-bars-overlay-double',
            name: 'Wrought Iron Createdeco Bars Overlay',
            img: 'img/createdeco_bars/iron_bars_overlay_composited.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_iron_bars_overlay_double'
          },
          {
            id: 'wrought-iron-cleat',
            name: 'Cleat',
            img: 'img/_items/cleat.png',
            last3: ['bend', 'bend', 'bend'],
            recipeId: 'tfg:anvil/alekiships/cleat'
          },
          {
            id: 'wrought-iron-cannonball',
            name: 'Cannonball',
            img: 'img/_items/cannonball.png',
            last3: ['bend', 'bend', 'hit'],
            recipeId: 'firmaciv:anvil/cannonball'
          }
        ]
      },
      {
        id: 'wrought-iron-plate',
        name: 'Wrought Iron Plate',
        img: 'img/plate/wrought_iron.png',
        presets: [
          {
            id: 'wrought-iron-trapdoor',
            name: 'Wrought Iron Trapdoor',
            img: 'img/trapdoor/wrought_iron.png',
            last3: ['bend', 'draw', 'draw'],
            recipeId: 'tfc:anvil/wrought_iron_trapdoor'
          },
          {
            id: 'wrought-iron-unfinished-flask',
            name: 'Wrought Iron Unfinished Flask',
            img: 'img/_items/unfinished_flask.png',
            last3: ['punch', 'bend', 'bend'],
            recipeId: 'waterflasks:anvil/unfinished_iron_flask'
          },
          {
            id: 'wrought-iron-pie-pan',
            name: 'Pie Pan',
            img: 'img/_items/pie_pan.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'firmalife:anvil/pie_pan'
          },
          {
            id: 'wrought-iron-buckle',
            name: 'Buckle',
            img: 'img/_items/buckle.png',
            last3: ['upset', 'hit'],
            recipeId: 'sns:anvil/buckle'
          },
          {
            id: 'wrought-iron-unfinished-boots',
            name: 'Wrought Iron Unfinished Boots',
            img: 'img/unfinished_boots/wrought_iron.png',
            last3: ['bend', 'bend', 'shrink'],
            recipeId: 'tfc:anvil/wrought_iron_unfinished_boots'
          }
        ]
      },
      {
        id: 'wrought-iron-double-plate',
        name: 'Wrought Iron Double Plate',
        img: 'img/double_plate/wrought_iron.png',
        presets: [
          {
            id: 'wrought-iron-tuyere',
            name: 'Wrought Iron Tuyere',
            img: 'img/tuyere/wrought_iron.png',
            last3: ['bend', 'bend'],
            recipeId: 'tfc:anvil/wrought_iron_tuyere'
          },
          {
            id: 'wrought-iron-unfinished-helmet',
            name: 'Wrought Iron Unfinished Helmet',
            img: 'img/unfinished_helmet/wrought_iron.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/wrought_iron_unfinished_helmet'
          },
          {
            id: 'wrought-iron-unfinished-chestplate',
            name: 'Wrought Iron Unfinished Chestplate',
            img: 'img/unfinished_chestplate/wrought_iron.png',
            last3: ['hit', 'hit', 'upset'],
            recipeId: 'tfc:anvil/wrought_iron_unfinished_chestplate'
          },
          {
            id: 'wrought-iron-unfinished-greaves',
            name: 'Wrought Iron Unfinished Greaves',
            img: 'img/unfinished_greaves/wrought_iron.png',
            last3: [],
            recipeId: 'tfc:anvil/wrought_iron_unfinished_greaves'
          },
          {
            id: 'wrought-iron-shield',
            name: 'Wrought Iron Shield',
            img: 'img/shield/wrought_iron.png',
            last3: ['upset', 'bend', 'bend'],
            recipeId: 'tfc:anvil/wrought_iron_shield'
          },
          {
            id: 'wrought-iron-buzzsaw-blade',
            name: 'Wrought Iron Buzzsaw Blade',
            img: 'img/tool_head_buzz_saw.png',
            last3: ['bend', 'hit', 'draw'],
            recipeId: 'tfc:anvil/wrought_iron_buzzsaw_blade'
          },
          {
            id: 'wrought-iron-door',
            name: 'Wrought Iron Door',
            img: 'img/door/iron.png',
            last3: ['hit', 'draw', 'punch'],
            recipeId: 'tfc:anvil/iron_door'
          },
          {
            id: 'wrought-iron-grill',
            name: 'Grill',
            img: 'img/_items/grill.png',
            last3: ['punch', 'draw', 'punch'],
            recipeId: 'tfc:anvil/wrought_iron_grill'
          },
          {
            id: 'wrought-iron-cannon-barrel',
            name: 'Cannon Barrel',
            img: 'img/_items/cannon_barrel.png',
            last3: ['bend', 'bend', 'bend'],
            recipeId: 'firmaciv:anvil/cannon_barrel'
          },
          {
            id: 'wrought-iron-anchor',
            name: 'Anchor',
            img: 'img/_items/anchor.png',
            last3: ['hit', 'punch', 'bend'],
            recipeId: 'tfg:anvil/alekiships/anchor'
          }
        ]
      },
      {
        id: 'wrought-iron-rod',
        name: 'Wrought Iron Rod',
        img: 'img/rod.png',
        overlay: 'img/rod_overlay.png',
        presets: [
          {
            id: 'wrought-iron-ring',
            name: 'Wrought Iron Ring',
            img: 'img/ring.png',
            overlay: 'img/ring_overlay.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/wrought_iron_ring'
          },
          {
            id: 'wrought-iron-screw',
            name: 'Wrought Iron Screw',
            img: 'img/screw.png',
            overlay: 'img/screw_overlay.png',
            last3: ['punch', 'punch', 'shrink'],
            recipeId: 'tfc:anvil/wrought_iron_screw'
          },
          {
            id: 'wrought-iron-bolt',
            name: 'Wrought Iron Bolt',
            img: 'img/bolt.png',
            overlay: 'img/bolt_overlay.png',
            last3: ['punch', 'draw', 'draw'],
            recipeId: 'tfc:anvil/wrought_iron_bolt'
          },
          {
            id: 'wrought-iron-spindle-head',
            name: 'Wrought Iron Spindle Head',
            img: 'img/spindle_head/wrought_iron.png',
            last3: ['draw', 'upset', 'shrink'],
            recipeId: 'tfg:anvil/wrought_iron_spindle_head'
          }
        ]
      },
      {
        id: 'wrought-iron-long-rod',
        name: 'Wrought Iron Long Rod',
        img: 'img/rod_long.png',
        overlay: 'img/rod_long_overlay.png',
        presets: [
          {
            id: 'wrought-iron-spring',
            name: 'Wrought Iron Spring',
            img: 'img/spring.png',
            overlay: 'img/spring_overlay.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/wrought_iron_spring'
          }
        ]
      }
    ]
  },
  {
    id: 'steel',
    name: 'Steel',
    img: 'img/ingot/steel.png',
    color: getMaterialById('steel').color,
    subcategories: [
      {
        id: 'pig-iron',
        name: 'Pig Iron Ingot',
        img: 'img/ingot/pig_iron.png',
        color: getMaterialById('pig-iron').color,
        presets: [
          {
            id: 'high-carbon-steel-ingot',
            name: 'High Carbon Steel Ingot',
            img: 'img/ingot/high_carbon_steel.png',
            color: getMaterialById('high-carbon-steel').color,
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/high_carbon_steel_ingot'
          }
        ]
      },
      {
        id: 'high-carbon-steel-ingot',
        name: 'High Carbon Steel Ingot',
        img: 'img/ingot/high_carbon_steel.png',
        color: getMaterialById('high-carbon-steel').color,
        presets: [
          {
            id: 'steel-ingot',
            name: 'Steel Ingot',
            img: 'img/ingot/steel.png',
            color: getMaterialById('steel').color,
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/steel_ingot'
          }
        ]
      },
      {
        id: 'steel-ingot',
        name: 'Steel Ingot',
        img: 'img/ingot/steel.png',
        presets: [
          {
            id: 'steel-nugget',
            name: 'Steel Nugget',
            img: 'img/nugget.png',
            overlay: 'img/nugget_overlay.png',
            last3: ['punch', 'hit', 'punch'],
            recipeId: 'tfc:anvil/steel_nugget'
          },
          {
            id: 'steel-axe-head',
            name: 'Steel Axe Head',
            img: 'img/tool_head_axe.png',
            last3: ['punch', 'hit', 'upset'],
            recipeId: 'tfc:anvil/steel_axe_head'
          },
          {
            id: 'steel-javelin-head',
            name: 'Steel Javelin Head',
            img: 'img/javelin_head/steel.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/steel_javelin_head'
          },
          {
            id: 'steel-chisel-head',
            name: 'Steel Chisel Head',
            img: 'img/chisel_head/steel.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/steel_chisel_head'
          },
          {
            id: 'steel-shovel-head',
            name: 'Steel Shovel Head',
            img: 'img/tool_head_shovel.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/steel_shovel_head'
          },
          {
            id: 'steel-pickaxe-head',
            name: 'Steel Pickaxe Head',
            img: 'img/tool_head_pickaxe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/steel_pickaxe_head'
          },
          {
            id: 'steel-rod',
            name: 'Steel Rod',
            img: 'img/rod.png',
            overlay: 'img/rod_overlay.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/steel_rod'
          },
          {
            id: 'steel-file-head',
            name: 'Steel File Head',
            img: 'img/tool_head_file.png',
            last3: ['upset', 'bend', 'punch'],
            recipeId: 'tfc:anvil/steel_file_head'
          },
          {
            id: 'steel-hammer-head',
            name: 'Steel Hammer Head',
            img: 'img/tool_head_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/steel_hammer_head'
          },
          {
            id: 'steel-knife-blade',
            name: 'Steel Knife Blade',
            img: 'img/tool_head_knife.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/steel_knife_blade'
          },
          {
            id: 'steel-propick-head',
            name: 'Steel Prospector’s Pick Head',
            img: 'img/propick_head/steel.png',
            last3: ['punch', 'draw', 'bend'],
            recipeId: 'tfc:anvil/steel_propick_head'
          },
          {
            id: 'steel-fish-hook',
            name: 'Steel Fish Hook',
            img: 'img/fish_hook/steel.png',
            last3: [],
            recipeId: 'tfc:anvil/steel_fish_hook'
          },
          {
            id: 'steel-scythe-blade',
            name: 'Steel Scythe Blade',
            img: 'img/tool_head_scythe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/steel_scythe_blade'
          },
          {
            id: 'steel-butchery-knife-head',
            name: 'Steel Butchery Knife Head',
            img: 'img/tool_head_butchery_knife.png',
            last3: ['punch', 'bend'],
            recipeId: 'tfc:anvil/steel_knife_butchery_head'
          },
          {
            id: 'steel-lamp',
            name: 'Steel Unfinished Lamp',
            img: 'img/unfinished_lamp/steel.png',
            last3: ['bend', 'bend', 'draw'],
            recipeId: 'tfc:anvil/steel_lamp'
          },
          {
            id: 'steel-hoe-head',
            name: 'Steel Hoe Head',
            img: 'img/tool_head_hoe.png',
            last3: ['punch', 'hit', 'bend'],
            recipeId: 'tfc:anvil/steel_hoe_head'
          },
          {
            id: 'steel-tong-part',
            name: 'Steel Tong Part',
            img: 'img/tong_part/steel.png',
            last3: ['hit', 'draw', 'bend'],
            recipeId: 'tfchotornot:anvil/tong_part/steel'
          },
          {
            id: 'steel-chain',
            name: 'Steel Chain',
            img: 'img/chain/steel.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/steel_chain'
          },
          {
            id: 'steel-mattock-head',
            name: 'Steel Mattock Head',
            img: 'img/mattock_head/steel.png',
            last3: ['punch', 'punch', 'bend'],
            recipeId: 'rnr:anvil/steel_mattock_head'
          },
          {
            id: 'steel-saw-blade',
            name: 'Steel Saw Blade',
            img: 'img/tool_head_saw.png',
            last3: ['hit', 'hit'],
            recipeId: 'tfc:anvil/steel_saw_blade'
          },
          {
            id: 'steel-screwdriver-tip',
            name: 'Steel Screwdriver Tip',
            img: 'img/tool_head_screwdriver.png',
            overlay: 'img/tool_head_screwdriver_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/steel_screwdriver_tip'
          },
          {
            id: 'steel-small-gear',
            name: 'Steel Small Gear',
            img: 'img/gear_small.png',
            overlay: 'img/gear_small_overlay.png',
            last3: ['hit', 'shrink', 'draw'],
            recipeId: 'tfc:anvil/steel_small_gear'
          },
          {
            id: 'steel-tfc-bars',
            name: 'Steel Bars',
            img: 'img/bars/steel.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/steel_bars'
          },
          {
            id: 'steel-createdeco-bars-overlay',
            name: 'Steel Bars Overlay',
            img: 'img/createdeco_bars/industrial_iron_bars_overlay_composited.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_industrial_iron_bars_overlay'
          },
          {
            id: 'steel-createdeco-bars',
            name: 'Steel Bars',
            img: 'img/createdeco_bars/industrial_iron_bars.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_industrial_iron_bars'
          }
        ]
      },
      {
        id: 'steel-double-ingot',
        name: 'Steel Double Ingot',
        img: 'img/double_ingot/steel.png',
        presets: [
          {
            id: 'steel-plate',
            name: 'Steel Plate',
            img: 'img/plate/steel.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/steel_sheet'
          },
          {
            id: 'steel-wire-cutter-head',
            name: 'Steel Wire Cutter Head',
            img: 'img/tool_head_wire_cutter.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/steel_wire_cutter_head'
          },
          {
            id: 'steel-mace-head',
            name: 'Steel Mace Head',
            img: 'img/mace_head/steel.png',
            last3: ['hit', 'shrink', 'bend'],
            recipeId: 'tfc:anvil/steel_mace_head'
          },
          {
            id: 'steel-wrench-tip',
            name: 'Steel Wrench Tip',
            img: 'img/tool_head_wrench.png',
            overlay: 'img/tool_head_wrench_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/steel_wrench_tip'
          },
          {
            id: 'steel-sword-blade',
            name: 'Steel Sword Blade',
            img: 'img/tool_head_sword.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/steel_sword_blade'
          },
          {
            id: 'steel-scraping-knife-blade',
            name: 'Steel Scraping Knife Blade',
            img: 'img/scraping_knife_blade/steel.png',
            last3: ['hit', 'draw'],
            recipeId: 'tfc:anvil/steel_scraping_knife_blade'
          },
          {
            id: 'steel-spade-head',
            name: 'Steel Spade Head',
            img: 'img/tool_head_spade.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/steel_spade_head'
          },
          {
            id: 'steel-mining-hammer-head',
            name: 'Steel Mining Hammer Head',
            img: 'img/tool_head_mining_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/steel_mining_hammer_head'
          },
          {
            id: 'steel-tfc-bars-double',
            name: 'Steel Bars - Double Ingot',
            img: 'img/bars/steel.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/steel_bars_double'
          },
          {
            id: 'steel-createdeco-bars-overlay-double',
            name: 'Steel Bars Overlay - Double Ingot',
            img: 'img/createdeco_bars/industrial_iron_bars_overlay_composited.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_industrial_iron_bars_overlay_double'
          },
          {
            id: 'steel-createdeco-bars-double',
            name: 'Steel Bars - Double Ingot',
            img: 'img/createdeco_bars/industrial_iron_bars.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_industrial_iron_bars_double'
          },
          {
            id: 'steel-support',
            name: 'Steel Support',
            img: 'img/support/steel.png',
            last3: ['upset', 'shrink'],
            recipeId: 'tfg:anvil/steel_support'
          }
        ]
      },
      {
        id: 'steel-plate',
        name: 'Steel Plate',
        img: 'img/plate/steel.png',
        presets: [
          {
            id: 'steel-trapdoor',
            name: 'Steel Trapdoor',
            img: 'img/trapdoor/steel.png',
            last3: ['bend', 'draw', 'draw'],
            recipeId: 'tfc:anvil/steel_trapdoor'
          },
          {
            id: 'steel-buckle',
            name: 'Buckle',
            img: 'img/_items/buckle.png',
            last3: ['upset', 'hit', 'shrink'],
            recipeId: 'sns:anvil/buckle2'
          },
          {
            id: 'steel-unfinished-boots',
            name: 'Steel Unfinished Boots',
            img: 'img/unfinished_boots/steel.png',
            last3: ['bend', 'bend', 'shrink'],
            recipeId: 'tfc:anvil/steel_unfinished_boots'
          }
        ]
      },
      {
        id: 'steel-double-plate',
        name: 'Steel Double Plate',
        img: 'img/double_plate/steel.png',
        presets: [
          {
            id: 'steel-tuyere',
            name: 'Steel Tuyere',
            img: 'img/tuyere/steel.png',
            last3: ['bend', 'bend'],
            recipeId: 'tfc:anvil/steel_tuyere'
          },
          {
            id: 'steel-unfinished-helmet',
            name: 'Steel Unfinished Helmet',
            img: 'img/unfinished_helmet/steel.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/steel_unfinished_helmet'
          },
          {
            id: 'steel-unfinished-chestplate',
            name: 'Steel Unfinished Chestplate',
            img: 'img/unfinished_chestplate/steel.png',
            last3: ['hit', 'hit', 'upset'],
            recipeId: 'tfc:anvil/steel_unfinished_chestplate'
          },
          {
            id: 'steel-unfinished-greaves',
            name: 'Steel Unfinished Greaves',
            img: 'img/unfinished_greaves/steel.png',
            last3: [],
            recipeId: 'tfc:anvil/steel_unfinished_greaves'
          },
          {
            id: 'steel-shield',
            name: 'Steel Shield',
            img: 'img/shield/steel.png',
            last3: ['upset', 'bend', 'bend'],
            recipeId: 'tfc:anvil/steel_shield'
          }
        ]
      },
      {
        id: 'steel-rod',
        name: 'Steel Rod',
        img: 'img/rod.png',
        overlay: 'img/rod_overlay.png',
        presets: [
          {
            id: 'steel-small-spring',
            name: 'Steel Small Spring',
            img: 'img/spring_small.png',
            overlay: 'img/spring_small_overlay.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/steel_small_spring'
          },
          {
            id: 'steel-ring',
            name: 'Steel Ring',
            img: 'img/ring.png',
            overlay: 'img/ring_overlay.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/steel_ring'
          },
          {
            id: 'steel-screw',
            name: 'Steel Screw',
            img: 'img/screw.png',
            overlay: 'img/screw_overlay.png',
            last3: ['punch', 'punch', 'shrink'],
            recipeId: 'tfc:anvil/steel_screw'
          },
          {
            id: 'steel-bolt',
            name: 'Steel Bolt',
            img: 'img/bolt.png',
            overlay: 'img/bolt_overlay.png',
            last3: ['punch', 'draw', 'draw'],
            recipeId: 'tfc:anvil/steel_bolt'
          },
          {
            id: 'steel-horseshoe',
            name: 'Steel Horseshoe',
            img: 'img/horseshoe/steel.png',
            last3: ['upset', 'bend', 'bend'],
            recipeId: 'sns:anvil/metal/horseshoe/steel'
          }
        ]
      },
      {
        id: 'steel-long-rod',
        name: 'Steel Long Rod',
        img: 'img/rod_long.png',
        overlay: 'img/rod_long_overlay.png',
        presets: [
          {
            id: 'steel-spring',
            name: 'Steel Spring',
            img: 'img/spring.png',
            overlay: 'img/spring_overlay.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/steel_spring'
          }
        ]
      }
    ]
  },
  {
    id: 'black-steel',
    name: 'Black Steel',
    img: 'img/ingot/black_steel.png',
    color: getMaterialById('black-steel').color,
    subcategories: [
      {
        id: 'high-carbon-black-steel-ingot',
        name: 'High Carbon Steel Ingot',
        img: 'img/ingot/high_carbon_black_steel.png',
        color: getMaterialById('high-carbon-black-steel').color,
        presets: [
          {
            id: 'black-steel-ingot',
            name: 'Black Steel Ingot',
            img: 'img/ingot/steel.png',
            color: getMaterialById('steel').color,
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/black_steel_ingot'
          }
        ]
      },
      {
        id: 'black-steel-ingot',
        name: 'Black Steel Ingot',
        img: 'img/ingot/black_steel.png',
        presets: [
          {
            id: 'black-steel-nugget',
            name: 'Black Steel Nugget',
            img: 'img/nugget.png',
            overlay: 'img/nugget_overlay.png',
            last3: ['punch', 'hit', 'punch'],
            recipeId: 'tfc:anvil/black_steel_nugget'
          },
          {
            id: 'black-steel-axe-head',
            name: 'Black Steel Axe Head',
            img: 'img/tool_head_axe.png',
            last3: ['punch', 'hit', 'upset'],
            recipeId: 'tfc:anvil/black_steel_axe_head'
          },
          {
            id: 'black-steel-javelin-head',
            name: 'Black Steel Javelin Head',
            img: 'img/javelin_head/black_steel.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/black_steel_javelin_head'
          },
          {
            id: 'black-steel-chisel-head',
            name: 'Black Steel Chisel Head',
            img: 'img/chisel_head/black_steel.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/black_steel_chisel_head'
          },
          {
            id: 'black-steel-shovel-head',
            name: 'Black Steel Shovel Head',
            img: 'img/tool_head_shovel.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/black_steel_shovel_head'
          },
          {
            id: 'black-steel-pickaxe-head',
            name: 'Black Steel Pickaxe Head',
            img: 'img/tool_head_pickaxe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/black_steel_pickaxe_head'
          },
          {
            id: 'black-steel-rod',
            name: 'Black Steel Rod',
            img: 'img/rod.png',
            overlay: 'img/rod_overlay.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/black_steel_rod'
          },
          {
            id: 'black-steel-file-head',
            name: 'Black Steel File Head',
            img: 'img/tool_head_file.png',
            last3: ['upset', 'bend', 'punch'],
            recipeId: 'tfc:anvil/black_steel_file_head'
          },
          {
            id: 'black-steel-hammer-head',
            name: 'Black Steel Hammer Head',
            img: 'img/tool_head_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/black_steel_hammer_head'
          },
          {
            id: 'black-steel-knife-blade',
            name: 'Black Steel Knife Blade',
            img: 'img/tool_head_knife.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/black_steel_knife_blade'
          },
          {
            id: 'black-steel-propick-head',
            name: 'Black Steel Prospector’s Pick Head',
            img: 'img/propick_head/black_steel.png',
            last3: ['punch', 'draw', 'bend'],
            recipeId: 'tfc:anvil/black_steel_propick_head'
          },
          {
            id: 'black-steel-fish-hook',
            name: 'Black Steel Fish Hook',
            img: 'img/fish_hook/black_steel.png',
            last3: [],
            recipeId: 'tfc:anvil/black_steel_fish_hook'
          },
          {
            id: 'black-steel-scythe-blade',
            name: 'Black Steel Scythe Blade',
            img: 'img/tool_head_scythe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/black_steel_scythe_blade'
          },
          {
            id: 'black-steel-butchery-knife-head',
            name: 'Black Steel Butchery Knife Head',
            img: 'img/tool_head_butchery_knife.png',
            last3: ['punch', 'bend'],
            recipeId: 'tfc:anvil/black_steel_knife_butchery_head'
          },
          {
            id: 'black-steel-lamp',
            name: 'Black Steel Unfinished Lamp',
            img: 'img/unfinished_lamp/black_steel.png',
            last3: ['bend', 'bend', 'draw'],
            recipeId: 'tfc:anvil/black_steel_lamp'
          },
          {
            id: 'black-steel-hoe-head',
            name: 'Black Steel Hoe Head',
            img: 'img/tool_head_hoe.png',
            last3: ['punch', 'hit', 'bend'],
            recipeId: 'tfc:anvil/black_steel_hoe_head'
          },
          {
            id: 'black-steel-tong-part',
            name: 'Black Steel Tong Part',
            img: 'img/tong_part/black_steel.png',
            last3: ['hit', 'draw', 'bend'],
            recipeId: 'tfchotornot:anvil/tong_part/black_steel'
          },
          {
            id: 'black-steel-chain',
            name: 'Black Steel Chain',
            img: 'img/chain/black_steel.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/black_steel_chain'
          },
          {
            id: 'black-steel-mattock-head',
            name: 'Black Steel Mattock Head',
            img: 'img/mattock_head/black_steel.png',
            last3: ['punch', 'punch', 'bend'],
            recipeId: 'rnr:anvil/black_steel_mattock_head'
          },
          {
            id: 'black-steel-saw-blade',
            name: 'Black Steel Saw Blade',
            img: 'img/tool_head_saw.png',
            last3: ['hit', 'hit'],
            recipeId: 'tfc:anvil/black_steel_saw_blade'
          },
          {
            id: 'black-steel-screwdriver-tip',
            name: 'Black Steel Screwdriver Tip',
            img: 'img/tool_head_screwdriver.png',
            overlay: 'img/tool_head_screwdriver_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/black_steel_screwdriver_tip'
          },
          {
            id: 'black-steel-small-gear',
            name: 'Black Steel Small Gear',
            img: 'img/gear_small.png',
            overlay: 'img/gear_small_overlay.png',
            last3: ['hit', 'shrink', 'draw'],
            recipeId: 'tfc:anvil/black_steel_small_gear'
          },
          {
            id: 'black-steel-tfc-bars',
            name: 'Black Steel Bars',
            img: 'img/bars/black_steel.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/black_steel_bars'
          }
        ]
      },
      {
        id: 'black-steel-double-ingot',
        name: 'Black Steel Double Ingot',
        img: 'img/double_ingot/black_steel.png',
        presets: [
          {
            id: 'black-steel-plate',
            name: 'Black Steel Plate',
            img: 'img/plate/black_steel.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/black_steel_sheet'
          },
          {
            id: 'black-steel-wire-cutter-head',
            name: 'Black Steel Wire Cutter Head',
            img: 'img/tool_head_wire_cutter.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/black_steel_wire_cutter_head'
          },
          {
            id: 'black-steel-mace-head',
            name: 'Black Steel Mace Head',
            img: 'img/mace_head/black_steel.png',
            last3: ['hit', 'shrink', 'bend'],
            recipeId: 'tfc:anvil/black_steel_mace_head'
          },
          {
            id: 'black-steel-wrench-tip',
            name: 'Black Steel Wrench Tip',
            img: 'img/tool_head_wrench.png',
            overlay: 'img/tool_head_wrench_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/black_steel_wrench_tip'
          },
          {
            id: 'black-steel-sword-blade',
            name: 'Black Steel Sword Blade',
            img: 'img/tool_head_sword.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/black_steel_sword_blade'
          },
          {
            id: 'black-steel-scraping-knife-blade',
            name: 'Black Steel Scraping Knife Blade',
            img: 'img/scraping_knife_blade/black_steel.png',
            last3: ['hit', 'draw'],
            recipeId: 'tfc:anvil/black_steel_scraping_knife_blade'
          },
          {
            id: 'black-steel-spade-head',
            name: 'Black Steel Spade Head',
            img: 'img/tool_head_spade.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/black_steel_spade_head'
          },
          {
            id: 'black-steel-mining-hammer-head',
            name: 'Black Steel Mining Hammer Head',
            img: 'img/tool_head_mining_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/black_steel_mining_hammer_head'
          },
          {
            id: 'black-steel-tfc-bars-double',
            name: 'Black Steel Bars - Double Ingot',
            img: 'img/bars/black_steel.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/black_steel_bars_double'
          }
        ]
      },
      {
        id: 'black-steel-plate',
        name: 'Black Steel Plate',
        img: 'img/plate/black_steel.png',
        presets: [
          {
            id: 'black-steel-trapdoor',
            name: 'Black Steel Trapdoor',
            img: 'img/trapdoor/black_steel.png',
            last3: ['bend', 'draw', 'draw'],
            recipeId: 'tfc:anvil/black_steel_trapdoor'
          },
          {
            id: 'black-steel-unfinished-boots',
            name: 'Black Steel Unfinished Boots',
            img: 'img/unfinished_boots/black_steel.png',
            last3: ['bend', 'bend', 'shrink'],
            recipeId: 'tfc:anvil/black_steel_unfinished_boots'
          }
        ]
      },
      {
        id: 'black-steel-double-plate',
        name: 'Black Steel Double Plate',
        img: 'img/double_plate/black_steel.png',
        presets: [
          {
            id: 'black-steel-tuyere',
            name: 'Black Steel Tuyere',
            img: 'img/tuyere/black_steel.png',
            last3: ['bend', 'bend'],
            recipeId: 'tfc:anvil/black_steel_tuyere'
          },
          {
            id: 'black-steel-unfinished-helmet',
            name: 'Black Steel Unfinished Helmet',
            img: 'img/unfinished_helmet/black_steel.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/black_steel_unfinished_helmet'
          },
          {
            id: 'black-steel-unfinished-chestplate',
            name: 'Black Steel Unfinished Chestplate',
            img: 'img/unfinished_chestplate/black_steel.png',
            last3: ['hit', 'hit', 'upset'],
            recipeId: 'tfc:anvil/black_steel_unfinished_chestplate'
          },
          {
            id: 'black-steel-unfinished-greaves',
            name: 'Black Steel Unfinished Greaves',
            img: 'img/unfinished_greaves/black_steel.png',
            last3: [],
            recipeId: 'tfc:anvil/black_steel_unfinished_greaves'
          },
          {
            id: 'black-steel-shield',
            name: 'Black Steel Shield',
            img: 'img/shield/black_steel.png',
            last3: ['upset', 'bend', 'bend'],
            recipeId: 'tfc:anvil/black_steel_shield'
          }
        ]
      },
      {
        id: 'black-steel-rod',
        name: 'Black Steel Rod',
        img: 'img/rod.png',
        overlay: 'img/rod_overlay.png',
        presets: [
          {
            id: 'black-steel-ring',
            name: 'Black Steel Ring',
            img: 'img/ring.png',
            overlay: 'img/ring_overlay.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/black_steel_ring'
          },
          {
            id: 'black-steel-screw',
            name: 'Black Steel Screw',
            img: 'img/screw.png',
            overlay: 'img/screw_overlay.png',
            last3: ['punch', 'punch', 'shrink'],
            recipeId: 'tfc:anvil/black_steel_screw'
          },
          {
            id: 'black-steel-bolt',
            name: 'Black Steel Bolt',
            img: 'img/bolt.png',
            overlay: 'img/bolt_overlay.png',
            last3: ['punch', 'draw', 'draw'],
            recipeId: 'tfc:anvil/black_steel_bolt'
          },
          {
            id: 'black-steel-horseshoe',
            name: 'Black Steel Horseshoe',
            img: 'img/horseshoe/black_steel.png',
            last3: ['upset', 'bend', 'bend'],
            recipeId: 'sns:anvil/metal/horseshoe/black_steel'
          }
        ]
      }
    ]
  },
  {
    id: 'tin',
    name: 'Tin',
    img: 'img/ingot/tin.png',
    color: getMaterialById('tin').color,
    subcategories: [
      {
        id: 'tin-ingot',
        name: 'Tin Ingot',
        img: 'img/ingot/tin.png',
        presets: [
          {
            id: 'tin-nugget',
            name: 'Tin Nugget',
            img: 'img/nugget.png',
            overlay: 'img/nugget_overlay.png',
            last3: ['punch', 'hit', 'punch'],
            recipeId: 'tfc:anvil/tin_nugget'
          },
          {
            id: 'tin-rod',
            name: 'Tin Rod',
            img: 'img/rod.png',
            overlay: 'img/rod_overlay.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/tin_rod'
          },
          {
            id: 'tin-tong-part',
            name: 'Tin Tong Part',
            img: 'img/tong_part/tin.png',
            last3: ['hit', 'draw', 'bend'],
            recipeId: 'tfchotornot:anvil/tong_part/tin'
          },
          {
            id: 'tin-jar-lid',
            name: 'Jar Lid',
            img: 'img/_items/jar_lid.png',
            last3: ['hit', 'hit', 'punch'],
            recipeId: 'tfc:anvil/jar_lid'
          }
        ]
      },
      {
        id: 'tin-double-ingot',
        name: 'Tin Double Ingot',
        img: 'img/double_ingot/tin.png',
        presets: [
          {
            id: 'tin-plate',
            name: 'Tin Plate',
            img: 'img/plate/tin.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/tin_sheet'
          }
        ]
      }
    ]
  },
  {
    id: 'brass',
    name: 'Brass',
    img: 'img/ingot/brass.png',
    color: getMaterialById('brass').color,
    subcategories: [
      {
        id: 'brass-ingot',
        name: 'Brass Ingot',
        img: 'img/ingot/brass.png',
        presets: [
          {
            id: 'brass-nugget',
            name: 'Brass Nugget',
            img: 'img/nugget.png',
            overlay: 'img/nugget_overlay.png',
            last3: ['punch', 'hit', 'punch'],
            recipeId: 'tfc:anvil/brass_nugget'
          },
          {
            id: 'brass-rod',
            name: 'Brass Rod',
            img: 'img/rod.png',
            overlay: 'img/rod_overlay.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/brass_rod'
          },
          {
            id: 'brass-tong-part',
            name: 'Brass Tong Part',
            img: 'img/tong_part/brass.png',
            last3: ['hit', 'draw', 'bend'],
            recipeId: 'tfchotornot:anvil/tong_part/brass'
          },
          {
            id: 'brass-small-gear',
            name: 'Brass Small Gear',
            img: 'img/gear_small.png',
            overlay: 'img/gear_small_overlay.png',
            last3: ['hit', 'shrink', 'draw'],
            recipeId: 'tfc:anvil/brass_small_gear'
          },
          {
            id: 'brass-create-bars',
            name: 'Brass Bars',
            img: 'img/create_bars/brass_bars.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/create_brass_bars'
          },
          {
            id: 'brass-createdeco-bars-overlay',
            name: 'Brass Bars Overlay',
            img: 'img/createdeco_bars/brass_bars_overlay_composited.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_brass_bars_overlay'
          },
          {
            id: 'brass-createdeco-bars',
            name: 'Brass Bars',
            img: 'img/createdeco_bars/brass_bars.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_brass_bars'
          }
        ]
      },
      {
        id: 'brass-double-ingot',
        name: 'Brass Double Ingot',
        img: 'img/double_ingot/brass.png',
        presets: [
          {
            id: 'brass-plate',
            name: 'Brass Plate',
            img: 'img/plate/brass.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/brass_sheet'
          },
          {
            id: 'brass-create-bars-double',
            name: 'Brass Bars - Double Ingot',
            img: 'img/create_bars/brass_bars.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/create_brass_bars_double'
          },
          {
            id: 'brass-createdeco-bars-overlay-double',
            name: 'Brass Bars Overlay - Double Ingot',
            img: 'img/createdeco_bars/brass_bars_overlay_composited.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_brass_bars_overlay_double'
          },
          {
            id: 'brass-createdeco-bars-double',
            name: 'Brass Bars - Double Ingot',
            img: 'img/createdeco_bars/brass_bars.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfg:anvil/createdeco_brass_bars_double'
          },
          {
            id: 'brass-unfinished-sextant',
            name: 'Unfinished Sextant',
            img: 'img/_items/unfinished_sextant.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'firmaciv:anvil/unfinished_sextant'
          }
        ]
      },
      {
        id: 'brass-plate',
        name: 'Brass Plate',
        img: 'img/plate/brass.png',
        presets: [
          {
            id: 'brass-unfinished-barometer',
            name: 'Unfinished Barometer',
            img: 'img/_items/unfinished_barometer.png',
            last3: ['hit', 'draw', 'upset'],
            recipeId: 'firmaciv:anvil/unfinished_barometer'
          }
        ]
      },
      {
        id: 'brass-double-plate',
        name: 'Brass Double Plate',
        img: 'img/double_plate/brass.png',
        presets: [
          {
            id: 'brass-door',
            name: 'Brass Door',
            img: 'img/door/brass.png',
            last3: ['draw', 'draw', 'punch'],
            recipeId: 'tfg:anvil/createdeco_brass_door'
          },
          {
            id: 'brass-unfinished-navigators-timepiece',
            name: 'Unfinished Navigator’s Timepiece',
            img: 'img/_items/unfinished_navigators_timepiece.png',
            last3: ['upset', 'hit', 'hit'],
            recipeId: 'firmaciv:anvil/unfinished_nav_clock'
          }
        ]
      },
      {
        id: 'brass-rod',
        name: 'Brass Rod',
        img: 'img/rod.png',
        overlay: 'img/rod_overlay.png',
        presets: [
          {
            id: 'brass-ring',
            name: 'Brass Ring',
            img: 'img/ring.png',
            overlay: 'img/ring_overlay.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/brass_ring'
          },
          {
            id: 'brass-screw',
            name: 'Brass Screw',
            img: 'img/screw.png',
            overlay: 'img/screw_overlay.png',
            last3: ['punch', 'punch', 'shrink'],
            recipeId: 'tfc:anvil/brass_screw'
          },
          {
            id: 'brass-bolt',
            name: 'Brass Bolt',
            img: 'img/bolt.png',
            overlay: 'img/bolt_overlay.png',
            last3: ['punch', 'draw', 'draw'],
            recipeId: 'tfc:anvil/brass_bolt'
          },
          {
            id: 'brass-blowpipe',
            name: 'Blowpipe',
            img: 'img/_items/blowpipe.png',
            last3: ['draw', 'draw', 'hit'],
            recipeId: 'tfc:anvil/blowpipe'
          }
        ]
      }
    ]
  },
  {
    id: 'gold',
    name: 'Gold',
    img: 'img/ingot/gold.png',
    color: getMaterialById('gold').color,
    subcategories: [
      {
        id: 'gold-ingot',
        name: 'Gold Ingot',
        img: 'img/ingot/gold.png',
        presets: [
          {
            id: 'gold-nugget',
            name: 'Gold Nugget',
            img: 'img/nugget.png',
            overlay: 'img/nugget_overlay.png',
            last3: ['punch', 'hit', 'punch'],
            recipeId: 'tfc:anvil/gold'
          },
          {
            id: 'gold-rod',
            name: 'Gold Rod',
            img: 'img/rod.png',
            overlay: 'img/rod_overlay.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/gold_rod'
          },
          {
            id: 'gold-tong-part',
            name: 'Gold Tong Part',
            img: 'img/tong_part/gold.png',
            last3: ['hit', 'draw', 'bend'],
            recipeId: 'tfchotornot:anvil/tong_part/gold'
          }
        ]
      },
      {
        id: 'gold-double-ingot',
        name: 'Gold Double Ingot',
        img: 'img/double_ingot/gold.png',
        presets: [
          {
            id: 'gold-plate',
            name: 'Gold Plate',
            img: 'img/plate/gold.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/gold_sheet'
          }
        ]
      },
      {
        id: 'gold-rod',
        name: 'Gold Rod',
        img: 'img/rod.png',
        overlay: 'img/rod_overlay.png',
        presets: [
          {
            id: 'gold-small-spring',
            name: 'Gold Small Spring',
            img: 'img/spring_small.png',
            overlay: 'img/spring_small_overlay.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/gold_small_spring'
          },
          {
            id: 'gold-ring',
            name: 'Gold Ring',
            img: 'img/ring.png',
            overlay: 'img/ring_overlay.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/gold_ring'
          },
          {
            id: 'gold-screw',
            name: 'Gold Screw',
            img: 'img/screw.png',
            overlay: 'img/screw_overlay.png',
            last3: ['punch', 'punch', 'shrink'],
            recipeId: 'tfc:anvil/gold_screw'
          },
          {
            id: 'gold-bolt',
            name: 'Gold Bolt',
            img: 'img/bolt.png',
            overlay: 'img/bolt_overlay.png',
            last3: ['punch', 'draw', 'draw'],
            recipeId: 'tfc:anvil/gold_bolt'
          }
        ]
      },
      {
        id: 'gold-long-rod',
        name: 'Gold Long Rod',
        img: 'img/rod_long.png',
        overlay: 'img/rod_long_overlay.png',
        presets: [
          {
            id: 'gold-spring',
            name: 'Gold Spring',
            img: 'img/spring.png',
            overlay: 'img/spring_overlay.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/gold_spring'
          }
        ]
      }
    ]
  },
  {
    id: 'blue-steel',
    name: 'Blue Steel',
    img: 'img/ingot/blue_steel.png',
    color: getMaterialById('blue-steel').color,
    subcategories: [
      {
        id: 'high-carbon-blue-steel',
        name: 'High Carbon Blue Steel',
        img: 'img/ingot/high_carbon_blue_steel.png',
        color: getMaterialById('high-carbon-blue-steel').color,
        presets: [
          {
            id: 'blue-steel-ingot',
            name: 'Blue Steel Ingot',
            img: 'img/ingot/blue_steel.png',
            color: getMaterialById('blue-steel').color,
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/blue_steel_ingot'
          }
        ]
      },
      {
        id: 'blue-steel-ingot',
        name: 'Blue Steel Ingot',
        img: 'img/ingot/blue_steel.png',
        presets: [
          {
            id: 'blue-steel-nugget',
            name: 'Blue Steel Nugget',
            img: 'img/nugget.png',
            overlay: 'img/nugget_overlay.png',
            last3: ['punch', 'hit', 'punch'],
            recipeId: 'tfc:anvil/blue_steel_nugget'
          },
          {
            id: 'blue-steel-axe-head',
            name: 'Blue Steel Axe Head',
            img: 'img/tool_head_axe.png',
            last3: ['punch', 'hit', 'upset'],
            recipeId: 'tfc:anvil/blue_steel_axe_head'
          },
          {
            id: 'blue-steel-javelin-head',
            name: 'Blue Steel Javelin Head',
            img: 'img/javelin_head/blue_steel.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/blue_steel_javelin_head'
          },
          {
            id: 'blue-steel-chisel-head',
            name: 'Blue Steel Chisel Head',
            img: 'img/chisel_head/blue_steel.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/blue_steel_chisel_head'
          },
          {
            id: 'blue-steel-shovel-head',
            name: 'Blue Steel Shovel Head',
            img: 'img/tool_head_shovel.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/blue_steel_shovel_head'
          },
          {
            id: 'blue-steel-pickaxe-head',
            name: 'Blue Steel Pickaxe Head',
            img: 'img/tool_head_pickaxe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/blue_steel_pickaxe_head'
          },
          {
            id: 'blue-steel-rod',
            name: 'Blue Steel Rod',
            img: 'img/rod.png',
            overlay: 'img/rod_overlay.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/blue_steel_rod'
          },
          {
            id: 'blue-steel-file-head',
            name: 'Blue Steel File Head',
            img: 'img/tool_head_file.png',
            last3: ['upset', 'bend', 'punch'],
            recipeId: 'tfc:anvil/blue_steel_file_head'
          },
          {
            id: 'blue-steel-hammer-head',
            name: 'Blue Steel Hammer Head',
            img: 'img/tool_head_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/blue_steel_hammer_head'
          },
          {
            id: 'blue-steel-knife-blade',
            name: 'Blue Steel Knife Blade',
            img: 'img/tool_head_knife.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/blue_steel_knife_blade'
          },
          {
            id: 'blue-steel-propick-head',
            name: 'Blue Steel Prospector’s Pick Head',
            img: 'img/propick_head/blue_steel.png',
            last3: ['punch', 'draw', 'bend'],
            recipeId: 'tfc:anvil/blue_steel_propick_head'
          },
          {
            id: 'blue-steel-fish-hook',
            name: 'Blue Steel Fish Hook',
            img: 'img/fish_hook/blue_steel.png',
            last3: [],
            recipeId: 'tfc:anvil/blue_steel_fish_hook'
          },
          {
            id: 'blue-steel-scythe-blade',
            name: 'Blue Steel Scythe Blade',
            img: 'img/tool_head_scythe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/blue_steel_scythe_blade'
          },
          {
            id: 'blue-steel-butchery-knife-head',
            name: 'Blue Steel Butchery Knife Head',
            img: 'img/tool_head_butchery_knife.png',
            last3: ['punch', 'bend'],
            recipeId: 'tfc:anvil/blue_steel_knife_butchery_head'
          },
          {
            id: 'blue-steel-lamp',
            name: 'Blue Steel Unfinished Lamp',
            img: 'img/unfinished_lamp/blue_steel.png',
            last3: ['bend', 'bend', 'draw'],
            recipeId: 'tfc:anvil/blue_steel_lamp'
          },
          {
            id: 'blue-steel-hoe-head',
            name: 'Blue Steel Hoe Head',
            img: 'img/tool_head_hoe.png',
            last3: ['punch', 'hit', 'bend'],
            recipeId: 'tfc:anvil/blue_steel_hoe_head'
          },
          {
            id: 'blue-steel-tong-part',
            name: 'Blue Steel Tong Part',
            img: 'img/tong_part/blue_steel.png',
            last3: ['hit', 'draw', 'bend'],
            recipeId: 'tfchotornot:anvil/tong_part/blue_steel'
          },
          {
            id: 'blue-steel-chain',
            name: 'Blue Steel Chain',
            img: 'img/chain/blue_steel.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/blue_steel_chain'
          },
          {
            id: 'blue-steel-mattock-head',
            name: 'Blue Steel Mattock Head',
            img: 'img/mattock_head/blue_steel.png',
            last3: ['punch', 'punch', 'bend'],
            recipeId: 'rnr:anvil/blue_steel_mattock_head'
          },
          {
            id: 'blue-steel-saw-blade',
            name: 'Blue Steel Saw Blade',
            img: 'img/tool_head_saw.png',
            last3: ['hit', 'hit'],
            recipeId: 'tfc:anvil/blue_steel_saw_blade'
          },
          {
            id: 'blue-steel-screwdriver-tip',
            name: 'Blue Steel Screwdriver Tip',
            img: 'img/tool_head_screwdriver.png',
            overlay: 'img/tool_head_screwdriver_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/blue_steel_screwdriver_tip'
          },
          {
            id: 'blue-steel-small-gear',
            name: 'Blue Steel Small Gear',
            img: 'img/gear_small.png',
            overlay: 'img/gear_small_overlay.png',
            last3: ['hit', 'shrink', 'draw'],
            recipeId: 'tfc:anvil/blue_steel_small_gear'
          },
          {
            id: 'blue-steel-tfc-bars',
            name: 'Blue Steel Bars',
            img: 'img/bars/blue_steel.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/blue_steel_bars'
          }
        ]
      },
      {
        id: 'blue-steel-double-ingot',
        name: 'Blue Steel Double Ingot',
        img: 'img/double_ingot/blue_steel.png',
        presets: [
          {
            id: 'blue-steel-plate',
            name: 'Blue Steel Plate',
            img: 'img/plate/blue_steel.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/blue_steel_sheet'
          },
          {
            id: 'blue-steel-wire-cutter-head',
            name: 'Blue Steel Wire Cutter Head',
            img: 'img/tool_head_wire_cutter.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/blue_steel_wire_cutter_head'
          },
          {
            id: 'blue-steel-mace-head',
            name: 'Blue Steel Mace Head',
            img: 'img/mace_head/blue_steel.png',
            last3: ['hit', 'shrink', 'bend'],
            recipeId: 'tfc:anvil/blue_steel_mace_head'
          },
          {
            id: 'blue-steel-wrench-tip',
            name: 'Blue Steel Wrench Tip',
            img: 'img/tool_head_wrench.png',
            overlay: 'img/tool_head_wrench_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/blue_steel_wrench_tip'
          },
          {
            id: 'blue-steel-sword-blade',
            name: 'Blue Steel Sword Blade',
            img: 'img/tool_head_sword.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/blue_steel_sword_blade'
          },
          {
            id: 'blue-steel-scraping-knife-blade',
            name: 'Blue Steel Scraping Knife Blade',
            img: 'img/scraping_knife_blade/blue_steel.png',
            last3: ['hit', 'draw'],
            recipeId: 'tfc:anvil/blue_steel_scraping_knife_blade'
          },
          {
            id: 'blue-steel-spade-head',
            name: 'Blue Steel Spade Head',
            img: 'img/tool_head_spade.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/blue_steel_spade_head'
          },
          {
            id: 'blue-steel-mining-hammer-head',
            name: 'Blue Steel Mining Hammer Head',
            img: 'img/tool_head_mining_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/blue_steel_mining_hammer_head'
          },
          {
            id: 'blue-steel-tfc-bars-double',
            name: 'Blue Steel Bars - Double Ingot',
            img: 'img/bars/blue_steel.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/blue_steel_bars_double'
          }
        ]
      },
      {
        id: 'blue-steel-plate',
        name: 'Blue Steel Plate',
        img: 'img/plate/blue_steel.png',
        presets: [
          {
            id: 'blue-steel-trapdoor',
            name: 'Blue Steel Trapdoor',
            img: 'img/trapdoor/blue_steel.png',
            last3: ['bend', 'draw', 'draw'],
            recipeId: 'tfc:anvil/blue_steel_trapdoor'
          },
          {
            id: 'blue_steel_bucket',
            name: 'Blue Steel Bucket',
            img: 'img/_items/blue_steel_bucket.png',
            last3: ['bend', 'bend', 'bend'],
            recipeId: 'tfc:anvil/blue_steel_bucket'
          },
          {
            id: 'blue-steel-unfinished-boots',
            name: 'Blue Steel Unfinished Boots',
            img: 'img/unfinished_boots/blue_steel.png',
            last3: ['bend', 'bend', 'shrink'],
            recipeId: 'tfc:anvil/blue_steel_unfinished_boots'
          }
        ]
      },
      {
        id: 'blue-steel-double-plate',
        name: 'Blue Steel Double Plate',
        img: 'img/double_plate/blue_steel.png',
        presets: [
          {
            id: 'blue-steel-tuyere',
            name: 'Blue Steel Tuyere',
            img: 'img/tuyere/blue_steel.png',
            last3: ['bend', 'bend'],
            recipeId: 'tfc:anvil/blue_steel_tuyere'
          },
          {
            id: 'blue-steel-unfinished-helmet',
            name: 'Blue Steel Unfinished Helmet',
            img: 'img/unfinished_helmet/blue_steel.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/blue_steel_unfinished_helmet'
          },
          {
            id: 'blue-steel-unfinished-chestplate',
            name: 'Blue Steel Unfinished Chestplate',
            img: 'img/unfinished_chestplate/blue_steel.png',
            last3: ['hit', 'hit', 'upset'],
            recipeId: 'tfc:anvil/blue_steel_unfinished_chestplate'
          },
          {
            id: 'blue-steel-unfinished-greaves',
            name: 'Blue Steel Unfinished Greaves',
            img: 'img/unfinished_greaves/blue_steel.png',
            last3: [],
            recipeId: 'tfc:anvil/blue_steel_unfinished_greaves'
          },
          {
            id: 'blue-steel-shield',
            name: 'Blue Steel Shield',
            img: 'img/shield/blue_steel.png',
            last3: ['upset', 'bend', 'bend'],
            recipeId: 'tfc:anvil/blue_steel_shield'
          },
          {
            id: 'blue-steel-buzzsaw-blade',
            name: 'Blue Steel Buzzsaw Blade',
            img: 'img/tool_head_buzz_saw.png',
            last3: ['bend', 'hit', 'draw'],
            recipeId: 'tfc:anvil/blue_steel_buzzsaw_blade'
          }
        ]
      },
      {
        id: 'blue-steel-rod',
        name: 'Blue Steel Rod',
        img: 'img/rod.png',
        overlay: 'img/rod_overlay.png',
        presets: [
          {
            id: 'blue-steel-screw',
            name: 'Blue Steel Screw',
            img: 'img/screw.png',
            overlay: 'img/screw_overlay.png',
            last3: ['punch', 'punch', 'shrink'],
            recipeId: 'tfc:anvil/blue_steel_screw'
          },
          {
            id: 'blue-steel-bolt',
            name: 'Blue Steel Bolt',
            img: 'img/bolt.png',
            overlay: 'img/bolt_overlay.png',
            last3: ['punch', 'draw', 'draw'],
            recipeId: 'tfc:anvil/blue_steel_bolt'
          },
          {
            id: 'blue-steel-horseshoe',
            name: 'Blue Steel Horseshoe',
            img: 'img/horseshoe/blue_steel.png',
            last3: ['upset', 'bend', 'bend'],
            recipeId: 'sns:anvil/metal/horseshoe/blue_steel'
          }
        ]
      },
      {
        id: 'blue-steel-long-rod',
        name: 'Blue Steel Long Rod',
        img: 'img/rod_long.png',
        overlay: 'img/rod_long_overlay.png',
        presets: [
          {
            id: 'blue-steel-spring',
            name: 'Blue Steel Spring',
            img: 'img/spring.png',
            overlay: 'img/spring_overlay.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/blue_steel_spring'
          }
        ]
      }
    ]
  },
  {
    id: 'red-steel',
    name: 'Red Steel',
    img: 'img/ingot/red_steel.png',
    color: getMaterialById('red-steel').color,
    subcategories: [
      {
        id: 'high-carbon-red-steel',
        name: 'High Carbon Red Steel',
        img: 'img/ingot/high_carbon_red_steel.png',
        color: getMaterialById('high-carbon-red-steel').color,
        presets: [
          {
            id: 'red-steel-ingot',
            name: 'Red Steel Ingot',
            img: 'img/ingot/red_steel.png',
            color: getMaterialById('red-steel').color,
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/red_steel_ingot'
          }
        ]
      },
      {
        id: 'red-steel-ingot',
        name: 'Red Steel Ingot',
        img: 'img/ingot/red_steel.png',
        presets: [
          {
            id: 'red-steel-nugget',
            name: 'Red Steel Nugget',
            img: 'img/nugget.png',
            overlay: 'img/nugget_overlay.png',
            last3: ['punch', 'hit', 'punch'],
            recipeId: 'tfc:anvil/red_steel_nugget'
          },
          {
            id: 'red-steel-axe-head',
            name: 'Red Steel Axe Head',
            img: 'img/tool_head_axe.png',
            last3: ['punch', 'hit', 'upset'],
            recipeId: 'tfc:anvil/red_steel_axe_head'
          },
          {
            id: 'red-steel-javelin-head',
            name: 'Red Steel Javelin Head',
            img: 'img/javelin_head/red_steel.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/red_steel_javelin_head'
          },
          {
            id: 'red-steel-chisel-head',
            name: 'Red Steel Chisel Head',
            img: 'img/chisel_head/red_steel.png',
            last3: ['hit', 'hit', 'draw'],
            recipeId: 'tfc:anvil/red_steel_chisel_head'
          },
          {
            id: 'red-steel-shovel-head',
            name: 'Red Steel Shovel Head',
            img: 'img/tool_head_shovel.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/red_steel_shovel_head'
          },
          {
            id: 'red-steel-pickaxe-head',
            name: 'Red Steel Pickaxe Head',
            img: 'img/tool_head_pickaxe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/red_steel_pickaxe_head'
          },
          {
            id: 'red-steel-rod',
            name: 'Red Steel Rod',
            img: 'img/rod.png',
            overlay: 'img/rod_overlay.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/red_steel_rod'
          },
          {
            id: 'red-steel-file-head',
            name: 'Red Steel File Head',
            img: 'img/tool_head_file.png',
            last3: ['upset', 'bend', 'punch'],
            recipeId: 'tfc:anvil/red_steel_file_head'
          },
          {
            id: 'red-steel-hammer-head',
            name: 'Red Steel Hammer Head',
            img: 'img/tool_head_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/red_steel_hammer_head'
          },
          {
            id: 'red-steel-knife-blade',
            name: 'Red Steel Knife Blade',
            img: 'img/tool_head_knife.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/red_steel_knife_blade'
          },
          {
            id: 'red-steel-propick-head',
            name: 'Red Steel Prospector’s Pick Head',
            img: 'img/propick_head/red_steel.png',
            last3: ['punch', 'draw', 'bend'],
            recipeId: 'tfc:anvil/red_steel_propick_head'
          },
          {
            id: 'red-steel-fish-hook',
            name: 'Red Steel Fish Hook',
            img: 'img/fish_hook/red_steel.png',
            last3: [],
            recipeId: 'tfc:anvil/red_steel_fish_hook'
          },
          {
            id: 'red-steel-scythe-blade',
            name: 'Red Steel Scythe Blade',
            img: 'img/tool_head_scythe.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/red_steel_scythe_blade'
          },
          {
            id: 'red-steel-butchery-knife-head',
            name: 'Red Steel Butchery Knife Head',
            img: 'img/tool_head_butchery_knife.png',
            last3: ['punch', 'bend'],
            recipeId: 'tfc:anvil/red_steel_knife_butchery_head'
          },
          {
            id: 'red-steel-lamp',
            name: 'Red Steel Unfinished Lamp',
            img: 'img/unfinished_lamp/red_steel.png',
            last3: ['bend', 'bend', 'draw'],
            recipeId: 'tfc:anvil/red_steel_lamp'
          },
          {
            id: 'red-steel-hoe-head',
            name: 'Red Steel Hoe Head',
            img: 'img/tool_head_hoe.png',
            last3: ['punch', 'hit', 'bend'],
            recipeId: 'tfc:anvil/red_steel_hoe_head'
          },
          {
            id: 'red-steel-tong-part',
            name: 'Red Steel Tong Part',
            img: 'img/tong_part/red_steel.png',
            last3: ['hit', 'draw', 'bend'],
            recipeId: 'tfchotornot:anvil/tong_part/red_steel'
          },
          {
            id: 'red-steel-chain',
            name: 'Red Steel Chain',
            img: 'img/chain/red_steel.png',
            last3: ['draw'],
            recipeId: 'tfc:anvil/red_steel_chain'
          },
          {
            id: 'red-steel-mattock-head',
            name: 'Red Steel Mattock Head',
            img: 'img/mattock_head/red_steel.png',
            last3: ['punch', 'punch', 'bend'],
            recipeId: 'rnr:anvil/red_steel_mattock_head'
          },
          {
            id: 'red-steel-saw-blade',
            name: 'Red Steel Saw Blade',
            img: 'img/tool_head_saw.png',
            last3: ['hit', 'hit'],
            recipeId: 'tfc:anvil/red_steel_saw_blade'
          },
          {
            id: 'red-steel-screwdriver-tip',
            name: 'Red Steel Screwdriver Tip',
            img: 'img/tool_head_screwdriver.png',
            overlay: 'img/tool_head_screwdriver_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/red_steel_screwdriver_tip'
          },
          {
            id: 'red-steel-tfc-bars',
            name: 'Red Steel Bars',
            img: 'img/bars/red_steel.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/red_steel_bars'
          }
        ]
      },
      {
        id: 'red-steel-double-ingot',
        name: 'Red Steel Double Ingot',
        img: 'img/double_ingot/red_steel.png',
        presets: [
          {
            id: 'red-steel-plate',
            name: 'Red Steel Plate',
            img: 'img/plate/red_steel.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/red_steel_sheet'
          },
          {
            id: 'red-steel-wire-cutter-head',
            name: 'Red Steel Wire Cutter Head',
            img: 'img/tool_head_wire_cutter.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/red_steel_wire_cutter_head'
          },
          {
            id: 'red-steel-mace-head',
            name: 'Red Steel Mace Head',
            img: 'img/mace_head/red_steel.png',
            last3: ['hit', 'shrink', 'bend'],
            recipeId: 'tfc:anvil/red_steel_mace_head'
          },
          {
            id: 'red-steel-wrench-tip',
            name: 'Red Steel Wrench Tip',
            img: 'img/tool_head_wrench.png',
            overlay: 'img/tool_head_wrench_overlay.png',
            last3: ['draw', 'hit', 'hit'],
            recipeId: 'tfc:anvil/red_steel_wrench_tip'
          },
          {
            id: 'red-steel-sword-blade',
            name: 'Red Steel Sword Blade',
            img: 'img/tool_head_sword.png',
            last3: ['punch', 'bend', 'draw'],
            recipeId: 'tfc:anvil/red_steel_sword_blade'
          },
          {
            id: 'red-steel-scraping-knife-blade',
            name: 'Red Steel Scraping Knife Blade',
            img: 'img/scraping_knife_blade/red_steel.png',
            last3: ['hit', 'draw'],
            recipeId: 'tfc:anvil/red_steel_scraping_knife_blade'
          },
          {
            id: 'red-steel-spade-head',
            name: 'Red Steel Spade Head',
            img: 'img/tool_head_spade.png',
            last3: ['punch', 'hit'],
            recipeId: 'tfc:anvil/red_steel_spade_head'
          },
          {
            id: 'red-steel-mining-hammer-head',
            name: 'Red Steel Mining Hammer Head',
            img: 'img/tool_head_mining_hammer.png',
            last3: ['punch', 'shrink'],
            recipeId: 'tfc:anvil/red_steel_mining_hammer_head'
          },
          {
            id: 'red-steel-tfc-bars-double',
            name: 'Red Steel Bars - Double Ingot',
            img: 'img/bars/red_steel.png',
            last3: ['upset', 'punch', 'punch'],
            recipeId: 'tfc:anvil/red_steel_bars_double'
          }
        ]
      },
      {
        id: 'red-steel-plate',
        name: 'Red Steel Plate',
        img: 'img/plate/red_steel.png',
        presets: [
          {
            id: 'red-steel-trapdoor',
            name: 'Red Steel Trapdoor',
            img: 'img/trapdoor/red_steel.png',
            last3: ['bend', 'draw', 'draw'],
            recipeId: 'tfc:anvil/red_steel_trapdoor'
          },
          {
            id: 'red_steel_bucket',
            name: 'Red Steel Bucket',
            img: 'img/_items/red_steel_bucket.png',
            last3: ['bend', 'bend', 'bend'],
            recipeId: 'tfc:anvil/red_steel_bucket'
          },
          {
            id: 'red_steel_unfinished_flask',
            name: 'Red Steel Unfinished Flask',
            img: 'img/_items/red_steel_unfinished_flask.png',
            last3: ['punch', 'bend', 'bend'],
            recipeId: 'waterflasks:anvil/unfinished_red_steel_flask'
          },
          {
            id: 'red-steel-unfinished-boots',
            name: 'Red Steel Unfinished Boots',
            img: 'img/unfinished_boots/red_steel.png',
            last3: ['bend', 'bend', 'shrink'],
            recipeId: 'tfc:anvil/red_steel_unfinished_boots'
          }
        ]
      },
      {
        id: 'red-steel-double-plate',
        name: 'Red Steel Double Plate',
        img: 'img/double_plate/red_steel.png',
        presets: [
          {
            id: 'red-steel-tuyere',
            name: 'Red Steel Tuyere',
            img: 'img/tuyere/red_steel.png',
            last3: ['bend', 'bend'],
            recipeId: 'tfc:anvil/red_steel_tuyere'
          },
          {
            id: 'red-steel-unfinished-helmet',
            name: 'Red Steel Unfinished Helmet',
            img: 'img/unfinished_helmet/red_steel.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/red_steel_unfinished_helmet'
          },
          {
            id: 'red-steel-unfinished-chestplate',
            name: 'Red Steel Unfinished Chestplate',
            img: 'img/unfinished_chestplate/red_steel.png',
            last3: ['hit', 'hit', 'upset'],
            recipeId: 'tfc:anvil/red_steel_unfinished_chestplate'
          },
          {
            id: 'red-steel-unfinished-greaves',
            name: 'Red Steel Unfinished Greaves',
            img: 'img/unfinished_greaves/red_steel.png',
            last3: [],
            recipeId: 'tfc:anvil/red_steel_unfinished_greaves'
          },
          {
            id: 'red-steel-shield',
            name: 'Red Steel Shield',
            img: 'img/shield/red_steel.png',
            last3: ['upset', 'bend', 'bend'],
            recipeId: 'tfc:anvil/red_steel_shield'
          },
          {
            id: 'red-steel-buzzsaw-blade',
            name: 'Red Steel Buzzsaw Blade',
            img: 'img/tool_head_buzz_saw.png',
            last3: ['bend', 'hit', 'draw'],
            recipeId: 'tfc:anvil/red_steel_buzzsaw_blade'
          }
        ]
      },
      {
        id: 'red-steel-rod',
        name: 'Red Steel Rod',
        img: 'img/rod.png',
        overlay: 'img/rod_overlay.png',
        presets: [
          {
            id: 'red-steel-small-spring',
            name: 'Red Steel Small Spring',
            img: 'img/spring_small.png',
            overlay: 'img/spring_small_overlay.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/red_steel_small_spring'
          },
          {
            id: 'red-steel-ring',
            name: 'Red Steel Ring',
            img: 'img/ring.png',
            overlay: 'img/ring_overlay.png',
            last3: ['hit', 'hit', 'hit'],
            recipeId: 'tfc:anvil/red_steel_ring'
          },
          {
            id: 'red-steel-screw',
            name: 'Red Steel Screw',
            img: 'img/screw.png',
            overlay: 'img/screw_overlay.png',
            last3: ['punch', 'punch', 'shrink'],
            recipeId: 'tfc:anvil/red_steel_screw'
          },
          {
            id: 'red-steel-bolt',
            name: 'Red Steel Bolt',
            img: 'img/bolt.png',
            overlay: 'img/bolt_overlay.png',
            last3: ['punch', 'draw', 'draw'],
            recipeId: 'tfc:anvil/red_steel_bolt'
          },
          {
            id: 'red-steel-horseshoe',
            name: 'Red Steel Horseshoe',
            img: 'img/horseshoe/red_steel.png',
            last3: ['upset', 'bend', 'bend'],
            recipeId: 'sns:anvil/metal/horseshoe/red_steel'
          }
        ]
      },
      {
        id: 'red-steel-long-rod',
        name: 'Red Steel Long Rod',
        img: 'img/rod_long.png',
        overlay: 'img/rod_long_overlay.png',
        presets: [
          {
            id: 'red-steel-spring',
            name: 'Red Steel Spring',
            img: 'img/spring.png',
            overlay: 'img/spring_overlay.png',
            last3: ['hit', 'bend', 'bend'],
            recipeId: 'tfc:anvil/red_steel_spring'
          }
        ]
      }
    ]
  }
];

export function getPresetById(id) {
  return METALS.flatMap((metal) => metal.subcategories)
    .flatMap((subcategory) => subcategory.presets)
    .find((preset) => preset.id === id);
}
