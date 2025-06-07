Hooks.once("item-piles-ready", async () => {

	const data = {

		"VERSION": "1.0.0",

		// The actor class type is the type of actor that will be used for the default item pile actor that is created on first item drop.
		"ACTOR_CLASS_TYPE": "character",

		// The item quantity attribute is the path to the attribute on items that denote how many of that item that exists
		"ITEM_QUANTITY_ATTRIBUTE": "",

		// The item price attribute is the path to the attribute on each item that determine how much it costs
		"ITEM_PRICE_ATTRIBUTE": "",

		// Item filters actively remove items from the item pile inventory UI that users cannot loot, such as spells, feats, and classes
		"ITEM_FILTERS": [],

		// This function is an optional system handler that specifically transforms an item when it is added to actors, eg turns it into a spell scroll if it was a spell
		"ITEM_TRANSFORMER": async (itemData) => {
			return itemData;
		},

		// This function is an optional system handler that specifically transforms an item's price into a more unified numeric format
		// READ: OPTIONAL - this is ONLY NEEDED if your system's price attribute is NOT a number
		"ITEM_COST_TRANSFORMER": (item, currencies, price_property) => {
			return Number(foundry.utils.getProperty(item, price_property)) ?? 0;
		},

		"PILE_DEFAULTS": {},

		// Item similarities determines how item piles detect similarities and differences in the system
		"ITEM_SIMILARITIES": ["name", "type"],

		// Currencies in item piles is a versatile system that can accept actor attributes (a number field on the actor's sheet) or items (actual items in their inventory)
		// In the case of attributes, the path is relative to the "actor.system"
		// In the case of items, it is recommended you export the item with `.toObject()` and strip out any module data
		"CURRENCIES": [],

		"VAULT_STYLES": [],

		"SYSTEM_HOOKS": () => {}

	}

	await game.itempiles.API.addSystemIntegration(data);

});