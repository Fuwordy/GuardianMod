function newLevel(hasLevel) {
  clientMessage("Guardian Mod");
  clientMessage("by:");
  clientMessage("§7DanHerePE");
  clientMessage("§CJoePaleto");
  clientMessage("§3Xriomedabeast");
}

function useItem(x, y, z, itemId, blockId, side) {
}

function modTick() {
}

function attackHook(attacker, victim) {
}

function deathHook(attacker, victim) {
}

function spawnGuardian(x, y, z, health, skin) { // am I doing it right?
  var guardian = Level.spawnMob(x, y, z, 36, skin); // entityId still pending to be decided!!!
  Entity.setHealth(guardian, health);
}
